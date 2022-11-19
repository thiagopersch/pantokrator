import styled, { css } from 'styled-components';
import { darken } from 'polished';
import media from 'styled-media-query';
import theme from 'styles/theme';

export const WrapperDescription = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* border-radius: ${theme.border.radius};
    background-color: ${theme.colors.mainBg};
    box-shadow: ${theme.shadow.default}; */
  `}
`;

export const Image = styled.div`
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.5s ease;
  }

  ${media.lessThan('medium')`
    padding: 2rem 2rem;
  `}
`;

export const WrapperTextDescription = styled.div`
  margin: 0rem ${theme.spacings.xsmall} 0rem ${theme.spacings.xsmall};

  ${media.lessThan('medium')`
    text-align: center;
  `}
`;

export const WrapperTitle = styled.div`
  ${media.lessThan('medium')`
    text-align: center;
  `}
`;

export const WrapperDescriptionTitle = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    font-family: ${theme.font.inter};
    color: ${theme.colors.primary};
    font-style: ${theme.font.style.normal};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.spacings.small};
    display: flex;
    flex-wrap: wrap;

    ${media.lessThan('medium')`
      justify-content: center;
      align-items: center;
    `};
  `};
`;

export const MenuButton = styled.div`
  margin: 3rem 0 3rem 0;
  width: 20rem;

  ${media.lessThan('medium')`
    width: 100%;
  `}
`;

export const WrapperLocationService = styled.div`
  margin-top: 5rem;
`;

export const TitleWrapperLocationService = styled.div`
  text-align: center;
  margin-bottom: 5rem;

  ${media.lessThan('medium')`
      text-align: center;
      margin-bottom: 3rem;
  `};
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20rem;
  margin-bottom: 3rem;
  word-wrap: break-word;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadow.default};
  border-radius: 1rem;
  background-clip: border-box;
`;

export const ImageService = styled.a`
  cursor: pointer;
  text-decoration: none;

  img {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  /* transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.5s ease;
  } */
`;

export const WrapperBadgeService = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -22rem;
`;

export const WrapperNameService = styled.div`
  padding: 0.5rem;
`;

export const NameService = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.font.poppins};
    font-style: ${theme.font.style.normal};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      transition: all 0.2s ease;
      font-weight: ${theme.font.bold};
    }
  `}
`;

export const MenuButtonSearchService = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  ${media.lessThan('medium')`
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0rem ${theme.spacings.xlarge};
    `}
`;

export const WrapperSectionDownload = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
`;

export const WrapperImageDownloadApp = styled.div`
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;

  ${media.lessThan('medium')`
    display: none;
  `}
`;

export const WrapperDownloadText = styled.div`
  /* position: absolute;
  top: 0;
  left: 0; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 5rem;
  gap: 5rem;

  ${media.lessThan('medium')`
    text-align: center;
    padding: 0rem;
    gap: 0rem;
    padding: 4rem 2rem;
  `}
`;

export const WrapperDownloadTitle = styled.div`
  width: 60rem;

  ${media.lessThan('medium')`
    width: 25rem;
  `}
`;

export const WrapperDownloadDescription = styled.div`
  width: 60rem;

  ${media.lessThan('medium')`
    display: none;
  `}
`;

export const WrapperDownloadButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3rem;
  gap: 5rem;

  ${media.lessThan('medium')`
    padding: 1rem;
    gap: 1rem;
    justify-content: space-between;
  `}
`;

export const WrapperDownloadButtonPlayStore = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 1.5rem;
    border-radius: ${theme.border.radiusRounded};
    background-color: ${theme.colors.mainBg};
    box-shadow: ${theme.shadow.elevateCardShadow};
    transition: all 0.3s ease;

    &:hover {
      box-shadow: ${theme.shadow.default};
      transition: all 0.3s ease;
    }

    ${media.lessThan('medium')`
      width: 10rem;
      padding: 1rem;
      box-shadow: ${theme.shadow.elevateCardShadow};
    `};
  `}
`;

export const WrapperDownloadButtonAppStore = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 1.5rem;
    border-radius: ${theme.border.radiusRounded};
    background-color: ${theme.colors.mainBg};
    box-shadow: ${theme.shadow.elevateCardShadow};
    transition: all 0.3s ease;

    &:hover {
      box-shadow: ${theme.shadow.default};
      transition: all 0.3s ease;
    }

    ${media.lessThan('medium')`
      width: 10rem;
      padding: 1rem;
      box-shadow: ${theme.shadow.elevateCardShadow};
    `};
  `}
`;
