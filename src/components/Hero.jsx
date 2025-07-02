import '../App.css'

function Hero(){
    return(
        <>
        <div className="row grid lg:grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-1 hero justify-center ">
            <div className="col">
                <img src="/assets/images/hero-img.png" alt="" />
            </div>
            <div className="col">
                <div className="text-wrapper">
                    <p className="underline underline-offset-6">Welcome to Little Learners Academy</p>
                    <h1 className="text-4xl">Where Young Minds Blossom and <span className="text-orange">Dreams Take Flight.</span></h1>

                    <p className="description">Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>

                    <div className="quick-facts">
                        <img src="/assets/images/stats.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Hero;