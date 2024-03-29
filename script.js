// Make the DIV element draggable:
aboutWin = document.getElementById("aboutWindow");
myComWin = document.getElementById("mycomWindow");
projsWin = document.getElementById("projsWindow");
notesWin = document.getElementById("notesWindow");

dragElement(aboutWin);
dragElement(myComWin);
dragElement(projsWin);
dragElement(notesWin);

init();
xOut("projs");
xOut("notes");

document.getElementById("notesWindowBody").setAttribute('contenteditable', 'true');

function init() {
  // aboutWin.style.left = "156px";
  aboutWin.style.left = "12.5%";
  aboutWin.style.top = "10%";

  myComWin.style.left = "58%";
  myComWin.style.top = "23%";
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  // this can be nixed, make it deterministic
  if (document.getElementById(elmnt.id + "Header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    let parentElement = elmnt.parentElement;
    if(elmnt.offsetTop < 0){elmnt.style.top = "0px"; return;}
    if(elmnt.offsetTop > (parentElement.offsetHeight - elmnt.offsetHeight))     {
        elmnt.style.top = (parentElement.offsetHeight - elmnt.offsetHeight) + "px"; 
        return;
      }
    if(elmnt.offsetLeft < 0){elmnt.style.left = "0px";return}
    if(elmnt.offsetLeft > (parentElement.offsetWidth - elmnt.offsetWidth)){
        elmnt.style.left = (parentElement.offsetWidth - elmnt.offsetWidth) + "px";
        return;
    }

    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var clockBox = document.getElementById("clock");
var dateBox = document.getElementById("date");

function dateTime() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();

  const day = now.getDate();
  const mon = now.getMonth()+1;
  const yr = now.getFullYear();


  const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  const dateStr = `${yr}-${mon.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  clockBox.innerText = clockStr;
  dateBox.innerText = dateStr;
};

dateTime();
setInterval(dateTime, 30000);

// var button = document.getElementById('about_ico');

function xShow(name) {
  var wind = document.getElementById(name + 'Window');
  var task = document.getElementById(name + "Task");
  wind.style.display = 'block';
  task.style.display = 'block';
  // Resets attributes defined by CSS
  wind.setAttribute('style', '');
  task.setAttribute('style', '');
};

function xOut(name) {
  var div = document.getElementById(name + 'Window');
  var task = document.getElementById(name + "Task");
  div.style.display = 'none';
  task.style.display = 'none';
}

// var xbutton = document.getElementById('aboutWindowX');
// xbutton.onclick = xOut(xbutton);

var sites = ["https://www.youtube.com/watch?v=daEaMbexIyg", 
"https://www.youtube.com/watch?app=desktop&v=K_sPVLjZklE", "https://www.youtube.com/watch?v=S82jfxfNLbs", 
"https://www.youtube.com/watch?v=IMUeM9g0PGE", "https://www.youtube.com/watch?v=qbjwNU-72ss", 
"https://www.youtube.com/watch?v=KsjAOPvQgII", "https://www.youtube.com/watch?v=sdOpnvJbjc0", 
"https://www.youtube.com/watch?v=Vgc_GLVvkYk", "https://www.youtube.com/watch?v=-Wnsdbv3SFg", 
"https://www.youtube.com/watch?v=JE2pEroh8QI", "https://www.youtube.com/watch?v=J4q4k2ppkUM", 
"https://www.youtube.com/watch?v=5KMKLpYvuEo", "https://www.youtube.com/watch?v=YS8jryBA-7Y", 
"https://www.youtube.com/watch?app=desktop&v=8LCmC7bh_qU", "https://www.youtube.com/watch?v=-QZ86Q0cytg", 
"https://www.youtube.com/watch?v=CTV-wwszGw8", "https://www.youtube.com/watch?v=0rMXZ1EpHBs", 
"https://biosector01.com/wiki/BIONICLE.com", "http://make-everything-ok.com/", "http://voteonourson.com/", 
"https://www.thisman.org/", "https://biggulpsupreme.neocities.org/pipes.gif", "https://www.sometimesredsometimesblue.com/", 
"https://www.blankwindows.com/", "http://www.milliondollarhomepage.com/", "http://eelslap.com/", "https://hmpg.net/", 
"https://www.itwillneverbethesame.com/", "https://wwwwwwwww.jodi.org/", "https://kanite.net/", "https://puginarug.com/", 
"https://onesquareminesweeper.com/", "http://corndog.io/"];

function randSite() {
  window.location.reload();
  return sites[Math.floor(Math.random()*sites.length)];
}