(function(){
	var header = document.querySelector('header'),
		body = document.querySelector('body'),
		links = document.querySelectorAll('.link'),
		bar = document.querySelectorAll('.bar');
	var colors = [
		"#B71C1C",  // red
		"#1A237E",  // indigo
		"#004D40",  // teal
		"#212121",  // gray
		"#1FA67A",  // FontAwesome color
		"#058",
		"#976f3c",	//yellow
		"#455a64",	//gray
		"#db4437"	//red
	];
	setTimeout(function(){
		 body.style.opacity = 1;
		body.style.filter = 'alpha(opacity=100)';
	},500);
	var randFirst = Math.floor(Math.random() * colors.length);		//感觉这里还能够在改进一下
	header.style['background-color'] = colors[randFirst];
	setInterval(function(){
		var rand = Math.floor(Math.random() * colors.length);
		header.style['background-color'] = colors[rand];
	},13000);
	// for(var i = 0;i<bars.length;i++){
	// 	bars[i].onmouseover = function(){
	// 		this.style['background-color'] =
	// 	}  这个颜色变化暂时先放到这里
	// }
	for(var i = 0;i<links.length;i++){
		links[i].onclick = function(e){
				e.preventDefault();
				var goTo = this.href;
				body.style.opacity = 0;
				setTimeout(function(){
				window.location.href = goTo;
				},1000);
		};
	}

}());
