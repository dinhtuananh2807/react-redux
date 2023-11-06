import {useState, useEffect} from 'react';



function useWindowSize () {

    const [windowSize, setWindowSize] = useState({
        widthWindow:1300,
        heightWindow:1300,
    });


    useEffect(() => {
      const handleSizeWindow = () => {
        setWindowSize({
            widthWindow:window.innerWidth,
            heightWindow: window.innerHeight,
        });
      };
      // chạy hàm handleSizeWindow để bắt được chiều dài và chiều cao thiết bị khi giao diện thay đổi

      handleSizeWindow();
      window.addEventListener("resize", handleSizeWindow);





      //xóa bỏ hàm handlesizeWindow khi component không còn xuất hiện trên giao diện


      return () => {
        window.removeEventListener("resize",handleSizeWindow);
      }

    }, []);
    


 return windowSize;
}

export default useWindowSize;