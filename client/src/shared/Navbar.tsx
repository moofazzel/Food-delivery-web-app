import { Link } from "react-router-dom"
import logo from '../assets/logo_3.avif';
import { useEffect, useState } from "react";
import { HiOutlineUserCircle } from 'react-icons/hi';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { BiSearch } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';

const Navbar = () => {
    // let activeStyle = {

    //     borderBottom: '2px solid #90C347'
    // };

    //sticky nav on scroll
    // sticky nav
    const [stickyNav, setStickyNav] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            setStickyNav(window.pageYOffset === 0 ? false : true);
            return () => (window.onscroll = null);
        };
    }, []);
    return (
        <div>
            <nav className={` w-full  top-0 right-0 left-0 z-[10] py-7 md:py-2 text-[#FFF]  flex  items-center justify-between md:mx-auto px-10 md:px-[103px] bottom_border ${stickyNav ? 'bg-white fixed shadow-md shadow-gray-200' : 'bg-white'}`}

            >
                {/* brand logo */}
                <Link to={"/"}><img className='w-[90px] h-[90px] ' src={logo}></img></Link>

                {/* mobile nav */}
                {/* <div

                className="responsive_menu "

            >
                <button
                    onClick={handleToggle}
                    className="hamburger_icon text-darkBlack">
                    <GiHamburgerMenu />
                </button>
                <div
                    ref={navWrapper}
                    className={`side_nav shadow-lg shadow-gray-300 ${isOpen == true ? 'active' : ''}`}

                >
                    <button
                        className="close_btn "
                        onClick={handleToggle}
                    >
                        <AiFillCloseCircle />
                    </button>
                    <ul className="mobile_menu">

                        <li>
                            <a
                                href="/"
                                className='text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition'


                            >Home</a>
                        </li>
                        <li >
                            <a
                                href="/about"
                                className='text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition'



                            >
                                About Us
                            </a>
                        </li>

                        <li >
                            <a
                                href="/products"
                                className='text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition'



                            >
                                Our Products
                            </a>
                        </li>
                        <li >
                            <a
                                href="/news-media"
                                className='text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition'



                            >
                                News and Media
                            </a>
                        </li>
                        <li >
                            <a
                                href="/blogs"
                                className='text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition'



                            >
                                Blogs
                            </a>
                        </li>
                        <li >
                            <a
                                href="/adminDashboard"
                                className='text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition'



                            >
                                Dashboard
                            </a>
                        </li>
                        <li >
                            <a
                                href="/contact"
                                className='text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition'



                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <Link to={"/"}><button className=' px-2  py-2 rounded text-white border bg-primary border-primary text-base'>Appoinments +</button></Link>
                        </li>


                    </ul>
                </div>
            </div> */}

                <div className="hidden w-full lg:block md:w-auto" id="navbar-multi-level">
                    <ul className='flex gap-4 items-center justify-between py-6'>
                        <li><Link to="/" className="text-black p-2 capitalize text-[18px] font-medium  transition">Home</Link></li>
                        <li><span className="text-black p-2 capitalize text-[18px] font-medium  transition">Italian</span></li>
                        <li><span className="text-black p-2 capitalize text-[18px] font-medium  transition">Indian</span></li>
                        <li><span className="text-black p-2 capitalize text-[18px] font-medium  transition">Thai</span></li>

                        <li><span className="text-black p-2 capitalize text-[18px] font-medium  transition">Chinese</span></li>
                        <li><Link to="/shop" className="text-black p-2 capitalize text-[18px] font-medium  transition">Shop</Link></li>
                        <li><span className="text-black p-2 capitalize text-[18px] font-medium  transition">Pages</span></li>


                        {/* <li

                        >
                            <NavLink
                                to={""}
                                className='text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition'
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }

                            >Home</NavLink>
                        </li>

                        <li


                        >
                            <NavLink
                                to={""}
                                className='p-2 text-textColor uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition'
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined}
                            >About us</NavLink>
                        </li>

                        <li

                        >
                            <NavLink
                                to={""}
                                className='text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition'
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined}
                            >Our Products</NavLink>
                        </li>
                        <li

                        >
                            <NavLink
                                to={""}
                                className='text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition'
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined}
                            >News And Media</NavLink>
                        </li>
                        <li

                        >
                            <NavLink
                                to={""}
                                className='text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition'
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined}

                            >Blogs</NavLink>
                        </li>
                        <li >
                            <NavLink
                                to=""
                                className='text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition'

                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined}

                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li


                        >
                            <NavLink
                                to={""}
                                className='text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition'

                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined}
                            >Contact Us</NavLink>
                        </li>
 */}

                        <div className='flex gap-5'>

                        </div>
                    </ul>
                </div>

                {/* call to action button */}
                <div className="flex items-center justify-around">

                    <span className="text-black text-[28px] mr-2 "><HiOutlineUserCircle /></span>
                    <span className="text-black text-[28px] mr-2 "><LiaShoppingBagSolid /></span>
                    <span className="text-black text-[28px] mr-2 "><BiSearch /></span>
                    <span className="text-black text-[24px] mr-2 "><FaRegHeart /></span>
                </div>
            </nav >
        </div >
    )
}

export default Navbar
