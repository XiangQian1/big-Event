$(function(){
    getUserInfo();
    function getUserInfo() {
        $.ajax({
            type: "get",
            url: "/my/userinfo",
            Authorization:,
            success: function (response) {
                
            }
        });
    }
});