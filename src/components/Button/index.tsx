import styled, { css } from 'styled-components';
import { IButtonStyled } from './types';
import { IButton } from "./types";

const TagButton = styled.button<IButtonStyled>`
  width: 12rem;
  position: relative;
  padding: .2rem 0;
  background-color: #565656;
  font-size: 1.8rem;
  color: #fff;
  border-radius: 1.1rem;
  cursor: pointer;

  ${({variant}) => variant !== 'primary' && css`
    min-width: 16.7rem;
    background-color: #E4105D;
    padding: .4rem 0;
    border: 0;

    &::after {
      content: '';
      position: absolute;
      border: 1px solid #e4105D;
      top: -6px;
      left: -6px;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      border-radius: 22px;
    }
  `}
`

const Button = ({ title, variant = 'primary', onClick }: IButton) => {
  return (
      <TagButton variant={variant} onClick={onClick}>
        {title}
      </TagButton>
  )
}

export default Button
