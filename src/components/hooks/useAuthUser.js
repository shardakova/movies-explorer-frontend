import { userApi } from '../../services/userApi';

const useAuthUser = () => {
  const state = userApi.endpoints.getMe.useQueryState();
  return state.data;
};

export default useAuthUser;
