function product_add(call){
    console.log("product added to cart")
    call(complete)

}
function payment_details(called){
    console.log("Payment processing")
    called(order)

}
function complete(caller){
    console.log("payment sucessful");
    caller()
    
}
function order(){
    console.log("order placed")
}
product_add(payment_details)