const div = document.querySelector('.products')
const requist = new XMLHttpRequest()
requist.open("GET", 'const.json')
requist.send()

requist.addEventListener('load', ()=> {
    const data = JSON.parse(requist.responseText)
    
    data.forEach(c => {
        div.innerHTML += `
        <img src ="${c.img}"  style = "width:200px;"  ></img>
        <h1>${c.h1}</h1>
        `
    });
} )
