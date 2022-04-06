$(document).on('click','#dec_qty',()=>{
    let qty = $('#qty').val();
    if (qty>=2) {
        qty--;
        $('#qty').val(qty)
    }    
});

$(document).on('click', '#inc_qty', ()=>{
    let qty = $('#qty').val();
    if (qty <= 98) {
        qty++;
        $('#qty').val(qty)
    }
    
});

$(document).on('click', '#addItem', ()=>{
    //Vars
    let store = $('#store :selected').val();
    let product = $('#addProduct').val();
    let qty = $('#qty').val();
    let price = $('#price').val();
    
   if (store.length!=0 || product.length!=0 || price.length!=0) {
       
   }

    alert(`Store: ${store}, Product: ${product}, Qty: ${qty}, Price: ${price}.....Total: ${qty*price}`);

});

function calcTotal(newSubTotal) {
    let total = $('#totalAmount').val();

    total += newSubTotal;

    $('#totalAmount').val(total);    
}

function checkInputs() {
    if (condition) {
        name
    }
}