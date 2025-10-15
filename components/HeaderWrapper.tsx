import { getHeaderSettings } from '@/lib/content';
import { Header } from './Header';

export function HeaderWrapper() {
  const headerSettings = getHeaderSettings();

  return <Header navigation={headerSettings.navigation} />;
}
