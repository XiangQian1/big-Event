$(function () {

    console.log(location.href);
    // console.log(getQueryVariable("id"));
    var urlid = getQueryVariable("id")

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return (false);
    }



    var layer = layui.layer
    var form = layui.form

    initCate()

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

    eidtFilling(urlid);

    function eidtFilling(id) {
        $.ajax({
            type: "get",
            url: "/my/article/" + id,
            success: function (response) {
                if (response.status !== 0) return layer.msg(response.message);
                layer.msg(response.message);
                // console.log(response);
                form.val('formart', response.data);
                $image
                    .cropper('destroy') // 销毁旧的裁剪区域
                    .attr('src', response.data.) // 重新设置图片路径
                    .cropper(options) // 重新初始化裁剪区域
                form.render()
            }
        });

    }
    initEditor()

    $('#art_Cover').on('click', function () {
        $('#file').click();
    });
    $('#file').change(function (e) {
        var files = this.files;
        // console.log(files);
        if (files.length !== 1) return;
        var newImgurl = URL.createObjectURL(files[0]);
        $image
            .cropper('destroy') // 销毁旧的裁剪区域
            .attr('src', newImgurl) // 重新设置图片路径
            .cropper(options) // 重新初始化裁剪区域

    });
    var status = '已发布';
    $('#art_publish').on('click', function () {
        status = '未发布';
    })
    $('#artForm').on('submit', function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        //console.log(fd.get('title')); //获取FormData的值
        fd.append('state', status)
        $image
            .cropper('getCroppedCanvas', {
                // 创建一个 Canvas 画布
                width: 400,
                height: 280
            })
            .toBlob(function (blob) {
                // 将 Canvas 画布上的内容，转化为文件对象
                // 得到文件对象后，进行后续的操作
                // 5. 将文件对象，存储到 fd 中
                fd.append('cover_img', blob)
                // 6. 发起 ajax 数据请求
                postarticle(fd);
            })
    });

    function postarticle(data) {
        $.ajax({
            type: "post",
            url: "/my/article/add",
            // 注意：如果向服务器提交的是 FormData 格式的数据，
            // 必须添加以下两个配置项
            contentType: false,
            processData: false,
            data: data,
            success: function (response) {
                if (response.status !== 0) return layer.msg(response.message);
                layer.msg(response.message);
                location.href = '/home/article/art_list.html'
            }
        });
    }
})