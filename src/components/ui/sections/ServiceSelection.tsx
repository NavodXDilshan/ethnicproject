import { useRouter } from "next/router";
import { BiMapPin } from "react-icons/bi";

const ServiceSelectionSection = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="px-4 py-8 md:px-0 md:py-8">
      <div className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Simulator Image */}
        <div
          aria-label="Simulator"
          onClick={() => navigateTo("/simulator")}
          className='relative cursor-pointer bg-image-zoom min-h-[400px] bg-[url("/assets/media/images/sim.jpg")] rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow'
        >
          <div className="absolute bottom-8 left-8">
            <h3 className="text-xl font-bold text-white">Simulator</h3>
            <span className="mt-2 flex items-center gap-1 text-sm text-slate-200">
              <BiMapPin /> Test the defenses
            </span>
          </div>
        </div>
        {/* Predictions Image */}
        <div
          aria-label="Predictions"
          onClick={() => navigateTo("/predictions")}
          className='relative cursor-pointer bg-image-zoom min-h-[400px] bg-[url("/assets/media/images/predict.png")] rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow'
        >
          <div className="absolute bottom-8 left-8">
            <h3 className="text-xl font-bold text-white">Predictions</h3>
            <span className="mt-2 flex items-center gap-1 text-sm text-slate-200">
              <BiMapPin /> How's weather like
            </span>
          </div>
        </div>
        {/* Models Image */}
        <div
          aria-label="Models"
          onClick={() => navigateTo("/models")}
          className='relative cursor-pointer bg-image-zoom min-h-[400px] bg-[url("/assets/media/images/model.jpeg")] rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow'
        >
          <div className="absolute bottom-8 left-8">
            <h3 className="text-xl font-bold text-white">Models</h3>
            <span className="mt-2 flex items-center gap-1 text-sm text-slate-200">
              <BiMapPin /> What can improve?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ServiceSelectionSection };
