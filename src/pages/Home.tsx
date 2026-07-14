import Navbar from '@/components/Navbar';
import { ChevronRight, Heart, Camera, BookOpen, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const assetUrl = (file: string) => `${import.meta.env.BASE_URL}${file}`;

const latestPhotos = [
  { id: 1, title: '家庭聚会', src: assetUrl('father.png'), date: '2024-01-15' },
  { id: 2, title: '旅行时光', src: assetUrl('mother.png'), date: '2024-01-10' },
  { id: 3, title: '日常生活', src: assetUrl('me.png'), date: '2024-01-08' },
  { id: 4, title: '温馨时刻', src: assetUrl('sister.png'), date: '2024-01-05' },
];

const latestDiaries = [
  { id: 1, title: '新年第一天', content: '今天是新年的第一天，全家人一起吃了年夜饭...', date: '2024-01-01' },
  { id: 2, title: '周末郊游', content: '天气很好，我们一家人去郊外野餐...', date: '2023-12-28' },
  { id: 3, title: '妹妹的生日', content: '今天是妹妹的生日，我们准备了惊喜派对...', date: '2023-12-20' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navbar />
      
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDF6E3] via-[#F5A623]/20 to-[#8B7355]/10" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#F5A623] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#8B7355] rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-[#FDF6E3] rounded-full blur-2xl" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-[#F5A623]/10 text-[#F5A623] px-4 py-2 rounded-full mb-6 animate-pulse">
            <Heart size={18} fill="currentColor" />
            <span className="text-sm font-medium">欢迎来到幸福之家</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-[#5D4E37] mb-6 leading-tight">
            温馨和谐
            <br />
            <span className="text-[#F5A623]">幸福美满</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#8B7355] mb-10 max-w-2xl mx-auto leading-relaxed">
            我们是一个充满爱与欢笑的家庭，感谢您的访问！
            <br />
            在这里，记录生活点滴，分享美好时光。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/family" 
              className="group flex items-center space-x-2 bg-[#F5A623] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#E59613] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>了解我们</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/gallery" 
              className="flex items-center space-x-2 bg-white text-[#5D4E37] px-8 py-4 rounded-full font-semibold hover:bg-[#FDF6E3] transition-all duration-300 hover:scale-105 border border-[#8B7355]/20"
            >
              <Camera size={20} />
              <span>浏览相册</span>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight size={32} className="text-[#8B7355] rotate-90" />
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#5D4E37] mb-2">最新照片</h2>
              <p className="text-[#8B7355]">记录生活中的美好瞬间</p>
            </div>
            <Link to="/gallery" className="flex items-center space-x-2 text-[#F5A623] hover:text-[#E59613] transition-colors font-medium">
              <span>查看全部</span>
              <ChevronRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {latestPhotos.map((photo) => (
              <div key={photo.id} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5D4E37]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold">{photo.title}</h3>
                  <p className="text-white/80 text-sm">{photo.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#FDF6E3]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#5D4E37] mb-2">生活日记</h2>
              <p className="text-[#8B7355]">记录每一天的生活点滴</p>
            </div>
            <Link to="/diary" className="flex items-center space-x-2 text-[#F5A623] hover:text-[#E59613] transition-colors font-medium">
              <span>查看全部</span>
              <ChevronRight size={18} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {latestDiaries.map((diary) => (
              <div key={diary.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center space-x-2 text-[#8B7355] text-sm mb-4">
                  <Calendar size={16} />
                  <span>{diary.date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#5D4E37] mb-3">{diary.title}</h3>
                <p className="text-[#8B7355] mb-4 line-clamp-2">{diary.content}</p>
                <Link to="/diary" className="inline-flex items-center space-x-1 text-[#F5A623] hover:text-[#E59613] font-medium">
                  <BookOpen size={16} />
                  <span>阅读全文</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#5D4E37] mb-6">我们的家庭理念</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-[#F5A623]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-bold text-[#5D4E37] mb-2">爱与关怀</h3>
              <p className="text-[#8B7355]">相互关爱，温暖彼此的心</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-[#F5A623]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera size={32} className="text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-bold text-[#5D4E37] mb-2">记录美好</h3>
              <p className="text-[#8B7355]">用镜头捕捉每一个珍贵瞬间</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-[#F5A623]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={32} className="text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-bold text-[#5D4E37] mb-2">分享快乐</h3>
              <p className="text-[#8B7355]">将幸福传递给每一个人</p>
            </div>
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
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-white/70 hover:text-white transition-colors">首页</Link>
              <Link to="/family" className="text-white/70 hover:text-white transition-colors">家庭介绍</Link>
              <Link to="/gallery" className="text-white/70 hover:text-white transition-colors">照片相册</Link>
              <Link to="/diary" className="text-white/70 hover:text-white transition-colors">生活日记</Link>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/50 text-sm">
            <p>© 2024 幸福之家. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}