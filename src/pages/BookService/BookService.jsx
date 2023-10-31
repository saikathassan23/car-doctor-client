import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../providers/AuthProvider';

const BookService = () => {
  const service = useLoaderData();
  const { price, title, _id, img } = service;
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const order_date = form.date.value;
    const number = form.number.value;
    const message = form.message.value;
    const order = {
      name,
      email,
      order_date,
      number,
      message,
      price,
      service: title,
      service_id: _id,
      image: img,
    };
    console.log(order);
    // post request
    axiosSecure
      .post('/booking', order)
      .then(function (response) {
        console.log('form book service booked --- ', response.data);
        form.reset();
      })
      .catch(function (error) {
        console.log('error in the booking request --', error.message);
      });
    // axios
    //   .post('http://localhost:3000/booking', order, { withCredentials: true })
    //   .then(function (response) {
    //     console.log('form book service booking --- ', response.data);
    //     form.reset();
    //   })
    //   .catch(function (error) {
    //     console.log('error in the booking request --', error.message);
    //   });
  };
  return (
    <div className='flex items-center justify-center bg-[#F3F3F3]'>
      <form
        onSubmit={handleOrder}
        className='w-full border rounded-none card-body space-y-5 md:px-32 md:py-16'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='form-control'>
            <input
              type='text'
              placeholder='Name'
              defaultValue={user?.displayName}
              name='name'
              className='input input-bordered'
              required
            />
          </div>
          <div className='form-control'>
            <input
              type='date'
              placeholder='Order Date'
              name='date'
              className='input input-bordered'
              required
            />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='form-control'>
            <input
              type='email'
              placeholder='email'
              defaultValue={user?.email}
              name='email'
              className='input input-bordered'
              required
            />
          </div>
          <div className='form-control'>
            <input
              type='tel'
              placeholder='Your Number'
              name='number'
              className='input input-bordered'
              required
            />
          </div>
        </div>
        <div className='w-full'>
          <textarea
            placeholder='Message'
            name='message'
            className='textarea textarea-bordered textarea-lg w-full'
          ></textarea>
        </div>
        <div className='form-control mt-6'>
          <button
            type='submit'
            className='btn  bg-[#FF3811] text-white capitalize'
          >
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookService;
