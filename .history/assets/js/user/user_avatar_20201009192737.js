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
      var newFileURL = URL.createObjectURL(file);
      $image
          .cropper('destroy') // 销毁旧的裁剪区域
          .attr('src', newFileURL) // 重新设置图片路径
          .cropper(options) // 重新初始化裁剪区域
  });
  $('#confirm').on('click', function () {
      var dataURL = $image
          .cropper('getCroppedCanvas', { // 创建一个 Canvas 画布
              width: 100,
              height: 100
          })
          .toDataURL('image/png') // 将 Canvas 画布上的内容，转化为 base64 格式的字符串
      $.ajax({
          type: "post",
          url: "/my/update/avatar",
          avatar: dataURL,
          success: function (response) {
              if (response.status !== 0) return layer.msg(response.message);
              layer.msg(response.message);
              window.parent.renderAvatar();
          }
      });
  });