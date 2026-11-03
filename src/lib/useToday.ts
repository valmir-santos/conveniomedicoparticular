import { useEffect, useState } from 'react';
import { todayISO } from './site';

declare global {
  var __BUILD_DAY__: string | undefined;
  var __SHOW_SCHEDULED__: boolean | undefined;
}

// Na primeira renderização vale a data do build (gravada no HTML e, no build, definida em
// entry-server), para o React reaproveitar a página pronta sem divergência; logo depois
// passa para a data de hoje.
export const useToday = () => {
  const [today, setToday] = useState(() => globalThis.__BUILD_DAY__ || todayISO());
  useEffect(() => {
    // Na prévia de revisão os artigos agendados continuam visíveis
    if (!window.__SHOW_SCHEDULED__) setToday(todayISO());
  }, []);
  return today;
};
