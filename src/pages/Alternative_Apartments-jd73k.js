// For full API documentation, including code examples, visit https://wix.to/94BuAAs
import wixData from 'wix-data';
import { sendDailyEmail } from 'backend/sendEmail';

$w.onReady(function () {
	//TODO: write your page related code here...

});

export function input1_change(event) {
	updateDS();
}
export function input2_change(event) {
	updateDS(); 
}

function updateDS() {
	$w('#dataset1').setFilter(
    wixData.filter()
	.between("price", Number($w('#input1').value), Number($w('#input2').value))
	
      
  );
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function button3_click(event) {
	//Add your code for this event here: 
}

/**
*	Adds an event handler that runs when the mouse pointer is moved
 off of the element.
*	 @param {$w.MouseEvent} event
*/
export function button3_mouseOut(event) {
	 sendDailyEmail();
}