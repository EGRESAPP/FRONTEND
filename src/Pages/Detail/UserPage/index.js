import React,{ useState, useEffect } from 'react';
import CardUserDetail from "../../../Components/Cards/CardDetail";
import "./style.scss";
import { useParams } from 'react-router';
import { getEntityById } from "../../../Lib/api";


export default function DetailUserPage(){ 

      const [ userData, setUserData] = useState({})
      const userId = useParams().id
      const userEntity = useParams().entity
      
      useEffect( () =>{
            const user = JSON.parse(localStorage.getItem('userData'));
            async function setData(token,url,id){
                  let result = await getEntityById(token,url,id)
                  console.log(result.data)
                  setUserData(result.data)
                  console.log(userEntity)
            } 

            setData(user.token,`${userEntity}`, userId)
            },[])

        return(
              <>
                  <CardUserDetail
                  userData={userData}
                  /> 
              </>
        );
};