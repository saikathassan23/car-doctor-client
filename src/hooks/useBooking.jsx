import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useBooking = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
  const { data, isLoading, refetch, isError, isFetched } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      // const response = await fetch(
      //   `http://localhost:3000/booking?email=${user?.email}`,
      //   {
      //     credentials: 'include',
      //   }
      // );
      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // }
      // return response.json();
      const response = await axiosSecure.get(`/booking?email=${user?.email}`);
      const data = await response.data;
      return data;
    },
  });
  return { data, isLoading, isError, isFetched, refetch };
};

export default useBooking;
