import Rating from '@mui/material/Rating';

function Card() {
  // const r1 = <Rating name="half-rating-read" defaultValue={2} precision={0.5} readOnly />
  // const therapists = [
  //   {
  //     name : "Dr. Veronica Smith",
  //     about : "clinical psychologist (PhD)",
  //     exp : "11-15 years of experience.",
  //     location : "Dwarka, Delhi",
  //     fees : "₹1500 consultation fee",
  //   },
  //   {
  //     name : "Dr. Veronica Smith",
  //     about : "clinical psychologist (PhD)",
  //     exp : "11-15 years of experience.",
  //     location : "Dwarka, Delhi",
  //     fees : "₹1500 consultation fee",
  //   },
  //   {
  //     name : "Dr. Veronica Smith",
  //     about : "clinical psychologist (PhD)",
  //     exp : "11-15 years of experience.",
  //     location : "Dwarka, Delhi",
  //     fees : "₹1500 consultation fee",
  //   },
  // ]

  return (
    <div className='flex justify-evenly bg-white shadow-lg rounded-3xl mx-20 my-14'>
      <div>
        <img src="/Therapist/c1.svg" alt="therapist" className=' my-14 ' />
      </div>
      <img src="/Therapist/line.svg" alt="line" />
      <div>
        <div className='text-4xl mt-20 font-medium'>Dr. Veronica Smith</div>
        <img src="/Therapist/line2.svg" alt="line" className='mt-6' />

        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly className='scale-150 mx-7 mt-5 ' />

        <div className='text-2xl mt-5'>clinical psychologist (PhD)</div>

        <div className='text-xl my-2'>11-15 years of experience.</div>

        <div className='text-xl flex mt-10'>
          <svg width="28" height="40" viewBox="0 0 29 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 0C6.49509 0 0 5.90382 0 13.1786C0 24.8929 14.5 41 14.5 41C14.5 41 29 24.8929 29 13.1786C29 5.90382 22.5049 0 14.5 0ZM14.5 20.5C13.3529 20.5 12.2315 20.1565 11.2777 19.5129C10.3239 18.8693 9.58049 17.9545 9.1415 16.8843C8.70251 15.814 8.58765 14.6364 8.81145 13.5002C9.03524 12.364 9.58764 11.3204 10.3988 10.5012C11.2099 9.6821 12.2434 9.12426 13.3685 8.89826C14.4936 8.67226 15.6598 8.78825 16.7196 9.23156C17.7794 9.67488 18.6852 10.4256 19.3225 11.3888C19.9598 12.352 20.3 13.4844 20.3 14.6429C20.2983 16.1957 19.6867 17.6846 18.5994 18.7826C17.512 19.8807 16.0377 20.4983 14.5 20.5Z" fill="#444444" />
          </svg><span className='pl-3'>Dwarka, Delhi</span></div>

        <div className='text-2xl ml-10'>₹1500 consultation fee
          <button className=" ml-10 px-7 py-2 text-2xl bg-[#AAA6B9] text-white rounded-full hover:bg-[#e0dfdc] hover:text-black transition duration-300 hover:text-medium ">
            Book Session
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Card