import PopupImg from '../media/images/popup-img.png';
import ThreePopupDots from '../media/icons/three-dots-mini.svg';
import EditIcon from '../media/icons/edit.svg';
import ArrowUpIcon from '../media/icons/arrow-up.svg';

const Popup = () => {
    return (
        <div className="position-fixed bottom-0 end-0 bg-white h-72 w-280 rounded-top-7 p-2 shadow-s border border-gray-light">
            <div className="d-flex align-items-center justify-content-between">

                <div className="d-flex align-items-center column-gap-2">  {/* First child */}
                    <div className="rounded-circle w-32 h-32 position-relative">
                        <img src={PopupImg} alt="" className="rounded-circle w-32 h-32" />
                        <span className='position-absolute w-8 h-8 bottom-0 end-0 rounded-circle bg-green shadow-white'></span>
                    </div>
                    <span className="fw-semibold fs-7">Messaging</span>
                </div>
                 
                 <div className='d-flex align-items-center column-gap-3'> {/* Second child */}
                    <img src={ThreePopupDots} alt="" role='button' className='w-16 h-16' />
                    <img src={EditIcon} alt="" role='button' className='w-16 h-16' />
                    <img src={ArrowUpIcon} alt="" role='button' className='w-16 h-16' />
                </div>  
            </div>
        </div>
    )
}

export default Popup;