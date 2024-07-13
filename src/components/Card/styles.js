import { DEVICE } from '../../styles/device';
import styled from 'styled-components';
//import Heart from '../../assets/heart.svg';

export const Container = styled.div`
  width: fit-content;
  position: relative;

  width: 210px;
  min-height: 292px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 8px;
  padding: 20px;
  margin: .3rem;
  transition: transform 300ms, filter 200ms;

  &:hover {
    transform: translateY(3px);
    filter: brightness(1.1);
  }

  > a {
    align-items: center;
    text-align: center;
  }

  .fav {
    border: none;
    margin: 16px;
    width: 24px;
    height: 24px;
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;

    transition: transform 300ms;

    &:hover {
      transform: scale(1.1);
    }

    > svg path{
    transition: stroke 1s;
    }

    &:hover svg path {
      stroke: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  .edit {
    border: none;
    margin: 16px;
    width: 24px;
    height: 24px;
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;

    transition: transform 300ms;

    &:hover {
      transform: scale(1.1);
    }

    > svg path{
    transition: stroke 1s;
    }

    &:hover svg path {
      stroke: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  .preview {
    width: 88px;
    aspect-ratio: 1;
    margin-bottom: 12px;
    border-radius: 50%;
  }

  .title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-bottom: 12px;

    width: 100%;
    position: relative;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ::before {
      content: ' >';
      position: absolute;
      right: 0;

      text-align: right;

      background: ${({ theme }) => theme.COLORS.DARK_200};
      width: 1em;
    }
  }

  .description {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    margin-bottom: 15px;

    text-align: center;
    color:  ${({ theme }) => theme.COLORS.LIGHT_400};
    display: none;

    /* TODO: description ellipsis height */
  }

  .price-tag {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    margin-bottom: 10px;

    text-align: center;
    color:  ${({ theme }) => theme.COLORS.CAKE_100};
  }

  .group {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 16px;

    button:nth-child(2) {
      padding: 4px;
      background:  ${({ theme }) => theme.COLORS.TOMATO_100};
      border: none;
      border-radius: 5px;

      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;

      width: 100%;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    .centered {
      width: 100%;
      display: flex;
      justify-content: center;
    }

  }

  svg.icon path {
    stroke: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  ${DEVICE.lg} {
    width: 304px;
    height: 462px;

    .preview {
      width: 176px;
      aspect-ratio: 1;
      margin-bottom: 15px;
    }

    .title {
      font-weight: 700;
      font-size: 24px;
      line-height: 140%;
    }

    .description {
      display: initial;
    }
    .price-tag {
      font-size: 32px;
      line-height: 160%;
    }

    .group {
      flex-direction: row;
      justify-content: space-between;

      button:nth-child(2) {
        padding: 12px 24px;
        width: fit-content;
      }
    }
  }
`;
