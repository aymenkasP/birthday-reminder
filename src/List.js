import React from 'react';


export default function List({people}){
 return(
     <div>
    <h1>{people.map((person) => {
        const {id , name , age , image } = person;
        return <div key = {id} className='person'>
                <img src={image} alt={name} />
                <h4>{name} </h4>
                <p>{age} years </p>
              </div>
    })} </h1>
     </div>
 )   
}