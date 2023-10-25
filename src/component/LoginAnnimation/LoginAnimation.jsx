import React from 'react';
import Lottie from 'react-lottie'
import * as loginAnimation from './../../assest/animation/loginAnimation.json'

const LoginAnimation = () => {
  const defaultOptions = {
    //Animation lặp lại vô tận
    loop: true,

    //Animation tự động chạy
    autoplay: true, 

    //Animation muốn chạy
    animationData: loginAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (
    <div>
      
    <Lottie options={defaultOptions}
    height={400}
    width={400}
    // isStopped={this.state.isStopped}
    // isPaused={this.state.isPaused}
    />
    
    </div>
  )
}

export default LoginAnimation