import React from 'react'
import Lottie from 'react-lottie';
import * as LoadingAni from './../../assest/animation/LoadingAni.json';

const LoadingAni = () => {
    const defaultOptions = {
        //Animation lặp lại vô tận
        loop: true,
    
        //Animation tự động chạy
        autoplay: true, 
    
        //Animation muốn chạy
        animationData: LoadingAni,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }

    };

  return (
    <div className='fixed h-screen top-0 left-0 w-full bg-slate-100' style={{zIndex:'9999'}}>
        <Lottie options={defaultOptions}
    height={400}
    width={400}
    // isStopped={this.state.isStopped}
    // isPaused={this.state.isPaused}
    />
    </div>
  )
}

export default LoadingAni;