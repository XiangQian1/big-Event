$(function () {
    var layer = layui.layer;
    var form = layui.form;
    getArt();
    var layerIndex = null;
    $('#btnAdd').on('click', function () {
        layerIndex = layer.open({
            type: 1,
            area: ['500px', '250px'],
            title: '在线调试',
            content: $('#dialog-add').html()
        });
    });
    $('body').on('submit', '#form-add', function (e) {
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "/my/article/addcates",
            data: $(this).serialize(),
            success: function (response) {
                if (response.status !== 0) return layer.msg('新增失败');

                getArt();
                layer.msg(response.message);
                layer.close(layerIndex);
            }
        });
    });

    // 文章类别删除
    $('#tbody').on('click', '#btn-del', function () {
        var id = $(this).attr('data-del');

        layer.confirm('确认删除m？', {
            icon: 3,
            title: '提示'
        }, function (index) {
            $.ajax({
                type: "get",
                url: "/my/article/deletecate/" + id,
                success: function (response) {
                    if (response.status !== 0) return layer.msg(response.message);
                    layer.msg(response.message);
                }
            });
            layer.close(index);
            getArt();
        });
    });
    var indexEdit = null;
    // 文章类别编辑
    $('#tbody').on('click', '#btn-edit', function () {
        var indexEdit = layer.open({
            type: 1,
            title: '编辑',
            area: ['500px', '250px'],
            content: $('#dialog-edit').html()
        });
        var id = $(this).attr('data-edid');
        $.ajax({
            type: "get",
            url: "/my/article/cates/" + id,
            success: function (response) {
                if (response.status !== 0) return layer.msg(response.message);
                form.val('form-edit', response.data)
            }
        });
    });
    $('body').on('submit', '#form-edit', function (e) {
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "/my/article/updatecate",
            data: $(this).serialize(),
            success: function (response) {
                if (response.status !== 0) return layer.msg(response.message);
                layer.msg(response.message);
                l
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
                var htmlStr = template('tpl_art', response);
                $('#tbody').html(htmlStr);
                // console.log($('tbody').htmlStr,htmlStr);
            }
        });
    }


});