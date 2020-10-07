$(function(){
    getUserInfo();
    function getUserInfo() {
        $.ajax({
            type: "get",
            url: "/my/userinfo",
            Authorization:localStorage,
            success: function (response) {
                
            }
        });
    }
});