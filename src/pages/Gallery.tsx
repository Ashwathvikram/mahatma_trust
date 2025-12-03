import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { GalleryImage } from '../types';
import { cn } from '../lib/utils';

const images: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200',
    alt: 'Children learning in a classroom',
    category: 'Education'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1200',
    alt: 'Volunteers distributing food',
    category: 'Community'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1200',
    alt: 'Medical checkup camp',
    category: 'Healthcare'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200',
    alt: 'Planting trees',
    category: 'Environment'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1200',
    alt: 'Clean water pump inauguration',
    category: 'Infrastructure'
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1200',
    alt: 'Community gathering',
    category: 'Community'
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl mb-4">Impact Gallery</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A visual journey through the lives we've touched and the communities we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div 
              key={image.id}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl bg-slate-100"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="rounded-full bg-white/90 p-3 text-slate-900 shadow-lg">
                  <ZoomIn className="h-6 w-6" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-medium text-white">{image.category}</p>
                <p className="text-xs text-slate-200">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          
          <div 
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[85vh] w-full object-contain"
            />
            <div className="bg-white p-4">
              <h3 className="text-lg font-semibold text-slate-900">{selectedImage.category}</h3>
              <p className="text-slate-600">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
