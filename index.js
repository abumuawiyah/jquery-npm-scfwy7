import jQuery from 'jquery';


console.log( jQuery );


// jQuery Version
const appDiv = document.getElementById('app');
const version = jQuery().jquery;

appDiv.innerHTML = `<h3>JQuery Version - ${version}</h3>`;