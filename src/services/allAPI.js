import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

//guest user

// register api  - called by auth component by register button,
//  clicked,content-type :"Application/json"
  export const registerAPI = async (reqBody)=>{
     return await  commonAPI("POST",`${SERVERURL}/register`,reqBody)
  }

// login api
// homepage books api
// all caree api

// authorised user api- user

   //view all books
   //view single books
    //upload book
    // profile update
    // view selled books
    // purchased books
     // approve books


// authorised api- admin
   //add career
    // update admin
    // list users
    // approve books
       