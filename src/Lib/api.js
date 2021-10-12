const axios = require('axios');
<<<<<<< HEAD
const baseUrl = "https://egresapp-api-funny-kookaburra-ej.mybluemix.net";
=======
const baseUrl = "https://egresapp-api-funny-kookaburra-ej.mybluemix.net/";
>>>>>>> 9f1a97e49ebdbc072788d24caf3838033f4b8ff4


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
  return await axios.get(`${baseUrl}/${url}/${id}`,{headers: {'Authorization': token} })
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    return error.response.data;
  });
}

export async function updateEntityById(token,url,data){

  const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization':token,
    }
  }
  return await axios.patch(`${baseUrl}${url}`,data,config)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    return error.response.data;
  });
}

export async function uploadImage(token,url,body){

  const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization':token,
    }
  }

  const data = new FormData();

  data.append('avatar',body.avatar);
  data.append('email',body.email)

  return await axios.put(`${baseUrl}${url}`,data,config)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    return error.response.data;
  });
}