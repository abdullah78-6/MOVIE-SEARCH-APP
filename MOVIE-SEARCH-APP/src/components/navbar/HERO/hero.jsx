function Hero(){
    return <div className="mt-15 flex  flex-wrap justify-center items-center gap-10 " id="h">
        <div className="w-180">
            <h1 className="text-4xl md:text-6xl lg:text-6xl xl:text-6xl text-cyan-600">Stream the Stories You Love</h1>
            <p className="text-sm md:text-4xl lg:text-4xl xl:text-4xl  text-gray-600">
                Discover, watch, and fall in love with movies from every genre — all in one place.Explore trending films, hidden gems, and exclusive releases — anytime, anywhere.
            </p>
        </div>
        <div>
            <img src="download.jpg" className="rounded-4xl " alt="hero image "/>
        </div>
    </div>

}
export default Hero;