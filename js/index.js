
    $(function(){ 
 
       
        // Movimento suavizado scroll da "NavBAr""

    
            $("#sectionBtn1").click(function() {
                $('html, body').animate({
                    scrollTop: $("#viagens").offset().top 
                }, 1000);
                event.preventDefault();
                console.log($("#viagens").offset().top);  
                    
            });

            $("#sectionBtn2").click(function() {
                $('html, body').animate({
                    scrollTop: $("#inicio").offset().top -190
                }, 500);
                event.preventDefault();
                console.log($("#inicio").offset().top);
            });

            $("#sectionBtn3").click(function() {
                $('html, body').animate({
                    scrollTop: $("#info").offset().top   
                }, 1000);
                event.preventDefault();
                console.log($("#info").offset().top);
            });

            $("#sectionBtn4").click(function() {
                $('html, body').animate({
                    scrollTop: $("#noticias").offset().top + 200
                }, 800);
                event.preventDefault();
                console.log($("#noticias").offset().top);
        });
    
    //noticias
    var dados = [ 
            {imagem:"images/noticias/destinos.jpg", titulo: "Os melhores destinos de 2017 do planeta! ", 
            paragrafo:"Partir em viagem não significa que tens de gastar uma fortuna. Embora alguns destes destinos envolvam um voo de longo curso que pode sair caro, a experiência de viagem no destino e o baixo custo de vida compensam!",
            cols:"w3-col l3 m6 s12 w3-center"},
            {imagem:"images/noticias/hotel.jpg",titulo: "3 hotéis de sonho no algarve... ", 
            paragrafo:"Aqui em casa, já se sabe, Ele cozinha e eu viajo, por isso, neste campo, a chef sou eu. E estes refúgios têm tudo o que nós gostamos: bom gosto, charme e preços aceitáveis.",
            cols:"w3-col l6 m6 s12 w3-center"},
            {imagem:"images/noticias/accessories.jpg", titulo: "18 acessórios e itens para viagem incríveis que te vão surpreender!", 
            paragrafo:"Viajar requer planejamento e uma boa capacidade de priorização, pois afinal não cabe tudo na mala. Por isso, itens tecnológicos ou projetados pensando na escassez de espaço e na restrição de peso do viajante são muito bem vindos.",
            cols:"w3-col l3  s12 w3-center"}
        ];      


    //  loop de itens

    var total = dados.length;
        console.log(total)

    for (var i = 0; i < total; i++ ){

        function criarArtigo(_titulo, _paragrafo, _src){    
                    
            var $div =  $("<div>");
            var $p = $("<p>");
            var $img = $("<img/>");
            var $titulo = $("<h3/>");

        //  conteúdo
    
            $p.text(_paragrafo);
            $titulo.attr("class", "titulo");
            $p.attr("class", "paragrafo");
            $img.attr("class", "imagem");
            $div.attr("class", "novidades");
            
            
            $div.attr("class", dados[i].cols);
            $titulo.text(dados[i].titulo);
            $p.text(dados[i].paragrafo);
            $img.attr("src",dados[i].imagem);
            $img.attr("alt","ilustração");
        
        // body
            $div.append($titulo);
            $div.append($img);
            $div.append($p);
                    
            $("article").append($div);
        }
    
    criarArtigo(dados[i].titulo, dados[i].paragrafo, dados[i].imagem,dados[i].cols);
    }

      

    // expandable burger

    function loadResizer() {
        var winwidth = $(window).width();

        console.log(winwidth);  

        if( winwidth > 767) {
            $('.menu').show();  
            // Animações de fundo

            var temp = Math.floor((Math.random() * 8) + 1);
                
            $("#mov").each(function(index, element){
                var tl = new TimelineMax();    

                tl.appendMultiple([
                        TweenMax.to(".vertical-text1",2,{opacity:.1,rotation:920,scale:temp,ease:Back.easeOut,}),
                        TweenMax.to(".vertical-text3",1.5,{opacity:.1,rotation:360,scale:temp,ease:Back.easeOut,}),
                        TweenMax.to(".vertical-text2",1,{opacity:.1,rotation:540,scale:temp,ease:Back.easeOut,}), ],.5, 0);
                        tl.pause(false),
                element.animation = tl;
                });
                $("#mov").mousedown(over);
                $("#mov").mouseenter(out);
            function over(){ this.animation.play() };
            function out(){ this.animation.reverse() };
            } else if ( winwidth < 600) {
            $('.nav-type').click(function() {
                $(".menu").hide();
                $(".cross").hide();
                $(".hamburger").show();
            });
        }
    }     
    $(function() {
        $(window).resize(loadResizer).trigger('resize');
    });

    



        $(".hamburger").hide();
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



 });
    


    