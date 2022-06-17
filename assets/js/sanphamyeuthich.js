var yeuthich = new Array();
var giohang = new Array();


// Show toast 


 
function themvaogiohangtrongdanhsachyeuthich(x){
  
    var boxsp = x.parentElement.parentElement.parentElement
    
    var tensp = boxsp.children[1].children[0].children[0].innerText;
    var linkhinhanh =boxsp.children[0].children[0].src
    
    var giatien = boxsp.children[1].children[0].children[1].innerText; 
    console.log(tensp,linkhinhanh,giatien)
    
    var gh = sessionStorage.getItem("giohang");
     var giohang = JSON.parse(gh);
    
  
     var sp = new Array(tensp,linkhinhanh,giatien);
    
    
     
    //kiểm tra trong giỏ hàng
    
     var kt = 0;
     for(let i = 0 ;i < giohang.length;i++){
       
         if( giohang[i][0] == tensp){
             kt = 1 ;
            messagesanphamdatontaigiohangtrongdanhsachyeuthich();
             break;
 
      }
   }
     if(kt == 0){
         giohang.push(sp);
        
    
         messagethemvaogiohangthanhcongtrongdanhsachyeuthich();
         showcountsptrongdanhmucyeuthich();
         sessionStorage.setItem("giohang",JSON.stringify(giohang));


         // lỗi 
         showgiohangtrongsanphamyeuthich();
         
        
        
         
       
     }
     

    
   
    //         
    // //  }
      
       
  
    //  showcountsp();
    //  showmycart();
    


}
 

function themvaodanhsachyeuthich(x){
  
    var boxsp = x.parentElement.parentElement.parentElement.children
    
    var tensp = boxsp[2].innerText;
  
    var linkhinhanh =boxsp[0].children[0].src
   
    var giatien = boxsp[4].textContent; 
   
    
  
    var sp = new Array(tensp,linkhinhanh,giatien);
    
    
    
    //kiểm tra trongdanh sách yêu thích
   
    var kt = 0;
    for(let i = 0 ;i < yeuthich.length;i++){
       
        if( yeuthich[i][0] == tensp){
            kt = 1 ;
            messagesanphamdatontaitrongdanhsachyeuthich();
            break;
 
      }
    }
     if(kt == 0){
         yeuthich.push(sp);
       
         messagethemvaodanhsachyeuthichthanhcong();
        soluongsanphamyeuthich();
        // showmycart();
     }
     sessionStorage.setItem("yeuthich",JSON.stringify(yeuthich));
    
   
    //         
    // //  }
      
       
  
    //  showcountsp();
    //  showmycart();
    


}


// }
function showcountsptrongdanhmucyeuthich(){
    var gh = sessionStorage.getItem("giohang");
     var giohang = JSON.parse(gh);

    document.getElementById('soluonggiohangtrongdanhmucyeuthich').innerHTML=giohang.length;
   
}

function themvaodanhsachyeuthichsale(y){

    var boxsp = y.parentElement.parentElement.parentElement.children
    
    var tensp = boxsp[2].innerText;
   
    var linkhinhanh =boxsp[0].children[0].src
  
    var giatien = boxsp[4].children[1].textContent; 
    
  
    var sp = new Array(tensp,linkhinhanh,giatien)
    
    
    
    var kt = 0;
    for(let i = 0 ;i < yeuthich.length;i++){
       
        if( yeuthich[i][0] == tensp){
            kt = 1 ;
            messagesanphamdatontaitrongdanhsachyeuthich();
            break;
 
      }
    }
     if(kt == 0){
        yeuthich.push(sp);
        messagethemvaodanhsachyeuthichthanhcong();
        soluongsanphamyeuthich();
     
        // showmycart();
       
        //
     }

     //lưu giỏ hàng vào sessionStrorage 

     sessionStorage.setItem("yeuthich",JSON.stringify(yeuthich));

}

function soluongsanphamyeuthich(){
    document.getElementById('soluongsanphamyeuthich').innerHTML=yeuthich.length;
   
}


 




function showdanhmucsanphamyeuthich(){
    var yt = sessionStorage.getItem("yeuthich");
    var yeuthich = JSON.parse(yt);
    var danhmucyeuthich = document.getElementsByClassName('danhmucyeuthich')[0]
    document.getElementById('soluongyeuthich').innerHTML=yeuthich.length;  
    
    
  

    for(let i = 0;i < yeuthich.length ;i++){
       
        var noidunghangcuasanpham = `
        
        <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
            <div class="list-card-image">
                
                
                
                
                    <img src="${yeuthich[i][1]}" class="img-fluid item-img" style="width: 100%;height: 100%;">
               
            </div>
            <div class="p-3 position-relative">
                <div class="list-card-body">
                    <h6 class="mb-1"><a href="#" class="text-black">${yeuthich[i][0]}
                     </a>
                  </h6>
                    
                    <p class="text-gray mb-3 time"><span class="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i class="icofont-wall-clock"></i> ${yeuthich[i][2]}</span></p>
                </div>
                <div class="list-card-badge d-flex justify-content-between">
                    <button type="button" class="btn btn-danger" onclick="themvaogiohangtrongdanhsachyeuthich(this)">Thêm vào giỏ hàng</button>
                    <button type="button" class="btn btn-danger" onclick="xoasanphamtrongdanhsachyeuthich(this)"><i class="fa fa-trash"></i></button>
                </div>
            </div>
        </div>
        
    `
                var hangcuasanpham = document.createElement('div')
                hangcuasanpham.classList.add('col-md-4', 'col-sm-6', 'mb-4' ,'pb-2')
                
                
                hangcuasanpham.innerHTML = noidunghangcuasanpham;
                  danhmucyeuthich.append(hangcuasanpham);
                // danhmucyeuthich.innerHTML = noidunghangcuasanpham;
                
                
                     
    }
 
    
    
    
    

}
showdanhmucsanphamyeuthich();

function xoasanphamtrongdanhsachyeuthich(z){
    var itemRemovedanhsachyeuthich = z.parentElement.parentElement.parentElement.parentElement;
    var itemRemovedanhsachyeuthich2 =z.parentElement.parentElement.parentElement;
    console.log(itemRemovedanhsachyeuthich2)
     itemRemovedanhsachyeuthich.remove();
    
    var tensanphamtrongdanhsachyeuthich = itemRemovedanhsachyeuthich2.children[1].children[0].children[0].children[0].innerHTML;
   
    
    var yt = sessionStorage.getItem("yeuthich");
     var yeuthich = JSON.parse(yt);
     console.log(yeuthich)
    for(let i = 0;i < yeuthich.length;i++){
     if(yeuthich[i][0] == tensanphamtrongdanhsachyeuthich){
        
       yeuthich.splice(i,1)
        
        sessionStorage.setItem("yeuthich",JSON.stringify(yeuthich));
   
   }


     }
     

}
function showgiohangtrongsanphamyeuthich (){
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    var gioHang = document.getElementsByClassName('header__cart-list-item')[0]
    location.reload();

  

    for(let i = 0;i < giohang.length ;i++){
       
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
                   
                    <span class="header__cart-item-remove" onclick="xoasanphamgiohangtrongmucdanhsachyeuthich(this)">Xóa</span>
               </div>
           </div>
       </li>`
                var hangcuasanpham = document.createElement('div')
                hangcuasanpham.innerHTML = noidunghangcuasanpham;
                 gioHang.append(hangcuasanpham);
                
                
    }
    document.getElementById('soluonggiohangtrongdanhmucyeuthich').innerHTML=giohang.length; 
    
 
}

function showgiohangtrongsanphamyeuthichbandau (){
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    var gioHang = document.getElementsByClassName('header__cart-list-item')[0]
    

  

    for(let i = 0;i < giohang.length ;i++){
       
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
                   
                    <span class="header__cart-item-remove" onclick="xoasanphamgiohangtrongmucdanhsachyeuthich(this)">Xóa</span>
               </div>
           </div>
       </li>`
                var hangcuasanpham = document.createElement('div')
                hangcuasanpham.innerHTML = noidunghangcuasanpham;
                 gioHang.append(hangcuasanpham);
                
                
    }
    document.getElementById('soluonggiohangtrongdanhmucyeuthich').innerHTML=giohang.length; 
    
 
}
showgiohangtrongsanphamyeuthichbandau();

function xoasanphamgiohangtrongmucdanhsachyeuthich(y){
    var itemRemovegiohangchitiet = y.parentElement.parentElement.parentElement;
    itemRemovegiohangchitiet.remove();
    console.log(itemRemovegiohangchitiet);
    var tensanphamtronggiohangchitiet = itemRemovegiohangchitiet.children[1].children[0].children[0].innerHTML;
    console.log(tensanphamtronggiohangchitiet)
     //xóa trỏng mảng được lưu vào sessionStrorage;
     var gh = sessionStorage.getItem("giohang");
     var giohang = JSON.parse(gh);
     console.log(giohang)
   for(let i = 0;i < giohang.length;i++){
    if(giohang[i][0] == tensanphamtronggiohangchitiet){
        
        giohang.splice(i,1);
        
        sessionStorage.setItem("giohang",JSON.stringify(giohang));
    }


     }
     showcountsptrongdanhmucyeuthich();
     
 
} 



 


function messagethemvaodanhsachyeuthichthanhcong(){
    
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
toastr["success"]("Sản phẩm đã thêm mục yêu thích ", "Thông báo")
}

function messagesanphamdatontaitrongdanhsachyeuthich(){
    
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
      toastr["error"]("Sản phẩm đã có trong mục yêu thích", "Thông báo")
}

function messagethemvaogiohangthanhcongtrongdanhsachyeuthich(){
    
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

function messagesanphamdatontaigiohangtrongdanhsachyeuthich(){

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


