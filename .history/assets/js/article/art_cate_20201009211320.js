$(function(){
    // getArt();

    function getArt() {
        $.ajax({
            type: "get",
            url: "/my/article/cates",
            data: "data",
            dataType: "dataType",
            success: function (response) {
                if (response.status !== 0) return layer.msg('gengxinshibai');
                  layer.msg(response.message);
                  console.log();
            }
        });
    }
});
