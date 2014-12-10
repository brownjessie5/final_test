// Destroy the database
function destroyDB(tx) {
	tx.executeSql('DROP TABLE IF EXISTS STORE');
	tx.executeSql('DROP TABLE IF EXISTS ITEM');
	tx.executeSql('DROP TABLE IF EXISTS ITEM_LOCATION');
	tx.executeSql('DROP TABLE IF EXISTS LIST');
	tx.executeSql('DROP TABLE IF EXISTS LIST_ITEM');
}

// Populate the database 
//
function createStore(tx) {
	tx.executeSql('CREATE TABLE STORE (id unique, name, address)');
	tx.executeSql('INSERT INTO STORE (id, name, address) VALUES (1, "Kroger", "312 Main Street, Cincinnati, Ohio")');
	tx.executeSql('INSERT INTO STORE (id, name, address) VALUES (2, "Walmart", "42 Bowen Ave, Mason, Ohio")');
}

function createItem(tx) {
	tx.executeSql('CREATE TABLE ITEM (id unique, name, sz)');
	tx.executeSql('INSERT INTO ITEM (id, name, sz) VALUES (1, "VanDeKamps Baked Beans", "28oz")');
	tx.executeSql('INSERT INTO ITEM (id, name, sz) VALUES (2, "Minute Rice", "16oz")');
}

function createItemLocation(tx) {
	tx.executeSql('CREATE TABLE ITEM_LOCATION (id unique, store_id, item_id, aisle)');
	tx.executeSql('INSERT INTO ITEM_LOCATION (id, store_id, item_id, aisle) VALUES (1, 1, 1, 8)');
	tx.executeSql('INSERT INTO ITEM_LOCATION (id, store_id, item_id, aisle) VALUES (2, 2, 1, 12)');
	tx.executeSql('INSERT INTO ITEM_LOCATION (id, store_id, item_id, aisle) VALUES (3, 1, 2, 14)');
	tx.executeSql('INSERT INTO ITEM_LOCATION (id, store_id, item_id, aisle) VALUES (4, 2, 2, 2)');
}

function createList(tx) {
	tx.executeSql('CREATE TABLE LIST (id unique, name)');
	tx.executeSql('INSERT INTO LIST (id, name) VALUES (1, "Groceries 11/30/2014")');
}

function createListItem(tx) {
	tx.executeSql('CREATE TABLE LIST_ITEM (id unique, list_id, item_id)');
	tx.executeSql('INSERT INTO LIST_ITEM (id, list_id, item_id) VALUES (1, 1, 1)');
	tx.executeSql('INSERT INTO LIST_ITEM (id, list_id, item_id) VALUES (2, 1, 2)');
}

function createDB(tx) {
	createStore(tx);
	createItem(tx);
	createItemLocation(tx);
	createList(tx);
	createListItem(tx);
	}

function txQueryListItem(i) {
	console.log("txQueryListItem()");
	var context = {val1: i};
	var db = window.openDatabase("Database", "1.0", "Grocery App", 200000);
	db.transaction(function(tx){queryListItem(tx,context);}, errorCB, successCB);
}

function queryListItem(tx, ctx) {
	console.log("QueryListItem()");
//	tx.executeSql('SELECT a.name, a.sz FROM ITEM a, LIST_ITEM b where a=id = b.item_id and a.list_id = ' + ctx.val1, queryListItemSuccess, errorCB);
	tx.executeSql('SELECT a.name, a.sz FROM ITEM a, LIST_ITEM b WHERE a.id = b.item_id AND b.list_id=?', [1], queryListItemSuccess, errorCB);
//	tx.executeSql('SELECT name, sz FROM ITEM WHERE ID IN (select item_id from list_item where list_id = ?', [1], queryListItemSuccess, errorCB);
//	tx.executeSql('SELECT * FROM STORE', [], queryListItemSuccess, errorCB);
}

function queryListItemSuccess(tx, results) {
	console.log("QueryListItemSuccess()");
	var len = results.rows.length;
	clearTable();
	t = document.getElementById("maintab");
	createTableHeader(t,["Item Name","Item Size"]);

	console.log("QueryListItemSuccess() for loop");
	for (var i=0; i<len; i++){
		r = t.insertRow(1); 
		c = r.insertCell(0);
		c.innerHTML = results.rows.item(i).name;
		c = r.insertCell(1);
		c.innerHTML = results.rows.item(i).sz;    
		}
	}

function txQueryStore() {
	var db = window.openDatabase("Database", "1.0", "Grocery App", 200000);
	db.transaction(queryStore, errorCB, successCB);
}

function queryStore(tx) {
	tx.executeSql('SELECT * FROM STORE', [], queryStoreSuccess, errorCB);
}

function queryStoreSuccess(tx, results) {
	var len = results.rows.length;
	clearTable();
	t = document.getElementById("maintab");
	createTableHeader(t,["Store Name","Store Address"]);

	for (var i=0; i<len; i++){
		r = t.insertRow(1); 
		c = r.insertCell(0);
		c.innerHTML = results.rows.item(i).name;
		c = r.insertCell(1);
		c.innerHTML = results.rows.item(i).address;    
		}
	}

function queryList(tx) {
	tx.executeSql('SELECT * FROM LIST', [], queryListSuccess, errorCB);
}

function createTableHeader(tbl, hdrArray) {
	var header = tbl.createTHead();
	var row = header.insertRow(0);     
	for (var i=0; i<hdrArray.length; i++){
		var cell = row.insertCell(i);
		cell.innerHTML = hdrArray[i];
		}
	}

// Query the success callback
//
function queryListSuccess(tx, results) {
	var len = results.rows.length;
	clearTable();
	t = document.getElementById("maintab");
	createTableHeader(t,["List Name"]);

	for (var i=0; i<len; i++){
		r = t.insertRow(1); 
		c = r.insertCell(0);
		c.innerHTML = '<a href=javascript:txQueryListItem(' + results.rows.item(i).id + ')>' + results.rows.item(i).name + '</a>';
		}
	}

// Transaction error callback
//
function errorCB(err) {
	console.log("Error processing SQL: "+err.message + " code: " + err.code);
}

// Transaction success callback
//
function successCB() {
	console.log("SQL Success");
}

// Transaction success callback
//
function txQueryList() {
	var db = window.openDatabase("Database", "1.0", "Grocery App", 200000);
	db.transaction(queryList, errorCB, successCB);
}

// Run a transaction to create the database
//
function txCreateDB() {
	var db = window.openDatabase("Database", "1.0", "Grocery App", 200000);
	db.transaction(createDB, errorCB, successCB);
}

// Run a transaction to create the database
//
function txDestroyDB() {
	var db = window.openDatabase("Database", "1.0", "Grocery App", 200000);
	db.transaction(destroyDB, errorCB, successCB);
}

function clearTable() {
    var c, r, t;
    t = document.getElementById("maintab");
	while (t.rows.length>0) { 
		t.deleteRow(0);
	}
}

function addTable() {
    var c, r, t;
    t = document.getElementById("maintab");
    r = t.insertRow(0); 
    c = r.insertCell(0);
    c.innerHTML = 123;
    c = r.insertCell(1);
    c.innerHTML = 456;    
}

function queryTableNames(tx) {
	tx.executeSql('SELECT * FROM sqlite_master WHERE type="table"', [], queryTableNamesSuccess, errorCB);
}

function txQueryTableNames() {
	var db = window.openDatabase("Database", "1.0", "Grocery App", 200000);
	db.transaction(queryTableNames, errorCB, successCB);
}

function queryTableNamesSuccess(tx, results) {
	var len = results.rows.length;
	clearTable();
	t = document.getElementById("maintab");
	createTableHeader(t,["Table Name"]);

	for (var i=0; i<len; i++){
		r = t.insertRow(1); 
		c = r.insertCell(0);
		c.innerHTML = results.rows.item(i).name;
		}
	}

