function onlynumber(evt) {
   let theEvent = evt || window.event;
   let key = theEvent.keyCode || theEvent.which;
   key = String.fromCharCode(key);
   //var regex = /^[0-9.,]+$/;
   let regex = /^[0-9.]+$/;
   if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
   }
}