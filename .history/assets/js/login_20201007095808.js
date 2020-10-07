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
        pass: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],

        repwd: function (value) {
            // 通过形参拿到的是确认密码的值
            var pwd = $('.reg-box[name=password]').val();
            if (pwd !== value) return '两次密码不一致';
        }
    });
    $('#form_reg').on(submit, function (e) {
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "http://ajax.frontend.itheima.net/api/reguser",
            data: {
                username:$('#form_reg [name=username]').val(),
                
            },
            dataType: "dataType",
            success: function (response) {
                
            }
        });
    });
})