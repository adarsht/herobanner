export interface News{
    title:string;
    id:number;
    dateTime:string;
    category:string;
    featuredImageURL:string;
    pageURL:string;
    description:string;
    categoryID:number;
    isFeatured:boolean;
    isTrending:boolean;
  }


  export interface IHeroBannerStates {
    news:News[];
  }
