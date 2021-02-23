import { css } from '@emotion/core'

const generateHeadroom = ({ theme }) => css`
  .headroom-wrapper {
    width: 100%;
    height: 128px;
    z-index: 2000;
    top: 0;
    text-align: center;
    box-shadow: ${theme.shadows.header};

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        text-decoration: none;
        color: ${theme.colors.text.base};

        & + a {
          margin-left: 1rem;
        }
      }
    }
  }
  .headroom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.5rem 1rem;
  }
  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
    transition: transform 200ms ease-in-out;
    nav {
      display: flex;
    }
  }
  .headroom--scrolled {
    transition: transform 200ms ease-in-out;
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
    transition: transform 200ms ease-in-out;
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0);
    transition: transform 200ms ease-in-out;
    background-color: ${theme.colors.background};
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    z-index: 100;
  }
`

export default generateHeadroom
