import { updateProfile } from 'firebase/auth';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import login_bg from '../../../assets/images/login/login.svg';
import { AuthContext, auth } from '../../../providers/AuthProvider';
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name);

    createUser(email, password)
      .then((user) => {
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        form.reset();
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
          <form onSubmit={handleRegister} className='card-body md:py-24'>
            <h1 className='text-center text-3xl'>Sign Up</h1>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                name='name'
                placeholder='name'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='email'
                name='email'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                name='password'
                placeholder='password'
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
              <button className='btn bg-[#FF3811] text-white capitalize'>
                Sign Up
              </button>
            </div>
            <div className='text-center'>
              <Link to={'/login'}>
                Have an account?{' '}
                <span className='text-[#FF3811] '>Sign In</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
