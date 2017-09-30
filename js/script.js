// JS - Events

var addItem = document.getElementById('addElem'),
    listElem = document.getElementById('list');

addItem.addEventListener('click', function() {
	var newItem = document.createElement('li');
	var numberOfItems = document.getElementsByTagName('li').length;
	newItem.innerHTML = 'item ' + numberOfItems;
	listElem.appendChild(newItem);
});

