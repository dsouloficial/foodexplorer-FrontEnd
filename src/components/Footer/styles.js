import styled from 'styled-components';
import { DEVICE } from '../../styles/device';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  min-height: 7.7rem;
  padding-inline: 2.7rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  > .logo-footer {
    display: flex;
    align-items: center;
    gap: 0.7rem;

    img {
      height: 1.8rem;
      aspect-ratio: 1 / 1;
    }

    span {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 1.8rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  > .copyright {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.2rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  ${DEVICE.lg} {
    padding-inline: 12.3rem;
    gap: 1rem;
    > .logo-footer {
      img {
        height: 3rem;
      }
      span {
        font-size: 2.4rem;
      }
    }
    > .copyright {
      font-size: 1.4rem;
    }
  }
`;
