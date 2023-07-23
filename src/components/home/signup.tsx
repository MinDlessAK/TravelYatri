
export default function signup() {
  return (
    <>

        <div class="bg-white flex rounded-xl w-80 flex-col gap-6 p-4">
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
          <button class="rounded-full bg-cyan-500 text-white w-full h-10 hover:scale-110 transition-all duration-300 ease-in-out  font-semibold">Signup Now</button>
        </div>
        <div class="flex justify-center">
          Already have an account?
          <a href="/demo/login" id="login" class="text-cyan-400 hover:underline ml-1">Login</a>
        </div>
      </div>
      
    </>
  )
}
