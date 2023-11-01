import image1 from '../assets/image/images/banner/1.jpg'
import image2 from '../assets/image/images/banner/2.jpg'
import image3 from '../assets/image/images/banner/3.jpg'
import image4 from '../assets/image/images/banner/4.jpg'
import image5 from '../assets/image/images/banner/5.jpg'
import image6 from '../assets/image/images/banner/6.jpg'
const Banner = () => {
    return (
        <div className="carousel  carousel-center  p-4  bg-neutral h-[600px] rounded-box">
  <div className="carousel-item ">
    <img src={image1} className="rounded-box" />
    <div className="ml-10 mt-40 space-y-5">

    <h1 className="text-white text-7xl font-bold ">Affordable <br /> Price For Car <br /> Servicing</h1>
    <p className="text-white font-bold">There are many variations of passages of  available,<br /> but the majority have suffered alteration in some form</p>
    <div className="flex gap-5">
        <button className="bg-orange-700 text-white font-bold p-4 rounded-md">Discover More</button>
        <button className="text-white mr-5 font-bold border-2 p-4 rounded-md">Latest Project</button>
    </div>
    </div>

  </div> 
  <div className="carousel-item">
    <img src={image2} className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={image3} className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={image4} className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={image5} className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src={image6} className="rounded-box" />
  </div> 
  
</div>
    );
};

export default Banner;