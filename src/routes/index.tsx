
import Navbar from "~/components/home/navbar";

// import ImgBg from '~/media/bg.jpg?jsx';
export default () => {
  
  return (
    <>
{/* 
 <div class=" flex flex-col min-h-screen bg-gradient-to-r from-slate-900 to-slate-700">

   <div class=" h-14  w-full  flex justify-between items-center p-3 gap-3 ">
      <div class="">
        <a href="#"  class="text-cyan-300 font-extrabold text-2xl ml-10 ">TravelYatri</a>
      </div>
       <div class="">
        <ul >
          <li class="lg:space-x-20 space-x-6 text-xl">
            <a href="#"  class="text-white hover:underline hover:text-cyan-400">Home</a>
            <a href="#"  class="text-white hover:underline hover:text-cyan-400">Trips</a>
            <a href="#"  class="text-white hover:underline hover:text-cyan-400">Services</a>
            <a href="#"  class="text-white hover:underline hover:text-cyan-400">Contact</a>
          </li>
         </ul>
        </div>
         <div class="mr-10">
           <button id="form-open" class="block px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white">Login</button>
          </div>
    </div>
    <div class="flex grow justify-center items-center flex-col gap-3">
      <div class="bg-white flex  rounded-xl w-80 flex-col gap-6 p-4">
              <div class="font-bold text-2xl flex justify-center">
                <h2>Login</h2>
              </div>
                <div>
                 <input type="email" placeholder="Enter your email" required class="border-b focus:outline-none focus:border-black w-full" />
                </div>
            
               <div>
                 <input type="password" placeholder="Enter your password" required class="border-b focus:outline-none focus:border-black w-full" />
                </div>

               
              <div class="flex justify-between">
                 <span class="checkbox">
                  <input type="checkbox" id="check"  class="mr-1"/>
                  <label for="check">Remember me</label>
                </span>
                <a href="#" class="text-cyan-400 hover:underline">Forgot password?</a>
            </div>


            <div class="flex">
                <button class="rounded-full bg-cyan-500 text-white w-full h-10">Login Now</button>
            </div>
            <div class="flex justify-center">
              Don't have an account? 
            <a href="#" id="signup" class="text-cyan-400 hover:underline ml-1">Signup</a>
            </div>
        </div>
        <div class="bg-white flex  rounded-xl w-80 flex-col gap-6 p-4">

              <div class="font-bold text-2xl flex justify-center">
                <h2>Signup</h2>
              </div>

                <div>
                 <input type="email" placeholder="Enter your email" required class="border-b focus:outline-none focus:border-black w-full" />
                </div>
            
               <div>
                 <input type="password" placeholder="Create password" required class="border-b focus:outline-none focus:border-black w-full" />
                </div>

            <div>
                 <input type="password" placeholder="Confirm password" required class="border-b focus:outline-none focus:border-black w-full" />
            </div>

            <div class="flex">
                <button class="rounded-full bg-cyan-500 text-white w-full h-10">Signup Now</button>
            </div>

            <div class="flex justify-center">
              Already  have an account? 
            <a href="#" id="signup" class="text-cyan-400 hover:underline ml-1">Login</a>
            </div>
        </div>
      </div>
    
  </div> */}



  <div class="flex flex-col min-h-screen bg-gradient-to-r from-slate-900 to-slate-700">
  <Navbar></Navbar>
   
    <div class="flex grow justify-center items-center flex-col gap-3">
      
    </div>
  </div>

  </>
  );
};

  


