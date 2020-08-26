var button  = document.getElementById('enter');
var input  = document.getElementById('userinput');
var ul = document.querySelector('ul');


function addItemToTheList() {
	if(input.value.length<=0){
		alert('You can\'t add an empty element');
	}else{
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = '';
	}
};

button.addEventListener('click', addItemToTheList);


input.addEventListener('keypress', function(){
	if(event.key === 'Enter'){
		addItemToTheList();
	}
});