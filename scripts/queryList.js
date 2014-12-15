function txQueryList() {
	var db = window.openDatabase("Database", "1.0", "Grocery App", 200000);
	db.transaction(queryList, errorCB, successCB);
}

function queryList(tx) {
	tx.executeSql('SELECT * FROM LIST', [], queryListSuccess, errorCB);
}

function queryListSuccess(tx, results) {
	var len = results.rows.length;
	t = document.getElementById("chooselist");
	createTableHeader(t,["List Name"]);

	for (var i=0; i<len; i++){
		r = t.insertRow(1); 
		c = r.insertCell(0);
		c.innerHTML = '<a href="AddToList.html?listId=' + results.rows.item(i).id + '">' + results.rows.item(i).name + '</a>';
		}
	}

