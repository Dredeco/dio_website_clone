import styled, { css } from 'styled-components';
import { IButtonStyled } from './types';
import { IButton } from "./types";

const TagButton = styled.button`
    width: 12rem;
    background-color: #565656;
    font-size: 1.8rem;
    color: #fff;
    border-radius: 1.1rem;
    padding: .2rem 0;
    cursor: pointer;
`

const Button = ({title}: IButton) => {
  return (
    <div>
        <TagButton>{title}</TagButton>
    </div>
  )
}

export default Button
