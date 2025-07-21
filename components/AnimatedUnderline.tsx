'use client';

import React, { useEffect, useState } from 'react';

export default function AnimatedUnderline() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const hasAnimated = sessionStorage.getItem('underlineAnimated');

    if (!hasAnimated) {
      setShouldAnimate(true);
      sessionStorage.setItem('underlineAnimated', 'true');
    }
  }, []);

  return (
    <span className="relative inline-block">
      <span className="relative z-10">Semantically</span>
      <span
        className={`
          absolute bottom-0 left-0
          w-full h-1/2
          bg-[#03cea4] z-0
          transform origin-left
          ${shouldAnimate ? 'animate-underline' : ''}
        `}
      />
    </span>
  );
}
