import {
  TreeStructure,
  Database,
  Stack,
  CirclesThree,
} from '@phosphor-icons/react'
const icons = [Stack, Database, TreeStructure, CirclesThree]
export default function FlowDiagram({ project, compact = false }) {
  return (
    <figure className={`flow-diagram ${compact ? 'compact' : ''}`}>
      <div className="flow-nodes">
        {project.flow.map((step, i) => {
          const Icon = icons[i]
          return (
            <div className="flow-node" key={step}>
              <Icon size={22} weight="light" />
              <span>{step}</span>
              {i < project.flow.length - 1 && (
                <span className="flow-connector" aria-hidden="true" />
              )}
            </div>
          )
        })}
      </div>
      <figcaption>
        Explanatory flow
        {project.kind === 'concept'
          ? ' · Proposed architecture'
          : ' · Public-safe overview'}
      </figcaption>
    </figure>
  )
}
