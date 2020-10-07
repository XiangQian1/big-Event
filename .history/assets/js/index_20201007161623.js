$(function () {
    getUserInfo();

    function getUserInfo() {
        $.ajax({
            type: "get",
            url: "/my/userinfo",
            headers: {
                Authorization: localStorage.getItem('token') || ''
            },
            success: function (res) {
                if (res.status !== 0) return layui.layer.msg('获取用户信息失败！');
                renderAvatar(res.data);
            }
        });
    }
});

function renderAvatar(user) {
    console.log(user);
    var name = user.nickname || user.username;
    $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
    // $('.layui-nav-img').
    if (user.user_pic!==null) {
        $('.layui-nav-img').attr('src',user.user_pic).show();
        $('.text-avatar').hide();
    } else {
        $('.layui-nav-img').hide();
        var firs
        $('.text-avatar').html(name[0].)
    }
}