$(function () {
    var q = {
        pagenum: 1,
        pagesize: 2,
        cate_id: '',
        state: '',
    };
    
    initArt();
    function initArt(1) {
        $.ajax({
            type: "get",
            url: "/my/article/list",
            data: "data",
            dataType: "dataType",
            success: function (response) {
                
            }
        });
    }
});