import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Calendar, Tag, ArrowLeft, Heart } from 'lucide-react';

const diaries = [
  { 
    id: 1, 
    title: '新年第一天', 
    content: '今天是新年的第一天，全家人一起吃了年夜饭。妈妈做了好多好吃的，有糖醋鱼、红烧肉、还有我最喜欢的春卷。饭后我们一起看了春晚，妹妹还表演了一段舞蹈，逗得大家哈哈大笑。新的一年，希望全家人身体健康，幸福美满！', 
    category: '节日', 
    date: '2024-01-01',
    likes: 28 
  },
  { 
    id: 2, 
    title: '周末郊游', 
    content: '天气很好，我们一家人去郊外野餐。爸爸负责搭帐篷，妈妈准备了丰富的食物，我和妹妹在草地上奔跑玩耍。我们还看到了很多小动物，有小兔子、小松鼠，还有五颜六色的蝴蝶。这是一个愉快的周末，希望以后能经常这样一家人出来玩。', 
    category: '旅行', 
    date: '2023-12-28',
    likes: 35 
  },
  { 
    id: 3, 
    title: '妹妹的生日', 
    content: '今天是妹妹的生日，我们准备了惊喜派对。妈妈烤了一个漂亮的生日蛋糕，我用零花钱给她买了一个可爱的洋娃娃。当妹妹看到蛋糕和礼物时，眼睛都亮了，开心地拥抱了我们每一个人。看着她快乐的样子，我们全家都感到很幸福。', 
    category: '生日', 
    date: '2023-12-20',
    likes: 42 
  },
  { 
    id: 4, 
    title: '第一次做蛋糕', 
    content: '今天我和妈妈一起学做蛋糕。一开始我觉得很简单，但是真正动手做起来才发现原来这么复杂。打鸡蛋、搅拌面粉、控制烤箱温度，每一步都需要耐心和细心。虽然第一次做的蛋糕有点焦了，但是全家人都吃得很开心。下次我一定会做得更好！', 
    category: '日常', 
    date: '2023-12-15',
    likes: 23 
  },
  { 
    id: 5, 
    title: '下雪了', 
    content: '今天早上醒来，发现窗外白茫茫一片，下雪了！这是今年的第一场雪。我和妹妹兴奋地穿上棉袄，跑到院子里堆雪人、打雪仗。爸爸还给我们拍了很多照片，记录下这个美好的时刻。下雪天虽然很冷，但是和家人在一起就觉得很温暖。', 
    category: '天气', 
    date: '2023-12-10',
    likes: 56 
  },
  { 
    id: 6, 
    title: '爸爸的生日', 
    content: '今天是爸爸的生日，我们给他准备了一个特别的惊喜。妈妈做了爸爸最喜欢的长寿面，我和妹妹亲手制作了一张生日贺卡。爸爸看到我们的礼物，感动得眼眶都红了。他说这是他收到过最好的礼物。家人的爱就是最好的礼物！', 
    category: '生日', 
    date: '2023-11-25',
    likes: 38 
  },
];

const categories = ['全部', '节日', '旅行', '生日', '日常', '天气'];

export default function Diary() {
  const [selectedDiary, setSelectedDiary] = useState<typeof diaries[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredDiaries = activeCategory === '全部' 
    ? diaries 
    : diaries.filter(diary => diary.category === activeCategory);

  const groupedDiaries = filteredDiaries.reduce((groups, diary) => {
    const month = diary.date.substring(0, 7);
    if (!groups[month]) {
      groups[month] = [];
    }
    groups[month].push(diary);
    return groups;
  }, {} as Record<string, typeof diaries>);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navbar />
      
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-[#FDF6E3] to-[#FAF8F5]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5D4E37] mb-6">生活日记</h1>
          <p className="text-xl text-[#8B7355] max-w-2xl mx-auto">
            记录每一天的生活点滴，留下珍贵的回忆
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#F5A623] text-white shadow-lg'
                    : 'bg-white text-[#5D4E37] hover:bg-[#FDF6E3] shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {Object.entries(groupedDiaries).map(([month, monthDiaries]) => (
            <div key={month} className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#F5A623]/10 rounded-full flex items-center justify-center">
                  <Calendar size={24} className="text-[#F5A623]" />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-[#5D4E37]">{month.replace('-', '年')}月</h2>
                  <p className="text-[#8B7355] text-sm">{monthDiaries.length} 篇日记</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {monthDiaries.map((diary) => (
                  <div 
                    key={diary.id} 
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedDiary(diary)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#5D4E37] mb-2">{diary.title}</h3>
                        <div className="flex items-center space-x-4 text-[#8B7355] text-sm">
                          <span className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{diary.date}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Tag size={14} />
                            <span className="bg-[#FDF6E3] text-[#F5A623] px-2 py-1 rounded-full text-xs">{diary.category}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Heart size={14} className="text-red-400" />
                            <span>{diary.likes}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#8B7355] line-clamp-2">{diary.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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

      {selectedDiary && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedDiary(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="flex items-center space-x-2 text-[#8B7355] hover:text-[#F5A623] transition-colors mb-6"
              onClick={() => setSelectedDiary(null)}
            >
              <ArrowLeft size={20} />
              <span>返回列表</span>
            </button>
            
            <h1 className="text-3xl font-bold text-[#5D4E37] mb-6">{selectedDiary.title}</h1>
            
            <div className="flex items-center space-x-4 text-[#8B7355] mb-6">
              <span className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>{selectedDiary.date}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Tag size={16} />
                <span className="bg-[#FDF6E3] text-[#F5A623] px-3 py-1 rounded-full">{selectedDiary.category}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Heart size={16} className="text-red-400" />
                <span>{selectedDiary.likes}</span>
              </span>
            </div>
            
            <div className="prose prose-lg">
              <p className="text-[#5D4E37] leading-relaxed text-lg whitespace-pre-line">
                {selectedDiary.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
