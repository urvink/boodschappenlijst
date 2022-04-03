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
    alert("HEY u");
});