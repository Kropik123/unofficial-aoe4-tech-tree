import React, { useState, cloneElement } from 'react';
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

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseMove = (event: MouseEvent) => {
        setPosition({ x: event.clientX + offsetX, y: event.clientY + offsetY });
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
