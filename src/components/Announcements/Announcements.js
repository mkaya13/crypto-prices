import './announcements.css';
import Marquee from 'react-fast-marquee';

const Announcements = () => (
  <Marquee speed={60} gradient={false} pauseOnHover>
    <section className="announcement-section">
      <div className="field-holder">
        <ul className="announcement-list">
          <li>
            <span className="new">Whitepaper</span>
          </li>
          <li className="announcement-sentence">
            Check your eligibility for early access to the token!
          </li>
          <li>
            <a className="view-now" href="./">
              View
            </a>
          </li>
          <li>
            <span className="new">Contract</span>
          </li>
        </ul>
      </div>
    </section>
  </Marquee>
);

export default Announcements;
