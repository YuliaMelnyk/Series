// jquery
// onclick
$('#little_fires').on('click', function (event) {
  window.location.href = 'http://localhost:8080/proyecto/series/Little_fires.html'

});
$('#manifest').on('click', function (event) {
  window.location.href = 'http://localhost:8080/proyecto/series/Manifest.html'

});
$('#devs').on('click', function (event) {
  window.location.href = 'http://localhost:8080/proyecto/series/Devs.html'

});
$('#dark').on('click', function (event) {
  window.location.href = 'http://localhost:8080/proyecto/series/Dark.html'

});
$('#murder').on('click', function (event) {
  window.location.href = 'http://localhost:8080/proyecto/series/Murder.html'

});
$('#you').on('click', function (event) {
  window.location.href = 'http://localhost:8080/proyecto/series/You.html'

});
$('#scandal').on('click', function (event) {
  window.location.href = 'http://localhost:8080/proyecto/series/Scandal.html'

});
$('#trouble').on('click', function (event) {
  window.location.href = 'http://localhost:8080/proyecto/series/Good_trouble.html'

});
$('#valley').on('click', function (event) {
  window.location.href = 'http://localhost:8080/proyecto/series/Silicon_valley.html'

});
$('#rayan').on('click', function (event) {
  window.location.href = 'http://localhost:8080/proyecto/series/Jack_Rayan.html'

});
$('#morning').on('click', function (event) {
  window.location.href = 'http://localhost:8080/proyecto/series/Morning_show.html'

});

// on Sign Up clicked
$(document).ready(function () {
  $('#sign-up-btn').on('click', function () {
    $('.sign-up-frame').css('display', 'block');
  });
});

// on register clicked
//$(document).ready(function() {	
//$('#subscribe-btn').on('click', function() {
//$('.subscribe-frame').css('display', 'block');
//});
//});

// put values from xml to Devs.html   
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    devsTitle(this);
    devsDesc(this);
    devsIMG(this);
    littleTitle(this);
    littleDesc(this);
    littleIMG(this);
    darkTitle(this);
    darkDesc(this);
    darkIMG(this);
    manifestTitle(this);
    manifestDesc(this);
    manifestIMG(this); 
    murderTitle(this.responseXML);
  }
};
xhttp.open("GET", "series.xml", true);
xhttp.send();

 // function for get Devs title
function devsTitle(xml) {
  var x, i, txt, xmlDoc;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("title");

  txt += x[0].childNodes[0].nodeValue + "<br>";

  document.getElementById("devsTitle").innerHTML = txt;
}

// function for get Devs description
function devsDesc(xml) {
  var x, i, txt, xmlDoc;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("review");

  txt += x[0].childNodes[0].nodeValue + "<br>";

  document.getElementById("devsDesc").innerHTML = txt;
}
// function for get Devs image link
function devsIMG(xml) {
  var x, i, txt, xmlDoc;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("image");

  txt += x[0].childNodes[0].nodeValue + "<br>";

  document.getElementById("devsImg").getAttribute("src").innerHTML = txt;
}
// function for get Little_fires title
function littleTitle(xml) {
  var x, i, txt, xmlDoc;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("title");
  for (i = 0; i < x.length; i++) {
    if (i == 1) {
      txt += x[i].childNodes[0].nodeValue + "<br>";
    }
  }
  document.getElementById("littleTitle").innerHTML = txt;
}
// function for get Little_fires description
function littleDesc(xml) {
  var x, i, txt, xmlDoc;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("review");
  for (i = 0; i < x.length; i++) {
    if (i == 1) {
      txt += x[i].childNodes[0].nodeValue + "<br>";
    }
  }

  document.getElementById("littleDesc").innerHTML = txt;
}
// function for get Little_fires link
function littleIMG(xml) {
  var x, i, txt, xmlDoc;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("image");
  for (i = 0; i < x.length; i++) {
    if (i == 1) {
      txt += x[i].childNodes[0].nodeValue + "<br>";
    }
  }

  document.getElementById("littleImg").getAttribute("src").innerHTML = txt;
}
// function for get Dark title
function darkTitle(xml) {
  var x, i, txt, xmlDoc;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("title");
  for (i = 0; i < x.length; i++) {
    if (i == 2) {
      txt += x[i].childNodes[0].nodeValue + "<br>";
    }
  }
  document.getElementById("darkTitle").innerHTML = txt;
}
// function for get Dark description
function darkDesc(xml) {
  var x, i, txt, xmlDoc;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("review");
  for (i = 0; i < x.length; i++) {
    if (i == 2) {
      txt += x[i].childNodes[0].nodeValue + "<br>";
    }
  }

  document.getElementById("darkDesc").innerHTML = txt;
}
// function for get Dark link
function darkIMG(xml) {
  var x, i, txt, xmlDoc;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("image");
  for (i = 0; i < x.length; i++) {
    if (i == 2) {
      txt += x[i].childNodes[0].nodeValue + "<br>";
    }
  }

  document.getElementById("darkImg").getAttribute("src").innerHTML = txt;
}
// function for get Manifest title
function manifestTitle(xml) {
  var x, i, txt, xmlDoc;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("title");
  for (i = 0; i < x.length; i++) {
    if (i == 3) {
      txt += x[i].childNodes[0].nodeValue + "<br>";
    }
  }
  document.getElementById("manifestTitle").innerHTML = txt;
}
// function for get Manifest description
function manifestDesc(xml) {
  var x, i, txt, xmlDoc;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("review");
  for (i = 0; i < x.length; i++) {
    if (i == 3) {
      txt += x[i].childNodes[0].nodeValue + "<br>";
    }
  }

  document.getElementById("manifestDesc").innerHTML = txt;
}
// function for get Manifest link
function manifestIMG(xml) {
  var x, i, txt, xmlDoc;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("image");
  for (i = 0; i < x.length; i++) {
    if (i == 3) {
      txt += x[i].childNodes[0].nodeValue + "<br>";
    }
  }

  document.getElementById("manifestImg").getAttribute("src").innerHTML = txt;
} 
// function for get HTGAWM title
function murderTitle(xmlDoc) {
  var x, i, txt;
  txt = "";
  x = xmlDoc.getElementsByTagName('serie');
  for (i = 0; i < x.length; i++) {
      if(x[i].getAttribute('id') == '2'){
          txt += x[i].children[2].textContent + "<br>";
      }    
  }
  document.getElementById("murderTitle").innerHTML = txt;
}


