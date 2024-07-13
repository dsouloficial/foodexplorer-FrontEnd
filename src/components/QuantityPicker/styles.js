import styled from 'styled-components';

export const Container = styled.div`
  margin: 1.2rem;
  width: fit-content;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.4rem;

  > button {
    background: none;
    border: none;
  }

  > input {
    width: 2.2rem;
    text-align: center;
    justify-content: center;

    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-family: 'Roboto';
    font-size: 2rem;
    text-align: center;
  }
`;
