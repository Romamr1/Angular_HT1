angular.module('app').factory('listFactory', function () {

	var servise = {};

	var lists = [
    {
      id: 1,
      listName: 'Do HT',
      done: false
    },
    {
      id: 2,
      listName: 'Learn Angular',
      done: true
    },
    {
      id: 3,
      listName: 'Read book',
      done: false
    }
  ];

  servise.getLists = function () {
  	return lists;
  }

  servise.addList = function(name) {
  	var list = {
  		id: lists[lists.length-1].id+1,
  		listName: name,
  		done: false
  	}
  	lists.push(list);  	
  }

  servise.removeList = function(id) { 
  	console.log(lists); 	
  	for (var i =  0; i < lists.length; i++) {
  		if(lists[i].id === id){
  			lists.splice(i,1);
  		}
  	}
  }

	

	return servise;
})