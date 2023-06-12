import Logo from '../media/icons/logo.svg';
import HomeIcon from '../media/icons/homeIcon.svg';
import NetworkIcon from '../media/icons/networkIcon.svg';
import JobsIcon from '../media/icons/jobsIcon.svg';
import MessageIcon from '../media/icons/messagingIcon.svg';
import NotificationsIcon from '../media/icons/notificationIcon.svg';
import UserProfileIcon from '../media/icons/user-image-menu.png';
import WorkIcon from '../media/icons/workIcon.svg';
import ArrowDown from '../media/icons/arrow-down.svg';
import SearchIcon from '../media/icons/search.svg';

const Navbar = () => {
    return(
        <nav className="position-fixed w-100 top-0 z-3 start-0 end-0 navbar navbar-expand-lg py-2 py-lg-0 bg-white border-bottom border-1 border-gray-300">
            <div className="container justify-content-between">
                <a className="navbar-brand p-0 me-2" href="/">
                    <img src={Logo} alt="" className='w-32 h-32' />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <form className='position-relative'>
                        <input type="text" placeholder='search' className='h-32 form-control border-0 bg-gray-100 rounded-6 py-2 pe-20 ps-40 fs-7 text-gray' />
                        <img src={SearchIcon} alt="" className='w-14 h-15 position-absolute top-50 translate-middle-y start-20' />
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="me-1 fs-8 py-14 nav-link d-flex flex-column align-items-center text-capitalize" href="/">
                                <img src={HomeIcon} alt="" className='w-24 h-24 mb-1' />
                                <span className='opacity-60'>Home</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="mx-1 fs-8 py-14 nav-link d-flex flex-column align-items-center text-capitalize" href="/">
                                <img src={NetworkIcon} alt="" className='w-24 h-24 mb-1' />
                                <span className='opacity-60'>my network</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="mx-1 fs-8 py-14 nav-link d-flex flex-column align-items-center text-capitalize" href="/">
                                <img src={JobsIcon} alt="" className='w-24 h-24 mb-1' />
                                <span className='opacity-60'>jobs</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="mx-1 fs-8 py-14 nav-link d-flex flex-column align-items-center text-capitalize" href="/">
                                <img src={MessageIcon} alt="" className='w-24 h-24 mb-1' />
                                <span className='opacity-60'>messaging</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="mx-1 fs-8 py-14 nav-link d-flex flex-column align-items-center text-capitalize position-relative" href="/">
                                <img src={NotificationsIcon} alt="" className='w-24 h-24 mb-1' />
                                <span className='opacity-60'>notifications</span>
                                <span class="position-absolute top-5 end-18 badge bg-red text-white rounded-pill font-inter fs-9 align-middle fw-semibold py-8 px-1">22</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="mx-1 fs-8 py-14 nav-link d-flex flex-column align-items-center text-capitalize" href="/">
                                <img src={UserProfileIcon} alt="" className='w-24 h-24 mb-1 rounded-circle' />
                                <span className='opacity-60'>
                                    me
                                    <img src={ArrowDown} alt="" className='w-10 h-5 ms-1' />
                                </span>
                            </a>
                        </li>
                        <li className='bg-gray-300 ms-3 me-2' style={{width: '1px'}}></li>
                        <li className="nav-item">
                            <a className="mx-2 fs-8 py-14 nav-link d-flex flex-column align-items-center text-capitalize" href="/">
                                <img src={WorkIcon} alt="" className='w-24 h-24 mb-1' />
                                <span className='opacity-60'>
                                    work
                                    <img src={ArrowDown} alt="" className='w-10 h-5 ms-1' />
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-decoration-underline text-brown fs-8 text-center py-2" href="/">Try Premium for<br /> free</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;