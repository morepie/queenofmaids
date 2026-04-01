import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export default function Privacy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | PuraClean</title>
        <meta name="description" content="PuraClean Privacy Policy. Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <div className="pt-32 pb-20 bg-gradient-to-br from-[hsl(355,60%,95%)] via-[hsl(350,30%,97%)] to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-center">Last updated: March 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-sm sm:prose-base prose-headings:text-foreground prose-p:text-foreground/80 prose-li:text-foreground/80 prose-strong:text-foreground">

        <p>PuraClean, Inc. ("PuraClean," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, mobile application, and use our services (collectively, the "Platform"). Please read this Privacy Policy carefully. By using the Platform, you agree to the collection and use of information in accordance with this policy.</p>

        <h2>1. Information We Collect</h2>
        <h3>Personal Information</h3>
        <p>We may collect personal information that you voluntarily provide to us when you register on the Platform, express an interest in obtaining information about us or our services, or otherwise contact us. This information may include:</p>
        <ul>
          <li>Name, email address, phone number, and mailing address;</li>
          <li>Billing and payment information (credit card numbers, billing address);</li>
          <li>Account credentials (username and password);</li>
          <li>Service preferences and scheduling information;</li>
          <li>Communications between you and PuraClean or Service Providers;</li>
          <li>Any other information you choose to provide.</li>
        </ul>

        <h3>Automatically Collected Information</h3>
        <p>When you access the Platform, we may automatically collect certain information, including:</p>
        <ul>
          <li>Device information (device type, operating system, unique device identifiers);</li>
          <li>Log information (access times, pages viewed, IP address, referring URL);</li>
          <li>Location information (with your consent, we may collect precise geolocation data);</li>
          <li>Cookies and similar tracking technologies.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We may use the information we collect for various purposes, including to:</p>
        <ul>
          <li>Provide, operate, and maintain the Platform and our services;</li>
          <li>Process transactions and send related information, including booking confirmations and invoices;</li>
          <li>Match you with appropriate Service Providers;</li>
          <li>Send you marketing and promotional communications (with your consent, where required);</li>
          <li>Respond to your comments, questions, and requests, and provide customer service;</li>
          <li>Monitor and analyze usage patterns and trends to improve the Platform;</li>
          <li>Detect, prevent, and address technical issues, fraud, and security concerns;</li>
          <li>Comply with legal obligations and enforce our terms of service;</li>
          <li>Communicate with you about products, services, offers, promotions, and events;</li>
          <li>Personalize your experience on the Platform.</li>
        </ul>

        <h2>3. How We Share Your Information</h2>
        <p>We may share the information we collect in the following situations:</p>
        <ul>
          <li><strong>With Service Providers:</strong> We share your information with cleaning professionals who provide services to you, including your name, address, contact information, and service details;</li>
          <li><strong>With Third-Party Service Providers:</strong> We may share your information with third-party vendors who provide services on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing;</li>
          <li><strong>For Business Transfers:</strong> We may share or transfer your information in connection with a merger, acquisition, reorganization, sale of assets, or bankruptcy;</li>
          <li><strong>With Your Consent:</strong> We may share your personal information for any other purpose with your consent;</li>
          <li><strong>For Legal Purposes:</strong> We may disclose your information where required to do so by law or in response to valid requests by public authorities.</li>
        </ul>

        <h2>4. Cookies and Tracking Technologies</h2>
        <p>We use cookies and similar tracking technologies to track activity on our Platform and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Platform.</p>

        <h2>5. Data Security</h2>
        <p>We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

        <h2>6. Data Retention</h2>
        <p>We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.</p>

        <h2>7. Your Privacy Rights</h2>
        <p>Depending on your location, you may have the following rights regarding your personal information:</p>
        <ul>
          <li><strong>Access:</strong> You may request access to the personal information we hold about you;</li>
          <li><strong>Correction:</strong> You may request that we correct inaccurate or incomplete personal information;</li>
          <li><strong>Deletion:</strong> You may request that we delete your personal information, subject to certain exceptions;</li>
          <li><strong>Opt-Out:</strong> You may opt out of receiving marketing communications from us at any time;</li>
          <li><strong>Data Portability:</strong> You may request a copy of your personal information in a structured, commonly used format;</li>
          <li><strong>Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
        </ul>
        <p>To exercise any of these rights, please contact us at the information provided below.</p>

        <h2>8. California Privacy Rights</h2>
        <p>If you are a California resident, you have certain additional rights under the California Consumer Privacy Act (CCPA). These include the right to know what personal information we collect, use, disclose, and sell; the right to request deletion of your personal information; the right to opt-out of the sale of your personal information; and the right to non-discrimination for exercising your CCPA rights.</p>

        <h2>9. Children's Privacy</h2>
        <p>Our Platform is not intended for children under the age of 18. We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.</p>

        <h2>10. Third-Party Links</h2>
        <p>Our Platform may contain links to third-party websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the privacy policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

        <h2>11. Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>

        <h2>12. Contact Us</h2>
        <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
        <ul>
          <li>Email: hello@puraclean.com</li>
          <li>Phone: (602) 555-1234</li>
          <li>Mail: PuraClean, Inc., Phoenix, AZ</li>
        </ul>
      </div>
    </>
  );
}
