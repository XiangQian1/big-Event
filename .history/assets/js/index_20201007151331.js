$(function(){
    getUserInfo();
    function getUserInfo() {
        $.ajax({
            type: "get",
            url: "/my/userinfo",
            Authorization:Bearer
            success: function (response) {
                
            }
        });
    }
});