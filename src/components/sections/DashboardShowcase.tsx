import { useId, useState } from 'react'
import {
  RLS_POLICIES,
  SIDEBAR_ITEMS,
  SQL_RESULT_COLUMNS,
  SQL_RESULT_ROWS,
  SQL_SAMPLE,
  TABLE_COLUMNS,
} from '../../data/dashboard'
import { Reveal } from '../primitives/Reveal'
import { TabPanel, Tabs, type TabItem } from '../primitives/Tabs'
import './DashboardShowcase.css'

const TABS: TabItem[] = [
  { id: 'table-editor', label: 'Table Editor' },
  { id: 'sql-editor', label: 'SQL Editor' },
  { id: 'rls-policies', label: 'RLS Policies' },
]

/**
 * The original presents this section as a static screenshot. Rebuilding it in
 * markup means it follows the active theme, stays sharp at any pixel density and
 * reflows on narrow screens — none of which an image would do.
 */
export function DashboardShowcase() {
  const baseId = useId()
  const [activeTab, setActiveTab] = useState(TABS[0].id)

  return (
    <section className="dashboard section" id="dashboard">
      <div className="shell">
        <Reveal>
          <h2 className="heading-2 dashboard__headline">
            Stay productive and manage your app
            <br />
            <span className="display__muted">without leaving the dashboard</span>
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <Tabs
            className="dashboard__tabs"
            items={TABS}
            activeId={activeTab}
            onChange={setActiveTab}
            label="Dashboard features"
            baseId={baseId}
          />
        </Reveal>

        <Reveal delay={140}>
          <TabPanel baseId={baseId} tabId={activeTab} className="dashboard__panel">
            <div className="dash">
              <div className="dash__chrome" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <div className="dash__body">
                <aside className="dash__sidebar" aria-hidden="true">
                  <p className="dash__sidebar-label">Tables</p>
                  <ul>
                    {SIDEBAR_ITEMS.map((item, index) => (
                      <li key={item} data-active={index === 0 || undefined}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </aside>

                <div className="dash__content">
                  {activeTab === 'table-editor' && <TableEditor />}
                  {activeTab === 'sql-editor' && <SqlEditor />}
                  {activeTab === 'rls-policies' && <RlsPolicies />}
                </div>
              </div>
            </div>
          </TabPanel>
        </Reveal>
      </div>
    </section>
  )
}

function TableEditor() {
  return (
    <div className="editor">
      <header className="editor__head">
        <h3 className="editor__title">Columns</h3>
        <div className="editor__head-actions">
          <span className="chip">About data types</span>
          <span className="chip">Import data via spreadsheet</span>
        </div>
      </header>

      <div className="columns" role="table" aria-label="Table columns">
        <div className="columns__row columns__row--head" role="row">
          <span role="columnheader">Name</span>
          <span role="columnheader">Type</span>
          <span role="columnheader">Default Value</span>
          <span role="columnheader">Primary</span>
          <span role="columnheader" aria-label="Constraints" />
        </div>

        {TABLE_COLUMNS.map((column) => (
          <div className="columns__row" role="row" key={column.name}>
            <span className="field" role="cell">
              {column.name}
            </span>
            <span className="field field--select" role="cell">
              {column.type}
            </span>
            <span className="field field--muted" role="cell">
              {column.defaultValue}
            </span>
            <span className="columns__primary" role="cell">
              <i className="checkbox" data-checked={column.isPrimary || undefined} />
            </span>
            <span className="columns__meta" role="cell">
              {column.badge && <i className="badge">{column.badge}</i>}
            </span>
          </div>
        ))}
      </div>

      <button type="button" className="editor__add">
        Add column
      </button>
    </div>
  )
}

function SqlEditor() {
  return (
    <div className="editor">
      <header className="editor__head">
        <h3 className="editor__title">New query</h3>
        <div className="editor__head-actions">
          <span className="chip">Format</span>
          <span className="chip chip--solid">Run</span>
        </div>
      </header>

      <pre className="sql">{SQL_SAMPLE}</pre>

      <table className="results">
        <thead>
          <tr>
            {SQL_RESULT_COLUMNS.map((column) => (
              <th key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SQL_RESULT_ROWS.map(([code, cities]) => (
            <tr key={code}>
              <td>{code}</td>
              <td>{cities}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function RlsPolicies() {
  return (
    <div className="editor">
      <header className="editor__head">
        <h3 className="editor__title">Policies</h3>
        <div className="editor__head-actions">
          <span className="chip chip--solid">New policy</span>
        </div>
      </header>

      <ul className="policies">
        {RLS_POLICIES.map((policy) => (
          <li className="policies__item" key={policy.name}>
            <span className="policies__name">{policy.name}</span>
            <span className="policies__target">{policy.target}</span>
            <span className="policies__command">{policy.command}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
