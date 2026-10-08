import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'
import { cn } from '../../lib/cn'
import { highlight } from '../../lib/highlight'
import { CheckIcon, CopyIcon } from '../icons'
import './CodeBlock.css'

type CodeBlockProps = {
  code: string
  className?: string
}

export function CodeBlock({ code, className }: CodeBlockProps) {
  const { copied, copy } = useCopyToClipboard()

  return (
    <div className={cn('code-block', className)}>
      <pre className="code-block__pre">
        <code>
          {highlight(code).map((token, index) => (
            // Index keys are safe here: the list is derived from `code` and never reordered.
            <span key={index} className={`tok tok--${token.kind}`}>
              {token.text}
            </span>
          ))}
        </code>
      </pre>

      <button
        type="button"
        className="code-block__copy"
        onClick={() => copy(code)}
        aria-label={copied ? 'Code copied to clipboard' : 'Copy code to clipboard'}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
    </div>
  )
}
