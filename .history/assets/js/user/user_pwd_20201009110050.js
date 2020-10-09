$(function(){

    $('.layui-form').submit(function (e) { 
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "/my/updatepwd",
            data: "dat",
            dataType: "dataType",
            success: function (response) {
                
            }
        });
    });

});