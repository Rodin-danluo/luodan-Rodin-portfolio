// 项目数据
const projectsData = {
    // 1. 核心产品/B端
    'product': {
        'academic-grid': {
            title: '学术格子 AI版 - 科研成果管理 SaaS',
            subtitle: '基于 LLM 的高校科研自动填表系统 | 软件著作权项目',
            category: 'B端产品',
            tags: ['SaaS平台', '痛点解决', 'SaaS逻辑', '商业计划'],
            desc: '解决高校科研人员重复填表痛点，注册用户5万+，获多家媒体报道。',
            mainImage: 'images/projects/academic-main.jpg',
            content: `...这里等会我们会用 JS 动态生成，你先把图片放好...` // 简化演示，逻辑在 script.js
        },
        'fast-fill': {
            title: '快填表 - 智能填表助手',
            subtitle: '湘工信杯参赛作品：OCR解析与知识图谱构建',
            category: '工具产品',
            tags: ['AI应用', '效率工具', 'B端设计'],
            desc: '利用 AI 自动解析非结构化数据，构建个人科研数据库。',
            mainImage: 'images/projects/fastfill-main.jpg'
        }
    },
    // 2. AIGC/IP
    'aigc': {
        'tea-rice-ip': {
            title: '茶宝·扬舟 - 城市双子IP',
            subtitle: '入选轨道交通博览会：AIGC 工作流文创设计',
            category: 'AIGC设计',
            tags: ['AIGC', 'IP形象', 'AR交互', '商业落地'],
            desc: '利用 Midjourney + SD 快速构建城市IP，落地包装与AR互动。',
            mainImage: 'images/projects/tea-rice-main.jpg'
        }
    },
    // 3. 社会创新
    'social': {
        'longxia': {
            title: '龙匣筑梦 - 乡村振兴',
            subtitle: '三下乡社会实践优秀团队项目',
            category: '服务设计',
            tags: ['墙绘', '支教', '社会责任'],
            desc: '深入乡村进行墙绘美化与艺术支教，践行设计社会价值。',
            mainImage: 'images/projects/longxia-main.jpg'
        }
    }
};

// 导出数据供 script.js 使用
window.projectsData = projectsData;