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
    $(".threee-1").hover(function(){
      $(".z3").toggle();
      $(".zz2").css({opacity:.4});
    });
    $(".threee-1").mouseleave(function(){
      $(".zz2").css({opacity:1});
    });
  });


  $(document).ready(function(){
    $(".threee-11").hover(function(){
      $(".z33").toggle();
      $(".zz22").css({opacity:.4});
    });
    $(".threee-11").mouseleave(function(){
      $(".zz22").css({opacity:1});
    });
  });

  $(document).ready(function(){
    $(".threee-111").hover(function(){
      $(".z333").toggle();
      $(".zz222").css({opacity:.4});
    });
    $(".threee-111").mouseleave(function(){
      $(".zz222").css({opacity:1});
    });
  });

  $(document).ready(function(){
    $(".threee-1111").hover(function(){
      $(".z3333").toggle();
      $(".zz2222").css({opacity:.4});
    });
    $(".threee-1111").mouseleave(function(){
      $(".zz2222").css({opacity:1});
    });
  });
    

  $(document).ready(function(){
    $(".threee-11111").hover(function(){
      $(".z33333").toggle();
      $(".zz22222").css({opacity:.4});
    });
    $(".threee-11111").mouseleave(function(){
      $(".zz22222").css({opacity:1});
    });
  });


  $(document).ready(function(){
    $(".threee-111111").hover(function(){
      $(".z333333").toggle();
      $(".zz222222").css({opacity:.4});
    });
    $(".threee-111111").mouseleave(function(){
      $(".zz222222").css({opacity:1});
    });
  });

  $(document).ready(function(){
    $(".threee-1111111").hover(function(){
      $(".z3333333").toggle();
      $(".zz2222222").css({opacity:.4});
    });
    $(".threee-1111111").mouseleave(function(){
      $(".zz2222222").css({opacity:1});
    });
  });


  $(document).ready(function(){
    $(".threee-11111111").hover(function(){
      $(".z33333333").toggle();
      $(".zz22222222").css({opacity:.4});
    });
    $(".threee-11111111").mouseleave(function(){
      $(".zz22222222").css({opacity:1});
    });
  });

  function display(){
    let username=document.getElementById("username").value;
    let email=document.getElementById("email").value;
    alert("Hello "+username+", Thanks for contacting us, your request is being processed within 72hrs");
  }