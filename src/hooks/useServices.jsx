import { useQuery } from '@tanstack/react-query';

const useServices = () => {
  const { data, isLoading, refetch, isError, isFetched } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/services', {
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });
  return { data, isLoading, isError, isFetched, refetch };
};

export default useServices;
