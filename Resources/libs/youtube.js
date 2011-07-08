var YouTube = {
	list_videos : function(req_url) {
		var xhr = Ti.Network.createHTTPClient();
		xhr.open('GET', req_url);
		xhr.onload = function() {
			var json = JSON.parse(this.responseText);
			var data = [];

			for (var i in json.feed.entry) {
				var url = '';
				var link = json.feed.entry[i].link;
				for (var j in link) {
					if (link[j].rel.indexOf('#mobile', 0) >= 0) {
						url = link[j].href.replace('details', 'watch');
						break;
					}
				}
				if (url != '') {
					data.push({
						title : json.feed.entry[i].title.$t,
						hasChild : true,
						url : url
					});
				}
			}

			var tv = Titanium.UI.createTableView({
				data : data
			});
			tv.addEventListener('click', function(e) {
				var win = Ti.UI.createWindow({
					title : e.rowData.title,
					backButtonTitle : 'Back'
				});

				wv = Ti.UI.createWebView();
				wv.url = e.rowData.url;
				win.add(wv);
				Ti.UI.currentTab.open(win);
			});
			Ti.UI.currentWindow.add(tv);
		};
		xhr.send();
	}
}