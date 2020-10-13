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
        var d = time.getDat();

        var hh = time.getHours();
        var mm = time.getMinutes();
        var ss = time.getSeconds();

        return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss;

    }
    
    template.defaults.imports.dataFormat = function(date) {
        const dt = new Date(date)
    
        var y = dt.getFullYear()
        var m = padZero(dt.getMonth() + 1)
        var d = padZero(dt.getDate())
    
        var hh = padZero(dt.getHours())
        var mm = padZero(dt.getMinutes())
        var ss = padZero(dt.getSeconds())
    
        return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
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