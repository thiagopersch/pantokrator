import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  display: grid;
  grid-template-areas:
    'navbar navbar'
    'main-content main-content'
    'footer footer';
  grid-template-columns: 29rem 1fr;
  grid-template-rows: 8rem 1fr;
  grid-row-gap: 0.2rem;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.section`
  ${({ theme }) => css`
    grid-area: main-content;
    padding: ${theme.spacings.small};
    overflow-y: auto;
  `}
`;

/* export const Footer = styled.footer`
  grid-area: footer;
  flex-shrink: 0;
  padding: 20px 0;
  background-color: red;
  color: #4b4c4d;
`; */

/* export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.mainBg};
  `}
`;

export const Content = styled.div`
  max-height: 100vh;
`;
 */
