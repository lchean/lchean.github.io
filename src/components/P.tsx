import PropTypes from 'prop-types'
import React, { FunctionComponent } from 'react'

type Props = {
  children: React.ReactNode
}

const P: FunctionComponent<Props> = ({ children }) => <p>{children}</p>

P.propTypes = {
  children: PropTypes.node.isRequired,
}

export default P
