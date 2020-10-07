$(function(){
    getUserInfo();
    function getUserInfo() {
        $.ajax({
            type: "get",
            url: "/my/userinfo",
            headers:{
                Authorization:localStorage.getItem('token')||''
            },
            success: function (res) {
                if ()
            }
        });
    }
});