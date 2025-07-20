import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px 0px -100px 0px" 
  });

  return { ref, isInView };
}

export function useScrollAnimationWithThreshold(threshold = 0.1) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: threshold 
  });

  return { ref, isInView };
} 