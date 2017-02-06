angular.module('app').controller('listsCtrl', function (listFactory) {
	
	this.lists = listFactory.getLists();

	this.addList = function () {
		listFactory.addList(this.listName);
		this.listName = '';
	};

	this.removeList = function(listId) {
		listFactory.removeList(listId);
	}

	this.typeOut = function(str){
		if (str === 'todo') {
			for (var i = 0; i < this.lists.length; i++) {
				this.lists[i].curentDone = this.lists[i].done;
			}
		} else if (str === 'done') {
			for (var i = 0; i < this.lists.length; i++) {
				this.lists[i].curentDone = !this.lists[i].done;
			}
		} else if (str === 'all') {
			for (var i = 0; i < this.lists.length; i++) {
				this.lists[i].curentDone = false;
			}
		}
	}
})