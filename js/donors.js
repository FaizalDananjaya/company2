// Donors Program JavaScript
$(document).ready(function() {
    // Donation form handler
    $('#donationForm').on('submit', function(e) {
        e.preventDefault();

        // Get form data
        var formData = {
            donorName: $('#donorName').val(),
            donorEmail: $('#donorEmail').val(),
            donorPhone: $('#donorPhone').val(),
            donorCompany: $('#donorCompany').val(),
            donationTier: $('#donationTier').val(),
            customAmount: $('#customAmount').val(),
            donationMessage: $('#donationMessage').val(),
            newsletter: $('#donationNewsletter').is(':checked'),
            terms: $('#donationTerms').is(':checked')
        };

        // Validation
        if (!formData.donorName || !formData.donorEmail || !formData.donorPhone || !formData.terms) {
            alert('Please fill in all required fields.');
            return;
        }

        if (!isValidEmail(formData.donorEmail)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Show loading state
        var submitBtn = $(this).find('button[type="submit"]');
        var originalText = submitBtn.text();
        submitBtn.prop('disabled', true).text('Processing...');

        // Simulate form submission
        setTimeout(function() {
            showSuccessMessage();
            $('#donationForm')[0].reset();
            submitBtn.prop('disabled', false).text(originalText);
        }, 2000);
    });

    // Custom amount toggle
    $('#donationTier').on('change', function() {
        if ($(this).val() === 'custom') {
            $('#customAmountGroup').slideDown();
            $('#customAmount').prop('required', true);
        } else {
            $('#customAmountGroup').slideUp();
            $('#customAmount').prop('required', false);
        }
    });

    // Phone number formatting
    $('#donorPhone').on('input', function() {
        var phone = $(this).val().replace(/\D/g, '');
        var formatted = '';

        if (phone.length > 0) {
            if (phone.length <= 4) {
                formatted = phone;
            } else if (phone.length <= 8) {
                formatted = phone.substring(0, 4) + '-' + phone.substring(4);
            } else {
                formatted = phone.substring(0, 4) + '-' + phone.substring(4, 8) + '-' + phone.substring(8, 12);
            }
        }

        $(this).val(formatted);
    });

    // Tier selection buttons
    $('.tier-card button').on('click', function() {
        var tier = $(this).data('tier');
        $('#donationTier').val(tier);

        // Remove active class from all cards
        $('.tier-card').removeClass('active');

        // Add active class to selected card
        $(this).closest('.tier-card').addClass('active');

        // Scroll to form
        $('html, body').animate({
            scrollTop: $('#donationForm').offset().top - 100
        }, 1000);
    });

    // Success message
    function showSuccessMessage() {
        var successHTML = `
            <div class="alert alert-success alert-dismissible" role="alert" id="donationSuccess">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4><i class="fa fa-check-circle"></i> Registration Successful!</h4>
                <p>Thank you for your interest in the Alpha Edge Donors Program. Our team will contact you within 24 hours to discuss the next steps.</p>
            </div>
        `;

        $('.donation-form h3').after(successHTML);

        // Auto-hide after 15 seconds
        setTimeout(function() {
            $('#donationSuccess').fadeOut();
        }, 15000);
    }

    // Email validation
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Animate statistics on scroll
    $(window).on('scroll', function() {
        $('.stat-item').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animated');
            }
        });
    });

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

    // Add hover effects to tier cards
    $('.tier-card').on('mouseenter', function() {
        $(this).addClass('hovered');
    }).on('mouseleave', function() {
        $(this).removeClass('hovered');
    });
});
