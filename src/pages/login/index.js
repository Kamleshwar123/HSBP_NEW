import React from 'react'

const Login = () => {
  const lg = (4/12)*100+'%';
  const md = (3/12)*100+'%';
  const sm = (6/12)*100+'%';
  console.log(lg,md,sm)
  return (
    <div className='container'>
      <div className='bx3 grid grid-cols-12 justify-center items-center text-center gap-6'>
      {[...Array(10).keys()].map((item, idx) => (
        <div className='col-span-12 md:col-span-6 lg:col-span-4 bg-theme p-12 text-white' key={idx}>
          box{idx}
        </div>
      ))}
      </div>
      <div className='my-10'>
      <div className='flex flex-wrap justify-center items-stretch text-center -m-6'>
      {[...Array(10).keys()].map((item, idx) => (
        <div className={`flex-w-full sm:w-1/2 md:w1/3 lg:w-1/4 m-6 text-white bg-theme`} key={idx}>
          <div className='p-6'>
            {idx == 1 && 
            <>
            <p>box 2 </p>
            <p>box 2 </p>
            <p>box 2 </p>
            <p>box 2 </p>
            <p>box 2 </p>
            </>
            }
          box{idx}
          </div>
        </div>
      ))}
      </div>
      </div>
    </div>
  )
}

export default Login