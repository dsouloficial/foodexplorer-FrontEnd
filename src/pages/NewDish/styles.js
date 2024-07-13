import styled from 'styled-components';
import { DEVICE } from '../../styles/device';

import { Button } from '../../components/Button';
import ChevronDown from '../../assets/chevron-down.svg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-rows: 9.6rem auto 7.7rem;
  grid-template-areas:
    'header'
    'Content'
    'footer';
`;

export const Content = styled.div`
  height: 100%;
  grid-area: Content;
  padding: 1.0rem 3.2rem 5.2rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  * ::file-selector-button {
    display: none;
  }

  * ::-webkit-file-upload-button {
    display: none;
  }

  > a:first-child {
    display: flex;
    align-items: center;
    gap: .8rem;

    width: fit-content;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > h3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .input-row {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
  }

  .input-wrapper {

    label {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 100%;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      display: inline-block;
      margin-bottom: 1.6rem;
    }

    .hidden {
      display: none;
    }

    &.image .input-image{
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      padding: 1.4rem 2.5rem;
      height: 4.8rem;
      border-radius: 0.8rem;
      display: flex;
      align-items: center;
      gap: .8rem;

      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2.4rem;

      span {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      img {
        height: 2.4rem;
        width: 2.4rem;
      }

      ${DEVICE.lg} {
        justify-content: center;
        flex-direction: row-reverse;

        span {
        max-width: 16rem;
        }
      }
    }

    .ingredients-list {

      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 8px;

      gap: 16px;
      flex-wrap: wrap;
      justify-content: flex-start;

      width: 100%;
      min-height: 48px;

      background:  ${({ theme }) => theme.COLORS.DARK_800};
      border-radius: 8px;

    }

    textarea {
      display: block;
      width: 100%;
      resize: none;

      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      border: none;
      padding: 1.4rem;
      border-radius: 0.8rem;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 100%;

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }

    .select-container {
      display: flex;
      justify-content: center;
      position: relative;
      width: 100%;
      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_800};

      select {
        -webkit-appearance:none;
        -moz-appearance:none;
        -ms-appearance:none;
        appearance:none;

        border: none;
        border-radius: 0.8rem;
        box-shadow:none;
        width: 100%;
        height: 100%;
        min-height: 4.8rem;
        padding: 1.4rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        cursor: pointer;
        padding-right: 4rem;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;

        background-image: url(${ChevronDown});
        background-repeat: no-repeat;
        background-size: 2.4rem;
        background-position: bottom 50% right 1.6rem;

        &:invalid {
          color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }

        option {
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
      }
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
      appearance: textfield;
    }

    input {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }
  }

  ${DEVICE.lg} {
    width: 100%;
    max-width: 112rem;
    margin-inline: auto;

    gap: 3.2rem;

    > a:first-child {
      font-size: 2.4rem;
    }

    .input-row{
      flex-direction: row;
      gap: 3.2rem;
    }

    .input-wrapper.image{
      width: 22%;
    }
    .input-wrapper.name{
      width: 44%;
    }
    .input-wrapper.category{
      width: 34%;
    }
    .input-wrapper.ingredients{
      width: 76%;
    }
    .input-wrapper.price{
      width: 24%;
    }


  }
`;

export const LightButton = styled(Button)`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_400};

  ${DEVICE.lg} {
    width: fit-content;
    align-self: flex-end;

  }
`;
