
import Useservices from "../Hook/Useservices";
import Servicecard from "./Servicecard";

const Services = () => {

    const service=Useservices()

    return (
        <div>
        <div className="text-center space-y-5 mb-10">
        <h1 className="text-3xl font-bold text-orange-600">Services</h1>
        <h1 className="text-5xl font-bold">Our Services Area</h1>
        <p className="font-bold">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
        <div>
        <div className="grid lg:grid-cols-3 gap-5 my-5 ">
            {
                service.map(services=><Servicecard key={services._id} services={services}> 

                </Servicecard>)
            }
        </div>
        <div className="text-center mt-10 ">
   <button className=" bg-orange-600 p-4 rounded-md text-white font-bold">More Services</button>
   </div>
        </div>
    </div>
    );
};

export default Services;