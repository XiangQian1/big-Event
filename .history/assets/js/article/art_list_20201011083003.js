$(function () {
    var q = {
        pagenum: 1,
        pagesize: 2,
        cate_id: '',
        state: '',
    };
    
    initArt();
    function initArt(q) {
        $.ajax({
            type: "get",
            url: "/my/article/list",
            data: q,
            dataType: "dataType",
            success: function (response) {
                
            }
        });
    }
});