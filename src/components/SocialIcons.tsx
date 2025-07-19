import { socialLinks } from '@/config/social';

interface SocialIconsProps {
  variant?: 'hero' | 'contact';
  className?: string;
}

export default function SocialIcons({ variant = 'hero', className = '' }: SocialIconsProps) {
  const getIconPath = (icon: string) => {
    switch (icon) {
      case 'youtube':
        return "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z";
      case 'medium':
        return "M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z";
      case 'github':
        return "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z";
      case 'linkedin':
        return "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";
      case 'instagram':
        return "M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z";
      default:
        return "";
    }
  };

  const getHoverColor = (color: string) => {
    switch (color) {
      case 'red':
        return 'hover:text-red-primary';
      case 'green':
        return 'hover:text-green-600';
      case 'blue':
        return 'hover:text-blue-600';
      case 'pink':
        return 'hover:text-pink-600';
      case 'gray':
        return 'hover:text-black';
      default:
        return 'hover:text-orange-primary';
    }
  };

  if (variant === 'hero') {
    return (
      <div className={`flex justify-center items-center space-x-6 ${className}`}>
        {Object.entries(socialLinks).map(([key, social]) => (
          <a
            key={key}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-black ${getHoverColor(social.color)} transition-colors duration-300`}
            title={social.title}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d={getIconPath(social.icon)} />
            </svg>
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'contact') {
    return (
      <div className={`grid grid-cols-2 gap-4 ${className}`}>
        {Object.entries(socialLinks).map(([key, social]) => (
          <a
            key={key}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300"
          >
            <svg 
              className={`w-5 h-5 ${social.color === 'red' ? 'text-red-primary' : 
                social.color === 'green' ? 'text-green-600' : 
                social.color === 'blue' ? 'text-blue-600' : 
                social.color === 'pink' ? 'text-pink-600' : 
                'text-black'}`} 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d={getIconPath(social.icon)} />
            </svg>
            <span className="text-black font-medium">{social.title}</span>
          </a>
        ))}
      </div>
    );
  }

  return null;
} 