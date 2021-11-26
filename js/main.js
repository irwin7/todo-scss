let form = document.getElementById('form');
let itemList = document.getElementById('area');
let textType = document.getElementById('get-text');

// add evenet
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

let arr = []

function addItem(e) {
  e.preventDefault();
  if(textType.value != ""){
    let obj = {
      text: textType.value,
      complete: false
    }
    arr.push(obj);
  }
  itemList.innerHTML = ""
  arr.forEach(item => {
    let div = document.createElement("div");
    div.className = "area-item"
    let p = document.createElement("p");
    p.className = "area-text"
    let icon = document.createElement("i")
    icon.className ="bx bx-x"
    p.textContent = item.text 
    div.append(p)
    div.append(icon)
    itemList.append(div)
    div.addEventListener("click", function(e){
      if(item.complete === false){
        item.complete = true
        icon.className = "bx bx-check"
      }else{
        item.complete = false
        icon.className ="bx bx-x"
      }
    })
  })
  textType.value = null;
}
console.log(arr);
  // let compbtn = document.querySelector(".complete-btn")
  // compbtn.addEventListener("click",function(){
  //   arr.forEach(item => {
      
  //   })
  // })
// remove item
function removeItem(e) {
  if(e.target.classList.contains('bx')) {
    let li = e.target.parentElement;
    itemList.removeChild(li);
  }
}