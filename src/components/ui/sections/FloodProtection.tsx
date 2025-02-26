import type { NextPage } from 'next';

const FloodProtection: NextPage = () => {
    return (
        <main className="bg-gray-100 min-h-screen py-10 px-6 flex items-center justify-center">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Floodgates & Water Barriers: Advanced Solutions for Flood Prevention</h1>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">Introduction</h2>
                    <p className="text-gray-600">Floodgates and water barriers play a crucial role in protecting cities and coastal areas from rising water levels. Explore how these solutions can prevent disasters and ensure water management efficiency.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">Types of Floodgates & Water Barriers</h2>
                    <table className="w-full border-collapse border border-gray-300 mt-3">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Type</th>
                                <th className="border border-gray-300 px-4 py-2">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Sluice Gates", "Used in rivers and reservoirs to control water flow."],
                                ["Radial (Tainter) Gates", "Rotating floodgates used in dams for controlled discharge."],
                                ["Mitre Gates", "Used in canals and navigation locks to manage water levels."],
                                ["Vertical Lift Gates", "Raise and lower to block or release water in urban drainage."],
                                ["Temporary Barriers", "Mobile or inflatable flood barriers for emergency situations."]
                            ].map(([type, description], index) => (
                                <tr key={index} className="border border-gray-300">
                                    <td className="border px-4 py-2 text-gray-600">{type}</td>
                                    <td className="border px-4 py-2 text-gray-600">{description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-center gap-4 mt-6">
                        <iframe className="w-1/2 h-64" src="/assets/media/videos/sluice gate.mp4" title="Sluice Gate Video" allowFullScreen></iframe>
                        <iframe className="w-1/2 h-64" src="/assets/media/videos/radial gate.mp4" title="Radial Gate Video" allowFullScreen></iframe>
                    </div>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">Where These Solutions Are Used in Sri Lanka</h2>
                    <table className="w-full border-collapse border border-gray-300 mt-3">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Location</th>
                                <th className="border border-gray-300 px-4 py-2">Type of Barrier Used</th>
                                <th className="border border-gray-300 px-4 py-2">Purpose</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Kelani River (Colombo)", "Sluice Gates", "Prevents urban flooding."],
                                ["Mahaweli River (Kandy)", "Radial Gates", "Regulates water in reservoirs."],
                                ["Dutch Canals (Negombo)", "Tidal Gates", "Prevents saltwater intrusion."],
                                ["Trincomalee & Batticaloa", "Coastal Barriers", "Protects against storm surges."]
                            ].map(([location, barrier, purpose], index) => (
                                <tr key={index} className="border border-gray-300">
                                    <td className="border px-4 py-2 text-gray-600">{location}</td>
                                    <td className="border px-4 py-2 text-gray-600">{barrier}</td>
                                    <td className="border px-4 py-2 text-gray-600">{purpose}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">How Floodgates Work to Prevent Disasters</h2>
                    <ol className="list-decimal list-inside text-gray-600">
                        <li><strong>Normal Conditions</strong> – Water flows normally.</li>
                        <li><strong>Flooding Begins</strong> – Water level rises due to storms/rain.</li>
                        <li><strong>Floodgate Activation</strong> – Gate closes to block excess water.</li>
                        <li><strong>Flood Prevention Success</strong> – Water level is controlled.</li>
                    </ol>
                </section>

                <section className="text-center">
                    <h2 className="text-xl font-semibold text-gray-700">Learn More & Take Action</h2>
                    <div className="mt-4 space-y-2">
                        <button className="block w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700">📥 Download a Brochure</button>
                        <button className="block w-full bg-green-600 text-white py-2 px-4 rounded-md shadow hover:bg-green-700">📞 Contact Us</button>
                        <button className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700">📺 Watch a Video</button>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default FloodProtection;
