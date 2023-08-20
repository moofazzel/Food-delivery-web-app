import { useEffect, useState } from 'react';
import { GalleryItem } from '../../types/galleryType';

const Gallery = () => {
  const [galleries, setGalleries] = useState<GalleryItem[]>([]);
  useEffect(() => {
    fetch('Gallery.json')
      .then((res) => res.json())
      .then((data) => setGalleries(data));
  }, []);

  return (
    <>
      <h2 className="text-3xl lg:text-5xl text-black my-8 text-center">
        Gallery
      </h2>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16 gap-2">
        {galleries.map((gallery) => (
          <div
            className="relative overflow-hidden h-[400px] rounded"
            key={gallery.img}
          >
            <div className="aspect-w-4 aspect-h-3 group">
              <div
                className="absolute inset-0 transition-transform duration-700 transform scale-100 group-hover:scale-110 group-hover:cursor-pointer"
                style={{
                  background: `linear-gradient(#00000030, #00000030), url(${gallery.img})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="flex items-center justify-center h-full opacity-0 group-hover:opacity-100 duration-300">
                  <div className="text-center">
                    <h6 className="text-sm text-white font-semibold">
                      {gallery.title}
                    </h6>
                    <h4 className="text-xl mb-3 text-white font-semibold">
                      {gallery.name}
                    </h4>
                    <button className="bg-primary text-white px-4 py-3">
                      View All Collection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
