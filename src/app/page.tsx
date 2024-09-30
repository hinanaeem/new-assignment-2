


// app/page.tsx

import Image from 'next/image';
import profilePic from '../../../public/profile.jpg'; 

const Page = () => {
  return (
    <div className='pageContainer'>
      {/* Bio Data Div */}
      <div className='bioDataContainer'>
        <h2><b>Bio Data</b></h2>
        <p>
          My name is <span className='pinkColor'>Hina Naeem.</span> 
          <br /> I am learning Next.js and will become a full stack developer soon .
        </p>
      </div>

      {/* Image Div */}
      <div className='imageContainer'>
        <Image src={profilePic} alt="Profile Picture"  />
      </div>
    </div>
  );
};

export default Page;

