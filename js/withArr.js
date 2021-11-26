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
    arr.push(obj)
  }
  itemList.innerHTML = ""
  arr.forEach(item => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let icon = document.createElement("i");
    p.className = "area-text";
    div.className = "area-item";
    icon.className ="bx bx-x";
    p.textContent = item.text;
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
// remove item
function removeItem(e) {
  if(e.target.classList.contains('bx-check')) {
    let li = e.target.parentElement;
    itemList.removeChild(li);
  }
}