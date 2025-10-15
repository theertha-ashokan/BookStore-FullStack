import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

//guest user

// register api  - called by auth component by register button,
//  clicked,content-type :"Application/json"
  export const registerAPI = async (reqBody)=>{
   console.log(reqBody);
   
     return await  commonAPI("POST",`${SERVERURL}/register`,reqBody)
  }

// login api
export const loginAPI = async (reqBody)=>{
  return await  commonAPI("POST",`${SERVERURL}/login`,reqBody)
}

// google login api
export const googleLoginAPI = async (reqBody)=>{
  return await  commonAPI("POST",`${SERVERURL}/google-login`,reqBody)
}



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
       