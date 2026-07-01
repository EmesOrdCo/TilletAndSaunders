'use client';

import Script from 'next/script';
import { siteConfig } from '@/lib/site-config';

export default function GhlContactForm() {
  const formId = siteConfig.ghl.formId;

  if (!formId) {
    return (
      <div className="p-8 bg-[var(--color-cream)] border border-[var(--color-off-white)] text-[var(--color-gray-warm)] text-sm">
        <p className="font-semibold text-[var(--color-charcoal)] mb-2">Contact form not configured yet</p>
        <p>
          Add your GoHighLevel form ID to <code className="text-[var(--color-burgundy)]">NEXT_PUBLIC_GHL_FORM_ID</code> in{' '}
          <code>.env.local</code>.
        </p>
      </div>
    );
  }

  const iframeId = `inline-${formId}`;

  return (
    <div className="ghl-form-embed w-full">
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
        style={{ width: '100%', height: '1023px', border: 'none', borderRadius: '8px' }}
        id={iframeId}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-id={formId}
        data-form-name="Tillett&Saunders"
        data-height="1023"
        data-layout-iframe-id={iframeId}
        title="Tillett&Saunders"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
}
