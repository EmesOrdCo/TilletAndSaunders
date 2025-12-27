'use client';

import { motion } from 'framer-motion';
import { FileText, Scale, AlertCircle, CheckCircle, Hammer, Receipt, Shield, Gavel } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80)',
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
                Terms of <em>Service</em>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed">
                Please read these terms carefully before using our services or website. These terms govern your relationship with Tillet & Saunders.
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
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Tillet & Saunders website 
                (the &quot;Website&quot;) and our building and construction services (the &quot;Services&quot;). 
                By accessing or using our Website or Services, you agree to be bound by these Terms.
              </p>
              <p className="text-[var(--color-gray-warm)] leading-relaxed">
                These Terms should be read in conjunction with our{' '}
                <a href="/privacy-policy" className="text-[var(--color-burgundy)] hover:underline font-semibold">Privacy Policy</a>, 
                which explains how we collect, use, and protect your personal information. If you do not agree to these Terms, 
                please do not use our Website or Services.
              </p>
            </div>

            <div className="space-y-12">
              {/* Acceptance of Terms */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="text-[var(--color-burgundy)]" size={24} />
                  <h2 className="text-2xl font-display">1. Acceptance of Terms</h2>
                </div>
                <div className="divider" />
                <p className="text-[var(--color-gray-warm)] leading-relaxed">
                  By accessing or using the Tillet & Saunders website, you acknowledge that you have read, understood, 
                  and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, 
                  please do not use our website or services. These Terms constitute a legally binding agreement between 
                  you and Tillet & Saunders.
                </p>
              </div>

              {/* About Us */}
              <div>
                <h2 className="text-2xl font-display mb-6">2. About Tillet & Saunders</h2>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    Tillet & Saunders is a building and construction company based in London, serving London and the South East. 
                    We provide professional building services including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Kitchen fitting and installation</li>
                    <li>Home extensions and structural work</li>
                    <li>Flooring installation and repair</li>
                    <li>Plastering and rendering</li>
                    <li>Bathroom renovations</li>
                    <li>Roofing services</li>
                    <li>General building and construction services</li>
                  </ul>
                  <p>
                    We are members of the Federation of Master Builders, TrustMark registered, and Which? Trusted Traders. 
                    We maintain appropriate insurance coverage and comply with all relevant building regulations and health 
                    and safety requirements.
                  </p>
                </div>
              </div>

              {/* Use of Website */}
              <div>
                <h2 className="text-2xl font-display mb-6">3. Use of Website</h2>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Use the website in any way that violates any applicable law or regulation</li>
                    <li>Transmit any malicious code, viruses, worms, or harmful materials</li>
                    <li>Attempt to gain unauthorised access to any portion of the website, servers, or networks</li>
                    <li>Interfere with or disrupt the website or servers connected to the website</li>
                    <li>Use automated systems (bots, scrapers) to access the website without our express written permission</li>
                    <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of the website without our express written permission</li>
                    <li>Use the website to transmit unsolicited commercial communications or spam</li>
                    <li>Impersonate any person or entity or falsely state or misrepresent your affiliation with any person or entity</li>
                  </ul>
                  <p className="mt-4">
                    We reserve the right to terminate or suspend your access to the website immediately, without prior notice, 
                    if you violate these Terms or engage in any conduct that we consider harmful to our business or other users.
                  </p>
                </div>
              </div>

              {/* Quotes, Estimates, and Contracts */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="text-[var(--color-burgundy)]" size={24} />
                  <h2 className="text-2xl font-display">4. Quotes, Estimates, and Contracts</h2>
                </div>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    All quotes and estimates provided by Tillet & Saunders are subject to the following terms:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Validity Period:</strong> Quotes and estimates are valid for the period specified in the quote (typically 30 days), unless otherwise stated. After this period, prices may be subject to change</li>
                    <li><strong>Estimates vs. Quotes:</strong> Estimates are approximate and may vary. Quotes are more detailed and fixed-price, but may still be subject to change if project requirements change</li>
                    <li><strong>Project Scope:</strong> All quotes are based on the information provided at the time of quotation. Additional work, changes to specifications, or unforeseen circumstances may result in additional charges</li>
                    <li><strong>Site Surveys:</strong> We may require a site survey before providing a final quote. Site surveys may be chargeable if the project does not proceed</li>
                    <li><strong>Written Contracts:</strong> All work must be confirmed in a written contract signed by both parties before work commences. The contract will specify the scope of work, pricing, payment terms, timelines, and other relevant terms</li>
                    <li><strong>Variations:</strong> Any changes to the agreed scope of work must be agreed in writing and may result in additional charges or time extensions</li>
                    <li><strong>Planning and Permissions:</strong> It is your responsibility to obtain all necessary planning permissions, building regulations approval, and other consents. We can assist with applications but cannot guarantee approval</li>
                  </ul>
                </div>
              </div>

              {/* Payment Terms */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Receipt className="text-[var(--color-burgundy)]" size={24} />
                  <h2 className="text-2xl font-display">5. Payment Terms</h2>
                </div>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    Payment terms will be specified in your individual contract. Our standard payment terms are as follows:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Deposits:</strong> A deposit may be required before work commences, typically 20-30% of the total contract value, depending on the project size and materials required</li>
                    <li><strong>Stage Payments:</strong> For larger projects, payments may be required at specified stages (e.g., upon completion of foundations, first fix, second fix). Stage payment amounts and milestones will be detailed in your contract</li>
                    <li><strong>Final Payment:</strong> Final payment is due upon completion of all work, satisfactory inspection, and resolution of any snagging items. We will provide a completion certificate or similar documentation</li>
                    <li><strong>Payment Methods:</strong> We accept payment by bank transfer, cheque, or other agreed methods. Payment terms are typically 7-14 days from invoice date</li>
                    <li><strong>Late Payment:</strong> Late payment may incur interest charges at a rate of 8% per annum above the Bank of England base rate, in accordance with the Late Payment of Commercial Debts (Interest) Act 1998. We also reserve the right to suspend work if payments are not made as agreed</li>
                    <li><strong>Disputed Invoices:</strong> If you dispute an invoice, you must notify us in writing within 7 days of receipt. We will work with you to resolve any disputes promptly</li>
                    <li><strong>Retention:</strong> For certain projects, a retention amount (typically 2.5-5%) may be held until the end of the defects liability period</li>
                  </ul>
                </div>
              </div>

              {/* Warranties and Guarantees */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="text-[var(--color-burgundy)]" size={24} />
                  <h2 className="text-2xl font-display">6. Warranties and Guarantees</h2>
                </div>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    Tillet & Saunders provides the following warranties and guarantees:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Workmanship Guarantee:</strong> We guarantee our workmanship for a period of 12 months from the date of completion, unless otherwise specified in your contract. This covers defects in workmanship but not wear and tear, damage caused by misuse, or issues arising from factors beyond our control</li>
                    <li><strong>Materials:</strong> Materials are covered by manufacturer warranties where applicable. We will pass on these warranties to you and assist with warranty claims where possible</li>
                    <li><strong>Structural Work:</strong> Structural work may be covered by longer warranty periods (typically 6-10 years) as required by building regulations and insurance requirements</li>
                    <li><strong>Warranty Exclusions:</strong> Warranties do not cover damage caused by misuse, neglect, unauthorised modifications, natural disasters, or normal wear and tear</li>
                    <li><strong>Warranty Claims:</strong> Warranty claims must be made in writing within the warranty period. We will inspect reported issues and, if covered by warranty, remedy them at no additional cost</li>
                    <li><strong>Insurance:</strong> We maintain public liability insurance and employer&apos;s liability insurance as required by law. Details are available upon request</li>
                  </ul>
                </div>
              </div>

              {/* Health and Safety */}
              <div>
                <h2 className="text-2xl font-display mb-6">7. Health and Safety</h2>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    Health and safety is of paramount importance. Both parties have responsibilities:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Our Responsibilities:</strong> We will comply with all health and safety regulations, provide appropriate safety equipment, conduct risk assessments, and ensure our team is properly trained and qualified</li>
                    <li><strong>Your Responsibilities:</strong> You must provide a safe working environment, inform us of any hazards, ensure adequate access to the work area, and comply with any reasonable safety instructions we provide</li>
                    <li><strong>Site Access:</strong> You must ensure safe and adequate access to the work area. We reserve the right to suspend work if we consider the site unsafe</li>
                    <li><strong>Children and Pets:</strong> You must ensure children and pets are kept away from the work area for their safety</li>
                    <li><strong>Accidents:</strong> Any accidents or near-misses must be reported immediately to both parties</li>
                  </ul>
                </div>
              </div>

              {/* Delays and Extensions */}
              <div>
                <h2 className="text-2xl font-display mb-6">8. Delays and Time Extensions</h2>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    While we strive to complete work within agreed timelines, delays may occur due to various factors:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Unforeseen Circumstances:</strong> Delays due to adverse weather, material shortages, supplier delays, or other circumstances beyond our reasonable control may result in time extensions</li>
                    <li><strong>Client Delays:</strong> Delays caused by client decisions, late provision of information, or changes to requirements may result in time extensions and additional costs</li>
                    <li><strong>Planning and Permissions:</strong> Delays in obtaining planning permission or building regulations approval are not our responsibility</li>
                    <li><strong>Communication:</strong> We will keep you informed of any delays and work with you to minimise disruption</li>
                    <li><strong>Liquidated Damages:</strong> If specified in your contract, liquidated damages may apply for delays caused by us, subject to the terms of the contract</li>
                  </ul>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="text-[var(--color-burgundy)]" size={24} />
                  <h2 className="text-2xl font-display">9. Limitation of Liability</h2>
                </div>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    To the maximum extent permitted by law:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Total Liability:</strong> Our total liability to you for any claim arising from our services shall not exceed the total contract value, unless otherwise required by law</li>
                    <li><strong>Indirect Losses:</strong> We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, loss of business, loss of data, or loss of use</li>
                    <li><strong>Consequential Loss:</strong> We shall not be liable for any consequential losses, such as alternative accommodation costs, unless specifically agreed in writing</li>
                    <li><strong>Third-Party Claims:</strong> Our liability is limited to direct losses. We are not responsible for claims by third parties unless caused by our negligence</li>
                    <li><strong>Insurance Coverage:</strong> Our liability is covered by our insurance policies. Details are available upon request</li>
                  </ul>
                  <p className="mt-4">
                    <strong>Important:</strong> Nothing in these Terms excludes or limits our liability for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Death or personal injury caused by our negligence</li>
                    <li>Fraud or fraudulent misrepresentation</li>
                    <li>Any other liability that cannot be excluded or limited by law</li>
                  </ul>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-display mb-6">10. Intellectual Property</h2>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    All content on this website, including text, graphics, logos, images, photographs, designs, and software, 
                    is the property of Tillet & Saunders or its licensors and is protected by copyright, trademark, and other 
                    intellectual property laws.
                  </p>
                  <p>
                    You may not reproduce, distribute, modify, create derivative works, publicly display, or commercially exploit 
                    any content from this website without our express written permission. You may view and download content for 
                    personal, non-commercial use only.
                  </p>
                  <p>
                    <strong>Project Designs and Drawings:</strong> Any designs, drawings, or specifications we create remain our 
                    intellectual property unless otherwise agreed in writing. You may use them for the specific project but may not 
                    reproduce or use them for other projects without our permission.
                  </p>
                </div>
              </div>

              {/* Disclaimers */}
              <div>
                <h2 className="text-2xl font-display mb-6">11. Disclaimers</h2>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    The information on this website is provided &quot;as is&quot; without warranties of any kind, either express or implied. 
                    We do not warrant that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>The website will be available at all times or free from errors, interruptions, or technical issues</li>
                    <li>The information on the website is accurate, complete, or current</li>
                    <li>The website is free from viruses or other harmful components</li>
                    <li>The website will meet your requirements or expectations</li>
                  </ul>
                  <p className="mt-4">
                    We reserve the right to modify, suspend, or discontinue the website or any part of it at any time without notice. 
                    We are not liable for any loss or damage resulting from your use of or inability to use the website.
                  </p>
                </div>
              </div>

              {/* Indemnification */}
              <div>
                <h2 className="text-2xl font-display mb-6">12. Indemnification</h2>
                <div className="divider" />
                <p className="text-[var(--color-gray-warm)] leading-relaxed">
                  You agree to indemnify and hold harmless Tillet & Saunders, its officers, employees, agents, and subcontractors 
                  from any claims, damages, losses, liabilities, costs, and expenses (including legal fees) arising from:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>Your use of the website or services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of another party</li>
                  <li>Your failure to obtain necessary permissions, consents, or approvals</li>
                  <li>Your provision of inaccurate or incomplete information</li>
                </ul>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-display mb-6">13. Termination</h2>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    <strong>Website Access:</strong> We reserve the right to terminate or suspend your access to the website at any time, 
                    without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the website 
                    will immediately cease.
                  </p>
                  <p>
                    <strong>Service Contracts:</strong> Either party may terminate a service contract in accordance with the terms of that 
                    contract. Termination may be subject to payment for work completed and materials ordered. We reserve the right to 
                    suspend work if payments are not made as agreed or if we consider the site unsafe.
                  </p>
                </div>
              </div>

              {/* Governing Law */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Gavel className="text-[var(--color-burgundy)]" size={24} />
                  <h2 className="text-2xl font-display">14. Governing Law and Jurisdiction</h2>
                </div>
                <div className="divider" />
                <p className="text-[var(--color-gray-warm)] leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes 
                  arising from these Terms, your use of our website, or our services shall be subject to the exclusive jurisdiction 
                  of the courts of England and Wales. If you are a consumer, you may also have rights under the laws of your country 
                  of residence, which these Terms do not affect.
                </p>
              </div>

              {/* Dispute Resolution */}
              <div>
                <h2 className="text-2xl font-display mb-6">15. Dispute Resolution</h2>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    We are committed to resolving disputes fairly and promptly:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Direct Communication:</strong> In the first instance, please contact us directly to discuss any concerns or disputes. We will work with you to find a resolution</li>
                    <li><strong>Mediation:</strong> If we cannot resolve a dispute directly, we may agree to mediation through an independent mediator</li>
                    <li><strong>Alternative Dispute Resolution:</strong> As TrustMark registered builders, we are committed to alternative dispute resolution processes</li>
                    <li><strong>Legal Action:</strong> If disputes cannot be resolved through the above methods, either party may pursue legal action in accordance with the governing law</li>
                  </ul>
                </div>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-2xl font-display mb-6">16. Changes to Terms</h2>
                <div className="divider" />
                <p className="text-[var(--color-gray-warm)] leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting 
                  the updated Terms on this page and updating the &quot;Last Updated&quot; date. Your continued use of the website 
                  or services after changes are posted constitutes acceptance of the modified Terms. If you do not agree to the 
                  modified Terms, you should stop using our website and services.
                </p>
              </div>

              {/* Severability */}
              <div>
                <h2 className="text-2xl font-display mb-6">17. Severability</h2>
                <div className="divider" />
                <p className="text-[var(--color-gray-warm)] leading-relaxed">
                  If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent 
                  jurisdiction, the remaining provisions shall continue in full force and effect. The invalid provision shall 
                  be replaced with a valid provision that most closely reflects the intent of the original provision.
                </p>
              </div>

              {/* Entire Agreement */}
              <div>
                <h2 className="text-2xl font-display mb-6">18. Entire Agreement</h2>
                <div className="divider" />
                <p className="text-[var(--color-gray-warm)] leading-relaxed">
                  These Terms, together with our Privacy Policy and any specific contract for services, constitute the entire 
                  agreement between you and Tillet & Saunders regarding your use of our website and services. These Terms 
                  supersede all prior agreements, understandings, and communications, whether written or oral, relating to the 
                  subject matter hereof.
                </p>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-display mb-6">19. Contact Information</h2>
                <div className="divider" />
                <div className="space-y-4 text-[var(--color-gray-warm)] leading-relaxed">
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-[var(--color-cream)] p-6 rounded-lg border border-[var(--color-off-white)]">
                    <p className="font-semibold text-[var(--color-charcoal)] mb-3 text-lg">Tillet & Saunders</p>
                    <div className="space-y-2">
                      <p><strong>Email:</strong> <a href="mailto:info@tilletandsaunders.co.uk" className="text-[var(--color-burgundy)] hover:underline">info@tilletandsaunders.co.uk</a></p>
                      <p><strong>Phone:</strong> <a href="tel:+441234567890" className="text-[var(--color-burgundy)] hover:underline">01234 567 890</a></p>
                      <p><strong>Address:</strong> 123 Builder&apos;s Lane, London, SW1A 1AA</p>
                      <p><strong>Business Hours:</strong> Monday to Friday: 8:00 - 18:00, Saturday: 9:00 - 14:00</p>
                    </div>
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
