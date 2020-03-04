/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { isCopiedClass, underlinedLink } from '../utils'

export default function P (props) {
  const { children, feedback, clipboardText } = props

  return (
    <button type="button"  css={underlinedLink} className="js-clipboard" data-clipboard-text={clipboardText}>
      <span css={css`
      position: absolute;
      right: 0;
      bottom: -2em;
      left: 0;
      transform: scaleY(0);
      transform-origin: bottom left;
      transition: transform .25s ease-out;

      .${isCopiedClass} & {
        transform: scaleY(1);
        transform-origin: top left;
      }
    `}>{feedback}</span>
      {children}
    </button>
  )
}