import { css } from '@emotion/core'
export const isCopiedClass = 'is-copied'

interface TColors {
  white: string
  black: string
}

export const colors: TColors = {
  white: '#fefefe',
  black: '#222',
}

export const underlinedLink = css`
  position: relative;
  padding: 0;
  font-size: 1em;
  color: inherit;
  text-decoration: none;
  font-family: 'EB Garamond', serif;
  font-style: italic;
  outline: none;
  border: 0;
  cursor: pointer;
  letter-spacing: inherit;
  background-color: transparent;

  &:focus,
  &:hover {
    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    height: 1px;
    background-color: #222;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
`
