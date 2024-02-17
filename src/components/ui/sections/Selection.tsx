import { BiMapPin } from 'react-icons/bi';

const SelectionSection = () => (
  <div className="px-4 py-8 md:px-0 md:py-8">
    <div className="container mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div
        aria-label="Sigiriya"
        className='bg-image-zoom min-h-[400px] bg-[url("/assets/media/images/6.jpeg")]'
      >
        <div className="absolute bottom-8 left-8">
          <h3 className="text-xl font-bold text-white">Sigiriya</h3>
          <span className="mt-2 flex items-center gap-1 text-sm text-slate-200">
            <BiMapPin /> Dambulla
          </span>
        </div>
      </div>
      <div
        aria-label="Adams Peak"
        className='bg-image-zoom min-h-[400px] bg-[url("/assets/media/images/7.jpg")]'
      >
        <div className="absolute bottom-8 left-8">
          <h3 className="text-xl font-bold text-white">Adams Peak</h3>
          <span className="mt-2 flex items-center gap-1 text-sm text-slate-200">
            <BiMapPin /> Ratnapura
          </span>
        </div>
      </div>
      <div
        aria-label="Arugambe"
        className='bg-image-zoom min-h-[400px] bg-[url("/assets/media/images/8.jpg")]'
      >
        <div className="absolute bottom-8 left-8">
          <h3 className="text-xl font-bold text-white">Arugam Bay</h3>
          <span className="mt-2 flex items-center gap-1 text-sm text-slate-200">
            <BiMapPin /> Batticaloa
          </span>
        </div>
      </div>
    </div>
  </div>
);

export { SelectionSection };
