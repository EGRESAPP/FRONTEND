const axios = require('axios');
const BASE_URL = "http://localhost:8080";


export const getUsersByRole = async (token, role, queries) => {  
  
  let url;
  if(queries)
    url = `${BASE_URL}/users?role=${role}&${queries}`
  else
    url = `${BASE_URL}/users?role=${role}`

  console.log(url)
  let result = await fetch(url, {
    method:'GET',
    headers: {
      Authorization: token,
    },
  });
  
  return await result.json();
   
};

export async function getUsers(token,url){
    return await axios(BASE_URL+url, { headers: {'Authorization': token} });  
}

