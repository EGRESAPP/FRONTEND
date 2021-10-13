import React,{ useState, useEffect } from 'react';
import CardUserDetail from "../../../Components/Cards/CardDetail";
import "./style.scss";
import { useParams } from 'react-router';
import { getEntityById } from "../../../Lib/api";
import { useLocation } from 'react-router-dom';


export default function DetailUserPage(){ 

      const [ userData, setUserData] = useState({})
      const userId = useParams().id
      let location = useParams()
      
      useEffect( async () =>{
            const user = JSON.parse(localStorage.getItem('userData'));
            async function setData(token,url,id){
                  let result = await getEntityById(token,url,id)
                  console.log(result.data)
                  setUserData(result.data)
                  console.log(location)
            } 

            setData(user.token,`graduates`, userId)
            },[])
     

        return(
              <>
              <CardUserDetail
              userData={userData}
              /> 
              </>
        );
};