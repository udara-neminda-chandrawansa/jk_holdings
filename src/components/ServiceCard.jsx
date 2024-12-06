
function ServiceCard({img, text}){
    return(
        <div className="h-[20dvh] aspect-square bg-[#C10000] max-md:w-full">
            <img src={img} alt="" className='object-cover w-full h-3/4' />
            <p className="flex items-center justify-center text-white h-1/4">{text}</p>
        </div>
    );
}

export default ServiceCard;