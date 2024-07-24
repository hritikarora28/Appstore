import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom';
// import { useNavigate,  } from 'react-router-dom';
import { useEffect, useState,} from 'react';

function Update() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [app, setApp] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/applications/${id}`)
            .then(response => {
                setApp(response.data);
            })
            .catch(error => {
                console.log('There was an error fetching the app data!', error);
            });
    }, [id]);


    const formik = useFormik({
        enableReinitialize: true,

        initialValues: {
            // image: app?.image || '',
            name: app?.name || '',
            description: app?.description|| '',
            releaseDate: app?.releaseDate|| '',
            version: app?.version|| '',
            ratings: app?.ratings|| '',
            genre: app?.genre|| ''
            // gear: app?.gear || '',
            // description: app?.description || ''
        },
        validationSchema: Yup.object({
            // image: Yup.string().required('Image URL is required'),
            name: Yup.string().min(3, 'App name must be at least 3 characters').required('App name is required'),
            version: Yup.number().min(0, 'version must be greater than 0').required('Version is required'),
            ratings: Yup.number().min(0, 'Ratings must be greater than 0').max(5, 'Ratings must be less than 5').required('Ratings is required'),
            genre: Yup.string().min(3,'Genre must be at least 3 characters').required('Genre is required'),
        })
        ,
        onSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
            axios.put(`http://localhost:5000/applications/${id}`, values)
                .then(response => {
                    setStatus('success');
                    resetForm();
                    navigate('/about');

                })
                .catch(error => {
                    setStatus('error');
                })
                .finally(() => {
                    setSubmitting(false);
                });
        }
    });




    return (
        <div className='container mt-4'>
            <h2>Add New App</h2>
            <form onSubmit={formik.handleSubmit}>
                {/* <div className='mb-3'>
                    <label htmlFor='image' className='form-label'>Image URL</label>
                    <input
                        id="image"
                        name="image"
                        type="text"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.image}
                        data-testid="image"
                    />


                    {
                        formik.touched.image && formik.errors.image ? <div className='text-danger'>{formik.errors.image}</div>
                            : null


                    }
                </div> */}




                <div className='mb-3'>
                    <label htmlFor='name' className='form-label'>App Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        data-testid="name"
                    />


                    {
                        formik.touched.name && formik.errors.name ? <div className='text-danger'>{formik.errors.name}</div>
                            : null


                    }
                </div>




                <div className='mb-3'>
                    <label htmlFor='description' className='form-label'>Description</label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                        data-testid="description"
                    />


                    {
                        formik.touched.description && formik.errors.description ? <div className='text-danger'>{formik.errors.description}</div>
                            : null


                    }
                </div>




                <div className='mb-3'>
                    <label htmlFor='releaseDate' className='form-label'>Release Datee</label>
                    <input
                        id="releaseDate"
                        name="releaseDate"
                        type="date"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}


                        value={formik.values.releaseDate}
                        data-testid="releaseDate"
                    />


                    {
                        formik.touched.releaseDate && formik.errors.releaseDate ? <div className='text-danger'>{formik.errors.releaseDate}</div>
                            : null


                    }
                </div>




                <div className='mb-3'>
                    <label htmlFor='version' className='form-label'>Version</label>
                    <input
                        id="version"
                        name="version"
                        type="number"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.version}
                        data-testid="version"
                    />


                    {
                        formik.touched.version && formik.errors.version ? <div className='text-danger'>{formik.errors.version}</div>
                            : null


                    }
                </div>




                <div className='mb-3'>
                    <label htmlFor='ratings' className='form-label'>Ratings</label>
                    <input
                        id="ratings"
                        name="ratings"
                        type="number"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.ratings}
                        data-testid="ratings"
                    />


                    {
                        formik.touched.ratings && formik.errors.ratings ? <div className='text-danger'>{formik.errors.ratings}</div>
                            : null


                    }
                </div>




                <div className='mb-3'>
                    <label htmlFor='genre' className='form-label'>Genre</label>
                    <input
                        id="genre"
                        name="genre"
                        type="text"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.genre}
                        data-testid="genre"
                    />


                    {
                        formik.touched.genre && formik.errors.genre ? <div className='text-danger'>{formik.errors.genre}</div>
                            : null


                    }
                </div>




                {/* <div className='mb-3'>
                    <label htmlFor='gear' className='form-label'>Gear</label>
                    <input
                        id="gear"
                        name="gear"
                        type="text"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.gear}
                        data-testid="gear"
                    />


                    {
                        formik.touched.gear && formik.errors.gear ? <div className='text-danger'>{formik.errors.gear}</div>
                            : null


                    }
                </div>




                <div className='mb-3'>
                    <label htmlFor='description' className='form-label'>Description</label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                        data-testid="description"
                    />


                    {
                        formik.touched.description && formik.errors.description ? <div className='text-danger'>{formik.errors.description}</div>
                            : null


                    }
                </div>


 */}

                <button type='submit' className='btn btn-primary' disabled={formik.isSubmitting}>
                    Submit
                </button>




                {
                    formik.status && formik.status === 'success' && (
                        <span data-testid='response' className='text-success' >Success</span>
                    )
                }


                {
                    formik.status && formik.status === 'error' && (
                        <span data-testid='response' className='text-danger' >Error</span>
                    )


                }




            </form>
        </div>
    )
}


export default Update;