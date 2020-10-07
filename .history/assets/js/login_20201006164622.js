$(function () {
    $('#link_reg').on('click', function () {
        $('.reg-box').show()
        $('.login-box').hide()
    });
    $('#link_login').on('click', function () {

        $('.reg-box').hide()
        $('.login-box').show()
    });

    // 从layUI中获取form对象
    var form = layui.form;
    // 通过Formverify()函数自定义规则
    form.verify({
        pwd: [/^[\S]{6,12}$/
        ,'密码必须6到12位，且不能出现空格'
        ],
        repwd:fun
    })
})