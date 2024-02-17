import { MdOutlineTravelExplore } from 'react-icons/md';
import { RiCustomerService2Fill } from 'react-icons/ri';

const RatesSection = () => (
  <section className="px-4 py-8 md:px-0 md:py-16">
    <div className="container mx-auto grid gap-8 lg:grid-cols-3 lg:gap-12">
      <section className="flex flex-col gap-6 lg:col-span-2">
        <section>
          <h2 className="font-medium uppercase">
            Luxury Included Vacations For <strong>Two People</strong>
          </h2>
          <p className="mt-2">
            Ut reprehenderit maiores. Voluptas quod labore facere dolorem rerum doloribus modi
            dolorem molestiae. Quis autem odit voluptatem voluptatem nemo odit quis sed qui. Aliquid
            ut voluptatem illum praesentium rem omnis sed. Eveniet architecto pariatur earum non
            necessitatibus. Labore quidem doloremque explicabo aut. Eius ea dolore. Harum aperiam
            qui culpa excepturi provident sunt. Maxime eum nostrum consequatur consectetur.
            Accusamus hic a rerum ad modi eaque aut natus. Aliquid velit autem voluptas et.
          </p>
          <p className="mt-2">
            Ut reprehenderit maiores. Voluptas quod labore facere dolorem rerum doloribus modi
            dolorem molestiae. Quis autem odit voluptatem voluptatem nemo odit quis sed qui. Aliquid
            ut voluptatem illum praesentium rem omnis sed. Eveniet architecto pariatur earum non
            necessitatibus. Labore quidem doloremque explicabo aut. Eius ea dolore. Harum aperiam
            qui culpa excepturi provident sunt. Maxime eum nostrum consequatur consectetur.
            Accusamus hic a rerum ad modi eaque aut natus. Aliquid velit autem voluptas et.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:text-start">
            <span className="rounded-md border bg-gradient-to-r from-brand-dark to-brand-light p-4 text-white">
              <RiCustomerService2Fill size={40} />
            </span>

            <div>
              <h3 className="uppercase">Leading Service</h3>
              <p className="text-sm uppercase">All-inclusive company for 20 years in-a-row</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:text-start">
            <span className="rounded-md border bg-gradient-to-r from-brand-dark to-brand-light p-4 text-white">
              <MdOutlineTravelExplore size={40} />
            </span>

            <div>
              <h3 className="uppercase">Automated Bookings</h3>
              <p className="text-sm uppercase">All-inclusive company for 20 years in-a-row</p>
            </div>
          </div>
        </section>
      </section>
      <section className="flex flex-col gap-8">
        <div className="flex w-full flex-col gap-2 rounded border border-slate-300 px-4 py-8 text-center">
          <p className="uppercase">Get An Additional 10% off</p>
          <p className="text-2xl uppercase">
            <strong>12 hours left</strong>
          </p>
          <p className="bg-black px-4 py-2 uppercase text-white">Book now and save</p>
        </div>

        <form className="flex w-full flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold uppercase text-slate-500" htmlFor="destination">
              Destination
            </label>
            <select className="rounded-d border p-2 " id="destination" name="destination">
              <option value="Grande Antigua">Grande Antigua</option>
              <option value="Key West">Key West</option>
              <option value="Maldives">Maldives</option>
              <option value="Cozumel">Cozumel</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold uppercase text-slate-500" htmlFor="check-in">
              {' '}
              Check-in
            </label>
            <input className="rounded-d border p-2 " id="check-in" name="check-in" type="date" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold uppercase text-slate-500" htmlFor="check-out">
              {' '}
              Check-out
            </label>
            <input className="rounded-d border p-2 " id="check-out" name="check-out" type="date" />
          </div>

          <button className="w-full">Rates & Availabilities</button>
        </form>
      </section>
    </div>
  </section>
);

export { RatesSection };
