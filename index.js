console.log(document.querySelector('.nav').style.height)
let obj=""
let obj1=`This section is dedicated to Computer Fundamental, MS-Office, Internet, Web Development Basics, Programming Basics with creative blogs and notes.`
let obj2=`This section is for Web Development. Here you will understand frontend, backend and Database. in simple words this is a full stack web development section.`
let obj3=`Here you will learn specilized programming language like: C, JavaScript, Python, C++. `
document.querySelector('.t-nav').addEventListener('click', function(){
    let css=getComputedStyle(document.querySelector('.sec-nav')).height;
    if(css!='0px'){
        document.querySelector('.sec-nav').style.height="0px"
        document.querySelector('.sec-nav').style.display="none"
    }
    else if(css==='0px'){
        document.querySelector('.sec-nav').style.height="auto"
        document.querySelector('.sec-nav').style.display="flex"

    }
})


document.querySelectorAll('.box').forEach((e,i)=>e.addEventListener('mouseover', function(){
    e.querySelector('.showOnHover').innerHTML=i===0?obj1:i===1?obj2:i===2?obj3:"Invalid"
}))
document.querySelectorAll('.box').forEach(e=>e.addEventListener('mouseout', function(){
    e.querySelector('.showOnHover').innerHTML=""
}))