import URL from './URL';
import userToken from '../Recoil/userToken/userToken';
import { useRecoilValue } from 'recoil';

const FollowerListAPI = (accountName) => {
  const token = useRecoilValue(userToken);

  const fetchFollower = async () => {
    try {
      const response = await fetch(`${URL}/profile/${accountName}/follower`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('FollowingAPI가 응답하지 않습니다', error);
    }
  };

  return { fetchFollower };
};

export default FollowerListAPI;
