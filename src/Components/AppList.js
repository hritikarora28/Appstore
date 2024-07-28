import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../Context/AuthContext";

function AppList() {
    const [applications, setApplications] = useState([]);
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetchApplications();
    }, []);

    useEffect(() => {
        fetchApplications();
    }, [applications]);
    
    const fetchApplications = () => {
        axios.get('http://localhost:5000/applications')
            .then(response => {
                setApplications(response.data);
                console.log("Fetched Applications:", response.data);
            })
            .catch(error => {
                console.log('There was an error fetching the applications data!', error);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/applications/${id}`)
            .then(() => {
                fetchApplications();
            })
            .catch(error => {
                console.log('There was an error deleting the application data!', error);
            });
    };

    const handleUpdate = (id) => {
        navigate(`/update/${id}`);
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">App List</h2>
            <div className="row">
                {applications.map(application => (
                    <div className="col-md-4 mb-4" key={application.id}>
                        <div className="card h-100">
                            <img src={application.image} className="card-img-top" height={250} alt={application.name} />
                            <div className="card-body">
                                <h5 className="card-title">{application.name}</h5>
                                <p className="card-text">Description: {application.description}</p>
                                <p className="card-text">Release date: {application.release_date}</p>
                                <p className="card-text">Version: {application.version}</p>
                                <p className="card-text">Ratings: {application.ratings}</p>
                                <p className="card-text">Genre: {application.genre}</p>
                                {user?.role === 'admin' && (
                                    <>
                                        <button 
                                            type="button" 
                                            className="btn btn-danger me-2" 
                                            onClick={() => handleDelete(application.id)}
                                        >
                                            Delete
                                        </button>
                                        <button 
                                            type="button" 
                                            className="btn btn-primary" 
                                            onClick={() => handleUpdate(application.id)}
                                        >
                                            Update
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AppList;