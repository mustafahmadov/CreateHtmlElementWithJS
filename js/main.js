let inputBtn = document.getElementById("inputText");
let addBtn = document.getElementById("addButton");
let inputArea = document.querySelector(".input-area");

let createElement = (tag,className,innerText,appendArea) =>{
    let element = document.createElement(tag);
    element.classList.add(...className); //spread operator
    element.innerText = innerText;
    appendArea.append(element);
    return element;
}
let errorLabel = createElement("label",[],"",inputArea);
addBtn.addEventListener('click',function(){
 if((inputBtn.value.split(" ").join('')).length<3){
    errorLabel.innerText = "Text too short.."
    const style = {color : 'red', fontSize : '18px'};
    Object.assign(errorLabel.style,style);
 }
 else{
    errorLabel.innerText ="";
    let cities = document.getElementById("cities");
    let cityArea = createElement("li",["list-group-item"],inputBtn.value,cities);
    let deleteIcon = createElement("i",["fa","fa-trash","float-right"],"",cityArea);
    const iconStyle = {cursor: 'pointer',fontSize : '18px'};
    Object.assign(deleteIcon.style,iconStyle);
    deleteIcon.addEventListener('click',function(){
        cityArea.remove();
    })
 }
})

