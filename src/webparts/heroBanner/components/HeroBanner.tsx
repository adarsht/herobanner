import * as React from 'react';
// import styles from './HeroBanner.module.scss';
import { IHeroBannerProps } from './IHeroBannerProps';
// import { escape } from '@microsoft/sp-lodash-subset';
import Carousel from 'react-bootstrap/Carousel'
import '../components/css/heroBanner.css';
import featureImg from '../components/Images';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/fields";
import { Web } from '@pnp/sp/webs';
import { columnNames, expandCategoryValue, newsDateFormat, pageTypeNewsString } from '../../../shared/constants';
import { IHeroBannerStates, News } from './IHeroBannerStates';
import * as moment from 'moment';

const defaultNewsItem: News = {
  title: "NA",
  id: 0,
  dateTime: null,
  category: "NA",
  featuredImageURL: featureImg.feature_img_NoImage,
  pageURL: "#",
  description: "NA",
  categoryID: 0,
  isFeatured: false,
  isTrending: false
}

export default class HeroBanner extends React.Component<IHeroBannerProps, IHeroBannerStates> {
  constructor(prop: IHeroBannerProps) {
    super(prop);
    this.state = {
      news: []
    }
  }
  public render(): React.ReactElement<IHeroBannerProps> {
    return (
      <div>
        {/* hero banner desktop section start */}
        {
          this.state.news.length > 0 &&
          <section className='desktop_hb_wrapper'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-6 column_align_wrapper pdl'>
                  {
                    this.state.news.length > 0 ? this.getNewsDetailsHTML(this.state.news[0], 'hb_newsCtegory_01') : this.getNewsDetailsHTML(defaultNewsItem, 'hb_newsCtegory_01')
                  }
                  {/* <a href="#" className='hb_newsCtegory_01' style={{ backgroundImage: `url(${featureImg.feature_img_03})` }}>
                    <div className='hb_content_wrapper'>
                      <p className='hb_category_wrapper'>  category 01  </p>
                      <h3 className='hb_title_wrapper'> need to see a general practitioner our doctors are open for consiltations need to see a general practitioner our doctors are open for consiltations need to see a general practitioner our doctors are open for consiltations need to see a general practitioner our doctors are open for consiltations need to see a general practitioner our doctors are open for consiltations need to see a general practitioner our doctors are open for consiltations    </h3>
                      <h5 className='hb_date_wrapper'>24-may-2023</h5>
                    </div>
                  </a> */}
                </div>
                <div className='col-md-6'>
                  <div className='row'>
                    <div className='col-md-6 column_align_wrapper '>
                      {
                        this.state.news.length > 1 ? this.getNewsDetailsHTML(this.state.news[1], 'hb_newsCtegory_02') : this.getNewsDetailsHTML(defaultNewsItem, 'hb_newsCtegory_02')
                      }
                      {/* <a href="#" className='hb_newsCtegory_02' style={{ backgroundImage: `url(${featureImg.feature_img_04})` }}>
                        <div className='hb_content_wrapper'>
                          <p className='hb_category_wrapper'>  category 01  </p>
                          <h3 className='hb_title_wrapper'> need to see a general practitioner our doctors are open for consiltations </h3>
                          <h5 className='hb_date_wrapper'>24-may-2023</h5>
                        </div>
                      </a> */}
                    </div>
                    <div className='col-md-6 column_align_wrapper pdr'>
                      {
                        this.state.news.length > 2 ? this.getNewsDetailsHTML(this.state.news[1], 'hb_newsCtegory_03') : this.getNewsDetailsHTML(defaultNewsItem, 'hb_newsCtegory_03')
                      }
                      {/* <a href="#" className='hb_newsCtegory_03' style={{ backgroundImage: `url(${featureImg.feature_img_05})` }}>
                        <div className='hb_content_wrapper'>
                          <p className='hb_category_wrapper'>  category 01  </p>
                          <h3 className='hb_title_wrapper'> page title </h3>
                          <h5 className='hb_date_wrapper'>24-may-2023</h5>
                        </div>
                      </a> */}
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6 column_align_wrapper '>
            
                      {
                        this.state.news.length > 3 ? this.getNewsDetailsHTML(this.state.news[3], 'hb_newsCtegory_04') : this.getNewsDetailsHTML(defaultNewsItem, 'hb_newsCtegory_04')
                      }
                      {/* <a href="#" className='hb_newsCtegory_04' style={{ backgroundImage: `url(${featureImg.feature_img_05})` }}>
                        <div className='hb_content_wrapper'>
                          <p className='hb_category_wrapper'>  category 01  </p>
                          <h3 className='hb_title_wrapper'> page title </h3>
                          <h5 className='hb_date_wrapper'>24-may-2023</h5>
                        </div>
                      </a> */}
                    </div>
                    <div className='col-md-6 column_align_wrapper pdr'>
                      {
                        this.state.news.length > 4 ? this.getNewsDetailsHTML(this.state.news[4], 'hb_newsCtegory_05') : this.getNewsDetailsHTML(defaultNewsItem, 'hb_newsCtegory_05')
                      }
                      {/* <a href="#" className='hb_newsCtegory_05' style={{ backgroundImage: `url(${featureImg.feature_img_04})` }}>
                        <div className='hb_content_wrapper'>
                          <p className='hb_category_wrapper'>  category 01  </p>
                          <h3 className='hb_title_wrapper'> page title </h3>
                          <h5 className='hb_date_wrapper'>24-may-2023</h5>
                        </div>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        }

        {/* hero banner mobile section start */}
        {
          this.state.news.length > 0 &&
          <section className='mobile_hb_wrapper'>
            <Carousel interval={10000}>
              {this.state.news.map((item) =>
                <Carousel.Item>
                  {this.getNewsDetailsHTML(item, 'hb_newsCtegory_01')}
                </Carousel.Item>
              )}

              {/* <Carousel.Item>
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
             </Carousel.Item> */}
            </Carousel>
          </section>
        }
      </div>
    );
  }

  public async componentDidMount() {
    try {
      //await this.getCategories();
      await this.getAllNews();
    } catch (error) {
      console.log(error)
    }
  }

  public async getAllNews() {
    try {
      let objWeb = Web(this.props.context.pageContext.web.absoluteUrl)
      let newsItems = await objWeb.lists.getById(this.props.listID).items.select(`*,${columnNames.fileRef},${columnNames.category}/${expandCategoryValue}`).expand(columnNames.category).filter(`${columnNames.pageType} eq '${pageTypeNewsString}' and ${columnNames.featured} eq 1`).orderBy(columnNames.startDate, false).getAll();
      newsItems = newsItems.sort((a, b) => {
        if (a[columnNames.startDate] && b[columnNames.startDate])
          return this._getTime(new Date(b[columnNames.startDate])) - this._getTime(new Date(a[columnNames.startDate]));
      }).slice(0, 4);
      this.setState({
        news: newsItems.map((item) => {
          return {
            title: item[columnNames.title],
            id: item.ID,
            dateTime: item[columnNames.startDate],
            locationInfo: item[columnNames.location],
            category: item[columnNames.category] !== undefined && item[columnNames.category] !== null ? item[columnNames.category][expandCategoryValue] : "",
            featuredImageURL: item[columnNames.featuredImageURL] != null ? item[columnNames.featuredImageURL].Url : "",
            pageURL: item[columnNames.fileRef],
            icsFileURL: item[columnNames.ics] != null ? item[columnNames.ics].Url : "",
            categoryID: item[columnNames.categoryID] !== undefined && item[columnNames.categoryID] !== null ? item[columnNames.categoryID] : "",
            description: '',
            isFeatured: item[columnNames.featured],
            isTrending: item[columnNames.trending]
          }
        })
      }, () => { console.log(this.state.news) });
    } catch (error) {
      console.log(error)
    }
  }

  public getNewsDetailsHTML(item: News, categoryClassName: string) {
    try {
      return (
      
        <a href={item.pageURL} className={categoryClassName} style={{ backgroundImage: `url(${item.featuredImageURL})` }}>
          <div className='hb_content_wrapper'>
            <p className='hb_category_wrapper'>  {item.category}  </p>
            <h3 className='hb_title_wrapper'>
              {item.title.length > 45 ? item.title.slice(0, 45) + '...' : item.title}
            </h3>
            {console.log("hgjgjg")}
            <h5 className='hb_date_wrapper'>{item.dateTime != null || item.dateTime != undefined ? moment(item.dateTime).format(newsDateFormat) : ''}</h5>
          </div>
        </a>
      )
    } catch (error) {
      console.log(error)
    }
  }

  private _getTime(date?: Date) {
    return date != null ? date.getTime() : 0;
  }
}


