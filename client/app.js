//Mariah Moore


var main = function() 
{
  
  todos = [{}]
  $.get("todos",function(data){
    data.forEach(function(card){
      var $p_body = $("<p>")
      var $list = $("<ul>")
      for (const[key,value] of Object.entries(card))
      {
        if(key!=""&&value!="")
        {

          var $todo = $("<li>");
          $todo.text(key+":"+value);
          $list.append($todo);
          $p_body.append($list)
          $("body").append($p_body)
                        
        }                    
      }           
    });
  })
  
    "use strict";
    
   
    
    //https://www.peachpit.com/articles/article.aspx?p=2239154&seqNum=10
    var pictures = new Array("IMG_4026.jpg","flowers.jpg","grass.jpg");
    
    var randomNum = Math.floor(Math.random() * pictures.length);
    document.getElementById("myPicture").src = pictures[randomNum];
    
    $(".comment-input button").on("click",function(event){
        if ($(".comment-input input").val() !=="")
        {
            

            let mes = $(".comment-input input").val("")
            if(mes != ""){
              var $p_body = $("<p>");
              $p_body.text();
              $("body").append($p_body)
              console.log(mes);
              var newToDo = {mes}
              todos.push(newToDo)
              $.post("todos",newToDo,function(response)
              {
                console.log("We posted to the server!")
                console.log(response)
              })
            }
            
        } 
    });
    $(".comment-input input").on("keypress", function(event)
    {
        if ($(".comment-input input").val() !=="" && event.keyCode==13)
        {
            var $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        } 
    });
    $(".contactbutton button").on("click",function(event){console.log("log");});
    //$(".btn button").on("click",function(event){window.alert("hiya");});
    $(".key-input").val("")
    $(".val-input").val("")
    $(".my-input button").on("click",function(event)
    {
        console.log("Made it")
        let to_add_key = $(".key-input").val();
        let to_add_msg = $(".val-input").val();
        $(".my-input input").val("")
        if (to_add_key!="" && to_add_msg!="")
        {
            var $p_body = $("<p>");
            $p_body.text(to_add_key+":"+to_add_msg);
            $("body").append($p_body)
            console.log(to_add_key+":"+to_add_msg);
            var newToDo = {[to_add_key]:to_add_msg}
            todos.push(newToDo)
            $.post("todos",newToDo,function(response)
            {
                console.log("We posted to the server!")
                console.log(response)
            })
        }   
    });

    
    // const delayLoop = (n, delay) => {
    //   return (x, i) => {
    //     setTimeout(() => {
    //       n(x);
    //     }, i * delay);
    //   };
    // };
  
    
    // const lyrics = [
    //   "Gale Song ~The Lumineers",
      
    // ];
    
    // const output = document.querySelector("#output");
    
    // const display = s => output.innerText = s;
    
    // console.log(todos)
    // lyrics.forEach(delayLoop(display, 1000));
    var $rtime = $(".ragtime")
    //var $rtime = $("<p>")
    let index = 0
    setInterval(function()
    {
      
        console.log(todos[index]);
        $rtime.text(todos[index]);
        //$("body").append($rtime)
        index+=1
        if (index ==todos.length)
        {
            index = 0;
        }
    },2000)
};

$(document).ready(main);