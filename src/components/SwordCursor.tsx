import { useEffect, useRef } from 'react';

export default function SwordCursor() {
  const cursorRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let frame = 0;
    let x = -100;
    let y = -100;

    const moveCursor = () => {
      frame = 0;
      const cursor = cursorRef.current;
      if (!cursor) return;

      cursor.style.transform = `translate3d(${x - 2}px, ${y - 2}px, 0)`;
      cursor.dataset.visible = 'true';
    };

    const handlePointerMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;

      if (!frame) {
        frame = window.requestAnimationFrame(moveCursor);
      }
    };

    const hideCursor = () => {
      const cursor = cursorRef.current;
      if (cursor) cursor.dataset.visible = 'false';
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerMove, { passive: true });
    window.addEventListener('blur', hideCursor);
    document.addEventListener('mouseleave', hideCursor);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerMove);
      window.removeEventListener('blur', hideCursor);
      document.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  return (
    <img
      ref={cursorRef}
      src="https://i.imgur.com/0Vy5bg0.png"
      alt=""
      aria-hidden="true"
      draggable={false}
      referrerPolicy="no-referrer"
      onError={(event) => {
        event.currentTarget.src = '/cursor-arrow.png';
      }}
      className="sword-cursor"
    />
  );
}
