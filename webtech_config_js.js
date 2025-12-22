// 网站配置文件 - 方便修改和维护
const CONFIG = {
    // 背景浮动图标配置（视差滚动效果）
    floatingIcons: [
        {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
            alt: 'Linux',
            x: 8,
            y: 15,
            delay: 0
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
            alt: 'Kubernetes',
            x: 88,
            y: 12,
            delay: 0.5
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg',
            alt: 'Rust',
            x: 25,
            y: 85,
            delay: 1
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
            alt: 'Docker',
            x: 85,
            y: 70,
            delay: 1.5
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
            alt: 'Go',
            x: 75,
            y: 88,
            delay: 2
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            alt: 'Python',
            x: 90,
            y: 45,
            delay: 2.5
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            alt: 'Node.js',
            x: 50,
            y: 8,
            delay: 3
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
            alt: 'PostgreSQL',
            x: 45,
            y: 75,
            delay: 3.5
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
            alt: 'Redis',
            x: 25,
            y: 20,
            delay: 4
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg',
            alt: 'Prometheus',
            x: 75,
            y: 25,
            delay: 4.5
        }
    ],

    // 技术栈配置
    techStack: [
        {
            name: 'Linux',
            icon: '🐧',
            description: '系统运维与内核开发'
        },
        {
            name: 'Kubernetes',
            icon: '☸️',
            description: '容器编排与云原生'
        },
        {
            name: 'Rust',
            icon: '🦀',
            description: '系统级编程语言'
        },
        {
            name: 'Docker',
            icon: '🐳',
            description: '容器化技术'
        },
        {
            name: 'Go',
            icon: '🔷',
            description: '云原生开发语言'
        },
        {
            name: 'Istio',
            icon: '🌐',
            description: '服务网格解决方案'
        },
        {
            name: 'Prometheus',
            icon: '📊',
            description: '监控与告警系统'
        },
        {
            name: 'Grafana',
            icon: '📈',
            description: '数据可视化平台'
        },
        {
            name: 'Terraform',
            icon: '🏗️',
            description: '基础设施即代码'
        },
        {
            name: 'Ansible',
            icon: '⚙️',
            description: '自动化运维工具'
        },
        {
            name: 'PostgreSQL',
            icon: '🐘',
            description: '关系型数据库'
        },
        {
            name: 'Redis',
            icon: '🔴',
            description: '内存数据库'
        }
    ],

    // 开源项目配置
    projects: [
        {
            name: 'Kubernetes 实践指南',
            description: 'Kubernetes 相关的经验与总结',
            icon: '☸️',
            link: 'https://github.com/yourusername/kubernetes-guide'
        },
        {
            name: 'Istio 实践指南',
            description: 'Istio 相关实战经验与总结',
            icon: '🌐',
            link: 'https://github.com/yourusername/istio-guide'
        },
        {
            name: 'TKE 实践指南',
            description: 'TKE 相关实践与总结',
            icon: '☁️',
            link: 'https://github.com/yourusername/tke-guide'
        },
        {
            name: 'req',
            description: '简单易用的 HTTP 客户端',
            icon: '🚀',
            link: 'https://github.com/yourusername/req'
        },
        {
            name: 'cert-manager-webhook',
            description: 'Cert-manager 的 DNSPod Webhook',
            icon: '🔐',
            link: 'https://github.com/yourusername/cert-manager-webhook'
        },
        {
            name: 'kubectl-plugin',
            description: 'Kubectl 实用插件集合',
            icon: '🛠️',
            link: 'https://github.com/yourusername/kubectl-plugin'
        }
    ],

    // 社交链接配置
    socialLinks: {
        github: 'https://github.com/yourusername',
        twitter: 'https://twitter.com/yourusername',
        juejin: 'https://juejin.cn/user/yourid',
        zhihu: 'https://zhihu.com/people/yourusername',
        email: 'mailto:your.email@example.com',
        rss: 'https://webtech.wiki/rss.xml'
    },

    // 网站基本信息
    siteInfo: {
        name: 'Web技术文档',
        domain: 'https://webtech.wiki',
        author: 'webtech',
        description: '云原生老兵一枚，热爱开源的开发者',
        wechatName: 'webtech 技术',
        icp: '粤ICP备2021005819号-1' // 根据实际情况修改
    },

    // 电子书链接
    ebooks: [
        {
            name: 'Kubernetes 实践指南',
            url: 'https://k8s.imroc.cc/kubernetes'
        },
        {
            name: 'Istio 实践指南',
            url: 'https://istio.imroc.cc/istio'
        },
        {
            name: 'TKE 实践指南',
            url: 'https://tke.imroc.cc/tke'
        }
    ]
};