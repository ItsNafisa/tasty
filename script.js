let ham=document.getElementById('ham');
let headnav=document.getElementById('headnav');
let myul=document.getElementById('myul');
let getStartedBtn=document.querySelector('header .part1 .container .content a button');
let h2Txt=document.querySelector('header .part1 .container .content h2');
ham.onclick=function(){
    headnav.classList.toggle('myheig');
    myul.classList.toggle('show');
    getStartedBtn.classList.toggle('showingBtn');
    h2Txt.classList.toggle('showingBtn');
}
//start animation on about section
let servicesection=document.querySelector('.service .container .main-head');
let imgone=document.querySelector('.service .container .one .imgs img');
let imgtwo=document.querySelector('.service .container .two .imgs img');
window.addEventListener('scroll',()=>{
    // if(window.scrollY >= (servicesection.offsetTop-300)){
      if(window.scrollY >= (servicesection.offsetTop - 50)){
        imgone.classList.add('anime');
        imgtwo.classList.add('anime2');
    }
})
///end animation on about section
let allDishes=[
    {name:'Chicago Cheesecake',cat:'men',img:'images/istockphoto-1352497199-612x612.jpg',price:100,location:'#Cheesecake',quantity:1},
    {name:'Classic Cheesecake',cat:'men',img:'images/istockphoto-1225491381-612x612.jpg',price:200,location:'#Cheesecake',quantity:1},
    {name:'No bake Cheesecake',cat:'men',img:'images/istockphoto-1205169550-612x612.jpg',price:300,location:'#Cheesecake',quantity:1},
    {name:'Ricotta Cheesecake',cat:'men',img:'images/istockphoto-884055694-612x612.jpg',price:400,location:'#Cheesecake',quantity:1},
    {name:'Vegan Cheesecake',cat:'men',img:'images/istockphoto-157639523-612x612.jpg',price:500,location:'#Cheesecake',quantity:1},
    {name:'Philadelphia Cheesecake',cat:'men',img:'images/istockphoto-179640507-612x612.jpg',price:600,location:'#Cheesecake',quantity:1},

    {name:'Radicchio Meet',cat:'meren',img:'images/139206-food-plate-top-snack-view.png',price:100,location:'#special',quantity:1},
    {name:'Panzanella Pizza',cat:'mern',img:'images/images (2).jpeg',price:200,location:'#special',quantity:1},
    {name:'La Dolce Pizza',cat:'metn',img:'images/images (3).jpeg',price:300,location:'#special',quantity:1},
    {name:'Gourmet Pie',cat:'meyyn',img:'images/images (4).jpeg',price:400,location:'#special',quantity:1},
    {name:'Savory Slice',cat:'meyn',img:'images/images.jpeg',price:500,location:'#special',quantity:1},
    {name:'Palate Pleasures',cat:'meyn',img:'images/139206-food-plate-top-snack-view.png',price:600,location:'#special',quantity:1},

    {name:'Dignissimos quidem',cat:'meyyn',img:'images/menu-3.jpg',price:100,location:'#menu',quantity:1},
    {name:'Veniam Beatae',cat:'myen',img:'images/menu-4.jpg',price:200,location:'#menu',quantity:1},
    {name:'Nihil Dstinctio',cat:'meyn',img:'images/menu-5.jpg',price:300,location:'#menu',quantity:1},
    {name:'Incidunt Eius',cat:'myen',img:'images/menu-3.jpg',price:400,location:'#menu',quantity:1},
    
    {name:'Aperiam Dicta',cat:'myen',img:'images/menu-4.jpg',price:700,location:'#menu',quantity:1},
    {name:'Facere molestiae',cat:'myen',img:'images/menu-5.jpg',price:800,location:'#menu',quantity:1},
    {name:'Trattoria Magnifico',cat:'meyn',img:'images/menu-3.jpg',price:900,location:'#menu',quantity:1},
    {name:'Ristorante Rustico',cat:'meyn',img:'images/menu-4.jpg',price:500,location:'#menu',quantity:1},

    {name:'Vanilla Special',cat:'juice',img:'images/istockphoto-1388569808-170667a.webp',price:100,location:'#category',quantity:1},
    {name:'Cool Mint',cat:'juice',img:'images/photo-1619158403521-ed9795026d47.jpeg',price:200,location:'#category',quantity:1},
    {name:'Neapolitan',cat:'juice',img:'images/photo-1611928237590-087afc90c6fd.jpeg',price:300,location:'#category',quantity:1},
    {name:'Pina Colada',cat:'juice',img:'images/photo-1629993470807-33bfa488153b.jpeg',price:100,location:'#category',quantity:1},
    {name:'BlueBerry',cat:'juice',img:'images/photo-1562164143-8a9f06b11f47.jpeg',price:100,location:'#category',quantity:1},
    {name:'White Chocolate',cat:'juice',img:'images/photo-1553787499-6f9133860278.jpeg',price:100,location:'#category',quantity:1},

    {name:'Taco Salad',cat:'sea',img:'images/photo-1607532941433-304659e8198a.jpeg',price:100,location:'#category',quantity:1},
    {name:'Baked Salad',cat:'sea',img:'images/photo-1580013759032-c96505e24c1f.jpeg',price:200,location:'#category',quantity:1},
    {name:'Wedge Salad',cat:'sea',img:'images/photo-1599021419847-d8a7a6aba5b4.jpg',price:300,location:'#category',quantity:1},
    {name:'Beet Salad',cat:'sea',img:'images/photo-1592417817098-8fd3d9eb14a5.jpeg',price:100,location:'#category',quantity:1},
    {name:'Bulgur Salad',cat:'sea',img:'images/premium_photo-1690561082029-0eb2ed65a09f.jpg',price:100,location:'#category',quantity:1},
    {name:'Potato Salad',cat:'sea',img:'images/istockphoto-529980296-612x612.jpg',price:100,location:'#category',quantity:1},

    {name:'Posh Pizzeria',cat:'pizaa',img:'images/istockphoto-182148711-612x612.jpg',price:100,location:'#category',quantity:1},
    {name:'Bella Napoli',cat:'pizaa',img:'images/istockphoto-183889977-612x612.jpg',price:200,location:'#category',quantity:1},
    {name:'Dolce Vita',cat:'pizaa',img:'images/gettyimages-172658008-612x612.jpg',price:300,location:'#category',quantity:1},
    {name:'Presto Pizza',cat:'pizaa',img:'images/gettyimages-174912581-612x612.jpg',price:100,location:'#category',quantity:1},
    {name:'Artisan Pie',cat:'pizaa',img:'images/gettyimages-184098729-612x612.jpg',price:100,location:'#category',quantity:1},
    {name:'Elite Pizza',cat:'pizaa',img:'images/gettyimages-1159550771-612x612.jpg',price:100,location:'#category',quantity:1},
];
allDishesCopy=[
  {name:'Chicago Cheesecake',cat:'men',img:'images/istockphoto-1352497199-612x612.jpg',price:100,location:'#Cheesecake',quantity:1},
  {name:'Classic Cheesecake',cat:'men',img:'images/istockphoto-1225491381-612x612.jpg',price:200,location:'#Cheesecake',quantity:1},
  {name:'No bake Cheesecake',cat:'men',img:'images/istockphoto-1205169550-612x612.jpg',price:300,location:'#Cheesecake',quantity:1},
  {name:'Ricotta Cheesecake',cat:'men',img:'images/istockphoto-884055694-612x612.jpg',price:400,location:'#Cheesecake',quantity:1},
  {name:'Vegan Cheesecake',cat:'men',img:'images/istockphoto-157639523-612x612.jpg',price:500,location:'#Cheesecake',quantity:1},
  {name:'Philadelphia Cheesecake',cat:'men',img:'images/istockphoto-179640507-612x612.jpg',price:600,location:'#Cheesecake',quantity:1},

  {name:'Radicchio Meet',cat:'meren',img:'images/139206-food-plate-top-snack-view.png',price:100,location:'#special',quantity:1},
  {name:'Panzanella Pizza',cat:'mern',img:'images/images (2).jpeg',price:200,location:'#special',quantity:1},
  {name:'La Dolce Pizza',cat:'metn',img:'images/images (3).jpeg',price:300,location:'#special',quantity:1},
  {name:'Gourmet Pie',cat:'meyyn',img:'images/images (4).jpeg',price:400,location:'#special',quantity:1},
  {name:'Savory Slice',cat:'meyn',img:'images/images.jpeg',price:500,location:'#special',quantity:1},
  {name:'Palate Pleasures',cat:'meyn',img:'images/139206-food-plate-top-snack-view.png',price:600,location:'#special',quantity:1},

  {name:'Dignissimos quidem',cat:'meyyn',img:'images/menu-3.jpg',price:100,location:'#menu',quantity:1},
  {name:'Veniam Beatae',cat:'myen',img:'images/menu-4.jpg',price:200,location:'#menu',quantity:1},
  {name:'Nihil Dstinctio',cat:'meyn',img:'images/menu-5.jpg',price:300,location:'#menu',quantity:1},
  {name:'Incidunt Eius',cat:'myen',img:'images/menu-3.jpg',price:400,location:'#menu',quantity:1},
  
  {name:'Aperiam Dicta',cat:'myen',img:'images/menu-4.jpg',price:700,location:'#menu',quantity:1},
  {name:'Facere molestiae',cat:'myen',img:'images/menu-5.jpg',price:800,location:'#menu',quantity:1},
  {name:'Trattoria Magnifico',cat:'meyn',img:'images/menu-3.jpg',price:900,location:'#menu',quantity:1},
  {name:'Ristorante Rustico',cat:'meyn',img:'images/menu-4.jpg',price:500,location:'#menu',quantity:1},

  {name:'Vanilla Special',cat:'juice',img:'images/istockphoto-1388569808-170667a.webp',price:100,location:'#category',quantity:1},
  {name:'Cool Mint',cat:'juice',img:'images/photo-1619158403521-ed9795026d47.jpeg',price:200,location:'#category',quantity:1},
  {name:'Neapolitan',cat:'juice',img:'images/photo-1611928237590-087afc90c6fd.jpeg',price:300,location:'#category',quantity:1},
  {name:'Pina Colada',cat:'juice',img:'images/photo-1629993470807-33bfa488153b.jpeg',price:100,location:'#category',quantity:1},
  {name:'BlueBerry',cat:'juice',img:'images/photo-1562164143-8a9f06b11f47.jpeg',price:100,location:'#category',quantity:1},
  {name:'White Chocolate',cat:'juice',img:'images/photo-1553787499-6f9133860278.jpeg',price:100,location:'#category',quantity:1},

  {name:'Taco Salad',cat:'sea',img:'images/photo-1607532941433-304659e8198a.jpeg',price:100,location:'#category',quantity:1},
  {name:'Baked Salad',cat:'sea',img:'images/photo-1580013759032-c96505e24c1f.jpeg',price:200,location:'#category',quantity:1},
  {name:'Wedge Salad',cat:'sea',img:'images/photo-1599021419847-d8a7a6aba5b4.jpg',price:300,location:'#category',quantity:1},
  {name:'Beet Salad',cat:'sea',img:'images/photo-1592417817098-8fd3d9eb14a5.jpeg',price:100,location:'#category',quantity:1},
  {name:'Bulgur Salad',cat:'sea',img:'images/premium_photo-1690561082029-0eb2ed65a09f.jpg',price:100,location:'#category',quantity:1},
  {name:'Potato Salad',cat:'sea',img:'images/istockphoto-529980296-612x612.jpg',price:100,location:'#category',quantity:1},

  {name:'Posh Pizzeria',cat:'pizaa',img:'images/istockphoto-182148711-612x612.jpg',price:100,location:'#category',quantity:1},
  {name:'Bella Napoli',cat:'pizaa',img:'images/istockphoto-183889977-612x612.jpg',price:200,location:'#category',quantity:1},
  {name:'Dolce Vita',cat:'pizaa',img:'images/gettyimages-172658008-612x612.jpg',price:300,location:'#category',quantity:1},
  {name:'Presto Pizza',cat:'pizaa',img:'images/gettyimages-174912581-612x612.jpg',price:100,location:'#category',quantity:1},
  {name:'Artisan Pie',cat:'pizaa',img:'images/gettyimages-184098729-612x612.jpg',price:100,location:'#category',quantity:1},
  {name:'Elite Pizza',cat:'pizaa',img:'images/gettyimages-1159550771-612x612.jpg',price:100,location:'#category',quantity:1},
]
//start favorite
          let sandFavbtn=document.querySelectorAll('.desert .container .cards .card .twoImg .favSandBtn img');  
         let cartArray=[];
         let collectPrice=[];
          let ar=[];
         let sum;

          //add attribute to each element
          let sandWidchName=document.querySelectorAll('.desert .container .cards .card .content h3');
for(let i=0;i<sandFavbtn.length;i++){
    sandFavbtn[i].setAttribute('data-index',sandWidchName[i].textContent);
}
sandFavbtn.forEach(function(fa){   
            fa.onclick=function(){
              if(fa.classList.contains('active')){
                fa.classList.remove('active');
                fa.src="images/blackHeart.png";
                let m=fa.dataset.index;
                localStorage.removeItem(m.toString());

                ar=[];
                for(let t=0;t<allDishes.length;t++){
                  if(allDishes[t].name == localStorage.getItem(allDishes[t].name)){
              ar.push(allDishes[t].name)
                  }
                  
                } 
              }else{
                fa.classList.add('active');
                fa.src='images/redHeart.png';
                let m=fa.dataset.index;
                localStorage.setItem(m.toString(),m.toString());
                ar=[];
                for(let t=0;t<allDishes.length;t++){
                  if(allDishes[t].name == localStorage.getItem(allDishes[t].name)){
              ar.push(allDishes[t].name)
                  }
                  
                } 
              }
            }
          })

           //check local storage
          for(let k=0;k<sandFavbtn.length;k++){
          if(localStorage.getItem(sandFavbtn[k].getAttribute('data-index')) != null){
            sandFavbtn[k].classList.add('active');
            sandFavbtn[k].src='images/redHeart.png';
              }
        }
//end favorite

//start cart function for sandwitch section

let sandwitchCartBtn=document.querySelectorAll('.desert .container .cards .card .content .market');
for(let y=0;y<sandwitchCartBtn.length;y++){
  sandwitchCartBtn[y].setAttribute('cartname',sandWidchName[y].textContent);
  sandwitchCartBtn[y].setAttribute('clickTime',0);
  // console.log(sandwitchCartBtn[y])
  handleCartFunctionality(sandwitchCartBtn[y]);
}
function handleCartFunctionality(btn){
  btn.onclick=function(){
   let clickTimeStr=btn.getAttribute('clickTime');
   let clickTimeInt=parseInt(clickTimeStr);
   if(clickTimeInt == 1){
   
     return ;
   }
   let newClickTime=clickTimeInt+1;
   btn.style.display='none'
   btn.setAttribute('clickTime',newClickTime);
    sum=0;
 for(let m=0;m<allDishes.length;m++){
 if(allDishes[m].name == btn.getAttribute('cartname')){
   
 cartArray.push(allDishes[m]);
 console.log('cartArraySandwidh'+cartArray)
 }
 }
  }

}
//end cart function for sandwitch section

//start showing cart list by clicking on cart icon in the navbar
let cartIcon=document.querySelector('nav .market');
let cartIcon22=document.querySelector('nav #CartPhone');
let plusButtonArray=[];
let minusButtonArray=[];
let priceArray=[];
let cartNumberArray=[];
let showingCartList=[];
let sumation=0;
function myexe(){
  if(cartArray.length == 0){
    return ;
      }
      console.log('cartarrayfromnav'+cartArray)
      console.log('jj')
    let overlay=document.createElement('div');
    let container=document.createElement('div');
    let bagcards=document.createElement('div');
    overlay.classList.add('overlay');
    container.classList.add('container');
    bagcards.classList.add('bagcards');
    let line=document.createElement('hr');
    line.classList.add('line');
    let total=document.createElement('h5');
    total.classList.add('total');
    sum=0;
    for(let s=0;s<cartArray.length;s++){
      console.log('kjkjkjkjkjkj')
      console.log(cartArray[s].price)
      console.log('sum')
      console.log(sum)
      sum=sum+cartArray[s].price;
      
      }
    let totaltxt=document.createTextNode(sum+'$');
    total.appendChild(totaltxt);
    
    let totallabel=document.createElement('span');
    totallabel.classList.add('totallabel');
    let totallabeltxt=document.createTextNode('Total:');
    totallabel.appendChild(totallabeltxt);
    
    let close=document.createElement('img');
    close.src="images/close.png";
    close.classList.add('close');
    let numberTxt;
    let number;
    let h3;
    // let cartNumberArray=[];
    console.log('cartarray')
    console.log(cartArray)
    for(let w=0;w<cartArray.length;w++){
    let cartContent=document.createElement('div');
    cartContent.classList.add('cartContent');
    let bagcard=document.createElement('div');
    bagcard.classList.add('bagcard');
    let calcSec=document.createElement('div');
    calcSec.classList.add('calcSec');
    let img=document.createElement('img');
    img.src=cartArray[w].img;
    img.style.height='200';
    img.style.width='200';
    h3=document.createElement('h3');
    let txt=document.createTextNode(cartArray[w].name);
    let price=document.createElement('h5');
    price.classList.add('price');
    let priceTxt=document.createTextNode(cartArray[w].price+'$');
    price.appendChild(priceTxt);
    price.setAttribute('price',cartArray[w].price);
    price.setAttribute('itemname',cartArray[w].name);
    priceArray.push(price);
    let plus=document.createElement('img');
    plus.classList.add('plus')
    plus.src='images/plus.png';
    plus.setAttribute('itemname',txt.textContent);
    plus.setAttribute('count',1);
    plusButtonArray.push(plus);
    let minus=document.createElement('img');
    minus.classList.add('plus')
    minus.src='images/minus.png';
    minus.setAttribute('itemname',txt.textContent);
    minus.setAttribute('count',1);
    minusButtonArray.push(minus);
    number=document.createElement('p');
    number.classList.add('number')
    numberTxt=document.createTextNode(cartArray[w].quantity);
    number.appendChild(numberTxt);
    number.setAttribute('itemname',txt.textContent);
    number.setAttribute('counter',cartArray[w].quantity);
    number.setAttribute('price',cartArray[w].price);
    cartNumberArray.push(number);
    calcSec.appendChild(plus);
    calcSec.appendChild(number);
    calcSec.appendChild(minus);
    h3.appendChild(txt);
    bagcard.appendChild(img);
    cartContent.appendChild(h3);
    cartContent.appendChild(price);
    cartContent.appendChild(calcSec);
    bagcard.appendChild(cartContent)
    bagcards.appendChild(bagcard);
    container.appendChild(close);
    container.appendChild(bagcards);
    container.appendChild(line);
    container.appendChild(totallabel)
    container.appendChild(total);
    close.onclick=function(){
      overlay.style.display='none'
    }
    }
    overlay.appendChild(container);
    document.body.appendChild(overlay);
    //click on plus button to increase quantity
    let k;
    plusButtonArray.forEach(function(p){

    p.onclick=function(){
    let sum=0;
    for(let g=0;g<allDishes.length;g++){
     if(p.getAttribute('itemname') === allDishes[g].name){
        console.log(cartNumberArray)
      let convertToInt=parseInt(allDishes[g].price);
      collectPrice.push(convertToInt);
 
     cartNumberArray.forEach(function(e){
      if(allDishes[g].name == e.getAttribute('itemname')){
        let num=e.getAttribute('counter');
        let n=parseInt(num);
        k=n+1;
        e.setAttribute('counter',k);
       
        for(let x=0;x<cartArray.length;x++){
if(cartArray[x].name==e.getAttribute('itemname')){
  console.log(cartArray[x].name)
  cartArray[x].quantity=k;
  e.innerHTML=cartArray[x].quantity

}
        }
        minusButtonArray.forEach(function(p){
          p.setAttribute('count',k)
        })
     
      }
     })
     //plusing price when click on plus icon
    
     priceArray.forEach(function(r){
      console.log('r'+priceArray)
      if(allDishes[g].name == r.getAttribute('itemname')){
    for(let te=0;te<allDishesCopy.length;te++){
      if(allDishesCopy[te].name==r.getAttribute('itemname')){
        console.log('priceloop'+allDishesCopy[te].price)
        
      }
    }
 let pricestr=allDishesCopy[g].price;
 console.log('pricestr'+allDishesCopy[g].price)
    let price=parseInt(pricestr);
    let newprice=k*price;
    console.log('qantity'+k);
     console.log('price'+price);
    r.innerHTML=newprice + '$';
    for(let x=0;x<cartArray.length;x++){
      if(cartArray[x].name==r.getAttribute('itemname')){
        cartArray[x].price=newprice;
        r.innerHTML=cartArray[x].price+'$';
      
      }
              }
              console.log('============')
              console.log(cartArray)
    let st=r.getAttribute('price');
    let stint=parseInt(st);
    
      }
     })
    
     }
    }
    for(let s=0;s<cartArray.length;s++){
      sum=sum+cartArray[s].price;
      }
    console.log(sum);
    total.removeChild(totaltxt);
    totaltxt=document.createTextNode(sum+'$');
    total.appendChild(totaltxt);
    }
    })
    //click on minus button
    minusButtonArray.forEach(function(p){
    p.onclick=function(){
    let sum=0;
    for(let g=0;g<allDishes.length;g++){
     if(p.getAttribute('itemname') === allDishes[g].name){
      let convertToInt=parseInt(allDishes[g].price);
     cartNumberArray.forEach(function(e){
      if(allDishes[g].name == e.getAttribute('itemname')){
        let num=e.getAttribute('counter');
        let n=parseInt(num);
        if(n==1){
          console.log('n==1');
        }else{
    k=n-1;
        e.setAttribute('counter',k);
        minusButtonArray.forEach(function(p){
          p.setAttribute('count',k);
          console.log(k)
        })
        e.innerHTML=k;
        for(let x=0;x<cartArray.length;x++){
          if(cartArray[x].name==e.getAttribute('itemname')){
            console.log(cartArray[x].name)
            cartArray[x].quantity=e.innerHTML;
          
          }
                  }
                  console.log('============')
                  console.log(cartArray)
        for(let r=0;r<collectPrice.length;r++){
          if(collectPrice[r]===convertToInt){
          console.log(collectPrice.splice(r,1));
            break;
          }
        }
        }
      }
     })
       //minusing price when click on minus icon
       priceArray.forEach(function(r){
        if(allDishes[g].name == r.getAttribute('itemname')){
    let pricestr=allDishesCopy[g].price;
    let price=parseInt(pricestr);
    let newprice=k*price;
    r.innerHTML=newprice + '$';
    for(let x=0;x<cartArray.length;x++){
      if(cartArray[x].name==r.getAttribute('itemname')){
        console.log(cartArray[x].name)
        cartArray[x].price=newprice;
        r.innerHTML=cartArray[x].price+'$';
      
      }
              }
              console.log('============')
              console.log(cartArray)
        }
       })
       for(let s=0;s<cartArray.length;s++){
        sum=sum+cartArray[s].price;
        }
      console.log(sum);
      total.removeChild(totaltxt);
      totaltxt=document.createTextNode(sum+'$');
      total.appendChild(totaltxt);
     }
    }
    }
    })
}

//end showing cart list by clicking on cart icon in the navbar

//start adding special dish to cart
let specialCartBtn=document.querySelectorAll('.special .container .cards .card .marketBtn');
let specialName=document.querySelectorAll('.special .container .cards .card h2');
for(let y=0;y<specialCartBtn.length;y++){
  specialCartBtn[y].setAttribute('cartname',specialName[y].textContent);
  specialCartBtn[y].setAttribute('clickTime',0);
  handleCartFunctionality(specialCartBtn[y]);
}
//end adding special dish to cart

//start favorite
let specialFavbtn=document.querySelectorAll('.special .container .cards .card .specialFavBtn');  

 //add attribute to each element
for(let i=0;i<specialFavbtn.length;i++){
  specialFavbtn[i].setAttribute('data-index',specialName[i].textContent);
}
specialFavbtn.forEach(function(fa){   
   fa.onclick=function(){
     if(fa.classList.contains('active')){
       fa.classList.remove('active');
       fa.src="images/blackHeart.png";
       let m=fa.dataset.index;
       localStorage.removeItem(m.toString());

       ar=[];
       for(let t=0;t<allDishes.length;t++){
         if(allDishes[t].name == localStorage.getItem(allDishes[t].name)){
     ar.push(allDishes[t].name)
         }
         
       } 
     }else{
       fa.classList.add('active');
       fa.src='images/redHeart.png';
       let m=fa.dataset.index;
       localStorage.setItem(m.toString(),m.toString());
       ar=[];
       for(let t=0;t<allDishes.length;t++){
         if(allDishes[t].name == localStorage.getItem(allDishes[t].name)){
     ar.push(allDishes[t].name)
         }
         
       } 
     }
   }
 })

  //check local storage
 for(let k=0;k<specialFavbtn.length;k++){
 if(localStorage.getItem(specialFavbtn[k].getAttribute('data-index')) != null){
  specialFavbtn[k].classList.add('active');
  specialFavbtn[k].src='images/redHeart.png';
     }
}
//end favorite
//start adding menu item to cart
let menuCartBtn=document.querySelectorAll('.dish .container .dishs .card .mnueMarketBtn');
let menuItemName=document.querySelectorAll('.dish .container .dishs .card h4');
for(let y=0;y<menuCartBtn.length;y++){
  menuCartBtn[y].setAttribute('cartname',menuItemName[y].textContent);
  menuCartBtn[y].setAttribute('clickTime',0);
  handleCartFunctionality(menuCartBtn[y]);
}
//end adding menu item to cart
//start showing favorite list by clicking on favorite dish on navbar
ar=[];
      for(let t=0;t<allDishes.length;t++){
        if(allDishes[t].name == localStorage.getItem(allDishes[t].name)){
    ar.push(allDishes[t].name)
        }
        
      }

  let wishlistBtn=document.querySelector('#myul .allFavBtn');
  wishlistBtn.onclick=function(){
    console.log('lov')
    console.log(ar.length)
    if(ar.length==0){
      return ;
    }
    let overlay=document.createElement('div');
overlay.classList.add('overlay');
let container=document.createElement('div');
container.classList.add('container');
let backGround=document.createElement('div');
backGround.classList.add('backGround');
let close=document.createElement('img');
close.src="images/close.png";
close.classList.add('close');
for(let i=0;i<ar.length;i++){

  for(let j=0;j<allDishes.length;j++){
    if(ar[i]==allDishes[j].name){
      let card=document.createElement('div');
      card.classList.add('card');
      let content=document.createElement('div');
      content.classList.add('content');
      let parttow=document.createElement('div');
      parttow.classList.add('parttow');
      let linetwo=document.createElement('div');
      linetwo.classList.add('linetwo');
      let name=document.createElement('h3');
      let nameTxt=document.createTextNode(allDishes[j].name);
      name.appendChild(nameTxt);
      let img=document.createElement('img');
      img.src=allDishes[j].img;
      let price=document.createElement('p');
      let priceTxt=document.createTextNode(allDishes[j].price);
      let icon=document.createElement('img');
      icon.src='images/redHeart.png';
      icon.classList.add('icon');
      linetwo.appendChild(price);
      linetwo.appendChild(icon);
      price.appendChild(priceTxt);
      parttow.appendChild(nameTxt);
      parttow.appendChild(linetwo);
      content.appendChild(img);
      content.appendChild(parttow);
      card.appendChild(content);
      card.appendChild(content);
      backGround.appendChild(card)
    }
  }
    }
    container.appendChild(close);
container.appendChild(backGround);
overlay.appendChild(container);
document.body.appendChild(overlay);
close.onclick=function(){
  overlay.style.display='none';
}
  }
  //end showing favorite list by clicking on favorite dish on navbar
    //start search
    function searchFunctionality(){
      let overlay=document.createElement('div');
      overlay.classList.add('overlay');
      let container=document.createElement('div');
      container.classList.add('container');
      let all=document.createElement('div');
      all.classList.add('all');
      let input=document.createElement('input');
      input.classList.add('input');
      let result=document.createElement('div');
      result.classList.add('result');
      let title=document.createElement('h2');
      let titleTxt=document.createTextNode('Search For Dish');
      title.appendChild(titleTxt);
      title.classList.add('title');
      all.appendChild(title);
      let close=document.createElement('img');
      close.src="images/close.png";
    close.classList.add('close');
      let item;
      //start show all bags before typying anything
      for(let r=0;r<allDishes.length;r++){
        item=document.createElement('div');
        item.classList.add('item');
       let  one=document.createElement('div');
        one.classList.add('one');
        let name=document.createElement('h4');
        let nameTxt=document.createTextNode(allDishes[r].name);
        name.appendChild(nameTxt);
        let price=document.createElement('p');
        let priceTxt=document.createTextNode(allDishes[r].price);
        price.appendChild(priceTxt);
        let img=document.createElement('img');
        img.src=allDishes[r].img;
        let detail=document.createElement('div');
        detail.classList.add('detail');
        detail.appendChild(name);
        detail.appendChild(price);
        one.appendChild(img);
        one.appendChild(detail);
        one.onclick=function(){
          window.location=allDishes[r].location;
          overlay.style.display='none';  
        }
        item.appendChild(one);
        result.appendChild(item)
      }
      //end show all bags before typying anything
      input.addEventListener('input',(val)=>{
        //in case the input not matching any bag I show nothing
       
        let resultItem=document.querySelectorAll('.overlay .container .all .result .item');  
        for(let r=0;r<resultItem.length;r++){
          resultItem[r].remove();
       
        }
       
         //in case no input in the feild I show all bags
        if(input.value == ''){
        for(let r=0;r<allDishes.length;r++){
          item=document.createElement('div');
          item.classList.add('item');
         let  one=document.createElement('div');
          one.classList.add('one');
          let name=document.createElement('h4');
          let nameTxt=document.createTextNode(allDishes[r].name);
          name.appendChild(nameTxt);
          let price=document.createElement('p');
          let priceTxt=document.createTextNode(allDishes[r].price);
          price.appendChild(priceTxt);
          let img=document.createElement('img');
          img.src=allDishes[r].img;
          let detail=document.createElement('div');
          detail.classList.add('detail');
          detail.appendChild(name);
          detail.appendChild(price);
          one.appendChild(img);
          one.appendChild(detail);
          one.onclick=function(){
            window.location=allDishes[r].location;
            overlay.style.display='none';  
          }
          item.appendChild(one);
          result.appendChild(item)
        }
        }else{
          //in case matching
          for(let i=0;i<allDishes.length;i++){
            if(allDishes[i].name.toLowerCase().includes(input.value)){
               item=document.createElement('div');
              item.classList.add('item');
             let  one=document.createElement('div');
              one.classList.add('one');
              let name=document.createElement('h4');
              let nameTxt=document.createTextNode(allDishes[i].name);
              name.appendChild(nameTxt);
              let price=document.createElement('p');
              let priceTxt=document.createTextNode(allDishes[i].price);
              price.appendChild(priceTxt);
              let img=document.createElement('img');
              img.src=allDishes[i].img;
              let detail=document.createElement('div');
              detail.classList.add('detail');
              detail.appendChild(name);
              detail.appendChild(price);
              one.appendChild(img);
              one.appendChild(detail);
            
              item.appendChild(one);
              one.onclick=function(){
                console.log('loc')
                window.location=allDishes[i].location;
                overlay.style.display='none';  
              }
              result.appendChild(item)
            }
          }
        }
    
      });
      all.appendChild(input);
      all.appendChild(result);
      container.appendChild(close);
      container.appendChild(all);
      overlay.appendChild(container);
      document.body.appendChild(overlay)
    close.onclick=function(){
      overlay.style.display='none';
    }
    }
   //end search 
    // start categories
    let swiperr=new Swiper('.slide-content',{
      slidesPerView:3,
      spaceBetween:25,
      centerSlide: 'true',
      fade: 'true',
      grabCursor: 'true',
      pagination:{
          el: ".swiper-pagination",
          clickable:true,
      },
      navigation:{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
      },
        breakpoints: {
0:{
  slidesPerView:1,
},
// 790
767:{
  slidesPerView:2,
},
980:{
  slidesPerView:3,
}
        }
      })
      if(swiperr.realIndex === 0){
        for(let i=0;i<allDishes.length;i++){
          if(allDishes[i].cat == 'pizaa'){
            swiperr.appendSlide(`<div class="card swiper-slide">
            <img src="${allDishes[i].img}">
           <img src="images/blackHeart.png" class="favicon">
            <h3>${allDishes[i].name}</h3>
            <img src="images/market.png" class="cart">
           <div class="content">
           ${allDishes[i].price}$
          
          
           </div>
            </div>`);
          }else{
          }
        }
      }
//start cart functionality
      let cartbtn=document.querySelectorAll('.card-wrapper .card .cart');
      let swiperItemName=document.querySelectorAll('.card-wrapper .card h3');
for(let y=0;y<cartbtn.length;y++){
  cartbtn[y].setAttribute('cartname',swiperItemName[y].textContent);
  cartbtn[y].setAttribute('clickTime',0);
  handleCartFunctionality(cartbtn[y]);
}
//end cart functionality
//start favorite
          let favbtn=document.querySelectorAll('.card-wrapper .card .favicon');  
         //add attribute to each element
for(let i=0;i<favbtn.length;i++){
  favbtn[i].setAttribute('data-index',swiperItemName[i].textContent);
}
favbtn.forEach(function(fa){   
   fa.onclick=function(){
     if(fa.classList.contains('active')){
       fa.classList.remove('active');
       fa.src="images/blackHeart.png";
       let m=fa.dataset.index;
       localStorage.removeItem(m.toString());

       ar=[];
       for(let t=0;t<allDishes.length;t++){
         if(allDishes[t].name == localStorage.getItem(allDishes[t].name)){
     ar.push(allDishes[t].name)
         }
         
       } 
     }else{
       fa.classList.add('active');
       fa.src='images/redHeart.png';
       let m=fa.dataset.index;
       localStorage.setItem(m.toString(),m.toString());
       ar=[];
       for(let t=0;t<allDishes.length;t++){
         if(allDishes[t].name == localStorage.getItem(allDishes[t].name)){
     ar.push(allDishes[t].name)
         }
         
       } 
     }
   }
 })

  //check local storage
 for(let k=0;k<favbtn.length;k++){
 if(localStorage.getItem(favbtn[k].getAttribute('data-index')) != null){
  favbtn[k].classList.add('active');
  favbtn[k].src='images/redHeart.png';
     }
}
//end favorite

let categoryBtn=document.querySelectorAll('.category-btn button');
categoryBtn.forEach(function(btn){
  btn.onclick=function(){
    categoryBtn.forEach(function(r){
    r.classList.remove('active')
  })
  btn.classList.toggle('active');
    if(swiperr.realIndex >= 0){
      swiperr.removeAllSlides()
    }
    // <div class="favo"></div>
      for(let i=0;i<allDishes.length;i++){
      if(allDishes[i].cat === btn.id){
        swiperr.appendSlide(`<div class="card swiper-slide">
        <img src="${allDishes[i].img}">
       
        <img src="images/blackHeart.png" class="favicon">
        <h3>${allDishes[i].name}</h3>
        <img src="images/market.png" class="cart">
       <div class="content">
       ${allDishes[i].price}$
      
       </div>
      
        </div>`);
      }else{
      }
    }
    
//start cart functionality
let cartbtn2=document.querySelectorAll('.card-wrapper .card .cart');
let swiperItemName=document.querySelectorAll('.card-wrapper .card h3');
for(let y=0;y<cartbtn2.length;y++){
  cartbtn2[y].setAttribute('cartname',swiperItemName[y].textContent);
  cartbtn2[y].setAttribute('clickTime',0);
handleCartFunctionality(cartbtn2[y]);
}
//end cart functionality
  //start favorite
  let favbtn2=document.querySelectorAll('.card-wrapper .card .favicon');  
  //add attribute to each element
for(let i=0;i<favbtn2.length;i++){
  favbtn2[i].setAttribute('data-index',swiperItemName[i].textContent);
}
favbtn2.forEach(function(fa){   
fa.onclick=function(){
if(fa.classList.contains('active')){
fa.classList.remove('active');
fa.src="images/blackHeart.png";
let m=fa.dataset.index;
localStorage.removeItem(m.toString());

ar=[];
for(let t=0;t<allDishes.length;t++){
  if(allDishes[t].name == localStorage.getItem(allDishes[t].name)){
ar.push(allDishes[t].name)
  }
  
} 
}else{
fa.classList.add('active');
fa.src='images/redHeart.png';
let m=fa.dataset.index;
localStorage.setItem(m.toString(),m.toString());
ar=[];
for(let t=0;t<allDishes.length;t++){
  if(allDishes[t].name == localStorage.getItem(allDishes[t].name)){
ar.push(allDishes[t].name)
  }
  
} 
}
}
})

//check local storage
for(let k=0;k<favbtn2.length;k++){
if(localStorage.getItem(favbtn2[k].getAttribute('data-index')) != null){
  favbtn2[k].classList.add('active');
  favbtn2[k].src='images/redHeart.png';
}
}
//end favorite
  }
 })  

  // start dark theme
  let moonBtn=document.getElementById('moonBtn');
  let part2=document.getElementById('part2');
  let headerPart1=document.querySelector('header #part1');
  let headerPart1After=window.getComputedStyle(headerPart1,"::after");
  let header=document.querySelector('header');
  let headerAfter=window.getComputedStyle(header,"::after");
  let boxes=document.querySelector('header .part2 .container');
  moonBtn.onclick=function(){
    if(document.body.classList.contains('dark-theme')){
      moonBtn.src="images/moon.png";
      document.body.style.backgroundColor='white';
      part2.style.backgroundColor='#f8f9fa';
      headerPart1.style.setProperty('--after--color','#f8f9fa');
      header.style.setProperty('--after2--color','#f8f9fa');
      boxes.style.backgroundColor='#f8f9fa';
      document.body.classList.remove('dark-theme');
    }else{
      moonBtn.src="images/sun.png";
      document.body.style.backgroundColor='black';
      part2.style.backgroundColor='black';
     headerPart1.style.setProperty('--after--color','black');
     header.style.setProperty('--after2--color','black');
     boxes.style.backgroundColor='black';
      document.body.classList.add('dark-theme');
    }  
  }

  let select=document.getElementById('select');
  select.addEventListener('change',()=>{
console.log(select.value)
if(select.value=='Dark Theme'){
  console.log('daaaaaaaaaark')
  document.body.style.backgroundColor='black';
  part2.style.backgroundColor='black';
 
     headerPart1.style.setProperty('--after--color','black');
     header.style.setProperty('--after2--color','black');
     boxes.style.backgroundColor='black';
  
  document.body.classList.add('dark-theme') 
}else{
  document.body.style.backgroundColor='white';
  part2.style.backgroundColor='white';

   headerPart1.style.setProperty('--after--color','#f8f9fa');
      header.style.setProperty('--after2--color','#f8f9fa');
      boxes.style.backgroundColor='#f8f9fa';

  document.body.classList.remove('dark-theme')
}
  })
   // end dark theme
