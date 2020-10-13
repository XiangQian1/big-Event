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
        var time = new Data(data);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();

        var hh = time.getHours();
        var mm = time.getMinutes();
        var ss = time.getSeconds();

        return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss;

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