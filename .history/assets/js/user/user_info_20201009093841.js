$(function(){
    var form = layui.form;
    form.verify({
        nickname:function(val){
            if(val>6) return '长度必须在1-6位之间';
        }
    })


});
function initUserInfo() {
    $.ajax({
        type: "get",
        url: "/my/userinfo",
        success: function (response) {
            if (condition) {
                
            }
        }
    });
}