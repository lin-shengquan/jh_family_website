import Navbar from '@/components/Navbar';
import { Heart, Calendar, MapPin, Award } from 'lucide-react';

const familyMembers = [
  { id: 1, name: '爸爸', role: '父亲', avatar: '/father.png', bio: '家里的顶梁柱，热爱工作和家庭，是我们最坚实的后盾。工作之余喜欢运动和阅读，总是用行动教会我们责任与担当。' },
  { id: 2, name: '妈妈', role: '母亲', avatar: '/mother.png', bio: '温柔贤惠，照顾全家的生活起居。她的厨艺堪称一绝，每一顿饭都充满了爱的味道。是家里的灵魂人物，用爱温暖着每一个人。' },
  { id: 3, name: '我', role: '儿子', avatar: '/me.png', bio: '阳光开朗，热爱运动，尤其喜欢足球。正在努力学习，追求自己的梦想。是妹妹的好榜样，也是父母的骄傲。' },
  { id: 4, name: '妹妹', role: '女儿', avatar: '/sister.png', bio: '聪明可爱，活泼好动，是家里的开心果。喜欢画画和跳舞，有着丰富的想象力。给我们的生活带来了无尽的欢乐。' },
];

const familyTimeline = [
  { year: '2005', event: '爸爸妈妈相遇并相爱', icon: Heart },
  { year: '2008', event: '我们的小家庭组建完成', icon: Calendar },
  { year: '2014', event: '我出生，家里充满了欢声笑语', icon: Award },
  { year: '2015', event: '妹妹降临，家庭更加完整', icon: Award },
  { year: '2024', event: '创建家庭网站，记录美好时光', icon: Heart },
];

export default function Family() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navbar />
      
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-[#FDF6E3] to-[#FAF8F5]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5D4E37] mb-6">幸福之家</h1>
          <p className="text-xl text-[#8B7355] max-w-2xl mx-auto">
            我们是一个充满爱与欢笑的家庭，感谢您的访问！在这里，记录生活点滴，分享美好时光。
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#5D4E37] mb-4">家庭成员</h2>
            <p className="text-[#8B7355]">认识我们可爱的一家人</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {familyMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#F5A623]/20">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#F5A623] text-white px-4 py-1 rounded-full text-sm font-medium">
                    {member.role}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#5D4E37] mb-3">{member.name}</h3>
                <p className="text-[#8B7355] text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#FDF6E3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#5D4E37] mb-4">家庭故事</h2>
            <p className="text-[#8B7355]">一路走来的美好回忆</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#F5A623]/30" />
            
            <div className="space-y-12">
              {familyTimeline.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;
                return (
                  <div 
                    key={item.year} 
                    className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${isLeft ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <div className={`inline-block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow ${isLeft ? 'ml-auto' : ''}`}>
                        <h3 className="text-2xl font-bold text-[#F5A623] mb-2">{item.year}</h3>
                        <p className="text-[#5D4E37]">{item.event}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#F5A623] rounded-full flex items-center justify-center shadow-lg">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#5D4E37] mb-4">家庭理念</h2>
            <p className="text-[#8B7355]">我们坚信的价值观</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#F5A623]/10 rounded-full flex items-center justify-center mb-6">
                <Heart size={28} className="text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-bold text-[#5D4E37] mb-4">爱是一切的基础</h3>
              <p className="text-[#8B7355] leading-relaxed">
                我们相信，爱是家庭最坚实的纽带。无论是顺境还是逆境，爱都能让我们紧紧相连，共同面对一切挑战。
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#F5A623]/10 rounded-full flex items-center justify-center mb-6">
                <Award size={28} className="text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-bold text-[#5D4E37] mb-4">共同成长</h3>
              <p className="text-[#8B7355] leading-relaxed">
                每个人都在不断成长，家庭也是如此。我们鼓励彼此追求梦想，互相支持，一起成为更好的人。
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#F5A623]/10 rounded-full flex items-center justify-center mb-6">
                <Calendar size={28} className="text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-bold text-[#5D4E37] mb-4">珍惜当下</h3>
              <p className="text-[#8B7355] leading-relaxed">
                生活中的每一个瞬间都值得珍惜。我们用心记录每一天，让平凡的日子也充满温暖和感动。
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#F5A623]/10 rounded-full flex items-center justify-center mb-6">
                <MapPin size={28} className="text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-bold text-[#5D4E37] mb-4">家是永远的港湾</h3>
              <p className="text-[#8B7355] leading-relaxed">
                无论走到哪里，家都是我们最温暖的港湾。这里有欢笑，有泪水，有我们共同的记忆。
              </p>
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
    </div>
  );
}
