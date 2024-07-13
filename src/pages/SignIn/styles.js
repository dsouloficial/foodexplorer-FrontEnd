import styled from 'styled-components';
import { DEVICE } from '../../styles/device'

export const Container = styled.div`
  height: 100dvh;
  /* width: auto; */
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding-top: 10vh;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  *:hover {
    /* border: 1px solid red; */
  }

  ${DEVICE.lg} {
    padding: 1em;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 1em;
  }

  > .logo {
    /* width: 100%; */
    width: min(90%, 31.6rem);

    height: auto;
    margin: 7.3rem 0;
    display: flex;
    flex-flow: row;
    justify-content: left;
    align-items: center;
    gap: 1.1rem;

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: clamp(1.8rem, 10vw, 3.2rem);
      line-height: 4.9rem;
    }

    img {
      height: 4.3rem;
      width: 4.3rem;
    }

    ${DEVICE.lg} {
      width: auto;
      gap: 1.9rem;

      h1 {
        font-size: clamp(3.2rem, 4vw, 4.2rem);
      }

      img {
        height: 4.9rem;
        width: 4.9rem;
      }
    }
  }

  > .form-wrapper {
    display: flex;
    flex-direction: column;

    width: min(90%, 31.6rem);

    h2,
    div.input,
    button {
      margin-bottom: 3.2rem;
    }

    label {
      margin-bottom: 0.8rem;
      font-size: 1.6rem;
    }

    h2 {
      display: none;
      margin-bottom: 3.2rem;

      text-align: center;
      font-weight: 500;
      font-size: 3.2rem;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    input {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 100%;
    }

    p {
      text-align: center;

      a {
        text-decoration: none;

        font-family: 'Poppins';
        /* font-style: normal; */
        font-weight: 500;
        font-size: 1.4rem;

        align-items: center;
        /* text-align: center; */

        /* Light/Light 100 */

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    ${DEVICE.lg} {
      min-width: 47.6rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
      border-radius: 1.6rem;
      padding: 6.4rem;

      h2 {
        display: block;
      }
    }
  }
`;
