$(function(){
    getUserInfo();
    function getUserInfo() {
        $.ajax({
            type: "get",
            url: "/my/userinfo",
            Authorization:localStorage.getItem('token')|'',
            success: function (res) {
                
            }
        });
    }
});