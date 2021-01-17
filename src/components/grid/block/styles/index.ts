import styled, { css } from 'styled-components';

interface IProps {
  active?: boolean;
}

export const Container = styled.div<IProps>`
  ${({ active, theme }) => css`
    align-items: center;
    background-color: ${active ? theme.colors.blue : theme.colors.white};
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
