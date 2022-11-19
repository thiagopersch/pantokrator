import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

export type HeadingProps = {
  size?: 'xlg' | 'lg' | 'md' | 'sm';
  color?: keyof DefaultTheme['colors'];
  children: React.ReactNode;
};

const headingModifiers = {
  xlg: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlargeMedium};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `,
  lg: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `,
  md: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `,
  sm: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xsmall};
    `}
  `
};

const Heading = styled.h2<HeadingProps>`
  ${({ theme, size = 'lg', color = 'primary' }) => css`
    color: ${theme.colors[color]};
    font-weight: ${theme.font.bold};
    font-family: ${theme.font.poppins};

    ${headingModifiers[size](theme)}
  `}
`;

export default Heading;
