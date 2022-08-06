import React from "react";
import { Input as AntInput } from "antd";
interface IInput {
  placeholder?: string;
  prefix?: any;
}
const Input = ({ placeholder, prefix }: IInput) => {
  return <AntInput prefix={prefix} placeholder={placeholder} />;
};

export default Input;
