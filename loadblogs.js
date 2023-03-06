function blogBold(res){
    let array=res.split('**')
let sentense=``
array.forEach((e,i)=>{
    if(i%2!=0){
        
        let node=document.createElement('span')
        node.style.fontWeight="bold"
        node.style.textAlign="justify"
        node.innerText=e
        sentense=sentense+node
        document.querySelector('.blog_desc').appendChild(node)
        
    }
    else{
        let node=document.createElement('span')
        node.style.textAlign="justify"
        node.innerText=e
        sentense=sentense+node
        document.querySelector('.blog_desc').appendChild(node)
    }
})
}


let blogs={
        title:"Computer Fundamental",
        desc:`**Lorem** ipsum dolor sit amet, consectetur adipisicing elit. Ipsam excepturi totam fugiat quod assumenda blanditiis, architecto hic natus iure perspiciatis magni voluptatum rem illum ad corporis deleniti laboriosam repellendus quibusdam quia porro? Nihil ipsum unde molestias ab exercitationem, quibusdam praesentium quae distinctio, laboriosam **This is Very Important Line** veritatis quasi illo atque. Sunt, repudiandae totam. lor sit amet, consectetur adipisicing elit. Ipsam excepturi totam fugiat quod assumenda blanditiis, architecto hic natus iure perspiciatis magni voluptatum rem illum ad corporis deleniti laboriosam repellendus quibusdam quia porro? Nihil ipsum unde molestias ab exercitationem, quibusdam praesentium quae distinctio, laboriosam veritatis quasi illo atque. Sunt, repudiandae totam.lor sit amet, consectetur adipisicing elit. Ipsam excepturi totam fugiat quod assumenda blanditiis, architecto hic natus iure perspiciatis magni voluptatum rem illum ad corporis deleniti laboriosam repellendus quibusdam quia porro? Nihil ipsum unde molestias ab exercitationem, quibusdam praesentium quae distinctio, laboriosam veritatis quasi illo atque. Sunt, repudiandae totam.lor sit amet, consectetur adipisicing elit. Ipsam excepturi totam fugiat quod assumenda blanditiis, architecto hic natus iure perspiciatis magni voluptatum rem illum ad corporis deleniti laboriosam repellendus quibusdam quia porro? Nihil ipsum unde molestias ab exercitationem, quibusdam praesentium quae distinctio, laboriosam veritatis quasi illo atque. Sunt, repudiandae totam.lor sit amet, consectetur adipisicing elit. Ipsam excepturi totam fugiat quod assumenda blanditiis, architecto hic natus iure perspiciatis magni voluptatum rem illum ad corporis deleniti laboriosam repellendus quibusdam quia porro? Nihil ipsum unde molestias ab exercitationem, quibusdam praesentium quae distinctio, laboriosam veritatis quasi illo atque. Sunt, repudiandae totam.lor sit amet, consectetur adipisicing elit. Ipsam excepturi totam fugiat quod assumenda blanditiis, architecto hic natus iure perspiciatis magni voluptatum rem illum ad corporis deleniti laboriosam repellendus quibusdam quia porro? Nihil ipsum unde molestias ab exercitationem, quibusdam praesentium quae distinctio, laboriosam veritatis quasi illo atque. Sunt, repudiandae totam.lor sit amet, consectetur adipisicing elit. Ipsam excepturi totam fugiat quod assumenda blanditiis, architecto hic natus iure perspiciatis magni voluptatum rem illum ad corporis deleniti laboriosam repellendus quibusdam quia porro? Nihil ipsum unde molestias ab exercitationem, quibusdam praesentium quae distinctio, laboriosam veritatis quasi illo atque. Sunt, repudiandae totam.lor sit amet, consectetur adipisicing elit. Ipsam excepturi totam fugiat quod assumenda blanditiis, architecto hic natus iure perspiciatis magni voluptatum rem illum ad corporis deleniti laboriosam repellendus quibusdam quia porro? Nihil ipsum unde molestias ab exercitationem, quibusdam praesentium quae distinctio, laboriosam veritatis quasi illo atque. Sunt, repudiandae totam.lor sit amet, consectetur adipisicing elit. Ipsam excepturi totam fugiat quod assumenda blanditiis, architecto hic natus iure perspiciatis magni voluptatum rem illum ad corporis deleniti laboriosam repellendus quibusdam quia porro? Nihil ipsum unde molestias ab exercitationem, quibusdam praesentium quae distinctio, laboriosam veritatis quasi illo atque. Sunt, repudiandae totam.lor sit amet, consectetur adipisicing elit. Ipsam excepturi totam fugiat quod assumenda blanditiis, architecto hic natus iure perspiciatis magni voluptatum rem illum ad corporis deleniti 
        **Some Other Topic:**
        laboriosam repellendus quibusdam quia porro? Nihil ipsum unde molestias ab exercitationem, quibusdam praesentium quae distinctio, laboriosam veritatis quasi illo atque. Sunt, repudiandae totam.`,
        img:"https://1.bp.blogspot.com/-KASCNuCV9po/XHYXVK5BWkI/AAAAAAAAARM/yHH7L-YhbMgFWd4Qse37462hoK9sjQ7YQCEwYBhgL/s1600/computer%2Bfundamental2.png"
    }

let blog =blogBold(blogs.desc)
document.querySelector('.blog_title').innerHTML=blogs.title
// document.querySelector('.blog_desc').innerHTML=blog


console.log(blogs)