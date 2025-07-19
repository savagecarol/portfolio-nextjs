'use client';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'white' | 'gray';
  text?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'primary',
  text 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-blue-600',
    white: 'text-white',
    gray: 'text-gray-600'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin rounded-full border-2 border-gray-300 border-t-current`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
      {text && (
        <p className="text-sm text-gray-600 animate-pulse">{text}</p>
      )}
    </div>
  );
} 