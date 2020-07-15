export class Article{
    _id: String;
    title: String;
      //required: [true, 'A title is required']
    
    slug: String;
      //required: [true, 'A slug is required'],
      //unique: true
    
    description: String;
    keywords: String;
    body: String;
    published:  Date;
    
    created:  Date;
    default: Date;
    modified: Date;
    
  }