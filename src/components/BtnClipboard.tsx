/** @jsx jsx */
import * as React from 'react'
import { jsx, css } from '@emotion/react'
import PropTypes from 'prop-types'
import { IS_COPIED_CLASS } from '../utils/constants'
import { underlinedLink } from '../utils/underlinedLink'

interface Props {
  children: React.ReactNode
  feedback: string
  clipboardText: string
}

const BtnClipboard: React.FC<Props> = ({ children, feedback, clipboardText }) => (
  <button type="button" css={underlinedLink} className="js-clipboard" data-clipboard-text={clipboardText}>
    <span
      css={css`
        position: absolute;
        right: 0;
        bottom: -2em;
        left: 0;
        transform: scaleY(0);
        transform-origin: bottom left;
        transition: transform 0.25s ease-out;

        .${IS_COPIED_CLASS} & {
          transform: scaleY(1);
          transform-origin: top left;
        }
      `}
    >
      {feedback}
    </span>
    {children}
  </button>
)

BtnClipboard.propTypes = {
  children: PropTypes.node.isRequired,
  feedback: PropTypes.string.isRequired,
  clipboardText: PropTypes.string.isRequired,
}

export default BtnClipboard
