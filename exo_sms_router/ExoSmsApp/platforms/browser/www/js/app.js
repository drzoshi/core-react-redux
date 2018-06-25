// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
  var lsTheme = localStorage.getItem("theme");
	if(lsTheme){
		lsTheme = JSON.parse(lsTheme);
		lsTheme["type"] = theme;
		localStorage.setItem("theme",JSON.stringify(lsTheme));
	}
  
}else{
	var lsTheme = localStorage.getItem("theme");
	if(lsTheme)
		lsTheme = JSON.parse(lsTheme);
	if(lsTheme && lsTheme.type){
		theme = lsTheme.type;
	}
	else{
		localStorage.setItem("theme",JSON.stringify({
			type: theme,
			layout: '',
			color: ''
		}));
	}
}
// Init App
var app = new Framework7({
  id: 'com.exolutus.getitbuyer',
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
	initTheme:function(self){
		var theme = localStorage.getItem("theme");
		if(theme) theme = JSON.parse(theme);
		if(theme && theme.layout)
			self.root.removeClass('theme-dark theme-light').addClass('theme-' + theme.layout);
		if(theme && theme.color){
			var currentColorClass = self.root[0].className.match(/color-theme-([a-z]*)/);
			if (currentColorClass) self.root.removeClass(currentColorClass[0]);
			self.root.addClass('color-theme-' + theme.color);
		}		
	}
  },
  routes: routes,
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
  on:{
  	init:function(){ 	  	
		var self = this;
		self.methods.initTheme(self);
		mainJs.onAppInit();	
			
		if(navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)){
			document.addEventListener("deviceready", mainJs.onDeviceReady, false);	
		}else{
			mainJs.onDeviceReady();
		}
  	}
  }
});


