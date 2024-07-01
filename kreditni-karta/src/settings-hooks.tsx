import { useContext } from 'react';
import { SettingContext } from './components/settings-context';

// Hook pro použití kontextu

export const useSettings = () => {
  const context = useContext(SettingContext);
  if (!context) {
    throw new Error('useSettings must be used within a ContextProvider');
  }
  return context;
};
