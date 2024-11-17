export interface ProductProps {
    linkTo:string;
    title:string; 
    imgUrl:string;
    imgAlt:string;
    bookmark?: boolean;
    // bookmarkStyle?:string;
    badgeStyle?:string;
    badgeText?:string;
    badgeVariant?:Variant;
    // bookmarkVariants?:VariantBookmarks;
    category?:string;
    city?:string;
    reviewer:number;
    discount?:number;
    total?:number;
    unit?:string;
  }