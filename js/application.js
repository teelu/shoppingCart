$(document).ready(function(){
  function updateCart() {
    var total = 0;
    var quantityArray = $('.quantityAmount');
    var costArray = $('.cart-item-cost');
    var subTotalPath = $('.subtotal-cart')
    for (var i=0;i<costArray.length;i++) {
      
      var subtotal = Number(quantityArray[i].value) * Number($(costArray[i]).text().replace('$',""));
      total += subtotal;
      $(subTotalPath[i]).text("Subtotal: $" + subtotal.toFixed(2));

    }
    $('#totalDisplay').text("Total: $" + total);
  }
  updateCart();

  $(document).on('focusout', '.quantityAmount', function() {
    updateCart();
  })

  $('#addItem').click(function(e) {
    e.preventDefault();
    var productName = $('#productName').val();
    var productCost = Number($('#productCost').val());
    $('tbody').append('<tr class="listItem"> <td class="name">' + productName + '</td> <td class="text-right price">$'+ productCost.toFixed(2) + '</td> <td class="quantity"><input class="col-lg-10 quantityToAdd"></td> <td> <button class="btn btn-xs addItemToCart"><span class="glyphicon glyphicon-plus-sign"></span></button> <button class="btn btn-xs removeItem"><span class="glyphicon glyphicon-remove-circle"></span></button> </td> </tr>');
  })

  $(document).on('click', '.addItemToCart', function() {
    var productName = $(this).parentsUntil('listItem').children('.name').text();
    var productCost = Number($(this).parentsUntil('listItem').children('.price').text().replace("$",""));
    var quantityEntered = Number($(this).parentsUntil('listItem').find('.quantityToAdd').val());
    $('#cart').append('<li><div class="addedItem"> <h5 class="cart-item-name">'+ productName + '</h5> <div class="calculations col-xs-12"> <p> Cost:</p> <p class="cart-item-cost">$' + productCost + '</p> <span>x</span> <input class="quantityAmount" value="'+ quantityEntered + '"> </div><button class="btn btn-xs col-xs-1 remove-from-cart"><span class="glyphicon glyphicon-remove-circle"></span></button><p class="col-xs-11 text-right subtotal-cart">Subtotal: $0</p> </div></li>');
    updateCart();
  });

  $(document).on('click', '.removeItem', function() {
    $(this).parent().parent().remove();
  });

  $(document).on('click', '.remove-from-cart', function () {
    $(this).parent().parent().remove();
    updateCart();
  });
});