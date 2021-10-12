import React,{ useState, useEffect } from 'react';
import CardUserDetail from "../../../Components/Cards/CardDetail";
import "./style.scss";
import { useParams } from 'react-router';
import { getEntityById } from "../../../Lib/api";


export default function DetailUserPage(){ 

      const [ userData, setUserData] = useState({})
      const userId = useParams()
      
      useEffect( async () =>{
            const user = JSON.parse(localStorage.getItem('userData'));
            let result = await getEntityById(user.token,"graduates",userId.id)
            console.log(result.data)
            setUserData(result.data)
            },[])
     

        return(
              <>
              <CardUserDetail
              userData={userData}
              /> 
              </>
        );
};