$(function(){
    getUserInfo();
    function getUserInfo() {
        $.ajax({
            type: "get",
            url: "/my/userinfo",
            data: "data",
            dataType: "dataType",
            success: function (response) {
                
            }
        });
    }
});