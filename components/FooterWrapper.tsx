import { getFooterSettings, getHeaderSettings } from '@/lib/content';
import { Footer } from './Footer';

export function FooterWrapper() {
  const footerSettings = getFooterSettings();
  const headerSettings = getHeaderSettings();

  return <Footer settings={footerSettings} navigation={headerSettings.navigation} />;
}
