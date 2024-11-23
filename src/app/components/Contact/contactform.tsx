// 'use client';
// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });
//     const [status, setStatus] = useState({
//         submitting: false,
//         success: false,
//         error: false,
//     });

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setStatus({ submitting: true, success: false, error: false });
        
//         // Create template parameters object
//         const templateParams = {
//             from_name: formData.name,
//             from_email: formData.email,
//             message: formData.message,
//         };

//         try {
//             await emailjs.send(
//                 'service_3211i1j',
//                 'template_rurq1h9',
//                 templateParams,
//                 'wnMuehn-FK2NF2hcu'
//             );
//             setStatus({ submitting: false, success: true, error: false });
//             setFormData({ name: '', email: '', message: '' });
//             toast.success("Message sent successfully!");
//         } catch (error) {
//             setStatus({ submitting: false, success: false, error: true });
//             toast.error("Failed to send message. Please try again.");
//             console.error('Error sending message:', error);
//         }
//     };

//     const isFormValid = formData.name && formData.email && formData.message;

//     return (
//         <div className="p-16 ml-[-5%] w-[100%]">
//             <h2 className="mb-10 text-[30px] font-semibold text-[#53C218] ">Contact Form</h2>
//             <form onSubmit={handleSubmit} className="flex flex-col gap-12">
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Full name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full p-5 bg-transparent border border-green-800 rounded-lg text-2xl text-white 
//                              placeholder:text-white-100 placeholder:text-xl focus:outline-none focus:border-green-500"
//                     required
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email address"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full p-5 bg-transparent  border border-green-800 rounded-lg text-white text-2xl 
//                              placeholder:text-white-100 placeholder:text-xl focus:outline-none focus:border-green-500"
//                     required
//                 />
//                 <textarea
//                     name="message"
//                     placeholder="Your Message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={6}
//                     className="w-full p-6 bg-transparent border border-green-800 rounded-lg text-white text-2xl resize-none min-h-[150px]
//                              placeholder:text-white-100 placeholder:text-xl focus:outline-none focus:border-green-500"
//                     required
//                 />
                
//                 <button
//                     type="submit"
//                     disabled={status.submitting || !isFormValid}
//                     className="flex items-center justify-center gap-2 self-end bg-[#53C218] font-medium text-white border-2 border-transparent
//                              px-6 py-3 rounded-lg cursor-pointer transition-all duration-200 text-[20px]
//                              hover:bg-[#53C218] hover:text-black hover:border-green-800 disabled:cursor-not-allowed"
//                 >
//                     {status.submitting ? 'Sending...' : 'Send Message'}
//                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="stroke-current">
//                         <path d="M15.5 8L8.5 15M15.5 8L8.5 1M15.5 8H0.5" strokeWidth="1.5"/>
//                     </svg>
//                 </button>
//             </form>
//             <ToastContainer />
//         </div>
//     );
// };

// export default ContactForm;

'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({
        submitting: false,
        success: false,
        error: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ submitting: true, success: false, error: false });

        // Create template parameters object
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };

        try {
            await emailjs.send(
                'service_3211i1j',
                'template_rurq1h9',
                templateParams,
                'wnMuehn-FK2NF2hcu'
            );
            setStatus({ submitting: false, success: true, error: false });
            setFormData({ name: '', email: '', message: '' });
            toast.success("Message sent successfully!");
        } catch (error) {
            setStatus({ submitting: false, success: false, error: true });
            toast.error("Failed to send message. Please try again.");
            console.error('Error sending message:', error);
        }
    };

    const isFormValid = formData.name && formData.email && formData.message;

    return (
        <div className="p-8 sm:p-12 md:p-16 lg:p-20 w-[90%] md:w-[75%] lg:w-[60%] mx-auto">
            <h2 className="mb-10 text-[24px] sm:text-[28px] md:text-[30px] lg:text-[35px] font-semibold text-[#53C218]">
                Contact Form
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 sm:gap-10 md:gap-12">
                <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 sm:p-5 md:p-6 bg-transparent border border-green-800 rounded-lg text-[16px] sm:text-[18px] md:text-[20px] text-white 
                             placeholder:text-white placeholder:text-[15px] sm:placeholder:text-[16px] md:placeholder:text-[18px] focus:outline-none focus:border-green-500"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 sm:p-5 md:p-6 bg-transparent border border-green-800 rounded-lg text-[16px] sm:text-[18px] md:text-[20px] text-white 
                             placeholder:text-white placeholder:text-[15px] sm:placeholder:text-[16px] md:placeholder:text-[18px] focus:outline-none focus:border-green-500"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-4 sm:p-5 md:p-6 bg-transparent border border-green-800 rounded-lg text-[16px] sm:text-[18px] md:text-[20px] text-white resize-none min-h-[150px]
                             placeholder:text-white placeholder:text-[15px] sm:placeholder:text-[16px] md:placeholder:text-[18px] focus:outline-none focus:border-green-500"
                    required
                />
                
                <button
                    type="submit"
                    disabled={status.submitting || !isFormValid}
                    className="flex items-center justify-center gap-2 self-end bg-[#53C218] font-medium text-white border-2 border-transparent
                             px-4 sm:px-6 py-2 sm:py-3 rounded-lg cursor-pointer transition-all duration-200 text-[16px] sm:text-[18px] md:text-[20px]
                             hover:bg-[#53C218] hover:text-black hover:border-green-800 disabled:cursor-not-allowed"
                >
                    {status.submitting ? 'Sending...' : 'Send Message'}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="stroke-current">
                        <path d="M15.5 8L8.5 15M15.5 8L8.5 1M15.5 8H0.5" strokeWidth="1.5"/>
                    </svg>
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ContactForm;
