$(document).ready(function() {
    // Price calculation for unlocking services
    $('#unlockForm').submit(function(e) {
        e.preventDefault(); // Prevent the form from submitting normally
        const brand = $('#brand').val();
        const model = $('#model').val();
        const price = '180 USD'; // Set price to 180 USD for all brands

        $('#priceResult').html(`Unlocking price for ${model} (${brand}): ${price}`);
    });

    // Handling contact form submission
    $('#contactForm').submit(function(e) {
        e.preventDefault(); // Prevent the form from submitting normally
        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();

        // Here you can add an AJAX call to send the data to your server if needed

        $('#contactResponse').html(`Thank you, ${name}! Your message has been sent.`);
        // Reset form fields
        $('#contactForm')[0].reset();
    });
});
