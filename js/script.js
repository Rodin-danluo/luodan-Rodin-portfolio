// js/script.js

// 注册 GSAP (保留动画)
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 开屏动画
    const tl = gsap.timeline();
    tl.to(".loader-text", { opacity: 0, duration: 0.5, delay: 1 })
      .to(".loader", { height: 0, duration: 1, ease: "power4.inOut" })
      .from(".hero-title .line", { y: 100, opacity: 0, stagger: 0.2, duration: 1, ease: "power3.out" }, "-=0.5")
      .from(".hero-intro", { opacity: 0, y: 20, duration: 1 }, "-=0.5")
      .from(".hero-cta", { scale: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.5");

    // 2. 渲染项目
    renderProjects();

    // 3. 视差滚动
    setTimeout(() => {
        gsap.utils.toArray('.p-img-wrapper').forEach(wrapper => {
            const img = wrapper.querySelector('.p-img');
            if(img) {
                gsap.to(img, {
                    y: "-20%",
                    scrollTrigger: {
                        trigger: wrapper,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }
        });
    }, 500);

    // 4. 磁性按钮
    const btns = document.querySelectorAll('.magnetic-btn');
    btns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.3 });
        });
    });
});

function renderProjects() {
    const container = document.querySelector('.project-list');
    
    if (typeof window.projectsData === 'undefined') {
        console.error('错误：数据文件未加载！请检查 js/project-detail.js');
        return;
    }

    const data = window.projectsData; 
    
    // ★★★ 核心修复：确保这里的 ID 和上面数据库里的一模一样 ★★★
    const featuredKeys = [
        {cat: 'product', id: 'silver-help'},    // 1. 老有所帮
        {cat: 'aigc', id: 'railway-aigc'},      // 2. 大地之环 (新加的)
        {cat: 'aigc', id: 'tea-rice-ip'},       // 3. 茶宝IP
        {cat: 'branding', id: 'yinxi-pepper'},  // 4. 隐溪椒园
        {cat: 'social', id: 'longxia'}          // 5. 龙匣筑梦
    ];

    featuredKeys.forEach(item => {
        // 只有当数据真实存在时，才渲染
        if(data[item.cat] && data[item.cat][item.id]) {
            const p = data[item.cat][item.id];
            
            const div = document.createElement('div');
            div.className = 'project-item';
            div.onclick = () => window.location.href = `project-detail.html?cat=${item.cat}&id=${item.id}`;
            
            div.innerHTML = `
                <div class="p-header">
                    <div class="p-title">${p.title.split('-')[0]}</div>
                    <div class="p-cat">${p.category} / ${p.date}</div>
                </div>
                <div class="p-img-wrapper">
                    <img src="${p.mainImage}" class="p-img" alt="${p.title}" onerror="this.src='https://via.placeholder.com/1200x800?text=Image+Not+Found'">
                </div>
                <div style="margin-top:20px; color:#888; font-size:1.1rem;">${p.subtitle}</div>
            `;
            container.appendChild(div);
        }
    });
}