import Link from "next/link";
import {
  HeaderContainer,
  NavbarWrapper,
  Logo,
  LeftSide,
  MiddleSide,
  RightSide,
  ListGroup,
  ProfileIconContainer,
} from "./HeaderStyled";
import Icon from "../../helpers/icons";
import { FormItem, NavbarItem, Input } from "../../components";
import { Form } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
const Header = () => {
  return (
    <HeaderContainer>
      <NavbarWrapper>
        <LeftSide>
          <Logo>Tezbil</Logo>
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
                placeholder="Search Tezbil"
              />
            </FormItem>
            {/* <Profil></Profil> */}
          </Form>
          <ProfileIconContainer>
            <Avatar size={35} icon={<UserOutlined />} />
          </ProfileIconContainer>
        </RightSide>
      </NavbarWrapper>
    </HeaderContainer>
  );
};

export default Header;
