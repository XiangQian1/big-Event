$(function(){

    $('.layui-form').submit(function (e) { 
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "/my/updatepwd",
            data: $(this),
            dataType: "dataType",
            success: function (response) {
                
            }
        });
    });

});