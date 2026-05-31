/**
 * 斗破苍穹百科 - 无刷新页面切换模块
 * 功能：使用 View Transitions API 或 Fetch API 实现平滑页面切换
 */

(function() {
    'use strict';

    // ========== 配置 ==========
    const CONFIG = {
        enabled: true,
        duration: 300,
        easing: 'ease-out',
        contentSelector: '.container',
        navSelector: '.nav'
    };

    // ========== 页面切换 ==========
    let isTransitioning = false;

    function initPageTransitions() {
        if (!CONFIG.enabled) return;

        // 拦截所有站内链接
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href]');
            if (!link) return;

            const href = link.getAttribute('href');
            
            // 跳过外部链接、锚点、特殊链接
            if (!href || 
                href.startsWith('http') || 
                href.startsWith('#') || 
                href.startsWith('mailto:') ||
                href.startsWith('javascript:') ||
                link.target === '_blank') {
                return;
            }

            // 跳过当前页面
            if (href === window.location.pathname.split('/').pop()) {
                e.preventDefault();
                return;
            }

            e.preventDefault();
            navigateTo(href);
        });

        // 浏览器前进/后退
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.url) {
                loadPage(e.state.url, false);
            }
        });
    }

    async function navigateTo(url) {
        if (isTransitioning) return;
        isTransitioning = true;

        try {
            // 使用 View Transitions API（如果可用）
            if (document.startViewTransition) {
                await document.startViewTransition(() => loadPage(url, true)).finished;
            } else {
                // 降级：自定义动画
                await loadPageWithAnimation(url);
            }
        } catch (e) {
            console.error('Page transition failed:', e);
            window.location.href = url;
        } finally {
            isTransitioning = false;
        }
    }

    async function loadPage(url, pushState = true) {
        const response = await fetch(url);
        if (!response.ok) {
            window.location.href = url;
            return;
        }

        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // 更新内容
        const newContent = doc.querySelector(CONFIG.contentSelector);
        const currentContent = document.querySelector(CONFIG.contentSelector);
        
        if (newContent && currentContent) {
            currentContent.innerHTML = newContent.innerHTML;
        }

        // 更新导航高亮
        const newNav = doc.querySelector(CONFIG.navSelector);
        const currentNav = document.querySelector(CONFIG.navSelector);
        if (newNav && currentNav) {
            currentNav.innerHTML = newNav.innerHTML;
        }

        // 更新标题
        document.title = doc.title;

        // 更新 URL
        if (pushState) {
            history.pushState({ url }, '', url);
        }

        // 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // 重新初始化页面特定功能
        reinitializePage();
    }

    async function loadPageWithAnimation(url) {
        const content = document.querySelector(CONFIG.contentSelector);
        if (!content) {
            window.location.href = url;
            return;
        }

        // 淡出
        content.style.transition = `opacity ${CONFIG.duration}ms ${CONFIG.easing}`;
        content.style.opacity = '0';

        await sleep(CONFIG.duration);

        // 加载新页面
        await loadPage(url, true);

        // 淡入
        content.style.opacity = '0';
        await sleep(50);
        content.style.opacity = '1';

        await sleep(CONFIG.duration);
    }

    function reinitializePage() {
        // 重新初始化滚动动画
        if (typeof initScrollAnimations === 'function') {
            initScrollAnimations();
        }

        // 重新初始化返回顶部按钮
        if (typeof initBackToTop === 'function') {
            initBackToTop();
        }

        // 重新初始化导航
        if (typeof initNav === 'function') {
            initNav();
        }

        // 触发自定义事件
        window.dispatchEvent(new CustomEvent('pageLoaded'));
    }

    // ========== 工具函数 ==========
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // ========== 初始化 ==========
    function init() {
        // 保存初始状态
        history.replaceState({ url: window.location.href }, '', window.location.href);
        
        // 初始化页面切换
        initPageTransitions();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.DoupoTransitions = { navigateTo, init };
})();
