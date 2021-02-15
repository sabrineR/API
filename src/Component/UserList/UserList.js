import axios from 'axios';
import React , {useState,useEffect}from 'react';
import { Card,Button } from "react-bootstrap";
import { Link } from 'react-router-dom';


const UserList = () => {

    const [user, setUser] = useState([]);

    const getUsers = async () => {
        try {
          const res = await axios.get("https://jsonplaceholder.typicode.com/users");
          console.log(res);
          setUser(res.data);
        } catch (err) {
          console.log("Error", err);
        }
      };
    
      useEffect(() => {
         getUsers();
      }, [])
   

    return (
        <div style={{display:"flex" , flexWrap:"wrap",
        justifyContent:"space-evenly",textAlign:"center"}}>
         {user.map((el,i)=>
         <Card key = {i} style={{ width: '18rem' ,marginBottom:"10px"}}>
         <Card.Img variant="top" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" />
         <Card.Body>
           <Card.Title>{el.name} {el.username}</Card.Title>
      
           <Link to={`/Profil/${el.id}`}>
           <Button variant="primary">See Posts</Button>
           </Link>
         </Card.Body>
       </Card>
         
         )}
        </div>
    )
}

export default UserList
