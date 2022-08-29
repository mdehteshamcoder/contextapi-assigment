import React from "react"
import { Box,Button } from '@chakra-ui/react'
import { AuthContext } from "../context/AuthContext";

export default function Navbar()
{
    const  { isAuth } = React.useContext(AuthContext);
    const  { Api } = React.useContext(AuthContext);
    const  { toggle } = React.useContext(AuthContext);
    return(

        <Box bg='blue' w='100%' p={4} textAlign='right' >
        {
            isAuth ?
             <Button onClick={() => {toggle()}} >Logout</Button> 
             : <Button onClick={() => {Api()}} >
                Login
                </Button>
        }
    </Box>
    )
}