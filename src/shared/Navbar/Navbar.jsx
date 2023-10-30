import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };
  const links = (
    <>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/about'}>About</Link>
      </li>
      <li>
        <Link to={'/services'}>Services</Link>
      </li>
      <li>
        <Link to={'/blog'}>Blog</Link>
      </li>
      <li>
        <Link to={'/contact'}>Contact</Link>
      </li>
      <li>
        <Link to={user?.email ? '/' : '/login'}>
          {user?.email ? (
            <>
              <Link to={'/booking'}>My Bookings</Link>
              <span onClick={handleLogout}>Logout</span>
            </>
          ) : (
            'Login'
          )}
        </Link>
      </li>
    </>
  );
  return (
    <div className='navbar bg-base-100 py-5'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            {
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            }
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-semibold'
          >
            {links}
          </ul>
        </div>
        <div className=''>
          <Link className='btn btn-ghost normal-case text-xl'>
            <img src={logo} alt='' className='' />
          </Link>
        </div>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 text-lg font-semibold'>
          {links}
        </ul>
      </div>
      <div className='navbar-end'>
        <a className='btn btn-outline btn-error capitalize font-bold text-lg'>
          Appointment
        </a>
      </div>
    </div>
  );
};

export default Navbar;
