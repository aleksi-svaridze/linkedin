import img1 from '../media/images/post-avatar-1.jpg'
import img2 from '../media/images/post-avatar-2.jpg'
import img3 from '../media/images/post-avatar-3.jpg'
import img4 from '../media/images/post-avatar-4.jpg'
import img5 from '../media/images/post-avatar-5.jpg'

const Aside = () => {
    return (
        <div className="bg-white pt-4 pb-3 rounded-7 border border-gray-300">
            <div className="px-4 pb-12">
                <h2 className="fw-bold fs-5 m-0">Pages people also viewed</h2>
            </div>

            {/* Card */}
            <div className="px-4 mt-20">
                <div className="border-bottom border-gray-300 d-flex">
                    <img src={img1} alt="" className='w-48 h-48' />
                </div>
            </div>
            {/* End card */}

        </div>
    )
}

export default Aside;