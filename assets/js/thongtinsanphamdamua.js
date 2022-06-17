

function showthongtinsanphamdamua(){
    var ghdm = localStorage.getItem("giohangdamua");
    var thongtin = JSON.parse(ghdm);
    var thongtinmuahang = document.getElementsByClassName('thongtinmuahang')[0]
    console.log(thongtinmuahang)
    for (let i = 0;i < thongtin.length ;i++ ){
        var noidunghangcuasanpham = `
        <div class="row p-2 bg-white border rounded ">
                                        <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="./assets/img/secondhand_logo.png"></div>
                                        <div class="col-md-6 mt-1">
                                            <h5 class="fw-bold">Mã đơn hàng : <span class="text-danger" id="madonhang">${thongtin[i][0]}</span></h5>
                                           
                                           
                                            <p class="text-justify text-truncate para mb-0 text-info">Ngày đặt hàng : <span class="text-muted text-danger" id="ngaydathang">${thongtin[i][2]}</span></p>
                                          
                                            <p class="text-justify text-truncate para mb-0 text-info">Ngày nhận hàng : <span class="text-muted" id="ngaynhathang">${thongtin[i][3]}</span></p>
                                            <p class="text-justify text-truncate para mb-0 text-info">Số lượng : <span class="text-muted" id="soluong">${thongtin[i][1]}</span></p>
                                            <p class="text-justify text-truncate para mb-0 text-info">Tổng tiền thanh toán : <span class="text-muted" id="tongtien">${thongtin[i][4]}</span></p>
                                            <p class="text-justify text-truncate para mb-0 text-info">Tên mặt hàng : <span class="text-muted" id="tenmathang">${thongtin[i][5]}</span></p>

                                        </div>
                                        <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                            <div class="d-flex flex-row align-items-center">
                                                <h4 class="mr-1">Đang giao hàng</h4>
                                            </div>
                                            <h6 class="text-success">Miễn phi giao hàng</h6>
                                            <button class="btn btn-danger">Liên hệ hủy đơn hàng</button>
                                        </div>
        `
                var hangcuasanpham = document.createElement('div')
                hangcuasanpham.innerHTML = noidunghangcuasanpham;
                thongtinmuahang.append(hangcuasanpham);
              
    }
}

showthongtinsanphamdamua();



