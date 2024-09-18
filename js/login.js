document.getElementById('btn-login').addEventListener('click', function (e) {
   e.preventDefault()
   const phoneNumber = document.getElementById('phone').value;
   const pinNumber = document.getElementById('pin').value;

   if (phoneNumber === '7' && pinNumber === '1234') {
      window.location.href = '/home.html'
   }
   else {
      alert('give me right number or pin')
   }
})