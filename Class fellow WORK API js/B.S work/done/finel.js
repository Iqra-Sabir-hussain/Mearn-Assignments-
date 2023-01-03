window.onload = getPost();
var btn=document.getElementById("btn").addEventListener("click",getPost);
var con=0;
var div=document.getElementById("cardDiv");


function getPost() {

    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res)=>{

        return res.json();
    }).then((post)=>{


        for (let index = 0; index <4; index++)   {
             div.innerHTML+=

`<div class="card" style="width:25%">
<img class="card-img-top" src="${post[con].thumbnailUlr}>
<div class="card-body">
  <h4 class="card-title">${post[con].title}</h4>
 
  
  <input class="btn btn-primary stretched-link" id="Button1" type="button" value="${post[con].id}" onclick="getPost1(${post[con].id});"></input>
</div>
</div>`


            con=con+1
        }
    }).catch((error)=>{

        console.log(error);


    })}


function getPost1(idherer) {

                if (document.getElementById('cardDiv')) {
                

                    if (document.getElementById('cardDiv').style.display == 'none') {
                        document.getElementById('cardDiv').style.display = 'block';
                        document.getElementById('Div2').style.display = 'none';
                    }
                    else {
                        var btn=document.getElementById("btn");
                        document.getElementById('cardDiv').style.display = 'none';
                        document.getElementById('Div2').style.display = 'block';
            
                        document.getElementById('btn').style.display = 'none';
                       let idhere=idherer-1
                        
                        var div=document.getElementById("Div23");
            
                fetch(`https://jsonplaceholder.typicode.com/posts`)
                .then((res)=>{
            
                    return res.json();
                }).then((post)=>{
            
            
                   
                         div.innerHTML+=
            
            `<div class="card" style="width:25%">
            <img class="card-img-top" src="${post[idhere].thumbnailUlr}>
            <div class="card-body">
              <h4 class="card-title">${post[idhere].title}</h4>
              <p class="card-text">${post[idhere].body}</p>
              
              <input class="btn btn-primary stretched-link" id="Button1" type="button" value="${post[idhere].id}"></input>
            </div>
            </div>`
           
            
                        con=con+1
                    
                }).catch((error)=>{
            
                    console.log(error);
            
            
                })}
                 

   }
    }