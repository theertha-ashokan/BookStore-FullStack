//guest users

import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

//register api called by Auth component when register button clicked,By default -content-type:"application/json"
export const registerAPI = async (reqBody)=>{
  return await  commonAPI("POST",`${SERVERURL}/register`,reqBody)
}
//login api
export const loginAPI = async (reqBody)=>{
  return await  commonAPI("POST",`${SERVERURL}/login`,reqBody)
}
//google-login api
export const googleloginAPI = async (reqBody)=>{
  return await  commonAPI("POST",`${SERVERURL}/google-login`,reqBody)
}
//home page books api 
export const getHomeBooksAPI = async ()=>{
  return await  commonAPI("GET",`${SERVERURL}/home-books`)
}

// all career api
//authorised users api - user

//view all books - call from all books when page starts
export const getAllBooksAPI = async (search,reqHeader)=>{
  return await  commonAPI("GET",`${SERVERURL}/all-books?search=${search}`,{},reqHeader)
}
//view single book - called by view component.
export const getSingleBookAPI = async (bookId,reqHeader)=>{
  return await  commonAPI("GET",`${SERVERURL}/books/${bookId}/view`,{},reqHeader)
}

//upload single book
export const addBookAPI = async (reqBody,reqHeader)=>{
  return await  commonAPI("POST",`${SERVERURL}/add-book`,reqBody,reqHeader)
}

// All user upload books-profile
export const getAllUserUploadBooksAPI = async (reqHeader)=>{
  return await  commonAPI("GET",`${SERVERURL}/user-books`,{},reqHeader)
}

// All user purchased  books-profile
export const getAllUserPurchasedBooksAPI = async (reqHeader)=>{
  return await  commonAPI("GET",`${SERVERURL}/user-bought-books`,{},reqHeader)
}

// All user purchased  books-profile
export const removeUserUploadBookAPI = async (bookId,reqHeader)=>{
  return await  commonAPI("DELETE",`${SERVERURL}/user-books/${bookId}/remove`,{},reqHeader)
}

// usser proflr update
export const updateUserProfileAPI = async (reqBody,reqHeader)=>{
  return await  commonAPI("PUT",`${SERVERURL}/user-profile/edit/`,reqBody,reqHeader)
}

// Authorised user Api-admin------------------------------------------------------------------------------------------

//list users -called by admin collection component
export const getAllUsersAPI = async (reqHeader)=>{
  return await  commonAPI("GET",`${SERVERURL}/all-user`,{},reqHeader)
}

// LIST all books

export const listAllBooksAPI = async (reqHeader)=>{
  return await  commonAPI("GET",`${SERVERURL}/admin-all-books`,{},reqHeader)
}


/// approve books
export const updateBookStatusAPI = async (reqBody, reqHeader) => {
  return await commonAPI("PUT", `${SERVERURL}/admin/book/approve`, reqBody, reqHeader)
}

//update admin
//update admin
export const updateAdminProfileAPI = async (reqBody,reqHeader)=>{
  return await  commonAPI("PUT",`${SERVERURL}/admin-profile/edit`,reqBody,reqHeader)
}

//profile update
//view selled book
//purchased books
//approved books

//authorised users api - admin
//add carreer


//approve books