import React from 'react';
import CustomInput from '../components/CustomInput';

const ForgetPassword = () => {
  return (
    <div className='py-5' style={{ background: '#ffd333', minHeight: '100vh' }}>
      <br />
      <br />
      <br />

      <div className='my-5 w-25 bg-white rounded-3 mx-auto text-dark p-4'>
        <h3 className='text-center'>Forget Password</h3>
        <p className='text-center'>Please enter your new Password password</p>
        <form action=''>
          <CustomInput type='text' label='Email Address' id='email' />
          <button
            className='border-0 px-3 py-2 text-white fw-bold w-100'
            type='submit'
            style={{ background: '#ffd333' }}
          >
            Send Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
