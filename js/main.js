function info(word){
console.log(word + "!");
}

function summa(a,  b){
    var result = a + b;
    info(result);
}
summa(5, 7);
function onClickButton(el){
    el.innerHTML = "You gave the button a press";
}
function onInput(el){
    console.log(el.value);

}
function onMouseOver(el){
    el.style.cssText = "width: 75px; height: 75px; background: green";
}
function onMouseOut(el){
    el.style.background = "red";
    el.style.cssText = "width: 50px; height: 50px;";
}
var text = document.getElementById('header');
console.log(text.innerHTML);

var span = document.getElementsByTagName('span');
for(var i = 0 ; i < span.length; i++){
    console.log(span[i].innerHTML);
}

function checkForm(el){
   // var name = document.getElementById('name').value;
    ///console.log(name);
    var name = el.name.value;
    console.log(name);
    var err = "";
   if(name == "")
    err = "Введите имя";
   else if(name.length <= 1)
     err = "Введите значение больше 1";
   

if(err != ""){
   document.getElementById('error').innerHTML = err;
   
}
else{
    alert("Все данные введены коректно");
    window.location = 'https://wooordhunt.ru/';
}

    return false;
}