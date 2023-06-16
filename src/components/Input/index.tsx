import styled from "styled-components"
import { IInput } from "./types"

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: .8rem;
  align-items: center;
`

const TagInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: .5rem;
`

const Input = ({leftIcon, name, type}: IInput) => {
  return (
    <InputContainer>
      {leftIcon ? <>{leftIcon}</> : null}
      <TagInput placeholder={name} type={type} />
    </InputContainer>
  )
}

export default Input
