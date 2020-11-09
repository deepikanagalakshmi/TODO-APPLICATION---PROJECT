var ul = document.getElementById("list");
var li;
var addButton = document.getElementById("add");
addButton.addEventListener("click", addItem);

var removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItem);

// var removeAllButton=document.getElementById("removeAll")
// removeAllButton.addEventListener("click",deleteAll)

function addItem() {
  var input = document.getElementById("input");
  var item = input.value;
  ul = document.getElementById("list");
  var textNode = document.createTextNode(item);
  if (item === "") {
    // var printMe=document.createElement("p")
    // printMe.textContent='Enter your Todo'
    // document.querySelector("input").after(printMe)
    alert("Enter your TODO first");
    return false;
  } else {
    //create li
    li = document.createElement("li");
    //create checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("id", "check");
    //create
    var label = document.createElement("label");
    //add these elements on web page
    ul.appendChild(label);
    li.appendChild(checkbox);
    label.appendChild(textNode);
    li.appendChild(label);
    ul.insertBefore(li, ul.childNodes[0]);
    // li.className='visual'
    setTimeout(() => {
      li.className = "visual";
    }, 2);

    //clear textbox after adding into checkbox

    input.value = "";
  }
}
function removeItem() {
  li = ul.children;
  for (let index = 0; index < li.length; index++) {
    while (li[index] && li[index].children[0].checked) {
      ul.removeChild(li[index]);
    }
  }
}

// function deleteAll(){
//         ul.remove()
//     }
