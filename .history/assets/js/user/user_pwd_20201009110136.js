$(function(){

    $('.layui-form').submit(function (e) { 
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "/my/updatepwd",
            data: $(this).serialize(),
            success: function (res) {
                if (response.status !== 0) {
                    return layer.msg('更新失败')
                }
                layer.msg('更新成功')
            }
        });
    });

});