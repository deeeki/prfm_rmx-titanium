Ti.include('libs/functions.js');

var tracks = [
	'レーザービーム',
	'微かなカオリ',
	'ねぇ',
	'FAKE IT',
	'VOICE',
	'575',
	'不自然なガール',
	'ナチュラルに恋して'
];
var data = [];
for (var i in tracks) {
	data.push({
		title: tracks[i],
		hasChild: true
	})
}
var search = Ti.UI.createSearchBar({
	showCancel:false
});
var tv = Ti.UI.createTableView({
	data: data,
	search: search,
	filterAttribute: 'title'
});
tv.addEventListener('click', function(e) {
	var win = Ti.UI.createWindow({
		title: e.rowData.title,
		backButtonTitle: 'Back',
		url: 'track.js'
	});

	Ti.UI.currentTab.open(win);
});
Ti.UI.currentWindow.add(tv);
