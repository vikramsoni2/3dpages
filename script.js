current_section = 1;

nav = document.querySelectorAll("a");
nav.forEach(item => {
  item.addEventListener('click', getSelection);
});

function getSelection() {
    if(this.id==1){
      $("#item1").css('transform','translate3d( 0, 0, 0px)');
      $("#item1").css('opacity','1');

      $("#item2").css('transform','translate3d( 0, 0, -2000px)');
      $("#item2").css('opacity','0.2');
      
      $("#item3").css('transform','translate3d( 0, 0, -4000px)');
      $("#item3").css('opacity','0.2');
      
      $("#item4").css('transform','translate3d( 0, 0, -6000px)');
      $("#item4").css('opacity','0.2'); 

    }
  
    if(this.id==2){
      $("#item1").css("transform","translate3d( 0, 0, 2000px)");
      $("#item1").css("opacity","1");

      $("#item2").css("transform","translate3d( 0, 0, 0px)");
      $("#item2").css("opacity","1");
      
      $("#item3").css("transform","translate3d( 0, 0, -2000px)");
      $("#item3").css("opacity","0.2");
      
      $("#item4").css("transform","translate3d( 0, 0, -4000px)");
      $("#item4").css("opacity","0.2"); 
    }
  
    if(this.id==3){
      $("#item1").css("transform","translate3d( 0, 0, 4000px)");
      $("#item1").css("opacity","0.2");
      
      $("#item2").css("transform","translate3d( 0, 0, 2000px)");
      $("#item2").css("opacity","0.2");
      
      $("#item3").css("transform","translate3d( 0, 0, 0px)");
      $("#item3").css("opacity","1");
      
      $("#item4").css("transform","translate3d( 0, 0, -2000px)");
      $("#item4").css("opacity","0.2"); 
    }
  
    if(this.id==4){
      $("#item1").css("transform","translate3d( 0, 0, 6000px)");
      $("#item1").css("opacity","1");

      $("#item2").css("transform","translate3d( 0, 0, 4000px)");
      $("#item2").css("opacity","0.2");
      
      $("#item3").css("transform","translate3d( 0, 0, 2000px)");
      $("#item3").css("opacity","0.2");
      
      $("#item4").css("transform","translate3d( 0, 0, 0px)");
      $("#item4").css("opacity","1"); 
    }
  
    
  
}