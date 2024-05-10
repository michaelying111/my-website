
// Data for recipe steps, to be populated with actual content
let recipe_step_data=[{"title":"Selection and Preparation of the Duck","detail":"A specific breed of duck, often the Pekin duck, is chosen for its suitable size and meat quality. The duck is then plucked, cleaned, and rinsed thoroughly."},
					 {"title":"Inflating the Duck","detail":"Air is blown into the duck between its skin and flesh to separate the skin from the fat, which helps the skin become crispy during roasting."},
					 {"title":"Marinating","detail":"The duck is marinated with a mixture of spices and seasonings inside its cavity. This may include ingredients like soy sauce, five-spice powder, and other seasonings to enhance flavor."},
					 {"title":"Sealing and Drying","detail":"The duck's cavity is sealed, and the duck is hung to dry in a well-ventilated area. This drying process is crucial for achieving crispy skin."},
					 {"title":"Glazing","detail":"The duck is brushed with a glaze made from maltose syrup, which gives the skin a rich, golden color upon roasting. After glazing, the duck is left to dry again to ensure the glaze sets properly."},
					 {"title":"Roasting","detail":"The duck is roasted in an open oven or a hung oven. Traditional methods involve using wood-fired ovens, where the type of wood, such as fruit tree wood, can impart a unique flavor to the duck. The roasting process is carefully monitoredto ensure the skin crisps up while the meat remains tender."},
					 {"title":"Serving","detail":"Once roasted to perfection, the duck is carved, and the crispy skin and succulent meat are served separately. It is typically accompanied by thin pancakes, finely sliced spring onions, cucumber, and hoisin sauce. Diners wrap piecesof duck, spring onions, and cucumber in a pancake, adding hoisin sauce for flavor."}]
// Data for the food location, including the image URL
let food_location_data = {"food_location_image_url":"images/food_location_image.jpg"}
// Function to switch to the "How To Cook" tab
function switchTabToHowToCook() {
    // Set the "How To Cook" tab as selected and remove the selected class from "Where Can I Eat" tab
    $("#map-content").hide()
	$("#how-to-eat-bar").addClass("selected");
    $("#where-can-i-eat-bar").removeClass("selected");
    // Clear original area data
    $("#tab-content").html("");
    // Create an ordered list to display the recipe steps
    let $olList = $("<ol></ol>");
    // Loop through the recipe step data and create HTML elements for each step
    recipe_step_data.forEach(function(step_data) {
        // Create list item, heading, and paragraph elements
        let $liElement = $("<li></li>");
        let $h3Element = $("<h3></h3>").html(step_data.title);
        let $pElement = $("<p></p>").html(step_data.detail);

        // Append the heading and paragraph to the list item
        $liElement.append($h3Element).append($pElement).append($("<hr>"));
        // Append the list item to the ordered list
        $olList.append($liElement);
    });
    // Append the ordered list to the content area
    $("#tab-content").append($olList);
}

// Function to switch to the "Where Can I Eat" tab
function switchTabToWhereCanIEat() {
    // Set the "Where Can I Eat" tab as selected and remove the selected class from "How To Cook" tab
    $("#where-can-i-eat-bar").addClass("selected");
    $("#how-to-eat-bar").removeClass("selected");
    // Clear the content area
    $("#tab-content").html("");
	$("#map-content").show()
    // Create a div for the map and set its class
	var map = new BMapGL.Map("map-content");           
	var point = new BMapGL.Point(116.404, 39.9); 
	var marker = new BMapGL.Marker(point);  
	map.addOverlay(marker);  
	map.centerAndZoom(point, 15);       
	

	
	$.ajax({
		type:'get', 
		url:'https://api.weatherbit.io/v2.0/forecast/daily?city_id=1816670&key=1de24f125ba5427eb5450286fd61d5eb',
		success:function(res){
			console.log(res)
			let food_location_weather_data = []
			for (let i =0; i <=3;i++){
				food_location_weather_data[i]=res.data[i].weather
			}
			// Create a div for the weather data and set its class
			let $weatherDataDiv = $("<div></div>").addClass("weather-data");
			// Loop through the weather data and create divs for each day
			
			food_location_weather_data.forEach(function(data, index) {
			    let $dayDiv = $("<div></div>").addClass("day");
			    let $h3Element = $("<h3></h3>").html("Day " + (index + 1));
			    let $pElement = $("<p></p>").html(data.description);
				let $img = $('<img>', {height: 50,width: 50,src: 'https://cdn.weatherbit.io/static/img/icons/'+data.icon+'.png'})
			
			    // Append the heading and paragraph to the day div
			    $dayDiv.append($h3Element).append($pElement).append($img);
			
			    // Append the day div to the weather data div
			    $weatherDataDiv.append($dayDiv);
			});
			
			// Append the map div and weather data div to the content area
			$("#tab-content").append($weatherDataDiv);
			
		},
		}
	)

	


}

// Function to play the recipe information using speech synthesis
function playRecipeInfo() {
    // Create a new speech synthesis utterance
    let utterThis = new SpeechSynthesisUtterance();
    // Set the text to the recipe information text
    utterThis.text = $("#recipe-info-text").text();
    // Speak the text using the browser's speech synthesis
    window.speechSynthesis.speak(utterThis);
}