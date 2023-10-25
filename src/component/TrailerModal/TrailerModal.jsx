import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
const TrailerModal = ({isModalOpen, onCancel,contentModal}) => {
 
useEffect(() => {
  

    return ()=>{
        console.log('hello');
      
    }
}, []);


  return (

      <Modal title="Trailer" open={isModalOpen} onCancel={onCancel} width={1000} footer={null}
afterClose={()=> {

    //Có thể sử dụng querySelectorAll nếu có hơn 2 thẻ iframe và nên sử dụng vòng lặp.
    let iframe = document.querySelector('iframe');
    if(iframe) {
        let src = iframe.src;
        iframe.src = src;
    }
}}
      >
       {contentModal}
      </Modal>
   
  );
};
export default TrailerModal;