import watch from './../Images/watch.jpeg'

const Inner = ({myObject}) => {
  return (
    <div className="w-full">
      <div  className=" min-h-[46px] mb-4">
        <h1 className="font-semibold text-3xl font-Montserrat leading-10 text-[#282B30]">{myObject.heading1} <span className="text-[#CD353E]">{myObject.heading2}</span></h1>
        <p className="text-[#282B30] text-lg font-semibold leading-7 mt-4">{myObject.paragraph}</p>
      </div>
      <div className="flex flex-row justify-between flex-wrap w-full">
        <div className="rounded-2xl min-h-custom max-w-custom w-custom flex flex-col justify-start mb-6 " >
          <img src={watch}  className="rounded-2xl w-[345px] h-[223px]" alt="Sorry" />
          <h1 className="mt-3 text-2xl font-Montserrat font-semibold leading-8 text-[#000000] ">{myObject.divheading}</h1>
          <p className="mt-3 font-Montserrat font-normal text-lg leading-7">{myObject.divpara}</p>
        </div>
        <div className="rounded-2xl min-h-custom max-w-custom w-custom flex flex-col justify-start mb-6" >
          <img src={watch}  className="rounded-2xl w-[345px] h-[223px]" alt="Sorry" />
          <h1 className="mt-3 text-2xl font-Montserrat font-semibold leading-8 text-[#000000] ">{myObject.divheading}</h1>
          <p className="mt-3 font-Montserrat font-normal text-lg leading-7">{myObject.divpara}</p>
        </div>
        <div className="rounded-2xl min-h-custom max-w-custom w-custom flex flex-col justify-start mb-6" >
          <img src={watch}  className="rounded-2xl w-[345px] h-[223px]" alt="Sorry" />
          <h1 className="mt-3 text-2xl font-Montserrat font-semibold leading-8 text-[#000000] ">{myObject.divheading}</h1>
          <p className="mt-3 font-Montserrat font-normal text-lg leading-7">{myObject.divpara}</p>
        </div>
        <div className="rounded-2xl min-h-custom max-w-custom w-custom flex flex-col justify-start mb-6" >
          <img src={watch}  className="rounded-2xl w-[345px] h-[223px]" alt="Sorry" />
          <h1 className="mt-3 text-2xl font-Montserrat font-semibold leading-8 text-[#000000] ">{myObject.divheading}</h1>
          <p className="mt-3 font-Montserrat font-normal text-lg leading-7">{myObject.divpara}</p>
        </div>
        <div className="rounded-2xl min-h-custom max-w-custom w-custom flex flex-col justify-start mb-6" >
          <img src={watch}  className="rounded-2xl w-[345px] h-[223px]" alt="Sorry" />
          <h1 className="mt-3 text-2xl font-Montserrat font-semibold leading-8 text-[#000000] ">{myObject.divheading}</h1>
          <p className="mt-3 font-Montserrat font-normal text-lg leading-7">{myObject.divpara}</p>
        </div>
        <div className="rounded-2xl min-h-custom max-w-custom w-custom flex flex-col justify-start mb-6" >
          <img src={watch}  className="rounded-2xl w-[345px] h-[223px]" alt="Sorry" />
          <h1 className="mt-3 text-2xl font-Montserrat font-semibold leading-8 text-[#000000] ">{myObject.divheading}</h1>
          <p className="mt-3 font-Montserrat font-normal text-lg leading-7">{myObject.divpara}</p>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center w-full min-h-[46px]">
        <button className="bg-[#CD353E] w-270 px-16 py-4  rounded-md font-Montserrat text-[white] gap-3">View More Blogs &gt;</button>
      </div>
    </div>
  )
}

export default Inner



