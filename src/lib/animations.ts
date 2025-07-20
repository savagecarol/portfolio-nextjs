import { Variants } from 'framer-motion';

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Fade in up animation
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Fade in down animation
export const fadeInDown: Variants = {
  hidden: { 
    opacity: 0, 
    y: -60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Fade in left animation
export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Fade in right animation
export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Scale in animation
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Stagger container for children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Stagger container with faster timing
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

// Bounce animation
export const bounce: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.3 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

// Slide up animation
export const slideUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 100 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: "easeInOut" as const
  }
};

export const hoverLift = {
  y: -10,
  transition: {
    duration: 0.2,
    ease: "easeInOut" as const
  }
};

// Text reveal animation
export const textReveal: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Card hover animation
export const cardHover = {
  y: -8,
  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  transition: {
    duration: 0.3,
    ease: "easeInOut" as const
  }
};

// Button hover animation
export const buttonHover = {
  scale: 1.05,
  boxShadow: "0 10px 20px rgba(249, 115, 22, 0.3)",
  transition: {
    duration: 0.2,
    ease: "easeInOut" as const
  }
};

// Page transition
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
}; 