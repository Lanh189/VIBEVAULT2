document.getElementById('buyNowButton').addEventListener('buyNowButton', submitForm)

async function submitForm(){
    const response = await fetch('/create_payment_link',{
        method:'post'
    })
    const payment = await response.json()
    window.open(payment.checkoutUrl)
}