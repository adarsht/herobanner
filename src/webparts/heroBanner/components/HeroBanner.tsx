import * as React from 'react';
// import styles from './HeroBanner.module.scss';
import { IHeroBannerProps } from './IHeroBannerProps';
// import { escape } from '@microsoft/sp-lodash-subset';
import Carousel from 'react-bootstrap/Carousel'
import '../components/css/heroBanner.css';
import featureImg from '../components/Images';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

export default class HeroBanner extends React.Component<IHeroBannerProps, {}> {
  public render(): React.ReactElement<IHeroBannerProps> {
    return (
      <div>
        {/* hero banner desktop section start */}
        <section className='desktop_hb_wrapper'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-6 column_align_wrapper pdl'>
                <a href="#" className='hb_newsCtegory_01' style={{ backgroundImage: `url(${featureImg.feature_img_03})` }}>
                  <div className='hb_content_wrapper'>
                    <p className='hb_category_wrapper'>  category 01  </p>
                    <h3 className='hb_title_wrapper'> need to see a general practitioner our doctors are open for consiltations need to see a general practitioner our doctors are open for consiltations need to see a general practitioner our doctors are open for consiltations need to see a general practitioner our doctors are open for consiltations need to see a general practitioner our doctors are open for consiltations need to see a general practitioner our doctors are open for consiltations    </h3>
                    <h5 className='hb_date_wrapper'>24-may-2023</h5>
                  </div>
                </a>
              </div>
              <div className='col-md-6'>
                <div className='row'>
                  <div className='col-md-6 column_align_wrapper '>
                    <a href="#" className='hb_newsCtegory_02' style={{ backgroundImage: `url(${featureImg.feature_img_04})` }}>
                      <div className='hb_content_wrapper'>
                        <p className='hb_category_wrapper'>  category 01  </p>
                        <h3 className='hb_title_wrapper'> need to see a general practitioner our doctors are open for consiltations </h3>
                        <h5 className='hb_date_wrapper'>24-may-2023</h5>
                      </div>
                    </a>
                  </div>
                  <div className='col-md-6 column_align_wrapper pdr'>
                    <a href="#" className='hb_newsCtegory_03' style={{ backgroundImage: `url(${featureImg.feature_img_05})` }}>
                      <div className='hb_content_wrapper'>
                        <p className='hb_category_wrapper'>  category 01  </p>
                        <h3 className='hb_title_wrapper'> page title </h3>
                        <h5 className='hb_date_wrapper'>24-may-2023</h5>
                      </div>
                    </a>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6 column_align_wrapper '>
                    <a href="#" className='hb_newsCtegory_04' style={{ backgroundImage: `url(${featureImg.feature_img_05})` }}>
                      <div className='hb_content_wrapper'>
                        <p className='hb_category_wrapper'>  category 01  </p>
                        <h3 className='hb_title_wrapper'> page title </h3>
                        <h5 className='hb_date_wrapper'>24-may-2023</h5>
                      </div>
                    </a>
                  </div>
                  <div className='col-md-6 column_align_wrapper pdr'>
                    <a href="#" className='hb_newsCtegory_05' style={{ backgroundImage: `url(${featureImg.feature_img_04})` }}>
                      <div className='hb_content_wrapper'>
                        <p className='hb_category_wrapper'>  category 01  </p>
                        <h3 className='hb_title_wrapper'> page title </h3>
                        <h5 className='hb_date_wrapper'>24-may-2023</h5>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* hero banner mobile section start */}
        <section className='mobile_hb_wrapper'>
          <Carousel interval={10000}>
            <Carousel.Item>
              <a href="#" className='hb_newsCtegory_01' style={{ backgroundImage: `url(${featureImg.feature_img_04})` }}>
                <div className='hb_content_wrapper'>
                  <p className='hb_category_wrapper'>  category 01  </p>
                  <h3 className='hb_title_wrapper'> need to see a general practitioner our doctors are open for consiltations </h3>
                  <h5 className='hb_date_wrapper'>24-may-2023</h5>
                </div>
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="#" className='hb_newsCtegory_01' style={{ backgroundImage: `url(${featureImg.feature_img_03})` }}>
                <div className='hb_content_wrapper'>
                  <p className='hb_category_wrapper'>  category 01  </p>
                  <h3 className='hb_title_wrapper'> need to see a general practitioner our doctors are open for consiltationsneed to see a general practitioner our doctors are open for consiltations </h3>
                  <h5 className='hb_date_wrapper'>24-may-2023</h5>
                </div>
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="#" className='hb_newsCtegory_01' style={{ backgroundImage: `url(${featureImg.feature_img_04})` }}>
                <div className='hb_content_wrapper'>
                  <p className='hb_category_wrapper'>  category 01  </p>
                  <h3 className='hb_title_wrapper'> need to see a general practitioner our doctors are open for consiltationsneed. </h3>
                  <h5 className='hb_date_wrapper'>24-may-2023</h5>
                </div>
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="#" className='hb_newsCtegory_01' style={{ backgroundImage: `url(${featureImg.feature_img_05})` }}>
                <div className='hb_content_wrapper'>
                  <p className='hb_category_wrapper'>  category 01  </p>
                  <h3 className='hb_title_wrapper'> need to see a general practitioner our doctors are open for consiltationsneed. </h3>
                  <h5 className='hb_date_wrapper'>24-may-2023</h5>
                </div>
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="#" className='hb_newsCtegory_01' style={{ backgroundImage: `url(${featureImg.feature_img_04})` }}>
                <div className='hb_content_wrapper'>
                  <p className='hb_category_wrapper'>  category 01  </p>
                  <h3 className='hb_title_wrapper'> need to see a general practitioner our doctors are open for consiltationsneed. </h3>
                  <h5 className='hb_date_wrapper'>24-may-2023</h5>
                </div>
              </a>
            </Carousel.Item>
          </Carousel>
        </section>
      </div>
    );
  }
}
