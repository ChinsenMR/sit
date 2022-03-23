import { useSelector } from "react-redux";
import { selectUserInfo } from "@/redux/slice";
export default function useAuth(): boolean {
  const store = useSelector(selectUserInfo);
  const local = localStorage.getItem("userInfo") || "";
  const target = local ? JSON.parse(local) : store;
  const loginStatus: boolean = target.loginStatus;
  return loginStatus;
}
