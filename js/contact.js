// Contact Form Handler
$(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();

        // Get form data
        var formData = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            company: $('#company').val(),
            service: $('#service').val(),
            budget: $('#budget').val(),
            message: $('#message').val(),
            newsletter: $('#newsletter').is(':checked'),
            privacy: $('#privacy').is(':checked')
        };

        // Basic validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message || !formData.privacy) {
            alert('Please fill in all required fields.');
            return;
        }

        if (!isValidEmail(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Show loading state
        var submitBtn = $(this).find('button[type="submit"]');
        var originalText = submitBtn.text();
        submitBtn.prop('disabled', true).text('Sending...');

        // Simulate form submission (replace with actual API call)
        setTimeout(function() {
            // Show success message
            showSuccessMessage();

            // Reset form
            $('#contactForm')[0].reset();

            // Reset button
            submitBtn.prop('disabled', false).text(originalText);
        }, 2000);
    });

    // Email validation helper
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Success message
    function showSuccessMessage() {
        var successHTML = `
            <div class="alert alert-success alert-dismissible" role="alert" id="successAlert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4><i class="fa fa-check-circle"></i> Message Sent Successfully!</h4>
                <p>Thank you for contacting Alpha Edge. Our team will get back to you within 24 hours.</p>
            </div>
        `;

        $('.contact-form h3').after(successHTML);

        // Auto-hide after 10 seconds
        setTimeout(function() {
            $('#successAlert').fadeOut();
        }, 10000);
    }

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });

    // Form field animations
    $('.form-control').on('focus', function() {
        $(this).parent().addClass('focused');
    }).on('blur', function() {
        if (!$(this).val()) {
            $(this).parent().removeClass('focused');
        }
    });

    // Phone number formatting
    $('#phone').on('input', function() {
        var phone = $(this).val().replace(/\D/g, '');
        var formatted = '';

        if (phone.length > 0) {
            if (phone.length <= 3) {
                formatted = phone;
            } else if (phone.length <= 7) {
                formatted = phone.substring(0, 3) + '-' + phone.substring(3);
            } else {
                formatted = phone.substring(0, 3) + '-' + phone.substring(3, 7) + '-' + phone.substring(7, 11);
            }
        }

        $(this).val(formatted);
    });

    // Character counter for message field
    $('#message').on('input', function() {
        var maxLength = 1000;
        var currentLength = $(this).val().length;
        var remaining = maxLength - currentLength;

        if (remaining < 50) {
            $('.char-counter').remove();
            $(this).after('<div class="char-counter text-danger">Characters remaining: ' + remaining + '</div>');
        } else {
            $('.char-counter').remove();
        }

        if (remaining < 0) {
            $(this).val($(this).val().substring(0, maxLength));
            $('.char-counter').text('Character limit reached');
        }
    });
});
