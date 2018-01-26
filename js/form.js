// Esconder vídeo e substituir fundo do formulário

    $(function(){
        console.info("jq ready");

            $(".onoffswitch .onoffswitch-label").click( function() {
                
                console.log("on/off");
                 
                $(".container #vid").toggle()
                $(".overlay").css("background-color","rgba(192,208,214,.5)"); 
      });

      
// expandable burger

    $(".cross").hide();
    $(".hamburger").show();
    $(".hamburger").click(function() {
        $(".menu").slideToggle("fast", function() {
            $(".cross").show();
            $(".hamburger").hide();
        
        });
    });
    
    $(".cross").click(function() {
        $(".menu").slideToggle("fast", function() {
            $(".cross").hide();
            $(".hamburger").show();
        });
    
    });
    
    
    function loadResizer() {

        
            var winwidth = $(window).width();
            console.log(winwidth);
            if(winwidth > 767){
                $('.menu').show();   
            } else {
                $('.menu').hide();   
            }
        };  
    

    $(function() {
        $(window).resize(loadResizer).trigger('resize');
    });
    
 });


