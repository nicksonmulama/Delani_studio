$(document).ready(function(){
    $(".three-1").click(function(){
      $(".b2").toggle();
      $(".b1").toggle();
    });
    $(".three-1").dblclick(function(){
      $(".b2").show();
    });
  });

  $(document).ready(function(){
    $(".three-2").click(function(){
      $(".b4").toggle();
      $(".b3").toggle();
    });
    $(".three-2").dblclick(function(){
      $(".b4").show();
    });
  });


  $(document).ready(function(){
    $(".three-3").click(function(){
      $(".b6").toggle();
      $(".b5").toggle();
    });
    $(".three-3").dblclick(function(){
      $(".b6").show();
    });
  });


  $(document).ready(function(){
      $(".threee-1").click(function(){
          $("#z1").toggle(function(){
            $(".z2").css({opacity:.4})
        });
        $(".z2").click(function(){
        });

       
      });
      $(".three-1").hover(function(){
        $(".z2").css({opacity:.9})
      });
    });
    