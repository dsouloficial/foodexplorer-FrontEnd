import styled from 'styled-components';
import { DEVICE } from '../../styles/device';

import bannerImgSmall from '../../assets/banner-img-S.png';
import bannerImgLarge from '../../assets/banner-img-L.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    'header'
    'Content'
    'footer';

  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  ${DEVICE.lg} {
    grid-template-rows: 9.6rem auto 7.7rem;
  }
`;

export const Content = styled.div`
  min-height: 100%;
  grid-area: Content;
  max-width: 100%;
  overflow-x: hidden;

  > .search-hint {
    width: min(95vw, 1122px);
    margin: 0 auto 24px;
    display: flex;
    gap: 1.5rem;
    letter-spacing: 1px;
    color:  ${({ theme }) => theme.COLORS.LIGHT_500};

    svg {
      cursor: pointer;
      transition: transform 200ms, fill 500ms;
      &:hover{
        fill: ${({ theme }) => theme.COLORS.TOMATO_200};
        transform: scale(1.1);
      }
    }

    .hint {
      display: flex;
      align-items: center;
      font-size: 1.8rem;

      em {
        margin-left: 1.5rem;
        color: ${({ theme }) => theme.COLORS.CAKE_100};
      }
    }
  }
`;

export const Banner = styled.div`
  width: 100%;
  margin-bottom: 6.2rem;

  .banner-wrapper {
    ${DEVICE.lg} {
      min-width: 100%;
      margin: 17.2rem 1rem 0;
    }
  }

  .banner-content {
    width: calc(100% - 5.2rem);

    min-height: 12rem;
    margin: 4.4rem 1.6rem 0 3.6rem;

    padding-left: 15.3rem;
    padding-top: 3.6rem;
    padding-right: 1.6rem;

    position: relative;

    background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
    border-radius: 2.9px;

    > h3 {
      font-size: 1.8rem;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      padding-bottom: 4px;
    }

    > p {
      font-family: 'Poppins';
      font-size: 1.2rem;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      padding-bottom: 1.6rem;
    }

    .banner-img {
      background: left top / cover no-repeat url(${bannerImgSmall});
      width: 19.1rem;
      min-height: 14.9rem;
      height: 120%;

      position: absolute;

      bottom: 0;
      left: -3rem;

      animation-name: leftSlide;
      animation-duration: 1s;
    }

    @keyframes leftSlide {
      from {
        opacity: 0;
        transform: translateX(20px);
      }
      to {
        opacity: 1;
        transform: translateX(0)
      }
    }

    ${DEVICE.lg} {
      max-width: 112rem;
      min-height: 26rem;

      margin: 0 auto;

      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;

      > h3 {
        font-size: 4rem;
        width: 58%;

        font-style: normal;
        font-weight: 500;
        font-size: 4rem;
        line-height: 140%;
      }

      > p {
        font-size: 1.6rem;
        width: 58%;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;
      }

      .banner-content {
        margin: 0 auto;
      }

      .banner-img {
        background: left bottom / contain no-repeat url(${bannerImgLarge});
        max-width: 65.6rem;
        width: 60%;
        height: 41.2rem;
        bottom: -1.4rem;
        left: -7rem;
      }
    }

  }

`;

export const SliderWrapper = styled.div`
  margin-top: 3rem;
  border: 1px dotted red;
  width: min(95vw, 1122px);
  margin: 0 auto 24px;

    > h2 {
    margin-bottom: 23px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    ${DEVICE.lg} {
      font-size: 32px;
    }
  }

`;
