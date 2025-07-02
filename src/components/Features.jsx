import '../App.css'

function Features(){
    return(
        <>
        <div className="wrapper features">
            <div className="section-header justify-items-center">
                <div className="pill bg-white border-2 rounded-lg inline-block px-2 ">Children Deserve Bright Future</div>
                <h2 className="text-5xl ">Our Benefits</h2>
                <p className="">
                With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum,
                we aim to lay a strong foundation for your child's future.</p>
            </div>
            <div className="card-wrapper grid grid-cols-3 gap-5 gap-y-14 max-sm:grid-cols-1 max-md:grid-cols-2">
            <div className="card border-2 shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] bg-white rounded-lg relative">
                <div className="icon absolute">
                    <img src="/assets/icons/Union.png" alt="" />
                </div>
                <h4 className="card-title">Holistic Learning Approach</h4>
                <div className="card-text">
                    Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.
                </div>
            </div>
            <div className="card relative border-2 shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] bg-white rounded-lg">
                <div className="icon absolute">
                    <img src="/assets/icons/crown.png" alt="" />
                </div>
                <h4 className="card-title">Experienced Educators</h4>
                <div className="card-text">
                    Our passionate and qualified teachers create a supportive and stimulating learning environment.
                </div>
            </div>
            <div className="card relative border-2 shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] bg-white rounded-lg">
                <div className="icon absolute">
                    <img src="/assets/icons/cup.png" alt="" />
                </div>
                <h4 className="card-title">Nurturing Environment</h4>
                <div className="card-text">
                    We prioritize safety and provide a warm and caring atmosphere for every child.
                </div>
            </div>
            <div className="card relative border-2 shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] bg-white rounded-lg">
                <div className="icon absolute">
                    <img src="/assets/icons/flag.png" alt="" />
                </div>
                <h4 className="card-title">Play-Based Learning</h4>
                <div className="card-text">
                    We believe in the power of play to foster creativity, problem-solving skills, and imagination.
                </div>
            </div>
            <div className="card relative border-2 shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] bg-white rounded-lg">
                <div className="icon absolute">
                    <img src="/assets/icons/wheel.png" alt="" />
                </div>
                <h4 className="card-title">Individualized Attention</h4>
                <div className="card-text">
                    Our small className sizes enable personalized attention, catering to each child's unique needs.
                </div>
            </div>
            <div className="card relative border-2 shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] bg-white rounded-lg">
                <div className="icon absolute">
                    <img src="/assets/icons/Icon.png" alt="" />
                </div>
                <h4 className="card-title">Parent Involvement</h4>
                <div className="card-text">
                    We foster a strong parent-school partnership to ensure seamless communication and collaboration.
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Features