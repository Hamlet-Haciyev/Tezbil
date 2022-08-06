import Link from "next/link";
import { HeaderContainer, NavbarWrapper } from "./HeaderStyled";
import {
  Logo,
  LeftSide,
  MiddleSide,
  RightSide,
  ListGroup,
} from "./HeaderStyled";
import NavbarItem from "../../components/NavbarItem";
import Icon from "../../helpers/icons";
import FormItem from "../../components/FormItem";
import Input from "../../components/Input";
import { Form } from "antd";

const Header = () => {
  return (
    <HeaderContainer>
      <NavbarWrapper>
        <LeftSide>
          <Logo>
            <Icon name="Logo" height="50" width="87" />
          </Logo>
        </LeftSide>
        <MiddleSide>
          <ListGroup>
            <NavbarItem>
              <Link href={"/about"}>
                <Icon name="Home"></Icon>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href={"/follow"}>
                <Icon name="Follow"></Icon>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href={"/answer"}>
                <Icon name="Answer"></Icon>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href={"/follow"}>
                <Icon name="Follow"></Icon>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href={"/follow"}>
                <Icon name="Notification"></Icon>
              </Link>
            </NavbarItem>
          </ListGroup>
        </MiddleSide>
        <RightSide>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <FormItem
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                prefix={<Icon name="Search" height="16" width="16" />}
                placeholder="Search Quora"
              />
            </FormItem>
          </Form>
        </RightSide>
      </NavbarWrapper>
    </HeaderContainer>
  );
};

export default Header;
