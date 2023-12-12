let boxs=document.querySelectorAll(".box");
let x=document.querySelector("#reset-btn");
let a=document.querySelector("#new");
let b=document.querySelector(".msg");
let c=document.querySelector("#m");
let f=true;
let count=0;
let pattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
boxs.forEach((box)=>{
    box.addEventListener("click",() => {
        
        if(f){
        box.innerText="X";
        box.style.color="blue";
    f=false;
    }
    else{
        box.innerText="O";
        f=true;   
    }
    count+=1;
    box.disabled=true;
    win();
    
    });
});
const show=(w)=>{
c.innerText=`Congratulation, Winner is ${w}`;
b.classList.remove("hide");
count=0;
disable();
}
const draw=(w)=>{
    c.innerText=`Draw`;
    b.classList.remove("hide");
    count=0;
    disable();   
}
const disable=()=>{
    boxs.forEach((b)=>{
        b.disabled=true;
    });
}
const win=()=>{
 for(let p of pattern ){
  
     let po1=boxs[p[0]].innerText;
     let po2=boxs[p[1]].innerText;
     let po3=boxs[p[2]].innerText;
   if(po1===po2 && po3===po2 && po1===po3 && po1!=""){
  show(po1);
   }
 else  if(count===9){
    draw();
   }
    }
}

const reset=()=>{
    f=true;
    enableboxs();
    b.classList.add("hide");
};
const enableboxs=()=>{
    boxs.forEach((b)=>{
        b.disabled=false;
        b.innerText="";
    });
};
a.addEventListener("click",reset);
x.addEventListener("click",reset);