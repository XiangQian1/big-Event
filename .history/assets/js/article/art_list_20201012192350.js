$(function () {
    var layer = layui.layer;
    var form = layui.form;
    var laypage = layui.laypage;
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
        var id = $(this).attr('id');
        location.href = '/home/article/art_pub copy.html?'?id;

    });
    $('tbody').on('click', '#alt_del', function () {
        var len = $('tbody #alt_del').length;
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
                    if (len == 1) {
                        q.pagenum = q.pagenum == 1 ? 1 : q.pagenum - 1;
                    }
                    initArt(q);
                }
            });
            layer.close(index);
        });
    });
    artSort(q);

    $('#form-artS').on('submit', function (e) {
        e.preventDefault();
        q.cate_id = $('[name=cate_id]').val();
        q.state = $('[name=state').val();
        initArt(q);
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
                initpage(response.total);
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

    function initpage(total) {
        console.log(total);
        laypage.render({
            elem: 'page', //注意，这里的 test1 是 ID，不用加 # 号
            count: total, //数据总数，从服务端得到
            limit: q.pagesize,
            curr: q.pagenum,
            limits: ['2', '3', '5', '10'],
            layout: ['count', 'limit', 'prev', 'page', 'next', 'skip'],
            jump: function (obj, first) {
                q.pagenum = obj.curr;
                q.pagesize = obj.limit;
                if (!first) initArt(q);

            }
        });
    }
});

// var xhr = XMLHttpRequest;