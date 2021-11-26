let form = document.getElementById('form');
let itemList = document.getElementById('area');
let textType = document.getElementById('get-text');
let btnAll = document.getElementById('all-btn')
let btnComp = document.getElementById('complete-btn')
let btnInComp = document.getElementById('incomplete-btn')
// add evenet
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

function addItem(e) {
  e.preventDefault();
  
  if(textType.value !=""){
    let div = document.createElement('div');
    let pText = document.createElement('p');
    let iIcon = document.createElement('i');
    
    div.className = "area-item d-flex animate__animated animate__bounceInRight";
    pText.className = "area-text";
    iIcon.className = "bx bx-x";

    pText.appendChild(document.createTextNode(textType.value));
    div.appendChild(pText);
    div.appendChild(iIcon);
    itemList.appendChild(div);
    
    pText.addEventListener("click", function(){
      if(iIcon.className == "bx bx-x"){
        iIcon.className = "bx bx-check";
        div.classList.add('checked');
      }
      else{
        iIcon.className = "bx bx-x";
        div.classList.remove('checked');
      }
    })
    btnComp.addEventListener("click" , function() {
      if(div.classList.contains("checked")){
      }
      else{
        div.classList.remove("d-flex");
      }
      btnComp.classList.add("active")
      btnInComp.classList.remove("active")
      btnAll.classList.remove("active")
    })
    btnInComp.addEventListener("click" , function() {
      if(div.classList.contains("checked")){
        div.classList.remove("d-flex");
      }
      else{
        div.classList.add("d-flex");
      }
      btnInComp.classList.add("active")
      btnComp.classList.remove("active")
      btnAll.classList.remove("active")
    })
    btnAll.addEventListener("click" , function() {
      div.classList.add("d-flex");
      btnAll.classList.add("active")
      btnInComp.classList.remove("active")
      btnComp.classList.remove("active")
    })
  }

  textType.value = '';
}

// remove item
function removeItem(e) {
  if(e.target.classList.contains('bx-x')) {
    let li = e.target.parentElement;
    itemList.removeChild(li); 
  }
}