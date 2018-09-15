// SIDEBAR ANIMATION
function toggleSidebar() {
	document.getElementById('sidebar').classList.toggle('active');
}


// PROGRESSBAR HTML
function progressHtml() {
   var percent = document.getElementById('percentCountHtml');
	var counter = 0;
	var id = setInterval(frame, 40);
	
	function frame() {
    if (counter === 75) {
      clearInterval(id);
    } else {
      counter += 1;
      percent.innerHTML = counter + '%';
    }
  }
}
progressHtml();


// PROGRESSBAR CSS
function progressCss() {
 var percent = document.getElementById('percentCountCss');
	var counter = 0;
	var id = setInterval(frame, 40);
	
	function frame() {
    if (counter === 75) {
      clearInterval(id);
    } else {
      counter += 1;
      percent.innerHTML = counter + '%';
    }
  }
}
progressCss();



// PROGRESSBAR JAVASCRIPT
function progressJs() {
  var percent = document.getElementById('percentCountJs');
	var counter = 0;
	var id = setInterval(frame, 40);
	
	function frame() {
    if (counter === 30) {
      clearInterval(id);
    } else {
      counter += 1;
      percent.innerHTML = counter + '%';
    }
  }
}
progressJs();



// PROGRESSBAR PHP
function progressPhp() {
  var percent = document.getElementById('percentCountPhp');
	var counter = 0;
	var id = setInterval(frame, 40);
	
	function frame() {
    if (counter === 85) {
      clearInterval(id);
    } else {
      counter += 1;
      percent.innerHTML = counter + '%';
    }
    
  }
}
progressPhp();