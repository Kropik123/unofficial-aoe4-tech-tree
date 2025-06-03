import React, { useState, useRef, useLayoutEffect, cloneElement } from 'react';
import type { ReactNode, ReactElement, MouseEvent } from 'react';

interface CustomTooltipProps {
    content: ReactNode;
    children: ReactElement<React.HTMLAttributes<HTMLElement>>;
    offsetX?: number;
    offsetY?: number;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
                                                         content,
                                                         children,
                                                         offsetX = 0,
                                                         offsetY = 26,
                                                     }) => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    const [tooltipSize, setTooltipSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        if (tooltipRef.current) {
            const rect = tooltipRef.current.getBoundingClientRect();
            setTooltipSize({ width: rect.width, height: rect.height });
        }
    }, [visible, content]);

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseMove = (event: MouseEvent) => {
        const padding = 8; // padding from edge
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        let x = event.clientX + offsetX;
        let y = event.clientY + offsetY;

        if (x + tooltipSize.width + padding > screenWidth) {
            x = screenWidth - tooltipSize.width - padding;
        }
        if (y + tooltipSize.height + padding > screenHeight) {
            y = screenHeight - tooltipSize.height - padding;
        }

        setPosition({ x, y });
    };

    const triggerElement = cloneElement(children, {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onMouseMove: handleMouseMove,
        style: { cursor: 'pointer', ...children.props.style },
    });

    return (
        <>
            {triggerElement}
            {visible && (
                <div
                    ref={tooltipRef}
                    className="p-tooltip p-component"
                    style={{
                        position: 'fixed',
                        top: position.y,
                        left: position.x,
                        zIndex: 1000,
                        maxWidth: 320,
                        pointerEvents: 'none',
                        whiteSpace: 'normal',
                    }}
                >
                    <div>{content}</div>
                </div>
            )}
        </>
    );
};

export default CustomTooltip;
