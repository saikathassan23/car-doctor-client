import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';

const Booking = () => {
  const { user } = useContext(AuthContext);

  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/booking?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setBookings(res.data);
      });
  }, [user?.email]);
  const handleDelete = (id) => {
    const agree = confirm(`Are you sure you want to delete?`);
    if (agree) {
      fetch(`http://localhost:3000/booking/${id}`, {
        method: 'DELETE',
      })
        .then((res) => {
          console.log(res);
          const remaining = bookings.filter((booking) => booking._id != id);
          setBookings(remaining);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  const handleStatus = (id) => {
    fetch(`http://localhost:3000/booking/${id}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ status: 'approved' }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id != id);
          const updatedOne = bookings.find((booking) => booking._id === id);
          updatedOne.status = 'approved';
          const updateBookings = [updatedOne, ...remaining];
          setBookings(updateBookings);
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
          {bookings?.map((booking) => (
            <BookingRow
              key={booking._id}
              booking={booking}
              handleDelete={handleDelete}
              handleStatus={handleStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Booking;
