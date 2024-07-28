import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            role: 'admin'
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            password: Yup.string().required('Password is required')
        }),
        onSubmit: (values, { setSubmitting, setStatus }) => {
            login(values.username, values.password)
                .then(success => {
                    if (success) {
                        navigate('/');
                    } else {
                        setStatus('Invalid username or password');
                    }
                })
                .finally(() => {
                    setSubmitting(false);
                });
        }
    });
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow" style={{ border: 'none', borderRadius: '10px' }}>
                        <div className="card-header text-center" style={{ backgroundColor: '#343a40', color: '#f8f9fa' }}>
                            <h3 className="my-2">Login</h3>
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

                                <button type="submit" className="btn btn-primary w-100" disabled={formik.isSubmitting}>
                                    Login
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

export default Login;



    