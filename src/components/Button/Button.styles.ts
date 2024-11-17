import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button<HTMLButtonElement>`
    width: 100%;
    height: 42px;
    background-color: #81259d;
    color: #fff;
    border: 1px solid #81259d;
    border-radius: 21px;

    ${(props) =>
        !props.disabled
            ? css`
                  &:hover {
                      opacity: 0.6;
                      cursor: pointer;
                  }
              `
            : css`
                  opacity: 0.6;
                  cursor: not-allowed;
              `}
`;
