var myLst = document.getElementsByTagName("li");
var i;
for(i=0;i<myLst.length;i++){
    addClosebtn();
}

//To add x symbol at the end of every element
function addClosebtn(){
        var ele = document.createElement("span");
        var cross = document.createTextNode("\u00D7");
        ele.className='span';
        ele.appendChild(cross);
        myLst[i].appendChild(ele);
}


displayNone();

//function to display null in the textbox after adding
function displayNone(){
    var close = document.getElementsByClassName('span');
    for(i=0;i<close.length;i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}

//Add checked symbol

var lst = document.querySelector('ul');
lst.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


//Add a new element
function add(){
    var li = document.createElement('li');
    var input = document.getElementById('txt').value;
    var temp = document.createTextNode(input);
    li.appendChild(temp);
    if(input == ''){
        alert("Add something");
    }
    else{
        document.getElementById('ul').appendChild(li);
    }
    document.getElementById('txt').value = '';
    addClosebtn();
    displayNone();
}

//Add checked symbol
var lst = document.querySelector('ul');
lst.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);

