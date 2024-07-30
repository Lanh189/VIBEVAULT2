document.getElementById('submit').addEventListener('click', submitForm)

async function submitForm(){
    const response = await fetch('/create_payment_link',{
        method:'post'
    })
    const payment = await response.json()
    window.open(payment.checkoutUrl)
}

$(document).ready(function() {
    $('#trackCarousel').carousel({
        interval: 3000, // Interval for automatic sliding
        pause: false // Disable pausing on hover
    });
});