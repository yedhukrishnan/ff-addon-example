// Content Script

console.log('Content script loaded');

window.onerror = error => {
  console.log('On Error Handler');
  console.log(error);
}
