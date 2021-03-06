import React, { useState } from "react";

const Footer = () => {

    const [ formData, setFormData ] = useState({
        firstName: '', 
        lastName: '', 
        email: '', 
        phone: '', 
        message: ''
    })

    const formDivide = false

    return(

        <div className="flex flex-col bg-lightGreen mt-12 rounded-t-lg shadow-lg">
        {formDivide ? <div className="formDivide"/> : null}  
        <div className="mx-auto max-w-screen-xl pt-6 pb-14" id="contact">

            <div className="flex flex-col items-center my-10 mx-5 md:mx-2">
                <h1 className="mb-4 text-3xl md:text-4xl">Let's Get In Touch</h1>
                <p>Contact us to book an appointment or for a consultation to discuss the best treatment for your skin.</p>
            </div>

            <div className="flex flex-row flex-wrap px-3 md:px-6">

            <div className="flex flex-col p-1 w-full md:w-1/2 my-1 md:p-2">
                                <label 
                                    htmlFor="firstName"
                                    className="text-lg font-semibold mb-1"
                                >
                                First Name
                                </label>
                                <input           
                                    id="firstName"
                                    type="text" 
                                    className="w-full p-2 rounded-md shadow-md border border-black/10"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({
                                        firstName: e.target.value, 
                                        lastName: formData.lastName, 
                                        email: formData.email, 
                                        phone: e.target.value, 
                                        message: formData.message
                                    })} 
                                />
                            </div>
                            <div className="flex flex-col p-1 w-full md:w-1/2 my-1 md:p-2">
                                <label 
                                    htmlFor="lastName"
                                    className="text-lg font-semibold mb-1"
                                >
                                Last Name
                                </label>
                                <input           
                                    id="lastName"
                                    type="text" 
                                    className="w-full p-2 rounded-md shadow-md border border-black/10"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({
                                        firstName: formData.firstName, 
                                        lastName: e.target.value, 
                                        email: formData.email, 
                                        phone: formData.phone, 
                                        message: formData.message
                                    })} 
                                />
                            </div>

                            <div className="flex flex-col p-1 w-full md:w-1/2 my-1 md:p-2">
                                <label 
                                    htmlFor="email"
                                    className="text-lg font-semibold mb-1"
                                >
                                Email
                                </label>
                                <input           
                                    id="email"
                                    type="email" 
                                    className="w-full p-2 rounded-md shadow-md border border-black/10"
                                    value={formData.email}
                                    onChange={(e) => setFormData({
                                        firstName: formData.firstName, 
                                        lastName: formData.lastName, 
                                        email: e.target.value, 
                                        phone: formData.phone, 
                                        message: formData.message
                                    })} 
                                />
                            </div>

                            <div className="flex flex-col p-1 w-full md:w-1/2 my-1 md:p-2">
                                <label 
                                    htmlFor="phone"
                                    className="text-lg font-semibold mb-1"
                                >
                                Phone
                                </label>
                                <input           
                                    id="phone"
                                    type="phone" 
                                    className="w-full p-2 rounded-md shadow-md border border-black/10"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({
                                        firstName: formData.firstName, 
                                        lastName: formData.lastName, 
                                        email: formData.email, 
                                        phone: e.target.value, 
                                        message: formData.message
                                    })} 
                                />
                            </div>
 
                            <div className="flex flex-col p-1 w-full my-1">
                                <label 
                                    htmlFor="message"
                                    className="text-lg font-semibold mb-1"
                                >
                                    Message
                                </label>
                                <textarea           
                                    id="message"
                                    type="text" 
                                    className="w-full p-2 rounded-md shadow-md border border-black/10"
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({
                                        firstName: formData.firstName, 
                                        lastName: formData.lastName, 
                                        email: formData.email, 
                                        phone: formData.phone, 
                                        message: e.target.value
                                    })} 
                                />
                            </div>

                <button className="buttonLight mt-4 ml-auto bg-white hover:bg-darkGreen">
                    Submit
                </button>

            </div>

        </div>

        <div className="text-white bg-green rounded-t-lg shadow-lg p-4 pb-8 -mt-4">
            <div className="flex flex-col md:flex-row max-w-screen-xxl mx-auto">
            <div className="md:w-1/3 p-4">
                <h3 className="border-b text-black border-black pb-1">Location</h3>
                <div className="flex flex-col my-4 leading-tight">
                    <span><strong>Pebb Building</strong></span>
                    <span>2197 Riverside Drive  suite 200</span>
                    <span>Ottawa, Ontario</span>
                    <span>K1H 7X3</span>
                    <span className="mt-4"><strong>Near Billing Bridge Shopping Center</strong> before Bank Street</span>
                </div>
            </div>
            <div className="md:w-1/3 p-4">
                <h3 className="border-b text-black border-black pb-1">Hours</h3>
                <div className="flex flex-col my-4 leading-tight">
                    <span><strong>Wednesday:</strong> 10am - 6pm</span>
                    <span><strong>Thursday</strong> - <strong>Friday:</strong> 10am - 6pm</span>
                    <span><strong>Saturday</strong> - <strong>Tuesday:</strong> Closed</span>
                </div>
            </div>
            <div className="md:w-1/3 p-4">
                <h3 className="border-b text-black border-black pb-1">More Info</h3>
                <div className="flex flex-col my-4 leading-tight">
                <span><strong>Parking</strong></span>
                <span>Paid parking at the building.</span>
                <span>2 hour free parking on Hollan Ave and Parkdale Ave.</span>
                </div>
                <div className="flex flex-col my-4 leading-tight">
                <span><strong>Payment</strong></span>
                <span>Debit, E-transfer and cash accepted only.</span>
                </div>
            </div>
            </div>
        </div>

        <div className="bg-darkGreen text-white font-light md:text-center p-4 rounded-t-lg shadow-lg -mt-2">
        Hair Removal, Acne Clinic, Facial Treatments, Waxing, Spas | ?? 2018 Essence of Beauty. Powered by <a href="https://www.adrenalizedigital.ca" target="_blank" rel="noreferrer" className="ml-1 font-normal hover:text-green">Adrenalize Digital</a>.
        </div>

        </div>

    )
}

export default Footer