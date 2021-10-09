const axios = require('axios');
const baseUrl = "http://localhost:8080";


export async function getUsers(token,url){
    return await axios.get(`${baseUrl}${url}`, { headers: {'Authorization': token} });  
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

export async function getEntityById(token,url){
  return await axios.get(`${baseUrl}${url}`,{headers: {'Authorization': token} })
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    return error.response.data;
  });
}