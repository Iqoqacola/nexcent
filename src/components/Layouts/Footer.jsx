export const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="footer">
          <div className="footer-frame-1">
            <h2>
              Pellentesque suscipit <br />
              fringilla libero eu.
            </h2>
            <button className="btn">Get a demo →</button>
          </div>

          <div className="footer-frame-2">
            <div className="company-info">
              <img src="IconFooter.png" />
              <div>
                <p>Copyright © 2020 Landify UI Kit.</p>
                <p>All rights reserved</p>
              </div>
              <div className="social-icon-footer">
                <img src="SocialLinks.png" />
              </div>
            </div>

            <div className="links-footer">
              <div className="link-footer">
                <h6>Company</h6>
                <ul>
                  <li>About us</li>
                  <li>Blog</li>
                  <li>Contact us</li>
                  <li>Pricing</li>
                  <li>Testimonials</li>
                </ul>
              </div>
              <div className="link-footer">
                <h6>Support</h6>
                <ul>
                  <li>Help center</li>
                  <li>Terms of service</li>
                  <li>Legal</li>
                  <li>Privacy policy</li>
                  <li>Status</li>
                </ul>
              </div>
              <div className="link-footer">
                <h6>Stay up to date</h6>
                <input type="text" placeholder="Your email address" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
