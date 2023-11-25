
import './GalleryCart.css'
const GalleryCart = ({item}) => {
    return (
        
        <div className="rounded-xl border border-[#5b1ae9] box-condidate">
            <img src={item?.image_url} alt="" className="w-full h-[300px] rounded-xl transition-transform duration-300 transform-gpu hover:scale-110"/>
            <div className='content'></div>
        </div>
    );
};

export default GalleryCart;