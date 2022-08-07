import { ProfileIconContainer } from "./ProfileStyled";
interface IProfile {
  children: any;
  height?: number;
  width?: number;
  nav?: boolean;
}
const Profile = ({ children, height, width, nav }: IProfile) => {
  return (
    <ProfileIconContainer height={height} width={width} nav={nav}>
      {children}
    </ProfileIconContainer>
  );
};

export default Profile;
