import styled from 'styled-components';
import { DEVICE } from '../../styles/device';

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

  ${DEVICE.lg} {
    grid-template-rows: 9.6rem auto 7.7rem;
  }
`;

export const Content = styled.div`
  padding-block: 1rem;
  margin-inline: 5.6rem;

  height: 100%;
  grid-area: Content;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  ${DEVICE.lg} {
    margin-inline: 12rem;
  }

  > a:first-child {
    display: flex;
    align-items: center;
    gap: 8px;

    width: fit-content;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    ${DEVICE.lg} {
      font-size: 2.4rem;
    }
  }

  .dish-wrapper {
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    gap: 1.6rem;
    margin-bottom: 3.4rem;
    text-align: center;

    .dish-preview {
      display: block;

      max-width: 26.4rem;
      aspect-ratio: 1 / 1;
      margin: 0 auto;

      > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        margin-bottom: 1.6rem;

        animation-name: show;
        animation-duration: 800ms;
      }

      @keyframes show {
        from {opacity: 0;}
        to {opacity: 1;}
      }
    }

    .info > h3 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 2.7rem;
      line-height: 140%;
      margin-bottom: 2.4rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .info > p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 140%;
      margin-bottom: 2.4rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 4.8rem;

      width: 100%;
      justify-content: center;
    }

    .order {
      display: flex;
      flex: 1;
      justify-content: center;
      gap: 1.6rem;
    }

    ${DEVICE.lg} {
      display: flex;
      flex-direction: row;
      gap: 4.8rem;
      height: 100%;

      text-align: left;

      .dish-preview {
        margin: unset;
        width: 100%;
        max-width: 39rem;

        img {
          width: 100%;
        }
      }

      .tags,
      .order {
        justify-content: left;
      }
    }
  }
`;
