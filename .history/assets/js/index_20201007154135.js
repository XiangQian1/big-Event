$(function(){
    getUserInfo();
    function getUserInfo() {
        $.ajax({
            type: "get",
            url: "/my/userinfo",
            header:{

            }
            success: function (res) {
                console.log(res);
            }
        });
    }
});