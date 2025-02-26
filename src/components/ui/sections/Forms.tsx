import type { NextPage } from 'next'
import { FormEvent, useState } from "react";

const Forms: NextPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [role, setRole] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = { name, email, phone, message, address, role }; // Include role in the form

        try {
            const rawResponse = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });

            const content = await rawResponse.json();

            if (content?.data?.tableRange) {
                alert(content.data.tableRange);
            } else {
                console.warn("Table range not found in API response:", content);
            }

            // Reset the form fields
            setName('');
            setEmail('');
            setPhone('');
            setAddress('');
            setMessage('');
            setRole(''); // Reset role field
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while submitting the form. Please try again.");
        }
    };

    return (
        <main className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="flex max-w-5xl mx-auto py-16 px-6 bg-white rounded-lg shadow-xl">
                
                {/* Left side text */}
                <div className="flex-1 pr-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Submit Your Information</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Welcome to our donation and volunteer platform. Your contribution can help us build a more cohesive society, 
                        promote harmony, and ensure that everyone has the opportunity to contribute meaningfully to the community.
                    </p>
                    <p className="text-lg text-gray-700">
                        Please fill out the form on the right to share your details and indicate how you'd like to contribute, whether 
                        as a donor, volunteer, or both. Thank you for being part of this important mission!
                    </p>
                </div>

                {/* Right side form */}
                <div className="flex-1">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            {/* Name Input */}
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                                <input
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Your Name"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                <input
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Your Email"
                                />
                            </div>

                            {/* Phone Input */}
                            <div className="flex flex-col">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                                <input
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Your Phone"
                                />
                            </div>

                            {/* Address Input */}
                            <div className="flex flex-col">
                                <label htmlFor="address" className="text-sm font-medium text-gray-700">Address</label>
                                <input
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                    name="address"
                                    id="address"
                                    className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Your Address"
                                />
                            </div>

                            {/* Message Textarea */}
                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    id="message"
                                    className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Your Message"
                                />
                            </div>

                            {/* Role Selection */}
                            <div className="flex flex-col">
                                <label htmlFor="role" className="text-sm font-medium text-gray-700">Role</label>
                                <select
                                    id="role"
                                    value={role}
                                    onChange={e => setRole(e.target.value)}
                                    className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="">Select your role</option>
                                    <option value="donor">Donor</option>
                                    <option value="volunteer">Volunteer</option>
                                    <option value="both">Both</option>
                                </select>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Forms;
