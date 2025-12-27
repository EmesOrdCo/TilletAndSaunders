'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Building2, Users, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80)',
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
                Privacy <em>Policy</em>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information in accordance with UK data protection laws.
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
                Tillet & Saunders (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy and personal data. 
                This Privacy Policy explains how we collect, use, process, disclose, and safeguard your information when you visit 
                our website, contact us, or engage with our building and construction services.
              </p>
              <p className="text-[var(--color-gray-warm)] leading-relaxed">
                This policy is written in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. 
                By using our website or services, you consent to the data practices described in this policy.
              </p>
            </div>

            <div className="space-y-12">
              {/* Information We Collect */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="text-[var(--color-burgundy)]" size={24} />
                  <h2 className="text-2xl font-display">1. Information We Collect</h2>
                </div>
                <div className="divider" />
                <div className="space-y-6 text-[var(--color-gray-warm)] leading-relaxed">
                  <div>
                    <h3 className="text-xl font-display mb-3 text-[var(--color-charcoal)]">Personal Information You Provide</h3>
                    <p className="mb-3">
                      We collect personal information that you voluntarily provide to us in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                      <li><strong>Quote Requests and Consultations:</strong> When you request a quote, consultation, or site visit, we collect your name, email address, phone number, postal address, and details about your project requirements</li>
                      <li><strong>Contact Forms:</strong> Information submitted through our website contact forms, including your name, email, phone number, and message content</li>
                      <li><strong>Email Communications:</strong> When you email us directly, we collect your email address and any personal information contained in your message</li>
                      <li><strong>Phone Communications:</strong> When you call us, we may collect your phone number and any information you provide during the conversation</li>
                      <li><strong>Service Engagement:</strong> When you engage our services, we collect information necessary to perform the work, including property details, project specifications, and payment information</li>
                      <li><strong>Newsletter Subscriptions:</strong> If you subscribe to our newsletter or marketing communications, we collect your email address and name</li>
                    </ul>
                    <p>
                      This information may include: full name, email address, telephone number, postal address, property address (for project work), 
                      project details and specifications, budget information, preferred contact methods, and any other information you choose to provide.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-display mb-3 text-[var(--color-charcoal)]">Information Collected Automatically</h3>
                    <p className="mb-3">
                      When you visit our website, we automatically collect certain technical information about your device and browsing behaviour:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Device Information:</strong> IP address, browser type and version, operating system, device type (mobile, tablet, desktop)</li>
                      <li><strong>Usage Data:</strong> Pages visited, time spent on pages, click patterns, referring website addresses, date and time of visits</li>
                      <li><strong>Location Data:</strong> General geographic location based on IP address (city/country level, not precise location)</li>
                      <li><strong>Cookies and Tracking Technologies:</strong> Information collected through cookies, web beacons, and similar technologies (see our Cookie Policy for details)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-display mb-3 text-[var(--color-charcoal)]">Information from Third Parties</h3>
                    <p>
                      We may receive information about you from third parties in limited circumstances, such as when you are referred to us by another 
                      business partner, or when we work with subcontractors or suppliers who may share relevant project information with us.
                    </p>
                  </div>
                </div>
              </div>

              {/* Legal Basis for Processing */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="text-[var(--color-burgundy)]" size={24} />
                  <h2 className="text-2xl font-display">2. Legal Basis for Processing Your Data</h2>
                </div>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    Under UK GDPR, we process your personal data based on the following legal grounds:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Contractual Necessity:</strong> To perform our contract with you or take steps at your request before entering into a contract (e.g., providing quotes, delivering building services)</li>
                    <li><strong>Legitimate Interests:</strong> For our legitimate business interests, such as improving our services, website functionality, marketing our services (where you haven&apos;t opted out), and preventing fraud</li>
                    <li><strong>Consent:</strong> Where you have given clear consent for us to process your data for specific purposes (e.g., marketing communications, newsletter subscriptions)</li>
                    <li><strong>Legal Obligations:</strong> To comply with legal requirements, such as tax obligations, health and safety regulations, and building regulations</li>
                    <li><strong>Vital Interests:</strong> To protect your vital interests or those of another person (e.g., in emergency situations)</li>
                  </ul>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="text-[var(--color-burgundy)]" size={24} />
                  <h2 className="text-2xl font-display">3. How We Use Your Information</h2>
                </div>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>We use the information we collect for the following purposes:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Service Delivery:</strong> To provide, maintain, and improve our building and construction services, including project planning, execution, and completion</li>
                    <li><strong>Communication:</strong> To respond to your inquiries, provide quotes and estimates, send project updates, and communicate about our services</li>
                    <li><strong>Customer Support:</strong> To provide customer service, address complaints, and resolve issues related to our services</li>
                    <li><strong>Contract Management:</strong> To manage contracts, process payments, issue invoices, and maintain business records</li>
                    <li><strong>Legal Compliance:</strong> To comply with legal obligations, including building regulations, health and safety requirements, tax obligations, and insurance requirements</li>
                    <li><strong>Website Improvement:</strong> To analyse website usage, improve website functionality, and enhance user experience</li>
                    <li><strong>Marketing:</strong> To send you marketing communications about our services, special offers, and company news (only with your consent or where we have a legitimate interest)</li>
                    <li><strong>Security:</strong> To detect, prevent, and address technical issues, security threats, and fraudulent activity</li>
                    <li><strong>Business Operations:</strong> To manage our business operations, including supplier relationships, subcontractor coordination, and quality assurance</li>
                  </ul>
                </div>
              </div>

              {/* Information Sharing */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="text-[var(--color-burgundy)]" size={24} />
                  <h2 className="text-2xl font-display">4. Information Sharing and Disclosure</h2>
                </div>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    We do not sell, trade, or rent your personal information to third parties for their marketing purposes. 
                    We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Service Providers and Contractors:</strong> We may share information with trusted third-party service providers who assist us in operating our business, including website hosting, email services, payment processing, accounting software, and cloud storage providers. These providers are contractually obligated to protect your information and use it only for the purposes we specify</li>
                    <li><strong>Subcontractors and Suppliers:</strong> When necessary for project delivery, we may share relevant project information with subcontractors, suppliers, and tradespeople working on your project</li>
                    <li><strong>Professional Advisors:</strong> We may share information with our professional advisors, including accountants, solicitors, and insurance brokers, as necessary for business operations</li>
                    <li><strong>Regulatory Authorities:</strong> We may disclose information to regulatory bodies, local authorities, building control officers, and other government agencies as required by law or building regulations</li>
                    <li><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or in response to valid requests by public authorities (e.g., police, HMRC)</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, sale of assets, or business transfer, your information may be transferred to the new owner, subject to the same privacy protections</li>
                    <li><strong>With Your Consent:</strong> We may share your information with third parties when you have given explicit consent for us to do so</li>
                    <li><strong>Emergency Situations:</strong> We may share information in emergency situations to protect your vital interests or those of others</li>
                  </ul>
                  <p className="mt-4">
                    All third parties with whom we share your information are required to maintain appropriate security measures 
                    and use your information only for the purposes we specify, in accordance with applicable data protection laws.
                  </p>
                </div>
              </div>

              {/* Data Security */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="text-[var(--color-burgundy)]" size={24} />
                  <h2 className="text-2xl font-display">5. Data Security</h2>
                </div>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    We implement appropriate technical and organisational security measures to protect your personal information 
                    against unauthorised access, alteration, disclosure, or destruction. Our security measures include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Encryption of data in transit using SSL/TLS protocols</li>
                    <li>Secure storage of data with access controls and authentication</li>
                    <li>Regular security assessments and updates to our systems</li>
                    <li>Staff training on data protection and security best practices</li>
                    <li>Physical security measures for our premises and equipment</li>
                    <li>Regular backups of data with secure storage</li>
                    <li>Limited access to personal data on a need-to-know basis</li>
                  </ul>
                  <p className="mt-4">
                    However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive 
                    to use commercially acceptable means to protect your information, we cannot guarantee absolute security. 
                    If we become aware of a data breach that may affect your personal information, we will notify you and the 
                    relevant supervisory authority in accordance with UK GDPR requirements.
                  </p>
                </div>
              </div>

              {/* Your Rights */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Users className="text-[var(--color-burgundy)]" size={24} />
                  <h2 className="text-2xl font-display">6. Your Data Protection Rights</h2>
                </div>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    Under UK GDPR and the Data Protection Act 2018, you have the following rights regarding your personal data:
                  </p>
                  <ul className="list-disc list-inside space-y-3 ml-4">
                    <li>
                      <strong>Right of Access:</strong> You have the right to request copies of your personal data that we hold. 
                      This is commonly known as a &quot;data subject access request&quot;. We will provide this information within one month 
                      of your request, free of charge (unless the request is manifestly unfounded or excessive).
                    </li>
                    <li>
                      <strong>Right to Rectification:</strong> You have the right to request that we correct any inaccurate or incomplete 
                      personal data we hold about you. We will update your information promptly upon verification.
                    </li>
                    <li>
                      <strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> You have the right to request deletion of your 
                      personal data in certain circumstances, such as when the data is no longer necessary for the original purpose, 
                      you withdraw consent, or the data has been unlawfully processed. However, we may need to retain certain information 
                      for legal or contractual reasons (e.g., tax records, warranty information).
                    </li>
                    <li>
                      <strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your 
                      personal data in certain circumstances, such as when you contest the accuracy of the data or object to processing.
                    </li>
                    <li>
                      <strong>Right to Data Portability:</strong> You have the right to receive your personal data in a structured, commonly 
                      used, and machine-readable format, and to have that data transmitted to another data controller where technically feasible.
                    </li>
                    <li>
                      <strong>Right to Object:</strong> You have the right to object to processing of your personal data for direct marketing 
                      purposes or where we process your data based on legitimate interests. We will stop processing unless we can demonstrate 
                      compelling legitimate grounds for the processing.
                    </li>
                    <li>
                      <strong>Right to Withdraw Consent:</strong> Where processing is based on your consent, you have the right to withdraw 
                      that consent at any time. Withdrawal of consent does not affect the lawfulness of processing before the withdrawal.
                    </li>
                    <li>
                      <strong>Rights Related to Automated Decision-Making:</strong> You have rights regarding automated decision-making and 
                      profiling, though we do not currently use automated decision-making processes that produce legal or similarly significant effects.
                    </li>
                  </ul>
                  <p className="mt-4">
                    To exercise any of these rights, please contact us using the information provided in the &quot;Contact Us&quot; section below. 
                    We will respond to your request within one month. If you are not satisfied with our response, you have the right to lodge 
                    a complaint with the Information Commissioner&apos;s Office (ICO), the UK&apos;s data protection supervisory authority.
                  </p>
                </div>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-2xl font-display mb-6">7. Data Retention</h2>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    We will retain your personal information only for as long as necessary to fulfil the purposes outlined in this 
                    Privacy Policy, unless a longer retention period is required or permitted by law. Our retention periods are based on:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Legal Requirements:</strong> We retain financial and tax records for at least 6 years as required by HMRC</li>
                    <li><strong>Contractual Obligations:</strong> We retain contract and project information for the duration of warranties and guarantees (typically 12 months to 10 years depending on the work)</li>
                    <li><strong>Business Needs:</strong> We retain customer contact information and project history for legitimate business purposes, such as providing references and maintaining relationships</li>
                    <li><strong>Consent:</strong> We retain marketing contact information until you withdraw consent or unsubscribe</li>
                    <li><strong>Legal Claims:</strong> We may retain information longer if necessary for the establishment, exercise, or defence of legal claims</li>
                  </ul>
                  <p className="mt-4">
                    When we no longer need your information, we will securely delete or anonymise it in accordance with our data 
                    retention schedule and applicable legal requirements.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-2xl font-display mb-6">8. Cookies and Tracking Technologies</h2>
                <div className="divider" />
                <p className="text-[var(--color-gray-warm)] leading-relaxed mb-4">
                  Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyse website usage, 
                  and improve our services. For detailed information about the cookies we use, their purposes, and how to manage them, 
                  please refer to our{' '}
                  <a href="/cookie-policy" className="text-[var(--color-burgundy)] hover:underline font-semibold">Cookie Policy</a>.
                </p>
              </div>

              {/* International Transfers */}
              <div>
                <h2 className="text-2xl font-display mb-6">9. International Data Transfers</h2>
                <div className="divider" />
                <p className="text-[var(--color-gray-warm)] leading-relaxed">
                  Your personal data is primarily processed and stored within the United Kingdom and the European Economic Area (EEA). 
                  If we need to transfer your data outside the UK or EEA, we will ensure appropriate safeguards are in place, such as 
                  standard contractual clauses approved by the ICO, or transfers to countries with adequacy decisions. We will only 
                  transfer your data internationally when necessary for service delivery or with your explicit consent.
                </p>
              </div>

              {/* Third-Party Links */}
              <div>
                <h2 className="text-2xl font-display mb-6">10. Third-Party Links</h2>
                <div className="divider" />
                <p className="text-[var(--color-gray-warm)] leading-relaxed">
                  Our website may contain links to third-party websites, such as accreditation bodies (Federation of Master Builders, 
                  TrustMark), social media platforms, or partner organisations. We are not responsible for the privacy practices, 
                  content, or security of these external sites. We encourage you to review the privacy policies of any third-party 
                  sites you visit. This Privacy Policy applies only to information collected by Tillet & Saunders.
                </p>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-2xl font-display mb-6">11. Children&apos;s Privacy</h2>
                <div className="divider" />
                <p className="text-[var(--color-gray-warm)] leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
                  information from children. If you are a parent or guardian and believe that your child has provided us with 
                  personal information, please contact us immediately. If we become aware that we have collected personal information 
                  from a child without parental consent, we will take steps to delete that information promptly.
                </p>
              </div>

              {/* Changes to Policy */}
              <div>
                <h2 className="text-2xl font-display mb-6">12. Changes to This Privacy Policy</h2>
                <div className="divider" />
                <p className="text-[var(--color-gray-warm)] leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, 
                  or for other operational, legal, or regulatory reasons. We will notify you of any material changes by:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>Posting the updated Privacy Policy on this page</li>
                  <li>Updating the &quot;Last Updated&quot; date at the top of this policy</li>
                  <li>Sending you an email notification (if we have your email address and the changes are significant)</li>
                </ul>
                <p className="mt-4">
                  You are advised to review this Privacy Policy periodically for any changes. Your continued use of our website 
                  or services after changes are posted constitutes acceptance of the updated policy.
                </p>
              </div>

              {/* Contact Us */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="text-[var(--color-burgundy)]" size={24} />
                  <h2 className="text-2xl font-display">13. Contact Us and Data Protection Officer</h2>
                </div>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    If you have any questions, concerns, or requests regarding this Privacy Policy, our data practices, or wish 
                    to exercise your data protection rights, please contact us:
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
                    <strong>Supervisory Authority:</strong> If you are not satisfied with our response to your data protection 
                    concerns, you have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO):
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
