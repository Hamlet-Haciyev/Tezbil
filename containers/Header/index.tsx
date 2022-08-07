import Link from "next/link";
import {
  HeaderContainer,
  NavbarWrapper,
  Logo,
  LeftSide,
  MiddleSide,
  RightSide,
  ListGroup,
} from "./HeaderStyled";
import Icon from "../../helpers/icons";
import { FormItem, NavbarItem, Input, Profile } from "../../components";
import { Form, Avatar } from "antd";
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
          <Profile height={35} width={35} nav={true}>
            <Avatar size={35} icon={<UserOutlined />} />
          </Profile>
        </RightSide>
      </NavbarWrapper>
    </HeaderContainer>
  );
};

export default Header;
