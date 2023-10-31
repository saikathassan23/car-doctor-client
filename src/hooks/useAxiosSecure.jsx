import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});
const useAxiosSecure = () => {
  const goTo = useNavigate();
  const { logout } = useContext(AuthContext);
  axiosSecure.interceptors.response.use(
    (response) => {
      console.log('response: ' + response);
      return response;
    },
    (err) => {
      console.log('error from axios secure-- ', err);
      logout()
        .then(() => {
          goTo('/login');
        })
        .catch((err) => {
          console.log(err.message);
        });
      return err;
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
