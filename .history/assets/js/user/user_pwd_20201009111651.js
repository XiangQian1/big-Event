$(function () {

    





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
                localStorage.removeItem('token');
                location.href = '/login.html';
                layer.close(index);
            }
        });
    });

});