import styled, { css, DefaultTheme } from 'styled-components';
import { darken } from 'polished';
import media from 'styled-media-query';

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    background: ${theme.colors.mainBg};
    box-shadow: ${theme.shadow.default};
  `}
`;

export const Logo = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.lessThan('medium')`
    display:none;
  `}
`;

export const MenuList = styled.ul`
  display: flex;
`;

const menuItemModifiers = {
  active: (theme: DefaultTheme) => css`
    a {
      font-weight: ${theme.font.bold};
    }
  `
};

type MenuItemProps = {
  active?: boolean;
};
export const MenuItem = styled.li<MenuItemProps>`
  ${({ theme, active }) => css`
    height: 4.5rem;
    list-style: none;

    & + & {
      margin-top: 0.1rem;
    }

    a {
      display: flex;
      align-items: center;
      height: 100%;
      padding-left: ${theme.spacings.xsmall};
      text-decoration: none;
      color: ${theme.colors.primary};
      transition: all 0.2s ease;
    }

    ${!active &&
    css`
      &:hover a {
        transition: all 0.2s ease;
        font-weight: ${theme.font.bold};
      }
    `}

    ${!!active && menuItemModifiers.active(theme)}
  `}
`;

export const MenuButton = styled.div`
  width: 20rem;
  max-width: 50rem;

  ${media.lessThan('medium')`
    width: 15rem;
    max-width: 50rem;
  `}
`;
