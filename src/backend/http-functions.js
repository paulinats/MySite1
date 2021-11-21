import {ok, notFound, serverError} from 'wix-http-functions';
import wixData from 'wix-data';
import { sendToEmailAddress } from 'sendEmail';

export function get_sendemail(request) {
  console.log("entered");
  // URL looks like: https://www.mysite.com/_functions/myFunction/John/Doe
  let options = {
    "headers": {
      "Content-Type": "application/json"
    }
  };
//let emailAddress = request.query.email;
//sendToEmailAddress(emailAddress);
return ok(options);
}