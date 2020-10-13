$(function () {
    var layer = layui.layer;
    getArt();

    $('#btnAdd').on('click', function () {
        layer.open({
            type:1
            title: '在线调试',
            content: '可以填写任意的layer代码'
        });
    });



    function getArt() {
        $.ajax({
            type: "get",
            url: "/my/article/cates",
            success: function (response) {
                if (response.status !== 0) return layer.msg('gengxinshibai');
                layer.msg(response.message);
                console.log(response.data);
                var htmlStr = template('tpl_art', response);
                $('#tbody').html(htmlStr);
                // console.log($('tbody').htmlStr,htmlStr);
            }
        });
    }


});