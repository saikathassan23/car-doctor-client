import { useQuery } from '@tanstack/react-query';
import ServiceCard from './ServiceCard';

const Services = () => {
  const { data, isLoading } = useQuery({
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
  if (isLoading) {
    return <div className='h-screen text-center'>loading...</div>;
  } else {
    return (
      <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
          {data?.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </>
    );
  }
};

export default Services;
