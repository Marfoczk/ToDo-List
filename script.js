//zmienne
const dzien = document.querySelector('.day');
const miesiac = document.querySelector('.month');
const input = document.getElementById('input');
const toDoIcon = document.getElementById('icon');


//data
const dzisiaj = new Date();
const options = {weekday : "long"};
const options2 = {month:"short", day:"numeric"};

dzien.innerHTML = dzisiaj.toLocaleDateString("en-US", options);
miesiac.innerHTML = dzisiaj.toLocaleDateString("en-US", options2);
        //myListItems.classlist.contains('close')
//add close 'X' button to every LI
function addXToLi () {

    let myListItems = document.getElementsByTagName("LI");

            for (let i = 0; i < myListItems.length; i++) {
            let div = document.createElement("DIV");
            let text = document.createTextNode("\u00D7");
            div.className = "close";
            div.appendChild(text);
            myListItems[i].appendChild(div);
            }

}

// let X button close LI
function letXClose () {
let close = document.getElementsByClassName("close")
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let li = this.parentElement;
            li.style.display = "none";
        }
    }
}

// make checked class on list item
let myList = document.querySelector('ul.list');
    myList.addEventListener('click', function(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle('checked');
        }
    }, false);

// add function
function addTask(inputValue) {
    if (inputValue === "") {
        alert('Naprawdę chcesz dodać puste zadanie? :)');
        return;
    }
        let l = document.createElement('LI');
        let t = document.createTextNode(inputValue);
        l.appendChild(t);
        l.className = "list-item";
        document.querySelector('ul.list').appendChild(l);
        addXToLi();
        letXClose();
        input.value = "";
    }

// task on enter
document.addEventListener("keyup", function() {
    if (event.keyCode === 13)  {
        addTask(input.value);
    }
}, false);

// task on button
toDoIcon.addEventListener('click', function () {
    addTask(input.value);
}, false);
