import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/authSlice'; // Ensure you import the action correctly
import { baseURL } from '../../axios/instance';

export const MailSignin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState('');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log('Form Output:', data);

    try {
      const response = await axios.post(`${baseURL}/auth/mail/SignIn`, data, { withCredentials: true });
      console.log('Response:', response.data);

      const  user  = response.data.data;
      console.log("userrrrr", user)
      if (user) {
        dispatch(setUser(user)); // Save user details in Redux store

        if (!user.isRegistrationCompleted) {
          navigate('/registration'); // Redirect to registration if incomplete
        } else {
          navigate('/main'); // Redirect to dashboard or other page
        }
      } else {
        setLoginError('User already exists or login failed');
      }
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      setLoginError('An error occurred. Please try again.');
    }
  };

  return (
    <div className='w-full lg:w-[35vw] h-full flex flex-col justify-center items-center'>
      <div className='font-semibold text-customWhite text-[32px] text-center pt-[20px]'>Login</div>
      <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
        {/* Email Field */}
        <div className='w-full mt-[30px] flex flex-col justify-center items-center'>
          <label className='text-customWhite text-[18px] font-semibold text-start w-[65%]'>Email</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Enter a valid email address',
              },
            })}
            type='text'
            placeholder='Enter Your Email'
            className='text-gray-300 bg-darkblack placeholder:text-slate-400 border-[1px] border-slate-400 w-[65%] h-[45px] rounded-[8px] mt-[10px] p-2 placeholder:text-[16px]'
          />
          {errors.email && <p className='text-red-500 text-[14px]'>{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div className='w-full mt-[25px] flex flex-col justify-center items-center'>
          <label className='text-customWhite text-[18px] font-semibold text-start w-[65%]'>Password</label>
          <input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
              },
            })}
            type='password'
            placeholder='Enter Your Password'
            className='text-gray-300 bg-darkblack placeholder:text-slate-400 border-[1px] border-slate-400 w-[65%] h-[45px] rounded-[8px] mt-[10px] p-2 placeholder:text-[16px]'
          />
          {errors.password && <p className='text-red-500 text-[14px]'>{errors.password.message}</p>}
        </div>

        {/* Error Message */}
        {loginError && <p className='text-red-500 text-[14px] mt-2'>{loginError}</p>}

        {/* Submit Button */}
        <div className='w-full flex justify-center items-center my-[50px]'>
          <button
            type='submit'
            className='rounded-full py-[15px] px-[50px] bg-gradient-to-right text-[18px] font-medium text-customWhite'
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};
