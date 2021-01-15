import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};
    cursor: pointer;
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
    font-size: 20px;
    font-weight: bold;
    height: auto;
    justify-content: center;
    transition: ${theme.transition};
    user-select: none;

    &:before {
      content: '';
      float: left;
      padding-top: 100%;
    }

    &:hover {
      background-color: ${theme.colors.lightBlue};
    }
  `}
`;
