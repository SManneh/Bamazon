//Get the products
$.ajax({
    url:"/api/product",
    method: "GET"
}).then(function(response){
    console.log(response)
    for(let i = 0; i < response.length; i++){
        let item = response[i];
        $("#card-div").append(`<div>${response.product_name}`);
    }
})
