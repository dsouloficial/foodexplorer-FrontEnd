import styled from 'styled-components';

export const Container = styled.button`
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ isLoading, theme }) => isLoading ? 'transparent' : `${theme.COLORS.LIGHT_100}`};

  border: none;
  border-radius: 5px;
  justify-content: center;
  padding: 12px 32px;
  gap: 8px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  &:disabled {
    filter: brightness(0.8);
    cursor: not-allowed;
  }

  &::after {
    ${({ isLoading }) => isLoading ? `
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid transparent;
    border-bottom-color: #fff7;
    border-radius: 50%;
    animation: button-loading-spinner 800ms ease infinite;
    ` : ``};
  }

  @keyframes button-loading-spinner {
    0% {
      transform: rotate(0turn);
    }
    50% {
      transform: rotate(-0.5turn);
    }
    100% {
      transform: rotate(1turn);
    }
  }

`;
