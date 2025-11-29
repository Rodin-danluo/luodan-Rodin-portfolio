// ===== 项目数据配置 =====
const projectsData = {
    'ui-ux': {
        'social-app': {
            title: '社交APP界面设计',
            subtitle: '面向年轻用户的社交平台完整UI/UX设计方案',
            category: 'UI/UX设计',
            date: '2024年6月',
            tags: ['UI设计', '用户研究', '交互设计', '原型制作'],
            background: '随着社交媒体的快速发展，年轻用户对社交应用的需求日益多样化。本项目旨在设计一款专为18-25岁用户群体打造的社交应用，注重用户体验和视觉美感的平衡。',
            role: 'UI/UX设计师 - 负责用户研究、交互设计、视觉设计全流程',
            duration: '3个月',
            tools: 'Figma, Adobe XD, Principle, Maze',
            mainImage: 'images/projects/social-app-main.jpg',
            results: {
                uxImprovement: '42%',
                engagement: '+65%',
                taskTime: '-35%',
                rating: '4.7/5'
            },
            process: {
                research: {
                    title: '深度用户研究',
                    content: '通过问卷调研、用户访谈和竞品分析，深入了解目标用户的社交需求和痛点。发现用户最关心的是隐私保护和真实社交体验。',
                    details: [
                        '调研了200+目标用户的社交习惯',
                        '分析了15款主流社交应用',
                        '识别出3个核心用户痛点',
                        '建立了详细的用户画像'
                    ]
                },
                architecture: {
                    title: '信息架构设计',
                    content: '基于用户研究结果，构建清晰的信息层级和导航结构，确保用户能够快速找到所需功能。',
                    details: [
                        '设计了4层信息架构',
                        '优化了导航路径',
                        '建立了内容分类体系',
                        '制作了用户流程图'
                    ]
                },
                prototype: {
                    title: '交互原型制作',
                    content: '从低保真线框图到高保真交互原型，逐步完善设计方案，并通过用户测试验证可用性。',
                    details: [
                        '制作了30+页面的交互原型',
                        '设计了15个核心交互流程',
                        '进行了3轮用户测试',
                        '优化了关键操作路径'
                    ]
                },
                visual: {
                    title: '视觉设计系统',
                    content: '建立统一的视觉语言，包括色彩系统、字体规范、图标库等，确保设计的一致性和可扩展性。',
                    details: [
                        '定义了完整的设计系统',
                        '创建了200+个图标',
                        '建立了组件库',
                        '制作了设计规范文档'
                    ]
                },
                testing: {
                    title: '用户测试优化',
                    content: '通过多轮用户测试收集反馈，持续优化设计方案，确保最终产品符合用户期望。',
                    details: [
                        '进行了5轮用户测试',
                        '收集了100+条用户反馈',
                        '优化了20+个设计细节',
                        '提升了整体满意度'
                    ]
                }
            },
            learnings: {
                designThinking: '通过这个项目，我深刻理解了以用户为中心的设计思维的重要性。从用户研究到最终方案，每一个决策都基于真实的用户需求和反馈，这让我学会了如何平衡用户需求、商业目标和技术限制。',
                teamwork: '与产品经理、开发工程师和运营团队的紧密合作让我学会了如何更好地沟通设计理念。通过定期的设计评审和跨部门协作，我提升了团队协作能力和项目管理技能。',
                skillGrowth: '在项目中掌握了Figma的高级功能，学会了制作复杂的交互原型和动效设计。同时也提升了用户研究方法和数据分析能力，能够更科学地验证设计假设。'
            },
            links: {
                figma: 'https://figma.com/proto/social-app',
                live: 'https://social-app-demo.com',
                caseStudy: 'https://behance.net/social-app-case'
            },
            gallery: [
                {
                    image: 'images/projects/social-app-1.jpg',
                    title: '首页设计',
                    description: '简洁直观的首页布局'
                },
                {
                    image: 'images/projects/social-app-2.jpg',
                    title: '个人资料页',
                    description: '个性化的用户资料展示'
                },
                {
                    image: 'images/projects/social-app-3.jpg',
                    title: '聊天界面',
                    description: '流畅的聊天体验设计'
                },
                {
                    image: 'images/projects/social-app-4.jpg',
                    title: '发现页面',
                    description: '内容发现和推荐系统'
                }
            ]
        },
        'finance-platform': {
            title: '金融服务平台设计',
            subtitle: '面向年轻用户的金融产品界面设计',
            category: 'UI/UX设计',
            date: '2024年8月',
            tags: ['金融UI', '信息架构', '用户体验', '数据可视化'],
            background: '随着数字金融的普及，年轻用户对金融服务的需求越来越多样化。本项目旨在设计一个简单易用、安全可靠的金融服务平台。',
            role: 'UI/UX设计师 - 负责整体设计策略和执行',
            duration: '2.5个月',
            tools: 'Figma, Sketch, InVision, Hotjar',
            mainImage: 'images/projects/finance-platform-main.jpg',
            results: {
                uxImprovement: '38%',
                engagement: '+52%',
                taskTime: '-28%',
                rating: '4.6/5'
            },
            // ... 其他项目数据结构类似
        }
    },
    'mobile': {
        'ecommerce-app': {
            title: '电商移动端优化',
            subtitle: '提升转化率35%的移动购物体验重设计',
            category: '移动端设计',
            date: '2024年5月',
            tags: ['移动端UI', 'UX优化', '转化率提升', 'A/B测试'],
            background: '电商移动端的用户体验直接影响转化率和用户留存。通过深入分析用户行为数据，重新设计购物流程和界面布局。',
            role: '移动端UI/UX设计师',
            duration: '2个月',
            tools: 'Figma, Principle, Flinto, Google Analytics',
            mainImage: 'images/projects/ecommerce-mobile-main.jpg',
            results: {
                uxImprovement: '35%',
                engagement: '+48%',
                taskTime: '-32%',
                rating: '4.8/5'
            }
            // ... 其他数据
        },
        'education-app': {
            title: '在线教育APP设计',
            subtitle: '提升学习体验的教育类移动应用设计',
            category: '移动端设计',
            date: '2024年7月',
            tags: ['教育产品', '学习体验', '移动交互', '游戏化设计'],
            background: '在线教育市场竞争激烈，如何提升学习体验和用户粘性是关键。本项目通过游戏化设计和个性化学习路径来解决这一问题。',
            role: '产品设计师',
            duration: '3个月',
            tools: 'Figma, After Effects, Lottie, Firebase',
            mainImage: 'images/projects/education-app-main.jpg',
            results: {
                uxImprovement: '45%',
                engagement: '+72%',
                taskTime: '-25%',
                rating: '4.9/5'
            }
            // ... 其他数据
        }
    },
    'web': {
        'admin-dashboard': {
            title: '管理后台界面设计',
            subtitle: '企业级数据管理平台的UI/UX设计',
            category: 'Web端设计',
            date: '2024年4月',
            tags: ['Web界面', '数据可视化', 'B端设计', '工作流优化'],
            background: '企业级管理后台需要处理大量复杂数据，如何让界面既功能强大又易于使用是设计的核心挑战。',
            role: 'B端产品设计师',
            duration: '2.5个月',
            tools: 'Figma, D3.js, Axure, Zeplin',
            mainImage: 'images/projects/admin-dashboard-main.jpg',
            results: {
                uxImprovement: '40%',
                engagement: '+35%',
                taskTime: '-45%',
                rating: '4.5/5'
            }
            // ... 其他数据
        }
    },
    'prototype': {
        'health-app': {
            title: '健康管理APP原型',
            subtitle: '基于用户研究的健康管理应用交互原型',
            category: '交互原型',
            date: '2024年9月',
            tags: ['交互原型', '用户测试', 'Figma动效', '健康管理'],
            background: '健康管理类应用需要激励用户养成良好的生活习惯，通过科学的交互设计和动效来提升用户体验。',
            role: '交互设计师',
            duration: '1.5个月',
            tools: 'Figma, ProtoPie, Principle, Maze',
            mainImage: 'images/projects/health-app-main.jpg',
            results: {
                uxImprovement: '50%',
                engagement: '+68%',
                taskTime: '-30%',
                rating: '4.7/5'
            }
            // ... 其他数据
        }
    }
};

// ===== 项目导航数据 =====
const projectNavigation = {
    'ui-ux': {
        'social-app': {
            prev: { category: 'prototype', id: 'health-app', title: '健康管理APP原型' },
            next: { category: 'ui-ux', id: 'finance-platform', title: '金融服务平台设计' }
        },
        'finance-platform': {
            prev: { category: 'ui-ux', id: 'social-app', title: '社交APP界面设计' },
            next: { category: 'mobile', id: 'ecommerce-app', title: '电商移动端优化' }
        }
    },
    'mobile': {
        'ecommerce-app': {
            prev: { category: 'ui-ux', id: 'finance-platform', title: '金融服务平台设计' },
            next: { category: 'mobile', id: 'education-app', title: '在线教育APP设计' }
        },
        'education-app': {
            prev: { category: 'mobile', id: 'ecommerce-app', title: '电商移动端优化' },
            next: { category: 'web', id: 'admin-dashboard', title: '管理后台界面设计' }
        }
    },
    'web': {
        'admin-dashboard': {
            prev: { category: 'mobile', id: 'education-app', title: '在线教育APP设计' },
            next: { category: 'prototype', id: 'health-app', title: '健康管理APP原型' }
        }
    },
    'prototype': {
        'health-app': {
            prev: { category: 'web', id: 'admin-dashboard', title: '管理后台界面设计' },
            next: { category: 'ui-ux', id: 'social-app', title: '社交APP界面设计' }
        }
    }
};

// ===== 页面初始化 =====
document.addEventListener('DOMContentLoaded', function() {
    initProjectDetail();
});

// ===== 初始化项目详情页 =====
function initProjectDetail() {
    // 获取URL参数
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const projectId = urlParams.get('id');
    
    // 验证参数
    if (!category || !projectId || !projectsData[category] || !projectsData[category][projectId]) {
        showError('项目不存在');
        return;
    }
    
    // 加载项目数据
    const projectData = projectsData[category][projectId];
    loadProjectData(projectData);
    
    // 设置项目导航
    setupProjectNavigation(category, projectId);
    
    // 初始化其他功能
    initImageGallery();
    initScrollAnimations();
    initCounterAnimations();
}

// ===== 加载项目数据 =====
function loadProjectData(data) {
    // 更新页面标题
    document.title = `${data.title} - 罗丹 Rodin`;
    
    // 更新面包屑
    document.getElementById('projectBreadcrumb').textContent = data.title;
    
    // 更新项目头部信息
    document.getElementById('projectCategory').textContent = data.category;
    document.getElementById('projectDate').textContent = data.date;
    document.getElementById('projectTitle').textContent = data.title;
    document.getElementById('projectSubtitle').textContent = data.subtitle;
    
    // 更新标签
    const tagsContainer = document.getElementById('projectTags');
    tagsContainer.innerHTML = '';
    data.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });
    
    // 更新项目概览
    document.getElementById('projectMainImage').src = data.mainImage;
    document.getElementById('projectMainImage').alt = data.title;
    document.getElementById('projectBackground').textContent = data.background;
    document.getElementById('projectRole').textContent = data.role;
    document.getElementById('projectDuration').textContent = data.duration;
    document.getElementById('projectTools').textContent = data.tools;
    
    // 更新设计过程
    if (data.process) {
        updateProcessTimeline(data.process);
    }
    
    // 更新项目成果
    if (data.results) {
        updateProjectResults(data.results);
    }
    
    // 更新学习收获
    if (data.learnings) {
        updateLearnings(data.learnings);
    }
    
    // 更新相关链接
    if (data.links) {
        updateProjectLinks(data.links);
    }
    
    // 更新设计展示
    if (data.gallery) {
        updateDesignGallery(data.gallery);
    }
}

// ===== 更新设计过程时间线 =====
function updateProcessTimeline(process) {
    const processSteps = ['research', 'architecture', 'prototype', 'visual', 'testing'];
    const stepNames = ['researchDetails', 'architectureDetails', 'prototypeDetails', 'visualDetails', 'testingDetails'];
    
    processSteps.forEach((step, index) => {
        const detailsElement = document.getElementById(stepNames[index]);
        if (process[step] && detailsElement) {
            detailsElement.innerHTML = `
                <h4>${process[step].title}</h4>
                <p>${process[step].content}</p>
                ${process[step].details ? `
                    <ul>
                        ${process[step].details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                ` : ''}
            `;
        }
    });
}

// ===== 更新项目成果 =====
function updateProjectResults(results) {
    document.getElementById('uxImprovement').textContent = results.uxImprovement;
    document.getElementById('engagement').textContent = results.engagement;
    document.getElementById('taskTime').textContent = results.taskTime;
    document.getElementById('rating').textContent = results.rating;
}

// ===== 更新学习收获 =====
function updateLearnings(learnings) {
    document.getElementById('designThinking').textContent = learnings.designThinking;
    document.getElementById('teamwork').textContent = learnings.teamwork;
    document.getElementById('skillGrowth').textContent = learnings.skillGrowth;
}

// ===== 更新项目链接 =====
function updateProjectLinks(links) {
    if (links.figma) {
        document.getElementById('figmaLink').href = links.figma;
        document.getElementById('figmaLink').target = '_blank';
    }
    if (links.live) {
        document.getElementById('liveLink').href = links.live;
        document.getElementById('liveLink').target = '_blank';
    }
    if (links.caseStudy) {
        document.getElementById('caseStudyLink').href = links.caseStudy;
        document.getElementById('caseStudyLink').target = '_blank';
    }
}

// ===== 更新设计展示画廊 =====
function updateDesignGallery(gallery) {
    const galleryContainer = document.getElementById('designGallery');
    galleryContainer.innerHTML = '';
    
    gallery.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="gallery-overlay">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </div>
        `;
        galleryContainer.appendChild(galleryItem);
    });
}

// ===== 设置项目导航 =====
function setupProjectNavigation(currentCategory, currentId) {
    const navigation = projectNavigation[currentCategory] && projectNavigation[currentCategory][currentId];
    
    if (!navigation) return;
    
    // 设置上一个项目
    const prevProject = document.getElementById('prevProject');
    if (navigation.prev) {
        prevProject.href = `project-detail.html?category=${navigation.prev.category}&id=${navigation.prev.id}`;
        prevProject.querySelector('.nav-title').textContent = navigation.prev.title;
    } else {
        prevProject.style.display = 'none';
    }
    
    // 设置下一个项目
    const nextProject = document.getElementById('nextProject');
    if (navigation.next) {
        nextProject.href = `project-detail.html?category=${navigation.next.category}&id=${navigation.next.id}`;
        nextProject.querySelector('.nav-title').textContent = navigation.next.title;
    } else {
        nextProject.style.display = 'none';
    }
}

// ===== 初始化图片画廊 =====
function initImageGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(img => {
        img.addEventListener('click', () => {
            openImageModal(img.src, img.alt);
        });
        
        img.classList.add('image-zoom');
    });
}

// ===== 打开图片模态框 =====
function openImageModal(src, alt) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-backdrop" onclick="closeImageModal()"></div>
        <div class="modal-content">
            <img src="${src}" alt="${alt}">
            <button class="modal-close" onclick="closeImageModal()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // 添加模态框样式
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // 添加样式到head
    if (!document.getElementById('modal-styles')) {
        const styles = document.createElement('style');
        styles.id = 'modal-styles';
        styles.textContent = `
            .modal-backdrop {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                cursor: pointer;
            }
            .modal-content {
                position: relative;
                max-width: 90%;
                max-height: 90%;
                z-index: 1;
            }
            .modal-content img {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
                border-radius: 10px;
            }
            .modal-close {
                position: absolute;
                top: -40px;
                right: 0;
                background: none;
                border: none;
                color: white;
                font-size: 24px;
                cursor: pointer;
                padding: 10px;
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }
}

// ===== 关闭图片模态框 =====
function closeImageModal() {
    const modal = document.querySelector('.image-modal');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
        }, 300);
    }
}

// ===== 初始化滚动动画 =====
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
    const animateElements = document.querySelectorAll('.timeline-item, .result-card, .learning-item, .link-card, .gallery-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// ===== 初始化数字滚动动画 =====
function initCounterAnimations() {
    const counters = document.querySelectorAll('.result-number');
    
    const animateCounter = (counter) => {
        const text = counter.textContent;
        const isPercentage = text.includes('%');
        const isRating = text.includes('/');
        const hasPlus = text.includes('+');
        const hasMinus = text.includes('-');
        
        let targetValue;
        if (isRating) {
            targetValue = parseFloat(text.split('/')[0]);
        } else {
            targetValue = parseFloat(text.replace(/[%+-]/g, ''));
        }
        
        const increment = targetValue / 50;
        let current = 0;
        
        const updateCounter = () => {
            if (current < targetValue) {
                current += increment;
                let displayValue = Math.min(current, targetValue);
                
                if (isRating) {
                    counter.textContent = displayValue.toFixed(1) + '/5';
                } else {
                    let prefix = hasPlus ? '+' : hasMinus ? '-' : '';
                    let suffix = isPercentage ? '%' : '';
                    counter.textContent = prefix + Math.round(displayValue) + suffix;
                }
                
                requestAnimationFrame(updateCounter);
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

// ===== 错误处理 =====
function showError(message) {
    document.body.innerHTML = `
        <div style="
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            flex-direction: column;
            text-align: center;
            padding: 20px;
        ">
            <h1 style="color: #FF6B35; font-size: 3rem; margin-bottom: 20px;">404</h1>
            <p style="color: #6C757D; font-size: 1.2rem; margin-bottom: 30px;">${message}</p>
            <a href="index.html" style="
                background: #FF6B35;
                color: white;
                padding: 12px 24px;
                border-radius: 25px;
                text-decoration: none;
                font-weight: 600;
            ">返回首页</a>
        </div>
    `;
}

// ===== 键盘导航支持 =====
document.addEventListener('keydown', (e) => {
    // ESC键关闭模态框
    if (e.key === 'Escape') {
        closeImageModal();
    }
    
    // 左右箭头键切换项目
    if (e.key === 'ArrowLeft') {
        const prevLink = document.getElementById('prevProject');
        if (prevLink && prevLink.href) {
            window.location.href = prevLink.href;
        }
    }
    
    if (e.key === 'ArrowRight') {
        const nextLink = document.getElementById('nextProject');
        if (nextLink && nextLink.href) {
            window.location.href = nextLink.href;
        }
    }
});

// ===== 导出函数供全局使用 =====
window.closeImageModal = closeImageModal;