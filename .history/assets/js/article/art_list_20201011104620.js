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
        var m = time.padZero(getMonth() + 1);
        var d = time.padZero(getDate());

        var hh = time.padZero(getHours());
        var mm = time.padZero(getMinutes());
        var ss = time.padZero(getSeconds();

        return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss;

    }



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