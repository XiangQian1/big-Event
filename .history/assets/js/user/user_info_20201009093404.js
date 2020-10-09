$(function(){
    var form = layui.form;
    form.verify({
        nickname:function(){
            if(nickname<6) return '';
        }
    })

});