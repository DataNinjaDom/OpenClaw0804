"use client";

import { useState, useEffect } from "react";

/* ---------- Data ---------- */
const courses = [
  {
    name: "Singing 聲樂班",
    desc: "專業聲樂訓練，教授正確發聲技巧、氣息控制及歌曲演繹，培養孩子音樂天賦。",
    price: "HK$800 / 4堂",
    image: "/OpenClaw0804/images/photo-1.jpg",
  },
  {
    name: "Yelling 朗誦班",
    desc: "提升語言表達能力，透過朗誦訓練增強自信心、咬字發音及舞台表現力。",
    price: "HK$600 / 4堂",
    image: "/OpenClaw0804/images/photo-3.jpg",
  },
  {
    name: "Shouting 演講班",
    desc: "訓練小朋友演講技巧，學習組織思路、控場能力及即興表達，建立領袖風範。",
    price: "HK$700 / 4堂",
    image: "/OpenClaw0804/images/photo-4.jpg",
  },
  {
    name: "綜合表達班",
    desc: "結合聲樂、朗誦及演講元素，全方位提升小朋友的表達能力與舞台自信。",
    price: "HK$900 / 4堂",
    image: "/OpenClaw0804/images/photo-5.jpg",
  },
];

const teachers = [
  {
    name: "陳老師",
    role: "聲樂導師",
    bio: "香港演藝學院聲樂系畢業，擁有 10 年兒童聲樂教學經驗。",
    emoji: "🎵",
  },
  {
    name: "李老師",
    role: "朗誦導師",
    bio: "中文大學中文系碩士，資深朗誦比賽評審及培訓導師。",
    emoji: "🎤",
  },
  {
    name: "王老師",
    role: "演講導師",
    bio: "前電視台主播，專長演講技巧培訓及兒童自信心建立。",
    emoji: "📢",
  },
];

const philosophy = [
  { icon: "🌱", title: "因材施教", desc: "根據每個孩子的特質與興趣，量身定制教學方案。" },
  { icon: "💡", title: "啟發潛能", desc: "不只是傳授技巧，更注重啟發孩子內在的表達欲望。" },
  { icon: "🤝", title: "建立自信", desc: "透過舞台實踐與正向鼓勵，讓孩子勇敢站出來。" },
  { icon: "🎯", title: "成果導向", desc: "定期舉辦展演與比賽，讓學習成果看得見。" },
];

/* ---------- Component ---------- */
export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[rgb(var(--bg))]">
      {/* ===== Nav ===== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl">💩</span>
            <span className="text-xl font-bold text-pink-600">MaMa</span>
          </a>
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#about" className="hover:text-pink-600 transition-colors">關於我們</a>
            <a href="#philosophy" className="hover:text-pink-600 transition-colors">教學理念</a>
            <a href="#courses" className="hover:text-pink-600 transition-colors">課程</a>
            <a href="#teachers" className="hover:text-pink-600 transition-colors">師資</a>
            <a href="#contact" className="hover:text-pink-600 transition-colors">聯絡</a>
          </div>
          <a href="#contact" className="btn-primary text-sm sm:hidden">報名</a>
          <a href="#contact" className="btn-primary text-sm hidden sm:inline-flex">立即報名</a>
        </div>
      </nav>

      {/* ===== Hero ===== */}
      <section id="home" className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/OpenClaw0804/images/photo-1.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/70 via-pink-800/60 to-pink-900/80" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <div className="inline-block mb-4 animate-float">
            <span className="text-6xl sm:text-7xl">💩</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            MaMa 教育中心
          </h1>
          <p className="text-lg sm:text-xl text-pink-100 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            用愛與專業，啟發每個孩子的聲音力量
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <a href="#courses" className="btn-primary">探索課程</a>
            <a href="#about" className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-white/70 text-white font-medium hover:bg-white/10 transition-all duration-200">了解更多</a>
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-pink-500 font-medium text-sm tracking-wider uppercase">關於我們</span>
              <h2 className="section-title text-left mt-2 mb-6">公司簡介</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                MaMa 教育中心成立於 2020 年，是一所專注於小朋友聲樂、朗誦及演講培訓的私人教育機構。
                我們深信每個孩子都擁有獨特的聲音與表達潛力，透過專業的教學團隊與系統化的課程，
                讓孩子在快樂中學習，在自信中成長。
              </p>
              <p className="text-gray-600 leading-relaxed">
                中心配備專業隔音教室及演出場地，累計培訓超過 500 名學員，
                多名學員在各類朗誦及演講比賽中屢獲佳績。
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/OpenClaw0804/images/photo-2.jpg"
                alt="MaMa 教育中心環境"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Philosophy ===== */}
      <section id="philosophy" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">教學理念</h2>
          <p className="section-subtitle">我們相信，教育不只是技能傳授，更是品格與自信的培養</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {philosophy.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-4xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Courses ===== */}
      <section id="courses" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">課程介紹</h2>
          <p className="section-subtitle">專業課程，全面培養孩子的表達能力</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            {courses.map((course, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-bold text-pink-600">
                    {course.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{course.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{course.desc}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-pink-600 font-medium text-sm hover:gap-2 transition-all"
                  >
                    Learn More
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Teachers ===== */}
      <section id="teachers" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">師資介紹</h2>
          <p className="section-subtitle">經驗豐富的專業導師團隊</p>
          <div className="grid sm:grid-cols-3 gap-8 mt-12">
            {teachers.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-200"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-pink-100 flex items-center justify-center text-4xl">
                  {t.emoji}
                </div>
                <h3 className="font-bold text-lg text-gray-800">{t.name}</h3>
                <p className="text-pink-500 text-sm font-medium mb-3">{t.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">聯絡我們</h2>
          <p className="section-subtitle">歡迎預約免費試堂，讓我們了解您的孩子</p>
          <div className="grid sm:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-medium text-gray-800">地址</p>
                  <p className="text-sm text-gray-600">香港九龍旺角彌敦道 123 號 3 樓</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-medium text-gray-800">電話</p>
                  <p className="text-sm text-gray-600">+852 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-medium text-gray-800">電郵</p>
                  <p className="text-sm text-gray-600">hello@mama-edu.hk</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🕐</span>
                <div>
                  <p className="font-medium text-gray-800">營業時間</p>
                  <p className="text-sm text-gray-600">週一至週五 10:00-19:00</p>
                  <p className="text-sm text-gray-600">週六 09:00-18:00</p>
                </div>
              </div>
            </div>
            <div className="bg-pink-50 rounded-3xl p-8">
              <h3 className="font-bold text-lg text-gray-800 mb-4">預約免費試堂</h3>
              <p className="text-sm text-gray-600 mb-6">
                填寫以下資料，我們將於 24 小時內與您聯絡安排試堂時間。
              </p>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="家長姓名"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="聯絡電話"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                />
                <select className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent text-gray-600">
                  <option>選擇課程</option>
                  <option>Singing 聲樂班</option>
                  <option>Yelling 朗誦班</option>
                  <option>Shouting 演講班</option>
                  <option>綜合表達班</option>
                </select>
                <button className="btn-primary w-full">提交預約</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💩</span>
                <span className="text-lg font-bold text-white">MaMa 教育中心</span>
              </div>
              <p className="text-sm">用愛與專業，啟發每個孩子的聲音力量</p>
            </div>
            <div>
              <p className="font-medium text-white mb-3">快速連結</p>
              <div className="space-y-1 text-sm">
                <a href="#about" className="block hover:text-pink-400 transition-colors">關於我們</a>
                <a href="#courses" className="block hover:text-pink-400 transition-colors">課程介紹</a>
                <a href="#teachers" className="block hover:text-pink-400 transition-colors">師資介紹</a>
                <a href="#contact" className="block hover:text-pink-400 transition-colors">聯絡我們</a>
              </div>
            </div>
            <div>
              <p className="font-medium text-white mb-3">關注我們</p>
              <div className="flex gap-3">
                <a href="#contact" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <span className="text-lg">📘</span>
                </a>
                <a href="#contact" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <span className="text-lg">📷</span>
                </a>
                <a href="#contact" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <span className="text-lg">💬</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-xs">
            <p>© 2026 MaMa 教育中心. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}