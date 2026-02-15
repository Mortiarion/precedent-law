import { Tween } from 'svelte/motion';

export interface FadeOptions {
    duration?: number;
    threshold?: number;
    root?: Element | null;
    rootMargin?: string;
    once?: boolean;
    initial?: number;
}

export function fadeOnVisible(
    node: HTMLElement,
    options: FadeOptions = {}
) {
    if (typeof IntersectionObserver === 'undefined') {
        return {};
    }

    const {
        duration = 700,
        threshold = 0.1,
        root = null,
        rootMargin = '0px',
        once = false,
        initial = 0
    } = options;

    const opacity = new Tween(initial, { duration });

    node.style.opacity = String(opacity.current);

    let frame: number;

    function animate() {
        node.style.opacity = String(opacity.current);
        frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);

    const observer = new IntersectionObserver(
        (entries) => {
            const entry = entries[0];
            if (!entry) return;

            if (entry.isIntersecting) {
                opacity.set(1);
                if (once) observer.unobserve(node);
            } else if (!once) {
                opacity.set(0);
            }
        },
        { threshold, root, rootMargin }
    );

    observer.observe(node);

    return {
        destroy() {
            cancelAnimationFrame(frame);
            observer.disconnect();
        }
    };
}
