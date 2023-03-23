var pathname = window.location.pathname;
document.title=decodeURIComponent(pathname.substring(pathname.lastIndexOf('/')+1, pathname.indexOf('.html')))+ " Auton Map";