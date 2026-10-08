import { TESTIMONIALS, type Testimonial } from '../../data/testimonials'
import { XIcon } from '../icons'
import { ButtonLink } from '../primitives/Button'
import { Marquee } from '../primitives/Marquee'
import { Reveal } from '../primitives/Reveal'
import './Community.css'

/** Posts per column. Stacking them in twos reproduces the original's masonry. */
const COLUMN_SIZE = 2

function toColumns(posts: Testimonial[], size: number): Testimonial[][] {
  return Array.from({ length: Math.ceil(posts.length / size) }, (_, index) =>
    posts.slice(index * size, index * size + size),
  )
}

export function Community() {
  const columns = toColumns(TESTIMONIALS, COLUMN_SIZE)

  return (
    <section className="community section" id="community">
      <div className="shell">
        <Reveal>
          <div className="community__head">
            <h2 className="heading-2">Join the community</h2>
            <p className="lead community__lead">
              Discover what our community has to say about their Supabase experience.
            </p>
            <ButtonLink variant="secondary" href="#discord">
              Join us on Discord
            </ButtonLink>
          </div>
        </Reveal>
      </div>

      <Marquee className="community__wall" label="community posts" duration={80}>
        {columns.map((column, index) => (
          <div
            className="community__column"
            // Index keys: the columns are derived from a fixed list and never reorder.
            key={index}
            // Three offsets cycled across the columns give the staggered masonry edge.
            data-offset={index % 3}
          >
            {column.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        ))}
      </Marquee>
    </section>
  )
}

function Post({ post }: { post: Testimonial }) {
  return (
    <figure className="post">
      <figcaption className="post__head">
        <span className="post__avatar" aria-hidden="true">
          <XIcon className="post__badge" />
        </span>
        <span className="post__handle">{post.handle}</span>
      </figcaption>

      <blockquote className="post__quote">{post.quote}</blockquote>
    </figure>
  )
}
