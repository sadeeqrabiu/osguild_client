import { useId, useState } from 'react'
import { FRAMEWORKS } from '../../data/frameworks'
import { ArrowUpRight } from '../icons'
import { ButtonLink } from '../primitives/Button'
import { CodeBlock } from '../primitives/CodeBlock'
import { Reveal } from '../primitives/Reveal'
import { TabPanel, Tabs, type TabItem } from '../primitives/Tabs'
import './FrameworkQuickstart.css'

/*
 * The tab strip is icon-only, as in the original. Each tab carries its framework
 * name as an accessible name so the control is still usable without recognising
 * the logo.
 */
const TABS: TabItem[] = FRAMEWORKS.map((framework) => {
  const Mark = framework.mark

  return {
    id: framework.id,
    label: <Mark />,
    accessibleName: framework.name,
  }
})

export function FrameworkQuickstart() {
  const baseId = useId()
  const [activeId, setActiveId] = useState(FRAMEWORKS[0].id)
  const active = FRAMEWORKS.find((framework) => framework.id === activeId) ?? FRAMEWORKS[0]

  return (
    <section className="quickstart section" id="quickstart">
      <div className="shell quickstart__inner">
        <Reveal>
          <h2 className="heading-2 quickstart__headline">
            <span className="display__muted">Use Supabase with</span>
            <br />
            {/* Keyed on the framework so the name re-animates on every switch. */}
            <span className="quickstart__name" key={active.id}>
              {active.name}
            </span>
          </h2>
        </Reveal>

        <Reveal delay={80} className="quickstart__panel">
          <Tabs
            className="quickstart__tabs"
            variant="icon"
            items={TABS}
            activeId={activeId}
            onChange={setActiveId}
            label="Framework"
            baseId={baseId}
          />

          <TabPanel baseId={baseId} tabId={activeId} className="quickstart__body">
            <CodeBlock code={active.code} />

            <div className="quickstart__footer">
              <ButtonLink
                variant="secondary"
                size="sm"
                href={active.docsHref}
                trailing={<ArrowUpRight />}
              >
                Read docs for {active.name}
              </ButtonLink>
            </div>
          </TabPanel>
        </Reveal>
      </div>
    </section>
  )
}
