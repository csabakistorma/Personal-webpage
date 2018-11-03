// SIDEBAR ANIMATION
function toggleSidebar() {
	document.getElementById('sidebar').classList.toggle('active');
}



//PERCENT COUNTER
function myPercentCounter() {
	var percentCountHtml = document.getElementById('percentCountHtml');
  var percentCountCss = document.getElementById('percentCountCss');
  var percentCountJs = document.getElementById('percentCountJs');
  var percentCountPhp = document.getElementById('percentCountPhp');
	
	// Minden elemhez külön számlálót rendelünk
	var counterHtml = 0;
  var counterCss = 0;
  var counterJs = 0;
  var counterPhp = 0;
	
	var idHtml = setInterval(frameHtml, 40);
  var idCss = setInterval(frameCss, 40);
  var idJs = setInterval(frameJs, 40);
  var idPhp = setInterval(framePhp, 40);
	
	function frameHtml() {
    if (counterHtml === 75) {
      clearInterval(idHtml);
    } else {
      counterHtml += 1;
      percentCountHtml.innerHTML = counterHtml + '%';
    }
  }
  
  function frameCss() {
    if (counterCss === 75) {
      clearInterval(idCss);
    } else {
      counterCss += 1;
      percentCountCss.innerHTML = counterCss + '%';
    }
  }
	
	function frameJs() {
    if (counterJs === 30) {
      clearInterval(idJs);
    } else {
      counterJs += 1;
      percentCountJs.innerHTML = counterJs + '%';
    }
  }
    
  function framePhp() {
    if (counterPhp === 85) {
      clearInterval(idPhp);
    } else {
      counterPhp += 1;
      percentCountPhp.innerHTML = counterPhp + '%';
    }
  }
}

myPercentCounter();
