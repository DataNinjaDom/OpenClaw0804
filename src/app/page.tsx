"use client";

import { useState, useEffect } from "react";

/* ---------- Data (from DOCX) ---------- */
const dishes = [
  {
    name: "旬味刺身盛合",
    desc: "每日由築地市場直送時令魚類，含三文魚、吞拿魚、油甘魚、牡丹蝦等 8 至 10 種，配主廚特製醬油。",
    price: "HK$380",
    image: "/OpenClaw0804/images/restaurant/food-1.jpg",
  },
  {
    name: "Johnny 特上壽司套餐",
    desc: "12 貫手握壽司，含大拖羅、海膽、牡丹蝦、金目鯛等高級食材，配味噌湯及甜品。",
    price: "HK$520",
    image: "/OpenClaw0804/images/restaurant/food-2.jpg",
  },
  {
    name: "鐵板和牛西冷",
    desc: "日本 A5 和牛西冷，由鐵板燒主廚即席煎製，配蒜茸飯及季節蔬菜。",
    price: "HK$680",
    image: "/OpenClaw0804/images/restaurant/food-3.jpg",
  },
  {
    name: "炭燒鹽燒鯖魚",
    desc: "挪威鯖魚以日本備長炭慢火鹽燒，外脆內嫩，配蘿蔔泥及檸檬。",
    price: "HK$180",
    image: "/OpenClaw0804/images/restaurant/food-4.jpg",
  },
  {
    name: "蟹肉茶碗蒸",
    desc: "以松葉蟹肉、銀杏、三文魚籽蒸製，口感滑嫩，鮮味濃郁。",
    price: "HK$120",
    image: "/OpenClaw0804/images/restaurant/food-5.jpg",
  },
  {
    name: "季節限定懷石料理",
    desc: "主廚按季節設計的 8 道菜懷石套餐，含前菜、刺身、燒物、煮物、揚物、壽司、湯品及甜品。",
    price: "HK$880",
    image: "/OpenClaw0804/images/restaurant/food-1.jpg",
  },
];

const philosophy = [
  { icon: "🙏", title: "一期一會", desc: "珍惜每次相遇，用心對待每位賓客，將日本待客之道融入每個細節。" },
  { icon: "🐟", title: "旬之味", desc: "只用當造最好的食材，每週從築地市場空運新鮮海產。" },
  { icon: "🔥", title: "職人匠心", desc: "主廚堅持減法烹調，不過度調味，讓食材本身的味道自然流露。" },
  { icon: "🌸", title: "季節感", desc: "隨四季更迭調整菜單，呈現日本料理對自然時序的敬意。" },
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
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl">🍱</span>
            <span className="text-xl font-bold text-red-700">Johnny Japan</span>
          </a>
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#about" className="hover:text-red-600 transition-colors">關於我們</a>
            <a href="#philosophy" className="hover:text-red-600 transition-colors">料理理念</a>
            <a href="#menu" className="hover:text-red-600 transition-colors">招牌菜式</a>
            <a href="#environment" className="hover:text-red-600 transition-colors">環境</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">聯絡</a>
          </div>
          <a href="#contact" className="btn-primary text-sm">訂座</a>
        </div>
      </nav>

      {/* ===== Hero ===== */}
      <section id="home" className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/OpenClaw0804/images/restaurant/env-1.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/80 via-red-900/70 to-black/85" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <div className="inline-block mb-4 animate-float">
            <span className="text-6xl sm:text-7xl">🍱</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Johnny Japan
          </h1>
          <p className="text-lg sm:text-xl text-red-100 mb-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            一期一會・旬之味
          </p>
          <p className="text-sm text-red-200/80 mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            由日籍主廚 Johnny Tanaka 主理・築地直送・職人匠心
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <a href="#menu" className="btn-primary">查看菜單</a>
            <a href="#about" className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-white/70 text-white font-medium hover:bg-white/10 transition-all duration-200">了解我們</a>
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-red-500 font-medium text-sm tracking-wider uppercase">關於我們</span>
              <h2 className="section-title text-left mt-2 mb-6">餐廳簡介</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Johnny Japan 是一間融合傳統與現代的日式料理餐廳，由日籍主廚 Johnny Tanaka 於 2019 年創立。
                我們致力於將正宗日本味道帶到香港，以嚴選食材、精緻擺盤及用心服務，
                為每位賓客打造難忘的和食體驗。
              </p>
              <p className="text-gray-600 leading-relaxed">
                餐廳位於中環蘇豪區，店內裝潢採用原木色調與日式簡約設計，
                設有壽司吧台、鐵板燒區及私人包廂，可容納 60 位賓客。
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/OpenClaw0804/images/restaurant/env-1.jpg"
                alt="Johnny Japan 餐廳環境"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Philosophy ===== */}
      <section id="philosophy" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">品牌與料理理念</h2>
          <p className="section-subtitle">料理不只是食物，更是一種傳遞情感與文化的媒介</p>
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

      {/* ===== Menu / Dishes ===== */}
      <section id="menu" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">招牌菜式</h2>
          <p className="section-subtitle">嚴選食材・職人手藝・旬之美味</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {dishes.map((dish, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-red-600">
                    {dish.price}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{dish.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{dish.desc}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-red-600 font-medium text-sm hover:gap-2 transition-all"
                  >
                    View Menu
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

      {/* ===== Environment ===== */}
      <section id="environment" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">餐廳環境</h2>
          <p className="section-subtitle">原木色調與日式簡約設計，打造舒適用餐空間</p>
          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img src="/OpenClaw0804/images/restaurant/env-1.jpg" alt="餐廳環境" className="w-full h-64 object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src="/OpenClaw0804/images/restaurant/food-1.jpg" alt="壽司吧台" className="w-full h-32 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src="/OpenClaw0804/images/restaurant/food-2.jpg" alt="鐵板燒區" className="w-full h-32 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src="/OpenClaw0804/images/restaurant/food-3.jpg" alt="私人包廂" className="w-full h-32 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src="/OpenClaw0804/images/restaurant/food-4.jpg" alt="用餐區" className="w-full h-32 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">營業時間與聯絡方式</h2>
          <p className="section-subtitle">歡迎致電訂座或透過網上系統預約</p>

          <div className="grid sm:grid-cols-2 gap-8 mt-12">
            {/* Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🕐</span> 營業時間
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">星期一至五</span>
                  <span className="text-gray-600">12:00 - 14:30 / 18:00 - 22:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">星期六</span>
                  <span className="text-gray-600">12:00 - 15:00 / 18:00 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">星期日及假期</span>
                  <span className="text-gray-600">12:00 - 15:00 / 18:00 - 22:00</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-100">
                  <span className="font-medium text-red-600">農曆年初一至初三</span>
                  <span className="text-red-500">休息</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">📍</span> 聯絡方式
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 min-w-fit">地址：</span>
                  <span className="text-gray-600">香港中環蘇豪區荷李活道 88 號地下</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 min-w-fit">電話：</span>
                  <span className="text-gray-600">+852 2345 6789</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 min-w-fit">電郵：</span>
                  <span className="text-gray-600">info@johnnyjapan.hk</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 min-w-fit">網站：</span>
                  <span className="text-gray-600">www.johnnyjapan.hk</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 min-w-fit">IG：</span>
                  <span className="text-gray-600">@johnnyjapan_hk</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 min-w-fit">FB：</span>
                  <span className="text-gray-600">JohnnyJapanHK</span>
                </div>
              </div>
              <a href="#home" className="btn-primary w-full mt-6">立即訂座</a>
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
                <span className="text-2xl">🍱</span>
                <span className="text-lg font-bold text-white">Johnny Japan</span>
              </div>
              <p className="text-sm">一期一會・旬之味</p>
              <p className="text-sm mt-1">由日籍主廚 Johnny Tanaka 主理</p>
            </div>
            <div>
              <p className="font-medium text-white mb-3">快速連結</p>
              <div className="space-y-1 text-sm">
                <a href="#about" className="block hover:text-red-400 transition-colors">關於我們</a>
                <a href="#philosophy" className="block hover:text-red-400 transition-colors">料理理念</a>
                <a href="#menu" className="block hover:text-red-400 transition-colors">招牌菜式</a>
                <a href="#environment" className="block hover:text-red-400 transition-colors">餐廳環境</a>
                <a href="#contact" className="block hover:text-red-400 transition-colors">聯絡我們</a>
              </div>
            </div>
            <div>
              <p className="font-medium text-white mb-3">關注我們</p>
              <div className="flex gap-3">
                <a href="#contact" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                  <span className="text-lg">📷</span>
                </a>
                <a href="#contact" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                  <span className="text-lg">📘</span>
                </a>
                <a href="#contact" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                  <span className="text-lg">💬</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-xs">
            <p>© 2026 Johnny Japan 日式餐廳. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}