$(function () {
    var layer = layui.layer
    var form = layui.form

    initCate()
    initEditor()
    // 1. 初始化图片裁剪器
    var $image = $('#image')

    // 2. 裁剪选项
    var options = {
        aspectRatio: 400 / 280,
        preview: '.img-preview'
    }

    // 3. 初始化裁剪区域
    $image.cropper(options)
    // 定义加载文章分类的方法
    function initCate() {
        $.ajax({
            method: 'GET',
            url: '/my/article/cates',
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('初始化文章分类失败！')
                }
                // 调用模板引擎，渲染分类的下拉菜单
                var htmlStr = template('tpl-cate', res)
                $('[name=cate_id]').html(htmlStr)
                // 一定要记得调用 form.render() 方法
                form.render()
            }
        })
    }


    $('#art_Cover').on('click', function () {
        $('#file').click();
    });
    $('#file').change(function (e) {
        var files = this.files;
        // console.log(files);
        if (files.length) {
            
        }

    });
    var status = '已发布';
    $('#art_publish').on('click', function () {
        status = '未发布';
    })
    $('#artForm').on('submit', function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        // console.log(fd.get('title')); 获取FormData的值
        fd.append('state', 'status')

    });

})