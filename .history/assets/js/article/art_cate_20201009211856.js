$(function () {
    var layer = layui.layer;
    getArt();

    function getArt() {
        $.ajax({
            type: "get",
            url: "/my/article/cates",
            success: function (response) {
                if (response.status !== 0) return layer.msg('gengxinshibai');
                layer.msg(response.message);
                console.log(response.data);
                var htmlStr = template('tpl_art', response.data);
                
            }
        });
    }

});