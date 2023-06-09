import ProfileBg from '../media/images/profile-bg.jpg';
import ProfileImage from '../media/images/profile-image.jpg';
import PlusWhiteIcon from '../media/icons/plus-white.svg';
import NewTabIcon from '../media/icons/new-tab-icon.svg';

export const MainCard = () => {
    return(
        <div className="bg-white rounded-7 border border-gray-300">
            <div className="h-136 rounded-top-7 background-position-center background-repeat-no-repeat background-size-cover position-relative" style={{backgroundImage: `url(${ProfileBg})`}}>
                <div className="h-106 w-106 border-2 background-position-center background-repeat-no-repeat background-size-cover position-absolute start-24 top-72" style={{backgroundImage: `url(${ProfileImage})`}}></div>
            </div>

            <div className='mt-5 pt-3 px-4'>
                <h1 className='fw-bold fs-4'>unfold</h1>
                <p className='fs-6 mb-2 text-capitalize'>Creative Digital Design Agency - Clients include: Facebook, Samsung, Berkshire Hathaway, Ripple, Paypal, Adobe & More</p>
                <p className='fs-7 text-capitalize opacity-60 mb-3'>Graphic Design • North Port, FL • 262,382 followers</p>
                <h5 className='fw-bold fs-6 opacity-60'>See all 33 employees on LinkedIn</h5>
            </div>

            <div className='d-flex align-items-center column-gap-2 px-4 my-3 flex-wrap row-gap-2'>

                <div className="h-32 w-133 bg-blue text-white rounded-pill fw-bold fs-7 d-flex align-items-center justify-content-center column-gap-2" role='button'>
                    <img src={PlusWhiteIcon} alt="" className='w-12 h-12' />
                    Follow
                </div>

                <div className="btn h-32 w-150 rounded-pill fw-bold fs-7 d-flex align-items-center justify-content-center column-gap-2 text-blue border border-blue" role='button'>
                    Visit website
                    <img src={NewTabIcon} alt="" className='w-12 h-12' />
                </div>

                <div className="btn h-32 w-69 rounded-pill fw-bold fs-7 d-flex align-items-center justify-content-center text-black-60 border border-black-60" role='button'>More</div>
            </div>

            <div className='border-top border-gray-300'></div>

            <nav className='d-flex overflow-hidden rounded-bottom-7 flex-wrap'>
                <a href="/" className='border-bottom border-2 border-green px-3 pt-3 pb-14 text-decoration-none text-capitalize fw-bold fs-6 text-green'>home</a>
                <a href="/" className='px-3 pt-3 pb-14 text-decoration-none text-capitalize fw-bold fs-6 text-black-60'>about</a>
                <a href="/" className='px-3 pt-3 pb-14 text-decoration-none text-capitalize fw-bold fs-6 text-black-60'>posts</a>
                <a href="/" className='px-3 pt-3 pb-14 text-decoration-none text-capitalize fw-bold fs-6 text-black-60'>jobs</a>
                <a href="/" className='px-3 pt-3 pb-14 text-decoration-none text-capitalize fw-bold fs-6 text-black-60'>life</a>
                <a href="/" className='px-3 pt-3 pb-14 text-decoration-none text-capitalize fw-bold fs-6 text-black-60'>people</a>
                <a href="/" className='px-3 pt-3 pb-14 text-decoration-none text-capitalize fw-bold fs-6 text-black-60'>events</a>
                <a href="/" className='px-3 pt-3 pb-14 text-decoration-none text-capitalize fw-bold fs-6 text-black-60'>videos</a>
            </nav>
        </div>
    )
}

export const AboutCard = () => {
    return(
        <div className="bg-white rounded-7 border border-gray-300">

            <div className='mt-4 pt-2 px-4'>
                <h2 className='fw-bold fs-5 text-capitalize mb-3'>about</h2>
                <p className='fs-7 text-black-60 mb-3 pb-3'>We are Creative Design Agency. From ideation to execution - we discover the brand that simply fits and leaves an impression in the minds of your audience.</p>
            </div>

            <div className='border-top border-gray-300'></div>

            <p className='text-center mt-12 fw-bold fs-6 text-black-60' role='button'>See all details</p>

        </div>
    )
}


export const PostCard = () => {
    return(
        <div className="bg-white rounded-7 border border-gray-300">

            <div className='mt-4 pt-2 px-4'>
                <h2 className='fw-bold fs-5 text-capitalize mb-3'>Page posts</h2>
            </div>

            <div className='border-top border-gray-300'></div>

            <p className='text-center mt-12 fw-bold fs-6 text-black-60' role='button'>See all details</p>

        </div>
    )
}