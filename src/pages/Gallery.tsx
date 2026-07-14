import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';

const categories = [
  { id: 'all', name: '全部', description: '所有照片' },
  { id: 'family', name: '家庭聚会', description: '记录家庭团聚的美好时刻' },
  { id: 'travel', name: '旅行时光', description: '一起走过的风景' },
  { id: 'daily', name: '日常生活', description: '平凡中的幸福' },
];

const photos = [
  { id: 1, category: 'family', title: '春节全家福', src: '/father.png', date: '2024-02-10', description: '一家人团团圆圆过大年' },
  { id: 2, category: 'family', title: '周末聚餐', src: '/mother.png', date: '2024-01-28', description: '妈妈做了一桌丰盛的饭菜' },
  { id: 3, category: 'travel', title: '海边度假', src: '/me.png', date: '2024-01-15', description: '阳光、沙滩、海浪' },
  { id: 4, category: 'travel', title: '山间漫步', src: '/sister.png', date: '2024-01-08', description: '呼吸新鲜空气，欣赏大自然' },
  { id: 5, category: 'daily', title: '我的生日', src: '/me.png', date: '2024-01-05', description: '全家人一起庆祝生日' },
  { id: 6, category: 'daily', title: '妹妹画画', src: '/mother.png', date: '2023-12-28', description: '小画家正在创作中' },
  { id: 7, category: 'family', title: '中秋节赏月', src: '/me.png', date: '2023-09-17', description: '月圆人团圆' },
  { id: 8, category: 'travel', title: '古镇游', src: '/sister.png', date: '2023-08-20', description: '感受传统文化的魅力' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  const currentIndex = selectedPhoto ? photos.indexOf(selectedPhoto) : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedPhoto(photos[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < photos.length - 1) {
      setSelectedPhoto(photos[currentIndex + 1]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navbar />
      
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-[#FDF6E3] to-[#FAF8F5]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5D4E37] mb-6">照片相册</h1>
          <p className="text-xl text-[#8B7355] max-w-2xl mx-auto">
            用镜头捕捉生活中的每一个美好瞬间，留下珍贵的回忆
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#F5A623] text-white shadow-lg'
                    : 'bg-white text-[#5D4E37] hover:bg-[#FDF6E3] shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPhotos.map((photo) => (
              <div 
                key={photo.id} 
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5D4E37]/90 via-[#5D4E37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg mb-1">{photo.title}</h3>
                  <div className="flex items-center space-x-3 text-white/80 text-sm">
                    <span className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{photo.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Tag size={14} />
                      <span>{categories.find(c => c.id === photo.category)?.name}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#5D4E37] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">幸福之家</h3>
              <p className="text-white/70">温馨和谐，幸福美满</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <a href="/" className="text-white/70 hover:text-white transition-colors">首页</a>
              <a href="/family" className="text-white/70 hover:text-white transition-colors">家庭介绍</a>
              <a href="/gallery" className="text-white/70 hover:text-white transition-colors">照片相册</a>
              <a href="/diary" className="text-white/70 hover:text-white transition-colors">生活日记</a>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/50 text-sm">
            <p>© 2024 幸福之家. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-[#F5A623] transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={32} />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            disabled={currentIndex === 0}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors ${
              currentIndex === 0 ? 'text-white/30 cursor-not-allowed' : 'text-white hover:text-[#F5A623]'
            }`}
          >
            <ChevronLeft size={48} />
          </button>
          
          <div 
            className="max-w-4xl max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedPhoto.src} 
              alt={selectedPhoto.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-bold mb-2">{selectedPhoto.title}</h3>
              <p className="text-white/70">{selectedPhoto.description}</p>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-3 text-white/50 text-sm">
                <span>{selectedPhoto.date}</span>
                <span>{categories.find(c => c.id === selectedPhoto.category)?.name}</span>
              </div>
            </div>
          </div>
          
          <button 
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors ${
              currentIndex === photos.length - 1 ? 'text-white/30 cursor-not-allowed' : 'text-white hover:text-[#F5A623]'
            }`}
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            disabled={currentIndex === photos.length - 1}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
}
