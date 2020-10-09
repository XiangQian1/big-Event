$(function(){

    $('.layui-form').submit(function (e) { 
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "/my/updatepwd",
            data: $(),
            dataType: "dataType",
            success: function (response) {
                
            }
        });
    });

});