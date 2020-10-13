$(function () {
    var layer = layui.layer;
    var form = layui.form;
    var q = {
        pagenum: 1,
        pagesize: 2,
        cate_id: '',
        state: '',
    };

    initArt(q);
    // template.defaults.imports

    template.defaults.imports.Filtertime = function (data) {
        var time = new Date(data);
        var y = time.getFullYear();
        var m = padZero(time.getMonth() + 1);
        var d = padZero(time.getDate());

        var hh = padZero(time.getHours());
        var mm = padZero(time.getMinutes());
        var ss = padZero(time.getSeconds());

        return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss;

    }
    $('tbody').on('click', '#alt_edit', function () {
        layer.open({
            // type:1,
            area: ['500px', '200px'],
            title: '在线调试',
            content: '可以填写任意的layer代码'
        });
    });
    $('tbody').on('click', '#alt_del', function () {
        var id = $(this).attr('data-edit');
        console.log(id);
        layer.confirm('确认删除?', {
            icon: 3,
            title: '提示'
        }, function (index) {
            //do something
            $.ajax({
                type: "get",
                url: "/my/article/delete/" + id,
                success: function (response) {
                    if (response.status !== 0) return layer.msg(response.message);
                    layer.msg(response.message);
                    initArt(q);
                }
            });
            layer.close(index);
        });
    });
    artSort(q);
    
    $('#form-artS').on('submit', function (e) {
        e.preventDefault();
        q.cate_id=$('[name=cate_id]').val();
        q.state=$('[name=state').val()
    });
    // 定义补零的函数
    function padZero(n) {
        return n > 9 ? n : '0' + n
    }

    function initArt(q) {
        $.ajax({
            type: "get",
            url: "/my/article/list",
            data: q,
            success: function (response) {
                if (response.status !== 0) return layer.msg(response.message);
                layer.msg(response.message);
                // console.log(response);
                var artListTabStr = template('artListTab', response);
                $('tbody').html(artListTabStr);
            }
        });
    }

    function artSort(q) {
        $.ajax({
            type: "get",
            url: "/my/article/cates",
            data: q,
            success: function (response) {
                if (response.status !== 0) return layer.msg(response.message);
                layer.msg(response.message);
                $('[name=cate_id]').html(template('artListSort', response));
                form.render();
            }
        });
    }

});

// var xhr = XMLHttpRequest;