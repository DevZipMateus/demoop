
import React, { useState, useEffect } from 'react';

interface AppLoaderProps {
  children: React.ReactNode;
}

export const AppLoader: React.FC<AppLoaderProps> = ({ children }) => {
  const [isReactReady, setIsReactReady] = useState(false);

  useEffect(() => {
    // Verify React hooks are working
    try {
      const testState = React.useState(true);
      if (testState && typeof testState[0] === 'boolean' && typeof testState[1] === 'function') {
        setIsReactReady(true);
      } else {
        console.error('React hooks not functioning properly');
      }
    } catch (error) {
      console.error('React hooks initialization failed:', error);
    }
  }, []);

  if (!isReactReady) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return <>{children}</>;
};
