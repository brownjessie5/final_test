function txAddToList(listId,ItemId) {
	console.log('txAddToList');
	var db = window.openDatabase("Database", "1.0", "Grocery App", 200000);
	db.transaction(function(tx){addToList(tx,listId,itemId);}, errorCB, successCB);
}

function addToList(tx, listId, itemId) {
	console.log('addToList()');
	tx.executeSql('INSERT INTO LIST_ITEM(list_id, item_id) VALUES (?,?)', [listId,itemId], successCB, errorCB);
	}

