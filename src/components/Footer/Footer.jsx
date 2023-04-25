import React from "react";
import "./Footer.css";
import './baladi.png'

export function ContactUs() {
  return (
    <div className="feedback-form-container">
      
      <div className="contact-info-container">
        <div className="contact-information-container">
          <span><strong> Contact Information</strong></span>
        </div>
        <div className="reachUs-container">
          <div className="description-container">
            <div className="email-container">
                <div className="svg-icon-container">
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7063 2.03719C15.0333 1.83771 15.4063 1.73291 15.7857 1.73291C16.1651 1.73291 16.5381 1.83771 16.8651 2.03719L17.221 1.45389L16.8651 2.03719L28.2937 9.01008C28.6053 9.20021 28.8646 9.47008 29.0453 9.79456C29.226 10.1191 29.3214 10.4866 29.3214 10.8612V26.649C29.3214 27.2246 29.0964 27.7742 28.6998 28.1775C28.3037 28.5804 27.769 28.8043 27.2143 28.8043H4.35714C3.80238 28.8043 3.26776 28.5804 2.87159 28.1775C2.475 27.7742 2.25 27.2246 2.25 26.649V25.7686H0.75V26.649C0.75 27.6144 1.12704 28.5428 1.80209 29.2293C2.47756 29.9161 3.39638 30.3043 4.35714 30.3043H27.2143C28.175 30.3043 29.0939 29.9161 29.7693 29.2293C30.4444 28.5428 30.8214 27.6144 30.8214 26.649L30.8214 10.8612C30.8214 10.2323 30.6613 9.6135 30.3559 9.06487C30.0503 8.51615 29.6095 8.05574 29.0749 7.7296L17.6463 0.756714C17.0852 0.414343 16.442 0.23291 15.7857 0.23291C15.1294 0.23291 14.4862 0.414343 13.9251 0.756714L2.49651 7.7296L2.49651 7.7296C1.96198 8.05574 1.52108 8.51616 1.21557 9.06487C0.9101 9.6135 0.749994 10.2323 0.75 10.8612V19.7686H2.25V10.8612C2.25 10.4866 2.34542 10.1191 2.52612 9.79456C2.70679 9.47008 2.96616 9.20021 3.27777 9.01008L14.7063 2.03719L14.3157 1.39695L14.7063 2.03719Z" fill="#090909"/>
                    </svg>

                </div>
                <div className="details-container">
                    <span className="d1">Email</span>
                    <span className="d2">sales@delightcapitals.com</span>
                </div>
            </div>
            <div className="phone-container">
            <div className="svg-icon-container">
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.50028 10.7463L6.85554 11.5072L7.30785 12.3962C9.87755 17.4463 14.0723 21.1771 19.0134 23.7088L20.0057 24.2172L20.7786 23.4135L22.499 21.6244C22.5193 21.6058 22.5446 21.5924 22.5729 21.5859C22.6043 21.5786 22.6302 21.5817 22.6468 21.5875L22.6548 21.5902L22.6628 21.5928C24.6809 22.2595 26.8564 22.6186 29.0833 22.6186C29.1245 22.6186 29.165 22.634 29.1998 22.6688C29.2345 22.7036 29.25 22.7441 29.25 22.7852V28.6019C29.25 28.6431 29.2345 28.6836 29.1998 28.7183C29.165 28.7531 29.1245 28.7686 29.0833 28.7686C19.6847 28.7686 11.4159 23.9386 6.62331 16.6249L5.139 17.0911C10.1625 25.0119 19.0081 30.2686 29.0833 30.2686C30 30.2686 30.75 29.5186 30.75 28.6019V22.7852C30.75 21.8686 30 21.1186 29.0833 21.1186C27.0167 21.1186 25 20.7852 23.1333 20.1686C22.55 19.9686 21.8833 20.1186 21.4333 20.5686L19.6974 22.3738C14.9807 19.9572 11.0447 16.4326 8.64474 11.7159L10.45 9.58522C10.9167 9.11856 11.05 8.46856 10.8667 7.88522C10.25 6.01856 9.91667 4.01855 9.91667 1.93522C9.91667 1.01855 9.16667 0.268555 8.25 0.268555H2.41667C1.5 0.268555 0.75 1.01855 0.75 1.93522C0.75 5.70015 1.48404 9.29339 2.81683 12.5797L4.25325 12.1285C2.96202 8.98582 2.25 5.5438 2.25 1.93522C2.25 1.89405 2.26549 1.85355 2.30024 1.8188C2.335 1.78404 2.3755 1.76855 2.41667 1.76855H8.25C8.29117 1.76855 8.33167 1.78404 8.36642 1.8188C8.40118 1.85356 8.41667 1.89405 8.41667 1.93522C8.41667 4.17381 8.77408 6.32738 9.43734 8.34049C9.44827 8.37844 9.44756 8.41147 9.44155 8.43715C9.43593 8.46115 9.42324 8.49067 9.38934 8.52456L9.34557 8.56834L9.30555 8.61557L7.50028 10.7463Z" fill="#090909"/>
                </svg>

            </div>
                <div className="details-container">
                    <span className="d1"> Phone </span>
                    <span className="d2"> +91 8792694702 | +91 8496894702</span>
                    
                </div>
            </div>
            <div className="location-container">
            <div className="svg-icon-container">
                <svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5745 15.8522C20.5745 19.0369 18.1423 21.5466 15.2284 21.5466C12.3146 21.5466 9.88232 19.0369 9.88232 15.8522C9.88232 12.6674 12.3146 10.1577 15.2284 10.1577C18.1423 10.1577 20.5745 12.6674 20.5745 15.8522Z" stroke="#090909" stroke-width="1.5"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.4356 5.90005L24.4393 5.90369C25.6427 7.11378 26.6013 8.56165 27.2566 10.1634C27.9119 11.7651 28.25 13.4871 28.25 15.2276C28.25 16.9681 27.9119 18.69 27.2566 20.2918C26.6013 21.8935 25.6427 23.3414 24.4393 24.5515L24.4356 24.5551L15.2492 33.8561L6.06448 24.5552L6.06073 24.5515C5.64181 24.1302 5.25257 23.6802 4.89545 23.2049L3.09515 23.2424C3.64468 24.0962 4.28183 24.8899 4.99716 25.6092L14.195 34.9234L15.2491 35.9908L16.3032 34.9235L25.5028 25.6092C26.8472 24.2574 27.9155 22.6426 28.6449 20.8598C29.3743 19.0769 29.75 17.162 29.75 15.2276C29.75 13.2931 29.3743 11.3782 28.6449 9.5954C27.9155 7.81256 26.8472 6.19777 25.5028 4.84595C19.8403 -0.8868 10.6596 -0.8868 4.99716 4.84595C3.65275 6.19777 2.58446 7.81256 1.85509 9.5954C1.12573 11.3782 0.75 13.2931 0.75 15.2276C0.75 16.2126 0.847428 17.1926 1.03937 18.1527L2.56544 18.1209C2.35638 17.1743 2.25 16.2038 2.25 15.2276C2.25 13.4871 2.58811 11.7651 3.24341 10.1634C3.89867 8.56165 4.85727 7.11378 6.06073 5.90369L6.06434 5.90005C11.1396 0.761833 19.3604 0.761833 24.4356 5.90005Z" fill="#090909"/>
                </svg>

               
                </div>
                <div className="details1-container">
                    <span className="d1"> Location</span>
                    <span className="d2"> No-657, 3rd Stage, 3rd Block, Basaveshwara Nagar, Bangalore -560079</span>

                </div>
            </div>
          </div>

          <div className="connectUs-container">
            <p> Connect Us</p>
            <div className="facebook-container"></div>
            <div className="twitter-container"></div>
            <div className="instagram-container"></div>
          </div>
        </div>
      </div>

      <div className="message-form-container">
        <div className="title-container">
            <p> <strong>Send us a Message</strong></p>
        </div>
        <div className="inputfields-container">
            <form className="formy">
            <label className="title">Full Name:
                 <input className="fillups" type="text" />
            </label>

            <label className="title">Phone Number:
                 <input className="fillups" type="text" />
            </label>

            <label className="title">Email:
                 <input className="fillups" type="text" />
            </label>

            <label className="title">Message:
                 <input className="fillups" type="text" />
            </label>
            </form>
        </div>
        <div className="button-container">
            <button className="connect-button">
               <label>Connect</label> 
            </button>
        </div>
      </div>

    </div>
  );
}

function Footer() {
  return (
    <>
      <div className="footer-layout-container">
        <ContactUs />
        {/* <div className="footer-copyright-container">
          <div className="Footer-container">
            {/* <p>happy</p> */}
            {/* <div className="logo-social-media-container">
              <div className="Logo-container">
                <img src='./baladi.png' alt="baladi"/>
              </div>
              <div className="socialMedia-container">
                <div className="linkedin-container"><p>linkedin</p></div>
                <div className="facebook-container"><p>fb</p></div>
                <div className="twitter-container"><p>twitter</p></div>
                <div className="instagram-container"><p>instagram</p></div>
              </div>
            </div>
            <div className="quickLinks-container">
              <div className="links-title-container">
                <p><strong>Quick Links</strong></p>
              </div>
              <div className="links-container">
                <span>Home</span> <br/>
                <span>About</span> <br/>
                <span> Properties</span> <br/>
                <span>Contact Us</span>
              </div>
            </div>
            <div className="ReachUs-container">
              <div className="reachus-title-container">
                <p><strong>Reach Us</strong></p>
              </div>
              <div className="links-container">

                <div className="call-container">
                    <div className="svg-icon-container">
                    
                    </div>
                    <div className="details-container">
                    <p> +91 2345783757</p>
                    <p> +91 89374837283</p>
                    </div>
                </div>

                <div className="message-container">
                <div className="svg-icon-container">
                </div >
                <div className="details-container">
                    <p> abc@gmail.com</p>
                    </div>
                </div>

                <div className="address-cotnainer ">
                <div className="svg-icon-container">
                </div>
                <div className="details-container">
                    <p>near canra office</p>
                    
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-container">
            <p> Copyright 2020-2022 </p>
          </div> */}
        {/* </div> */} 
      </div>
    </>
  );
}

export default Footer;
