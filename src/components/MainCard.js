import ProfileBg from '../media/images/profile-bg.jpg';
import ProfileImage from '../media/images/profile-image.jpg';
import PostAvatar from '../media/images/post-avatar.png';
import GlobeIcon from '../media/icons/globe.svg';
import ThreeDotsIcon from '../media/icons/three-dots.svg';
import PlusWhiteIcon from '../media/icons/plus-white.svg';
import NewTabIcon from '../media/icons/new-tab-icon.svg';
import LeftArrow from '../media/icons/arrow-left-desibled.svg';
import RightArrow from '../media/icons/arrow-right.svg';

import PostImage from '../media/images/post-image.jpg';
import PostImage2 from '../media/images/post-image-2.jpg';
import ThumbsUpIcon from '../media/icons/thumbs-up-icon.svg';
import HeartIcon from '../media/icons/heart-icon.svg';
import ClapIcon from '../media/icons/clap-icon.svg';

import LikeIcon from '../media/icons/like.svg';
import CommentIcon from '../media/icons/comment.svg';
import RepostIcon from '../media/icons/repost.svg';
import SendIcon from '../media/icons/send.svg';

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

            <div className='mb-3 pb-1 mt-4 pt-2 px-4 d-flex align-items-center justify-content-between'>
                <h2 className='fw-bold fs-5 text-capitalize mb-0'>Page posts</h2>
                <div className='d-flex align-items-center column-gap-2'>
                    <img src={LeftArrow} alt="" className='h-26 w-26' role='button'/>
                    <img src={RightArrow} alt="" className='h-26 w-26' role='button'/>
                </div>
            </div>

            <div className="row gy-3 mb-3 px-4 pb-3">

                <div className='col-12 col-xl-6'>
                    <div className="bg-white rounded-7 border border-gray-300 pb-4 pt-2">

                        <div className="d-flex justify-content-between px-3 mt-1">

                            <div className="d-flex column-gap-2">
                                <img src={PostAvatar} alt="" className='w-40 h-40'/>
                                <div className="">
                                    <h3 className='fw-semibold fs-7 text-capitalize m-0'>Unfold</h3>
                                    <p className='fs-8 text-black-60 m-0'>262,382 followers</p>
                                    <p className='fs-8 text-black-60 m-0'>3d • <img src={GlobeIcon} alt='' className='w-14 h-14' /></p>
                                </div>
                            </div>

                            <img src={ThreeDotsIcon} alt="" className='w-20 h-4 mt-2' role='button' />

                        </div>

                        <div className="px-3 mt-3 pt-1 mb-2">
                            <p className='fs-7'>
                                BattlePeer is an app that helps users struggling with <span className='text-uppercase'>ptsd</span> and depression connect with   peer 
                                <span className='text-black-60 ms-2'>...see more</span>
                            </p>
                        </div>

                        <img src={PostImage} alt="" className='w-100' />

                        <div className='px-3 mb-3'>
                            <div className='d-flex align-items-center py-2 border-bottom border-gray-300'>

                                <div className='position-relative bg-success h-14'>
                                    <img src={ThumbsUpIcon} alt="" className='w-14 h-14 rounded-circle position-absolute start-0' />
                                    <img src={HeartIcon} alt="" className='w-14 h-14 rounded-circle position-absolute start-10' />
                                    <img src={ClapIcon} alt="" className='w-14 h-14 rounded-circle position-absolute start-20' />
                                </div>

                                <p className='fs-8 text-black-60 mb-0 ms-4 ps-3'>958 • 16 comments • 65 reposts</p>
                            </div>
                        </div>

                        <div className='px-3 d-flex align-items-center justify-content-center'>
                            <div className='text-center px-22'>
                                <img src={LikeIcon} alt="" className='w-24 h-24 mb-1' />
                                <p className='fs-7 text-black-60 text-capitalize m-0'>like</p>
                            </div>
                            <div className='text-center px-22'>
                                <img src={CommentIcon} alt="" className='w-24 h-24 mb-1' />
                                <p className='fs-7 text-black-60 text-capitalize m-0'>comment</p>
                            </div>
                            <div className='text-center px-22'>
                                <img src={RepostIcon} alt="" className='w-24 h-24 mb-1' />
                                <p className='fs-7 text-black-60 text-capitalize m-0'>repost</p>
                            </div>
                            <div className='text-center px-22'>
                                <img src={SendIcon} alt="" className='w-24 h-24 mb-1' />
                                <p className='fs-7 text-black-60 text-capitalize m-0'>send</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='col-12 col-xl-6'>
                    <div className="bg-white rounded-7 border border-gray-300 pb-4 pt-2">

                        <div className="d-flex justify-content-between px-3 mt-1">

                            <div className="d-flex column-gap-2">
                                <img src={PostAvatar} alt="" className='w-40 h-40'/>
                                <div className="">
                                    <h3 className='fw-semibold fs-7 text-capitalize m-0'>Unfold</h3>
                                    <p className='fs-8 text-black-60 m-0'>262,382 followers</p>
                                    <p className='fs-8 text-black-60 m-0'>2d • <img src={GlobeIcon} alt='' className='w-14 h-14' /></p>
                                </div>
                            </div>

                            <img src={ThreeDotsIcon} alt="" className='w-20 h-4 mt-2' role='button' />

                        </div>

                        <div className="px-3 mt-3 pt-1 mb-2">
                            <p className='fs-7'>
                            Join us tomorrow for a second 🍵 TeaTime episode with our Creative Director of Illustration
                                <span className='text-black-60 ms-2'>...see more</span>
                            </p>
                        </div>

                        <img src={PostImage2} alt="" className='w-100' />

                        <div className='px-3 mb-3'>
                            <div className='d-flex align-items-center py-2 border-bottom border-gray-300'>

                                <div className='position-relative bg-success h-14'>
                                    <img src={ThumbsUpIcon} alt="" className='w-14 h-14 rounded position-absolute start-0' />
                                    <img src={HeartIcon} alt="" className='w-14 h-14 rounded position-absolute start-10' />
                                    <img src={ClapIcon} alt="" className='w-14 h-14 rounded position-absolute start-20' />
                                </div>

                                <p className='fs-8 text-black-60 mb-0 ms-4 ps-3'>958 • 16 comments • 65 reposts</p>
                            </div>
                        </div>

                        <div className='px-3 d-flex align-items-center justify-content-center'>
                            <div className='text-center px-22'>
                                <img src={LikeIcon} alt="" className='w-24 h-24 mb-1' />
                                <p className='fs-7 text-black-60 text-capitalize m-0'>like</p>
                            </div>
                            <div className='text-center px-22'>
                                <img src={CommentIcon} alt="" className='w-24 h-24 mb-1' />
                                <p className='fs-7 text-black-60 text-capitalize m-0'>comment</p>
                            </div>
                            <div className='text-center px-22'>
                                <img src={RepostIcon} alt="" className='w-24 h-24 mb-1' />
                                <p className='fs-7 text-black-60 text-capitalize m-0'>repost</p>
                            </div>
                            <div className='text-center px-22'>
                                <img src={SendIcon} alt="" className='w-24 h-24 mb-1' />
                                <p className='fs-7 text-black-60 text-capitalize m-0'>send</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className='border-top border-gray-300'></div>

            <p className='text-center mt-12 fw-bold fs-6 text-black-60' role='button'>See all details</p>

        </div>
    )
}