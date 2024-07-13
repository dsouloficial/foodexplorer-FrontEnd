import styled from 'styled-components';

export const Container = styled.span`
  padding: 0.4rem 0.8rem;

  width: auto;
  height: 3.2rem;
  margin-right: 1.2rem;
  margin-bottom: 1.2rem;

  white-space: nowrap;

  background: ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 0.5rem;

  font-family: 'Poppins';
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;
