import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div className='card bg-base-100 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img src={img} alt={title} className='rounded-xl w-full h-[200px]' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <div className='card-actions flex justify-between items-center text-[#FF3811]'>
          <p className=''>Price : ${price}</p>
          <Link to={`/services/${_id}`} className='flex justify-end mr-2 text-xl'>
            <FiArrowRight className='cursor-pointer'/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
