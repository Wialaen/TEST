$(function() {
        
        var data = $('#language').val();
        if(data=='C'){
                $('body').css('font-family', '"Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", Meiryo, "メイリオ", sans-serif');
        } else {
                $('body').css('font-family', '"メイリオ", Meiryo, "ＭＳ Ｐゴシック", sans-serif');
        }
        
	$('.jt_s').cluetip({
		local:true,
                topOffset:50,
                activation:'click'
	});
	$('.jt').cluetip({
		splitTitle:'|',
		showTitle:false,
		clickThrough:true,
		sticky:false,
		cluetipClass:'sjtip',
		width:'158',
		positionBy:'fixed',
		topOffset:80,
		leftOffset:-160
	});
	$('.jt2').cluetip({
		splitTitle:'|',
		showTitle:false,
		clickThrough:true,
		sticky:false,
		cluetipClass:'sjtip',
		width:'158',
		positionBy:'fixed',
		topOffset:48,
		leftOffset:-40
	});
	$('.jtl').cluetip({
		splitTitle:'|',
		showTitle:false,
		clickThrough:true,
		sticky:false,
		cluetipClass:'sjtip',
		width:'316',
		positionBy:'fixed',
		topOffset:80,
		leftOffset:-160
	});
	$('.jt2l').cluetip({
		splitTitle:'|',
		showTitle:false,
		clickThrough:true,
		sticky:false,
		cluetipClass:'sjtip',
		width:'316',
		positionBy:'fixed',
		topOffset:48,
		leftOffset:-40
	});

	$(".menu-btn").hover(function(){
			$(this).addClass("hover");
		},function(){
			$(this).removeClass("hover");
	});
	$(".menu-btn_s").hover(function(){
			$(this).addClass("hover_s");
		},function(){
			$(this).removeClass("hover_s");
	});

	$("a[title]").mousedown(function(){
		$(this).parent("div").addClass("active");
	});
	$("a[title]").mouseup(function(){
		$(this).parent("div").removeClass("active");
	});
	
	$(".buttons a").hover(
		function(){
			$(this).css('background-position','0 -41px');
		},
		function(){
			$(this).css('background-position','0 top');
		}
	);
	$(".buttons a").mouseup(function(){
		$(this).css('background-position','0 top');
	});
	$(".buttons a").mousedown(function(){
		$(this).css('background-position','0 bottom');
	});
	
	$('#language').change(function(){
		var data = $(this).val();
		$(".manual-link").css("display","none");
		$("#" + data + ".manual-link").css("display","block");
                if(data=='C'){
                        $('body').css('font-family', '"Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", Meiryo, "メイリオ", sans-serif');
                } else {
                        $('body').css('font-family', '"メイリオ", Meiryo, "ＭＳ Ｐゴシック", sans-serif');
                }
	}).change();

	$('.manual-link a').attr("target","_blank");
	$('.cluetip-list a').attr("target","_blank");
});
