// Teacher Database JavaScript
$(document).ready(function() {
    // Search functionality
    $('#teacherSearchForm').on('submit', function(e) {
        e.preventDefault();

        var keyword = $('#searchKeyword').val().toLowerCase();
        var subject = $('#subjectFilter').val();
        var level = $('#levelFilter').val();
        var location = $('#locationFilter').val();

        $('.teacher-card').each(function() {
            var card = $(this);
            var showCard = true;

            // Keyword search
            if (keyword) {
                var cardText = card.text().toLowerCase();
                if (!cardText.includes(keyword)) {
                    showCard = false;
                }
            }

            // Subject filter
            if (subject && card.data('subject') !== subject) {
                showCard = false;
            }

            // Level filter
            if (level && card.data('level') !== level) {
                showCard = false;
            }

            // Location filter
            if (location && card.data('location') !== location) {
                showCard = false;
            }

            if (showCard) {
                card.fadeIn();
            } else {
                card.fadeOut();
            }
        });
    });

    // Reset filters
    $('#teacherSearchForm button[type="reset"]').on('click', function() {
        $('.teacher-card').fadeIn();
        $('#teacherSearchForm')[0].reset();
    });

    // Load more teachers
    $('#loadMoreTeachers').on('click', function() {
        // Simulate loading more teachers
        var newTeachers = generateMoreTeachers();
        $('#teacherGrid').append(newTeachers);
    });

    // Teacher profile modal
    $('[data-teacher]').on('click', function() {
        var teacherId = $(this).data('teacher');
        showTeacherProfile(teacherId);
    });

    // Generate additional teachers for "Load More" functionality
    function generateMoreTeachers() {
        var teachers = [
            {
                name: 'Dr. Siti Nurhaliza',
                title: 'AI Researcher & Professor',
                specialty: 'Artificial Intelligence, Deep Learning',
                rating: '4.9',
                reviews: '92',
                location: 'Jakarta',
                experience: '18+ years',
                image: 'img/h4.jpeg',
                skills: ['TensorFlow', 'PyTorch', 'Neural Networks', 'Computer Vision'],
                subject: 'artificial-intelligence',
                level: 'expert',
                status: 'online'
            },
            {
                name: 'Andi Wijaya',
                title: 'Blockchain Developer & Consultant',
                specialty: 'Blockchain, Smart Contracts, DeFi',
                rating: '4.7',
                reviews: '67',
                location: 'Bandung',
                experience: '7+ years',
                image: 'img/h1.jpeg',
                skills: ['Solidity', 'Ethereum', 'Web3.js', 'Cryptocurrency'],
                subject: 'blockchain',
                level: 'advanced',
                status: 'away'
            },
            {
                name: 'Maya Putri',
                title: 'DevOps Engineer & Cloud Architect',
                specialty: 'DevOps, Cloud Infrastructure, Automation',
                rating: '4.8',
                reviews: '84',
                location: 'Surabaya',
                experience: '9+ years',
                image: 'img/h3.jpeg',
                skills: ['Jenkins', 'Docker', 'AWS', 'Terraform'],
                subject: 'cloud-computing',
                level: 'expert',
                status: 'online'
            }
        ];

        var html = '';
        teachers.forEach(function(teacher) {
            html += `
                <div class="col-md-4 col-sm-6 teacher-card" data-subject="${teacher.subject}" data-level="${teacher.level}" data-location="${teacher.location}">
                    <div class="teacher-profile">
                        <div class="teacher-avatar">
                            <img src="${teacher.image}" alt="${teacher.name}" class="img-responsive">
                            <div class="teacher-status ${teacher.status}">
                                <i class="fa fa-circle"></i>
                            </div>
                        </div>
                        <div class="teacher-info">
                            <h3>${teacher.name}</h3>
                            <p class="teacher-title">${teacher.title}</p>
                            <p class="teacher-specialty">${teacher.specialty}</p>
                            <div class="teacher-rating">
                                <div class="stars">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <span class="rating-text">${teacher.rating} (${teacher.reviews} reviews)</span>
                            </div>
                            <p class="teacher-location">
                                <i class="fa fa-map-marker"></i> ${teacher.location}
                            </p>
                            <p class="teacher-experience">
                                <i class="fa fa-briefcase"></i> ${teacher.experience} experience
                            </p>
                            <div class="teacher-skills">
                                ${teacher.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                            </div>
                        </div>
                        <div class="teacher-actions">
                            <button class="btn btn-primary btn-sm" data-teacher="${teacher.name.toLowerCase().replace(/\s+/g, '-')}">
                                <i class="fa fa-eye"></i> View Profile
                            </button>
                            <button class="btn btn-success btn-sm" data-teacher="${teacher.name.toLowerCase().replace(/\s+/g, '-')}">
                                <i class="fa fa-phone"></i> Contact
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

        return html;
    }

    // Show teacher profile modal
    function showTeacherProfile(teacherId) {
        // This would typically fetch detailed teacher information
        // For demo purposes, we'll show a simple alert
        alert('Loading profile for: ' + teacherId + '\n\nThis would typically open a detailed profile modal with full teacher information, availability, contact details, and booking options.');
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

    // Add loading animation for search
    $('#teacherSearchForm').on('submit', function() {
        $('.teacher-card').css('opacity', '0.5');
        setTimeout(function() {
            $('.teacher-card').css('opacity', '1');
        }, 500);
    });
});
