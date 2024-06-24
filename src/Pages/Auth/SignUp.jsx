
import { Fragment, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import "@lottiefiles/lottie-player";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const SignUp = () => {
    const SocialLoginButton = () => (
        <Fragment>
            <div className="w-full md:w-1/2">
                <button className="w-full flex justify-center items-center bg-blue-600 rounded py-4 px-5 mb-3">
                    <FaFacebook className="text-white text-2xl" />
                    <span className="w-full text-center text-white">
                        Continue with Facebook
                    </span>
                </button>
            </div>
            <div className="w-full md:w-1/2">
                <button className="w-full flex justify-center items-center bg-red-500 rounded py-4 px-5 mb-3">
                    <FaGoogle className="text-white text-2xl" />
                    <span className="w-full text-center text-white">
                        Continue with Google
                    </span>
                </button>
            </div>
        </Fragment>
    ); 

    const SignInForm = () => {
        const [validated, setValidated] = useState(false);
    
        const handleSubmit = (event) => {
            event.preventDefault();
            const name=event.target.name.value;
            const photoURL=event.target.photoURL.value;
            const email=event.target.email.value;
            const password=event.target.password.value;
            const user={name,photoURL,email,password};
            console.log(user);
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
    
            setValidated(true);
        };
    
        return (
            <form noValidate validated={validated} onSubmit={handleSubmit}>
                
                <div className="mb-4">
                    <label className="block mb-2 font-normal" htmlFor="name">
                       Input Your Name
                    </label>
                    <input
                        type="text"
                        className="w-full bg-blue-50 dark:bg-slate-700 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600"
                        id="name"
                        name="name"
                        placeholder="Enter Name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-normal" htmlFor="photoURL">
                       Input Your photoURL
                    </label>
                    <input
                        type="text"
                        className="w-full bg-blue-50 dark:bg-slate-700 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600"
                        id="photoURL"
                        name="photoURL"
                        placeholder="Enter photoURL"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-normal" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        type="text"
                        className="w-full bg-blue-50 dark:bg-slate-700 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600"
                        id="email"
                        name="email"
                        placeholder="Enter Email Address"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-normal" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-full bg-blue-50 dark:bg-slate-700 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                    />
                </div>
                <div className="mb-4">
                    <input type="checkbox" className="mr-2" id="remember-me" checked />
                    <label className="font-normal" htmlFor="remember-me">
                        Remember me
                    </label>
                </div>
                <button className="bg-gray-900 bg-opacity-90 hover:bg-opacity-100 text-white px-7 py-3 rounded w-full">
                    Log In
                </button>
                <button className="hover:text-blue-600 py-2 px-4 rounded-lg">
                    Forget your password?
                </button>
            </form>
        );
    };

    return (
        <section className="ezy__signin7 light py-14 md:py-24  bg-white dark:bg-[#0b1727] text-indigo-900 dark:text-white  ">
            <Helmet>
        <title>ArtistryExpress || SignUp</title>
        
      </Helmet>
        <div className="container px-4 mx-auto">
            <div className="grid grid-cols-3 gap-6 lg:gap-x-16 justify-content-between h-full">
                <div className="col-span-3 lg:col-span-1">
                    <div
                        className="bg-cover bg-center bg-no-repeat min-h-[150px] w-full rounded-2xl hidden lg:block h-full"
                        style={{
                            backgroundImage:
                                "url(https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600)",
                        }}
                    ></div>
                </div>
                <div className="col-span-3 lg:col-span-2 py-6 lg:py-24 mb-12 lg:mb-0">
                    <div className="flex flex-wrap md:flex-nowrap items-center gap-6 lg:mr-40 xl:mr-52 lg:mb-6">
                        <SocialLoginButton />
                    </div>
                    <div className="flex items-center max-w-lg justify-center lg:justify-start h-full">
                        <div className="w-full">
                            <h2 className="text-indigo-900 dark:text-white text-3xl md:text-4xl font-bold mb-3">
                            Welcome to Artistry Express!
                            </h2>
                            <div className="flex items-center mb-6 md:mb-12">
                                <p className="mb-0 mr-2 opacity-50"> have an account?</p>
                                <Link to='/login'>Please Login</Link>
                            </div>

                            <SignInForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default SignUp;
