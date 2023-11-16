import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const SignUp = () => {
  const handleSignUp = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const password = form.password.value;
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    // Format the date as "YYYY-MM-DDTHH:mm:ss.sssZ"
    const formattedDate = `${year}-${month}-${day}`;
    const userData = {name, phone, password, status: 'active',Date:formattedDate, role:'student', photo:' '}
    console.log(userData);
    // post data on database
    fetch('http://localhost:5000/register',{
      method:"POST",
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data =>{
      // console.log('doctor', data);
      if(data.message == "already exisit"){
        alert('Already Exists')
        form.reset();
       }

     else if (data.insertedId) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Added Successfully',
          showConfirmButton: false,
          timer: 1500
    
        })       
      }})
     
  }
  return (
    <div className="mt-20 container mx-auto">

    {/* ---- */}

    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="text-center lg:text-left">

          <div className="w-1/2 mx-auto">
            {/* <Lottie animationData={typing} ></Lottie> */}
          </div>


        </div>
        <div className="card md:shrink-0 md:w-96 max-w-sm shadow-2xl bg-base-100">
          <h1 className="md:text-5xl text-center md:p-4 font-bold">Register now!</h1>
          <div className="card-body">
            {/* form */}
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text md:text-[20px]">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text md:text-[20px]">Phone Number</span>
                </label>
                <input type="text" placeholder="Phone" name="phone" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text md:text-[20px]">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>

            </form>
            <p>Already Have an account? 
              <Link className="text-green-500" to="/login"> Login </Link> </p>
          </div>
        </div>
      </div>
    </div>

  </div>
  );
};

export default SignUp;