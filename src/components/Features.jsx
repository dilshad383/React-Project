import '../App.css'
import SectionHeader from '../components/SectionHeader'
function Features(){
    const benefitsCard = [
        {
            icon: '/assets/icons/Union.png',
            title: 'Holistic Learning Approach',
            text: 'Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.'
        },
        {
            icon: '/assets/icons/crown.png',
            title: 'Experienced Educators',
            text: 'Our passionate and qualified teachers create a supportive and stimulating learning environment.',
        },
        {
            icon: '/assets/icons/cup.png',
            title: 'Nurturing Environment',
            text: 'We prioritize safety and provide a warm and caring atmosphere for every child.',
        },
        {
            icon: '/assets/icons/flag.png',
            title: 'Play-Based Learning',
            text: 'We believe in the power of play to foster creativity, problem-solving skills, and imagination.',
        },
        {
            icon: '/assets/icons/crown.png',
            title: 'Individualized Attention',
            text: "Our small class sizes enable personalized attention, catering to each child's unique needs.",
        },
        {
            icon: '/assets/icons/group.png',
            title: 'Parent Involvement',
            text: 'We foster a strong parent-school partnership to ensure seamless communication and collaboration.',
        },
    ]
    return(
        <>
        
        <div className="w-11/12 mx-auto ">
            <SectionHeader 
            pill='Children Deserve Bright Future'
            title='Our Benefits'
            text="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum,
                we aim to lay a strong foundation for your child's future."
            />

            <div className="grid grid-cols-3 gap-5 gap-y-14 max-sm:grid-cols-1 max-md:grid-cols-2 mt-18">
                {
                    benefitsCard.map(
                        (item, index) => {
                            return <div key={index} className="border-2 shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_0.8)] bg-white rounded-lg relative px-4 pb-6">
                                <div className="absolute -top-3/6 translate-y-3/6 left-4">
                                    <img src={item.icon} alt="" />
                                </div>
                                <h4 className="pt-14 font-semibold pb-2 text-[1.1rem]">{item.title}</h4>
                                <div className="card-text">
                                    {item.text}
                                </div>
                            </div>
                        }
                    )
                }
            
            
        </div>
        </div>
        </>
    )
}

export default Features