$(function () {

    var form = layui.form;
    form.vaeify({
        pass: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        samepwd: function (val) {
            if (val === $('[name=oldPwd]')) {
                return '新旧密码不能一样'
            }
        },
        repwd: function () {
            if (val !== $('[name=newPwd]')) {
                return '两次密码不一样'
            }
        }
    })





    var layer = layui.layer;
    $('.layui-form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "/my/updatepwd",
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('更新失败')
                }
                layer.msg('更新成功')
                $('.layui-form')[0].res
                // localStorage.removeItem('token');
                // location.href = '/login.html';
                // layer.close(index);
            }
        });
    });

});