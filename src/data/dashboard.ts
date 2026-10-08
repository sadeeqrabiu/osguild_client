/*
 * Mock content for the dashboard showcase.
 *
 * These are the values shown in the product screenshot being reproduced — not
 * marketing copy, but kept here anyway so the section component stays markup.
 */

export type ColumnRow = {
  name: string
  type: string
  defaultValue: string
  isPrimary?: boolean
  /** Rows the original marks as having a foreign-key or constraint badge. */
  badge?: number
}

export const TABLE_COLUMNS: ColumnRow[] = [
  { name: 'id', type: 'int8', defaultValue: 'NULL', isPrimary: true, badge: 1 },
  { name: 'created_at', type: 'timestamptz', defaultValue: 'now()' },
  { name: 'code', type: 'text', defaultValue: 'NULL', badge: 1 },
  { name: 'name', type: 'text', defaultValue: 'NULL', badge: 1 },
]

export const SQL_SAMPLE = `select
  country_code,
  count(*) as cities
from cities
group by country_code
order by cities desc
limit 4;`

export const SQL_RESULT_COLUMNS = ['country_code', 'cities']

export const SQL_RESULT_ROWS = [
  ['US', '19,820'],
  ['IN', '12,460'],
  ['BR', '8,917'],
  ['DE', '6,204'],
]

export type Policy = {
  name: string
  command: 'SELECT' | 'INSERT' | 'UPDATE' | 'DELETE'
  target: string
}

export const RLS_POLICIES: Policy[] = [
  { name: 'Enable read access for all users', command: 'SELECT', target: 'public.cities' },
  { name: 'Users can insert their own rows', command: 'INSERT', target: 'public.cities' },
  { name: 'Users can update their own rows', command: 'UPDATE', target: 'public.cities' },
  { name: 'Only admins can delete', command: 'DELETE', target: 'public.cities' },
]

/** Sidebar entries in the dashboard window chrome. */
export const SIDEBAR_ITEMS = ['cities', 'countries', 'continents', 'country_codes', 'oceans']
