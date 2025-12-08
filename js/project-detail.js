// js/project-detail.js

const projectsData = {
    // 1. 产品/APP (Product)
    'product': {
        'silver-help': {
            title: '老有所帮 - 适老化互助平台',
            subtitle: '基于“时间银行”的社区养老服务设计',
            category: '交互设计',
            date: '2025',
            tags: ['适老化', '服务设计', 'App交互', '社会创新'],
            background: '针对独居老人“数字鸿沟”与“信任缺失”痛点，设计了一套基于社区熟人链的互助服务体系。',
            role: '独立设计师',
            mainImage: 'images/projects/silver-main.jpg', // 【需准备】如果没有图，会裂开，但不影响程序运行
            gallery: [] 
        }
    },

    // 2. AIGC/IP (这里我们要放“大地之环”和“茶宝”)
    'aigc': {
        // 新增：轨道交通博览会作品
        'railway-aigc': {
            title: '大地之环 - 未来列车畅想',
            subtitle: '入选轨道交通博览会 AIGC 作品',
            category: 'AIGC 概念设计',
            date: '2025',
            tags: ['Midjourney', '未来主义', '概念设计', '博览会入选'],
            background: '基于“未来城市列车”主题，利用 AI 生成的概念设计方案。探讨了环形轨道与火星地貌的结合。',
            role: 'AIGC 创作者',
            mainImage: 'images/projects/railway-main.jpg', // 【已确认】这是你刚发的那个火星环形车图片
            gallery: []
        },
        // 保留：茶宝IP
        'tea-rice-ip': {
            title: '茶宝·扬舟 - AIGC 城市IP',
            subtitle: 'AIGC 工作流赋能文创：从生成到落地',
            category: 'AIGC & 品牌',
            date: '2025',
            tags: ['IP设计', 'AR交互', '商业落地'],
            background: '利用 Midjourney + SD 解决传统文创成本高痛点，打造“茶宝”与“米宝”双IP形象。',
            role: '主设计师',
            mainImage: 'images/projects/tea-rice-main.jpg',
            gallery: []
        }
    },

    // 3. 品牌设计 (Branding)
    'branding': {
        'yinxi-pepper': {
            title: '隐溪椒园 - 农产品品牌全案',
            subtitle: '乡村振兴背景下的品牌视觉重塑',
            category: '品牌设计',
            date: '2024',
            tags: ['品牌VI', '包装设计', '乡村振兴'],
            background: '挖掘隐溪村文化内涵，通过视觉升级提升农产品附加值。',
            role: '品牌设计师',
            mainImage: 'images/projects/yinxi-main.jpg', 
            gallery: []
        }
    },

    // 4. 社会实践 (Social)
    'social': {
        'longxia': {
            title: '龙匣筑梦 - 乡村振兴实践',
            subtitle: '三下乡优秀团队：墙绘与艺术支教',
            category: '社会实践',
            date: '2024',
            tags: ['三下乡', '墙绘', '支教', '团队协作'],
            background: '深入乡村进行墙绘美化与艺术支教，主导村部文化墙绘制。',
            role: '墙绘组长',
            mainImage: 'images/projects/longxia-main.jpg', 
            gallery: []
        }
    }
};

window.projectsData = projectsData;