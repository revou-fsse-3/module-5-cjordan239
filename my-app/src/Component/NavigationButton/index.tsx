// NavigationButton.tsx
import { useRouter } from 'next/router';
import React from 'react';

interface NavigationButtonProps {
  route: string;
  className: string;
  children: React.ReactNode;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ route, className, children }) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(route);
  };

  return (
    <button onClick={handleButtonClick} className={className}>
      {children}
    </button>
  );
};

export default NavigationButton;
