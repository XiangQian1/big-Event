$(function(){
    // getArt();

    function getArt() {
        $.ajax({
            type: "get",
            url: "/my/article/cates",
            data: "data",
            dataType: "dataType",
            success: function (response) {
                
            }
        });
    }
});
