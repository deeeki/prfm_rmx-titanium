Ti.include('libs/functions.js');
Ti.include('libs/youtube.js');

var url = 'http://gdata.youtube.com/feeds/api/videos/-/Music/?vq=Perfume+Remix&orderby=published&alt=json'
YouTube.list_videos(url);