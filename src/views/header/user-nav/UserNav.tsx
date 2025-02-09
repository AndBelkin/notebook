import { FC } from "react";
import { AuthUser } from "../../../app/authSlice";
import Button from "../../../components/button/Button";
import { useAppDispatch } from "../../../app/hooks";
import { logoutUser } from "../../../app/authSlice/authSlice";

interface UserNavProps {
  user: AuthUser;
}

const UserNav: FC<UserNavProps> = ({ user }: UserNavProps) => {
  const dispatch = useAppDispatch();
  const logout = () => dispatch(logoutUser());
  return (
    <nav className="user-nav">
      <p className="user-nav-login">{user.login}</p>
      <Button type="outline" onClick={logout}>
        Log out
      </Button>
    </nav>
  );
};

export default UserNav;
