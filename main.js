var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
var token = "41eada7417f4e1720ab078f6df692995d0fb5df6";
var query = "";
$('input').keyup(function (e) {
    query = e.currentTarget.value

    var options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({
            query: query
        })
    }

    fetch(url, options)
        .then(response => response.text())
        .then(result => {
            $('.list-api').empty()
            $('.list-api').css('display', 'block')
            JSON.parse(result).suggestions.forEach(element => {
                $('.list-api').append(`<div class="list-api_item">${element.value}`)
            });
        })
        .catch(error => console.log("error", error));
})

$('html').on('click','.list-api_item',function(e){
    $('input').val(e.currentTarget.innerHTML)
    $('.list-api').empty()
    $('.list-api').css('display', 'none')
})