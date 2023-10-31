import Lottie from 'lottie-react';
import carAnimation from '../../assets/carAnimation.json';
import useBooking from '../../hooks/useBooking';
import BookingRow from './BookingRow';

const Booking = () => {
  const { data: bookings, isLoading, refetch } = useBooking();

  const handleDelete = (id) => {
    const agree = confirm(`Are you sure you want to delete?`);
    if (agree) {
      fetch(`http://localhost:3000/booking/${id}`, {
        method: 'DELETE',
      })
        .then((res) => {
          console.log(res);
          refetch();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  const handleStatus = (id) => {
    fetch(
      `http://localhost:3000/booking/${id}`,
      {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ status: 'approved' }),
      },
      { withCredentials: true }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const updatedOne = bookings.find((booking) => booking._id === id);
          updatedOne.status = 'approved';
          console.log(updatedOne);
          refetch();
        }
      });
  };

  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>
            <th>
              <label>
                <p>Delete</p>
              </label>
            </th>
            <th></th>
            <th>Service</th>
            <th>Date</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <div className=''>
              <Lottie animationData={carAnimation} />
            </div>
          ) : (
            bookings?.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleStatus={handleStatus}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Booking;
