import _1 from '../../assets/images/banner/1.jpg';
import _2 from '../../assets/images/banner/2.jpg';
import _3 from '../../assets/images/banner/3.jpg';
import _4 from '../../assets/images/banner/4.jpg';

const Banner = () => {
  return (
    <div className='carousel w-full h-[100vh] rounded-md'>
      <div id='slide1' className='carousel-item relative w-full '>
        <img src={_1} className='w-full' />
        <div className='absolute flex items-center w-[100%] h-full  text-white pl-32 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
          <div className='max-w-[470px]  space-y-5'>
            <h1 className='font-bold text-6xl leading-snug'>
              Affordable Price For Car Servicing
            </h1>
            <p className='text-lg leading-10'>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className='flex items-center gap-5'>
              <a className='btn btn-outline bg-[#FF3811] border-none hover:bg-transparent hover:text-white  text-white capitalize font-medium text-lg'>
                Discover More
              </a>
              <a className='btn btn-outline bg-transparent text-white hover:bg-[#FF3811] hover:text-white capitalize font-medium text-lg'>
                Latest Project
              </a>
            </div>
          </div>
        </div>
        <div className='absolute flex justify-end gap-5 bottom-0 transform -translate-y-1/2 left-5 right-5 '>
          <a href='#slide4' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide2' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide2' className='carousel-item relative w-full'>
        <img src={_2} className='w-full' />
        <div className='absolute flex justify-end gap-5 bottom-0 transform -translate-y-1/2 left-5 right-5'>
          <a href='#slide1' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide3' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide3' className='carousel-item relative w-full'>
        <img src={_3} className='w-full' />
        <div className='absolute flex justify-end gap-5 bottom-0 transform -translate-y-1/2 left-5 right-5 '>
          <a href='#slide2' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide4' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide4' className='carousel-item relative w-full'>
        <img src={_4} className='w-full' />
        <div className='absolute flex justify-end gap-5 bottom-0 transform -translate-y-1/2 left-5 right-5 '>
          <a href='#slide3' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide1' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
