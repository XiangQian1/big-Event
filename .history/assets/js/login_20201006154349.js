$(function () {
    $('#link_reg').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    });
    $('#link_login').on('click', function () {
        
        $('.reg-box').hide()
        $('.login-box').sho()
    });
    $('#link_login').on('click', function () {
        $('.login-box').show()
        $('.reg-box').hide()
    });
})