const translations = {
  zh: {
    title: 'Rino Meme Rhino | Rino',
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.buy': '如何购买',
    'nav.tokenomics': 'Tokenomics',
    'nav.roadmap': '路线图',
    'button.join': '购买',
    'button.learn': 'X(推特)',
    'button.about': '电报',
    'hero.eyebrow': 'RINO 机制已启动',
    'hero.title': 'RINO: 首枚 @risedotrich 币',
    'hero.description': 'RINO 是 @risedotrich 上的第一枚币，由 RISE Protocol 驱动。无鲸、无预售，买入铸造、卖出燃烧。公平、通缩、势不可挡。',
    'hero.stats.supply': '总发行量',
    'hero.stats.tax': '无鲸',
    'hero.stats.taxLabel': '无预售，买入铸造',
    'hero.stats.burn': '卖出燃烧',
    'hero.stats.lp': 'LP 销毁',
    'about.label': 'ABOUT',
    'about.title': '关于 RINO',
    'about.description': 'RINO 是在 @risedotrich 上诞生的首枚币，Powered by RISE Protocol。没有大鲸，没有预售。买入即铸造，卖出即燃烧。公平、通缩、不可阻挡。',
    'buy.label': 'HOW TO BUY',
    'buy.title': '三步参与 Rino',
    'buy.step1.title': '创建钱包',
    'buy.step1.desc': '下载钱包，准备好上车装备。记得带好表情包。',
    'buy.step2.title': '充值 SOL',
    'buy.step2.desc': '把 SOL 投进钱包，别藏在口袋里。',
    'buy.step3.title': '兑换 Rino',
    'buy.step3.desc': '去 rise.rich 换 Rino，点击“确认”，开始狂欢。',
    'tokenomics.label': 'TOKENOMICS',
    'tokenomics.title': 'Rino 的经济模型',
    'tokenomics.card1.title': '供应量',
    'tokenomics.card1.desc': '♾️ RINO',
    'tokenomics.card2.title': '买入铸造',
    'tokenomics.card2.desc': '买入即铸造，基础机制公开透明。',
    'tokenomics.card3.title': '卖出燃烧',
    'tokenomics.card3.desc': '卖出即燃烧，持续通缩，势不可挡。',
    'roadmap.label': 'ROADMAP',
    'roadmap.title': '路线图',
    'roadmap.phase1.title': 'Phase 1',
    'roadmap.phase1.desc': '先搞一波 meme 爆款，刷爆聊天记录。',
    'roadmap.phase2.title': 'Phase 2',
    'roadmap.phase2.desc': '发动社群大战，做无厘头传播。',
    'roadmap.phase3.title': 'Phase 3',
    'roadmap.phase3.desc': '让 Rino 在每个群里都成为表情包。',
    footer: '© 2026 Rino. 不负责，认真你就输了。'
  },
  en: {
    title: 'Rino Meme Rhino | Rino',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.buy': 'How to buy',
    'nav.tokenomics': 'Tokenomics',
    'nav.roadmap': 'Roadmap',
    'button.join': 'Buy now',
    'button.learn': 'X(Twitter)',
    'button.about': 'Telegram',
    'hero.eyebrow': 'RINO mechanism live',
    'hero.title': 'RINO: First coin on @risedotrich',
    'hero.description': 'RINO is the first coin on @risedotrich, powered by the RISE Protocol. No whales. No presale. Mint on buy. Burn on sell. Fair. Deflationary. Unstoppable.',
    'hero.stats.supply': 'Total supply',
    'hero.stats.tax': 'No whales',
    'hero.stats.taxLabel': 'No presale, mint on buy',
    'hero.stats.burn': 'Burn on sell',
    'hero.stats.lp': 'LP burned',
    'about.label': 'ABOUT',
    'about.title': 'About RINO',
    'about.description': 'RINO launched as the first coin on @risedotrich via the RISE Protocol. No whales, no presale. Buy mints, sell burns. Fair, deflationary, unstoppable.',
    'buy.label': 'HOW TO BUY',
    'buy.title': 'Join Rino in 3 steps',
    'buy.step1.title': 'Create a wallet',
    'buy.step1.desc': 'Download a wallet and get your boarding pass ready. Don’t forget your memes.',
    'buy.step2.title': 'Add SOL',
    'buy.step2.desc': 'Throw SOL into your wallet. No hiding it in your pocket.',
    'buy.step3.title': 'Swap for Rino',
    'buy.step3.desc': 'Swap on Rise.rich, hit confirm, and start the party.',
    'tokenomics.label': 'TOKENOMICS',
    'tokenomics.title': 'Rino economic model',
    'tokenomics.card1.title': 'Supply',
    'tokenomics.card1.desc': '♾️ RINO',
    'tokenomics.card2.title': 'Mint on buy',
    'tokenomics.card2.desc': 'Buying mints new tokens—transparent and automatic.',
    'tokenomics.card3.title': 'Burn on sell',
    'tokenomics.card3.desc': 'Selling burns tokens, keeping supply deflationary.',
    'roadmap.label': 'ROADMAP',
    'roadmap.title': 'Roadmap',
    'roadmap.phase1.title': 'Phase 1',
    'roadmap.phase1.desc': 'Launch the meme wave and blow up chat feeds.',
    'roadmap.phase2.title': 'Phase 2',
    'roadmap.phase2.desc': 'Mobilize the community for absurd spread.',
    'roadmap.phase3.title': 'Phase 3',
    'roadmap.phase3.desc': 'Make Rino the meme in every group chat.',
    footer: '© 2026 Rino. No liability, serious folks leave now.'
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  const entries = translations[lang] || translations.zh;
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';

  Object.entries(entries).forEach(([key, value]) => {
    const element = document.querySelector(`[data-i18n='${key}']`) || document.getElementById(key);
    if (element) {
      if (element.tagName.toLowerCase() === 'title') {
        document.title = value;
      } else {
        element.textContent = value;
      }
    }
  });

  const toggleButton = document.getElementById('lang-toggle');
  if (toggleButton) {
    toggleButton.textContent = lang === 'en' ? '中文' : 'EN';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.site-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
    });
  });

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const nextLang = currentLang === 'zh' ? 'en' : 'zh';
      setLanguage(nextLang);
    });
  }

  setLanguage('en');
});
