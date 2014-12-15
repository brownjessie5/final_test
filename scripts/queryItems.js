function txQueryItems(startsWith, searchTerm, itemsTab,listId) {
	console.log('txQueryItems');
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
	db.transaction(function(tx){queryItems(tx,search,tab,listId);}, errorCB, successCB);
}

function queryItems(tx,search,tab,listId) {
	console.log('queryItem:' + search);
	tx.executeSql('SELECT id, name FROM ITEM WHERE upper(name) like ?', [search], function(tx,results){queryItemsSuccess(tx,results,tab,listId);}, errorCB);

	}

function queryItemsSuccess(tx, results, t, listId) {
	console.log('queryItemsSuccess');
	var len = results.rows.length;
	var itmid;
	console.log('results = ' + results.rows.length);
	clearTab(t);

	for (var i=0; i<len; i++){
		r = t.insertRow(i); 
		c = r.insertCell(0);
		itmid = "item" + results.rows.item(i).id;
		c.innerHTML = '<input type=checkbox name="itmchk" id="' + itmid + '"></input>'
		console.log(c.innerHTML);
		c = r.insertCell(1);
		c.innerHTML = results.rows.item(i).name;
		c = r.insertCell(2);
		c.innerHTML = '<a href="javascript:addToList(' + listId + ',' + results.rows.item(i).id + ')"><img src="images/cart.png"></a>"';
		//' + listId + ',' + results.rows.item(i).id =')">';
		}
	}

