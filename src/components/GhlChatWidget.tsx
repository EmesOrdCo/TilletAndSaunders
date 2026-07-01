'use client';

import Script from 'next/script';
import { siteConfig } from '@/lib/site-config';

export default function GhlChatWidget() {
  const { chatWidgetId, locationId } = siteConfig.ghl;

  if (!chatWidgetId) {
    return null;
  }

  return (
    <>
      <div
        data-chat-widget
        data-widget-id={chatWidgetId}
        data-location-id={locationId || undefined}
      />
      <Script
        id="ghl-chat-widget"
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id={chatWidgetId}
        strategy="lazyOnload"
      />
    </>
  );
}
