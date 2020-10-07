$(function(){
    getUserInfo();
    function getUserInfo() {
        $.ajax({
            type: "get",
            url: "/my/userinfo",
            port:
            Authorization:localStorage.getItem('token')|'',
            success: function (res) {
                console.log(res);
            }
        });
    }
});