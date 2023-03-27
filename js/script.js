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

/**
 * ITEM Actions
 */
//Mark completed
$(document).on('click','.actions .completed-btn',()=>{
    // let itemId = $(this).parent('.completed-btn').parent('.actions').parent('.groceryItem').attr('data-itemid');
    let id = $(this).attr("data-itemid");
    alert(id);

    if ($('#item'+itemId+'.item').hasClass('text-decoration-line-through')){
        $('#item'+itemId+' .item').removeClass('text-decoration-line-through').removeClass('text-muted');
        $(this).removeClass('btn-secondary').addClass('btn-success');
    }else{
        $('#item'+itemId+' .item').addClass('text-decoration-line-through').addClass('text-muted');
        $(this).removeClass('btn-success').addClass('btn-secondary');
    }
    
});

//Remove item
$(document).on('click', '.actions .remove-btn',()=>{
    let id = $(this).attr("data-itemid");
    alert($(this).attr("data-itemid"));
});

//Functions
function calcTotal(newSubTotal) {
    let total = $('#totalAmount').val();

    total += newSubTotal;

    $('#totalAmount').val(total);    
}

function checkInputs() {
    if (condition) {
        //
    }
}