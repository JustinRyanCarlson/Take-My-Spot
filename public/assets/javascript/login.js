// Triggers a click of the login button when enter is pressed on the keyboard.
$(document).keypress(function(e) {
    if (e.which == 13) {
        $('#login').trigger('click');
    }
});




$('#new-user').on('click', function() {
    if ($('#email').val() === '' && $('#password').val() === '' && $('#name').val() === '' && $('#phone').val() === '') {
        //modal or something
    } else {
        var newUser = {
            email: $('#email').val().trim(),
            password: $('#password').val().trim(),
            name: $('#name').val().trim(),
            phone: $('#phone').val().trim(),
        };

        $.post('/newuser', newUser, function(status) {
            window.location.href = '/';
        });
    }
});

$('#login').on('click', function() {
    if ($('#login-email').val() === '' && $('#login-password').val() === '') {
        //modal or something
    } else {
        var loginCredentials = {
            email: $('#email').val().trim(),
            password: $('#password').val().trim(),
        };

        $.post('/login', loginCredentials, function(status) {});
    }
});
