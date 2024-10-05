import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Home() {
    const navigate = useNavigate();
    const handleClick = (genre) => {
        navigate(`/books/${genre.toLowerCase()}`)
    }
    return (
        <>
            <div className="bg-gradient-to-b from-gray-100 to-white mt-8 py-12">
                {/* Section Title */}
                <h2 className="text-3xl pt-3 text-emerald-700 font-semibold mb-6 text-center">
                    Our Bookstore
                </h2>

                <div className="flex flex-row justify-between items-start mx-auto max-w-6xl px-8">

                    <div className="flex flex-col max-w-lg">
                        <h1 className="text-5xl font-bold leading-tight text-gray-800">
                            For All Your Reading Needs
                        </h1>
                        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe
                            dolorem deserunt quo quidem ad optio. Find the perfect book that suits your interests.
                        </p>

                        <button className="text-white bg-gradient-to-r from-green-500 to-teal-500 hover:bg-gradient-to-l mt-8 px-4 py-2 w-32 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                            Read More
                        </button>
                    </div>


                    <img
                        src="https://html.design/demo/bostorek/images/slider-img.png"
                        alt=""
                        width={500}
                        height={500}
                        className="ml-12 rounded-lg shadow-xl hover:scale-105 transform transition-transform duration-300"
                    />
                </div>
            </div>
            <div className="mt-5 bg-gradient-to-b from-gray-100 to-white py-12">
                <h1 className="font-bold text-3xl text-center ">Book Categories</h1>
                <p className="font-normal text-1xl text-center mt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                <div className="flex flex-wrap justify-center gap-20 mt-5">
                    <div onClick={() => handleClick('Textbooks')} className="flex flex-col items-center bg-white shadow-lg rounded-lg p-5 w-80 hover:scale-105 transform transition-transform duration-300 cursor-pointer">
                        <img src="https://html.design/demo/bostorek/images/cat1.png" alt="" width={100} height={100} />
                        <h1 className="font-bold text-xl mt-4 text-gray-800">Textbooks</h1>
                        <p className="text-gray-600 text-center mt-2">
                            A reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                    </div>
                    <div onClick={() => handleClick('Science')} className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-80 hover:scale-105 transform transition-transform duration-300 cursor-pointer">
                        <img src="https://html.design/demo/bostorek/images/cat2.png" alt="" width={100} height={100} />
                        <h1 className="font-bold text-xl mt-4 text-gray-800">Science</h1>
                        <p className="text-gray-600 text-center mt-2">
                            A reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                    </div>
                    <div onClick={() => handleClick('History')} className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-80 hover:scale-105 transform transition-transform duration-300 cursor-pointer">
                        <img src="https://html.design/demo/bostorek/images/cat3.png" alt="" width={100} height={100} />
                        <h1 className="font-bold text-xl mt-4 text-gray-800">History</h1>
                        <p className="text-gray-600 text-center mt-2">
                            A reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                    </div>
                    <div onClick={() => handleClick('Bibliography')} className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-80 hover:scale-105 transform transition-transform duration-300 cursor-pointer">
                        <img src="https://html.design/demo/bostorek/images/cat4.png" alt="" width={100} height={100} />
                        <h1 className="font-bold text-xl mt-4 text-gray-800">Bibliography</h1>
                        <p className="text-gray-600 text-center mt-2">
                            A reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                    </div>
                    <div onClick={() => handleClick('Adventure')} className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-80 hover:scale-105 transform transition-transform duration-300 cursor-pointer">
                        <img src="https://html.design/demo/bostorek/images/cat5.png" alt="" width={100} height={100} />
                        <h1 className="font-bold text-xl mt-4 text-gray-800">Adventure</h1>
                        <p className="text-gray-600 text-center mt-2">
                            A reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                    </div>
                    <div onClick={() => handleClick('Fantasy')} className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-80 hover:scale-105 transform transition-transform duration-300 cursor-pointer">
                        <img src="https://html.design/demo/bostorek/images/cat6.png" alt="" width={100} height={100} />
                        <h1 className="font-bold text-xl mt-4 text-gray-800">Fantasy</h1>
                        <p className="text-gray-600 text-center mt-2">
                            A reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                    </div>

                </div>
            </div>
            <div>
                <h1 className="text-3xl text-center mt-5 font-bold">Customer Experiences</h1>

                <div className="flex flex-row gap-10 w-full max-w-5xl mx-auto bg-white rounded-lg justify-center items-center mt-7 p-8">

                    {/* First Card */}
                    <div className="flex flex-col bg-emerald-700 rounded-lg p-6 shadow-lg w-80">
                        <blockquote className="text-xl italic font-semibold text-white">
                            <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                        </blockquote>

                        <img
                            src="https://html.design/demo/bostorek/images/c1.jpg"
                            alt="Customer 2"
                            className="rounded-2xl mt-4 mx-auto"
                            height={150}
                            width={150}
                        />
                        <p className="text-white text-1xl font--semibold mt-2 text-center">John Doe, Student</p>
                    </div>

                    {/* Second Card */}
                    <div className="flex flex-col bg-emerald-700 rounded-lg p-6 shadow-lg w-80">
                        <blockquote className="text-xl italic font-semibold text-white">
                            <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                        </blockquote>

                        <img
                            src="https://html.design/demo/bostorek/images/c3.jpg"
                            alt="Customer 2"
                            className="rounded-2xl mt-4 mx-auto"
                            height={150}
                            width={150}
                        />
                        <p className="text-white text-1xl font--semibold mt-2 text-center">Flora, Student</p>
                    </div>


                </div>
            </div>

        </>
    );
}