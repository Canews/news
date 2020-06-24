$(document).ready(function(){
    var affiliate = $.urlParam("aff_id")

    if(!affiliate){
        affiliate = 'undefined'
        console.log( "Affiliate name is " + affiliate)
    }

    var txt1 = "<script> dataLayer = [{'affiliate':" + "'"+ affiliate + "','product':'"+ product + "', 'version':" + "'"+ version + "'" +"}];<\/script>"
    var txt2 = "<style>.async-hide { opacity: 0 !important} </style><script>(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);})(window,document.documentElement,'async-hide','dataLayer',4000,{'GTM-M8PVB9Q':true});<\/script>";
    var txt3 = "<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M8PVB9Q');<\/script>"
    var txt4 = "<noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id='GTM-M8PVB9Q'\"height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"><\/iframe><\/noscript>"
        $('head').append(txt1, txt2, txt3);
        $('body').prepend(txt4);
   
          })