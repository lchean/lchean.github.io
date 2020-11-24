import PropTypes from 'prop-types'
import * as React from 'react'

interface Props {
  children: React.ReactNode
}

const P: React.FC<Props> = ({ children }) => <p>{children}</p>

P.propTypes = {
  children: PropTypes.node.isRequired,
}

export default P
