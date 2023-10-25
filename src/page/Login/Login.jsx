import React from 'react'
import LoginAnimation from '../../component/LoginAnnimation/LoginAnimation'
import LoginForm from '../../component/LoginForm/LoginForm'

const Login = () => {
  return (
    <div className='grid grid-cols-2 h-screen bg-slate-300'>

        {/* Animation  */}
        <div className="layout_animation flex justify-center items-center">
            <LoginAnimation/>
        </div>
        {/* Login Form  */}
        <div className="layout_loginForm">
          {/* Form đăng nhập */}
          <LoginForm/>
        </div>
    </div>
  )
}

export default Login