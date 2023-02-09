var main = function() 
{
    "use strict";
    
    //<script src="https://gist.github.com/mmoore52/ed8c97743b21ff6fc402278cdcfd4e4d.js"></script>

    // $.getJSON("https://gist.github.com/mmoore52/ed8c97743b21ff6fc402278cdcfd4e4d.js",function(card)
    // {
    //     console.log("getting json");
    //     var $cardP = $("<p>");
    //     $cardP.text(card.rank+ " of "+ card.suit);
    //     $("body").append($cardP);
    // }); 
    
    
    var getjson = function()
    {
        if($(".source-input input").val() !==""){

            var source = document.getElementById("source").value;
            $.getJSON(source,function(card)
            {
                console.log("appending hand");
                console.log(source);
                
    
                console.log("getting json");
                var $cardP = $("<li>");
                $cardP.text("rank:" + card.rank);
                $("body").append($cardP);
                var $cardP = $("<li>");
                $cardP.text("suit:"+card.suit);
                $("body").append($cardP);
                console.log($cardP);
                
            });
        }
    }
    $(".source-input button").on("click",function(event){
        getjson();
        
    });
    $(".source-input button").on("keypress",function(event){
        if($(".Source-input input").val() !== "" && event.keyCode==13){
            getjson();
        }
    });
    $(".key-input button").on("click",function(event){
        //https://www.w3schools.com/jsref/prop_text_value.asp
        var keyinput = document.getElementById("key").value;
        var value = document.getElementById("value").value;

        //for the [] around keyinput
        //https://stackoverflow.com/questions/882727/is-there-a-way-to-use-variable-keys-in-a-javascript-object-literal
        var myObj = {[keyinput]: value};
        console.log(myObj);
    });
   
};

$(document).ready(main);