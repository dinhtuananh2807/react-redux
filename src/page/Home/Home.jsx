import React, { useEffect, useState } from 'react'
import { quanlyPhimServ } from '../../services/quanLyPhim'
import BannerCarousel from '../../component/Carousel/Carousel';
import ListMovie from '../../component/ListMovie/ListMovie';
import { useDispatch } from 'react-redux';
import { getAllMovieAPI } from '../../redux/phimSlice';
import TabHeThongRap from '../../component/TabHeThongRap/TabHeThongRap';

const Home = () => {

  const dispatch = useDispatch();

  const [listBanner,setListBanner] = useState([]);


    useEffect(() => {
        
        quanlyPhimServ.getAllBanner().then((result)=>{
            console.log(result);
            //setState
            setListBanner(result.data.content);
        }).catch((error)=>{
            console.log(error);
        });

        dispatch(getAllMovieAPI());
        
     
    }, [])
    
  return (
    <div>
      <BannerCarousel listBanner={listBanner}/>
      <ListMovie/>
      <TabHeThongRap/>
    </div>
  )
}

export default Home