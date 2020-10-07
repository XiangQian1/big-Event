$(function(){
    getUserInfo();
    function getUserInfo() {
        $.ajax({
            type: "get",
            url: "/my/userinfo",
            Authorization:log,
            success: function (response) {
                
            }
        });
    }
});