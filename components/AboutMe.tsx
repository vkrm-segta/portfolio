import React from 'react';
import TextShadow from './TextShadow';

function AboutMe() {
  return (
    <div className='flex flex-col w-full mt-40 pb-10'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex text-9xl font-black'>
          <TextShadow content='VIKRAM' shadow={4} />
          <div className='flex ml-10'>
            <TextShadow content='SEGTA' shadow={4} />
          </div>
        </div>
        <div className='flex text-4xl font-bold mt-5'>
          <TextShadow content='Full' shadow={1} />
          <TextShadow content='Stack' shadow={1} />
          <TextShadow content='Developer' shadow={1} />
        </div>
      </div>
      <div className='mx-32'>
        <div className='mt-40 self-start '>
          <TextShadow content='ABOUT' shadow={1} />
        </div>

        <div className='text-2xl text-stone-500 mt-5'>
          Hey there! I'm an accomplished full-stack developer with 2 years of
          expertise in React.js, Next.js, React Native, and Node.js. Proficient
          in crafting seamless frontend experiences and robust backend
          solutions, I take immense joy in bringing code to life! Together, we
          can create remarkable projects that merge your ideas with my skills,
          making a perfect synergy for success. Let's collaborate and build
          exceptional digital ventures that leave a lasting impact.
        </div>
      </div>
      <div className='mx-32'>
        <div className='mt-40 self-start'>
          <TextShadow content='PROJECTS' shadow={1} />
        </div>

        <div className='flex gap-5 text-2xl text-stone-500 mt-5'>
          <div className=' w-80 h-80 bg-stone-500 hover:bg-slate-800'>hh</div>
          {/* <div className=' w-80 h-80 bg-stone-500'>hh</div>
          <div className=' w-80 h-80 bg-stone-500'>hh</div> */}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
