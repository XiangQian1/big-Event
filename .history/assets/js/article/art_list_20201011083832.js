$(function () {
    var q = {
        pagenum: 1,
        pagesize: 2,
        cate_id: '',
        state: '',
    };

    initArt(q);

    function initArt(q) {
        $.ajax({
            type: "get",
            url: "/my/article/list",
            data: q,
            success: function (response) {
                if (response.status !== 0) return layer.msg(response.message);
                layer.msg(response.message);
                console.log(response);
                var artListTab = tempalte('artListTab', response)
            }
        });
    }
});