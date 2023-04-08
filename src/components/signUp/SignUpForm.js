import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './Form'
import IMG from '../Images/ag1.png'


const SignUpForm = () => {

    let [FormValue, setFormValue] = useState({
        email: '',
        contact: '',
        password: '',
        confirm_password: '',
    });
    const [FormError, setFormError] = useState({});
    const [submit, setSubmit] = useState(false);
    const [IsExist, setIsexist] = useState('');

    // Handling the form Validation
    const handleValidation = (event) => {
        const { name, value } = event.target;
        setFormValue({ ...FormValue, [name]: value })
    }

    // Handling the Form Submition
    const SubmitForm = (event) => {
        event.preventDefault();

        setFormError(FormValidation(FormValue));
        setSubmit(true);
    }

    // Validate the form input
    const FormValidation = (value) => {
        const errors = {};

        // Check all the inputs are correct or not
        if (!value.email.includes('@')) {
            errors.email = 'border-2 border-red-500'
        }
        if (!value.contact) {
            errors.contact = 'border-2 border-red-500'
        }
        if (!value.password) {
            errors.password = 'border-2 border-red-500'
        }
        if (!value.confirm_password) {
            errors.confirm_password = 'border-2 border-red-500'
        } else {
            if (value.confirm_password !== value.password) {
                errors.confirm_password = 'border-2 border-red-500'
            }
        }

        return errors;
    }

    useEffect(() => {
        if (Object.keys(FormError).length === 0 && submit) {
            delete FormValue.confirm_password;
            console.log(FormValue);
            // post request for signup form !!
            // add toast to show that user has signed up !!
            toast.success("SignUp Success", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }, [FormError, submit]);

    return (
        <>
            <div className="signup_conatiner fixed bg-white w-[100%] h-[100vh] overflow-scroll md:overflow-hidden z-30 top-0 left-0">
                <div className=''>
                    <img src={IMG} alt="Loading..." className='w-full h-auto md:w-full md:h-[100vh] object-cover' />
                </div>
                <div className="SignUpForm absolute top-[15%] w-full m-auto rounded-lg">
                    <Form
                        FormValue={FormValue}  /* get the values from each input */
                        handleValidation={handleValidation}  /* trigger the input section when any changes occurs */
                        SubmitForm={SubmitForm}
                        FormError={FormError}
                        IsExist={IsExist}
                    />
                </div>
            </div>
            <ToastContainer position="top-right"
                autoClose={1000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"
            />
        </>
    )
}

export default SignUpForm
