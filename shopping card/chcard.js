// declaration
var likes = Array.from(document.querySelectorAll(".like"));
var tr =Array.from(document.querySelectorAll(".fa-trash"))
var crd  =Array.from(document.querySelectorAll("#pr"))
var plus =Array.from(document.querySelectorAll(".fa-plus"))
var minus=Array.from(document.querySelectorAll(".fa-minus"))

// like button
for (let lik of like)
lik.addEventListener("click",function(){if (lik.style.color=="black")
{lik.style.color="red";} 
else {lik.style.color="black";}});
// truch
for (let i in tr) {
    tr[i].addEventListener("click", function () {
        crd[i].remove();
      total();
    });
  }
//   plus
for(let pls of plus){
    pls.addEventListener("click",function()
    {
    pls.previousElementSibling.innerHTML++;
    total();        
});
}


// minus
 for(let mi of minus )
 {mi.addEventListener("click",function(){
     mi.nextElementSibling.innerHTML > 0? 
     mi.nextElementSibling.innerHTML--
    :null;
    total();
});}

// total1 
function total() {
    let qte = Array.from(document.querySelectorAll(".qt"));
    let price = Array.from(document.querySelectorAll(".px"));
    let s = 0;
    for (let i = 0; i < price.length; i++) {
      s = s + price[i].innerHTML * qte[i].innerHTML;
    }
    document.getElementById("tot").innerHTML = s;
  }

