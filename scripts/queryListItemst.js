function txQueryListItems(listId, startsWith, searchTerm, itemsTab) {
	var db = window.openDatabase("Database", "1.0", "Grocery App", 200000);
	var search;
	var sTerm = document.getElementById(searchTerm);
	var sType = document.getElementById(startsWith);
	if (sType.checked) {
		search = sTerm.value + "%";
		}
	else {
		search = "%" + sTerm.value + "%";
		}
	var tab=document.getElementById(itemsTab);
	db.transaction(function(tx){queryListItems(tx,search,tab);}, errorCB, successCB);
}

function queryListItems(tx,search,tab) {
	tx.executeSql('SELECT * FROM LIST WHERE NAME LIKE ' + search, [], function(tx,results){queryListItemsSuccess(tx,results,tab);}, errorCB);
}

function queryListItemsSuccess(tx, results, t) {
	var len = results.rows.length;
	createTableHeader(t,["List Name"]);

	for (var i=0; i<len; i++){
		r = t.insertRow(1); 
		c = r.insertCell(0);
		c.innerHTML = '<a href="AddToList.html?listId=' + results.rows.item(i).id + '">' + results.rows.item(i).name + '</a>';
		}
	}

