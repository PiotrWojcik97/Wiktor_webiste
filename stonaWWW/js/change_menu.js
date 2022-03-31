// const getElement = (selector) => {
//     const element = document.querySelector(selector)
  
//     if (element) return element
//     throw Error(
//       `Please double check your class names, there is no ${selector} class`
//     )
//   }

// const links = getElement('.nav-box')
// const navBtnDOM = getElement('.nav-btn')

// navBtnDOM.addEventListener('click', () => {
//     links.classList.toggle('show-links')
//   })

function myButton() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.nav-btn')) {
    var dropdowns = document.getElementsByClassName("nav_box");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}