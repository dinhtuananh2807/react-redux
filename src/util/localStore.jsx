export const saveLocalStore = (key, data) => {

    const dataString = JSON.stringify(data);
    localStorage.setItem(key,dataString);

    //lấy dữ liệu của người dùng lưu vào
    


};