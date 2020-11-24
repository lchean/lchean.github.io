/** @jsx jsx */
import * as React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/react'
import { underlinedLink } from '../utils/underlinedLink'
interface Props {
  children: React.ReactNode
  href: string
}

const A: React.FC<Props> = ({ children, href }) => (
  <a css={underlinedLink} href={href}>
    {children}
  </a>
)

A.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}

export default A
