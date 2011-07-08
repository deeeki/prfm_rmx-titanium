Ti.include('libs/functions.js');

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor('#000');
// create tab group
var tabGroup = Ti.UI.createTabGroup();
// create base UI tab and root window
var win1 = Ti.UI.createWindow({  
    title : 'Latest Remixes',
    backgroundColor : '#fff',
    url : 'latest.js'
});
var tab1 = Ti.UI.createTab({  
    icon : 'KS_nav_views.png',
    title : 'Latest',
    window : win1
});
var win2 = Ti.UI.createWindow({  
    title : 'Track List',
    backgroundColor : '#fff',
    url : 'track_list.js'
});
var tab2 = Ti.UI.createTab({  
    icon : 'KS_nav_ui.png',
    title : 'Track List',
    window : win2
});

//  add tabs
tabGroup.addTab(tab1); 
tabGroup.addTab(tab2);
// open tab group
tabGroup.open();