import React,{ useState, useEffect } from 'react';
import CardUserDetail from "../../../Components/Cards/CardDetail";
import "./style.scss";
import { useParams } from 'react-router';
import { getEntityById } from "../../../Lib/api";


export default function DetailUserPage(props){ 

      const { token } = props
      const [ userData, setUserData] = useState({})
      const userId = useParams()
      console.log(userId)

      useEffect( async () =>{
             let result = await getEntityById(token,"/graduates",userId)
             setUserData(result)
            console.log(result)
          },[])

        return(
              <>
              <h1>detalle usuario</h1>  
              <CardUserDetail/>
              </>
        );
};