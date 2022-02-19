import React, { MouseEventHandler } from 'react';

type ScrollAreaProps = {
  onMouseMove: MouseEventHandler<Element>;
};

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(({ onMouseMove }, ref) => {
  return (
    <div className="scroll-area" ref={ref} onMouseMove={onMouseMove}>
      <section>
        <div>
          <h1>Creative</h1>
        </div>
      </section>
      <section>
        <h1>Frontend</h1>
      </section>
      <section>
        <div>
          <h1>Development</h1>
        </div>
      </section>
    </div>
  );
});

export default ScrollArea;
