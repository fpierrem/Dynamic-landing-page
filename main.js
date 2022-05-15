// Set variables
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focusTimeframe = document.getElementById('focusTimeframe'),
focus = document.getElementById('focus');

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

today = new Date();

// Display time
function displayTime(){
  h = today.getHours();
  m = today.getMinutes();
  h = h >= 10 ? h : "0" + h;
  m = m >= 10 ? m : "0" + m;
  time.innerHTML = `${h}:${m}`;
  setTimeout(displayTime, 1000);
};

// Set greeting and image depending on time of day
function setGreetingAndImage(){
  h = today.getHours();
  if (h >= 4 && h < 12) {
    greeting.innerHTML = "Good morning, ";
    focusTimeframe.innerHTML = "What shall we do today?"
    document.body.style.background = "url('Images/morning.jpeg')no-repeat center center/cover";
  };
  if (h >= 12 && h < 18) {
    greeting.innerHTML = "Good afternoon, ";
    focusTimeframe.innerHTML = "What shall we do today?"
    document.body.style.background = "url('Images/afternoon.jpeg')no-repeat center center/cover";
  };
  if (h >= 18 && h < 22) {
    greeting.innerHTML = "Good evening, ";
    focusTimeframe.innerHTML = "What shall we do tonight?"
    document.body.style.background = "url('Images/evening.jpeg')no-repeat center center/cover";
  };
  if (h >= 22 || h < 4) {
    greeting.innerHTML = "Good night, ";
    focusTimeframe.innerHTML = "What shall we do tomorrow?"
    document.body.style.background = "url('Images/night.jpeg')no-repeat center center/cover";
  };
}

// Get name
function getName(){
  if (localStorage.getItem('name') === null){
    name.innerHTML = "[your name here]";
  }
  else {
    name.innerHTML = localStorage.getItem('name');
  }
}

// Save name to local storage
function setName(e) {
  if (e.type == 'keypress'){
    if (e.keyCode == 13){
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  }
  else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get focus
function getFocus(){
  if (localStorage.getItem('focus') === null){
    focus.innerHTML = "[type it here]";
  }
  else {
    focus.innerHTML = localStorage.getItem('focus');
  }
}

// Save name to local storage
function setFocus(e) {
  if (e.type == 'keypress'){
    if (e.keyCode == 13){
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  }
  else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

setGreetingAndImage();
displayTime();
getName();
getFocus();
