import * as React from 'react';
export interface IDragData {
    x: number;
    y: number;
    dx: number;
    dy: number;
}
export interface IReactPanZoomStateType {
    dragging: boolean;
    mouseDown: boolean;
    comesFromDragging: boolean;
    dragData: IDragData;
    matrixData: number[];
}
export interface IReactPanZoomProps {
    height?: string;
    width?: string;
    className?: string;
    enablePan?: boolean;
    reset?: () => void;
    zoom?: number;
    pandx?: number;
    pandy?: number;
    rotation?: number;
    onPan?: (x: number, y: number) => void;
    setZoom: (z: number) => void;
    onReset?: (dx: number, dy: number, zoom: number) => void;
    onClick?: (e: React.MouseEvent<any>) => void;
    style?: {};
    children?: React.ReactNode;
}
export default class ReactPanZoom extends React.PureComponent<IReactPanZoomProps> {
    static defaultProps: Partial<IReactPanZoomProps>;
    private panWrapper;
    private panContainer;
    private getInitialState;
    state: IReactPanZoomStateType;
    UNSAFE_componentWillReceiveProps(nextProps: IReactPanZoomProps): void;
    componentWillUnmount(): void;
    reset: () => void;
    onClick: (e: React.MouseEvent<EventTarget>) => void;
    onTouchStart: (e: React.TouchEvent<EventTarget>) => void;
    onTouchEnd: () => void;
    onTouchMove: (e: React.TouchEvent<EventTarget>) => void;
    render(): JSX.Element;
    private onMouseDown;
    private panStart;
    private onMouseUp;
    private panEnd;
    preventDefault(e: any): void;
    private onMouseMove;
    private onWheel;
    private onMouseEnter;
    private onMouseLeave;
    private updateMousePosition;
    private getNewMatrixData;
}
