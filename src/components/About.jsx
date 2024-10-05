export default function About(){
    return(
        <div className="flex flex-row mt-9 ml-3 pt-5 gap-12 justify-evenly">
            <div>
                <img src="https://html.design/demo/bostorek/images/about-img.png" alt="" height={600} width={600} />
            </div>
            <div className="justify-end ml-9 w-96">
                <h1 className="font-bold text-3xl mb-2 ">About Our Bookstore</h1>
                <p className="text-1xl font-mono mt-8">At cumque tenetur iste molestiae, vel eum reiciendis assumenda! Numquam, repudiandae. Consequuntur obcaecati recusandae aliquam, amet doloribus eius dolores officiis cumque? Quibusdam praesentium pariatur sapiente mollitia, amet hic iusto voluptas! Iusto quo ear</p>
                <button className="text-white bg-gradient-to-r from-green-500 to-teal-500 hover:bg-gradient-to-l mt-8 px-4 py-2 w-32 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                        Read More
                    </button>
            </div>

        </div>
    )
}