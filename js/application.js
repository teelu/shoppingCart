$(document).ready(function(){

	$(document).on('click', '.removeItem', function () {
		var itemRow = $(this).parent().parent().parent().remove();
		itemRow.remove();
	});
	$(document).on('click', '#addItem', function () {
		var newProductName = $('#addItemName').val();
		var newProductPrice = $('#addItemCost').val();
		$('tbody').prepend("<tr class=\"listItem\"><td>" + newProductName + "</td><td class=\"text-right price\">$" + newProductPrice + "</td><td><input class=\"col-lg-10 updateCart\"><button class=\"btn btn-xs\"><span class=\"glyphicon glyphicon-shopping-cart\"></span></button></td><td class=\"text-right subtotal\">0</td><td><button class=\"btn btn-xs\"><span class=\"glyphicon glyphicon-remove-circle\" id=\"removeItem\"></span></button></td></tr>");
	});
	$(document).on('focusout', '.updateCart', function() {
		var costPath = $(this).parent().parent().children('.price').text();
		var subtotalPath = $(this).parent().parent().children('.subtotal');
		var quantity = Number($(this).val());
		var price = Number(costPath.replace(/[^0-9\.]+/g,""));
		//var costOfItem = parseInt($(this).)
		if(isNaN(quantity)) {
			window.alert("ENTER A NUMBER");
		} else {
			subtotalPath.html("$" + quantity*price);
		}

		//update subtotal
		var subtotal=0;
		$('.subtotal').each(function() {
			subtotal += Number($(this).text().replace(/[^0-9\.]+/g,""));
		}
		);
		console.log(subtotal);
		$("#subtotalDisplay").html("Subtotal: $" + subtotal);

	});

});