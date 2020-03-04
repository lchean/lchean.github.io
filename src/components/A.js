/** @jsx jsx */
import { jsx } from '@emotion/core'
import { underlinedLink } from '../utils'

export default function A (props) {
  const { children, href } = props

  return (
    <a css={underlinedLink} href={href}>{ children }</a>
  )
}