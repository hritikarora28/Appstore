import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function About() {

    const [apps, setApp] = useState([]);
    // const navigate = useNavigate();
 
    useEffect(() => {
        fetchApp();
        
    }, []);
    function fetchApp(){
        axios.get('http://localhost:5000/applications')
            .then(response => {
                setApp(response.data);
            })
            .catch(error => {
                console.log('There was an error fetching the vehicles data!', error);
            });
    }


   
    function handleDelete(id){
        axios.delete(`http://localhost:5000/applications/${id}`)
        .then(()=>{
            fetchApp();
        })
        .catch(error=>{
            console.log('There was an error deleting the vehicle data!',error);
        })
    }
    // function handleUpdate(id) {
    //     navigate(`/update-vehical/${id}`);
    // }


    return (
        <div className="container mt-4">
            <h2 className="mb-4">App List</h2>
            {/* <AddVehicle></AddVehicle> */}
            <div className="row">
                {apps.map(app => (
                    <div className="col-md-4 mb-4" key={app.id}>
                        <div className="card h-100">
                            {/* <img src={vehicle.image} className="card-img-top" height={250} alt={vehicle.name} /> */}
                            <div className="card-body">
                                <h5 className="card-title">{app.name}</h5>
                                <p className="card-text">Price: ${app.description}</p>
                                <p className="card-text">Mileage: {app.releaseDate}</p>
                                <p className="card-text">Seats: {app.version}</p>
                                <p className="card-text">Color: {app.ratings}</p>
                                <p className="card-text">Fuel: {app.genre}</p>
                                
                                <button type="button" className="btn btn-danger me-2" onClick={()=>handleDelete(app.id)}>Delete</button>
                                {/* <button type="button" className="btn btn-primary" onClick={() => handleUpdate(vehicle.id)}>Update</button> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default About;
