import React from 'react'
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from '../firebase';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch=useDispatch();
  const signInGoogleFunc = ()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user=result.user;
        dispatch({type:'LOGIN', payload: user})
    })

  }
  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50">
      <div className="w-1/3 h-2/3 rounded-lg bg-white flex flex-col items-center justify-center gap-1 ">
        <img className='w-44 ' src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Whatsapp-512.png" alt='' />
        <div className='font-bold  text-3xl '> Whatsap Login</div>
        <div onClick={signInGoogleFunc} className='border mt-5 px-4 py-2 rounded-lg bg-green-600 text-white cursor-pointer hover:opacity-90'> Google İle Giriş Yap</div>
      </div>
    </div>
  )
}

export default Login