import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

// - @param {object} start - the framer motion animation object when IN view
// - @param {object} end - the framer motion animation object when OUT of view
// - @param {number} threshold - the threshold for when IN view
// - @returns {object} an object with the ref and the animation

export default function useCustomAnimation(seen, unseen, threshold) {
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold });

  useEffect(() => {
    if (inView) animation.start(seen);
    else animation.start(unseen);
  }, [inView, animation, seen, unseen]);

  return { ref, animation };
}
