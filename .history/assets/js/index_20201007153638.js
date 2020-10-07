$(function(){
    getUserInfo();
    function getUserInfo() {
        $.ajax({
            type: "get",
            url: "/my/userinfo",
            port:'5500',
            Authorization:localStorage.getItem('token')|'',
            success: function (res) {
                console.log(res);
            }
        });
    }
});