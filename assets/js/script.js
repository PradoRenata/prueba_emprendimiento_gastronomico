$(function(){

    $("a").click(function(event){
        event.preventDefault();
  
        var gato = this.hash;
  
        $("html").animate(
            {
          scrollTop: $(gato).offset().top -100,
        }, 600
        
        );
    
    });
    
    $('[data-bs-toggle="tooltip"]').tooltip(); 
  
  });