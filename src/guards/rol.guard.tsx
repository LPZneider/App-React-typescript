import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { Roles } from "../models";

interface Props {
  rol: Roles;
}

const rolGuard = ({ rol }: Props) => {
  const useState = useSelector((store: AppStore) => store.user);

  return <div>rol.guard</div>;
};
export default rolGuard;
