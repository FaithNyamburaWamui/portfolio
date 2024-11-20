'use client';
import ContactForm from "./contactform";
import ContactInfo from "./contactinfo";

export default function Contact() {
    return (
        <section id="contact">
        <div className="flex flex-col md:flex-row gap-8 p-8 bg-[#010C04]">
            <div className="md:w-1/2">
                <ContactInfo />
            </div>
            <div className="md:w-1/2 ml-[-120px]">
                <ContactForm />
            </div>
            
            <div>
        
            </div>
            
        </div>
        </section>
    );
}