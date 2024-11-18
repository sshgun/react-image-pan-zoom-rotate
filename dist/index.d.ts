/// <reference types="react" />
import PanViewer from './PanViewer';
declare type ReactPanZoomProps = {
    image: string;
    alt?: string;
    ref?: any;
    resetImageState?: boolean;
};
declare const ReactPanZoom: ({ image, alt, ref, resetImageState }: ReactPanZoomProps) => JSX.Element;
export { PanViewer };
export default ReactPanZoom;
