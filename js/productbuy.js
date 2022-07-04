/*Script for displaying date in productbuy page*/
function displaydate() 
{
	document.getElementById('date').innerHTML = Date();
	setTimeout(displaydate,50000)
}

	displaydate();