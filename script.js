$(document).ready(function () {

 // Smooth scroll for all anchor links
 $('a[href^="#"]').on('click', function (e) {
 var target = $(this.getAttribute('href'));
 if (target.length) {
 e.preventDefault();
 $('html, body').animate({ scrollTop: target.offset().top - 70 }, 600);
 }
 });

 // Nav shadow on scroll
 $(window).on('scroll', function () {
 if ($(this).scrollTop()> 10) {
 $('nav').addClass('scrolled');
 } else {
 $('nav').removeClass('scrolled');
 }
 });

 // Hamburger menu toggle with animated bars
 $('.hamburger').on('click', function () {
 var $links = $('.nav-links');
 $links.toggleClass('open');
 $(this).toggleClass('active');
 var spans = $(this).find('span');
 if ($(this).hasClass('active')) {
 spans.eq(0).css({ transform: 'translateY(8px) rotate(45deg)' });
 spans.eq(1).css({ opacity: 0 });
 spans.eq(2).css({ transform: 'translateY(-8px) rotate(-45deg)' });
 } else {
 spans.css({ transform: '', opacity: '' });
 }
 });

 // Close nav when a link is clicked on mobile
 $('.nav-links a').on('click', function () {
 $('.nav-links').removeClass('open');
 $('.hamburger').removeClass('active').find('span').css({ transform: '', opacity: '' });
 });

 // FORM VALIDATION 
 function validate() {
 var ok = true;

 var name = $('#fname').val().trim();
 if (name.length < 2) {
 $('#fname').addClass('error').removeClass('success');
 $('#fnameErr').addClass('show');
 ok = false;
 } else {
 $('#fname').removeClass('error').addClass('success');
 $('#fnameErr').removeClass('show');
 }

 var email = $('#femail').val().trim();
 var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
 if (!emailOk) {
 $('#femail').addClass('error').removeClass('success');
 $('#femailErr').addClass('show');
 ok = false;
 } else {
 $('#femail').removeClass('error').addClass('success');
 $('#femailErr').removeClass('show');
 }

 var phone = $('#fphone').val().trim();
 var phoneOk = /^[\d\s\+\-\(\)]{7,}$/.test(phone);
 if (!phoneOk) {
 $('#fphone').addClass('error').removeClass('success');
 $('#fphoneErr').addClass('show');
 ok = false;
 } else {
 $('#fphone').removeClass('error').addClass('success');
 $('#fphoneErr').removeClass('show');
 }

 return ok;
 }

 // Live validation on input
 $('#fname, #femail, #fphone').on('input', function () { validate(); });

 // Submit button
 $('#sendBtn').on('click', function () {
 if (validate()) {
 $('#contactForm input, #contactForm textarea, #sendBtn').prop('disabled', true).css('opacity', '.5');
 setTimeout(function () {
 $('#formSuccess').addClass('show');
 $('#sendBtn').hide();
 }, 600);
 }
 });

 // Animate stat numbers counting up
 function animateCounters() {
 $('.stat-card .num').each(function () {
 var $el = $(this);
 var target = parseInt($el.text().replace(/\D/g, ''));
 var suffix = $el.text().replace(/[0-9]/g, '');
 $({ count: 0 }).animate({ count: target }, {
 duration: 1800,
 easing: 'swing',
 step: function () {
 $el.text(Math.ceil(this.count) + suffix);
 },
 complete: function () {
 $el.text(target + suffix);
 }
 });
 });
 }

 // Trigger counter animation when stats section enters view
 var countersDone = false;
 $(window).on('scroll', function () {
 if (!countersDone) {
 var statsTop = $('.stats').offset().top;
 if ($(window).scrollTop() + $(window).height()> statsTop + 80) {
 animateCounters();
 countersDone = true;
 }
 }
 });

 // Fade-in activity cards on scroll
 $(window).on('scroll', function () {
 $('.act-card').each(function () {
 var top = $(this).offset().top;
 if ($(window).scrollTop() + $(window).height()> top + 40) {
 $(this).addClass('visible');
 }
 });
 });

});
