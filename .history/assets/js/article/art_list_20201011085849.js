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
        const time = new Data(data);

        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var date = time.getDate();
        var day = time.getDay();
        var hour = time.getHours();
        hour = hour < 10 ? '0' + hour : hour;
        var minute = time.getMinutes();
        minute = minute < 10 ? '0' + minute : minute;
        var s = time.getSeconds();
        s = s < 10 ? '0' + s : s;
        var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        day = week[day];
        return year + '年' + month + '月' + date + '日' + day + hour + '时' + minute + '分' + s + '秒';

    }

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