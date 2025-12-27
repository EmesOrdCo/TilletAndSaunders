'use client';

import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Info, BarChart3, Lock } from 'lucide-react';

export default function CookiePolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container pb-12 md:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="inline-block text-[var(--color-gold)] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
                Legal Information
              </span>
              <h1 className="text-white mb-4">
                Cookie <em>Policy</em>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed">
                Learn about how we use cookies and similar technologies on our website, and how you can manage your preferences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="mb-12">
              <p className="text-[var(--color-gray-warm)] mb-6 leading-relaxed">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-[var(--color-gray-warm)] leading-relaxed mb-4">
                This Cookie Policy explains what cookies are, how Tillet & Saunders uses cookies on our website 
                (the &quot;Website&quot;), and how you can control cookie preferences. This policy should be read alongside our{' '}
                <a href="/privacy-policy" className="text-[var(--color-burgundy)] hover:underline font-semibold">Privacy Policy</a>, 
                which provides more information about how we collect, use, and protect your personal information.
              </p>
              <p className="text-[var(--color-gray-warm)] leading-relaxed">
                This policy is written in accordance with the Privacy and Electronic Communications Regulations (PECR) and the UK 
                General Data Protection Regulation (UK GDPR).
              </p>
            </div>

            <div className="space-y-12">
              {/* What Are Cookies */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Cookie className="text-[var(--color-burgundy)]" size={24} />
                  <h2 className="text-2xl font-display">1. What Are Cookies?</h2>
                </div>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit 
                    a website. They are widely used to make websites work more efficiently and provide information to website owners.
                  </p>
                  <p>
                    Cookies allow websites to remember your actions and preferences (such as login details, language, font size, 
                    and other display preferences) over a period of time, so you don&apos;t have to keep re-entering them whenever 
                    you come back to the site or browse from one page to another.
                  </p>
                  <p>
                    Cookies can be set by the website you are visiting (first-party cookies) or by other websites that run content 
                    on the page you are viewing (third-party cookies). They can also be session cookies (temporary, deleted when 
                    you close your browser) or persistent cookies (remain on your device for a set period or until you delete them).
                  </p>
                </div>
              </div>

              {/* How We Use Cookies */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Settings className="text-[var(--color-burgundy)]" size={24} />
                  <h2 className="text-2xl font-display">2. How We Use Cookies</h2>
                </div>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>We use cookies for the following purposes:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Essential Functionality:</strong> To enable core website functionality and ensure the website operates correctly</li>
                    <li><strong>Performance and Analytics:</strong> To understand how visitors use our website, which pages are most popular, and how users navigate through the site</li>
                    <li><strong>User Preferences:</strong> To remember your preferences and settings to provide a personalised experience</li>
                    <li><strong>Security:</strong> To help protect against fraud and maintain website security</li>
                    <li><strong>Marketing (if applicable):</strong> To deliver relevant advertisements and measure the effectiveness of marketing campaigns</li>
                  </ul>
                </div>
              </div>

              {/* Types of Cookies */}
              <div>
                <h2 className="text-2xl font-display mb-6">3. Types of Cookies We Use</h2>
                <div className="divider" />
                <div className="space-y-6 text-[var(--color-gray-warm)] leading-relaxed">
                  <div>
                    <h3 className="text-xl font-display mb-3 text-[var(--color-charcoal)]">Essential Cookies (Strictly Necessary)</h3>
                    <p className="mb-3">
                      These cookies are necessary for the website to function and cannot be switched off. They are usually 
                      set in response to actions made by you, such as setting privacy preferences or filling in forms. These 
                      cookies do not store personally identifiable information.
                    </p>
                    <p className="mb-2"><strong>Purpose:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                      <li>Maintaining your session and security</li>
                      <li>Remembering your cookie preferences</li>
                      <li>Load balancing and website performance</li>
                      <li>Ensuring website functionality</li>
                    </ul>
                    <p><strong>Legal Basis:</strong> These cookies are necessary for the performance of a contract (providing the website service) and do not require consent under PECR.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-display mb-3 text-[var(--color-charcoal)]">Analytics and Performance Cookies</h3>
                    <p className="mb-3">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information 
                      anonymously. This helps us improve the website&apos;s functionality and user experience.
                    </p>
                    <p className="mb-2"><strong>Purpose:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                      <li>Analysing website traffic and usage patterns</li>
                      <li>Understanding which pages are most popular</li>
                      <li>Identifying technical issues and areas for improvement</li>
                      <li>Measuring the effectiveness of our content</li>
                    </ul>
                    <p className="mb-2"><strong>Examples (if used):</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                      <li>Google Analytics (if implemented) - collects anonymous usage statistics</li>
                      <li>Page view tracking</li>
                      <li>Bounce rate analysis</li>
                      <li>User journey tracking</li>
                    </ul>
                    <p><strong>Legal Basis:</strong> These cookies require your consent. We only use them if you have consented to analytics cookies.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-display mb-3 text-[var(--color-charcoal)]">Functional Cookies</h3>
                    <p className="mb-3">
                      These cookies enable the website to provide enhanced functionality and personalisation. They may be set 
                      by us or by third-party providers whose services we have added to our pages.
                    </p>
                    <p className="mb-2"><strong>Purpose:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                      <li>Remembering your preferences (language, region, font size)</li>
                      <li>Storing information you have entered (e.g., form data) to avoid re-entry</li>
                      <li>Providing enhanced features and personalisation</li>
                      <li>Remembering your login status (if applicable)</li>
                    </ul>
                    <p><strong>Legal Basis:</strong> These cookies require your consent, except where they are essential for providing a service you have requested.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-display mb-3 text-[var(--color-charcoal)]">Marketing and Advertising Cookies</h3>
                    <p className="mb-3">
                      These cookies may be set through our site by advertising partners to build a profile of your interests 
                      and show you relevant content on other sites. They do not store directly personal information but are 
                      based on uniquely identifying your browser and internet device.
                    </p>
                    <p className="mb-2"><strong>Current Status:</strong></p>
                    <p className="mb-3">
                      We currently do not use marketing or advertising cookies on our website. However, this section is included 
                      for transparency should we implement them in the future. If we do implement marketing cookies, we will 
                      update this policy and obtain your consent before using them.
                    </p>
                    <p className="mb-2"><strong>If Implemented, Purpose Would Include:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                      <li>Delivering relevant advertisements</li>
                      <li>Measuring the effectiveness of advertising campaigns</li>
                      <li>Building profiles of user interests</li>
                      <li>Retargeting visitors with relevant content</li>
                    </ul>
                    <p><strong>Legal Basis:</strong> Marketing cookies require your explicit consent.</p>
                  </div>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Info className="text-[var(--color-burgundy)]" size={24} />
                  <h2 className="text-2xl font-display">4. Third-Party Cookies</h2>
                </div>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    In addition to our own cookies, we may also use various third-party cookies to report usage statistics of 
                    the website, deliver advertisements (if applicable), and provide enhanced functionality. These third-party 
                    cookies are subject to the respective third-party privacy policies.
                  </p>
                  <p><strong>Examples of Third-Party Services (if used):</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Google Analytics:</strong> If we use Google Analytics, it uses cookies to collect information about how visitors use our website. This information is used to compile reports and help us improve the site. Google&apos;s privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--color-burgundy)] hover:underline">https://policies.google.com/privacy</a></li>
                    <li><strong>Social Media Platforms:</strong> If we embed social media content (e.g., Facebook, Instagram, LinkedIn), these platforms may set cookies. Their privacy policies govern the use of these cookies</li>
                    <li><strong>Content Delivery Networks:</strong> We may use content delivery networks that set cookies to optimise content delivery</li>
                  </ul>
                  <p className="mt-4">
                    We do not control third-party cookies. Please refer to the third-party privacy policies for information 
                    about how they use cookies and how you can manage them.
                  </p>
                </div>
              </div>

              {/* Cookie Duration */}
              <div>
                <h2 className="text-2xl font-display mb-6">5. Cookie Duration</h2>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>Cookies can be either:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser. These are typically used for session management and security</li>
                    <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them. These are used to remember your preferences and settings</li>
                  </ul>
                  <p className="mt-4">
                    The duration of persistent cookies varies depending on their purpose:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Essential Cookies:</strong> Typically session-based or expire when you close your browser</li>
                    <li><strong>Preference Cookies:</strong> May last for several months or until you clear them</li>
                    <li><strong>Analytics Cookies:</strong> Typically last for 1-2 years, depending on the analytics service</li>
                    <li><strong>Marketing Cookies:</strong> If used, typically last for 30-90 days, depending on the advertising platform</li>
                  </ul>
                  <p className="mt-4">
                    Each cookie will have a specific expiration date set when it is created. You can see the expiration dates 
                    of cookies stored on your device through your browser settings.
                  </p>
                </div>
              </div>

              {/* Managing Cookies */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="text-[var(--color-burgundy)]" size={24} />
                  <h2 className="text-2xl font-display">6. Managing Your Cookie Preferences</h2>
                </div>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you 
                    can usually modify your browser settings to decline cookies if you prefer. You can also delete cookies that have 
                    already been set on your device.
                  </p>
                  <p className="mt-4">
                    <strong>Cookie Consent Banner:</strong> When you first visit our website, you may be presented with a cookie 
                    consent banner. You can choose to accept all cookies, reject non-essential cookies, or customise your preferences. 
                    Your preferences will be remembered for future visits.
                  </p>
                  <p className="mt-4">
                    <strong>Browser Settings:</strong> You can control cookies through your browser settings. Here are links to cookie 
                    management guides for popular browsers:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Google Chrome:</strong> <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[var(--color-burgundy)] hover:underline">Manage cookies in Chrome</a></li>
                    <li><strong>Mozilla Firefox:</strong> <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-[var(--color-burgundy)] hover:underline">Manage cookies in Firefox</a></li>
                    <li><strong>Safari:</strong> <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[var(--color-burgundy)] hover:underline">Manage cookies in Safari</a></li>
                    <li><strong>Microsoft Edge:</strong> <a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-[var(--color-burgundy)] hover:underline">Manage cookies in Edge</a></li>
                    <li><strong>Opera:</strong> <a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer" className="text-[var(--color-burgundy)] hover:underline">Manage cookies in Opera</a></li>
                  </ul>
                  <p className="mt-4">
                    <strong>Mobile Devices:</strong> You can also manage cookies on mobile devices through your device settings or 
                    browser app settings.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                    <p className="text-[var(--color-charcoal)]">
                      <strong>Important:</strong> Please note that disabling cookies may affect the functionality of our website 
                      and your ability to access certain features. Essential cookies are necessary for the website to function, 
                      so disabling all cookies may prevent you from using some parts of the site.
                    </p>
                  </div>
                </div>
              </div>

              {/* Do Not Track */}
              <div>
                <h2 className="text-2xl font-display mb-6">7. Do Not Track Signals</h2>
                <div className="divider" />
                <p className="text-[var(--color-gray-warm)] leading-relaxed">
                  Some browsers include a &quot;Do Not Track&quot; (DNT) feature that signals to websites you visit that you do not want 
                  to have your online activity tracked. Currently, there is no standard for how DNT signals should be interpreted. 
                  As a result, our website does not currently respond to DNT signals. However, you can control cookies through your 
                  browser settings as described above.
                </p>
              </div>

              {/* Cookie Consent */}
              <div>
                <h2 className="text-2xl font-display mb-6">8. Cookie Consent</h2>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    Under UK law (PECR), we are required to obtain your consent before placing non-essential cookies on your device. 
                    When you first visit our website, you may be presented with a cookie consent banner that allows you to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Accept all cookies</li>
                    <li>Reject non-essential cookies</li>
                    <li>Customise your cookie preferences by category</li>
                  </ul>
                  <p className="mt-4">
                    By clicking &quot;Accept&quot; or continuing to use our website, you consent to our use of cookies as described 
                    in this policy. You can withdraw your consent at any time by adjusting your browser settings or contacting us. 
                    Withdrawal of consent does not affect the lawfulness of processing before the withdrawal.
                  </p>
                  <p>
                    Essential cookies do not require consent as they are necessary for the website to function. However, you can 
                    still block them through your browser settings, though this may affect website functionality.
                  </p>
                </div>
              </div>

              {/* Updates to Policy */}
              <div>
                <h2 className="text-2xl font-display mb-6">9. Updates to This Cookie Policy</h2>
                <div className="divider" />
                <p className="text-[var(--color-gray-warm)] leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices, legal requirements, 
                  or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting 
                  the updated policy on this page and updating the &quot;Last Updated&quot; date. If we make significant changes, 
                  we may also notify you via email or through a notice on our website.
                </p>
              </div>

              {/* More Information */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <BarChart3 className="text-[var(--color-burgundy)]" size={24} />
                  <h2 className="text-2xl font-display">10. More Information About Cookies</h2>
                </div>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    For more information about cookies, including how to see what cookies have been set and how to manage and 
                    delete them, visit:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[var(--color-burgundy)] hover:underline">www.allaboutcookies.org</a> - Comprehensive information about cookies</li>
                    <li><a href="https://www.youronlinechoices.com/uk" target="_blank" rel="noopener noreferrer" className="text-[var(--color-burgundy)] hover:underline">www.youronlinechoices.com/uk</a> - Information about online behavioural advertising and privacy</li>
                    <li><a href="https://ico.org.uk/for-the-public/online/cookies" target="_blank" rel="noopener noreferrer" className="text-[var(--color-burgundy)] hover:underline">ICO Cookie Guidance</a> - Information Commissioner&apos;s Office guidance on cookies</li>
                  </ul>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="text-[var(--color-burgundy)]" size={24} />
                  <h2 className="text-2xl font-display">11. Contact Us</h2>
                </div>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  <div className="bg-[var(--color-cream)] p-6 rounded-lg border border-[var(--color-off-white)]">
                    <p className="font-semibold text-[var(--color-charcoal)] mb-3 text-lg">Tillet & Saunders</p>
                    <div className="space-y-2">
                      <p><strong>Email:</strong> <a href="mailto:info@tilletandsaunders.co.uk" className="text-[var(--color-burgundy)] hover:underline">info@tilletandsaunders.co.uk</a></p>
                      <p><strong>Phone:</strong> <a href="tel:+441234567890" className="text-[var(--color-burgundy)] hover:underline">01234 567 890</a></p>
                      <p><strong>Address:</strong> 123 Builder&apos;s Lane, London, SW1A 1AA</p>
                    </div>
                  </div>
                  <p className="mt-4">
                    If you have concerns about how we handle cookies or your personal data, you also have the right to lodge 
                    a complaint with the Information Commissioner&apos;s Office (ICO):
                  </p>
                  <div className="bg-[var(--color-cream)] p-4 rounded-lg border border-[var(--color-off-white)] mt-2">
                    <p><strong>Information Commissioner&apos;s Office</strong></p>
                    <p>Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</p>
                    <p>Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[var(--color-burgundy)] hover:underline">www.ico.org.uk</a></p>
                    <p>Phone: 0303 123 1113</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
