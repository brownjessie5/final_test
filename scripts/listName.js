function txListName(id,divName) {
	console.log('txListName');
	var div = document.getElementById(divName);
	var db = window.openDatabase("Database", "1.0", "Grocery App", 200000);
	db.transaction(function(tx){listName(tx,id,div);}, errorCB, successCB);
}
function listName(tx,id, div) {
	console.log('listName');
//	tx.executeSql('SELECT name FROM ITEM', [], queryItemSuccess, errorCB);
	tx.executeSql("SELECT name FROM LIST WHERE id = " + id, [], function(tx,results){listNameSuccess(tx,results,div);}, errorCB);
}

function listNameSuccess(tx, results, div) {
	console.log('listNameSuccess');
	div.innerHTML='Manage "' + results.rows.item(0).name + '"';
	}
