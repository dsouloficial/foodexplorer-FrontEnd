import styled from 'styled-components';

export const Container = styled.span`
  display: flex;
  align-items: center;
  width: fit-content;

  background-color: ${({ isNew, theme }) =>
    isNew ? `transparent` : `${theme.COLORS.LIGHT_600}`};

  border-radius: 8px;
  padding: 8px 16px;

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : `none`};

  &:has(input:focus-visible) {
    outline-width: 1px;
    outline-style: solid;
    outline-offset: 1px;
  }

  > input {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline;

    width: fit-content;

    color: ${({ isNew, theme }) =>
    isNew ? `${theme.COLORS.LIGHT_500}` : `${theme.COLORS.LIGHT_100}`};

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;

    background: transparent;
    border: none;
    outline: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > button {
    display:flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: none;
    border-radius: .3rem;
  }

  .button-delete{
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;
