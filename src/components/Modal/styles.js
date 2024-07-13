import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 999;

  > .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 3rem 3rem 2rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 10px;
    color: black;
    z-index: +2;
  }

  .modal-close {
    position: absolute;
    cursor: pointer;
    color: white;
    top: 20px;
    right: 20px;
  }

  .modal-title {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-bottom: 2rem;

  }

  .modal-message {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 2.5rem;
  }
`;
