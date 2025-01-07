type EmbedField = {
    name: string;
    value: string;
  };
  
  type EmbedAuthor = {
    name: string;
    icon_url: string;
  };
  
  type EmbedFooter = {
    text: string;
    icon_url: string;
  };
  
  type EmbedImage = {
    url: string;
  };
  
  type EmbedThumbnail = {
    url: string;
  };
  
  type Embed = {
    title: string | null;  
    description: string | null;  
    color: number | null;  
    fields?: EmbedField[];  
    author?: EmbedAuthor;  
    footer?: EmbedFooter;  
    timestamp?: string;  
    image?: EmbedImage;  
    thumbnail?: EmbedThumbnail;  
  };
  
  type Attachment = {
    id: string;        
    filename: string;  
    size: number;      
    url: string;       
    proxy_url: string; 
    content_type: string;  
  };
  
  export type WebhookPreviewType = {
    content: string | null;  
    embeds: Embed[];         
    username?: string;       
    avatar_url?: string;     
    attachments?: Attachment[];  
  };
  