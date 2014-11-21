document.addEventListener('DOMContentLoaded', function(){
	var button1 = document.querySelector('.btn');
	var farInputTemp = parseInt(document.querySelector('.form-control'));
	var celResult = ((farInputTemp-32)*(5 / 9)).toFixed(0);

	button1.addEventListener('click', function(){
			if (isNaN(celResult)) {
				document.querySelector("h2").innerHTML = "That was a number, like, yesterday. Try again."
			}
			else {
				document.querySelector("h2").innerHTML= "It's " +celResult+ "ºC. I only use Celsius.";	
			}
			
	});


}); 



	// button1.addEventListener ('mouseover', function(){
	// 		this.style.border="3px solid black";
	// });

	// button2.addEventListener ('mouseover', function(){
	// 		this.style.border="3px solid black";
	// });

	// button2.addEventListener ('click', function(){
	// 		this.document.reload();
	// });


// 	var convertThis = document.querySelectorAll('.btn');
// 	var convertToThat = 

// 	for(var i=0; i < buttons.length; i+=1){
// 		buttons[i].addEventListener('click', function(){
// 			this.style.backgroundColor="red";
// 		});

// 	for(var i=0; i < buttons.length; i+=1){
// 		buttons[i].addEventListener('mouseover', function(){
// 			this.style.backgroundColor="purple";
// 	});
// 	}
// });
