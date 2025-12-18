$(document).ready(function() {
    $.fn.modal = function(action) {
        if (action === "show") {
            $(this).fadeIn(300);
            $("body").css("overflow", "hidden");
        } else if (action === "hide") {
            $(this).fadeOut(300);
            $("body").css("overflow", "auto");
        }
    };

    $(".contact-form").submit(function(e) {
        e.preventDefault();
        
        var valid = true;
        $(".contact-form input[required]").each(function() {
            if ($(this).val().trim() === "") {
                valid = false;
                $(this).css("border-bottom-color", "#ff0000");
            } else {
                $(this).css("border-bottom-color", "#191919");
            }
        });
        
        if (valid) {
            $("#order-popup").modal("show");
            $(this)[0].reset();
        }
        
        return false;
    });

    $(".popup-close-btn, .popup-overlay").click(function(e) {
        if ($(e.target).hasClass("popup-overlay") || $(e.target).hasClass("popup-close-btn") || $(e.target).closest(".popup-close-btn").length) {
            $("#order-popup").modal("hide");
        }
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            $("#order-popup").modal("hide");
        }
    });

    $(".popup-home-btn").click(function(e) {
        e.preventDefault();
        
        $("#order-popup").modal("hide");
        window.location.href = "index.html";  
    });

    $(".footer-contact-link").click(function(e) {
        e.preventDefault();
        $("#order-popup").modal("show");
    });
});