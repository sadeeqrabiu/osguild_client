import type { ComponentType } from 'react'
import type { IconProps } from '../components/icons'
import {
  FlutterMark,
  NextMark,
  NuxtMark,
  ReactMark,
  SvelteMark,
  VueMark,
} from '../components/icons/frameworks'

export type Framework = {
  id: string
  /** Accessible name for the icon-only tab, and the word in "Use Supabase with …". */
  name: string
  mark: ComponentType<IconProps>
  code: string
  docsHref: string
}

/*
 * The React sample is transcribed verbatim from the original page, including its
 * `process.env.SUPABASE_URL` reference — which would not actually resolve on the
 * client without a framework-specific public prefix. It is reproduced as shown.
 *
 * The other five tabs are not visible in the source material, so they use each
 * framework's own idiomatic client setup.
 */
export const FRAMEWORKS: Framework[] = [
  {
    id: 'react',
    name: 'React',
    mark: ReactMark,
    docsHref: '#docs-react',
    code: `import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

export default function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    supabase.from('todos').select('*')
      .then(({ data }) => setTodos(data))
  }, [])

  return <TodoList items={todos} />
}`,
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    mark: NextMark,
    docsHref: '#docs-nextjs',
    code: `import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

export default async function Page() {
  const { data: todos } = await supabase
    .from('todos')
    .select('*')

  return <TodoList items={todos} />
}`,
  },
  {
    id: 'flutter',
    name: 'Flutter',
    mark: FlutterMark,
    docsHref: '#docs-flutter',
    code: `import 'package:supabase_flutter/supabase_flutter.dart';

Future<void> main() async {
  await Supabase.initialize(
    url: SUPABASE_URL,
    anonKey: SUPABASE_ANON_KEY,
  );

  final todos = await Supabase.instance.client
    .from('todos')
    .select();

  runApp(TodoList(items: todos));
}`,
  },
  {
    id: 'svelte',
    name: 'Svelte',
    mark: SvelteMark,
    docsHref: '#docs-svelte',
    code: `import { createClient } from '@supabase/supabase-js'
import { onMount } from 'svelte'

const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY
)

let todos = []

onMount(async () => {
  const { data } = await supabase
    .from('todos')
    .select('*')

  todos = data
})`,
  },
  {
    id: 'vue',
    name: 'Vue',
    mark: VueMark,
    docsHref: '#docs-vue',
    code: `import { createClient } from '@supabase/supabase-js'
import { onMounted, ref } from 'vue'

const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY
)

const todos = ref([])

onMounted(async () => {
  const { data } = await supabase
    .from('todos')
    .select('*')

  todos.value = data
})`,
  },
  {
    id: 'nuxt',
    name: 'Nuxt',
    mark: NuxtMark,
    docsHref: '#docs-nuxt',
    code: `const supabase = useSupabaseClient()

const { data: todos } = await useAsyncData(
  'todos',
  async () => {
    const { data } = await supabase
      .from('todos')
      .select('*')

    return data
  }
)`,
  },
]
