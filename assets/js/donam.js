
showgiohangtrongsanphambandau();
soluongsanphamyeuthichtrongsanpham();
function themvaodanhsachyeuthichtrongsanpham(x){
  
    var boxsp = x.parentElement.parentElement.parentElement.children
    
    var tensp = boxsp[2].innerText;
  
    var linkhinhanh =boxsp[0].children[0].src
   
    var giatien = boxsp[4].textContent; 
   
    
  
    var sp = new Array(tensp,linkhinhanh,giatien);
    
    var yt = sessionStorage.getItem("yeuthich");
    var yeuthich = JSON.parse(yt);
    
    
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
         document.getElementById('soluongsanphamyeuthich').innerHTML=yeuthich.length;
        sessionStorage.setItem("yeuthich",JSON.stringify(yeuthich));
        
     }
   
    
   
    


}
function themvaodanhsachyeuthichsaletrongsanpham(y){

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
        document.getElementById('soluongsanphamyeuthich').innerHTML=yeuthich.length;
       sessionStorage.setItem("yeuthich",JSON.stringify(yeuthich));
     
     }

     

}
function themvaogiohangtrongsampham(x){
  
    var boxsp = x.parentElement.parentElement.parentElement.children
    
    var tensp = boxsp[2].innerText;
  
    var linkhinhanh =boxsp[0].children[0].src
   
    var giatien = boxsp[4].textContent; 
   
    
  
    var sp = new Array(tensp,linkhinhanh,giatien);
    
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    
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
        soluongsanphamyeuthichtrongsanpham();
        sessionStorage.setItem("giohang",JSON.stringify(giohang));
        showgiohangtrongsanpham();
     }

   
    //         
    // //  }
      
       
  
    //  showcountsp();
    //  showmycart();
    


}

function themvaogiohangsanphamsaletrongsanpham(y){

    var boxsp = y.parentElement.parentElement.parentElement.children
    
    var tensp = boxsp[2].innerText;
   
    var linkhinhanh =boxsp[0].children[0].src
  
    var giatien = boxsp[4].children[1].textContent; 
    
  
    var sp = new Array(tensp,linkhinhanh,giatien)
    
    
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
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
        soluongsanphamyeuthichtrongsanpham();
        sessionStorage.setItem("giohang",JSON.stringify(giohang));
        showgiohangtrongsanpham();
       
        //
     }

     //lưu giỏ hàng vào sessionStrorage 

     

}
function soluongsanphamyeuthichtrongsanpham(){
    var yt = sessionStorage.getItem("yeuthich");
     var yeuthich= JSON.parse(yt);

    document.getElementById('soluongsanphamyeuthich').innerHTML=yeuthich.length;
   
}


function showgiohangtrongsanpham (){
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
    document.getElementById('soluonggiohangtrongsanpham').innerHTML=giohang.length; 
    
 
}
function showgiohangtrongsanphambandau (){
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
                   
                    <span class="header__cart-item-remove" onclick="xoasanphamgiohangtrongsanpham(this)">Xóa</span>
               </div>
           </div>
       </li>`
                var hangcuasanpham = document.createElement('div')
                hangcuasanpham.innerHTML = noidunghangcuasanpham;
                 gioHang.append(hangcuasanpham);
                
                
    }
    document.getElementById('soluonggiohangtrongsanpham').innerHTML=giohang.length; 
    
 
}
function xoasanphamgiohangtrongsanpham(y){
    var itemRemovegiohangchitiet = y.parentElement.parentElement.parentElement;
    itemRemovegiohangchitiet.remove();
    var tensanphamtronggiohangchitiet = itemRemovegiohangchitiet.children[1].children[0].children[0].innerHTML;
    console.log(tensanphamtronggiohangchitiet)
     // xóa trỏng mảng được lưu vào sessionStrorage;
     var gh = sessionStorage.getItem("giohang");
     var giohang = JSON.parse(gh);
     console.log(giohang)
   for(let i = 0;i < giohang.length;i++){
    if(giohang[i][0] == tensanphamtronggiohangchitiet){
        
        giohang.splice(i,1);
        document.getElementById('soluonggiohangtrongsanpham').innerHTML=giohang.length;
        sessionStorage.setItem("giohang",JSON.stringify(giohang));
    }


     }
     
     
     
//  
} 