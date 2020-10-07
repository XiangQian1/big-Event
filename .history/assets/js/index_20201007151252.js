$(function(){
    getUserInfo();
    function getUserInfo() {
        $.ajax({
            type: "get",
            url: "url",
            data: "data",
            dataType: "dataType",
            success: function (response) {
                
            }
        });
    }
});