import { useId, useState } from 'react'
import { MagnifyingGlass, Browsers, LinkSimple, UsersThree, ListChecks, ChartBar, Asterisk } from '@phosphor-icons/react'

const views = {
  cyd: [
    { label: 'Discover', icon: MagnifyingGlass, title: 'Find an offer worth opening.', text: 'Deal listings, search, and category navigation bring marketplace offers into one discovery experience.', nodes: ['Deal listings', 'Search', 'Categories'] },
    { label: 'Explore', icon: Browsers, title: 'Give each product its own context.', text: 'Product detail pages let shoppers explore an offer before continuing to its marketplace destination.', nodes: ['Selected offer', 'Product details', 'Destination'] },
    { label: 'Connect', icon: LinkSimple, title: 'Connect discovery to the marketplace.', text: 'Affiliate links connect the product experience with the destination store. Further discovery and update automation is planned.', nodes: ['Product page', 'Affiliate link', 'Marketplace'] },
  ],
  crm: [
    { label: 'People', icon: UsersThree, title: 'One system, different responsibilities.', text: 'Role-based dashboards connect founders, venture managers, and execution teams around the work.', nodes: ['Founders', 'Venture managers', 'Execution teams'] },
    { label: 'Execution', icon: ListChecks, title: 'Keep assignments and approvals connected.', text: 'Task management, assignment, and approval workflows give teams a shared structure for execution.', nodes: ['Task assignment', 'Team execution', 'Approvals'] },
    { label: 'Progress', icon: ChartBar, title: 'Make weekly progress visible.', text: 'Weekly tracking, performance metrics, founder health scoring, and team leaderboards support the internal workflow.', nodes: ['Weekly updates', 'Progress metrics', 'Health scoring'] },
  ],
}

export default function ProductMap({ project, headingLevel = 4 }) {
  const [selected, setSelected] = useState(0)
  const contentId = useId()
  const view = views[project.id][selected]
  const Icon = view.icon
  const Heading = `h${headingLevel}`
  return (
    <div className={`product-map product-map-${project.id}`} aria-label={`${project.name} interactive product map`}>
      <div className="map-masthead"><span><Asterisk size={15} weight="bold" /> INSIDE THE PRODUCT</span><span>WORKFLOW</span></div>
      <div className="map-controls" role="group" aria-label={`${project.name} product views`}>
        {views[project.id].map((item, index) => <button key={item.label} aria-pressed={selected === index} aria-controls={contentId} onClick={() => setSelected(index)}>{item.label}</button>)}
      </div>
      <div className="map-canvas" id={contentId} aria-live="polite" aria-atomic="true">
        <div className="map-lead"><span className="map-lead-icon"><Icon size={30} weight="duotone" /></span><span>{project.id === 'cyd' ? 'THE SHOPPER’S PATH' : 'THE TEAM’S WORKFLOW'}</span></div>
        <div className="map-nodes">{view.nodes.map((node, i) => <div className={i === 1 ? 'map-node map-node-center' : 'map-node'} key={node}><span>{node}</span>{i < 2 && <span className="map-wire" aria-hidden="true" />}</div>)}</div>
        <Heading>{view.title}</Heading><p>{view.text}</p>
      </div>
    </div>
  )
}
