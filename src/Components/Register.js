import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            role: 'users', // Default role is set to 'user'
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Required'),
            password: Yup.string()
                .required('Required'),
            role: Yup.string()
                .oneOf(['admin', 'user'], 'Invalid Role')
                .required('Required'),
        }),
        onSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
            
                axios.post('http://localhost:5000/users', {
                username: values.username,
                password: values.password,
                role: values.role,
            })
                .then(response => {
                    setStatus('success');
                    resetForm();
                    navigate('/login');
                })
                .catch(error => {
                    setStatus('error');
                })
                .finally(() => {
                    setSubmitting(false);
                });
        },
    });

    return (
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card shadow" style={{ border: 'none', borderRadius: '10px' }}>
                                <div className="card-header text-center" style={{ backgroundColor: '#343a40', color: '#f8f9fa' }}>
                                    <h3 className="my-2">Register</h3>
                                </div>
                                <div className="card-body" style={{ backgroundColor: '#f8f9fa' }}>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">Username</label>
                                            <input
                                                type="text"
                                                id="username"
                                                name="username"
                                                className="form-control"
                                                onChange={formik.handleChange}
                                                value={formik.values.username}
                                            />
                                            {formik.errors.username ? <div className="text-danger">{formik.errors.username}</div> : null}
                                        </div>
        
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                className="form-control"
                                                onChange={formik.handleChange}
                                                value={formik.values.password}
                                            />
                                            {formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                                        </div>
        
                                        <div className="mb-3">
                                            <label htmlFor="role" className="form-label">Role</label>
                                            <select
                                                id="role"
                                                name="role"
                                                className="form-control"
                                                onChange={formik.handleChange}
                                                value={formik.values.role}
                                            >
                                                <option value="">Select role</option>
                                                <option value="admin">Admin</option>
                                                <option value="user">User</option>
                                            </select>
                                            {formik.errors.role ? <div className="text-danger">{formik.errors.role}</div> : null}
                                        </div>
        
                                        <button type="submit" className="btn btn-primary w-100" disabled={formik.isSubmitting}>
                                            Register
                                        </button>
                                        {formik.status && formik.status.error ? <div className="text-danger mt-2">{formik.status.error}</div> : null}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        
        export default Register;