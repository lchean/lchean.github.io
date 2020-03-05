/** @jsx jsx */
import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { underlinedLink } from '../utils'

type Props = {
  children: React.ReactNode,
  href: string,
}

const A: FunctionComponent<Props> = ({ children, href }) => (
  <a css={underlinedLink} href={href}>
    {children}
  </a>
)

A.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}

export default A