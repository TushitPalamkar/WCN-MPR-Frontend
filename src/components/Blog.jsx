export default function Blog() {
    return (
        <div className="bg-gradient-to-b from-gray-200 via-white to-white min-h-screen py-10">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Our Latest Blogs</h1>
            <div className="flex flex-wrap gap-60 justify-center">
                <div className="rounded-3xl border w-96 flex flex-col bg-white shadow-xl transition-transform transform hover:scale-105">
                    <img
                        src="https://html.design/demo/bostorek/images/b1.jpg"
                        alt="Blog image"
                        height={400}
                        width={400}
                        className="rounded-t-3xl mx-auto object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">Eius, dolor? Vel velit sed doloremque</h3>
                        <p className="text-lg font-serif text-gray-600 mb-6">
                            Incidunt magni explicabo ullam ipsa quo consequuntur eveniet illo? Aspernatur nam dolorem a neque? Esse eaque dolores hic debitis cupiditate, ad beatae voluptatem numquam dignissimos ab porro.
                        </p>
                        <button className="text-white bg-gradient-to-r from-green-400 to-teal-500 hover:bg-gradient-to-l px-5 py-2 w-full rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                            Read More
                        </button>
                    </div>
                </div>
                <div className="rounded-3xl border w-96 flex flex-col bg-white shadow-xl transition-transform transform hover:scale-105">
                    <img
                        src="https://html.design/demo/bostorek/images/b2.jpg"
                        alt="Blog image"
                        height={400}
                        width={400}
                        className="rounded-t-3xl mx-auto object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">Eius, dolor? Vel velit sed doloremque</h3>
                        <p className="text-lg font-serif text-gray-600 mb-6">
                            Incidunt magni explicabo ullam ipsa quo consequuntur eveniet illo? Aspernatur nam dolorem a neque? Esse eaque dolores hic debitis cupiditate, ad beatae voluptatem numquam dignissimos ab porro.
                        </p>
                        <button className="text-white bg-gradient-to-r from-green-400 to-teal-500 hover:bg-gradient-to-l px-5 py-2 w-full rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
