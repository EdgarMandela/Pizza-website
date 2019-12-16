$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();

    $("#checkout").click(function () {

        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        let order = (s, c, t, n, total) => {
            return {s, c, t, n, total};
        };

        let price,
            totalPrice;

        switch (size) {
            case size = "small":
                price = 350;
                if (crust === "thin") {
                    totalPrice = (price * number) + 100;
                } else if (crust === "thick") {
                    totalPrice = (price * number) + 150;
                } else if (crust === "deep") {
                    totalPrice = (price * number) + 200;
                }
                break;
            case size = "medium":
                price = 800;
                if (crust === "thin") {
                    totalPrice = (price * number) + 100;
                } else if (crust === "thick") {
                    totalPrice = (price * number) + 150;
                } else if (crust === "deep") {
                    totalPrice = (price * number) + 200;

                }
                break;
            case size = "large":
                price = 1200;
                if (crust === "thin") {
                    totalPrice = (price * number) + 100;
                } else if (crust === "thick") {
                    totalPrice = (price * number) + 150;
                } else if (crust === "deep") {
                    totalPrice = (price * number) + 200;

                }
                break;
        }

        switch (topping) {

            case topping = "Pepperoni":
                totalPrice = totalPrice + 110;
            case topping = "mushroom":
                totalPrice = totalPrice + 100;
                break;
            case topping = "onions":
                totalPrice = totalPrice + 50;
                break;
            case topping = "Sausage":
                totalPrice = totalPrice + 80;
                break;
            case topping = "Bacon":
                totalPrice = totalPrice + 120;
                break;
            case topping = "Extra cheese":
                totalPrice = totalPrice + 150;
                break;
            case topping = "Black olives":
                totalPrice = totalPrice + 150;
                break;
        }

        let newOrder = order(size, crust, topping, number, totalPrice);
        console.log(newOrder);

        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);

        $('#list').text(" ");
        $("#list")
            .append(
                "<br>Size :   " + newOrder.s + "<br>Crust :     " + newOrder.c + "<br>Toppings " +
                ":     " + newOrder.t + "<br> Number of pizzas :    " + newOrder.n + "<br>Total" +
                " Price :  " + newOrder.total + "<br><br>"
            )
            .css('font-family', 'system-ui')
            .css('font-size', '24px');
    });

    //Deliver
    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary')
            .text("Your order will be delivered to your location shortly ")
            .slideDown();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.cdata-overlay').slideDown();
    });

    $(".delivernot").click(function () {});

    $(function () {
        $
            .scrollify
            .move('#sum-order');
    });
});


let size;
size = document
    .getElementById('#size')
    .value;



let validateInput = () => {
    if (size === "") {
        console.log("Please specify the size");
    }
}
