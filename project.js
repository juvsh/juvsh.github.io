window.onload = function() {
    menu = document.getElementById('myTopnav');
    menu.onclick = function myFunction() {
     if (menu.className === 'topnav') {
      menu.className += ' responsive';
     } else {
      menu.className = 'topnav';
     }
    }
    }