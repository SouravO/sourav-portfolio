import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, CaretLeft, CaretRight, Flashlight, MagnifyingGlass, X } from '@phosphor-icons/react'
import { createPortal } from 'react-dom'
import { boardProfile, lifeChapters, personalClues } from '../data/lifeBoard'
import '../detective-board.css'

const entries = [boardProfile, ...lifeChapters, ...personalClues]
const connections = [['college', 'media'], ['media', 'studio'], ['studio', 'frontier'], ...entries.filter(item => item.id !== 'sourav').map(item => ['sourav', item.id])]
const imageFor = item => item.image || `/illustrations/life-board/${item.id}.webp`

function Threads({ boardRef }) {
  const svgRef = useRef(null)
  useEffect(() => {
    const board = boardRef.current
    let frame
    let disposed = false
    function measure() {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (disposed) return
        const bounds = board.getBoundingClientRect()
        const pins = Object.fromEntries(entries.map(item => {
          const pin = board.querySelector(`.life-card-${item.id} .life-pin`).getBoundingClientRect()
          return [item.id, {
            x: (pin.left + pin.width / 2 - bounds.left - board.clientLeft) / board.clientWidth * 100,
            y: (pin.top + pin.height / 2 - bounds.top - board.clientTop) / board.clientHeight * 100,
          }]
        }))
        svgRef.current.querySelectorAll('line').forEach(line => {
          const from = pins[line.dataset.from]
          const to = pins[line.dataset.to]
          line.setAttribute('x1', from.x)
          line.setAttribute('y1', from.y)
          line.setAttribute('x2', to.x)
          line.setAttribute('y2', to.y)
        })
      })
    }
    const observer = new ResizeObserver(measure)
    observer.observe(board)
    window.addEventListener('resize', measure)
    document.fonts.ready.then(() => { if (!disposed) measure() })
    measure()
    return () => { disposed = true; cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener('resize', measure) }
  }, [boardRef])
  const mobileConnections = entries.slice(1).map((item, index) => [entries[index].id, item.id])
  return <svg ref={svgRef} className="life-threads" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
    {[...connections.map(pair => ({ pair, mode: 'desktop' })), ...mobileConnections.map(pair => ({ pair, mode: 'mobile' }))].map(({ pair: [from, to], mode }, index) => <line key={index} data-from={from} data-to={to} className={`life-thread-${mode}`} />)}
  </svg>
}

function Portrait({ item, sizes }) {
  const [failed, setFailed] = useState(false)
  return <img src={failed ? boardProfile.image : imageFor(item)} srcSet={failed || item.image ? undefined : `/illustrations/life-board/${item.id}-small.webp 400w, ${imageFor(item)} 800w`} sizes={sizes} alt={failed ? 'Illustrated portrait of Sourav; chapter artwork unavailable' : item.alt} width="800" height="800" loading="lazy" onError={() => setFailed(true)} />
}

function Inspector({ selected, onClose, onSelect }) {
  const dialogRef = useRef(null)
  const item = entries[selected]
  useEffect(() => {
    const dialog = dialogRef.current
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialog.showModal()
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      previousFocus?.focus({ preventScroll: true })
    }
  }, [])
  const move = delta => onSelect((selected + delta + entries.length) % entries.length)
  return createPortal(
    <dialog ref={dialogRef} className="life-inspector" aria-labelledby="life-inspector-title" onCancel={event => { event.preventDefault(); onClose() }} onClick={event => { if (event.target === event.currentTarget) onClose() }}>
      <div className="life-inspector-sheet">
        <div className="life-inspector-bar"><span>THE SOURAV FILE / {String(selected + 1).padStart(2, '0')}</span><button type="button" autoFocus onClick={onClose} aria-label="Close chapter"><X size={22} /></button></div>
        <div className="life-inspector-grid">
          <figure><Portrait key={item.id} item={item} sizes="(max-width: 700px) 85vw, 440px" /><figcaption>{item.caption}</figcaption></figure>
          <div className="life-inspector-copy" aria-live="polite"><p className="life-eyebrow">{item.era || 'Away from the keyboard'}</p><h3 id="life-inspector-title">{item.title}</h3><p>{item.story}</p>{item.tags && <ul className="life-tags">{item.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>}<p className="life-art-note">An illustrated interpretation of this chapter.</p>{item.id === 'studio' && <a href="/work/day-one-crm">Explore Day One CRM <ArrowUpRight size={17} /></a>}</div>
        </div>
        <nav className="life-inspector-nav" aria-label="Chapter navigation"><button type="button" onClick={() => move(-1)}><CaretLeft size={18} /> Previous chapter</button><span>{selected + 1} / {entries.length}</span><button type="button" onClick={() => move(1)}>Next chapter <CaretRight size={18} /></button></nav>
      </div>
    </dialog>, document.body,
  )
}

export default function DetectiveBoard() {
  const [selected, setSelected] = useState(null)
  const [torch, setTorch] = useState(false)
  const boardRef = useRef(null)
  function followPointer(event) {
    if (!torch || event.pointerType === 'touch') return
    const rect = event.currentTarget.getBoundingClientRect()
    boardRef.current.style.setProperty('--light-x', `${event.clientX - rect.left}px`)
    boardRef.current.style.setProperty('--light-y', `${event.clientY - rect.top}px`)
  }
  return <section id="about" className="life-section" aria-labelledby="life-heading">
    <header className="life-header"><div><p className="life-eyebrow"><MagnifyingGlass size={16} /> THE SOURAV FILE · EXPERIENCE & LIFE</p><h2 id="life-heading">Same me.<br /><span>Different chapters.</span></h2></div><div className="life-header-note"><p>Follow the thread.<br />There’s a story behind every pin.</p><button type="button" className="life-torch" aria-pressed={torch} onClick={() => setTorch(value => !value)}><Flashlight size={17} /> Torch {torch ? 'on' : 'off'}</button></div></header>
    <div className={`life-board${torch ? ' life-board-lit' : ''}`} ref={boardRef} onPointerMove={followPointer}>
      <div className="life-board-label" aria-hidden="true">FIELD NOTES / AN ONGOING STORY</div>
      <Threads boardRef={boardRef} />
      {entries.map((item, index) => <button type="button" key={item.id} className={`life-card life-card-${item.id}${index > 4 ? ' life-card-personal' : ''}`} style={{ '--card-x': `${item.x}%`, '--card-y': `${item.y}%`, '--card-angle': `${item.rotation}deg`, '--card-order': index }} onClick={() => setSelected(index)}>
        <span className="life-pin" aria-hidden="true" />
        <span className="life-photo"><Portrait item={item} sizes={index === 0 ? '(max-width: 900px) 75vw, 330px' : '(max-width: 900px) 75vw, 260px'} />{item.number && <span className="life-chapter-number" aria-hidden="true">{item.number}</span>}</span>
        <span className="life-card-meta">{item.era || 'OFF THE CLOCK'}</span>
        <span className="life-card-title">{index > 4 ? item.label : item.label === 'The connecting thread' ? 'Sourav.' : item.label}</span>
        <span className="life-card-caption">{item.caption}</span>
        <span className="life-open-hint">{index > 4 ? 'A personal clue' : 'Open this chapter'} <ArrowUpRight size={14} /></span>
      </button>)}
      <aside className="life-handwritten"><span aria-hidden="true">↳</span> The connecting thread?<br /><strong>Never stop being curious.</strong></aside>
      <div className="life-light" aria-hidden="true" />
    </div>
    <footer className="life-footer"><p><span aria-hidden="true">●</span> A life in progress. More chapters to come.</p><a href="/?mode=chat#workspace">Ask about my work <ArrowUpRight size={17} /></a></footer>
    {selected !== null && <Inspector selected={selected} onClose={() => setSelected(null)} onSelect={setSelected} />}
  </section>
}
