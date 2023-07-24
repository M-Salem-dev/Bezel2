// .scrollTop();	==> ده بيجيب المسافه ب الطول 
// .scrollLeft();	==> ده بيجيب السافه ب العرض
// .offset().top	==> بطول topمن ال element ده بيعرفني مسافات 
// .scroll 			==> scroll ده بيشتغل لم بيعمل 
/*
$(window).scroll(function(){
	let wScroll = $(window).scrollTop();	//section وتاني section ده كده بيجيب المسافه بين اول scrollTop
	//let wScroll = $(window).scrollLeft();	//الثاني sectionالاول وال sectionده لو موقع بعرض بجيب المسافه م بين ال scrollLeft
	console.log(wScroll)
})

//----------------------------------

*/




let aboutOffsetTop = $("#Pages").offset().top;	//element ده بيجيب اي مكان  

$(window).scroll(function(){
	let wScroll = $(window).scrollTop();	//نزل لحد فين uesrده ال

	if(wScroll > aboutOffsetTop - 50)//aboutال50 ده انا كده بطرح 50 من الطول ال 
	{
		$("#main-nav").css("backgroundColor", "rgba(0, 0, 0,0.5)");//غير ل اسود شفافtransparentغير اللون بتاع من navbarانا كده بقول هدخل علي ال
		
		$("#btnUp").fadeIn(500);//انا كده بظهر السهم في نص ثانيه 
	}
	else
	{
		$("#main-nav").css("backgroundColor", "transparent");
		
		$("#btnUp").fadeOut(500);//انا كده بخفي السهم في نص ثانيه 
	}
})

$("#btnUp").click(function(){//ده علشان لم اضغط علي السهم يطلع ل فوق 
	
	$("html,body").animate({scrollTop:0} , 3000);//ده كده هيطلع ل فوق 0
})

//------------------

 $("a[href^='#']").click(function(){//ده اللي هو اللينك aال
	//#اول علامه ال href انا كده بقول لم اضغط علي لينك في  
	
	let aHref = $ (this).attr("href");	//srcهيجيب ال Attributeانا كده بقول هات الattrولم بضغط بيقولي ضغط فين والaبتعود علي لينك ال thisال
				//setter علشان بعد كده هستخدم aHref وبعد كده حطها في getter ده هستخدم هنا $ (this).attr("href");
	
	
	//$("#about").offset().top;//aboutانا كده بقول هات ابعاد ال
	let sectionOffset = $(aHref).offset().top;//كده هيجيب ابعاد اللينكات كلها
						//setter ده هستخدم هنا aHref 
	
	$("html,body").animate({scrollTop:sectionOffset} , 2000);
 });
 
 
 
 
 
 
 let skillOffset = $("#Pages").offset().top;


$(window).scroll(function(){
	
	let wScroll = $ (window).scrollTop();
		
		if(wScroll > skillOffset -100){
			startCounter();
		}
})


function startCounter(){
	
	// $("#progress85").css("width","100%")
		$(".progress85").animate( {width:'85%'} , 500);
		$(".progress75").animate( {width:'75%'} , 1000);
		$(".progress50").animate( {width:'50%'} , 1000);
		$(".progress90").animate( {width:'90%'} , 1000);
}


