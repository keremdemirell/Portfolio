$(function() {
    document.addEventListener("mousemove", function(event) {
        const glow = document.querySelector(".glow");
        glow.style.left = event.pageX - 33  + "px";
        glow.style.top = event.pageY - 33 + "px";
});

    $(".skill").hover(function() {
        var w = parseInt($(this).find(".skillbar").width());
        var txt = "";
        if( w >= 380 ) txt = "Upperintermediate";
        else if ( w > 300) txt = "Upperintermediate - Intermediate";
        else txt = "Intermediate";

        $(this).find("#level").html(txt);
        // $(this).find("#level").css("visibility", "visible");
        $(this).find("#level").css("opacity", "1");
        $(this).find("#level").css("left", (w + 35) + "px");
    }, function() {
        $(this).find("#level").css("transition","0.5s all ease")
        $(this).find("#level").css("opacity", "0");        
});

    $("#abt").on("click", function() {
        $('html, body').animate({scrollTop: $("#aboutme").offset().top});
})

    $("#skl").on("click", function() {
        $('html, body').animate({scrollTop: $("#skills").offset().top});
});

    $("#edc").on("click", function() {
        $('html, body').animate({scrollTop: $("#education").offset().top});
})

})

