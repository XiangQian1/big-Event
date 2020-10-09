$(function () {
    var form = layui.form;
    var layer = layui
    form.verify({
        nickname: function (val) {
            if (val > 6) return '长度必须在1-6位之间';
        }
    })
    initUserInfo()



    function initUserInfo() {
        $.ajax({
            type: "get",
            url: "/my/userinfo",
            success: function (res) {
                if (res.status !== 0) {
                    return '获取信息失败'
                }
                console.log(res);
                form.val("formUserInfo", res.data)
            }
        });
    }
});