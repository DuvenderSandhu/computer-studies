let blogs={
    0:{
        title:"Computer Fundamental",
        desc:"THis is Blog Sample Kindly Load this",
        brief:"If You are just starting in Computer Science start with Computer Fundamental ",
        slug:"fundamental",
        desc:`**Overview:**
        Computer is an Electronic Devices which takes input and gives output
        **Parts of Computer**
        Computer has Mainly Three part
        1. Input
        2. C.P.U. 
        3. Output
        `,

         img:"https://1.bp.blogspot.com/-KASCNuCV9po/XHYXVK5BWkI/AAAAAAAAARM/yHH7L-YhbMgFWd4Qse37462hoK9sjQ7YQCEwYBhgL/s1600/computer%2Bfundamental2.png"
    },
    1:{
        title:"MS-Office",
        desc:"THis is Blog Sample Kindly Load this",
        brief:"If You are just starting in Computer Science start with Computer Fundamental ",
        slug:"msoffice",
        desc:`This is MS OFFICE`,
         img:"https://1.bp.blogspot.com/-KASCNuCV9po/XHYXVK5BWkI/AAAAAAAAARM/yHH7L-YhbMgFWd4Qse37462hoK9sjQ7YQCEwYBhgL/s1600/computer%2Bfundamental2.png"
    },
    2:{
        title:"HTML",
        desc:"THis is Blog Sample Kindly Load this",
        brief:"If You are just starting in Computer Science start with Computer Fundamental ",
        slug:"html",
        desc:"This is MS HTML",

         img:"https://1.bp.blogspot.com/-KASCNuCV9po/XHYXVK5BWkI/AAAAAAAAARM/yHH7L-YhbMgFWd4Qse37462hoK9sjQ7YQCEwYBhgL/s1600/computer%2Bfundamental2.png"
    }
}
{/* <div class="box flex flex-col gap-md">
            <h3>Computer fundamental</h3>
            <p>If You are just starting in Computer Science start with Computer Fundamental </p>
            <a href="/fundamental.html">Read More</a>
        </div> */}
for (i in blogs){
        let node=document.createElement('div')
        let h3node=document.createElement('h3')
        h3node.innerText=blogs[i].title
        let pnode=document.createElement('p')
        pnode.innerText=blogs[i].brief
        let anode=document.createElement('a')
        anode.setAttribute('href',`${blogs[i].slug}.html`)
        anode.innerText="Read More"
        node.classList.add("box", "flex", "flex-col", "gap-md")
        node.appendChild(h3node)
        node.appendChild(pnode)
        node.appendChild(anode)
        document.querySelector('.boxes').appendChild(node)

}
