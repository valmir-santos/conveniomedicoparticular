import { useEffect, useState } from 'react';
import { todayISO } from './site';

declare global {
  interface Window { __BUILD_DAY__?: string; __SHOW_SCHEDULED__?: boolean }
}

// Na primeira renderização vale a data do build (gravada no HTML), para o React
// reaproveitar a página pronta sem divergência; logo depois passa para a data de hoje.
export const useToday = () => {
  const [today, setToday] = useState(() => (typeof window !== 'undefined' && window.__BUILD_DAY__) || todayISO());
  useEffect(() => {
    // Na prévia de revisão os artigos agendados continuam visíveis
    if (!window.__SHOW_SCHEDULED__) setToday(todayISO());
  }, []);
  return today;
};
