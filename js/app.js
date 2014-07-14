$document.ready(function(){
    for(var counter = 1; counter <=100; counter++){
    	if (counter % 3 === 0 && i % 5 === 0) {
			$("#main").append("<p>FizzBuzz</p>");
		} 
		else if (i % 3 === 0) {
			$("#main").append("<p>Fizz</p>");
		} 
		else if (i % 5 === 0) {
			$("#main").append("<p>Buzz</p>");
		}
		else {
	    	$("#main").append(counter);
		}
}
});

$(document).ready(function () {
   for (var counter=1;counter<=100;counter++) {
        if (counter % 3 === 0 && i % 5 === 0) {
                $("#main").append("<p>FizzBuzz</p>");
                //console.log("fizzbuzz");//
            }
            else {
               $("#main").append("<p>Fizz</p>");
               //console.log("fizz");//
            }
        }
        else {
            if(counter%5===0) {
            $("#main").append("<p>Buzz</p>");
            //console.log("buzz");//
            }
            else {
                var result = "<p>" + counter + "</p>";
                $("#main").append(result);
                //console.log(counter);//
            }
        }
    }
});