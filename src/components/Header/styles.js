import { Input } from '../Input';

import styled from 'styled-components';
import { DEVICE } from '../../styles/device';


export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  min-height: 7.7rem;
  padding-inline: 2.7rem;

  padding-top: 2.5rem;

  /* border: 1px dotted red; */

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  .desktop-only {
    display: none;

    ${DEVICE.lg} {
      display: initial;
    }
  }

  button.no-bg {
    border: 0;
    border-radius: 2px;
    background: transparent;
    padding: 0.8rem 0.8rem 0.8rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: 'Roboto';
    font-size: 2.1rem;
    gap: 1.6rem;

    img {
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
    }
  }

  .logo-wrapper {
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    column-gap: 0.8rem;

    span {
      font-size: 12px;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.CAKE_100};
    }
  }

  .logo {
    display: flex;
    gap: 0.8rem;
    align-items: center;

    img {
      height: 2.4rem;
      aspect-ratio: 1 / 1;
    }

    h1 {
      font-family: 'Roboto';
      font-size: 2.1rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  nav {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 56px 28px;

    background: ${({ theme }) => theme.COLORS.MOBILE_MENU};

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    opacity: 0;
    transform: translateY(-100%);

    transition: all 300ms;

    .input {
      margin-top: 6.5rem;
      margin-bottom: 3.6rem;
      width: 100%;
    }
  }

  nav.mobile-menu {
    opacity: 1;
    transform: translateY(0);
  }

  .mobile-button {
    display: block;
    width: 100%;
    text-align: left;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    height: 54px;

    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: 'Roboto';
    font-size: 2.1rem;
    gap: 1.6rem;
  }

  #exit {
    display: none;
  }

  ${DEVICE.lg} {
    padding-inline: clamp(10px, 9vw, 12.3rem);
    padding-top: 0;
    gap: 1rem;

    button.menu {
      display: none;
    }

    .logo-wrapper {
      flex-direction: column;
      word-break: keep-all;
    }

    .logo {
      img {
        height: 3rem;
      }

      h1 {
        font-size: 2.4rem;
      }
    }

    nav {
      background: initial;
      position: initial;
      top: initial;
      left: initial;
      width: initial;
      height: initial;
      padding: initial;
      opacity: initial;
      transform: initial;

      flex-direction: row;
      align-items: center;

      .input {
        margin: initial;
      }

      .mobile-button {
        display: none;
      }
    }

    .navbar {
      width: 75%;
      display: grid;

      grid-template-columns: auto 160px 40px;
      grid-template-areas: 'search button exit';

      gap: 3rem;

      .input {
        grid-area: search;
        width: 100%;
      }

      #exit {
        display: initial;
        grid-area: exit;
      }
    }
  }

  #btn-order{
    /* border: 1px dashed red; */
    position: relative;
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;

    .btn-order-text {
      display: none;
    }
    .btn-order-qty {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      padding: 8px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;

      position: absolute;
      top: -30%;
      right: -30%;
      overflow: hidden;
      /* border: 1px solid blue; */
    }

    ${DEVICE.lg} {
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      border-radius: 8px;
      padding: 12px 46px;

      .btn-order-qty,
      .btn-order-text {
        display: inline;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
      }
      .btn-order-qty {
        display: inline;
        position: unset;
        top: unset;
        right: unset;
        padding: unset;
        width: unset;
        height: unset;
        border-radius: unset;
        justify-content: unset;
        align-items: unset;
        overflow: unset;
      }
      .btn-order-qty::before {
        content: '(';
      }
      .btn-order-qty::after {
        content: ')';
      }
    }
  }
`;

export const SearchBox = styled(Input)`
    background: ${({ theme }) => theme.COLORS.DARK_900};

  && {
    background-color: transparent;
  }
`;
