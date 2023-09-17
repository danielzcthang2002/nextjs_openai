

function About (){
  return (
    <section id="about" className='flex flex-col items-center'>
  <div className='font-bold text-[1.5rem]'>ABOUT US</div>
  <div className="flex justify-center items-center text-[1rem] py-5 w-[50%]">
    <i>Empowering the Future with Artificial Intelligence </i>
  </div>
  <div className="grid grid-cols-2 grid-rows-1 w-full my-4 pb-5">
    <div className="flex flex-col gap-4 text-center col-span-1 w-full">
      <h1 className='text-[1rem] font-bold uppercase'>Our Slogan</h1>
      <p className="italic">AI is everywhere already. </p>
      <p className="italic">Let&apos;s use it for good.</p>
    </div>
    <div className="flex flex-col items-center gap-4 text-center col-span-1 w-full">
      <h1 className='text-[1rem] font-bold uppercase'>Our Mission</h1>
      <p className="italic text-justify w-[20rem]">Our mission is to harness the power of artificial intelligence to solve complex problems and enhance human experiences. We are committed to advancing technology and making it accessible to everyone.</p>
    </div>
  </div>
  <div className="font-bold text-[1.5rem] uppercase pb-10">Our Team</div>
  <div className="grid grid-cols-2 w-full gap-4">
    <div className="border-[1px] border-blue-500 bg-slate-900 rounded-2xl col-span-1 w-full py-7 flex flex-col items-center">
      <div className="avatar">
        <div className="border-[3px] border-blue-500 rounded-full w-[12rem] h-[12rem] overflow-hidden">
          <img src="/images/suluck.jpg" />
        </div>
      </div>
      <div className="flex flex-col w-[22rem] p-5">
        <h1 className="font-bold text-[1.25rem] text-center">Daniel Za Cung Thang</h1>
        <p className="italic text-center underline">Technical Architect</p>
        <p className="text-justify">
          Meet Daniel, an accomplished leader with over two years of experience in the field of full stack development. Daniel has consistently demonstrated his commitment to pushing the boundaries of what human and artificial intelligence (AI) can achieve when combined.
        </p>
      </div>
    </div>
    <div className="border-[1px] border-blue-500 bg-slate-900 rounded-2xl col-span-1 w-full py-7 flex flex-col items-center">
      <div className="avatar">
        <div className="border-[3px] border-blue-500 rounded-full w-[12rem] h-[12rem] overflow-hidden">
          <img src="/images/suluck.jpg" />
        </div>
      </div>
      <div className="flex flex-col w-[22rem] p-5">
        <h1 className="font-bold text-[1.25rem] text-center">Su Luck Htoo</h1>
        <p className="italic text-center underline">Creative Visionary</p>
        <p className="text-justify">
          Meet Su Luck, an artist responsible for stunning digital landscape. With an impressive portfolio and over two years of design experience, Su Luck has a knack for turning ideas into incredible visuals.
        </p>
      </div>
    </div>
  </div>
</section>

  )
}

export default About