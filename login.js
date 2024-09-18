document.getElementById('btn-login').addEventListener('click', function(e){
   e.preventDefault()
   const phoneNumber = document.getElementById('phone').value;
   const pinNumber = document.getElementById('pin').value;
   console.log(phoneNumber,pinNumber)
})