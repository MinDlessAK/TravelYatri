export default function getStart() {
  return (
    <>
      <div class="bg-gradient-to-r from-sky-600 to-cyan-400 bg-clip-text text-transparent text-6xl font-extrabold ">
             Getting Started
          </div>
          <div class="space-x-5">
          <a href="/demo/signup" class=" font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white hover:scale-110 transition-all duration-300 ease-in-out  ">Signup as Host</a>
         <a  href="/demo/signup" class=" font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white hover:scale-110 transition-all duration-300 ease-in-out ">Signup as User</a>
        
         </div>
    </>
  )
}
