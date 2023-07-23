import { Link } from "@builder.io/qwik-city";

export default function navbar() {
  return (
    <>
         <div class=" bg-red-500 h-14 w-full flex justify-between items-center p-3 gap-3  fixed shadow-6xl  bg-opacity-0  backdrop-blur-xl ">
      <div class="">
        <a href="/demo/travelyatri" class="text-cyan-300 font-extrabold text-2xl ml-10">TravelYatri</a>
      </div>
      <div class="">
        <ul>
          <li class="lg:space-x-20 space-x-6 text-xl lg:flex hidden">
            <a href="#" class="text-white hover:underline hover:text-cyan-400">Home</a>
            <a href="#" class="text-white hover:underline hover:text-cyan-400">Trips</a>
            <a href="#" class="text-white hover:underline hover:text-cyan-400">Services</a>
            <a href="#" class="text-white hover:underline hover:text-cyan-400">Contact</a>
          </li>
        </ul>
      </div>
      <div class="mr-10">
        <Link id="form-open" href="/demo/login" class="block font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white hover:scale-110 transition-all duration-300 ease-in-out ">Login</Link>
      </div>
    </div>
      
    </>
  )
}
