function doGet(e) {

     //when you have multiple files you are including, you neeed createTemplateFromFile and evaluate to run the include scripts
     const output = HtmlService.createTemplateFromFile("index").evaluate();
     output
       .setTitle('Queries and Fields')
     // .setFaviconUrl("https://resources.finalsite.net/images/f_auto,q_auto/v1665159970/woodburnsdorg/nkl3byyl3stazmgik9pk/WSDLogo.jpg")
   
     return output;
   }

   function include(filename) {
     return HtmlService.createHtmlOutputFromFile(filename).getContent()
   
   };