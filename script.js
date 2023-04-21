Let menu = document.querySelector('#menu-icon');
Let navlist = document.querySelector('.navlist');

menu.oneclick = ()=> {
  menu.classlist. toggle ('bx-x');
  navlist.classlist.toggle('open');
};
const sr = Scrollreveal ({
distance: '65px',
duration: 2600,
delay: 450,
reset: true



})
sr. reveal('.hero-text,{delay:200, origin:'top'});
sr. reveal('.hero-text,{delay:450, origin:'top'});