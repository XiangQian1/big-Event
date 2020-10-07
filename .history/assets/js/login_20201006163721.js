$(function () {
    $('#link_reg').on('click', function () {
        $('.reg-box').show()
        $('.login-box').hide()
    });
    $('#link_login').on('click', function () {

        $('.reg-box').hide()
        $('.login-box').show()
    });

    // 从layUI中国获取form对象
    var Form = layui.form;
    通过Formverify(
})