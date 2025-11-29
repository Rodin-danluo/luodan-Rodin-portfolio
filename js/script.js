// ===== 全局变量 =====
let isBlurred = true;
let cursor = null;
let cursorFollower = null;

// ===== DOM加载完成后初始化 =====
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// ===== 网站初始化 =====
function initializeWebsite() {
    // 初始化自定义光标
    initCustomCursor();
    
    // 初始化导航栏
    initNavigation();
    
    // 初始化毛玻璃效果
    initBlurEffect();
    
    // 初始化滚动动画
    initScrollAnimations();
    
    // 初始化数字滚动
    initCounterAnimations();
    
    // 初始化技能图表
    initSkillsChart();
    
    // 初始化技能进度条
    initSkillBars();
    
    // 初始化项目筛选
    initProjectFilter();
    
    // 初始化表单
    initContactForm();
    
    // 初始化返回顶部
    initBackToTop();
    
    // 初始化页面加载动画
    initPageLoadAnimation();
}

// ===== 自定义光标 =====
function initCustomCursor() {
    cursor = document.querySelector('.cursor');
    cursorFollower = document.querySelector('.cursor-follower');
    
    if (!cursor || !cursorFollower) return;
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    // 鼠标移动事件
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    
    // 光标跟随动画
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    animateFollower();
    
    // 悬浮效果
    const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-item');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });
    });
}

// ===== 导航栏功能 =====
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');
    
    // 滚动时导航栏样式变化
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // 移动端菜单切换
    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burger.classList.toggle('active');
        });
    }
    
    // 平滑滚动到锚点
    navLinkItems.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // 更新活动状态
                navLinkItems.forEach(item => item.classList.remove('active'));
                link.classList.add('active');
                
                // 关闭移动端菜单
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    burger.classList.remove('active');
                }
            }
        });
    });
}

// ===== 毛玻璃效果 =====
function initBlurEffect() {
    const heroName = document.getElementById('heroName');
    const body = document.body;
    
    if (!heroName) return;
    
    // 初始状态：整个页面模糊
    body.style.filter = 'blur(3px)';
    body.style.transition = 'filter 0.8s ease';
    
    // 鼠标悬浮到名字区域时清晰显示
    heroName.addEventListener('mouseenter', () => {
        body.style.filter = 'blur(0px)';
        isBlurred = false;
    });
    
    // 鼠标离开名字区域时恢复模糊
    heroName.addEventListener('mouseleave', () => {
        body.style.filter = 'blur(3px)';
        isBlurred = true;
    });
    
    // 点击名字后永久清晰
    heroName.addEventListener('click', () => {
        body.style.filter = 'blur(0px)';
        isBlurred = false;
        // 添加点击后的特效
        heroName.style.transform = 'scale(1.05)';
        setTimeout(() => {
            heroName.style.transform = 'scale(1)';
        }, 200);
    });
}

// ===== 滚动动画 =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    const animateElements = document.querySelectorAll('.section-header, .about-content, .operations-stats, .projects-grid, .skills-content, .contact-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// ===== 数字滚动动画 =====
function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-target]');
    
    const animateCounter = (counter) => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                if (target < 10) {
                    counter.textContent = current.toFixed(1);
                } else {
                    counter.textContent = Math.ceil(current);
                }
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target % 1 === 0 ? target : target.toFixed(1);
            }
        };
        
        updateCounter();
    };
    
    // 使用Intersection Observer触发动画
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// ===== 技能雷达图 =====
function initSkillsChart() {
    const canvas = document.getElementById('skillsChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // 检查Chart.js是否加载
    if (typeof Chart === 'undefined') {
        console.warn('Chart.js not loaded');
        return;
    }
    
    const skillsData = {
        labels: ['UI设计', 'UX研究', '原型设计', '用户测试', '数据分析', '项目管理', '前端开发', '品牌设计'],
        datasets: [{
            label: '技能水平',
            data: [95, 88, 92, 85, 82, 85, 75, 80],
            backgroundColor: 'rgba(255, 107, 53, 0.2)',
            borderColor: '#FF6B35',
            borderWidth: 3,
            pointBackgroundColor: '#FF6B35',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 6
        }]
    };
    
    const config = {
        type: 'radar',
        data: skillsData,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20,
                        color: '#6C757D',
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: 'rgba(255, 107, 53, 0.1)'
                    },
                    pointLabels: {
                        color: '#2C3E50',
                        font: {
                            size: 14,
                            weight: '600'
                        }
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            }
        }
    };
    
    new Chart(ctx, config);
}

// ===== 技能进度条动画 =====
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBar = (bar) => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    };
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBar(entry.target);
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        bar.style.width = '0%';
        bar.style.transition = 'width 1.5s ease-in-out';
        skillObserver.observe(bar);
    });
}

// ===== 项目筛选功能 =====
function initProjectFilter() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            
            // 更新按钮状态
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // 筛选项目
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ===== 项目跳转功能 =====
function openProject(category, projectId) {
    // 创建项目详情页URL
    const projectUrl = `project-detail.html?category=${category}&id=${projectId}`;
    
    // 添加页面切换动画
    document.body.style.opacity = '0.8';
    document.body.style.transform = 'scale(0.98)';
    document.body.style.transition = 'all 0.3s ease';
    
    setTimeout(() => {
        window.location.href = projectUrl;
    }, 300);
}

// ===== 联系表单 =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // 表单验证
        if (!name || !email || !subject || !message) {
            showNotification('请填写所有必填字段', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('请输入有效的邮箱地址', 'error');
            return;
        }
        
        // 模拟发送
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 发送中...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification(`感谢您的留言，${name}！我会尽快回复您。`, 'success');
            contactForm.reset();
            
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// ===== 邮箱验证 =====
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== 通知提示 =====
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // 添加样式
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// ===== 返回顶部按钮 =====
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    // 滚动时显示/隐藏按钮
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // 点击返回顶部
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== 页面加载动画 =====
function initPageLoadAnimation() {
    // 创建加载屏幕
    const loader = document.createElement('div');
    loader.id = 'pageLoader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">罗丹 Rodin</div>
            <div class="loader-spinner">
                <div class="spinner-ring"></div>
                <div class="spinner-ring"></div>
                <div class="spinner-ring"></div>
            </div>
            <div class="loader-text">加载中...</div>
        </div>
    `;
    
    // 添加加载屏幕样式
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #FFF8F3 0%, #FFFFFF 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    `;
    
    document.body.appendChild(loader);
    
    // 页面加载完成后隐藏
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                if (loader.parentNode) {
                    document.body.removeChild(loader);
                }
            }, 500);
        }, 1000);
    });
}

// ===== 工具函数 =====

// 节流函数
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// 防抖函数
function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// 获取元素在页面中的位置
function getElementOffset(element) {
    let offsetTop = 0;
    let offsetLeft = 0;
    
    while (element) {
        offsetTop += element.offsetTop;
        offsetLeft += element.offsetLeft;
        element = element.offsetParent;
    }
    
    return {
        top: offsetTop,
        left: offsetLeft
    };
}

// 检查元素是否在视口中
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ===== 响应式处理 =====
function handleResize() {
    // 重新计算布局
    if (window.innerWidth <= 768) {
        // 移动端特殊处理
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
    }
}

// 监听窗口大小变化
window.addEventListener('resize', throttle(handleResize, 250));

// ===== 键盘导航支持 =====
document.addEventListener('keydown', (e) => {
    // ESC键关闭移动端菜单
    if (e.key === 'Escape') {
        const navLinks = document.getElementById('navLinks');
        const burger = document.getElementById('burger');
        
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        }
    }
    
    // 空格键暂停/播放动画
    if (e.key === ' ' && e.target === document.body) {
        e.preventDefault();
        // 可以添加动画控制逻辑
    }
});

// ===== 性能优化 =====
// 图片懒加载
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// 预加载关键资源
function preloadResources() {
    const criticalImages = [
        'images/profile/profile-main.jpg',
        'images/profile/profile-about.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// 初始化性能优化
document.addEventListener('DOMContentLoaded', () => {
    initLazyLoading();
    preloadResources();
});

// ===== 错误处理 =====
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    // 可以添加错误上报逻辑
});

// ===== 导出函数供全局使用 =====
window.openProject = openProject;
window.showNotification = showNotification;
// 👇 罗丹名字模糊交互 - 粘贴到 script.js 文件末尾
function initNameBlur() {
    const heroName = document.getElementById('heroName');
    const nameBlur = document.querySelector('.name-blur');
    
    // 防止找不到元素报错，不用改
    if (!heroName || !nameBlur) return;
    
    // 初始状态：显示模糊（和CSS保持一致）
    nameBlur.style.opacity = '1';
    
    // 鼠标悬浮：立刻清晰
    heroName.addEventListener('mouseenter', () => {
      nameBlur.style.opacity = '0';
    });
    
    // 鼠标离开：恢复模糊
    heroName.addEventListener('mouseleave', () => {
      nameBlur.style.opacity = '1';
    });
  }
  
  // 👇 关键：调用上面的函数（确保页面加载后生效）
  document.addEventListener('DOMContentLoaded', () => {
    initNameBlur(); // 这行是新增的，粘贴进去
    
    // 注意：如果你的文件末尾原来就有 DOMContentLoaded 事件（比如下面这样）：
    // document.addEventListener('DOMContentLoaded', () => {
    //   原来的函数1();
    //   原来的函数2();
    // });
    // 就把 initNameBlur(); 加在原来的函数后面，不用重复写 DOMContentLoaded！
  });
  // 👆 名字模糊交互结束