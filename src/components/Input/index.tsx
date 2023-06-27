import React from "react";
import { Controller } from "react-hook-form";
import { IInput } from "./types";
import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3B3450;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #FFFFFF;
    width: 100%;
    border: 0;
    height: 30px;
`

export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 12px;
    margin: 5px 0;
`

const Input = ({ leftIcon, name, control, errorMessage, ...rest }: IInput) => {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <InputText value={value} onChange={onChange} {...rest} />
          )}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};

export { Input };