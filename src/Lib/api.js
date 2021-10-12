const axios = require('axios');
const baseUrl = "http://localhost:8080";


export async function getByEntity(token,url){
    return await axios.get(`${baseUrl}${url}`, { headers: {'Authorization': token} })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    }); 
}

export async function login(data){
  return await axios.post(`${baseUrl}/auth/login`,data)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    return error.response.data;
  });
}

export async function register(data,entity){
  return await axios.post(`${baseUrl}/${entity}`,data)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    return error.response.data;
  });
}

export async function getEntity(token,url){
  return await axios.get(`${baseUrl}${url}`,{headers: {'Authorization': token} })
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    return error.response.data;
  });
}

export async function getEntityById(token,url,id){
  return await axios.get(`${baseUrl}${url}/${id}`,{headers: {'Authorization': token} })
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    return error.response.data;
  });
}

export async function updateEntityById(token,url,body){
  return await axios.patch(`${baseUrl}${url}`,{headers: {'Authorization': token} },{body})
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    return error.response.data;
  });
}

export async function uploadImage(token,url,body){

  console.log(body)
  return await axios.put(`${baseUrl}${url}`,body)
  .then(function (response) {
    console.log("API response:",response)
    return response.data;
  })
  .catch(function (error) {
    console.log("API error:",error)
    return error;
  });
}