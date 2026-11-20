import { ArrowRight, Code, TreeStructure, UsersThree } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import './Strengths.css'

const strengths = [
  {
    title: 'Build across the stack',
    icon: Code,
    label: 'Hands-on engineering',
    text: 'I connect interfaces, APIs, and data into working products. On Check Your Deals, my work spans discovery, search, product pages, and affiliate integration.',
    evidence: 'Explore Check Your Deals',
    href: '/work/check-your-deals',
  },
  {
    title: 'Lead with the whole system in mind',
    icon: TreeStructure,
    label: 'Technical ownership',
    text: 'At Day One Venture Studio, my CTO/technical leadership work covered product planning, architecture, startup projects, and internal systems.',
    evidence: 'See my experience',
    href: '/#about',
  },
  {
    title: 'Turn workflows into useful software',
    icon: UsersThree,
    label: 'Product thinking',
    text: 'Day One CRM connects founders, venture managers, and execution teams through shared dashboards, assignments, approvals, and progress tracking.',
    evidence: 'Explore Day One CRM',
    href: '/work/day-one-crm',
  },
]

export default function Strengths() {
  return (
    <section id="strengths" className="strengths-section" aria-labelledby="strengths-title">
      <header className="strengths-heading">
        <p className="eyebrow">THE BUILDER BEHIND THE WORK</p>
        <h2 id="strengths-title">What I bring to the table.</h2>
        <p className="strengths-intro">I connect hands-on engineering, product thinking, and technical ownership.</p>
      </header>
      <div className="strengths-panels">
        {strengths.map(({ title, icon: Icon, label, text, evidence, href }, index) => (
          <article className="strength-panel" key={title}>
            <div className="strength-panel-top" aria-hidden="true">
              <span>0{index + 1}</span><Icon size={32} weight="duotone" />
            </div>
            <p className="strength-label">{label}</p>
            <h3>{title}</h3>
            <p className="strength-description">{text}</p>
            <Link className="strength-evidence" to={href}>
              {evidence}<ArrowRight size={20} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
