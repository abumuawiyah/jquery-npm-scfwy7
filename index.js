import $ from 'jquery';

const appDiv = document.getElementById('app');
const version = $().jquery;
appDiv.innerHTML = `<h3>JQuery Version - ${version}</h3>`;

$(document).ready(function () {
  const $style = $("<style> .test:before {content: '&'} </style>");
  document.body.append($style[0]);
  const $test = $('.test');
  const beforeContent = window.getComputedStyle($test[0], ':before').content;
  console.log(beforeContent);
});
