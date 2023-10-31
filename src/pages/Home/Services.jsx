import useServices from '../../hooks/useServices';
import ServiceCard from './ServiceCard';

const Services = () => {
  // const [data2, setData2] = useState([]);
  // const [loader, setLoader] = useState(true);
  // useEffect(() => {
  //   setLoader(true);
  //   axios
  //     .get('http://localhost:3000/services', { withCredentials: true })
  //     .then((res) => {
  //       console.log(res.data);
  //       setData2(res.data);
  //       setLoader(false);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  const { isLoading, data } = useServices();
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
