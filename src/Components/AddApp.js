import { useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { version } from 'react';




function AddApp(){
    const formik = useFormik(
        {
            initialValues: {
                img:'',
                name:'',
                description:'',
                releaseDate:'',
                version:'',
                ratings:'',
                genre:'',
                id:'',
                
                
            },
            validationSchema: Yup.object({
                img:Yup.string().required("Image is required"),
                name: Yup.string().min(5, 'Name atlease should have 5 characters').required('Name of the app in required'),
                releaseDate: Yup.date().required('Date is Required'),
                ratings: Yup.number().min(1,'Rating atleast be zero').required('Rating is reuired'),
                version:Yup.number().required("Version is required"),
                id:Yup.string().required("Id is required")
                
            })
            ,
            onSubmit:(values , {setSubmitting, resetForm , setStatus})=> {
                axios.post('http://localhost:5000/applications',values)
                    .then(response => {
                        setStatus('success');
                        resetForm();
                    })
                    .catch(error => {
                        setStatus('error');
                    })
                    .finally(()=>{
                        setSubmitting(false);
                    });
            },
        });




    return (
        <div className='container mt-4'>
            <h2>Add New Application</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='img' className='form-label'>Image URL</label>
                    <input
                        id="img"
                        name="img"
                        type="text"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.img}
                        data-testid="img"
                    />


                    {
                        formik.touched.img && formik.errors.imag ? <div className='text-danger'>{formik.errors.img}</div>
                        : null


                    }  
                </div>




                <div className='mb-3'>
                    <label htmlFor='name' className='form-label'>Name</label>
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
                        data-testid="price"
                    />


                    {
                        formik.touched.description && formik.errors.description ? <div className='text-danger'>{formik.errors.description}</div>
                        : null


                    }  
                </div>




                <div className='mb-3'>
                    <label htmlFor='releaseDate' className='form-label'>Release-Date</label>
                    <input
                        id="releaseDate"
                        name="releaseDate"
                        type="date"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}


                        value={formik.values.mileage}
                        data-testid="mileage"
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
                        data-testid="color"
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
                        data-testid="seats"
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
                        data-testid="fuel"
                    />


                    {
                        formik.touched.genre && formik.errors.genre ? <div className='text-danger'>{formik.errors.genre}</div>
                        : null


                    }  
                </div>
                <div className='mb-3'>
                    <label htmlFor='description' className='form-label'>Id</label>
                    <input
                        id="id"
                        name="id"
                        type="text"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.id}
                        data-testid="price"
                    />


                    {
                        formik.touched.id && formik.errors.id ? <div className='text-danger'>{formik.errors.id}</div>
                        : null


                    }  
                </div>











                <button  type='submit' className='btn btn-primary' disabled={formik.isSubmitting}>
                    Add
                </button>




                {
                    formik.status && formik.status ===  'success' && (
                        <span data-testid='response' className='text-success' >Success</span>
                    )
                }


                {
                    formik.status && formik.status ===  'error' && (
                        <span data-testid='response' className='text-danger' >Error</span>
                    )


                }




            </form>
        </div>
    )
}


export default AddApp;
