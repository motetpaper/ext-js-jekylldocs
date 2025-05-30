//
//
// ext.js
// job    : creates black-white high-contrast jekyll docs when printing
// git    : https://github.com/motetpaper/ext-js-jekylldocs
// lic    : MIT
//
//
//
//

// before printing, make page elements high-contrast
window.onbeforeprint = function() {
 const d = document;
  const q = d.querySelectorAll('*');
  q.forEach((a) => {
    a.style.color = 'black';
    a.style.backgroundColor = 'white';
  });
}

// after printing, reload the page to its previous state
window.onafterprint = function() {
  window.history.go(); // reload page
}

console.log('hi');
