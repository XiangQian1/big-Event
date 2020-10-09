$(function(){

    $('.layui-form').submit(function (e) { 
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "/my/updatepwd",
            data: $(this).serialize(),
            success: function (res) {
                
            }
        });
    });

});