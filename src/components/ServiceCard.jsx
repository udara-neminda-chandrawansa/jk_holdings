function ServiceCard({ img, text }) {
    return (
      <div className="relative aspect-square bg-[#C10000] max-md:w-full group cursor-pointer">
        <img
          src={img}
          alt="card-img"
          className="object-cover w-full h-3/4"
        />
        <p className="flex items-center justify-center text-white h-1/4">
          {text}
        </p>
        {/* Overlay */}
        <div className="absolute top-0 left-0 flex items-center justify-center w-full transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 h-3/4 group-hover:opacity-100">
          <span className="text-sm text-white">View More Info</span>
        </div>
      </div>
    );
  }
  
  export default ServiceCard;
  