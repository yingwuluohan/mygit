//@charset "utf-8";
/**
 * jquery版本要求：1.3 ~ 1.8，HTML声明请遵循W3C标准
 * 用来处理placeholder的插件
 * 兼容IE6浏览器
 * @author wangzhiangtony@qq.com
 * @version 1.0
 * @date 2013-4-15 11:16:59
 */
$(function($) {
    //判断浏览器是否支持 placeholder属性
    function isPlaceholder() {
        var input = document.createElement('input');
        return 'placeholder' in input;
    }

    function changeToOriginalColor(self) {
        var index = $(self).index();
        var color = originalColor[$(self).index()];
        $(self).css('color', color);
    }
	
	//显示隐藏password
	function passType(type,self){
		if(type == 1){
			if(!$(self).hasClass('passwordTxt')){
				return false;
			}
			$(self).hide().prev('input[type="password"]').show().val('').focus();
		}else if(type == 2){
			if(!$(self).hasClass('password')){
				return false;
			}
			$(self).hide().next('input[type="text"]').show();
		}
	}
	
    if(!isPlaceholder()) {
        var texts = $(':text,:password');
        var len = texts.length;
        var originalColor = [];
        for(var i = 0; i < len; i++) {
            var self = texts[i];
            var $self = $(self);
            var placeholder = $self.attr('placeholder');
			//password
			if($self.attr('type') === 'password' && !$self.val()){
                if($self.next('input[type="text"]').length){
				    $self.hide();
				    $self.next('input[type="text"]').show();
                }
			}else{
				if($self.val() == "" && placeholder != null) {
					$self.val(placeholder);
					originalColor[i] = $self.css('color');
					$self.css('color', '#666');
				}
			}
        }

        texts.focus(function() {
            if($(this).attr('placeholder') != null && $(this).val() == $(this).attr('placeholder')) {
                $(this).val('');
                changeToOriginalColor(this);
				passType(1,this);
            }
        }).blur(function() {
            if($(this).attr('placeholder') != null && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
                $(this).val($(this).attr('placeholder'));
                $(this).css('color', '#666');
				passType(2,this);
            }
        });
    }
});
