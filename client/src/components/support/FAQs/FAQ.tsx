import Question from "./Question";

export default function FAQs() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Question
          question={"How to open a Zerodha demat account online?"}
          answer={
            <>
              <p>
                You can open a Zerodha demat account online for free if you are
                a resident Indian with your mobile number linked to your
                Aadhaar.
              </p>

              <h2 className="mt-10 text-2xl font-semibold">
                Required Documents
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>PAN number.</li>
                <li>Aadhaar number linked to your mobile number.</li>
                <li>
                  Bank account details: A personalised cancelled cheque with
                  your name or a bank statement/passbook showing the account
                  number, bank logo, seal, MICR, and IFSC code.
                </li>
                <li>Income proof (required only for F&O trading).</li>
              </ul>

              <h2 className="mt-10 text-2xl font-semibold">
                Steps to Open Your Account
              </h2>

              <ol className="mt-4 list-decimal space-y-4 pl-6">
                <li>
                  Install the Kite app from the App Store or Play Store, or
                  visit{" "}
                  <span className="font-medium text-blue-600">
                    signup.zerodha.com
                  </span>
                  .
                </li>

                <li>
                  Enter your mobile number, click <strong>Get OTP</strong>,
                  enter the OTP, and continue.
                </li>

                <li>
                  Verify your email by selecting Gmail or entering your name and
                  email address manually.
                </li>

                <li>Enter the OTP received on your email and continue.</li>

                <li>Enter your PAN number and date of birth.</li>

                <li>
                  Select the trading segments you want to activate, accept the
                  terms and conditions, and continue.
                </li>

                <li>
                  Verify your KYC using your Aadhaar number, OTP, captcha, and
                  Digilocker PIN.
                </li>

                <li>Enter your personal details.</li>

                <li>
                  Link your bank account using UPI or by manually entering your
                  bank details.
                </li>

                <li>
                  Complete the In-Person Verification (IPV) by enabling your
                  camera and capturing your verification photo.
                </li>

                <li>
                  Sign by drawing or uploading your signature and save it.
                </li>

                <li>
                  Upload supporting documents if required:
                  <ul className="mt-2 list-disc pl-6">
                    <li>Bank proof (if bank details were entered manually).</li>
                    <li>Income proof (if applying for F&O trading).</li>
                  </ul>
                </li>

                <li>
                  Add a nominee (recommended) or choose to do it later after
                  account activation.
                </li>

                <li>
                  Digitally sign your account opening forms using Aadhaar, OTP,
                  and your Digilocker PIN.
                </li>

                <li>
                  Your user ID will be generated immediately after e-signing.
                  Trading can begin once your account is activated by the
                  exchanges. Account activation generally takes up to{" "}
                  <strong>48 working hours</strong>, and your login credentials
                  will also be sent to your registered email address.
                </li>
              </ol>

              <h2 className="mt-10 text-2xl font-semibold">
                Alternative Account Opening Options
              </h2>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>
                  If your Aadhaar is not linked to your mobile number, follow
                  the offline account opening process.
                </li>

                <li>
                  For NRI accounts, complete the offline application process.
                </li>

                <li>
                  For non-individual accounts (Company, Partnership, LLP, or
                  HUF), follow the respective offline account opening procedure.
                </li>
              </ul>

              <h2 className="mt-10 text-2xl font-semibold">Notes</h2>

              <h3 className="mt-6 text-lg font-semibold">
                Income Proof Required for F&O Trading
              </h3>

              <p className="mt-2">
                You can provide any one of the following documents:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  Bank statement (last 6 months) with an average balance above
                  ₹10,000.
                </li>

                <li>
                  Latest salary slip showing a gross monthly income above
                  ₹15,000.
                </li>

                <li>
                  Latest ITR acknowledgement showing annual income above
                  ₹1,20,000.
                </li>

                <li>Latest Form 16 showing annual income above ₹1,20,000.</li>

                <li>Net worth certificate exceeding ₹10,00,000.</li>

                <li>
                  Latest Demat holdings statement with holdings worth more than
                  ₹10,000.
                </li>

                <li>Fixed Deposit receipt above ₹1,00,000.</li>
              </ul>

              <h3 className="mt-8 text-lg font-semibold">Important</h3>

              <p className="mt-2">
                Your Aadhaar name must exactly match the name used during
                e-sign. If the names differ, you must update your Aadhaar
                details during the Digio e-sign process, otherwise your
                application may be rejected.
              </p>

              <div className="mt-10 rounded-xl border border-blue-200 bg-blue-50 p-6">
                <h3 className="text-lg font-semibold text-blue-700">
                  💡 Did You Know?
                </h3>

                <p className="mt-3 text-gray-700">
                  You can open a secondary Demat account with Zerodha to
                  separate your long-term investments from your short-term
                  trades. This can make portfolio management and tax planning
                  much more organized.
                </p>
              </div>
            </>
          }
        />
        <Question
          question={"How to open a Zerodha demat account online?"}
          answer={
            <>
              <p>
                You can open a Zerodha demat account online for free if you are
                a resident Indian with your mobile number linked to your
                Aadhaar.
              </p>

              <h2 className="mt-10 text-2xl font-semibold">
                Required Documents
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>PAN number.</li>
                <li>Aadhaar number linked to your mobile number.</li>
                <li>
                  Bank account details: A personalised cancelled cheque with
                  your name or a bank statement/passbook showing the account
                  number, bank logo, seal, MICR, and IFSC code.
                </li>
                <li>Income proof (required only for F&O trading).</li>
              </ul>

              <h2 className="mt-10 text-2xl font-semibold">
                Steps to Open Your Account
              </h2>

              <ol className="mt-4 list-decimal space-y-4 pl-6">
                <li>
                  Install the Kite app from the App Store or Play Store, or
                  visit{" "}
                  <span className="font-medium text-blue-600">
                    signup.zerodha.com
                  </span>
                  .
                </li>

                <li>
                  Enter your mobile number, click <strong>Get OTP</strong>,
                  enter the OTP, and continue.
                </li>

                <li>
                  Verify your email by selecting Gmail or entering your name and
                  email address manually.
                </li>

                <li>Enter the OTP received on your email and continue.</li>

                <li>Enter your PAN number and date of birth.</li>

                <li>
                  Select the trading segments you want to activate, accept the
                  terms and conditions, and continue.
                </li>

                <li>
                  Verify your KYC using your Aadhaar number, OTP, captcha, and
                  Digilocker PIN.
                </li>

                <li>Enter your personal details.</li>

                <li>
                  Link your bank account using UPI or by manually entering your
                  bank details.
                </li>

                <li>
                  Complete the In-Person Verification (IPV) by enabling your
                  camera and capturing your verification photo.
                </li>

                <li>
                  Sign by drawing or uploading your signature and save it.
                </li>

                <li>
                  Upload supporting documents if required:
                  <ul className="mt-2 list-disc pl-6">
                    <li>Bank proof (if bank details were entered manually).</li>
                    <li>Income proof (if applying for F&O trading).</li>
                  </ul>
                </li>

                <li>
                  Add a nominee (recommended) or choose to do it later after
                  account activation.
                </li>

                <li>
                  Digitally sign your account opening forms using Aadhaar, OTP,
                  and your Digilocker PIN.
                </li>

                <li>
                  Your user ID will be generated immediately after e-signing.
                  Trading can begin once your account is activated by the
                  exchanges. Account activation generally takes up to{" "}
                  <strong>48 working hours</strong>, and your login credentials
                  will also be sent to your registered email address.
                </li>
              </ol>

              <h2 className="mt-10 text-2xl font-semibold">
                Alternative Account Opening Options
              </h2>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>
                  If your Aadhaar is not linked to your mobile number, follow
                  the offline account opening process.
                </li>

                <li>
                  For NRI accounts, complete the offline application process.
                </li>

                <li>
                  For non-individual accounts (Company, Partnership, LLP, or
                  HUF), follow the respective offline account opening procedure.
                </li>
              </ul>

              <h2 className="mt-10 text-2xl font-semibold">Notes</h2>

              <h3 className="mt-6 text-lg font-semibold">
                Income Proof Required for F&O Trading
              </h3>

              <p className="mt-2">
                You can provide any one of the following documents:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  Bank statement (last 6 months) with an average balance above
                  ₹10,000.
                </li>

                <li>
                  Latest salary slip showing a gross monthly income above
                  ₹15,000.
                </li>

                <li>
                  Latest ITR acknowledgement showing annual income above
                  ₹1,20,000.
                </li>

                <li>Latest Form 16 showing annual income above ₹1,20,000.</li>

                <li>Net worth certificate exceeding ₹10,00,000.</li>

                <li>
                  Latest Demat holdings statement with holdings worth more than
                  ₹10,000.
                </li>

                <li>Fixed Deposit receipt above ₹1,00,000.</li>
              </ul>

              <h3 className="mt-8 text-lg font-semibold">Important</h3>

              <p className="mt-2">
                Your Aadhaar name must exactly match the name used during
                e-sign. If the names differ, you must update your Aadhaar
                details during the Digio e-sign process, otherwise your
                application may be rejected.
              </p>

              <div className="mt-10 rounded-xl border border-blue-200 bg-blue-50 p-6">
                <h3 className="text-lg font-semibold text-blue-700">
                  💡 Did You Know?
                </h3>

                <p className="mt-3 text-gray-700">
                  You can open a secondary Demat account with Zerodha to
                  separate your long-term investments from your short-term
                  trades. This can make portfolio management and tax planning
                  much more organized.
                </p>
              </div>
            </>
          }
        />
        <Question
          question={"How to open a Zerodha demat account online?"}
          answer={
            <>
              <p>
                You can open a Zerodha demat account online for free if you are
                a resident Indian with your mobile number linked to your
                Aadhaar.
              </p>

              <h2 className="mt-10 text-2xl font-semibold">
                Required Documents
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>PAN number.</li>
                <li>Aadhaar number linked to your mobile number.</li>
                <li>
                  Bank account details: A personalised cancelled cheque with
                  your name or a bank statement/passbook showing the account
                  number, bank logo, seal, MICR, and IFSC code.
                </li>
                <li>Income proof (required only for F&O trading).</li>
              </ul>

              <h2 className="mt-10 text-2xl font-semibold">
                Steps to Open Your Account
              </h2>

              <ol className="mt-4 list-decimal space-y-4 pl-6">
                <li>
                  Install the Kite app from the App Store or Play Store, or
                  visit{" "}
                  <span className="font-medium text-blue-600">
                    signup.zerodha.com
                  </span>
                  .
                </li>

                <li>
                  Enter your mobile number, click <strong>Get OTP</strong>,
                  enter the OTP, and continue.
                </li>

                <li>
                  Verify your email by selecting Gmail or entering your name and
                  email address manually.
                </li>

                <li>Enter the OTP received on your email and continue.</li>

                <li>Enter your PAN number and date of birth.</li>

                <li>
                  Select the trading segments you want to activate, accept the
                  terms and conditions, and continue.
                </li>

                <li>
                  Verify your KYC using your Aadhaar number, OTP, captcha, and
                  Digilocker PIN.
                </li>

                <li>Enter your personal details.</li>

                <li>
                  Link your bank account using UPI or by manually entering your
                  bank details.
                </li>

                <li>
                  Complete the In-Person Verification (IPV) by enabling your
                  camera and capturing your verification photo.
                </li>

                <li>
                  Sign by drawing or uploading your signature and save it.
                </li>

                <li>
                  Upload supporting documents if required:
                  <ul className="mt-2 list-disc pl-6">
                    <li>Bank proof (if bank details were entered manually).</li>
                    <li>Income proof (if applying for F&O trading).</li>
                  </ul>
                </li>

                <li>
                  Add a nominee (recommended) or choose to do it later after
                  account activation.
                </li>

                <li>
                  Digitally sign your account opening forms using Aadhaar, OTP,
                  and your Digilocker PIN.
                </li>

                <li>
                  Your user ID will be generated immediately after e-signing.
                  Trading can begin once your account is activated by the
                  exchanges. Account activation generally takes up to{" "}
                  <strong>48 working hours</strong>, and your login credentials
                  will also be sent to your registered email address.
                </li>
              </ol>

              <h2 className="mt-10 text-2xl font-semibold">
                Alternative Account Opening Options
              </h2>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>
                  If your Aadhaar is not linked to your mobile number, follow
                  the offline account opening process.
                </li>

                <li>
                  For NRI accounts, complete the offline application process.
                </li>

                <li>
                  For non-individual accounts (Company, Partnership, LLP, or
                  HUF), follow the respective offline account opening procedure.
                </li>
              </ul>

              <h2 className="mt-10 text-2xl font-semibold">Notes</h2>

              <h3 className="mt-6 text-lg font-semibold">
                Income Proof Required for F&O Trading
              </h3>

              <p className="mt-2">
                You can provide any one of the following documents:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  Bank statement (last 6 months) with an average balance above
                  ₹10,000.
                </li>

                <li>
                  Latest salary slip showing a gross monthly income above
                  ₹15,000.
                </li>

                <li>
                  Latest ITR acknowledgement showing annual income above
                  ₹1,20,000.
                </li>

                <li>Latest Form 16 showing annual income above ₹1,20,000.</li>

                <li>Net worth certificate exceeding ₹10,00,000.</li>

                <li>
                  Latest Demat holdings statement with holdings worth more than
                  ₹10,000.
                </li>

                <li>Fixed Deposit receipt above ₹1,00,000.</li>
              </ul>

              <h3 className="mt-8 text-lg font-semibold">Important</h3>

              <p className="mt-2">
                Your Aadhaar name must exactly match the name used during
                e-sign. If the names differ, you must update your Aadhaar
                details during the Digio e-sign process, otherwise your
                application may be rejected.
              </p>

              <div className="mt-10 rounded-xl border border-blue-200 bg-blue-50 p-6">
                <h3 className="text-lg font-semibold text-blue-700">
                  💡 Did You Know?
                </h3>

                <p className="mt-3 text-gray-700">
                  You can open a secondary Demat account with Zerodha to
                  separate your long-term investments from your short-term
                  trades. This can make portfolio management and tax planning
                  much more organized.
                </p>
              </div>
            </>
          }
        />
        <Question
          question={"How to open a Zerodha demat account online?"}
          answer={
            <>
              <p>
                You can open a Zerodha demat account online for free if you are
                a resident Indian with your mobile number linked to your
                Aadhaar.
              </p>

              <h2 className="mt-10 text-2xl font-semibold">
                Required Documents
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>PAN number.</li>
                <li>Aadhaar number linked to your mobile number.</li>
                <li>
                  Bank account details: A personalised cancelled cheque with
                  your name or a bank statement/passbook showing the account
                  number, bank logo, seal, MICR, and IFSC code.
                </li>
                <li>Income proof (required only for F&O trading).</li>
              </ul>

              <h2 className="mt-10 text-2xl font-semibold">
                Steps to Open Your Account
              </h2>

              <ol className="mt-4 list-decimal space-y-4 pl-6">
                <li>
                  Install the Kite app from the App Store or Play Store, or
                  visit{" "}
                  <span className="font-medium text-blue-600">
                    signup.zerodha.com
                  </span>
                  .
                </li>

                <li>
                  Enter your mobile number, click <strong>Get OTP</strong>,
                  enter the OTP, and continue.
                </li>

                <li>
                  Verify your email by selecting Gmail or entering your name and
                  email address manually.
                </li>

                <li>Enter the OTP received on your email and continue.</li>

                <li>Enter your PAN number and date of birth.</li>

                <li>
                  Select the trading segments you want to activate, accept the
                  terms and conditions, and continue.
                </li>

                <li>
                  Verify your KYC using your Aadhaar number, OTP, captcha, and
                  Digilocker PIN.
                </li>

                <li>Enter your personal details.</li>

                <li>
                  Link your bank account using UPI or by manually entering your
                  bank details.
                </li>

                <li>
                  Complete the In-Person Verification (IPV) by enabling your
                  camera and capturing your verification photo.
                </li>

                <li>
                  Sign by drawing or uploading your signature and save it.
                </li>

                <li>
                  Upload supporting documents if required:
                  <ul className="mt-2 list-disc pl-6">
                    <li>Bank proof (if bank details were entered manually).</li>
                    <li>Income proof (if applying for F&O trading).</li>
                  </ul>
                </li>

                <li>
                  Add a nominee (recommended) or choose to do it later after
                  account activation.
                </li>

                <li>
                  Digitally sign your account opening forms using Aadhaar, OTP,
                  and your Digilocker PIN.
                </li>

                <li>
                  Your user ID will be generated immediately after e-signing.
                  Trading can begin once your account is activated by the
                  exchanges. Account activation generally takes up to{" "}
                  <strong>48 working hours</strong>, and your login credentials
                  will also be sent to your registered email address.
                </li>
              </ol>

              <h2 className="mt-10 text-2xl font-semibold">
                Alternative Account Opening Options
              </h2>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>
                  If your Aadhaar is not linked to your mobile number, follow
                  the offline account opening process.
                </li>

                <li>
                  For NRI accounts, complete the offline application process.
                </li>

                <li>
                  For non-individual accounts (Company, Partnership, LLP, or
                  HUF), follow the respective offline account opening procedure.
                </li>
              </ul>

              <h2 className="mt-10 text-2xl font-semibold">Notes</h2>

              <h3 className="mt-6 text-lg font-semibold">
                Income Proof Required for F&O Trading
              </h3>

              <p className="mt-2">
                You can provide any one of the following documents:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  Bank statement (last 6 months) with an average balance above
                  ₹10,000.
                </li>

                <li>
                  Latest salary slip showing a gross monthly income above
                  ₹15,000.
                </li>

                <li>
                  Latest ITR acknowledgement showing annual income above
                  ₹1,20,000.
                </li>

                <li>Latest Form 16 showing annual income above ₹1,20,000.</li>

                <li>Net worth certificate exceeding ₹10,00,000.</li>

                <li>
                  Latest Demat holdings statement with holdings worth more than
                  ₹10,000.
                </li>

                <li>Fixed Deposit receipt above ₹1,00,000.</li>
              </ul>

              <h3 className="mt-8 text-lg font-semibold">Important</h3>

              <p className="mt-2">
                Your Aadhaar name must exactly match the name used during
                e-sign. If the names differ, you must update your Aadhaar
                details during the Digio e-sign process, otherwise your
                application may be rejected.
              </p>

              <div className="mt-10 rounded-xl border border-blue-200 bg-blue-50 p-6">
                <h3 className="text-lg font-semibold text-blue-700">
                  💡 Did You Know?
                </h3>

                <p className="mt-3 text-gray-700">
                  You can open a secondary Demat account with Zerodha to
                  separate your long-term investments from your short-term
                  trades. This can make portfolio management and tax planning
                  much more organized.
                </p>
              </div>
            </>
          }
        />
      </div>
    </>
  );
}
