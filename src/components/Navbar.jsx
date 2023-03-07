import { useState } from "react"
// lg:py-14 px-6 py-8
export default function NavBar () {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="relative w-full lg:h-[140px] h-[100px]
        flex lg:flex-row flex-row-reverse justify-end items-center
         ">
            <span className="lg:text-3xl text-3xl text-primary-white
            sm:ml-16 m-auto">
                room
            </span>
            <nav className={`${!showMenu ? 'lg:w-full w-[80px] bg-transparent':
            'w-full text-primary-black animate-expand-bottom'}
            lg:static fixed left-0 top-0 overflow-hidden h-[100px] lg:h-[140px]
            flex flex-row items-center lg:text-primary-white text-primary-black 
            lg:bg-transparent bg-primary-white 
            gap-12 lg:px-12 lg:font-light font-bold`}>
                {!showMenu ?
                    <button className='pl-7 lg:hidden block'onClick={()=> setShowMenu(true)}>
                        <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fillRule="evenodd"/></svg>
                    </button>:
                    <button className='pl-7 lg:hidden block'onClick={()=> setShowMenu(false)}>
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#000" fillRule="evenodd" opacity=".201"/></svg>
                    </button>
                }
                <ul className="
                flex flex-row items-baseline gap-8 
                
                    ">
                    <li className="relative cursor-pointer after:content-['']
                    after:absolute after:bottom-[-3px] after:left-[25%] after:w-[60%] 
                    after:lg:bg-primary-white after:bg-primary-very-dark-gray 
                    hover:after:h-[2px] hover:after:animate-expand-right">home</li>
                    <li className="relative cursor-pointer after:content-['']
                    after:absolute after:bottom-[-3px] after:left-[25%] after:w-[60%] 
                    after:lg:bg-primary-white after:bg-primary-very-dark-gray 
                    hover:after:h-[2px] hover:after:animate-expand-right">shop</li>
                    <li className="relative cursor-pointer after:content-['']
                    after:absolute after:bottom-[-3px] after:left-[25%] after:w-[60%] 
                    after:lg:bg-primary-white after:bg-primary-very-dark-gray 
                    hover:after:h-[2px] hover:after:animate-expand-right">about</li>
                    <li className="relative cursor-pointer after:content-['']
                    after:absolute after:bottom-[-3px] after:left-[25%] after:w-[60%] 
                    after:lg:bg-primary-white after:bg-primary-very-dark-gray 
                    hover:after:h-[2px] hover:after:animate-expand-right">contact</li>
                        
                </ul>
            </nav>
        </div>
    )
}