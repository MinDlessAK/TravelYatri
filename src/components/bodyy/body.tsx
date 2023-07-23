import ImgTravel1 from '~/components/media/travel1.jpg?jsx';
import ImgBeach from '~/components/media/beach.jpg?jsx';
import ImgMountain from '~//components/media/mountain.jpg?jsx';
import Navbar from "~/components/home/navbar";


export default function body() {
  return (
    <>
     <div class="flex flex-col h-screen bg-gradient-to-r from-slate-900 to-slate-700">
     <Navbar></Navbar>
   
     <div class="flex grow justify-center items-center flex-col gap-3">
        </div>
  </div>

  <div  class=" min-h-screen  bg-slate-950 ">

    <div class="flex flex-col h-screen  justify-center items-center gap-10">
    <div>
      <h1 class="text-cyan-500 text-4xl font-extrabold mt-10 ">Our Top Trips</h1>
    </div>

    <div>
      <p class="text-white font-serif   ">We have a few specail premotion for our faithfull trip</p>
    </div>

    <div class="flex  gap-20 ">

       <div class=" w-80 flex flex-col gap-3 p-1">
          <div class="grow">
            <ImgTravel1 class="w-full h-full cursor-pointer rounded-lg" />
          </div>
          <div>
            <h1 class="text-cyan-400 font-serif text-2xl">Travel</h1>
          </div>
          <div>
            <p class="text-white font-serif ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi velit iusto quam possimus dolores amet.</p>
          </div>
       </div>

       <div class=" w-80 flex flex-col gap-3 p-1">
          <div class="grow">
           <ImgBeach class="h-full w-full cursor-pointer rounded-lg" alt="" />
          </div>
          <div>
            <h1 class="text-cyan-400 font-serif text-2xl">Beach</h1>
          </div>
          <div>
            <p class="text-white font-serif ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi velit iusto quam possimus dolores amet.</p>
          </div>
       </div>

       <div class=" w-80 flex flex-col gap-3 p-1">
          <div class="grow ">
          <ImgMountain  class="h-full cursor-pointer w-full rounded-lg" alt="" />
          </div>
          <div>
            <h1 class="text-cyan-400 font-serif text-2xl">Mountain</h1>
          </div>
          <div>
            <p class="text-white font-serif ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi velit iusto quam possimus dolores amet.</p>
          </div>
       </div>
    </div>

    <div >
        <button  class="block px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white">See All</button>
    </div>
   </div>
   
   <div class="flex flex-col h-screen   justify-center items-center p-10">
          <div>
            <h1 class="font-extrabold text-cyan-400 text-4xl ">Our Services</h1>
          </div>

        <div class="flex gap-80 grow items-center justify-center">
           
           <div class="">
              <div>
                <h2 class=" font-serif text-white text-lg">Service1</h2>
              </div>
              <div>
                <h3 class="text-white font-serif text-6xl inline-block">Free</h3>
                <h4 class="text-cyan-400 font-serif text-6xl inline-block">Travel</h4>
             </div>
             <div class="pt-6">
               <span class="text-white font-serif text-4xl  block">Lorem ipsum, dolor sit amet  </span>
               <span class="text-white font-serif text-4xl  block">consectetur adipisicing elit.</span>
               <span class="text-white font-serif text-4xl  block">Amet, cum!</span>
             </div>
             <div class="pt-4">
               <button class="block px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white" >Read More</button>
             </div>
          </div>

          <div class="h-72 w-72 ">
          <ImgTravel1 alt="" class="h-full w-full rounded-2xl" />
          </div>

        </div>
    </div>


    <div class="flex flex-col h-screen   justify-center items-center p-10">
         

        <div class="flex gap-80 grow items-center justify-center">


          <div class="h-72 w-72 ">
              <ImgBeach alt="" class="h-full w-full rounded-2xl" />
          </div>
           
           <div class="">
              <div>
                <h2 class=" font-serif text-white text-lg">Service2</h2>
              </div>
              <div>
                <h3 class="text-white font-serif text-6xl inline-block">Resturent</h3>
                <h4 class="text-cyan-400 font-serif text-6xl inline-block">service</h4>
             </div>
             <div class="pt-6">
               <span class="text-white font-serif text-4xl  block">Lorem ipsum, dolor sit amet  </span>
               <span class="text-white font-serif text-4xl  block">consectetur adipisicing elit.</span>
               <span class="text-white font-serif text-4xl  block">Amet, cum!</span>
             </div>
             <div class="pt-4">
               <button class="block px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white" >Read More</button>
             </div>
          </div>

          

        </div>
    </div>

    <div class="flex flex-col h-screen   justify-center items-center p-10">

        <div class="flex gap-80 grow items-center justify-center">
           
           <div class="">
              <div>
                <h2 class=" font-serif text-white text-lg">Service3</h2>
              </div>
              <div>
                <h3 class="text-white font-serif text-6xl inline-block">Ocean Side</h3>
                <h4 class="text-cyan-400 font-serif text-6xl inline-block">Travel</h4>
             </div>
             <div class="pt-6">
               <span class="text-white font-serif text-4xl  block">Lorem ipsum, dolor sit amet  </span>
               <span class="text-white font-serif text-4xl  block">consectetur adipisicing elit.</span>
               <span class="text-white font-serif text-4xl  block">Amet, cum!</span>
             </div>
             <div class="pt-4">
               <button class="block px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white" >Read More</button>
             </div>
          </div>

          <div class="h-72 w-72 ">
          <ImgMountain alt="" class="h-full w-full rounded-2xl" />
          </div>

        </div>
    </div>
</div>

<div class="h-screen flex flex-col">

  <div class="flex grow ">
     <ImgBeach class="h-full w-full"/>
  </div>

  <div class="bg-slate-700 flex justify-center gap-8 p-5" >
    <div>
       <p class="text-white">
           travelyatri@gmail.com
       </p>
    </div>
    <div>
    <p class="text-white">+91 9832838742</p>
    </div>
  </div>

</div>
      
    </>
  )
}
