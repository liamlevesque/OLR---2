var nextLot = {
    currentLot: null
  };

rivets.binders.nextlot = function(e, value){
  buildNextLot(value);
}

rivets.bind($('.js--next-lot'),{
  nextLot: nextLot
}); 


//BUILD THE DISPLAY FOR THE CURRENT LOT INFO
function buildNextLot(index){
	var currentLot = lotTable.lotList[index + 1],
    	template3 = $('#nextlot').html();

	if(!currentLot) return;

 	var renderedNext = Mustache.render(template3, currentLot);
  	$('.js--next-lot').html(renderedNext);  
} 