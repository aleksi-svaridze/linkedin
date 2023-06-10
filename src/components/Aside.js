import img1 from '../media/images/post-avatar-1.jpg'
import img2 from '../media/images/post-avatar-2.jpg'
import img3 from '../media/images/post-avatar-3.jpg'
import img4 from '../media/images/post-avatar-4.jpg'
import img5 from '../media/images/post-avatar-5.jpg'

import user1 from '../media/images/users/user-1.jpg';
import user2 from '../media/images/users/user-2.jpg';
import user3 from '../media/images/users/user-3.jpg';

const Aside = () => {
    return (
        <div className="bg-white pt-4 pb-3 rounded-7 border border-gray-300">
            <div className="px-4 pb-12">
                <h2 className="fw-bold fs-5 m-0">Pages people also viewed</h2>
            </div>

            {/* Card */}
            <div className="px-4 mt-20" role='button'>
                <div className="border-bottom border-gray-300 d-flex column-gap-4">
                    <img src={img1} alt="" className='w-48 h-48' /> {/* first child */}
                    <div>                                           {/* second child */}
                        <h3 className='fw-medium fs-6 mb-0'>Pentagram</h3>
                        <h4 className='fs-8 mb-2'>Design Services</h4>
                        <p className='fs-8 text-black opacity-60 mb-0'>
                            <span>282,195</span> 
                            followers
                        </p>

                        <div className='d-flex align-items-center my-3 h-30'>

                            <div className='position-relative bg-success h-100'>
                                <img src={user3} alt="" className='w-30 h-30 rounded-circle position-absolute start-0' />
                                <img src={user2} alt="" className='w-30 h-30 rounded-circle position-absolute start-10' />
                                <img src={user1} alt="" className='w-30 h-30 rounded-circle position-absolute start-20' />
                            </div>

                            <p className='fs-8 text-black-60 mb-0 ms-5 ps-2'>18 connections follow this page</p>
                        </div>

                    </div>
                </div>
            </div>
            {/* End card */}

        </div>
    )
}

export default Aside;