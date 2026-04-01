import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export default function Privacy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Queen of Maids</title>
        <meta name="description" content="Queen of Maids Privacy Policy. Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <div className="pt-32 pb-20 bg-gradient-to-br from-[hsl(355,60%,95%)] via-[hsl(350,30%,97%)] to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-center">Last updated: March 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-sm sm:prose-base prose-headings:text-foreground prose-p:text-foreground/80 prose-li:text-foreground/80 prose-strong:text-foreground">

        <h2>1. What Information We Collect</h2>
        <p>When you visit our Site or use our Service you may provide us with personal information you actively choose to disclose ("Active Information"), information voluntarily provided within the Service ("Voluntary Information"), and/or non-personally identifiable information collected on an aggregate basis as you and others use our Site ("Passive Information"). These three types of information are referred to collectively as "User Information".</p>

        <h2>2. Active Information</h2>
        <p>In order to use the Service, we require you to disclose the following information: full name, a credit card to hold a reservation, and a valid e-mail address. Additionally, if you choose to post information through our Service or engage in email, regular mail, telephone or other contact with us, we may retain information disclosed thereby as well.</p>

        <h2>3. Voluntary Information</h2>
        <p>Within the Service, User may collect information related to User. This could include name, contact information, property details, etc.</p>

        <h2>4. Passive Information</h2>
        <p>Our Site and the Service utilize a standard technology called cookies to collect information about how our Site and Service is used. Passive Information gathered may include but is not limited to the date and time of visits, the Site pages viewed, time spent at our Site, a logging of activities, and the sites visited just before and just after our Site.</p>

        <h2>5. Cookies</h2>
        <p>Cookies are a feature of web browser software that allow web servers to recognize the computer used to access a Site. They are small pieces of data that we transfer to your computer's hard drive to enable our systems to recognize your browser, simplify subsequent interactions with our Site and streamline your use of the Site.</p>

        <h2>6. Use of Information Collected</h2>
        <p>Individuals we employ directly, or as contractors or agents at our direction, use Active Information for purposes of administering our business activities, providing User services such as support, and making available other products or services we think may be of interest to our users and to job candidates. We may use the Active Information or Passive Information you provide to us to contact you about changes to our Site and Service, new services, features or products we offer, or other information we think you might find valuable, as well as to provide or enhance features of our Site and Service. If at any time you do not wish to receive such information from us, please send us an email to that effect to contact@queenofmaids.com.</p>
        <p>Voluntary Information provided by User is for the exclusive use of the User and/or their authorized agents. We also use Passive Information to gather information about our users and to enhance and design our Site to make it easier and friendlier to use. Cookies help us know information about how many people visit our Site, when they visit our site, and how they use our service. We do not connect any of this information to your personal information or email address.</p>

        <h2>7. Sharing Information with Others</h2>
        <p>In addition to as described above, we may share User Information with others in the following situations without additional notice to or consent by you:</p>

        <h2>8. Business Transactions</h2>
        <p>As we continue to develop our business, we might become involved in financing transactions or business transactions involving the sale or license of our assets or business units. In either case, User Information often is disclosed on a confidential basis or is one of the transferred business assets but remains subject to the promises made in any pre-existing Privacy Policy (unless, of course, the User consents otherwise). Also, in the event PuraClean is merged with another company or acquired, or substantially all of its assets are acquired, User Information will be one of the transferred assets.</p>
        <p><strong>Protection of PuraClean and Others:</strong> We also may be required to disclose an individual's personal information in response to a lawful request by public authorities, including to meet national security or law enforcement requirements. This includes exchanging information with other companies and organizations for fraud protection and credit risk reduction. This does not, however, include selling, renting, sharing, or otherwise disclosing personally identifiable information from Users for commercial purposes in violation of the commitments set forth in this Privacy Policy.</p>
        <p><strong>Non-Personally Identifiable Information:</strong> We may disclose anonymous Passive Information about user habits, characteristics and user patterns, based on aggregate user statistics to advertisers on our Site or others.</p>

        <h2>9. Security of User Information</h2>
        <p>We secure your User Information by using commercially reasonable, industry-standard measures to prevent unauthorized access or disclosure, or accidental loss, disclosure or destruction thereof. However, even very good security measures may fail to prevent computer hacking or other breaches of security, and we can provide no guarantees that the same will not occur. Additionally, our postings on this Site and other communications you may have with us via email or regular mail may not be secure unless we advise you that security measures are in place prior to your sending information. Therefore, if you choose to communicate with us through these means, you are assuming the risk of doing so and we request that you do not send or post sensitive information through those means.</p>

        <h2>10. Other Websites</h2>
        <p>You may be able to access other websites through our Site and/or Service. When you do so you are thereby subject to those other sites' policies regarding privacy and data collection and you should read those sites' privacy policies to make sure you agree to them before using such sites. When you choose to visit such sites, you should read their privacy policies and terms of use to make sure you agree with them.</p>

        <h2>11. Opting Out / Correcting or Deleting Personal Information</h2>
        <p>If you desire not to receive information about products or services we think may be of interest to you or if you wish to delete or correct your information, please contact us at contact@queenofmaids.com.</p>

        <h2>12. Changes to Our Privacy Policy</h2>
        <p>Our Privacy Policy and Terms of Service may change from time to time. PuraClean, Inc. reserves the right, at its discretion, to modify this Privacy Policy at any time by posting a notice on the Site, or by sending you a notice via email. You will be responsible for reviewing and becoming familiar with any such modifications. Your use of the Site and/or the Service following such notification constitutes User's acceptance of the terms and conditions of this Agreement as modified. Unless stated otherwise, our current Privacy Policy applies to all information that we have about you and your account. We stand behind the promises we make, and will never materially change our policies and practices to make them less protective of User information collected in the past without the consent of affected Users.</p>
      </div>
    </>
  );
}
