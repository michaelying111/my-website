function search() {
	$('.search-result').remove();
	// Get the text in the search box
	let search_text = $("#search-input").val();
	
	// Search for "duck" and adjust visibility
	let a = search_text.search(/duck/i);
	if (a >= 0) {
		$('#rost-duck').show();
	} else {
		$('#rost-duck').hide();
	}
	
	// Search for "pork" and adjust visibility
	let b = search_text.search(/pork/i);
	if (b >= 0) {
		$('#stewed-pork').show();
	} else {
		$('#stewed-pork').hide();
	}
	
	// Search for "chicken" and adjust visibility
	let c = search_text.search(/chicken/i);
	if (c >= 0) {
		$('#mouth-watering-chicken').show();
	} else {
		$('#mouth-watering-chicken').hide();
	}
	if (a+b+c<=0){
		$.ajax({
		  url: 'http://jsucpdq.market.alicloudapi.com/recipe/search',
		  type: 'GET',
		  headers: {
		    'Authorization': 'APPCODE f4a979d1f1614a32b6d207ee8fbfbca9'
		  },
		  data: {
		    keyword: search_text,
		    num: 10,
		    start: 1
		  },
		  success: function(data) {
		    // 处理成功响应
		    console.log(data);
			for (let i=0;i<data.result.list.length;i++){
				let recipe_data = data.result.list[i]
				// debugger
				var $li = $('<li>', {
				  class: 'search-result'
				});
				var $img = $('<img>', { 
				  src: recipe_data.pic,
				  alt: recipe_data.name
				});
				var $text = $('<text></text>').html(recipe_data.name)
				$li.append($img)
				$li.append($text)
				$('#recipe-ul').append($li)
			}

			
		  },
		  error: function(xhr, status, error) {
		    // 处理错误响应
		    console.error(error);
		  }
		});
	}
	
	
}