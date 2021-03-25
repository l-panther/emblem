
$(document).ready(function() {
	
	function getList() {
		
		$.get("data/books.json", function(result) {

			let output = "",
				title = "",
				para = "";
			for (var i = 0; i < result.length; i++) {

				if (result[i].id == 1) {
					title += result[i].type;
					para += result[i].shortdescription;
				}
				
				output += "<!--  Book --> \
					<ul class='book page-item'> \
					<li><h3>" + result[i].h3 + "</h3></li> \
					<li><span class='w3-margin-top text_green'>Title: </span>" + result[i].title + "</li> \
					<li><span class='w3-margin-top text_green'>Author: </span>" + result[i].author + "</li> \
					<li><span class='text_green'>Book Description: </span>" + result[i].description + "</li> \
					<li><span class='text_green'>Price:</span> " + result[i].price + "</li> \
					<li><span class='text_green'>Investment Rating: </span>";

					for (var j = 0; j < result[i].star; j++) {
						output += "<i class='fa fa-star'></i>";
					}

					output += "</li> \
					<li class='w3-margin-bottom'><!-- Image --> \
						<img aria-describedby='book4' src='images/main/" + result[i].image + ".jpg' alt='Image of book' class='nineteen_century_books'> \
						<p class='aria' id='book4'>An image of the books Jane Eyre</p> \
					</li> \
				</ul> <!-- End book -->";

			}
			$("#bookList").html(output);
			$("#bookMonthTitle").text(title);
			$("#bookMonthDesc").text(para);
		}, "json");
	}
	
	
setTimeout(getList(), 3000);
	
});

