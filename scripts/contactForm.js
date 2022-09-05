$(document).ready(function() {

	const href = window.location.pathname;
	const pos = href.indexOf("contact"); //console.log(pos);
	const success = `<div class="submit-success"><b>Success!</b> Your message has been sent<i id="close-submit-success" class="fa fa-close w3-right"></i></div>`;
	let errorArray;

	if (pos !== -1) {

		document.getElementById("send").addEventListener("click", function(event){
			event.preventDefault();
			init();
		}); /* Get element and on click call function */
	}

	// ================================= VALIDATE TITLE 
	function validTitle(title) {      
		// If title equals string or title is blank, add error, return false
		// Else if title not equal string, add error, return false
		// Return true
		// Title is arguement
		if((title == "Select your title") || (title == "")) {
			addError("error-title", "Title is required");
			setBorder("title");
			return false;
		} 
		hideError("error-title");
		defaultBorder("title");
		return true; }


	// ================================= VALIDATE FIRST NAME 
	function validFname(firstname) {     
		// If first name equals sz
		// First name is arguement
		var fnameRegEx = /^[a-zA-Z]*$/; // Reg expression variable
		if((firstname == "Enter your first name") || (firstname == "")) {
			addError("error-fname", "First name is required");
			setBorder("fname");
			return false;
		} 
		if (!fnameRegEx.test(firstname)) {
			addError("error-fname", "First name must only contain letters only");
			setBorder("fname");
			return false;
		}
		if (firstname.length <= 2) {  // If first name field does match conditions
			addError("error-fname", "First name must contain more than 2 letters");
			setBorder("fname");
			return false;
		}
		hideError("error-fname");
		defaultBorder("fname");
		return true; }


	// ================================= VALIDATE LAST NAME 
	function validLname(lastname) {     
		// If last name equals string or last name is blank, add error, return false
		// Else if last name not regular expresion or length is less than/equal to 2, add error, return false
		// Return true
		// Last name is arguement
		var lnameRegEx = /^[a-zA-Z \-?]*$/; // Regular expression
		if(lastname == "") {
			addError("error-lname", "Last name is required");
			setBorder("lname");
			return false;
		}
		if (!lnameRegEx.test(lastname)) {
			addError("error-lname", "Last name must contain letters only");
			setBorder("lname");
			return false;
		}
		if (lastname.length <= 2) {  // If first name field does match conditions
			addError("error-lname", "Last name must be more than 2 letters");
			setBorder("lname");
			return false;
		}
		hideError("error-lname");
		defaultBorder("lname");
		return true; }


	// ================================= VALIDATE EMAIL 
	function validEmail(email) {    
		// If email is blank, add error, return false
		// Else if email not equal to regular expresion, add error, return false
		// Return true
		// Email is arguement
		
		// Regular expression taken from http://regexlib.com/(X(1)A(I4oK6w1K52I4A2siAA4rLdlVoJJWbFtj22zxZ7RNarY5l1m7szlB9lt1ufxMvMZtcgBvOlD4xiQ-ZEqnoaRBtd4Z9ZtGtlUsY_rTfAc1mx1EbNkQwpKdco32eq5fk-Yem9xsdX6dLUGCEUIfVj9Fi1dQFbnhrZMZLLrg1O-QbnqZfy5FBJKo3baZFFgCM7ia0))/Search.aspx?k=uk+telephone&c=-1&m=-1&ps=20 / Autor: Rob Collyer (Code modified to make spaces number optional)
		var emailRegEx = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;    // ------ Create regular expression
		if(email == "") {
			addError("error-email", "Email is required");
			setBorder("email");
			return false; // Set allowsubmit t0 false
		} else {
			if (!emailRegEx.test(email)) { // If email field does NOT match regular expression
			addError("error-email", "Email must be a valid");
			setBorder("email");
			return false; // Set allowsubmit to false
			}   
		}
		hideError("error-email");
		defaultBorder("email");
		return true; }


	// ================================= VALIDATE QUERY
	function validQuery(query) {    
		// If health equals string or health is blank, add error, return false
		// Else if health not regular expresion or length is less than/equal to 2, add error, return false
		// Return true
		// Health is arguement
		
		if((query == "Nature of query") || (query == "")) {
			addError("error-query", "Query is required");
			setBorder("query");
			return false; // Set allowsubmit t0 false
		} 
		hideError("error-query");
		defaultBorder("query");
		return true; }


	// ================================= VALIDATE MESSAGE 
	function validMessage(message) {     
			// If telephone equals string or  is blank, return true
		// Else if telephoneis blank, if telephne not equal to regular expresion, add error, return false
		// Return true
		// Telephone is arguement
		
		// Regular expression taken from http://regexlib.com/(X(1)A(I4oK6w1K52I4A2siAA4rLdlVoJJWbFtj22zxZ7RNarY5l1m7szlB9lt1ufxMvMZtcgBvOlD4xiQ-ZEqnoaRBtd4Z9ZtGtlUsY_rTfAc1mx1EbNkQwpKdco32eq5fk-Yem9xsdX6dLUGCEUIfVj9Fi1dQFbnhrZMZLLrg1O-QbnqZfy5FBJKo3baZFFgCM7ia0))/Search.aspx?k=uk+telephone&c=-1&m=-1&ps=20 / Autor: Rob Collyer (Code modified to make spaces number optional)
		var messageRegEx = /^[a-zA-Z \-?]*$/;   // Create variable:[messageRegEx] and store:[regular Expression
		if((message == "Type your message here..") || (message == "")) { // If telephone field does NOT match regular expression
			addError("error-message", "Message is required");
			setBorder("message");
			return false; // Set allowsubmit to false
		}
		if (!messageRegEx.test(message)) {
			addError("error-message", "Message must contain letters only");
			setBorder("message");
			return false;
		}
		if (message.length < 10 || message.length > 300) {  // If first name field does match conditions
			addError("error-message", "Message must contain between 20 and 300 letters");
			setBorder("message");
			return false;
		}
		hideError("error-message");
		defaultBorder("message");
		return true; }


	// ================================= ADD ERRORS 
	function addError(elemid, string) { 
		// Get element by id and add string to html
		// Id and string are arguements
		let error = {
			elemId: elemid,
			string: string
		}
		errorArray.push(error);
	}

	function checkField(valid) {
		if(!valid) {
			return false;
		} 
		return true;
	}

	// ================================= SHOW ERRORS 
	function showError(id) {
		// Get element by id and manipulate css to display element
		// Id is arguement
		$(id).css('display', 'inline-block'); }


	// ================================= HIDE ERRORS 
	function hideError(id) {  
		// Get element by id and manipulate css to display element
		// Id of element is arguement

			document.getElementById(id).innerHTML = ""; }


	function setBorder(id) {
		document.getElementById(id).style.border = "1px solid #ff0000";
	}

	function defaultBorder(id) {
		document.getElementById(id).style.border = "lightgrey";
	}


	// Initiation
	function init(){
		errorArray = [];
		const title = document.getElementById("title").value;
		const fname = document.getElementById("fname").value;
		const lname = document.getElementById("lname").value;
		const email = document.getElementById("email").value;
		const query = document.getElementById("query").value;
		const message = document.getElementById("message").value;
		const validTitleName = checkField(validTitle(title));
		const validFirstname = checkField(validFname(fname));
		const validLastname = checkField(validLname(lname));
		const validEmailAddress = checkField(validEmail(email));
		const validQuerySubject = checkField(validQuery(query));
		const validMessageContent = checkField(validMessage(message));

		for (let i = 0; i < errorArray.length; i++) {
			document.getElementById(errorArray[i].elemId).innerHTML = errorArray[i].string;
		}

		
		if (validTitleName == true && validFirstname == true && validLastname == true && validEmailAddress == true && validQuerySubject == true && validMessageContent == true) {
			$("form fieldset input").val("");
			$("form textarea").val("");
			$("form select").val("");
			$(window).scrollTop(0);
			$("#submit-success").html(success);
			$("#close-submit-success").click(function() {
				$("#submit-success").hide();
			})
		}

		/*
		console.log(title);
		console.log(fname);
		console.log(lname);
		console.log(email);
		console.log(query);
		console.log(message);
		console.log(validTitleName);	
		console.log(validFirstname);	
		console.log(validLastname);	
		console.log(validQuerySubject);	
		console.log(validMessageContent);
		console.log(errorArray);
		*/

	}
});