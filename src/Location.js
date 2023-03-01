import { useEffect, useState,React } from  'react';
function Location(props){

    const [users,setUsers]=useState([]);

    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.watchPosition((position)=> {
                fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`)
                .then((response)=>{return response.json()})
                .then((res)=>setUsers(res));

            })
        }
        // else{
        //     alert("hello");
        // }
    },[])
    return(
        <div className='home'>
            {
                props.locations.map((location) => {
                    return (

                        <>
                        {

                        users.locality===location
                        ?<p>{ users.locality}</p>
                        :null
                        }

                        </>


                    );

                })
            }


        </div>
    )
}
export default Location;