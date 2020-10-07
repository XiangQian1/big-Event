$(function () {
    getUserInfo();

    function getUserInfo() {
        $.ajax({
            type: "get",
            url: "/my/userinfo",
            success: function (res) {
                if (res.status !== 0) return layui.layer.msg('获取用户信息失败！');
                renderAvatar(res.data);
            },
            
        });
    }

    $('#tuichu').on('click', function () {
        layer.confirm('is not?', {icon: 3, title:'提示'}, function(index){
            
            localStorage.removeItem('token');
            location.href = '/login.html';
            layer.close(index);
          });

    });
});

function renderAvatar(user) {
    // console.log(user);
    var name = user.nickname || user.username;
    $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
    // $('.layui-nav-img').
    if (user.user_pic !== null) {
        $('.layui-nav-img').attr('src', user.user_pic).show();
        $('.text-avatar').hide();
    } else {
        $('.layui-nav-img').hide();
        var first = name[0].toUpperCase();
        $('.text-avatar').html(first).show();
    }
}