import React, { useEffect,useState} from 'react'
import { quanLyRapServ } from '../../services/quanLyRap';
import { Tabs } from 'antd';
import './tabLichChieu.scss';
import momment from 'moment';


const TabLichChieu = ({maHeThongRap}) => {

    const [cumRap, setCumRap] = useState([]);

    useEffect(()=>{
        quanLyRapServ.layThongTinLichChieuHeThongRap(maHeThongRap).then((res)=>{
            // console.log(res);
            setCumRap(res.data.content[0].lstCumRap);
       
        }).catch((err)=>{
            console.log(err);
        });
        
    },[]);

    

    console.log(cumRap);
  return (
    // đoạn text này của thầy nó render ra ngoài chưa
    //Chưa sao ý như trong vidoe nè
    // chưa thì thầy import sai thôi
    <div >
        <Tabs
        tabPosition={'left'}
        
        items={cumRap.map((item,index)=>{

            console.log(item);
            

            return {
                label: (<div className='text-left w-52'>
                    <h4 className='truncate'>{item.tenCumRap}</h4>
                    <p className='truncate'>{item.diaChi}</p>
                    
                </div>
                ),

                key: index,
                children: <div className='space-y-4' style={{height:'516px', overflowY:'scroll'}}>
                    {item.danhSachPhim?.map((i,index)=>{

                        return <div className='flex py-4'>
                            {/* div về hình  */}
                            <div className='mr-3'>
                                <img className='w-20 h-full object-cover' src={i.hinhAnh} alt="" />
                            </div>
                            {/* div về thông tin phim  */}
                            <div>
                                <h5 className='text-xl font-medium'>{i.tenPhim}</h5>

                            {/* đổ lịch chiếu phim  */}
                                <div className='grid grid-cols-2 gap-3'>
                                    {i.lstLichChieuTheoPhim.slice(0,4).map((lichChieu,index)=>{
                                                

                                        return (<p className='py-2 px-4 bg-gray-100 border border-grey-400 rounded font-bold space-x-2' key={index}><span className='text-green-500'>
                                            
                                            {momment(lichChieu.ngayChieuGioChieu).format("DD-MM-YYYY")}


                                            </span> <span>~</span><span className='text-orange-500'>{momment(lichChieu.ngayChieuGioChieu).format("hh:mm")}</span></p>);
                                        


                                    })}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            }
        })}

        className='tabLichChieu'
       
      />
 
    </div>
  )
}

export default TabLichChieu;