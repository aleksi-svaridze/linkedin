import img1 from '../media/images/post-avatar-1.jpg'
import img2 from '../media/images/post-avatar-2.jpg'
import img3 from '../media/images/post-avatar-3.jpg'
import img4 from '../media/images/post-avatar-4.jpg'
import img5 from '../media/images/post-avatar-5.jpg'

import user1 from '../media/images/users/user-1.jpg';
import user2 from '../media/images/users/user-2.jpg';
import user3 from '../media/images/users/user-3.jpg';
import user4 from '../media/images/users/user-4.png';
import user5 from '../media/images/users/user-5.png';
import user6 from '../media/images/users/user-6.png';
import user7 from '../media/images/users/user-7.png';
import user8 from '../media/images/users/user-8.png';
import user9 from '../media/images/users/user-9.png';
import user10 from '../media/images/users/user-10.png';
import user11 from '../media/images/users/user-11.png';
import user12 from '../media/images/users/user-12.png';
import user13 from '../media/images/users/user-13.png';
import user14 from '../media/images/users/user-14.png';
import user15 from '../media/images/users/user-15.png';

import PlusGrayIcon from '../media/icons/plus-gray.svg';

export const PeopleViewed = () => {
    return (
        <div className="bg-white pt-4 pb-3 rounded-7 border border-gray-300">
            <div className="px-4 pb-12">
                <h2 className="fw-bold fs-5 m-0">Pages people also viewed</h2>
            </div>

            {/* Card */}
            <div className="px-4 mt-20" role='button'>
                <div className="border-bottom border-gray-300 d-flex column-gap-4 pb-20">
                    <img src={img1} alt="" className='w-48 h-48' /> {/* first child */}
                    <div>                                           {/* second child */}
                        <h3 className='fw-medium fs-6 mb-0'>Pentagram</h3>
                        <h4 className='fs-8 mb-2'>Design Services</h4>
                        <p className='fs-8 text-black opacity-60 mb-0'>
                            <span>282,195</span> 
                            &nbsp;followers
                        </p>

                        <div className='d-flex align-items-center my-3 h-30 column-gap-2'>

                            <div className='position-relative h-100 w-73'>
                                <img src={user3} alt="" className='w-30 h-30 rounded-circle position-absolute start-0' />
                                <img src={user2} alt="" className='w-30 h-30 rounded-circle position-absolute start-19' />
                                <img src={user1} alt="" className='w-30 h-30 rounded-circle position-absolute start-38' />
                            </div>

                            <p className='fs-8 text-black-60 mb-0'>18 connections follow this page</p>
                        </div>

                        <div className='bg-white rounded-pill border border-black-60 text-capitalize h-32 w-97 d-flex align-items-center justify-content-center column-gap-1'>
                            <img src={PlusGrayIcon} alt="" className='w-12 h-12' />
                            <span className='fw-bold fs-7 text-black-60'>follow</span>
                        </div>

                    </div>
                </div>
            </div>
            {/* End card */}

            {/* Card */}
            <div className="px-4 mt-20" role='button'>
                <div className="border-bottom border-gray-300 d-flex column-gap-4 pb-20">
                    <img src={img2} alt="" className='w-48 h-48' /> {/* first child */}
                    <div>                                           {/* second child */}
                        <h3 className='fw-medium fs-6 mb-0'>Designit</h3>
                        <h4 className='fs-8 mb-2'>Design Services</h4>
                        <p className='fs-8 text-black opacity-60 mb-0'>
                            <span>166,822</span> 
                            &nbsp;followers
                        </p>

                        <div className='d-flex align-items-center my-3 h-30 column-gap-2'>

                            <div className='position-relative h-100 w-73'>
                                <img src={user7} alt="" className='w-30 h-30 rounded-circle position-absolute start-0' />
                                <img src={user8} alt="" className='w-30 h-30 rounded-circle position-absolute start-19' />
                                <img src={user9} alt="" className='w-30 h-30 rounded-circle position-absolute start-38' />
                            </div>

                            <p className='fs-8 text-black-60 mb-0'>18 connections follow this page</p>
                        </div>

                        <div className='bg-white rounded-pill border border-black-60 text-capitalize h-32 w-97 d-flex align-items-center justify-content-center column-gap-1'>
                            <img src={PlusGrayIcon} alt="" className='w-12 h-12' />
                            <span className='fw-bold fs-7 text-black-60'>follow</span>
                        </div>

                    </div>
                </div>
            </div>
            {/* End card */}

             {/* Card */}
             <div className="px-4 mt-20" role='button'>
                <div className="d-flex column-gap-4 pb-20">
                    <img src={img3} alt="" className='w-48 h-48' /> {/* first child */}
                    <div>                                           {/* second child */}
                        <h3 className='fw-medium fs-6 mb-0'>Huge</h3>
                        <h4 className='fs-8 mb-2'>Sporting Goods Manufacturing</h4>
                        <p className='fs-8 text-black opacity-60 mb-0'>
                            <span>185,130</span> 
                            &nbsp;followers
                        </p>

                        <div className='d-flex align-items-center my-3 h-30 column-gap-2'>

                            <div className='position-relative h-100 w-73'>
                                <img src={user4} alt="" className='w-30 h-30 rounded-circle position-absolute start-0' />
                                <img src={user5} alt="" className='w-30 h-30 rounded-circle position-absolute start-19' />
                                <img src={user6} alt="" className='w-30 h-30 rounded-circle position-absolute start-38' />
                            </div>

                            <p className='fs-8 text-black-60 mb-0'>18 connections follow this page</p>
                        </div>

                        <div className='bg-white rounded-pill border border-black-60 text-capitalize h-32 w-97 d-flex align-items-center justify-content-center column-gap-1'>
                            <img src={PlusGrayIcon} alt="" className='w-12 h-12' />
                            <span className='fw-bold fs-7 text-black-60'>follow</span>
                        </div>

                    </div>
                </div>
            </div>
            {/* End card */}

            
            <div className='border-top border-gray-300 mb-12 mt-2'></div>

            <p className='text-center mb-0 fw-bold fs-6 text-black-60' role='button'>See all similar pages</p>
        </div>
    )
}

export const PeopleFollow = () => {
    return (
        <div className="bg-white pt-4 pb-3 rounded-7 border border-gray-300">
            <div className="px-4 pb-12">
                <h2 className="fw-bold fs-5 m-0">People also follow</h2>
            </div>

            {/* Card */}
            <div className="px-4 mt-20" role='button'>
                <div className="border-bottom border-gray-300 d-flex column-gap-4 pb-20">
                    <img src={img4} alt="" className='w-48 h-48' /> {/* first child */}
                    <div>                                           {/* second child */}
                        <h3 className='fw-medium fs-6 mb-0'>IDEO</h3>
                        <h4 className='fs-8 mb-2'>Sporting Goods Manufacturing</h4>
                        <p className='fs-8 text-black opacity-60 mb-0'>
                            <span>558,490</span> 
                            &nbsp;followers
                        </p>

                        <div className='d-flex align-items-center my-3 h-30 column-gap-2'>

                            <div className='position-relative h-100 w-73'>
                                <img src={user10} alt="" className='w-30 h-30 rounded-circle position-absolute start-0' />
                                <img src={user11} alt="" className='w-30 h-30 rounded-circle position-absolute start-19' />
                                <img src={user12} alt="" className='w-30 h-30 rounded-circle position-absolute start-38' />
                            </div>

                            <p className='fs-8 text-black-60 mb-0'>18 connections follow this page</p>
                        </div>

                        <div className='bg-white rounded-pill border border-black-60 text-capitalize h-32 w-97 d-flex align-items-center justify-content-center column-gap-1'>
                            <img src={PlusGrayIcon} alt="" className='w-12 h-12' />
                            <span className='fw-bold fs-7 text-black-60'>follow</span>
                        </div>

                    </div>
                </div>
            </div>
            {/* End card */}

            {/* Card */}
            <div className="px-4 mt-20" role='button'>
                <div className="border-bottom border-gray-300 d-flex column-gap-4 pb-20">
                    <img src={img5} alt="" className='w-48 h-48' /> {/* first child */}
                    <div>                                           {/* second child */}
                        <h3 className='fw-medium fs-6 mb-0'>Landor</h3>
                        <h4 className='fs-8 mb-2'>Advertising Services</h4>
                        <p className='fs-8 text-black opacity-60 mb-0'>
                            <span>109,377</span> 
                            &nbsp;followers
                        </p>

                        <div className='d-flex align-items-center my-3 h-30 column-gap-2'>

                            <div className='position-relative h-100 w-73'>
                                <img src={user13} alt="" className='w-30 h-30 rounded-circle position-absolute start-0' />
                                <img src={user14} alt="" className='w-30 h-30 rounded-circle position-absolute start-19' />
                                <img src={user15} alt="" className='w-30 h-30 rounded-circle position-absolute start-38' />
                            </div>

                            <p className='fs-8 text-black-60 mb-0'>18 connections follow this page</p>
                        </div>

                        <div className='bg-white rounded-pill border border-black-60 text-capitalize h-32 w-97 d-flex align-items-center justify-content-center column-gap-1'>
                            <img src={PlusGrayIcon} alt="" className='w-12 h-12' />
                            <span className='fw-bold fs-7 text-black-60'>follow</span>
                        </div>

                    </div>
                </div>
            </div>
            {/* End card */}

            
            <div className='border-top border-gray-300 mb-12 mt-2'></div>

            <p className='text-center mb-0 fw-bold fs-6 text-black-60' role='button'>See all similar pages</p>
        </div>
    )
}