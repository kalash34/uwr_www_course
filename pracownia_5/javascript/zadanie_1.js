function slideRight(){
	$(".container3").animate({
        	zIndex: '2',
            height: '280px',
            width: '280px',
            left: '50%'
        });
        $(".container1").animate({
        	zIndex: '1',
            height: '200px',
            width: '200px',
            left: '75%'
        });
        $(".container2").animate({
            left: '25%'
        });
        $(".container1").attr("class", "container0");
     	$(".container3").attr("class", "container1");
     	$(".container2").attr("class", "container3");
     	$(".container0").attr("class", "container2");
}

function slideLeft(){
	$(".container2").animate({
        	zIndex: '2',
            height: '280px',
            width: '280px',
            left: '50%'
        });
        $(".container1").animate({
        	zIndex: '1',
            height: '200px',
            width: '200px',
            left: '25%'
        });
        $(".container3").animate({
            left: '75%'
        });
        $(".container1").attr("class", "container0");
        $(".container2").attr("class", "container1");
     	$(".container3").attr("class", "container2");
     	$(".container0").attr("class", "container3");
}

function startInterval(){
	interval = setInterval(function(){
		slideRight();
	}, 3000)
}
var interval;

$(document).ready(function(){
    $("#right").click(function(){
    	slideRight();
    });
    $("#left").click(function(){
    	slideLeft();
    });
	$("#frame").mouseover(function(){
		clearInterval(interval)
	});
	$("#frame").mouseout(function(){
		startInterval();
	});
	startInterval();
});