import { lazy, Suspense, useState } from 'react'
import {
  Brain,
  Code,
  Cube,
  Terminal,
  Sparkle,
  Check,
} from '@phosphor-icons/react'
import { projects, profile, skills } from '../data/portfolio'
import FlowDiagram from './FlowDiagram'
const Chat = lazy(() => import('./Chat'))
const perspectives = [
  { name: 'Product', icon: Brain },
  { name: 'Architecture', icon: Cube },
  { name: 'Engineering', icon: Code },
]
const commands = {
  help: 'Available commands: help, about, projects, stack, contact, clear. For open questions, switch to Ask AI.',
  about: `${profile.name} · ${profile.role}\n${profile.experience} in software development. Based in ${profile.location}.`,
  projects: projects.map((p) => `${p.name}: ${p.status}`).join('\n'),
  stack: skills.map((s) => `${s.name}: ${s.items.join(', ')}`).join('\n'),
  contact: `Email: ${profile.email}`,
}

function LocalTerminal() {
  const [input, setInput] = useState('')
  const [lines, setLines] = useState([{ command: 'help', text: commands.help }])
  function run(e) {
    e.preventDefault()
    const command = input.trim().toLowerCase()
    if (!command) return
    setInput('')
    if (command === 'clear') return setLines([])
    setLines((prev) => [
      ...prev.slice(-11),
      {
        command: input.trim(),
        text:
          commands[command] || `Command not found: ${input.trim()}. Try help.`,
      },
    ])
  }
  return (
    <div className="local-terminal">
      <div
        className="terminal-output"
        role="log"
        aria-label="Terminal output"
        tabIndex={0}
      >
        {lines.length ? (
          lines.map((line, i) => (
            <div key={i}>
              <p className="terminal-command">
                <span>~</span> {line.command}
              </p>
              <p>{line.text}</p>
            </div>
          ))
        ) : (
          <p>Terminal cleared. Type help to start again.</p>
        )}
      </div>
      <form onSubmit={run} className="terminal-form">
        <label htmlFor="terminal-command">
          <span aria-hidden="true">❯</span>
          <span className="sr-only">Terminal command</span>
        </label>
        <input
          id="terminal-command"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
          spellCheck="false"
          placeholder="Type a command…"
          maxLength={100}
        />
        <button type="submit">Run</button>
      </form>
      <p className="input-note">Local commands. No AI request required.</p>
    </div>
  )
}

export default function Workspace({ onPerspectiveChange, initialMode = 'explore' }) {
  const [projectId, setProjectId] = useState('cyd')
  const [perspective, setPerspective] = useState('Architecture')
  const [mode, setMode] = useState(initialMode)
  const project = projects.find((p) => p.id === projectId)
  return (
    <div className="workspace">
      <div className="workspace-top">
        <div className="workspace-brand">
          <Cube size={18} />
          <span>sourav / workspace</span>
        </div>
        <span className="workspace-caption">A peek inside my process</span>
      </div>
      <div className="workspace-layout">
        <aside className="workspace-sidebar" aria-label="Workspace projects">
          <span className="sidebar-label">PROJECTS</span>
          {projects.map((p) => (
            <button
              key={p.id}
              className={
                projectId === p.id ? 'project-switch active' : 'project-switch'
              }
              onClick={() => setProjectId(p.id)}
              aria-pressed={projectId === p.id}
            >
              <span className="project-initial" aria-hidden="true">
                {p.id === 'cyd'
                  ? 'C'
                  : p.id === 'crm'
                    ? 'D'
                    : p.id === 'notwo'
                      ? 'N'
                      : 'F'}
              </span>
              {p.name}
              {projectId === p.id && <Check size={14} />}
            </button>
          ))}
          <div className="sidebar-bottom">
            <span className="status-dot" />
            Curated knowledge
            <br />
            <span className="sidebar-muted">
              Real projects. Honest context.
            </span>
          </div>
        </aside>
        <div className="workspace-main">
          <div className="workspace-toolbar">
            <div className="workspace-tabs" aria-label="Workspace mode">
              {[
                { id: 'explore', title: 'Explore', icon: Cube },
                { id: 'terminal', title: 'Terminal', icon: Terminal },
                { id: 'chat', title: 'Ask AI', icon: Sparkle },
              ].map(({ id, title, icon: Icon }) => (
                <button
                  key={id}
                  className={mode === id ? 'active' : ''}
                  onClick={() => setMode(id)}
                  aria-pressed={mode === id}
                >
                  <Icon size={16} />
                  {title}
                </button>
              ))}
            </div>
            <span className="mode-label">
              {mode === 'chat'
                ? 'LIVE ASSISTANT'
                : mode === 'terminal'
                  ? 'LOCAL SHELL'
                  : 'CURATED EXPLORER'}
            </span>
          </div>
          {mode === 'explore' && (
            <div className="explorer">
              <div
                className="perspective-tabs"
                aria-label="Project perspective"
              >
                {perspectives.map(({ name, icon: Icon }, i) => (
                  <button
                    key={name}
                    onClick={() => {
                      setPerspective(name)
                      onPerspectiveChange(i)
                    }}
                    aria-pressed={perspective === name}
                    className={perspective === name ? 'active' : ''}
                  >
                    <Icon size={17} />
                    {name}
                  </button>
                ))}
              </div>
              <div className="explorer-heading">
                <div>
                  <p className="text-muted">{project.category}</p>
                  <h3>{project.name}</h3>
                </div>
                <span className="small-status">{project.status}</span>
              </div>
              <FlowDiagram project={project} compact />
              <div className="agent-response">
                <div className="agent-avatar">
                  <Cube size={20} />
                </div>
                <div>
                  <span className="agent-name">
                    {perspective} perspective <span>· Curated</span>
                  </span>
                  <p key={`${projectId}-${perspective}`}>
                    {project.perspectives[perspective]}
                  </p>
                </div>
              </div>
              <p className="workspace-disclosure">
                Agent perspectives are an interactive presentation of my work,
                not autonomous development agents.
              </p>
            </div>
          )}
          {mode === 'terminal' && <LocalTerminal />}
          {mode === 'chat' && (
            <Suspense
              fallback={
                <div className="chat-shell">
                  <p>Loading assistant…</p>
                </div>
              }
            >
              <Chat projectId={projectId} />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  )
}
