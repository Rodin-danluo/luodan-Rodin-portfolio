document.addEventListener('DOMContentLoaded', () => {
    // 1. 渲染项目卡片
    const grid = document.querySelector('.projects-grid');
    const data = window.projectsData;
    
    function renderProjects(filter = 'all') {
        grid.innerHTML = '';
        Object.keys(data).forEach(category => {
            if (filter === 'all' || filter === category) {
                const items = data[category];
                Object.keys(items).forEach(key => {
                    const p = items[key];
                    const card = document.createElement('div');
                    card.className = 'project-card';
                    // 点击跳转到详情页 (带参数)
                    card.onclick = () => window.location.href = `project-detail.html?cat=${category}&id=${key}`;
                    
                    card.innerHTML = `
                        <div class="project-image">
                            <img src="${p.mainImage}" alt="${p.title}">
                        </div>
                        <div class="project-info">
                            <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
                            <h3>${p.title}</h3>
                            <p>${p.subtitle}</p>
                        </div>
                    `;
                    grid.appendChild(card);
                });
            }
        });
    }
    
    renderProjects(); // 初始渲染

    // 2. 筛选功能
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderProjects(e.target.dataset.category);
        });
    });

    // 3. 光标跟随 (保留你之前的酷炫效果)
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    });
});