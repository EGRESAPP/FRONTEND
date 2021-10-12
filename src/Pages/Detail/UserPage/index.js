import React,{ useState, useEffect } from 'react';
import CardUserDetail from "../../../Components/Cards/CardDetail";
import "./style.scss";
import { useParams } from 'react-router';
import { getEntityById } from "../../../Lib/api";


export default function DetailUserPage(props){ 

      const { token } = props.token
      const [ userData, setUserData] = useState({})
      const userId = useParams()
      console.log(userId.id)

      useEffect( async () =>{
             let result = await getEntityById(token,"/graduates",userId.id)
             setUserData(result.data)
            console.log(result.data)
          },[])

        return(
              <>
              <CardUserDetail
               userData={userData}
              />
              </>
        );
};