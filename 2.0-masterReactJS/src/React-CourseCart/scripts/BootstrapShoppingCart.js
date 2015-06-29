//	
//	Aenea - www.beaenea.com
//	Bootstrap BootstrapShoppingCart for codecanyon.net
//
$(function () {
    
    // click addbutton for product sheet
    $(".addproduct-sheet").click(function( e ) {
        id=$(this).closest(".addproduct-sheet").attr("data-id");         // current id product
        type = $(this).closest(".addproduct-sheet").attr("data-type");   // extra type ?
        size = $(this).closest(".addproduct-sheet").attr("data-size");   // extra size ?
        quantity = $(this).closest(".addproduct-sheet").attr("data-quantity");   // quantity?
        $("#BSCart").load("BootstrapShoppingCart/addproduct_vertical.php?id="+id+"&type="+type+"&size="+size+"&quantity="+quantity);   
        console.log ("added id:"+id+" Qty:"+quantity); // console debug
        console.log ("BootstrapShoppingCart/addproduct_vertical.php?id="+id+"&type="+type+"&size="+size+"&quantity="+quantity); 
        e.preventDefault();
    });
   
    // click addbutton for vertical shoppingcart
    $(".addproduct").click(function( e ) {
       
        id=$(this).closest(".product").attr("data-id");         // current id product
        type = $(this).closest(".product").attr("data-type");   // extra type ?
        size = $(this).closest(".product").attr("data-size");   // extra size ?
        quantity = $(this).closest(".product").attr("data-quantity");   // quantity?
        
        $("#BSCart").load("BootstrapShoppingCart/addproduct_vertical.php?id="+id+"&type="+type+"&size="+size+"&quantity="+quantity); 
        console.log ("added id:"+id+" Qty:"+quantity); // console debug
        e.preventDefault();
    });
    
    // click addbutton for horizontal shoppingcart 
    $(".addproduct-horizontal").click(function( e ) {
        
        id=$(this).closest(".product").attr("data-id");         // current id product
        type = $(this).closest(".product").attr("data-type");   // extra type ?
        size = $(this).closest(".product").attr("data-size");   // extra size ?
        quantity = $(this).closest(".product").attr("data-quantity");   // quantity?
        console.log ("added id:"+id+" Qty:"+quantity); // console debug
        $("#BSCart-Horizontal").load("BootstrapShoppingCart/addproduct_horizontal.php?id="+id+"&type="+type+"&size="+size+"&quantity="+quantity);      
        e.preventDefault();
    });
   
    // change combobox_type in grid
    $( ".combobox_type" ).change(function( e ) { 
        $(this).parent(".caption").parent(".thumbnail").parent(".product").attr("data-type", $(this).val() );
        e.preventDefault();
    });
    
    // change combobox_type in product sheet
    $( ".combobox_type-sheet" ).change(function( e ) { 
        $(".addproduct-sheet").attr("data-type", $(this).val() );
        
        e.preventDefault();
    });

    // Draggable div
    $(".product").draggable({
        // revert item back to the place when dragging is over
        revert:true,
        // once the dragging starts, we decrease the opactiy of other items
        // Appending a class as we do that with CSS
        drag:function () {
            $(this).addClass("active");
            $(this).closest(".product").addClass("active");
            $(this).closest(".product").css( "z-index", 100 ); // put on top
        },
        // removing the CSS classes once dragging is over.
        stop:function () {
            $(this).removeClass("active").closest(".product").removeClass("active");
            $(this).closest(".product").css( "z-index", 0 ); // return to z-index 
        }
    });

    // Drop for vertical shoppingcart
    $("#BSCart").droppable({
                   
        // The class that will be appended to the to-be-dropped-element (aeCart)
        activeClass:"active",
		
        // The class that will be appended once we are hovering the to-be-dropped-element (aeCart)
        hoverClass:"hover",
		
        // The acceptance of the item once it touches the to-be-dropped-element aeCart
        // For different values http://api.jqueryui.com/droppable/#option-tolerance
        tolerance:"touch",
        drop:function (event, ui) {
                            
            var BSCart = $(this),
            move = ui.draggable,
            itemId = BSCart.find(" [data-id='" + move.attr("data-id") + "']");
           
            id = move.attr("data-id");
            type = move.attr("data-type");   // extra type ?
            size = move.attr("data-size");   // extra size ?  
            quantity = move.attr("data-quantity");   // extra size ?  
            
            $("#BSCart").load("BootstrapShoppingCart/addproduct_vertical.php?action=addnew&id="+id+"&type="+type+"&size="+size+"&quantity="+quantity); 
            console.log ("added id:"+id+" Qty:"+quantity); // console debug
            
        }
    });
    // Drop for horizontal shoppingcart
    $("#BSCart-Horizontal").droppable({
                    
        // The class that will be appended to the to-be-dropped-element (aeCart)
        activeClass:"active",
		
        // The class that will be appended once we are hovering the to-be-dropped-element (aeCart)
        hoverClass:"hover",
		
        // The acceptance of the item once it touches the to-be-dropped-element aeCart
        // For different values http://api.jqueryui.com/droppable/#option-tolerance
        tolerance:"touch",
        drop:function (event, ui) {
                            
            var BSCart = $(this),
            move = ui.draggable,
            itemId = BSCart.find(" [data-id='" + move.attr("data-id") + "']");
           
            id = move.attr("data-id");
            type = move.attr("data-type");   // extra type ?
            size = move.attr("data-size");   // extra size ?
            quantity = move.attr("data-quantity");   // extra size ?  
            $("#BSCart-Horizontal").load("BootstrapShoppingCart/addproduct_horizontal.php?action=addnew&id="+id+"&type="+type+"&size="+size+"&quantity="+quantity); 
            console.log ("added id:"+id+" Qty:"+quantity); // console debug
        }
    });
    
    // pressed the checkout button for discount coupons v1.1
    // click addbutton for product sheet
    $(".checkout_button").click(function( e ) {
        // are a coupon ?   
        n= $('#coupon_input').val().length;
        if ( n > 1){
            window.location.href = "shoppingcart_checkout.php?coupon="+$('#coupon_input').val();
        } else {
            window.location.href = "shoppingcart_checkout.php";
        }
    });   
    
   
});

// for shoppingcart_view update input ... are a number ?
function checkNumber(textBox)
{
    while (textBox.value.length > 0 && isNaN(textBox.value)) {
        textBox.value = textBox.value.substring(0, textBox.value.length - 1)
    }
    textBox.value = trim(textBox.value);
}
    


// for Google Analytics - publicsite
(function(i,s,o,g,r,a,m){
    i['GoogleAnalyticsObject']=r;
    i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)
        },i[r].l=1*new Date();
    a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];
    a.async=1;
    a.src=g;
    m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-34738525-2', 'beaenea.com');
ga('send', 'pageview');
// for Google Analytics - publicsite