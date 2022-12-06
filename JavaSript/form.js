///MOBILE NAV MENU
// export const mobileNav = () => {
//   const toggleBtn = document.querySelector('.navbar-expand-lg .navbar-toggler');
//   const mediaQuery = window.matchMedia("(max-width: 767px)");

//   toggleBtn.addEventListener('click', function() {
//     if (mediaQuery.matches && toggleBtn.classList.contains('collapsed')) {
//       document.querySelector('.nav').classList.remove('select-hide')
//       document.querySelectorAll('#main, #footer').forEach(el => {
//         el.style.display = 'none' 
//       });
//       document.querySelectorAll('.body, .navbar-expand-lg').forEach(el => {
//         el.style.background = 'var(--dark)'
//       });
//       document.querySelector('.menu-icon').classList.remove('select-hide')
//       document.querySelectorAll('.icon-bar').forEach(el => {
//         el.classList.add('select-hide');
//       });
//       document.querySelector('.navbar').classList.remove('nav-shadow')
//     } else {
//       document.querySelectorAll('#header, #main, #footer').forEach(el => {
//         el.style.display = 'block'
//       });
//      document.querySelectorAll('.body, .navbar-expand-lg').forEach(el => {
//         el.style.background = 'var(--warning)'
//        });
//       document.querySelector('.menu-icon').classList.add('select-hide')
//       document.querySelectorAll('.icon-bar').forEach(el => {
//         el.classList.remove('select-hide');
//       });
//       document.querySelector('.navbar').classList.add('nav-shadow')
//       document.querySelector('ul.nav.navbar-nav').classList.add('select-hide')
//     }
//   });
// };
// mobileNav();

//SELECTION DROP 
  var x, i, j, selElmnt, a, b, c;
  x = document.getElementsByClassName("custom-select");
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {

      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {

        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByClassName("select")[0];
        h = this.parentNode.previousSibling;

        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
    });
  }
  function closeAllSelect(elmnt) {
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  document.addEventListener("click", closeAllSelect);

