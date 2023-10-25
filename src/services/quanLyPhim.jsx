import { https } from "./config";

export const quanlyPhimServ = {
    //phương thức gọi dữ liệu

    getAllBanner: () => {

        //tham số thứ nhất là endpoint của URL được gọi
        // tham số thứ 2 là data đươc truyền vào nếu API cần được gọi dữ liệu
        //Cụ thể là phương thức post
        return https.get('/api/QuanLyPhim/LayDanhSachBanner');
    }
}