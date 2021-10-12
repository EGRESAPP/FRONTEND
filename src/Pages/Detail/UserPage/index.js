import React,{ useState, useEffect } from 'react';
import CardUserDetail from "../../../Components/Cards/CardDetail";
import "./style.scss";
import { useParams } from 'react-router';
import { getEntityById } from "../../../Lib/api";


export default function DetailUserPage(props){ 

      const [ userData, setUserData] = useState({})
      const userId = useParams()
      

      useEffect( async () =>{
            const user = JSON.parse(localStorage.getItem('userData'));
            console.log(user)
             let result = await getEntityById(user.token,"graduates",userId.id)
             console.log(result.message)
          },[])

        return(
              <>
              <h1>detalle usuario</h1>  
              <CardUserDetail/>
              </>
        );
};