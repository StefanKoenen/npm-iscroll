export interface IScrollIndicatorOptions {
    el?: HTMLElement | string;
    fade?: boolean;
    ignoreBoundaries?: boolean;
    interactive?: boolean;
    listenX?: boolean;
    listenY?: boolean;
    resize?: boolean;
    shrink?: boolean;
    speedRatioX?: number;
    speedRatioY?: number;
}

export interface IScrollKeyBindings {
    pageUp?: number | string,
    pageDown: number | string;
    end: number | string;
    home: number | string;
    left: number | string;
    up: number | string;
    right: number | string;
    down: number | string;
}

export interface IScrollOptions {

    indicators?: IScrollIndicatorOptions;

    // Scrollbar
    scrollbars?: boolean | string;
    fadeScrollbars?: boolean;
    interactiveScrollbars?: boolean;
    resizeScrollbars?: boolean;
    shrinkScrollbars?: boolean;

    // Zoom
    zoom?: boolean;
    zoomMin?: number;
    zoomMax?: number;
    startZoom?: number;
    wheelAction?: string;

    snap?: boolean | string;

    bindToWrapper?: boolean;
    bounceEasing?: string | IScrollEaseOption;
    bounceTime?: number;
    deceleration?: number;
    mouseWheelSpeed?: number;
    preventDefaultException?: any;
    resizePolling?: number;
    probeType?: number;
    keyBindings?: boolean | IScrollKeyBindings;

    useTransform?: boolean;
    useTransition?: boolean;
    HWCompositing?: boolean;
    bounce?: boolean;
    click?: boolean;
    disableMouse?: boolean;
    disablePointer?: boolean;
    disableTouch?: boolean;
    eventPassthrough?: boolean;
    freeScroll?: boolean;
    invertWheelDirection?: boolean;
    momentum?: boolean;
    mouseWheel?: boolean;
    preventDefault?: boolean;
    tap?: boolean | string;

    scrollX?: number;
    scrollY?: number;
    startX?: number;
    startY?: number;
}

export interface IScrollEaseOption {
    style: 'string';
    fn: Function;
}
export interface IScrollEaseOptions {
    quadratic: IScrollEaseOption;
    circular: IScrollEaseOption;
    back: IScrollEaseOption;
    bounce: IScrollEaseOption;
    elastic: IScrollEaseOption;
}

export interface IScrollUtils {
    ease: IScrollEaseOptions;
}

export class IScroll {

    constructor(element: string, options?: IScrollOptions);
    constructor(element: HTMLElement, options?: IScrollOptions);

    destroy(): void;
    refresh(): void;
    scrollTo(x: number, y: number, time?: number, easing?: IScrollEaseOption): void;
    scrollBy(x: number, y: number, time?: number, easing?: IScrollEaseOption): void;
    scrollToElement(el: HTMLElement | string, time?: number, offsetX?: number, offsetY?: number, easing?: IScrollEaseOption): void;
    goToPage(x: number, y: number, time?: number, easing?: IScrollEaseOption): void;
    prev(): void;
    next(): void;
    zoom(scale: number, x: number, y: number, time?: number): void;
    refresh(): void;
    destroy(): void;

    utils: IScrollUtils;
    
    // Events
    on: (type: string, fn: () => void) => void;
}
