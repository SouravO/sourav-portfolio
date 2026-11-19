import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Sparkle,
  PaperPlaneTilt,
  Stop,
  WarningCircle,
} from '@phosphor-icons/react'
import { sources } from '../data/portfolio'

export default function Chat({ projectId }) {
  const [messages, setMessages] = useState([])
  const [question, setQuestion] = useState('')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')
  const [lastQuestion, setLastQuestion] = useState('')
  const [remaining, setRemaining] = useState(null)
  const controller = useRef(null)
  const log = useRef(null)
  useEffect(() => () => controller.current?.abort(), [])
  useEffect(() => {
    if (log.current) log.current.scrollTop = log.current.scrollHeight
  }, [messages, pending])
  async function ask(text) {
    const value = text.trim()
    if (!value || pending) return
    setLastQuestion(value)
    setQuestion('')
    setError('')
    setPending(true)
    const history = messages
      .slice(-6)
      .map(({ role, content }) => ({ role, content }))
    setMessages((prev) => [
      ...prev.slice(-19),
      { role: 'user', content: value },
    ])
    controller.current = new AbortController()
    const timeout = setTimeout(() => controller.current?.abort(), 30000)
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: value, history, projectId }),
        signal: controller.current.signal,
      })
      const result = await response.json()
      if (!response.ok)
        throw new Error(
          result.error ||
            'The assistant is unavailable. Explore the curated workspace instead.',
        )
      setRemaining(result.remaining)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: result.answer,
          sources: result.sources.filter((s) =>
            sources.some((known) => known.id === s.id && known.href === s.href),
          ),
        },
      ])
    } catch (err) {
      setError(
        err.name === 'AbortError'
          ? 'Request stopped. You can try again or explore the curated perspectives.'
          : err.message,
      )
    } finally {
      clearTimeout(timeout)
      setPending(false)
    }
  }
  return (
    <div className="chat-shell">
      <div
        className="chat-log"
        ref={log}
        role="log"
        aria-label="Portfolio conversation"
        tabIndex={0}
      >
        {!messages.length && (
          <div className="chat-welcome">
            <Sparkle size={28} />
            <h3>Curious about the work?</h3>
            <p>Ask about my projects, technical approach, or background.</p>
            <div className="suggestions">
              {[
                'What has Sourav shipped?',
                'How does the CRM work?',
                'What is planned for NOTWO?',
              ].map((text) => (
                <button key={text} onClick={() => ask(text)}>
                  {text}
                </button>
              ))}
            </div>
          </div>
        )}
        {messages.map((message, i) => (
          <div className={`chat-message ${message.role}`} key={i}>
            <span className="agent-name">
              {message.role === 'user' ? 'You' : 'Portfolio assistant'}
            </span>
            <p>{message.content}</p>
            {message.sources?.length > 0 && (
              <div className="answer-sources">
                {message.sources.map((source) => (
                  <Link key={source.id} to={source.href}>
                    {source.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        {pending && (
          <p className="chat-thinking" role="status">
            Finding the relevant context…
          </p>
        )}
      </div>
      {error && (
        <div className="chat-error" role="alert">
          <WarningCircle size={18} />
          <span>{error}</span>
          <button onClick={() => ask(lastQuestion)}>Retry</button>
        </div>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          ask(question)
        }}
        className="chat-form"
      >
        <label htmlFor="ai-question">Ask about my work</label>
        <div className="chat-input-row">
          <input
            id="ai-question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Your question…"
            maxLength={1000}
            disabled={pending}
            autoComplete="off"
          />
          {pending ? (
            <button
              type="button"
              onClick={() => controller.current?.abort()}
              aria-label="Stop response"
            >
              <Stop size={19} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!question.trim()}
              aria-label="Send question"
            >
              <PaperPlaneTilt size={19} />
            </button>
          )}
        </div>
      </form>
      <p className="input-note">
        Questions are sent to OpenAI. Chat stays in this tab.
        {remaining !== null
          ? ` ${remaining} requests left this hour.`
          : ' 5 requests per hour.'}{' '}
        AI can make mistakes; project pages are the source of truth.
      </p>
    </div>
  )
}
