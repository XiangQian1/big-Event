$(function () {
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

});

// var xhr = XMLHttpRequest;