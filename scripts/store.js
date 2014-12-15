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
//	tx.executeSql('INSERT INTO ITEM (id, name, sz) VALUES (1, "VanDeKamps Baked Beans", "28oz")');
//	tx.executeSql('INSERT INTO ITEM (id, name, sz) VALUES (2, "Minute Rice", "16oz")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(2,"100 Calorie Right Bites Cheez-it Snack Mix - 6 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(3,"100 Calorie Right Bites Chips Deluxe Cookies - 6 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(4,"100 Calorie Right Bites Fudge Dipped Pretzels - 6 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(5,"100 Calorie Right Bites Fudge Grahams Crackers - 6 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(6,"100 Calorie Right Bites Mini Brownies - 6 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(7,"100 Calorie Right Bites Mini Fudge Stripes Cookies - 12 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(8,"100 Calorie Right Bites Mini Fudge Stripes Cookies - 6 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(9,"100 Calorie Right Bites Sandies Fudge Dippped Cookies - 6 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(10,"Cheetos Puffs Party Size")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(11,"Cheetos Simply Natural Puffy Puffed Corn White Cheddar")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(12,"Cheetos Simply Natural White Cheddar Puffs")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(13,"Cheetos Simply Natural White Cheddar Puffs - 6 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(14,"Cheetos Twisted Puffs Cheese Flavored Snacks")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(15,"Cheez-it Baby Swiss Baked Snack Crackers")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(16,"Cheez-it Baked Snack Assortment Snack Mix")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(17,"Cheez-it Baked Snack Crackers")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(18,"Cheez-it Baked Snack Crackers")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(19,"Cheez-it Baked Snack Crackers - 12 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(20,"Cheez-it Baked Snack Crackers Cheddar Jack")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(21,"Chef Boyardee Beef Ravioli")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(22,"Chef Boyardee Beef Ravioli 99% Fat Free")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(23,"Chi-chis 100 Calorie Tortillas Fajita Style - 8 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(24,"Chi-chis Fiesta All Natural Hot Salsa")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(25,"Chi-chis Fiesta All Natural Medium Salsa")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(26,"Chi-chis Fiesta All Natural Mild Salsa")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(27,"Chi-chis Fiesta Black Bean & Corn Salsa Garden Style")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(28,"Chi-chis Fiesta Diced Green Chilies")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(29,"Chi-chis Fiesta Salsa Con Queso Mild")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(30,"Chi-chis Fiesta Wheels Green Jalapenos")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(31,"Chi-chis Fiesta Whole Green Chilies")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(32,"Chi-chis Fiesta Whole Green Jalapenos")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(33,"Chi-chis Flour Tortilla Fajita Style - 8 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(34,"Chi-chis Flour Tortilla Soft Taco Size - 12 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(35,"Chi-chis Flour Tortillas Burrito Size - 8 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(36,"Chi-chis Hot Thick & Chunky Salsa")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(37,"Chi-chis Medium 24oz Salsa")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(38,"Chi-chis Medium Enchilada Sauce")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(39,"Chi-chis Medium Taco Sauce")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(40,"Chi-chis Medium Thick & Chunky Salsa")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(41,"Chi-chis Medium Thick & Chunky Salsa")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(42,"Chi-chis Mild Enchilada Sauce")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(43,"Chi-chis Mild Enchilada Sauce")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(44,"Chi-chis Mild Thick & Chunky Salsa")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(45,"Chi-chis Mild Thick & Chunky Salsa")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(46,"Chi-chis Original Margarita")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(47,"Chi-chis Original Recipe Salsa Medium")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(48,"Chi-chis Original Recipe Salsa Mild")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(49,"Chi-chis Pina Colada")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(50,"Chi-chis Soft Taco Size White Corn Tortilla")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(51,"Chi-chis Sweet Corn Cake Mix")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(52,"Chi-chis Taco Style Tortillas White Corn -10 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(53,"Chi-chis Thick & Chunky Mild Salsa")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(54,"Chi-chis White Corn Tortilla Chips Authentic Original")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(55,"Chi-chis Whole Wheat Tortillas Fajita Style - 8 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(56,"Chicken Of The Sea Albacore Tuna To Go Cups - 2 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(57,"Chicken Of The Sea Albacore White Tuna In Water")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(58,"Chicken Of The Sea Chunk Light Tuna In Water")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(59,"Chicken Of The Sea Chunk Light Tuna In Water")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(60,"Chicken Of The Sea Chunk Light Tuna In Water - 3 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(61,"Chicken Of The Sea Chunk Light Tuna In Water - 4 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(62,"Chicken Of The Sea Chunk Light Tuna In Water 50% Less Sodium")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(63,"Chicken Of The Sea Chunk Light Tuna To Go Cups - 2 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(64,"Chicken Of The Sea Chunk White Albacore Tuna In Water")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(65,"Chinet All Occasion Plates Classic White - 72 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(66,"Chinet Appetizer And Dessert Plates Classic White - 35 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(69,"Chinet Bakeware Oval Baking Pan/lids - 3 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(70,"Chinet Bakeware Square Pans/lids - 3 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(71,"Chinet Bowls Classic White - 30 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(72,"Chinet Casuals Lunch Plates - 36 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(73,"Chiquita Bites Crunchy Carrot With Ranch Dip")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(74,"Chobani 0% Greek Yogurt Non-fat Honey")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(75,"Chobani 0% Greek Yogurt Non-fat Strawberry")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(76,"Chobani 0% Plain Non-fat Greek Yogurt")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(77,"Chobani 100 Calorie Key Lime Blended Greek Yogurt")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(78,"Chobani Blueberry Fruit On The Bottom Non-fat Greek Yogurt")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(79,"Chobani Champions Low-fat Greek Yogurt Honey-nana - 4 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(80,"Chobani Champions Low-fat Greek Yogurt Very Berry - 4 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(81,"Chobani Champions Orange Vanilla Low-fat Greek Yogurt - 4 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(82,"Chock Full O Nuts 1/2 Caffeine Ground Coffee")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(83,"Chock Full O Nuts 100% Arabica New York Roast Ground Coffee")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(84,"Chock Full O Nuts 100% Arabica New York Roast Ground Coffee")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(85,"Chock Full O Nuts 100% Colombian Ground Coffee")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(86,"Chock Full O Nuts 100% Colombian Ground Coffee")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(87,"Chock Full O Nuts Decaffeinated Original Ground Coffee")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(88,"Chock Full O Nuts Decaffeinated Original Ground Coffee")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(89,"Cinnamon Toast Crunch Cereal")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(90,"Clairol Natural Instincts 06 Linen Medium Ash Blonde Non-permanent Color")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(91,"Clairol Natural Instincts 20b Cinnamon Stick/medium Warm Brown Non-permanent Color")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(92,"Clairol Natural Instincts Hair Color 02, Sahara, Light Blonde 1 Kit")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(93,"Clairol Natural Instincts Hair Color 11g, Amber Shimmer, Lightest Golden Brown 1 Kit")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(94,"Claritin Non-drowsy 24 Hour Indoor & Outdoor Allergy Antihistamine Tablets - 60 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(95,"Claritin Non-drowsy 24 Hour Indoor & Outdoor Allergy Relief Tablets - 20 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(96,"Claritin Non-drowsy 24 Hour Indoor & Outdoor Allergy Relief Tablets - 30 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(97,"Claritin Non-drowsy 24 Hour Indoor & Outdoor Allergy Relief Tablets - 45 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(98,"Classico Family Favorites Pasta Sauce Traditional")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(99,"Classico Fire Roasted Pizza Sauce")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(100,"Classico Organic Pasta Sauce Tomato, Herbs & Spices")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(101,"Classico Pasta Sauce Signature Recipes Cabernet Marinara With Herbs")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(102,"Classico Pasta Sauce Signature Recipes Creamy Alfredo")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(103,"Claussen Kosher Dill Burger Slices")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(104,"Claussen Kosher Dill Halves")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(105,"Claussen Kosher Dill Mini")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(106,"Claussen Kosher Dill Sandwich Slices")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(107,"Claussen Kosher Dill Spears")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(108,"Clean & Clear Advantage 3 In 1 Foaming Acne Wash")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(109,"Clean & Clear Advantage 3-in-1 Exfoliating Cleanser")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(110,"Clean & Clear Advantage Acne Control Kit")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(111,"Clean & Clear Advantage Acne Control Oil-free 3-in-1 Foaming Wash")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(112,"Clearasil Daily Clear Daily Facial Scrub")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(113,"Clearasil Daily Clear Hydra-blast Oil-free Face Wash")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(114,"Clearasil Daily Clear Hydra-blast Oil-free Pads - 90 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(115,"Clearasil Daily Clear Oil-free Daily Face Wash")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(116,"Clif Bar Apricot Energy Bar")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(117,"Clif Bar Black Cherry Almond Energy Bar")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(118,"Clif Bar Chocolate Almond Fudge Energy Bar")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(119,"Clif Bar Chocolate Brownie Energy Bar")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(120,"Clif Bar Chocolate Chip & Crunchy Peanut Butter Mini Energy Bars - 10 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(121,"Clif Bar Chocolate Chip Energy Bar")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(122,"Clif Bar Chocolate Chip Energy Bar - 12 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(123,"Clif Bar Chocolate Chip Peanut Crunch Energy Bar")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(124,"Clif Bar Chocolate Chip, Crunchy Peanut Butter, Chocolate Brownie Mini Energy Bars - 18 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(125,"Clorox 2 Stain Fighter & Color Booster Packs - 16 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(126,"Clorox 2 Triple Solve Technology Clean Linen Stain Fighter & Color Booster")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(127,"Clorox Anywhere Daily Sanitizing Spray Hard Surface")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(128,"Clorox Automatic Toilet Bowl Cleaner")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(129,"Clorox Automatic Toilet Bowl Cleaner - 2 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(130,"Clorox Automatic Toilet Bowl Cleaner Bleach - 2 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(131,"Clorox Bleach & Blue Automatic Toilet Bowl Cleaner")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(132,"Clorox Bleach & Blue Automatic Toilet Bowl Cleaner Rain Clean - 2 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(133,"Clorox Bleach & Blue Automatic Toilet Bowl Cleaner Rain Clean Scent - 2 Pk")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(134,"Clorox Bleach Clean Linen Concentrated")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(135,"Clorox Bleach Foamer For The Bathroom")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(136,"Clorox Bleach Gel Cleaner + Bleach")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(137,"Coca-cola - 12 Pk")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(138,"Coca-cola - 20 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(139,"Coca-cola - 24 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(140,"Coca-cola - 6 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(141,"Colagate Total Whitening Toothpaste")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(142,"Colgate 360 Degree Optic White Toothbrush - 2 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(143,"Colgate 360 Degree Replacement Brush Heads - 2 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(144,"Colgate 360 Degree Soft Fresh n Protect Toothbrush")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(145,"Colgate 360 Degree Surround Sonic Powered Toothbrush")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(146,"Colgate 360 Full Head Medium Toothbrush - 2 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(147,"Colgate 360 Full Head Soft Toothbrush - 2 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(148,"General Mills Chocolate Chex Gluten Free Rice Cereal")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(149,"General Mills Corn Chex Cereal")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(150,"General Mills Gluten Free Cinnamon Chex Cereal")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(151,"General Mills Honey Nut Chex Cereal Gluten Free")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(152,"General Mills Rice Chex Cereal")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(153,"General Mills Wheat Chex Cereal")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(154,"Kraft Cheez Whiz Original Cheese Dip")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(155,"Nabisco 100 Cal Cheese Nips Thin Crisps Crackers - 6 Pk")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(156,"Nabisco 100 Cal Honey Maid Cinnamon Roll Thin Crisps Baked Snacks - 6 Pk")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(157,"Nabisco 100 Cal Mister Salty Milk Chocolate Pretzels - 6 Pk")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(158,"Nabisco 100 Cal Mister Salty Yogurt Flavored Pretzels - 6 Pk")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(159,"Nabisco 100 Cal Oreo Thin Crisps, Lorna Doone Cookies, Chips Ahoy! Thin Crisps Snacks Variety Pack - 12 Pk")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(160,"Nabisco 100 Cal Ritz Snack Mix Baked Snacks - 6 Pk")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(161,"Nabisco 100 Cal Sweet & Salty Mix Kettle Flavor Baked Snacks - 6 Pk")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(162,"Nabisco Chips Ahoy Chewy Cookies")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(163,"Nabisco Chips Ahoy Chewy Cookies")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(164,"Nabisco Chips Ahoy Chunky Cookies")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(165,"Nabisco Chips Ahoy Family Size Original Chocolate Chip Cookies")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(166,"Nabisco Chips Ahoy Original Cookies")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(167,"Nastle Coffee-mate Cinnamon Vanilla Creme Coffee Creamer")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(168,"Nestle 100 Grand Bars - 6 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(169,"Nestle 100 Grand Chewy Caramel Crispy Crunchies Milk Chocolate Bars - 8 Pk")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(170,"Nestle 100 Grand Fun Size Chocolates")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(171,"Nestle 100 Grand Fun Size Chocolates")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(172,"Nestle 100 Grand Milk Chocolate Candy Bar")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(173,"Nestle Bar Variety Pack - 20 Ct")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(174,"Nestle Coffee-mate Coconut Creme Flavor Coffee Creamer")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(175,"Nestle Coffee-mate Coffee Creamer French Vanilla")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(176,"Nestle Coffee-mate Coffee Creamer Girl Scouts Caramel & Coconut")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(177,"Nestle Coffee-mate Coffee Creamer Girl Scouts Thin Mints")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(178,"Nestle Coffee-mate Coffee Creamer Hazelnut")');
	tx.executeSql('INSERT INTO ITEM (ID, NAME) VALUES(179,"Rice Chex Gluten Free Cereal")');

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
	tx.executeSql('CREATE TABLE LIST_ITEM (list_id, item_id)');
	tx.executeSql('INSERT INTO LIST_ITEM (list_id, item_id) VALUES (1, 1)');
	tx.executeSql('INSERT INTO LIST_ITEM (list_id, item_id) VALUES (1, 2)');
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
	clearTable("maintab");
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
	clearTable("maintab");
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

function formQueryItem() {
	console.log('formQueryItem');
	clearTable("maintab");
	var container = document.getElementById("maindivheader");
	while (container.hasChildNodes()) {
		container.removeChild(container.lastChild);
	}
	var input = document.createElement("input");
	input.type = "text";
	input.name = "searchName";
	input.onkeyup = txQueryItem();
	container.appendChild(input);
}


function txQueryItem() {
	console.log('txQueryItem');
	var sName = document.getElementById("searchName");
	var context = sName.value;
	var db = window.openDatabase("Database", "1.0", "Grocery App", 200000);
	db.transaction(function(tx){queryItem(tx,context);}, errorCB, successCB);
}


function queryItem(tx, ctx) {
	console.log('queryItem');
	var searchString = "%" + ctx.val1 + "%";
//	tx.executeSql('SELECT name FROM ITEM', [], queryItemSuccess, errorCB);
	tx.executeSql("SELECT name FROM ITEM WHERE name like ?", [searchString], queryItemSuccess, errorCB);

}
function queryItemSuccess(tx, results) {
	console.log('queryItemSuccess');
	var len = results.rows.length;
	clearTable("maintab");
	t = document.getElementById("maintab");
	createTableHeader(t,["Item Name"]);

	for (var i=0; i<len; i++){
		console.log('queryItemSuccess loop');
		r = t.insertRow(1); 
		c = r.insertCell(0);
		c.innerHTML = results.rows.item(i).name;
		}
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

function clearTable(tab) {
    var c, r, t;
    t = document.getElementById(tab);
	while (t.rows.length>0) { 
		t.deleteRow(0);
	}
}

function clearTab(t) {
    var c, r;
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
	clearTable("maintab");
	t = document.getElementById("maintab");
	createTableHeader(t,["Table Name"]);

	for (var i=0; i<len; i++){
		r = t.insertRow(1); 
		c = r.insertCell(0);
		c.innerHTML = results.rows.item(i).name;
		}
	}

