

// const author = document.getElementsByTagName("author");
// let i = 0;

// document.querySelector('#get').addEventListener('Click', function(event) {
//     fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors')
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(json) {
//         for(let i = 0; i < json.value.lenght; ++i ) {
            
//         }
// })
    
// })




let btn=document.querySelector("button");
let div=document.querySelector("#authors");
i=0;
btn.addEventListener("click",function(){
fetch("https://fakerestapi.azurewebsites.net/api/v1/Authors")
.then(responde=>responde.json())
.then(function(result){
 // for(i=0;i<result.length;i++){
console.log(result.slice(i, i+10))
// }
  let array=result.slice(i, i+10);
  i=i+10;
  for(a=0;a<array.length;a++){
  div.insertAdjacentHTML("beforeEnd",`<div class="author">
  <h3>
  ${array[a].firstName}
  ${array[a].lastName}
  </h3>
  <h4>
  Book ID:   ${array[a].idBook}
  </h4>
</div> `)
}
});
})














// (response => response.json()).then(result => console.log(result));

// button.addEventListener("Click", function() {



// })