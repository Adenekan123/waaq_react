import { Container } from "../../../components/ui";

const PrivacyPolicy = () => {

  return (
    <>
    <div className="bg-red-500 p-12"></div>
      <Container styles="py-12 md:py-24">
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-4">
            <h1 className="font-bold text-2xl">Privacy Policy</h1>
            <div className="flex flex-col gap-y-4">
              <p className="text-lg text-gray-500 text-justify">
                The website - waaqfusion.com.ng – referred here as the SERVICE
                is provided by WAAQ Fusion Integrated Services at no signup cost
                and is intended for use as is.
              </p>
              <p className="text-lg text-gray-500 text-justify">
                This page is used to inform visitors regarding our policies with
                the collection, use, and disclosure of Personal Information if
                anyone decided to use our Service.
              </p>
              <p className="text-lg text-gray-500 text-justify">
                If you choose to use our Service, then you agree to the
                collection and use of information in relation to this policy.
                The Personal Information that we collect is used for providing
                and improving the Service. We will not use or share your
                information with anyone except as described in this Privacy
                Policy.
              </p>
              <p className="text-lg text-gray-500 text-justify">
                The terms used in this Privacy Policy have the same meanings as
                in our Terms and Conditions, which is accessible at
                waaqfusion.com.ng/termsand conditions unless otherwise defined
                in this Privacy Policy.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="font-bold text-2xl">
              Information Collection and Use
            </h1>
            <div className="flex flex-col gap-y-4">
              <p className="text-lg text-gray-500 text-justify">
                For a better experience, while using our Service, we may require
                you to provide us with certain personally identifiable
                information, including but not limited to Name, Phone Number,
                Email Address, and any other information necessary to verify and
                validate our processes in the cause of providing you with our
                Service. The information that we request will be retained by us
                and used as described in this privacy policy.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="font-bold text-2xl">Log Data</h1>
            <div className="flex flex-col gap-y-4">
              <p className="text-lg text-gray-500 text-justify">
                We want to inform you that whenever you use our Service, in a
                case of an error in the website we collect data and information
                (through third party products) on your devices called Log Data.
                This Log Data may include information such as your device
                Internet Protocol (“IP”) address, device name, operating system
                version, the configuration of the website when utilizing our
                Service, the time and date of your use of the Service, and other
                statistics.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="font-bold text-2xl">Cookies</h1>
            <div className="flex flex-col gap-y-4">
              <p className="text-lg text-gray-500 text-justify">
                Cookies are files with a small amount of data that are commonly
                used as anonymous unique identifiers. These are sent to your
                browser from the websites that you visit and are stored on your
                device's internal memory.
              </p>
              <p className="text-lg text-gray-500 text-justify">
                This Service does not use these “cookies” explicitly. However,
                the app may use third party code and libraries that use
                “cookies” to collect information and improve their services. You
                have the option to either accept or refuse these cookies and
                know when a cookie is being sent to your device. If you choose
                to refuse our cookies, you may not be able to use some portions
                of this Service.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="font-bold text-2xl">Service Providers</h1>
            <div className="flex flex-col gap-y-4">
              <p className="text-lg text-gray-500 text-justify">
                We may employ third-party companies and individuals due to the
                following reasons:
              </p>
              <ul className="text-lg text-gray-500 text-justify list-disc list-inside">
                <li className="list-item">To facilitate our Service;</li>
                <li className="list-item">
                  To provide the Service on our behalf;
                </li>
                <li className="list-item">
                  To perform Service-related services; or
                </li>
                <li className="list-item">
                  To assist us in analyzing how our Service is used.
                </li>
              </ul>
              <p className="text-lg text-gray-500 text-justify">
                We want to inform users of this Service that these third parties
                have access to your Personal Information. The reason is to
                perform the tasks assigned to them on our behalf. However, they
                are obligated not to disclose or use the information for any
                other purpose.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="font-bold text-2xl">Security</h1>
            <div className="flex flex-col gap-y-4">
              <p className="text-lg text-gray-500 text-justify">
                We value your trust in providing us your Personal Information,
                thus we are striving to use commercially acceptable means of
                protecting it. But remember that no method of transmission over
                the internet, or method of electronic storage is 100% secure and
                reliable, and we cannot guarantee its absolute security.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="font-bold text-2xl">
              Changes to This Privacy Policy
            </h1>
            <div className="flex flex-col gap-y-4">
              <p className="text-lg text-gray-500 text-justify">
                We may update our Privacy Policy from time to time. Thus, you
                are advised to review this page periodically for any changes. We
                will notify you of any changes by posting the new Privacy Policy
                on this page. These changes are effective immediately after they
                are posted on this page.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="font-bold text-2xl">Contact Us</h1>
            <div className="flex flex-col gap-y-4">
              <p className="text-lg text-gray-500 text-justify">
                If you have any questions or suggestions about our Privacy
                Policy, do not hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
