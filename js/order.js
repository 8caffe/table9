const btn = document.getElementById('sendMessageButton');
const tableNumber = "۹"; // Set the table value to 
document.getElementById('table').value = tableNumber ;

emailjs.init('a2zpCAcOnbLh1avBW')

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.innerText = btn.textContent = 'منتظر بمانید';

   const serviceID = 'service_ls2dqjj';
   const templateID = 'template_hjwtbfo';


   emailjs.sendForm(serviceID, templateID, this) // this form
    .then(() => {
      btn.innerText = btn.textContent = 'سفارش';
      alert('برای ثبت سفارش شما می آییم');
    }, (err) => {
        btn.innerText = btn.textContent = 'سفارش';
      alert(JSON.stringify(err));
    });
});

