import {useTypedSelector} from "./useTypedSelector";

export const useAuth = () => {
  const {email, id, token} = useTypedSelector(state => state.userAuth.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}