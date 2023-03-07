// import img from '../../public/images/image-about-dark.jpg'
export default function About () {
    return (
        <div className="w-full h-full overflow-hidden
        grid lg:grid-cols-aboutLayout lg:grid-rows-1 
        sm:grid-cols-tabletAboutLayout sm:grid-rows-tabletAboutLayout
        grid-rows-mobileAboutLayout grid-cols-1" id='about'>
            <div className="min-w-0 sm:order-1 sm:order-2 order-1">
                <img className="h-full w-full object-cover" alt="furniture" src="/images/image-about-dark.jpg"/>
            </div>
            
            <div className="md:px-12 md:py-16 px-8 py-12 text-left min-w-0
            col-span-full lg:col-auto sm:order-1 md:order-1 lg:order-2 order-2">
                <h2 className="font-bold uppercase tracking-[.3em]  ">
                    About our furniture
                </h2>
                <p className="my-3 text-primary-very-dark-gray">
                    Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                    or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>
            <div className="min-w-0 lg:order-3 order-3">
                <img className="h-full w-full object-cover" alt='furniture 'src="/images/image-about-light.jpg"/>
            </div>
        </div>
    )
}