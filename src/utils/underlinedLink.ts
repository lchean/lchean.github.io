import { css } from '@emotion/react'
import { COLORS } from './constants'

export const underlinedLink = css`
  position: relative;
  padding: 0;
  font-size: inherit;
  color: inherit;
  text-decoration: none;
  font-family: 'Spectral', serif;
  font-style: italic;
  outline: none;
  border: 0;
  cursor: pointer;
  background-color: transparent;

  &:focus,
  &:hover {
    &::after {
      transform: scaleX(0);
      transform-origin: bottom right;
    }
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    height: 1px;
    background-color: ${COLORS.white};
    transform: scaleX(1);
    transform-origin: bottom left;
    transition: transform 0.25s ease-out;
  }
`
