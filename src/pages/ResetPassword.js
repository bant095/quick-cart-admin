import React from 'react';
import CustomInput from '../components/CustomInput';

const ResetPassword = () => {
  return (
    <div className='py-5' style={{ background: '#ffd333', minHeight: '100vh' }}>
      <br />
      <br />
      <br />

      <div className='my-5 w-25 bg-white rounded-3 mx-auto text-dark p-4'>
        <h3 className='text-center'>Reset Password</h3>
        <p className='text-center'>
          Please enter your email address to reset your password
        </p>
        <form action=''>
          <CustomInput type='password' label='New Password' id='password' />
          <CustomInput
            type='password'
            label='Confirm Password'
            id='confirmpass'
          />
          <button
            className='border-0 px-3 py-2 text-white fw-bold w-100'
            type='submit'
            style={{ background: '#ffd333' }}
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
