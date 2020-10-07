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
    var username = user.nickname || userusername;
}