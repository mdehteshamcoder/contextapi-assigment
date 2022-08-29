import React from "react";
import { AuthContext } from "../context/AuthContext";
import { Box, Button } from '@chakra-ui/react';

export default function ShowUser () {
    const { tokenNumber } = React.useContext(AuthContext);
    const  {Auth } = React.useContext(AuthContext);
    const  { loading } = React.useContext(AuthContext);

    return(
        loading ? (<Box textAlign='center'><Button isLoading ></Button></Box>) :
        (Auth ? (<Box p={4} textAlign='center' bg ="red"  width="300px" >{`Token is : ${tokenNumber} -
         Login Status : ${Auth}`}</Box>) : (<Box p={4} textAlign='center' >
            {`Login Status is : ${Auth}`}</Box>))
    )
}
