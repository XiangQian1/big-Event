$(function(){
    var form = layui.form;
    form.verify({
        nickname:function(val){
            if(val<6) return '长度不能少于6位';
        }
    })

});