import React from "react";
import { Form as AntForm } from "antd";
import styled from "styled-components";
interface IFormItem {
  label?: string;
  name?: string;
  rules?: {}[];
  children: any;
}
const FormItem = ({ label, name, rules, children }: IFormItem) => {
  const { Item } = AntForm;
  return (
    <FormItemStyled>
      <Item label={label} name={name} rules={rules}>
        {children}
      </Item>
    </FormItemStyled>
  );
};
const FormItemStyled = styled.div`
  position: relative;
  & svg {
    position: absolute;
    top: 8px;
    bottom: 0;
    left: 5px;
  }
  .ant-input {
    background-color: #393839;
    border: 1px solid #393839;
    outline: none;
    padding: 8px 5px;
    padding-left: 25px;
    transition-duration: 180ms;
    transition-timing-function: ease-in-out;
    color: rgb(213, 214, 214);
    &:focus {
      border: 1px solid #2e69ff;
    }
  }
`;
export default FormItem;
