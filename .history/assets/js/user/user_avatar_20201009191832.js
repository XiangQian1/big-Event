  // 1.1 获取裁剪区域的 DOM 元素
  var $image = $('#image')
  // 1.2 配置选项
  const options = {
      // 纵横比
      aspectRatio: 1,
      // 指定预览区域
      preview: '.img-preview'
  }

  // 1.3 创建裁剪区域
  $image.cropper(options)
  $('#btnSubmit').on('click', function (e) {
      $('#userFile').click();
  });
  $('#userForm').on('change', function (e) {
      var filelist = e.target.files;
      if (filelist.length === 0) return layer.msg('请选择文件');
      var file = e.target.files[0];
      var imgURL = URL.createObjectURL(file)
      var newFileURL = URLcreateObjectURL(file);
      $image
          .cropper('destroy') // 销毁旧的裁剪区域
          .attr('src', newFileURL) // 重新设置图片路径
          .cropper(options) // 重新初始化裁剪区域

  });