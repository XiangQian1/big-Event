$(function () {
    var layer = layui.layer;
    getArt();

    $('#btnAdd').on('click', function () {
        layer.open({
            type: 1,
            area: ['500px', '250px'],
            title: '在线调试',
            content: $('#dialog-add').html()
        });
    });
    $('body').on('submit', '#art_sub', function (e) {
        e.preventDe
        $.ajax({
            type: "post",
            url: "/my/article/addcates",
            data: $(this).serialize(),
            success: function (response) {
                if (response.status !== 0) return layer.msg('新增失败');

                getArt();
                layer.msg(response.message);
            }
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