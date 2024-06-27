
import { Fragment,  useState } from "react";
import { FaEye, FaEyeSlash,FaGithub, FaGoogle } from "react-icons/fa";
import "@lottiefiles/lottie-player";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Typewriter } from "react-simple-typewriter";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";




const SignUp = () => {
  const {creareUser,updateUserProfile,setLoading,googleSignIn,githubSignIn}  =useAuth();
  const navigate = useNavigate();
  const location = useLocation();
 const [show,setShow]=useState(false);
 const [check,setCheck]=useState(false);
// google sign in
const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setLoading(false);
        navigate(location?.state ? location.state : "/");
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500
          });
      })
      .catch((err) => {
        setLoading(false);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${err.message}`,
            // footer: '<a href="#">Why do I have this issue?</a>'
          });
      });
  };

  // github sign in
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        setLoading(false);
        navigate(location?.state ? location.state : "/");
         Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500
      });
      })
      .catch((err) => {
        setLoading(false);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${err.message}`,
            // footer: '<a href="#">Why do I have this issue?</a>'
          });
       
      });
  };


const handleSignUp = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const imageURL=form?.imageURL?.value;
    const email = form?.email?.value;
    const password = form?.password?.value;
    const check=form?.check?.checked;
    console.log(name,imageURL, email, password,check);
    
    // password
// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: " Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });

    return;
}
    
if(!check){
   
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "please accept our terms and condition",
        showConfirmButton: false,
        timer: 1500
      });
    console.log(check)

    return
}    
    
    
    creareUser(email, password)

.then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      updateUserProfile({displayName:name,photoURL:imageURL})
      .then(() => {
        setLoading(false)
        navigate(location?.state ? location.state : "/");
        Swal.fire({
            title: "User Create Successful",
            text: `Successful`,
            icon: "success",
          });
        form.reset();
      }).catch((error) => {
        setLoading(false)
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorMessage}`,
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      });
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: " Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
      setLoading(false)
    });
}

  
   
  
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
                    <Fragment>
            <div className="w-full md:w-1/2">
                <button  className="w-full flex justify-center items-center bg-blue-600 rounded py-4 px-5 mb-3">
                    <FaGithub onClick={handleGithubSignIn} className="text-white text-2xl" />
                    <span className="w-full text-center text-white">
                        Continue with Facebook
                    </span>
                </button>
            </div>
            <div className="w-full md:w-1/2">
                <button onClick={handleGoogleSignIn} type="button"   className="w-full flex justify-center items-center bg-red-500 rounded py-4 px-5 mb-3">
                    <FaGoogle className="text-white text-2xl" />
                    <span className="w-full text-center text-white">
                        Continue with Google
                    </span>
                </button>
            </div>
        </Fragment>
                    </div>
                    <div className="flex items-center max-w-lg justify-center lg:justify-start h-full">
                        <div className="w-full">
                            <h2 className="text-indigo-900 dark:text-white text-3xl md:text-4xl font-bold mb-3">
                             <span className="text-indigo-900  font-bold mb-3">
                            
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Welcome to Artistry Express!', 'Don`t have an account?',"Please SignUp!"]}
            loop={10}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
                            </h2>
                            
                            <div className="flex items-center mb-6 md:mb-12">
                                <p className="mb-0 mr-2 opacity-50"> have an account?</p>
                                <Link to='/login'>Please Login</Link>
                            </div>

                            {/* form */}
                            <form  onSubmit={handleSignUp}>
                
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
                        name="imageURL"
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
                    <div className="flex items-center">
                    <input
                        type={show ? "text" : "password"}
                        className="w-full bg-blue-50 dark:bg-slate-700 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                    />
                    <span className="-ml-8" onClick={()=>setShow(!show)}>{show ? <FaEyeSlash /> : <FaEye/>}</span>
                    </div>
                </div>
                <div className="mb-4">
                    <input type="checkbox" name="check" className="mr-2" id="check"  />
                    <label className="font-normal" htmlFor="check">
                        accept <Link to="/terms">Terms and Condition</Link>
                    </label>
                </div>
                <button className="bg-gray-900 bg-opacity-90 hover:bg-opacity-100 text-white px-7 py-3 rounded w-full">
                    Sign Up
                </button>
               
            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default SignUp;
