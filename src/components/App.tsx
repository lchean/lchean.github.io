/** @jsx jsx */
import * as React from 'react'
import ClipboardJS from 'clipboard'
import { jsx, css, Global } from '@emotion/react'

import P from './P'
import A from './A'
import BtnClipboard from './BtnClipboard'

import { IS_COPIED_CLASS, COLORS, CLIPBOARD_ID, EMAIL } from '../utils/constants'

export default class App extends React.Component<{}> {
  handleClipboard(): void {
    const clipboard = new ClipboardJS(CLIPBOARD_ID)

    clipboard.on('success', (e) => {
      const { trigger: btn, clearSelection } = e

      btn.classList.add(IS_COPIED_CLASS)
      setTimeout(() => btn.classList.remove(IS_COPIED_CLASS), 2000)
      clearSelection()
    })
  }

  componentDidMount(): void {
    this.handleClipboard()
  }

  render(): React.ReactNode {
    const { white, black } = COLORS

    return (
      <main
        css={css`
          display: flex;
          align-items: center;
          max-width: 700px;
          margin-right: auto;
          margin-left: auto;
        `}
      >
        <Global
          styles={css`
            html {
              box-sizing: border-box;
            }

            *,
            *:before,
            *:after {
              box-sizing: inherit;
            }

            body {
              font-family: 'Spectral', serif;
              font-size: 1.88em;
              line-height: 1.8;
              background-color: ${black};
              color: ${white};
            }
          `}
        />
        <article
          css={css`
            padding: 2.5rem;
          `}
        >
          <h1
            css={css`
              margin-top: 0;
              margin-bottom: 0.75em;
              font-size: 1em;
            `}
          >
            Hey !
          </h1>

          <P>
            I am a french front end developer working at <A href="https://www.emakina.nl/">Emakina Amsterdam</A>.
          </P>

          <P>
            Since 2012, I&apos;ve been working for digital agencies such as <A href="http://marcelww.com/">Marcel</A> or{' '}
            <A href="https://www.mrm-mccann.fr/">Mrm McCann</A> and for brands like{' '}
            <A href="https://www.thekooples.com/">The Kooples</A> and more recently{' '}
            <A href="https://www.mobhotel.com/">MOB Hotel</A>.
          </P>

          <P>
            As a user interface developer, I try to deliver a clean code and be creative without forgetting
            accessibility.
          </P>

          <P>
            I am available for freelance. You can contact me with : a <A href={`mailto:${EMAIL}`}>mail app</A>, via my{' '}
            <A href="https://www.linkedin.com/in/laurent-chean-b045465b/">Linkedin profile</A> or by{' '}
            <BtnClipboard feedback="Email copied !" clipboardText={EMAIL}>
              copying my email address
            </BtnClipboard>
            .
          </P>
        </article>
      </main>
    )
  }
}
