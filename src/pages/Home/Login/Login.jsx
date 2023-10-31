/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login_bg from '../../../assets/images/login/login.svg';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';
const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        console.log('login -- ', result.user);

        // access token generate
        // shifted this to authProvider because authProvider
        // keeps tracks of the users info about login and logout
        // const user = {
        //   email: result.user.email,
        // };
        axiosSecure
          .post(`/jwt`, { email: result.user.email })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error.message);
          });

        navigate(location.state ? location.state : '/');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className='hero min-h-screen'>
      <div className='hero-content flex-col lg:flex-row md:gap-32 gap-5'>
        <div className=''>
          <img src={login_bg} alt='login_bg' />
        </div>
        <div className='card w-full max-w-sm border-2 rounded-none'>
          <form onSubmit={handleLogin} className='card-body md:py-10'>
            <h1 className='text-center text-3xl'>Login</h1>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='email'
                name='email'
                className='input input-bordered'
                defaultValue={'abc@bank.com'}
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='password'
                name='password'
                defaultValue={'123456'}
                className='input input-bordered'
                required
              />
              <label className='label'>
                <a href='#' className='label-text-alt link link-hover'>
                  Forgot password?
                </a>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button
                type='submit'
                className='btn bg-[#FF3811] text-white capitalize'
              >
                Sign In
              </button>
            </div>
            <div className='text-center'>
              <Link to={'/register'}>
                Don't have an account?{' '}
                <span className='text-[#FF3811] '>Sign Up</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
