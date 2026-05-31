/**
 * 斗破苍穹百科 - 音效微反馈模块
 * 功能：UI 交互音效、点击涟漪、战力计算音效
 */

(function() {
    'use strict';

    // ========== 配置 ==========
    const CONFIG = {
        enabled: true,
        volume: 0.3,
        sounds: {
            click: { freq: 800, dur: 0.05, type: 'sine' },
            hover: { freq: 600, dur: 0.03, type: 'sine' },
            success: { freq: [523, 659, 784], dur: 0.15, type: 'sine' },
            fire: { freq: [200, 300, 150], dur: 0.2, type: 'sawtooth' },
            power: { freq: [100, 200, 400, 800], dur: 0.3, type: 'square' },
            levelup: { freq: [523, 659, 784, 1047], dur: 0.2, type: 'sine' },
            error: { freq: [200, 150], dur: 0.1, type: 'square' }
        }
    };

    // ========== 音频上下文 ==========
    let audioCtx = null;

    function getAudioContext() {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        return audioCtx;
    }

    // ========== 播放音效 ==========
    function playSound(type) {
        if (!CONFIG.enabled) return;

        try {
            const ctx = getAudioContext();
            const sound = CONFIG.sounds[type];
            if (!sound) return;

            const freqs = Array.isArray(sound.freq) ? sound.freq : [sound.freq];
            
            freqs.forEach((freq, i) => {
                const oscillator = ctx.createOscillator();
                const gainNode = ctx.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(ctx.destination);

                oscillator.type = sound.type;
                oscillator.frequency.setValueAtTime(freq, ctx.currentTime + i * sound.dur);

                gainNode.gain.setValueAtTime(CONFIG.volume, ctx.currentTime + i * sound.dur);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + (i + 1) * sound.dur);

                oscillator.start(ctx.currentTime + i * sound.dur);
                oscillator.stop(ctx.currentTime + (i + 1) * sound.dur);
            });
        } catch (e) {
            // 静默失败
        }
    }

    // ========== 点击涟漪效果 ==========
    function createRipple(e) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: rgba(242, 204, 92, 0.4);
            pointer-events: none;
            z-index: 99999;
            left: ${e.clientX - 10}px;
            top: ${e.clientY - 10}px;
            animation: doupo-ripple 0.6s ease-out forwards;
        `;
        document.body.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    }

    // ========== 初始化 ==========
    function init() {
        // 添加涟漪动画样式
        const style = document.createElement('style');
        style.textContent = `
            @keyframes doupo-ripple {
                0% { transform: scale(0); opacity: 1; }
                100% { transform: scale(4); opacity: 0; }
            }
        `;
        document.head.appendChild(style);

        // 点击事件
        document.addEventListener('click', (e) => {
            // 播放点击音效
            playSound('click');
            
            // 创建涟漪效果（仅在卡片和按钮上）
            const target = e.target.closest('.info-card, .catalog-item, button, .btn, a[href]');
            if (target) {
                createRipple(e);
            }
        });

        // 悬浮音效（节流）
        let lastHoverTime = 0;
        document.addEventListener('mouseover', (e) => {
            const now = Date.now();
            if (now - lastHoverTime < 200) return;
            
            const target = e.target.closest('.info-card, .catalog-item, .flame-card, .character-card');
            if (target) {
                lastHoverTime = now;
                playSound('hover');
            }
        });

        // 战力计算器特殊音效
        document.addEventListener('click', (e) => {
            if (e.target.closest('.calc-container') || e.target.id === 'calcBtn') {
                setTimeout(() => playSound('power'), 100);
            }
        });

        // 异火卡片展开音效
        document.addEventListener('click', (e) => {
            const flameCard = e.target.closest('.flame-card');
            if (flameCard) {
                playSound('fire');
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.DoupoSounds = { play: playSound, enable: () => CONFIG.enabled = true, disable: () => CONFIG.enabled = false };
})();
