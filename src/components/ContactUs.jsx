export default function ContactUs() {
    return (
        <div className="flex flex-col gap-8 ml-4"> 
            
            <div className="flex flex-row gap-8"> 
                <div className="flex-grow"> 
                    <form action="" className="flex flex-col gap-4 w-96"> 
                    <h1 className="text-3xl font-bold font-sans text-emerald-800 mt-12">Contact Us</h1>
                        <input type="text" placeholder="Name" className="border p-2 rounded-lg " />
                        <input type="text" placeholder="E-Mail" className="border p-2 rounded" />
                        <input type="number" placeholder="Contact Number" className="border p-2 rounded" />
                        <textarea placeholder="Message" className="border p-2 rounded"></textarea>
                        <button type="submit" className="text-white bg-gradient-to-r from-green-500 to-teal-500 rounded py-3 px-3 w-32 ml-24">Send</button>
                    </form>
                </div>
                <div className="flex-none">
                    <img src="https://html.design/demo/bostorek/images/contact-img.png" alt="Contact Us" height={600} width={500} className="mr-24 mt-7"/>
                </div>
            </div>
        </div>
    );
}
