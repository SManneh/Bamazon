//Get the products
{/* <div class="card">
                <img src="images/luKarrueche_luxlip_Bundle_800x1200.jpg" alt="Bundle Lipstick">
                <h2>Bundle Lipstick</h2>
                <p class="price">$35.99</p>
                <form>
                 <input type="number" name="quantity" min="1" max="10">
                 
                <p><button type= "submit" id="submit" >Add to Cart</button></p>
            </form>
              </div> */}



$.ajax({
    url:"/api/product",
    method: "GET"
}).then(function(response){
    console.log(response)
    for(let i = 0; i < response.length; i++){
        let item = response[i];
        let cardDiv = $('<div>').addClass('card');
        let image = $('<img>').attr('src', "images/luKarrueche_luxlip_Bundle_800x1200.jpg");
        let h2 = $('<h2>').text(item.product_name);
        let input = $('<input>').attr('id', "item" + item.id).attr('type', "number").attr("name", "quantity")
        let submit = $('<button>').text('submit').attr('input-id', item.id).addClass('submit');
        cardDiv.append(image, h2, input, submit);
        $("#card-div").append(cardDiv);
    }
})

$(document).on('click', '.submit', function(){
   var inputId = $(this).attr('input-id');
   var inputValue = $('#item' + inputId).val();
   var product = {
       id : inputId,
       quantity: inputValue
   }

   $.post('/api/product', product, function(response){
        console.log(response);
   })

});