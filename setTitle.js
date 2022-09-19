var pathname = window.location.pathname;
document.title=pathname.substring(pathname.lastIndexOf('/')+1, pathname.indexOf('.html'))+ " Auton Map";