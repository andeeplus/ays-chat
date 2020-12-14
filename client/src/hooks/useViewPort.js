
import { useState, useEffect } from 'react';


const defaultOptions = {
  defaultVH: undefined,
  defaultVW: undefined,
  updateOnResize: true,
}

const useViewport = (options) => {
  const { updateOnResize, defaultVW, defaultVH } = {
    ...defaultOptions,
    ...options,
  };

  const [vw, setVW] = useState(defaultVW);
  const [vh, setVH] = useState(defaultVH);

  useEffect(() => {
    const setSizes = () => {
      if (window.innerWidth !== vw) {
        setVW(window.innerWidth);
      }

      if (window.innerHeight !== vh) {
        setVH(window.innerHeight);
      }
    };

    setSizes();

    if (updateOnResize) {
      window.addEventListener('resize', setSizes);

      return () => window.removeEventListener('resize', setSizes);
    }
  }, [updateOnResize, vh, vw]);

  return { vw, vh };
};

export default useViewport