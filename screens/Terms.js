import React from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({

  baseContainer: {
    flex: 1,
    backgroundColor: "#666"
  },

  h1Text: {
    marginTop: 10,
    fontSize: 26,
    fontWeight: "bold",
    color: '#000'
  },

  h2Text: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: '#000'
  },

  h3Text: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
    color: '#000'
  },

  h4Text: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
    color: '#000'
  },

  ptext: {
    marginTop: 10,
    fontSize: 17,
    color: '#000'
  }

});

class TermsScreen extends React.Component {
  static navigationOptions = {
    title: 'Terms of Use',
  };

  render() {
    return (
     <View style={styles.baseContainer}>

        <Text style={styles.h1Text}>Heading 1 Text</Text>
        <Text style={styles.h2Text}>Heading 2 Text</Text>
        <Text style={styles.h3Text}>Heading 3 Text</Text>
        <Text style={styles.h4Text}>Heading 4 Text</Text>
        <Text style={styles.ptext}>1. Agreement
By using the information, tools, software, features, and functionality, including content, updates and new releases located on www.poppitgames.com (together the “Service”), you agree to be bound by this Agreement, whether you are a visitor to our website or you are a registered “Member” or “Plus Member.” The term “you” or “User” refers to both Members and Users. The term “we” or “us” refers to The Yeppers Group, Inc., and its affiliates, parents, and licensors. You must read this Agreement and indicate your acceptance during the registration process.

You cannot enter this Agreement or use the Service if you are not of a legal age or otherwise not competent to form a binding contract. By accepting this Agreement, you are affirming that you are of legal age and are otherwise competent to enter a contractual relationship with us.

2. Privacy
For information about how we protect your personal information and data, please read our Privacy and Security Policy, which is incorporated into this Agreement. The policy may be updated from time to time at our sole discretion. Any changes are effective upon posting to the site. Anonymous, aggregate information, comprising financial account balances, other financial account data, or other available data that is collected through use of the Service, may be used by us or our third-party vendors to conduct certain analytical research, performance tracking, and benchmarking. We or our vendors may use summary or aggregate results relating to metrics composed of research data, from time to time, and distribute or license such anonymous, aggregated research data for any purpose, including but not limited to helping to improve products and services and assisting in troubleshooting and technical support. Your personally identifiable information will NOT be shared with or sold to third parties.

3. Description of the Service
The Service provides tools that facilitate tracking and consolidation of personal financial information at www.poppitgames.com. In addition, the Service gives Members access to trusted personal finance education and a proven process of debt elimination and wealth building. Based on information provided, the Service may also present information relating to other services we offer or third-party products or services (“Special Offers”).

The Service is provided to help in organizing and managing your finances. Members are provided this service for free. Plus Members receive enhanced services on a paid basis. Additional content may be offered to all Members in the nature of general personal finance education and empowerment. Links and promotion of third-party services or products, which may appear from time to time, are paid advertisements. Yeppers does not warrant or guarantee the services or products offered by third-parties on our site or through the Service.

We work very hard to provide the reliable and trustworthy personal finance education and management. However, the Service is not offered as legal, accounting, tax, or other professional advice or service. You should always seek the help of a competent professional to assist and advise on your fact-specific circumstances.

4. Trial Memberships of PoppitGames Plus
All trial memberships for PoppitGames Plus, unless otherwise stated, require a valid debit card for User verification and will automatically convert into a paying membership at the end of said trial period unless “auto renew” is turned off by the Member in the user settings. If the Member does not turn off auto-renew by then end of the trial period, payment will be processed on the day following the end of the trial period. Any trial membership that does not require payment information during the initial sign-up process will expire at the end of the trial period unless payment is made for continuing the service. If payment is made during the trial period, the payment will be processed the same day but will cover the thirty (30) days after the trial period. Trial periods are limited to one per customer and can vary in length depending on promotions.

At times, various market tests may be conducted, including special promotions. Any user who may receive “plus" features for free as a part of any market testing, will be guaranteed those features at no additional charge for a minimum of one (1) year from the time of signing up unless otherwise stated. Depending on the test, users may not be aware if they are part of a special promotion. Users may contact support at anytime to determine if they are and/or opt out of the program.

5. Fees and Renewal
We accept Visa or MasterCard debit cards as well as bank drafts for payment. We do not accept Discover or American Express. As you probably know, we discourage the use of credit and expect that all payments are made with the equivalent of cash. For more information, please refer to our Debit Card Policy here: https://www.daveramsey.com/company/debit-card-policy/.

If payment attempt is declined, you have thirty (30) days to provide a new card or your PoppitGames Plus membership will be canceled. You are responsible to notify us if you do not want to renew by turning off auto-renew in user settings. We will run a one-dollar ($1.00) authorization (displaying as a Pending Transaction) to make sure a debit card is valid. If it is not valid, we will be notified to help the User resolve the issue. If it is valid, we will process full payment based on the payment plan you selected and the authorization charge will be removed within a few business days.

PoppitGames Plus memberships may also be created or extended by redeeming vouchers. Vouchers are nontransferable and may not be sold or exchanged for refunds. Vouchers are valid for thirty (30) days following purchase. Use of vouchers requires an PoppitGames.com account and can be redeemed in user settings. Vouchers require current billing information to be on file at the time of redemption. Redemption of a voucher will automatically turn auto-renew on and will create a new renewal date for users based on the period length the voucher is good for. If you do not desire renewal, please turn the auto-renew function off in your user settings.

6. Account Information From Other Sites
Depending upon the type of membership registered, Members may direct us to retrieve their personal information maintained online by a bank or other third party (“Account Information”). We do not store your Account Information. Instead, we have contracted with a third party to provide connection to financial service providers to access this Account Information. Neither we nor any vendor reviews the Account Information for accuracy, legality, or non-infringement.

We cannot predict technical or other difficulties that may result in failure to obtain data or loss of data, personalization settings, or other service interruptions. We do not assume responsibility for the timeliness, accuracy, deletion, non-delivery, or failure to store any User data, communications, or personalization settings. For example, Account Information is only as fresh as provided by the bank or other third party. Such information may be more up to date when obtained directly from the relevant sites.

7. Offers and Third-Party Links
Our site and parts of the Service may contain links from advertisers and display Special Offers that may be custom matched to you based on information stored in the Service, queries made through the Service, or other information. In connection with Special Offers, the Service may provide links to other web sites belonging to advertisers and other third parties. We do not warrant or guarantee the products or services available through the Special Offers (or any other third-party products or services advertised), and we are not a broker or agent for any third party. We do not assume responsibility for the statements made or content of offers or claims in any third-party advertisement.

8. Your Registration Information
You agree and understand that you are responsible for maintaining the confidentiality of your password, which, together with your Login ID email address, allows you to access the Service. Your Login ID, along with your password, email address, and ZIP code of your residence you provide, all constitute your “Registration Information.”

You agree to receive all required notices electronically at the email address you provide. It is your responsibility to update or change that address as appropriate. Notices will be provided in HTML (or, if your system does not support HTML, in plain text) in the text of the email or through a link to the appropriate page on our site, accessible through any standard, commercially available Internet browser.

If you become aware of any unauthorized use of your Registration Information, you agree to notify us immediately.

9. Your Use of the Service
Your right to access and use our site and the Service is personal to you and is not transferable by you to any other person or entity. You are only entitled to access and use our site for lawful purposes.

The Service is most effective when accurate information is supplied. You must provide true, accurate, current, and complete information about your accounts maintained at other web sites, as requested in our “Add Account” setup forms, and you may not misrepresent your Registration Information. In order for the Service to function effectively, you must also keep your Registration Information up to date and accurate. Obviously, failure to do so will affect the accuracy and effectiveness of the Service.

Your access and use of our site may be interrupted from time to time for any of several reasons, including without limitation the malfunction of equipment, periodic updating, maintenance or repair of our site, or other actions that we, in our sole discretion, may elect to take.

We may offer “beta” or trial versions of the Service or special features. You acknowledge that such features are provided “as-is” and may contain errors or inaccuracies that could cause failures, corruption, or loss of data and/or information from any connected device. Your use of any such features is at your own risk.

You agree that we may use your feedback, suggestions, or ideas in any way, including in future modifications of the Service, other products or services, advertising, or marketing materials. You grant us a perpetual, worldwide, fully transferable, sub-licensable, irrevocable, fully paid-up, royalty-free license to use the feedback you provide to us in any way. We will not sell, publish, or share your comments or feedback in a way that could identify you without your explicit permission.

10. Mobile Device
Use of the Service may be available through a compatible mobile device and may require software. You agree that you are solely responsible for these requirements, including any applicable changes, updates, and fees as well as the terms of your agreement with your mobile device and telecommunications provider. WE MAKE NO WARRANTIES OR REPRESENTATIONS OF ANY KIND, EXPRESS, STATUTORY OR IMPLIED AS TO: (i) THE AVAILABILITY OF TELECOMMUNICATION SERVICES FROM YOUR PROVIDER AND ACCESS TO THE SERVICES AT ANY TIME OR FROM ANY LOCATION; (ii) ANY LOSS, DAMAGE, OR OTHER SECURITY INTRUSION OF THE TELECOMMUNICATION SERVICES; AND (iii) ANY DISCLOSURE OF INFORMATION TO THIRD PARTIES OR FAILURE TO TRANSMIT ANY DATA, COMMUNICATIONS, OR SETTINGS CONNECTED WITH THE SERVICES.

11. Alerts
We may from time to time provide automatic alerts and voluntary account-related alerts. We may have "automatic" alerts related to account activity that cannot be disabled. We may also have "voluntary" alerts that can be toggled on/off. These could be transaction related, User engagement/behavior related, or product related; for example, new feature announcements.

Automatic alerts may be sent to you following certain changes made online to your account, such as a change in your Registration Information.

If available, voluntary account alerts may be turned on by default as part of the Service. They may then be customized, deactivated, or reactivated by you. These alerts allow you to choose alert messages for your accounts. We may add new alerts from time to time or cease to provide certain alerts at any time upon our sole discretion. Each alert has different options available, and you may be asked to select from among these options upon activation of your alerts service.

Electronic alerts will be sent to the email address you have provided as your primary email address. If your email address or your mobile device’s email address changes, you are responsible for informing us of that change. You can also choose to have alerts sent to a mobile device that accepts text messages. Changes to your email address or mobile number will apply to all of your alerts.

Because alerts are not encrypted, we will never include your passcode. However, alerts may include your Login ID and some information about your accounts. Depending upon which alerts you select, information such as an account balance or the due date for your debit card payment may be included. Anyone with access to your email will be able to view the content of these alerts. At any time you may disable future alerts.

You understand that any alerts provided to you through the Service may be delayed or prevented by a variety of factors. We will do our absolute best to provide alerts in a timely manner with accurate information. However, we neither guarantee the delivery nor the accuracy of the content of any alert. You also agree that we are not liable for any delays, failure to deliver, or misdirected delivery of any alert; for any errors in the content of an alert; or for any actions taken or not taken by you or any third party in reliance on an alert.

12. Rights You Grant to Us
By submitting information, data, passwords, usernames, PINs, other login information, materials, and other content to through the Service, you are licensing that content to us solely for the purpose of providing the Service. Except as otherwise stated in this Agreement, we may use and store the content, but only to provide the Service to you. By submitting this content, you represent that you are entitled to do so, without any obligation to pay any fees or other limitations.

By using the Service, you expressly authorize us or a third party retained by us to access your Account Information maintained by identified third parties on your behalf as your agent. When you use the “Add Accounts” feature of the Service, you will be directly connected through a third party to the website for the account you have identified. Our vendor will submit information including usernames and passwords that you provide to log you in to the site. You hereby authorize and permit our vendor to use and store information submitted by you to the Service (such as account passwords and usernames) to accomplish the foregoing and to configure the Service so that it is compatible with the third-party sites for which you submit your information. For purposes of this Agreement and solely to provide the Account Information to you as part of the Service, you grant us and our vendor a limited power of attorney and appoint us and our vendor as your attorney-in-fact and agent to access third-party sites and to retrieve and use your information with the full power and authority to do and perform each thing necessary in connection with such activities as you could do in person. YOU ACKNOWLEDGE AND AGREE THAT WHEN WE OR OUR VENDOR ACCESS AND RETRIEVE ACCOUNT INFORMATION FROM THIRD-PARTY SITES, WE OR OUR VENDOR ARE ACTING AS YOUR AGENT AND NOT AS THE AGENT OF OR ON BEHALF OF THE THIRD PARTY. You understand and agree that the Service is not sponsored or endorsed by any third parties accessible through the Service.

13. Intellectual Property Rights
The contents of the Service and our site, including its text, graphics, images, logos and button icons, photographs, editorial content, notices, software, and other material, are protected under both United States and other applicable copyright, trademark, and other laws. The contents of our site belong or are licensed to us or our software or content suppliers. We grant you the right to view and use the Service subject to these terms. You may download or print a copy of information provided on our site for your personal, non-commercial use only. Any distribution, reprint, or electronic reproduction of any content from our site in whole or in part for any other purpose is expressly prohibited without our prior written consent. All rights not granted are exclusively reserved by us. This is not a transfer of ownership in any intellectual property owned by us.

14. Misuse
You agree that you will not:
Use any robot, spider, scraper, deep link, or other similar automated data gathering or extraction tools, program, algorithm or methodology to access, acquire, copy, or monitor the Service or any portion of our site without our express written consent, which may be withheld in our sole discretion;
Use or attempt to use any engine, software, tool, agent, or other device or mechanism (including without limitation browsers, spiders, robots, avatars or intelligent agents) to navigate or search our site, other than the search engines and search agents available through the Service and other than generally available third-party web browsers (such as Internet Explorer, Safari, Firefox, Chrome, or Opera);
Post or transmit any file that contains viruses, worms, Trojan horses, or any other contaminating or destructive features, or that otherwise interfere with the proper working of our site or the Service; or
Attempt to decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of our site or the Service.
15. Rules for Posting
As part of the Service, we may allow Members to post content on bulletin boards, blogs, and at various other publicly available locations on our site. You agree in posting content to follow certain rules.
You are responsible for all content you submit to our site.
By submitting content, you represent that you have all necessary rights and hereby grant us a perpetual, worldwide, non-exclusive, royalty-free, sub-licensable, and transferable license to use, reproduce, distribute, prepare derivative works of, modify, display, and perform all or any portion of the content in connection with our site and our business, including without limitation for promoting and redistributing part or all of the site (and derivative works thereof) in any media formats and through any media channels. You also hereby grant each User a non-exclusive license to access your posted content through our site and to use, reproduce, distribute, prepare derivative works of, display, and perform such content as permitted through the functionality of our site and under this Agreement.
You may not post or transmit any message that is libelous or defamatory, or that discloses private or personal matters concerning any person. You may not post or transmit any message, data, image, or program that is indecent, obscene, pornographic, harassing, threatening, abusive, hateful, or racially or ethnically offensive; that encourages conduct that would be considered a criminal offense, give rise to civil liability, or violate any law; or that is otherwise inappropriate.
You may not post or transmit any message, data, image, or program that would violate the property rights of others, including unauthorized copyrighted text, images, or programs; trade secrets or other confidential proprietary information; and trademarks or service marks used in an infringing fashion.
You may not interfere with other Users’ use of the Service, including without limitation disrupting the normal flow of dialogue in an interactive area of our site, deleting or revising any content posted by another person or entity, or taking any action that imposes a disproportionate burden on the Service infrastructure or that negatively affects the availability of the Service to others.
Except where expressly permitted, you may not post or transmit charity requests; petitions for signatures; franchises, distributorship, sales representative agency arrangements, or other business opportunities (including offers of employment or contracting arrangements); club memberships; chain letters; or letters relating to pyramid schemes. You may not post or transmit any advertising, promotional materials, or any other solicitation of other Users to use goods or services except in those areas (e.g., a classified bulletin board) that are designated for such purpose.
You agree that any employment or other relationship you form or attempt to form with an employer, employee, or contractor whom you contact through areas of our site that may be designated for that purpose is between you and that employer, employee, or contractor alone and not with us.
You may not copy or use personal identifying or business contact information about other Users without their permission. Unsolicited emails, mailings, telephone calls, or other communications to individuals or companies whose contact details you obtain through the Service are prohibited.
You agree that we may use any feedback, suggestions, or ideas you post in any way, including in future modifications of the Service, other products or services, or advertising or marketing materials. You grant us a perpetual, worldwide, fully transferable, sub-licensable, non-revocable, fully paid-up, royalty-free license to use the feedback you provide to us in any way.
16. Social Media Sites
We may provide experiences on social media platforms such as Facebook®, Twitter®, and Pinterest® that enable online sharing and collaboration among Users who have registered to use them. Any content you post, such as pictures, information, opinions, or any personal information that you make available to other participants on these social platforms, is subject to the Terms of Use and Privacy Policies of those platforms. Please refer to those social media platforms to better understand your rights and obligations with regard to such content.

17. No Warranty
THE CONTENT AND ALL SERVICES AND PRODUCTS ASSOCIATED WITH OUR SITE OR PROVIDED THROUGH THE SERVICE ARE PROVIDED TO YOU ON AN “AS-IS” AND “AS-AVAILABLE” BASIS. WE MAKE NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE CONTENT OR OPERATION OF OUR SITE OR OF THE SERVICE. YOU EXPRESSLY AGREE THAT YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK.

WE MAKE NO REPRESENTATIONS, WARRANTIES, OR GUARANTEES, EXPRESS OR IMPLIED, REGARDING THE ACCURACY, RELIABILITY, OR COMPLETENESS OF THE CONTENT ON OUR SITE OR OF THE SERVICE, AND EXPRESSLY DISCLAIM ANY WARRANTIES OF NON-INFRINGEMENT OR FITNESS FOR A PARTICULAR PURPOSE. WE MAKE NO REPRESENTATION, WARRANTY, OR GUARANTEE THAT THE CONTENT THAT MAY BE AVAILABLE THROUGH THE SERVICE IS FREE OF INFECTION FROM ANY VIRUSES OR OTHER CODE OR COMPUTER PROGRAMMING ROUTINES THAT CONTAIN CONTAMINATING OR DESTRUCTIVE PROPERTIES OR THAT ARE INTENDED TO DAMAGE, SURREPTITIOUSLY INTERCEPT OR EXPROPRIATE ANY SYSTEM, DATA, OR PERSONAL INFORMATION.

18. Not a Financial Planner, Broker, or Tax Advisor
THE YEPPERS GROUP, INC., ITS AFFILIATES, AND THE SERVICE DO NOT PROVIDE LEGAL, TAX, OR FINANCIAL ADVICE. WE ARE NOT A FINANCIAL PLANNER, BROKER, OR TAX ADVISOR. The Service is intended only to assist you in your general personal finance organization and decision making. Your personal situation is unique and fact dependent. Thus, any information and advice obtained through the Service may not be appropriate for your particular situation. Accordingly, before making any final decisions or implementing any financial strategy, you should consider obtaining additional information and advice from your accountant or other financial advisers who are fully aware of your individual circumstances.

19. DISCLAIMER
YOU ACKNOWLEDGE AND AGREE THAT THE SERVICE, SOFTWARE, AND ANY THIRD-PARTY SERVICES ARE PROVIDED “AS-IS” AND “AS-AVAILABLE.” THE YEPPERS GROUP, INC., ITS AFFILIATES, ANY THIRD-PARTY VENDOR, AND ITS LICENSORS MAKE NO WARRANTY, EXPRESS, IMPLIED, OR STATUTORY, AND DISCLAIM ANY AND ALL WARRANTIES WITH RESPECT TO THE SERVICE, SOFTWARE, OR ANY THIRD-PARTY SERVICES, IN WHOLE OR IN PART, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTY OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, TITLE, OR NON-INFRINGEMENT. YOU UNDERSTAND AND EXPRESSLY AGREE THAT ANY USE OF THE SERVICE, SOFTWARE, OR THIRD-PARTY SERVICES WILL BE AT YOUR SOLE RISK. THE YEPPERS GROUP, INC., ITS AFFILIATES, AND ITS (i) LICENSORS AND (ii) THIRD-PARTY VENDORS DO NOT WARRANT THE COMPREHENSIVENESS, COMPLETENESS, CORRECTNESS, LEGALITY, OR ACCURACY OF THE SERVICE, SOFTWARE, OR THIRD-PARTY SERVICES, IN WHOLE OR IN PART, OR THAT THE SERVICE WILL BE SECURE, UNINTERRUPTED, OR ERROR-FREE. YOU ARE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR OTHER DEVICE OR LOSS OF DATA THAT RESULTS FROM YOUR USE OF THE SERVICE OR THIRD-PARTY SERVICES.

20. LIMITATION OF LIABILITY AND INDEMNITY
20.1 YOU TAKE FULL RESPONSIBILITY FOR THE DATA YOU ENTER, THE CONTENT YOU SUPPLY, AND YOUR USE OF OUR SERVICES. YOU ACKNOWLEDGE THAT THE SERVICE, THE YEPPERS GROUP, INC., ITS AFFILIATES, AND ITS EMPLOYEES ARE NOT ENGAGED IN RENDERING LEGAL, ACCOUNTING, OR PROFESSIONAL ADVICE. OUR SERVICES ARE OFFERED TO ASSIST YOU IN BASIC PERSONAL FINANCE MANAGEMENT AS DESCRIBED HEREIN.

20.2 NEITHER THE YEPPERS GROUP, INC., ITS AFFILIATES, OR ANY THIRD-PARTY VENDOR SHALL BE RESPONSIBLE OR LIABLE TO YOU OR TO ANY THIRD PARTY, WHETHER IN CONTRACT, WARRANTY, OR TORT (INCLUDING NEGLIGENCE) ARISING IN WHOLE OR IN PART FROM YOUR ACCESS TO OUR SITE, YOUR USE OF THE SERVICE, OR THIS AGREEMENT.

20.3 SUBJECT TO APPLICABLE LAW, THE YEPPERS GROUP, INC., AND ITS AFFILIATES AND SUPPLIERS ARE NOT LIABLE FOR ANY OF THE FOLLOWING: (A) ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, EXEMPLARY, LIQUIDATED, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFIT, REVENUE, OR BUSINESS; (B) DAMAGES RELATING TO FAILURES OF TELECOMMUNICATIONS, THE INTERNET, ELECTRONIC COMMUNICATIONS, CORRUPTION, SECURITY, LOSS OR THEFT OF DATA, VIRUSES, SPYWARE, LOSS OF BUSINESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF INVESTMENT, OR USE OF SOFTWARE OR HARDWARE THAT DOES NOT MEET SYSTEM REQUIREMENTS; (C) DAMAGES OR LOSSES RELATED TO PROFESSIONAL SERVICES OR ADVICE OF THIRD PARTIES, INCLUDING ADVERTISERS. THE ABOVE LIMITATIONS APPLY EVEN IF THE YEPPERS GROUP, INC., AND ITS AFFILIATES AND SUPPLIERS HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THIS AGREEMENT SETS FORTH THE ENTIRE LIABILITY OF THE YEPPERS GROUP, INC. AND ITS AFFILIATES AND VENDORS, AND YOUR EXCLUSIVE REMEDY WITH RESPECT TO THE SERVICE AND ITS USE. IN NO EVENT MAY YOU BRING ANY CLAIM OR CAUSE OF ACTION AGAINST US OR OUR AFFILIATES MORE THAN ONE (1) YEAR AFTER SUCH CLAIM OR CAUSE OF ACTION ARISES.

20.4 THE MAXIMUM AMOUNT TO WHICH THE YEPPERS GROUP, INC., AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, AND THIRD-PARTY VENDORS MAY BE LIABLE TO YOU IN ANY CIRCUMSTANCE SHALL NOT EXCEED (i) IN THE CASE OF PLUS MEMBERS, THE AMOUNT OF FEES PAID BY YOU IN THE PRECEDING TWELVE (12) MONTHS FOR THE SERVICE OR (ii) IN THE CASE OF ALL OTHER USERS AND MEMBERS, FIVE HUNDRED DOLLARS ($500.00).

20.5 You agree to indemnify and hold The Yeppers Group, Inc., and its Affiliates, Officers, Agents, Employees, and Third-Party Vendors harmless from any and all claims, liability, and expenses, including reasonable attorneys' fees and costs, arising out of your use of the Service or breach of this Agreement (collectively referred to as "Claims"). We reserve the right, in our sole discretion and at its own expense, to assume the exclusive defense and control of any Claims. You agree to reasonably cooperate as requested by us in the defense of any Claims.

21. Termination
This Agreement will remain in effect until terminated by either you or us as set out below. If you want to terminate your agreement with us, you may do so by closing your account for the Service.

We may at any time terminate our legal agreement with you immediately upon notice to the email address provided by you as part of your Registration Information:

If you have breached or repudiated any provision of this Agreement; or
If we in our sole discretion believe termination is required to do so by law.
22. Modifications
We may modify this Agreement from time to time. Any and all changes to this Agreement will be posted on our site. You are deemed to accept and agree to be bound by any changes to the Agreement when you use the Service after those changes are posted.

23. Governing Law and Forum for Disputes
This Agreement and your relationship with us shall be governed by the laws of the State of Tennessee without regard to its conflict or choice of laws provisions. Any dispute with us or our officers, directors, employees, agents, or affiliates arising under or in relation to this Agreement shall be resolved exclusively through the state courts having jurisdiction over Williamson County, Tennessee, except with respect to imminent harm requiring temporary or preliminary injunctive relief, in which case we may seek such relief in any court with jurisdiction over the parties. If you are a nonpaying member, you understand that, in return for agreement to this provision, we are able to offer the Service, without charge to you, and that your assent to this provision is an indispensable consideration to this Agreement.

24. Miscellaneous
If any portion of this Agreement is deemed unlawful, void, or unenforceable by any arbitrator or court of competent jurisdiction, this Agreement as a whole shall not be deemed unlawful, void, or unenforceable, but only that portion of this Agreement that is unlawful, void, or unenforceable shall be stricken from this Agreement.

If we do not exercise or enforce any legal right or remedy that is contained in the Agreement, such a decision on our part will not serve as formal waiver of our rights and all rights or remedies will still be available to us.

All covenants, agreements, representations, and warranties made in this Agreement shall survive your acceptance of this Agreement and the termination of this Agreement.

This Agreement represents the entire understanding and agreement between you and us regarding the subject matter of the same, and supersedes all other previous agreements.

25. The App
You can download a companion app to the Service from the Apple App Store®, and upon payment of the applicable fee we will give you an up-to-date snapshot of your finances by performing the some of the following.
Know when you have a new transaction or account alert.
Quick access to your financial information.
Syncs with the Service on the web and mobile.
You are responsible for any fee you incur and are charged by a third party (i.e., Apple), which may change from time to time, in connection with your download and use of the App. We have no obligation to refund any payments made to such third party for your use of the App.
26. Apple® Requirements
If you downloaded the Service or product from the Apple App Store®, the following terms also apply to you:
Acknowledgement: You acknowledge that this Agreement is between you and us only, and not with Apple, and we, not Apple, are responsible for the Service and the content thereof.
Scope of License: The license granted to you for the Service is a limited, non-transferable license to use the Service on an Apple product that you own or control and as permitted by the Usage Rules set forth in the terms of service applicable to the Apple App Store.
Maintenance and Support: We and not Apple are solely responsible for providing any maintenance and support services, for which additional fees may apply, with respect to the Services. You acknowledge that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the Service.
Warranty: We are solely responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed. In the event of any failure of the software to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price for the Software to you. To the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the Software, and any other claims, losses, liabilities, damages, costs, or expenses attributable to any failure to conform to any warranty will be our sole responsibility.
Product Claims: We, not Apple, are responsible for addressing any User or third-party claims relating to the Software or the User’s possession and/or use of the Software, including, but not limited to: (i) product liability claims; (ii) any claim that the Software fail to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection or similar legislation.
Intellectual Property Rights: You acknowledge that, in the event of any third-party claim that the Software or your possession and use of the Software infringes that third party’s intellectual property rights, we, not Apple, will be solely responsible for the investigation, defense, settlement, and discharge of any such intellectual property infringement claim.
Legal Compliance: You represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a terrorist-supporting country; and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties.
Developer Contact Info: Direct any questions, complaints, or claims to: The Yeppers Group, Inc., 1749 Mallory Lane, Brentwood, Tennessee 37027.
Third-Party Terms of Agreement: You must comply with any applicable third-party terms of agreement when using the Service.
Third-Party Beneficiary: You acknowledge and agree that Apple and Apple’s subsidiaries are third-party beneficiaries of this Agreement and that, upon your acceptance of the terms and conditions of the Agreement, Apple will have the right (and will be deemed to have accepted the right) to enforce the Agreement against you as a third-party beneficiary thereof.
27. Platform
The Service’s platform relies upon the AWS cloud infrastructure. For details about the security of this platform, please visit http://aws.amazon.com/security. Additional information on compliance of AWS is found here: http://aws.amazon.com/compliance.



Terms of Service Last Updated on January 27, 2020
</Text>

      </View>
    );
  }
}

export default TermsScreen