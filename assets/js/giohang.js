


var giohang = new Array();

// Show toast 


function themvaogiohang(x){
  
    var boxsp = x.parentElement.parentElement.parentElement.children
    
    var tensp = boxsp[2].innerText;
  
    var linkhinhanh =boxsp[0].children[0].src
   
    var giatien = boxsp[4].textContent; 
   
    
  
    var sp = new Array(tensp,linkhinhanh,giatien);
    
    
    
    //kiểm tra trong giỏ hàng
   
    var kt = 0;
    for(let i = 0 ;i < giohang.length;i++){
       
        if( giohang[i][0] == tensp){
            kt = 1 ;
            messagesanphamdatontai();
            break;
 
      }
    }
     if(kt == 0){
         giohang.push(sp);
        
         messagethemvaogiohangthanhcong();
        showcountsp();
        showmycart();
     }

    
     sessionStorage.setItem("giohang",JSON.stringify(giohang));
    //         
    // //  }
      
       
  
    //  showcountsp();
    //  showmycart();
    


}

// }

function themvaogiohangsanphamsale(y){

    var boxsp = y.parentElement.parentElement.parentElement.children
    
    var tensp = boxsp[2].innerText;
   
    var linkhinhanh =boxsp[0].children[0].src
  
    var giatien = boxsp[4].children[1].textContent; 
    
  
    var sp = new Array(tensp,linkhinhanh,giatien)
    
    
    
    var kt = 0;
    for(let i = 0 ;i < giohang.length;i++){
       
        if( giohang[i][0] == tensp){
            kt = 1 ;
            messagesanphamdatontai();
            break;
 
      }
    }
     if(kt == 0){
        giohang.push(sp);
        messagethemvaogiohangthanhcong();
        showcountsp();
        showmycart();
       
        //
     }

     //lưu giỏ hàng vào sessionStrorage 

     sessionStorage.setItem("giohang",JSON.stringify(giohang));

}

function showcountsp(){
    document.getElementById('soluong').innerHTML=giohang.length;
   
}

function showmycart(){
  
    var gioHang = document.getElementsByClassName('header__cart-list-item')[0]
    for(let i = 0;i<giohang.length;i++){
       
        var noidunghangcuasanpham = `
        <li class="header__cart-item">
           <img src="${giohang[i][1]}" alt="Đang chạy" class="header__cart-img">
           <div class="header__cart-item-info">
               <div class="header__cart-item-head">
                   <h5 class="header__cart-item-name">${giohang[i][0]}</h5>
                   <div class="header__cart-item-price-wrap">
                       <span class="header__cart-item-price">${giohang[i][2]}</span>
                   <span class="header__cart-item-multiply">x</span>
                   <span class="header__cart-item-qnt">1</span>
                   </div>
               </div>
               <div class="header__cart-item-body">
                   
                    <span class="header__cart-item-remove" onclick="xoasanpham(this)">Xóa</span>
               </div>
           </div>
       </li>`
    }
    
    var hangcuasanpham = document.createElement('li')
    hangcuasanpham.innerHTML = noidunghangcuasanpham;
   
    gioHang.append(hangcuasanpham);
    sessionStorage.setItem("giohang",JSON.stringify(giohang));
    var khongcosanpham = document.getElementById('thongbaogiohang')
    khongcosanpham.remove()
    var buttonxemchitietgiohang = document.getElementById('btnXemchitiet')
    buttonxemchitietgiohang.style.backgroundColor="#f05d41";
    buttonxemchitietgiohang.style.cursor="pointer";

}
 

// function showgiohang (){
//     var gh = sessionStorage.getItem("giohang");
//     var giohang = JSON.parse(gh);
//     var gioHang = document.getElementsByClassName('header__cart-list-item')[0]
    
    
  

//     for(let i = 0;i < giohang.length ;i++){
       
//         var noidunghangcuasanpham = `
//         <li class="header__cart-item">
//            <img src="${giohang[i][1]}" alt="Đang chạy" class="header__cart-img">
//            <div class="header__cart-item-info">
//                <div class="header__cart-item-head">
//                    <h5 class="header__cart-item-name">${giohang[i][0]}</h5>
//                    <div class="header__cart-item-price-wrap">
//                        <span class="header__cart-item-price">${giohang[i][2]}</span>
//                    <span class="header__cart-item-multiply">x</span>
//                    <span class="header__cart-item-qnt">1</span>
//                    </div>
//                </div>
//                <div class="header__cart-item-body">
                   
//                     <span class="header__cart-item-remove" onclick="xoasanpham(this)">Xóa</span>
//                </div>
//            </div>
//        </li>`
//                 var hangcuasanpham = document.createElement('div')
//                 hangcuasanpham.innerHTML = noidunghangcuasanpham;
//                  gioHang.append(hangcuasanpham);
            
                
//     }
 
  
    
    
    

// }
// showgiohang();


function showgiohangchitiet (){
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    var giohangchitiet = document.getElementsByClassName('giohangchitiet')[0]
    var tongtienvnd = 0;
    var tongtiensanpham = 0;
    var tongtien = document.getElementById('tongtien');
  

    for(let i = 0;i < giohang.length ;i++){
       
        var noidunghangcuasanpham = `
        <div class="d-sm-flex justify-content-between my-4 pb-4 border-bottom">
                    <div class="media d-block d-sm-flex text-center text-sm-left">
                        <a class="cart-item-thumb mx-auto mr-sm-4" href="#"><img src="${giohang[i][1]}"></a>
                        <div class="media-body pt-3 ps-4">
                            <h3 class="product-card-title font-weight-semibold border-0 pb-0"><a href="#">${giohang[i][0]}</a></h3>
                           
                          
                            <div class="font-size-lg text-primary pt-2">${giohang[i][2]}</div>
                        </div>
                    </div>
                    <div class="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left" style="max-width: 10rem;">
                        <div class="form-group mb-2">
                            <label for="quantity1">Quantity</label>
                            <input class="form-control form-control-sm" type="number" id="quantity1" value="1" min="1" max="1" >
                        </div>
                       
                        <button class="btn-remove btn btn-outline-danger btn-sm btn-block mb-2" type="button" onclick="xoasanphamogiohangchitiet(this)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 mr-1">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>Remove</button>
                            
                    </div>
                </div>`
                var hangcuasanpham = document.createElement('div')
                hangcuasanpham.innerHTML = noidunghangcuasanpham;
                 giohangchitiet.append(hangcuasanpham);
                tongtiensanpham += (parseInt)(giohang[i][2]);
                
                // let str = "abcdef";
                // let position = 3;
                // let sub = "123";
                
                // let result = str.slice(0, position )  + sub + str.slice(position) ;
                // console.log(result)
                //> abc123def
                // var tongtiensanpham2 = tongtiensanpham.slice(0,3);
                //  console.log(tongtiensanpham2)
                
                // tongtienvnd = tongtiensanpham+".000";   
                
    }
    
 
    tinhtongtiengiohangchitiet();
    
    
    

}
showgiohangchitiet();


function xoasanpham(x){
    var itemRemove = x.parentElement.parentElement.parentElement;
    var tensanpham = itemRemove.children[1].children[0].children[0].innerText;
   
   itemRemove.remove();

   // xóa trỏng mảng được lưu vào sessionStrorage;
   for(let i = 0;i < giohang.length;i++){
       if(giohang[i][0] == tensanpham){
           giohang.splice(i,1);
           sessionStorage.setItem("giohang",JSON.stringify(giohang));
       }
   }
   
   showcountsp();
//  
}

function xoasanphamogiohangchitiet(y){
    var itemRemovegiohangchitiet = y.parentElement.parentElement;
    itemRemovegiohangchitiet.remove();
    var tensanphamtronggiohangchitiet = itemRemovegiohangchitiet.children[0].children[1].children[0].children[0].innerHTML;
    console.log(tensanphamtronggiohangchitiet)
     // xóa trỏng mảng được lưu vào sessionStrorage;
     var gh = sessionStorage.getItem("giohang");
     var giohang = JSON.parse(gh);
     console.log(giohang)
   for(let i = 0;i < giohang.length;i++){
    if(giohang[i][0] == tensanphamtronggiohangchitiet){
        
        giohang.splice(i,1);
        
        sessionStorage.setItem("giohang",JSON.stringify(giohang));
        location.reload();
    }


     }
     tinhtongtiengiohangchitiet();

}

function showgiohangkhiloadtrangindex(){
    var gioHang = document.getElementsByClassName('header__cart-list-item')[0]
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    console.log(giohang);
    for(let i = 0;i< giohang.length;i++){
       
        var noidunghangcuasanpham = `
        <li class="header__cart-item">
           <img src="${giohang[i][1]}" alt="Đang chạy" class="header__cart-img">
           <div class="header__cart-item-info">
               <div class="header__cart-item-head">
                   <h5 class="header__cart-item-name">${giohang[i][0]}</h5>
                   <div class="header__cart-item-price-wrap">
                       <span class="header__cart-item-price">${giohang[i][2]}</span>
                   <span class="header__cart-item-multiply">x</span>
                   <span class="header__cart-item-qnt">1</span>
                   </div>
               </div>
               <div class="header__cart-item-body">
                   
                    <span class="header__cart-item-remove" onclick="xoasanpham(this)">Xóa</span>
               </div>
           </div>
       </li>`
    }
    
    var hangcuasanpham = document.createElement('li')
    hangcuasanpham.innerHTML = noidunghangcuasanpham;
    
    gioHang.append(hangcuasanpham);
    
    document.getElementById('soluong').innerHTML=giohang.length;

}



function tinhtongtiengiohangchitiet(){
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    var giohangchitiet = document.getElementsByClassName('giohangchitiet')[0]
    var tongtiencuoicung = "";
    var tongtiensanpham = 0;
    var tongtien = document.getElementById('tongtien');
  

    for(let i = 0;i < giohang.length ;i++){
       
      
        tongtiensanpham += parseFloat(giohang[i][2]);
        var a = tongtiensanpham.toString()+".000";
        if(a.length>7){
            console.log(a)
                var b = a.slice(1)
                console.log(b)
                var c = a.substring(0,1)+".";
                console.log(c)
                var tongtienvnd = c+b;
                var tongtiencuoicung =tongtienvnd;
        }
        else {
            tongtiencuoicung =a;
        }
                
                
                
    }
 
    tongtien.innerHTML = tongtiencuoicung+" VND";
   
    var tongtienmang = new Array(tongtiencuoicung);
    console.log(tongtienmang)
    

    sessionStorage.setItem("tongtiencanthanhtoan",JSON.stringify(tongtienmang))
}


function messagethemvaogiohangthanhcong(){
    
        toastr.options = {
"closeButton": false,
"debug": true,
"newestOnTop": false,
"progressBar": true,
"positionClass": "toast-bottom-right",
"preventDuplicates": false,
"onclick": null,
"showDuration": "300",
"hideDuration": "1000",
"timeOut": "1000",
"extendedTimeOut": "1000",
"showEasing": "swing",
"hideEasing": "linear",
"showMethod": "fadeIn",
"hideMethod": "fadeOut"
}
toastr["success"]("Sản phẩm đã thêm vào giỏ hàng ", "Thông báo")
}

function messagesanphamdatontai(){
    
    toastr.options = {
        "closeButton": false,
        "debug": true,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "1000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
      toastr["error"]("Sản phẩm đã có trong giỏ hàng", "Thông báo")
}
   
function showsoluongsanphamtrongdanhmucyeuthich(){
    var yt = sessionStorage.getItem("yeuthich");
     var yeuthich = JSON.parse(yt);

    document.getElementById('soluonggiohangtrongdanhmucyeuthich').innerHTML=yeuthich.length;
   
}
showsoluongsanphamtrongdanhmucyeuthich();

var tongtientronghoadon = document.getElementById("tongtiencanthanhtoan");

console.log(tongtientronghoadon.innerHTML)
var tt = sessionStorage.getItem("tongtiencanthanhtoan");
var tongtien = JSON.parse(tt);

console.log(tongtien[0]);
tongtientronghoadon.innerHTML=tongtien[0] + " VND";


var today = new Date();
var date =today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var datengaynhan = parseInt(today.getDate()+parseInt(3))+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() ;
var dateTime = date+' '+time;

var ngaydathang = document.getElementById("ngaydathang");
ngaydathang.innerHTML=date;


var ngaynhan =document.getElementById("ngaynhanhang");
ngaynhan.innerHTML=datengaynhan;

var soluongtronghoadon = document.getElementById("soluongsanphamtronghoadon")
var gh = sessionStorage.getItem("giohang");
var giohang = JSON.parse(gh);
soluongtronghoadon.innerHTML=giohang.length;

const kitu = ["A", "B", "C", "D", "E", "F", "G", "Y", "U", "J", "K", "M"];
const kitu1 = kitu[Math.floor(Math.random() * kitu.length)];
const kitu2 = kitu[Math.floor(Math.random() * kitu.length)];
const kitu3 = kitu[Math.floor(Math.random() * kitu.length)];
const kitu4 = kitu[Math.floor(Math.random() * kitu.length)];
var  kituso = Math.floor(Math.random() * 1001);


madonhangcode=kitu1+kitu2+kitu3+kitu4+kituso;
var madonhang = document.getElementById("madonhang")
madonhang.innerHTML=madonhangcode;


var giohangdamua = new Array();
function thongtinmuahang(y){
    var dongymuahang = y.parentElement.parentElement.parentElement;
    
    var madonhang = dongymuahang.children[2].children[0].children[0].children[1].children[1].innerHTML;
    console.log(madonhang)
    var soluongsanpham= dongymuahang.children[2].children[4].children[0].children[1].children[1].innerHTML;
    console.log(soluongsanpham)
    var ngaydathang = dongymuahang.children[3].children[0].children[0].children[0].children[0].children[1].children[0].children[0].innerHTML
    console.log(ngaydathang)
    var ngaynhanhang = dongymuahang.children[3].children[0].children[0].children[0].children[1].children[1].children[0].children[0].innerHTML
    console.log(ngaynhanhang)
    var tongtien = document.getElementById("tongtiencanthanhtoan").innerHTML
    console.log(tongtien)
    
    var gh = sessionStorage.getItem("giohang");
     var giohang = JSON.parse(gh);
     var tensanpham = "";
     for(let i = 0; i < giohang.length;i++){
          tensanpham += giohang[i][0]+ ",";
          var listtensanpham = tensanpham.slice(0,-1)
     }
     var thongtinsanphamdamua = new Array(madonhang,soluongsanpham,ngaydathang,ngaynhanhang,tongtien,listtensanpham);
     giohangdamua.push(thongtinsanphamdamua);
     console.log(giohangdamua)
     
    localStorage.setItem("giohangdamua",JSON.stringify(giohangdamua));
    
    
}




  
    
    
    
    