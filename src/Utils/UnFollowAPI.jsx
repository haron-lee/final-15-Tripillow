import { useRecoilValue } from 'recoil';
import URL from './URL';
import userToken from '../Recoil/userToken/userToken';

const UnFollowAPI = (account) => {
  const token = useRecoilValue(userToken);

  const unFollowUser = async () => {
    try {
      await fetch(`${URL}/profile/${account}/unfollow`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error('UnFollowAPI 응답이 없습니다.', error);
    }
  };

  return { unFollowUser };
};

export default UnFollowAPI;
