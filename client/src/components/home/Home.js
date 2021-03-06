import React, { Component, Fragment } from 'react';
import GoogleMap from '../google-map/GoogleMap';
import Testimonials from '../testimonials/Testimonials';
import Gallery from '../gallery/Gallery';
import Cta from '../Cta/Cta';

import bbarStyles from '../../styles/bbarStyles';
import './backgroundImage.css';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <header id="hero" className="Hero">
          <div className="Hero-image" />
          <div className="Hero-container">
            <h2 className="Hero-slogan">Biscuits.&nbsp;Tots.&nbsp;Taps.</h2>
            <address className="Hero-address">
              <a
                href="https://goo.gl/maps/Yxg4QjgPbDJ2"
                target="_blank"
                rel="noopener noreferrer"
              >
                5880 TX-121, Suite 102B<br />Plano, TX 75024
              </a>
              <br />
              <a className="Hero-phone" href="tel:4692382227">
                469.238.2227
              </a>
            </address>

            <p className="Hero-hours">
              Sunday 8am-10pm<br />
              Mon - Wed 8am-11pm<br />
              Thurs - Sat 8am-Midnight
            </p>
          </div>
          <Cta
            backgroundColor={bbarStyles.colors.bbarYellow}
            header="We’re&nbsp;Hiring!"
            copy={`Text <strong>LevelUp</strong> to <strong>33222</strong> to&nbsp;apply.`}
          />
        </header>
        <GoogleMap />
        <Testimonials />
        <Gallery />
        <Cta
          header="Let us cater your next&nbsp;event!"
          copy="Email catering inquiries to "
          ctaText="info@thebiscuit.bar"
          ctaHref="mailto:info@thebiscuit.bar"
        />
      </Fragment>
    );
  }
}
