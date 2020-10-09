$(function () {
    var form = layui.form;
    form.verify({
        nickname: function (val) {
            if (val > 6) return '长度必须在1-6位之间';
        }
    })
    initUserInfo();
    // 重置表单数据
    $('#btnReset').on('click', function (e) {
        e.preventDefault();
        initUserInfo();
    });

    $('.layui-form').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "/my/userinfo",
            data: $(this).serialize,
            success: function (response) {
            if (response) {
                
            }
            }
        });
    });


    function initUserInfo() {
        $.ajax({
            type: "get",
            url: "/my/userinfo",
            success: function (res) {
                if (res.status !== 0) {
                    return '获取信息失败'
                }
                // console.log(res);
                form.val("formUserInfo", res.data)
            }
        });
    }
});