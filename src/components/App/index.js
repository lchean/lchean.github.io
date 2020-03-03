import React from 'react'
import ClipboardJS from 'clipboard'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import 'normalize.css'
import '../../styles/global.scss'

const EMAIL = 'laurentchean@gmail.com'
const CLIPBOARD_ID = '.js-clipboard'
const IS_COPIED_CLASS = 'is-copied'

/* Styles */

const italic = css`
  font-style: italic
`

const button = css`
  position: relative;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  font-style: italic;
  outline: none;
`

const feedback = css`
  position: absolute;
  right: 0;
  bottom: -2em;
  left: 0;
  font-style: italic;
  transform: scaleY(0);
  transform-origin: bottom left;
  transition: transform .25s ease-out;

  .is-copied & {
    transform: scaleY(1);
    transform-origin: top left;
  }
`

export default class App extends React.Component {
  handleClipboard() {
      const clipboard = new ClipboardJS(CLIPBOARD_ID);

      clipboard.on('success', (e) => {
          const {trigger: btn} = e

          btn.classList.add(IS_COPIED_CLASS)
          setTimeout(() =>  btn.classList.remove(IS_COPIED_CLASS), 1500)
          e.clearSelection()
      })
  }

  componentDidMount() {
    this.handleClipboard();
  }

  render () {
    return (
      <main css={css`
        display: flex;
        align-items: center;
        max-width: 640px;
        height: 100vh;
        margin-right: auto;
        margin-left: auto;
      `}>
        <article css={css`
          padding: 2rem;
        `}>
            <h1 css={css`
              margin-top: 0;
              margin-bottom: .75em;
              font-size: 1.25rem;
              font-weight: 400;
            `}>Hey !</h1>

            <p>I am a french front end developer working at <a href="https://www.emakina.nl/" css={italic}>Emakina Amsterdam</a>.</p>

            <p>Since 2012, I've been working for digital agencies such as <a href="http://marcelww.com/" className="italic">Marcel</a> or <a href="https://www.mrm-mccann.fr/" css={italic}>Mrm McCann</a> and for brands like <a href="https://www.thekooples.com/" className="italic">The Kooples</a> and more recently <a href="https://www.mobhotel.com/" css={italic}>MOB Hotel</a>.</p>

            <p>As a user interface developer, I try to deliver a 'clean' code and be creative without forgetting accessibility.</p>

            <p>I am available for freelance. You can contact me with : a <a href={`mailto:${EMAIL}`} css={italic}>mail app</a>, by <button type="button" css={button} className="js-clipboard" data-clipboard-text={EMAIL}><span css={feedback}>Email copied !</span>copying my email address</button> or via my <a href="https://www.linkedin.com/in/laurent-chean-b045465b/" css={italic}>Linkedin profile</a>.</p>
        </article>
      </main>
    )
  }
}