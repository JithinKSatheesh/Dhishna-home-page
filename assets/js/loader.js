function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1000);
  }
  
  function setVisible(selector) {
    document.getElementById(selector).style.display = 'none';
  }
  
  onReady(function() {
    setVisible('dark');
  });