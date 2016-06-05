$(document).ready(function() {
    var $moveCount = 0;
    var $move = true;

    $("#winner").hide();

    var playerTurn = playerTurn || "x";
    $("button").on('click', function() {
        $moveCount++;


        if (($(this).text() === 'x' || $(this).text() === 'o') && ($move === true)) {

            swal("Take some other position");
        } else {

            if ($move === true){
                $(this).css({
                    "background-color": "#787878",
                    "font-size": "9vh",
                    "color" : "white",
                    "fontWeight" : "bold"
                }).text(playerTurn);
            }
            if ($moveCount >= 9) {
                $("#winner").text("It's a Tie");
                $move = false;
                return;
            }
            if (playerTurn === "x") {
                playerTurn = "o";
            } else {
                playerTurn = "x";
            }
            $c1 = $("#one").text();
            $c2 = $("#two").text();
            $c3 = $("#three").text();
            $c4 = $("#four").text();
            $c5 = $("#five").text();
            $c6 = $("#six").text();
            $c7 = $("#seven").text();
            $c8 = $("#eight").text();
            $c9 = $("#nine").text();
            if ($c1 === "x" && $c2 === 'x' && $c3 === 'x' ||
                $c4 === 'x' && $c5 === 'x' && $c6 === 'x' ||
                $c7 === "x" && $c8 === 'x' && $c9 === 'x' ||
                $c1 === 'x' && $c4 === 'x' && $c7 === 'x' ||
                $c2 === "x" && $c5 === 'x' && $c8 === 'x' ||
                $c3 === 'x' && $c6 === 'x' && $c9 === 'x' ||
                $c1 === "x" && $c5 === 'x' && $c9 === 'x' ||
                $c3 === 'x' && $c5 === 'x' && $c7 === 'x') {
                setInterval(blinker('X Won'),5000);
                $move = false;
                $moveCount = 0;
                return;
            }
             if ($c1 === "o" && $c2 === 'o' && $c3 === 'o' ||
                $c4 === 'o' && $c5 === 'o' && $c6 === 'o' ||
                $c7 === "o" && $c8 === 'o' && $c9 === 'o' ||
                $c1 === 'o' && $c4 === 'o' && $c7 === 'o' ||
                $c2 === "o" && $c5 === 'o' && $c8 === 'o' ||
                $c3 === 'o' && $c6 === 'o' && $c9 === 'o' ||
                $c1 === "o" && $c5 === 'o' && $c9 === 'o' ||
                $c3 === 'o' && $c5 === 'o' && $c7 === 'o') {
                setInterval(blinker('O Won'), 5000);
                $move = false;
                $moveCount = 0;
            return;
            }

        }
    });
    $(".reset").on('click', function() {
        reset();
    });

    function reset() {
        $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").empty();

        $("button").css({
            "background-color": "#2C2C2C"
        });
        $moveCount = 0;
        $move = true;
        $("#winner").hide();
        $("#winner").text('');
    }

    function blinker(x){
        $("#winner").text(x).show();
        $("#winner").fadeOut(500);
        $("#winner").fadeIn(500);

    }

}); // end of document.ready()
