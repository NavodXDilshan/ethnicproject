import { BiMapPin } from 'react-icons/bi';

const BookSelection = () => (
  <div className="px-4 py-8 md:px-0 md:py-8">
    <div className="container mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
    <a href="https://www.booking.com/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
  <div className="bg-image-zoom min-h-[700px]" style={{ backgroundImage: 'url("/assets/media/images/booking.png")', backgroundPosition: 'center center' }} aria-label="Sigiriya">
    <div className="absolute bottom-8 left-8">
      <h3 className="text-xl font-bold text-white">Booking.com</h3>
      <span className="mt-2 flex items-center gap-1 text-sm text-slate-200">
        <BiMapPin /> Book yourself!
      </span>
    </div>
  </div>
</a>

      <a href="https://www.airbnb.com/a/stays/Sri-Lanka?&c=.pi0.pk393578303_137695812945&localized_ghost=true&gad_source=1&gclid=CjwKCAiA8sauBhB3EiwAruTRJqFcHPb79BUMMmMIgPvvAUBq5TfpABn-2a_5U32gg8hccktYfEcZMBoCVl4QAvD_BwE&gclsrc=aw.ds" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
        <div className='bg-image-zoom min-h-[700px]' style={{ backgroundImage: 'url("/assets/media/images/airbnb.jpg")' }} aria-label="Adams Peak">
          <div className="absolute bottom-8 left-8">
            <h3 className="text-xl font-bold text-white">Airbnb</h3>
            <span className="mt-2 flex items-center gap-1 text-sm text-slate-200">
              <BiMapPin /> Find your own place!
            </span>
          </div>
        </div>
      </a>

      <a href="https://www.uber.com/lk/en/?_csid=d0ik0GVP8wKbcZMPbgmntg&state=c2oV9sLubM3TLgi8IwJ38fOMSXggDZe3UO5FinLwC0M%3D&effect=" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
        <div className='bg-image-zoom min-h-[700px]' style={{ backgroundImage: 'url("/assets/media/images/uber.png")' }} aria-label="Adams Peak">
          <div className="absolute bottom-8 left-8">
            <h3 className="text-xl font-bold text-white">Uber</h3>
            <span className="mt-2 flex items-center gap-1 text-sm text-slate-200">
              <BiMapPin /> To Travel Anywhere
            </span>
          </div>
        </div>
      </a>

      <a href="https://pickme.lk/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
        <div className='bg-image-zoom min-h-[700px]' style={{ backgroundImage: 'url("/assets/media/images/pickme.jpg")' }} aria-label="Arugambe">
          <div className="absolute bottom-8 left-8">
            <h3 className="text-xl font-bold text-white">Pick Me</h3>
            <span className="mt-2 flex items-center gap-1 text-sm text-slate-200">
              <BiMapPin /> With care and safety!
            </span>
          </div>
        </div>
      </a>
    </div>
  </div>
);

export { BookSelection };