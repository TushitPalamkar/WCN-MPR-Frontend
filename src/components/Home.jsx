import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const navigate = useNavigate();
    const titleRef = useRef(null);
    const categoryCardsRef = useRef([]);
    const customerExperienceRef = useRef([]);

    useEffect(() => {
        // Title Animation
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.2,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );

        // Book Categories Animation
        categoryCardsRef.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                { opacity: 0, scale: 0.9, y: 50 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        // Customer Experiences Animation
        customerExperienceRef.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                { opacity: 0, x: -100 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power3.out",
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);

    const handleClick = (genre) => {
        navigate(`/books?genre=${genre.toLowerCase()}`)
    }

    return (
        <>
            <div className="bg-gradient-to-b from-gray-100 to-white py-12">
                {/* Section Title */}
                <h2 ref={titleRef} className="text-5xl text-emerald-700 font-semibold mb-8 text-center">
                    BOOKIES
                </h2>

                <div className="flex flex-row justify-between items-start mx-auto max-w-6xl px-8">
                    <div className="flex flex-col max-w-lg">
                        <h1 className="text-5xl font-bold leading-tight text-gray-800">
                            For All Your Reading Needs
                        </h1>
                        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                            Discover a world of knowledge and imagination at Bookies. From gripping novels to insightful non-fiction, we offer a vast collection to satisfy every reader's taste. Whether you're a casual reader or a dedicated bookworm, find your next great read with us.
                        </p>

                        <button onClick={()=>navigate('/about')} className="text-white bg-gradient-to-r from-green-500 to-teal-500 hover:bg-gradient-to-l mt-8 px-4 py-2 w-32 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
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
                    {[ 
                        { name: 'Textbooks', description: 'Comprehensive academic resources for students across all disciplines.' },
                        { name: 'Science', description: 'Explore the wonders of the universe, from quantum physics to astronomy.' },
                        { name: 'History', description: 'Journey through time with captivating accounts of world events and civilizations.' },
                        { name: 'Biography', description: 'Inspiring life stories of influential figures who shaped our world.' },
                        { name: 'Adventure', description: 'Embark on thrilling journeys and experience heart-pounding excitement.' },
                        { name: 'Fantasy', description: 'Immerse yourself in magical realms and extraordinary adventures beyond imagination.' }
                    ].map((category, index) => (
                        <div 
                            key={index}
                            ref={el => categoryCardsRef.current[index] = el}
                            onClick={() => handleClick(category.name)} 
                            className="group flex flex-col items-center bg-white shadow-lg rounded-lg p-5 w-80 hover:scale-105 transform transition-transform duration-300 cursor-pointer hover:shadow-xl hover:bg-gradient-to-r from-green-500 to-teal-500"
                        >
                            <img src={`https://html.design/demo/bostorek/images/cat${index + 1}.png`} alt="" width={100} height={100} />
                            <h1 className="font-bold text-xl mt-4 text-gray-800 group-hover:text-white transition-colors duration-300">{category.name}</h1>
                            <p className="text-gray-600 group-hover:text-white text-center mt-2 transition-colors duration-300">
                                {category.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h1 className="text-3xl text-center mt-5 font-bold">Customer Experiences</h1>

                <div className="flex flex-row gap-10 w-full max-w-5xl mx-auto bg-white rounded-lg justify-center items-center mt-7 p-8">
                    {[
                        { image: 'c1.jpg', name: 'John Doe, Student' },
                        { image: 'c3.jpg', name: 'Flora, Student' }
                    ].map((customer, index) => (
                        <div 
                            key={index}
                            ref={el => customerExperienceRef.current[index] = el}
                            className="flex flex-col bg-emerald-700 rounded-lg p-6 shadow-lg w-80"
                        >
                            <blockquote className="text-xl italic font-semibold text-white">
                                <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                                </svg>
                                <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                            </blockquote>

                            <img
                                src={`https://html.design/demo/bostorek/images/${customer.image}`}
                                alt={`Customer ${index + 1}`}
                                className="rounded-2xl mt-4 mx-auto"
                                height={150}
                                width={150}
                            />
                            <p className="text-white text-1xl font--semibold mt-2 text-center">{customer.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}