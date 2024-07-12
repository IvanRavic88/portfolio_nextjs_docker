'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface ThemedTextProps {
  className?: string;
  children: React.ReactNode;
}

const ThemedText: React.FC<ThemedTextProps> = ({
  className = '',
  children,
}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const textColor = theme === 'dark' ? 'text-custom-dark' : 'text-custom-light';

  return (
    <span className={`${className} ${mounted ? textColor : ''}`}>
      {children}
    </span>
  );
};

export default ThemedText;
