import React from "react";
import { Space, Table, Tag, Popconfirm} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { quanlyPhimServ } from "../../services/quanLyPhim";
import { getAllMovieAPI } from "../../redux/phimSlice";

const TablePhim = () => {
    const dispatch = useDispatch();
    const columns = [
        {
          title: "Mã phim",
          dataIndex: "maPhim",
          key: "maPhim",
          render: (text) => <a>{text}</a>,
        },
        {
          title: "Hình ảnh",
          dataIndex: "hinhAnh",
          key: "hinhAnh",
          render: (text, record, index) => {
            return <img src={text} alt="" className="h-20" />;
          },
        },
        {
          title: "Tên Phim",
          dataIndex: "tenPhim",
          key: "tenPhim",
        },
      
        {
          title: "Mô tả",
          dataIndex: "moTa",
          key: "moTa",
        },
      
        {
          title: "Hành đông",
          key: "action",
          render: (_, record) => (
            <Space size="middle">
              <button className="text-xl text-blue-500">
                <i class="fa-regular fa-pen-to-square"></i>
              </button>
      
              <Popconfirm
                title="Xóa phim"
                description="Ban có chắc muốn xóa phim?"
              //  , Popconfirm
              onConfirm={()=>{
                  console.log(record);
                  //xóa phim khỏi danh sách
                  quanlyPhimServ.deleteMovie(record.maPhim).then((res)=>{
                      console.log(res);
                      //reload lại data trên giao diện
                        dispatch(getAllMovieAPI());
                 
                  }).catch((err)=>{
                      console.log(err);
                      //thông báo lý do xóa thất bại
                      
                  });
              }}
      
              // onCancel={cancel}
                okText="Có"
                cancelText="Không" okButtonProps={{className:"bg-red-500 hover:bg-red-600"}}
              >
                <button className="text-xl text-red-500">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </Popconfirm>
            </Space>
          ),
        },
      ];
      
  const { listPhim } = useSelector((state) => state.phimSlice);
  console.log(listPhim);
  return (
    <div>
      <Table columns={columns} dataSource={listPhim} />
    </div>
  );
};

export default TablePhim;
