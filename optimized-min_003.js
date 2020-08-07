function IsValidOrganizationPage(){return window.location.pathname=="/"||window.location.pathname=="/customer-support/"?!0:!1}function actionCall(){var n=document.getElementById("zipCode").value;n&&$.ajax({type:"POST",url:"/api/cxa/TerminixInfo/Modal",data:{zipCode:n},success:function(n){try{n?(window.location="/termite-control?onGuard=true",sessionStorage.setItem("isPilotcustomer",!0)):$("#myModal").modal("hide")}catch(t){console.log("Error from server request: "+t.message)}},error:function(n){console.log("Error from server request: "+n.message)}})}function initMap(){console.log("Loaded map");googleGeocoder=new google.maps.Geocoder;googleMap=new google.maps.Map(document.getElementById("map"),{center:{lat:35,lng:-90},zoom:15,styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"},{lightness:"60"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]}]})}function IsObject(n){return Object.prototype.toString.call(n)=="[object Object]"}function IsArray(n){return Object.prototype.toString.call(n)=="[object Array]"}function IsObjectEmpty(n){for(var t in n)return!1;return!0}function GetWindowWidth(){return window.innerWidth}function ScrollTo(n,t){$("html, body").animate({scrollTop:n},t)}function ArrayContainsArray(n,t){return t.length?t.every(function(t){return n.indexOf(t)>-1}):!1}function IsStorageAvailable(n){try{var i=window[n],r="__storage_test__";return i.setItem(r,r),i.removeItem(r),!0}catch(t){return t instanceof DOMException&&(t.code===22||t.code===1014||t.name==="QuotaExceededError"||t.name==="NS_ERROR_DOM_QUOTA_REACHED")&&i.length!==0}}function GetCookie(n){var r,i,t;if(!n)return console.log("[GetCookie] Name is required to get the value of a cookie."),null;for(n+="=",r=document.cookie.split(";"),i=0;i<r.length;i++){for(t=r[i];t.charAt(0)==" ";)t=t.substring(1,t.length);if(t.indexOf(n)==0)return t.substring(n.length,t.length)}return null}function SetCookie(n,t,i){var r,u;return!n||!t?(console.log("[SetCookie] Name and value are both required to set a cookie."),!1):(i?(r=new Date,r.setTime(r.getTime()+i*864e5),u="; expires="+r.toUTCString()):u="",document.cookie=n+"="+t+u+"; path=/",!0)}function OpenModal(n){"use strict";!n||typeof n!="string"||n.indexOf("#")>-1||(_MATERIALIZE?$("#"+n).modal("open"):$("#"+n).modal("show"))}function CloseModal(n){"use strict";!n||typeof n!="string"||n.indexOf("#")>-1||(_MATERIALIZE?$("#"+n).modal("close"):$("#"+n).modal("hide"))}function is_iOS(){"use strict";for(var n=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"];n.length;)if(navigator.platform===n.pop())return!0;return!1}function GetURLParameter(n){"use strict";if(!n)throw"[GetURLParameter] param is required to pull a parameter.";for(var r=null,f=decodeURIComponent(window.location.search.substring(1)),u=f.split("&"),t,i=0;i<u.length;i++)if(t=u[i].split("="),t[0]===n){r=t[1]===undefined?null:t[1];break}return r}function GetTargetPest(){"use strict";var n=null,t=GetURLParameter("targetPest");return t?n=t:caniuse.sessionStorage&&sessionStorage.getItem("targetPest")&&(n=sessionStorage.getItem("targetPest").toUpperCase()),n}function IsValidEmailAddress(n){"use strict";return n=n?n:"",/^\w+([\.%#$&*+_-]\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(n)}function IsValidRoutingNumber(n){"use strict";if(!n||n.length!==9||!$.isNumeric(n))return!1;var t=3*(parseInt(n.charAt(0),10)+parseInt(n.charAt(3),10)+parseInt(n.charAt(6),10))+7*(parseInt(n.charAt(1),10)+parseInt(n.charAt(4),10)+parseInt(n.charAt(7),10))+1*(parseInt(n.charAt(2),10)+parseInt(n.charAt(5),10)+parseInt(n.charAt(8),10));return t%10==0}function GetGlobalUIPattern(n){var t="";return n&&(t=_GLOBAL_UI_SETTINGS?_GLOBAL_UI_SETTINGS.inputRegexPattern[n.toLowerCase()]:""),t}function GetEndecaContent(n,t){var i=function(n){t(n)},r;if(!n)throw"[GetEndecaContent] Data is required.";if(!n.productCode||!n.templateCode||!n.folder){console.log("[GetEndecaContent] Product Code, Template Code, and folder are all required in data.");i({});return}r="/includes/common/getEndecaContent.jsp?productCode="+n.productCode+"&templateCode="+n.templateCode+"&folder="+n.folder;$.ajax({type:"GET",url:r,timeout:12e5,complete:function(t){var r,u;try{r=JSON.parse(t.responseText)}catch(f){r={error:"An error has occurred."};console.log("Error from server request: "+f.message)}u={templateCode:n.templateCode,content:r};i(u)}})}function CommonModal(n,t,i){var o=t||null,s=i||null,h=n.title||"",c=n.body||"",e=n.confirm||!1,l=n.btnCancelText||"Cancel",a=n.btnConfirmText||"Ok",r=$("#commonModal"),f={},u=r.find(".cta.primary"),v=r.find(".cta.secondary, button.close");if(!r)throw"[CommonModal] No common modal id found on the page.";r.find(".modal-title").text(h);r.find(".modal-body").html(c);u.text(a);r.find(".cta.secondary").text(l);f.show=!0;e?(f.backdrop="static",u.show()):u.hide();r.on("show.bs.modal",function(){if(e){if(!t)throw"[CommonModal] Callback method required for confirmation modal.";u.off().on("click",function(){return t()});v.off().on("click",function(){if(typeof i=="function")return i()})}});r.on("hide.bs.modal",function(){o=s=null});r.modal(f)}function ThrowToast(){}function GetCreditCardType(n){"use strict";var t,i;if(!n||typeof n!="string")return null;for(t=0;t<_CreditCardTypes.length;t++)if(_CreditCardTypes[t].regex.test(n))return i=_CreditCardTypes[t],{name:i.name,value:i.value};return null}function ValidateCreditCardNumber(n,t){"use strict";if(!n||typeof n!="string")throw"[ValidateCreditCardNumber] String parameter cardNumber is required.";if(!t||typeof t!="string")throw"[ValidateCreditCardNumber] String parameter cardType is required.";for(var i=0;i<_CreditCardTypes.length;i++)if(_CreditCardTypes[i].value.toLowerCase()===t.toLowerCase()&&_CreditCardTypes[i].regex.test(n))return!0;return!1}function LC_CUSTOM(){var n=this;n.pathname=window.location.pathname;n.HasChatOccurred=function(){return n.agentHasSentMessage&&n.visitorHasSentMessage};n.CheckHasChatOccurred=function(){sessionStorage.setItem("LiveChatState",JSON.stringify({hasChatOccurred:n.HasChatOccurred(),visitorId:LC_CUSTOM.GetVisitorId()}))};n.GetVisitorId=function(){return LC_API?LC_API.get_visitor_id():null};n.agentHasSentMessage=!1;n.visitorHasSentMessage=!1;n.pages={buyonline:"buyonline",freeinspection:"free-inspection"};n.confirmPages={buyonline:"buyonline/step-four",freeinspection:"free-inspection/step-three"};n.cookies={started_chat:"_lc_start_chat",started_loc:"_lc_start_loc",started_timestamp:"_lc_start_timestamp",started_by:"_lc_started_by",initial_greeting_message:"_lc_initial_greeting_message"};n.livechat_chat_started=!1;n.error=$("#error").text();n.errorModal=$("#errorMessageModal").length;n.minimizeChatPages=[];n.checkDay=function(){return(new Date).getDay()=="6"?!1:!0};n.checkTime=function(){var n=(new Date).getTimezoneOffset()/60,t=((new Date).getHours()+n)%24-5;return 8<t<17?!0:!1};n.checkUrlParam=function(n){for(var i,u=window.location.search.substring(1),r=u.split("&"),t=0;t<r.length;t++)if(i=r[t].split("="),i[0]==n)return i[1];return!1};n.checkUrlPath=function(t){return n.pathname.indexOf(t)>-1};n.custom_variables=[{name:"Error_Info",value:n.error},{name:"Date",value:new Date},{name:"Page Viewed",value:n.pathname},{name:"Customer Address",value:utag_data.customer_address},{name:"Customer City",value:utag_data.customer_city},{name:"Customer State",value:utag_data.customer_state},{name:"Customer zip",value:utag_data.customer_zip},{name:"Customer ID",value:utag_data.customer_id},{name:"Customer Email",value:utag_data.customer_email}];n.gaEventCategory=function(){var t="Other";return n.checkUrlPath(n.pages.buyonline)?t="Pest Control":n.checkUrlPath(n.pages.freeinspection)&&(t="Termite Control"),"> LiveChat : "+t}();n.customProcEvent=function(t){procEvent(n.gaEventCategory,n.pathname,t)}}function getCookie(n){for(var t,r=n+"=",u=document.cookie.split(";"),i=0;i<u.length;i++){for(t=u[i];t.charAt(0)==" ";)t=t.substring(1);if(t.indexOf(r)==0)return t.substring(r.length,t.length)}return""}function setSessionCookie(n,t){document.cookie=n+"="+t+";expires=;path=/"}function checkCookie(n){return getCookie(n)!=""}var _SCHEDULE_SLOTS=[],_BRANCH_PHONE_NUMBER_COOKIE_FEATURE_TOGGLE=[],isPilotcustomer,zipCodePopupAppeared,element,googleMap,googleGeocoder,caniuse,_CreditCardTypes,LC_API,LC_CUSTOM;$(document).ready(function(){!navigator.cookieEnabled&&$(".cookie-msg").length&&$(".cookie-msg").removeClass("hide")});$(document).ready(function(){function y(){$(".mobile .nav-icon a").parents(".header-container.mobile").toggleClass("open")}function p(n,t,i){i||(i=window.location.href);var u=i.split("?")[0],r=i.split("?")[1];return typeof r!="undefined"&&r||(r=""),r=r.split("&").map(function(i){var r=i.split("=");return r[0]==n&&(r[1]=t),r.join("=")}).join("&"),typeof r!="undefined"&&r||(r=n+"="+t),r?u+"?"+r:u}function w(){$(".header-container.mobile .chat-link").show()}function b(){$(".chat-link").show()}function k(){$(".chat-link").hide()}function o(){var i=$("#scheduler-none"),r=$(".scheduler.dates > li > a.active"),t=$(".scheduler.times > li > a.active"),n="";i.prop("checked")?n="None":r.length&&t.length&&(n=t.data("slotkey"));g.val(n)}function nt(n){for(var u,f,e,r=new Array(0),o=0;o<n.length;o++){var t=null,i=n[o],h=!1,c=!1,s=-1;for(u=0;u<r.length;u++)if(i.schDate===r[u].dateString){for(t=r[u],h=!0,f=0;f<t.times.length;f++)if(i.schFrmTime===t.times[f].timeStart){c=!0;s=f;break}break}t===null&&(t={dateString:i.schDate,times:[]});c?parseInt(i.schDriveTime)<parseInt(t.times[s].data.schDriveTime)&&(t.times[s].data=i):t.times.push({timeStart:i.schFrmTime,timeStop:i.schToTime,data:i});h||r.push(t)}for(e=0;e<r.length;e++)r[e].times.sort(function(n,t){var n=parseInt(n.timeStart.toString().substring(0,2)),t=parseInt(t.timeStart.toString().substring(0,2));return n-t});return r}function tt(n){for(var i=null,t=0;t<_SCHEDULE_SLOTS.length;t++)_SCHEDULE_SLOTS[t].dateString===n&&(i=_SCHEDULE_SLOTS[t]);return i}function it(n,t){for(var r,u,f=$("ul.scheduler.dates"),e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=0;i<n.length;i++)r=new Date(n[i].dateString),u='<li><a href="#" class="schedule-date" data-date="'+n[i].dateString+'"><span class="month">'+e[r.getMonth()]+'<\/span><span class="date">'+r.getDate()+"<\/span><\/a><\/li>",f.append(u);t()}function rt(n,t){var u=$("ul.scheduler.times"),r=tt(n),i;for(u.empty(),i=0;i<r.times.length;i++){var f=v(r.times[i].timeStart.toString().substring(0,2)),e=v(r.times[i].timeStop.toString().substring(0,2)),o='<li><a href="#" class="schedule-time" data-slotKey="'+r.times[i].data.schSlotKey+'"><span>'+f+" - "+e+"<\/span><\/a><\/li>";u.append(o)}t()}function v(n){var t=n,i=t>=12?"PM":"AM";return t=t%12,t=t?t:12,t+" "+i}var u,n,f,s,i,r,t;window.nav=new function(){"use strict";var n=this,r=$("li.more"),u=$("li.shrink-1"),f=$(".subnav .shrink-1"),e=$("li.shrink-2"),o=$(".subnav .shrink-2"),t=$(".header-container.mobile"),i=$(".header-container.desktop");return n.states=[0,1,2,3],n.currentState=n.states[2],n.SetNav=function(){var t=GetWindowWidth();n.currentState=t<992?n.states[3]:t<1380?n.states[2]:t<1575?n.states[1]:n.states[0];n.UpdateNav()},n.UpdateNav=function(){switch(n.currentState){case 0:t.hide();i.show();r.hide();u.show();f.hide();e.show();o.hide();break;case 1:t.hide();i.show();r.show();u.hide();f.show();e.show();o.hide();break;case 3:t.show();i.hide();break;case 2:default:t.hide();i.show();r.show();u.hide();f.show();e.hide();o.show()}},n};nav.SetNav();$(window).resize(nav.SetNav);$(".mobile .nav-icon").on("click",y);u=$(".mobile .mainnav > li");u.on("click",function(){var n=$(this);n.hasClass("active")?n.toggleClass("active"):(u.removeClass("active"),n.toggleClass("active"))});$(".scroll-to-top").on("click",function(){ScrollTo(0,500)});n="1.877.837.6464";_BRANCH_PHONE_NUMBER_COOKIE_FEATURE_TOGGLE&&(f=GetCookie("branch_phone_number"),n=f?f:n);$(".phone-number-container > span").text(n);$(".call-phone > a").text(n).attr("href","tel:"+n.replace(/\./g,""));$(".phone-link > a").text(n).attr("href","tel:"+n.replace(/\./g,""));$(".more-less-toggle").on("click",function(){$(".more-less-content").collapse("toggle");$(".more-less-toggle").text(function(n,t){return t==="less"?"more":"less"})});if(s=(new Date).getFullYear(),$(".current-year").text(s),i=document.createElement("script"),i.type="application/ld+json",IsValidOrganizationPage()&&(r=document.createElement("script"),r.type="application/ld+json",r.text=JSON.stringify({"@context":"http://schema.org","@type":"Organization",name:"Terminix",description:"Since 1927, we've been committed to defending your home or business by providing exceptional termite control, pest control, bed bug inspections and mosquito removal.  Call today or purchase/schedule online today!",url:"https://www.terminix.com/",parentOrganization:"ServiceMaster",areaServed:["US"],logo:"https://cdn-prod.servicemaster.com/-/media/Feature/Terminix/Header/Terminix-logo.png?rev=2252c76ae1994b88ae08c6311b97bcb9",sameAs:["https://twitter.com/terminix","https://www.facebook.com/terminix/","https://www.linkedin.com/company/terminix/"],contactPoint:[{"@type":"ContactPoint",telephone:"+1-844-251-2164",contactType:"customer service"}]}),document.querySelector("head").appendChild(r)),i.text=JSON.stringify({"@context":"http://schema.org/","@type":"WebPage",author:"https://www.terminix.com/",datePublished:(new Date).toISOString(),headline:document.querySelector(".jsonld-webpage-headline").text,publisher:"https://www.terminix.com/",description:document.querySelector(".jsonld-webpage-description").getAttribute("content")}),document.querySelector("head").appendChild(i),caniuse.sessionStorage){t={"/additional-pest-solutions/attic-insulation/":"ATTIC INSULATION","/additional-pest-solutions/attic-insulation/california/":"ATTIC INSULATION","/bed-bug-control/":"BED BUGS","/additional-pest-solutions/crawl-space-services/":"CRAWL SPACE","/pest-control/":"PEST CONTROL","/pest-control/ants/":"ANTS","/pest-control/cockroaches/":"COCKROACHES","/pest-control/crickets/":"CRICKETS","/pest-control/fleas/":"FLEAS","/pest-control/mosquitoes/":"MOSQUITOES","/pest-control/mosquitoes/atsb/":"MOSQUITOES","/pest-control/moths/":"CLOTHES MOTHS","/pest-control/rodents/":"RODENTS","/pest-control/scorpions/":"SCORPIONS","/pest-control/silverfish/":"SILVERFISH","/pest-control/spiders/":"SPIDERS","/pest-control/ticks/":"TICKS","/pest-control/ticks/natural-tick-control/":"TICKS","/pest-control/wasps/":"PAPER WASPS","/pest-control/wildlife/":"WILDLIFE","/termite-control/":"TERMITES","/termite-control/drywood-defend-termite/":"TERMITES","/additional-pest-solutions/":"OTHER SERVICES"};$('a[href*="/free-inspection"], a[href*="/buyonline/address"]').each(function(n,i){if(!i.href.toLowerCase().includes("interestarea=onguard")){var r=window.location.pathname;r.length&&r.charAt(r.length-1)!="/"&&(r+="/");r=r.toLowerCase();r in t&&(i.href=p("interestArea",t[r],i.href))}});$("body").on("click",'a[href^="/free-inspection"], a[href^="/buyonline"]',function(){var n=window.location.pathname;n.length&&n.charAt(n.length-1)!="/"&&(n+="/");n=n.toLowerCase();n in t?sessionStorage.setItem("interestArea",t[n]):sessionStorage.removeItem("interestArea")})}$(document).on("ShowMobileChatLink",function(){w()});$(document).on("ShowGenericChatLink",function(){b()});$(document).on("HideGenericChatLink",function(){k()});$(".header-container .chat-link").hide();$(document).on("click",".chat-link",function(n){n.preventDefault();LC_API.open_chat_window()});var h=$(".scheduler-container"),c=$(".scheduler-select"),d=$(".time-slot"),e=$(".representative-text"),l=$(".loading-container"),a=$(".note-text"),g=$(".timeslothidden");$(document).on("SetNewSchedulerDates",function(n,t){_SCHEDULE_SLOTS=[];t&&(_SCHEDULE_SLOTS=nt(t));_SCHEDULE_SLOTS!=null&&_SCHEDULE_SLOTS.length>0?(it(_SCHEDULE_SLOTS,function(){h.show();a.show();l.hide()}),$(document).trigger("SetDefaultDateAndTime")):(h.hide(),e.show(),a.show(),l.hide(),$("#scheduler-none").trigger("click"))});$("#scheduler-none").on("change",function(){var n=$(this);n.prop("checked")?(c.hide(),e.show()):(c.show(),e.hide());o()});$(document).on("click",".scheduler.dates > li > a",function(n){n.preventDefault();var t=$(this),i=$(".scheduler.dates > li > a");t.hasClass("active")||(i.removeClass("active"),t.addClass("active"),rt(t.data("date"),function(){d.show()}));o()});$(document).on("click",".scheduler.times > li > a",function(n){n.preventDefault();var t=$(this),i=$(".scheduler.times > li > a");t.hasClass("active")||(i.removeClass("active"),t.addClass("active"),o())});$(document).on("SetDefaultDateAndTime",function(){$(".scheduler.dates > li:first-child > a").trigger("click");$(".scheduler.times > li:first-child > a").trigger("click")});$("ul.highlight a").click(function(){$(".highlighted").removeClass("highlighted");$(this).addClass("highlighted")})});$("#drop-down-select").change(function(){$("#submit-button").attr("href",$("#drop-down-select").val())});isPilotcustomer=sessionStorage.getItem("isPilotcustomer");zipCodePopupAppeared=sessionStorage.getItem("zipCodePopupAppeared");$("a").click(function(n){$(this).attr("href")=="/termite-control"&&isPilotcustomer&&($(this).attr("href","/termite-control?onGuard=true"),n.stopPropagation())});window.location.href.split("/")[3]=="termite-control"&&(isPilotcustomer&&window.location.search.split("?")[1]!="onGuard=true"&&(window.stop(),window.location="/termite-control?onGuard=true"),zipCodePopupAppeared||(sessionStorage.setItem("zipCodePopupAppeared",!0),element=document.getElementById("myModal"),$(".modal").modal("show")));$("#pest-submit-button").click(function(){var n=$("#zipCode").val();n==""||n=="00000"||n.length<5||!$.isNumeric(n)?($("#zipCode").attr("placeholder","ZIP CODE"),$("#zipCode").css("border","2px solid red"),$("#zipCode").addClass("input-error")):$("#pestSelect option:selected").index()!=0&&($("#zipCode").css("border",""),$("#zipCode").removeClass("input-error"),$("#pest-submit-button").attr("href",$("#pestSelect").val()))}),function(){function f(t){n=t;$("#map").hasClass("hide")&&$("#map").removeClass("hide");googleMap.setCenter(t.coordinates);google.maps.event.trigger(googleMap,"resize")}function u(n,t,i,r){this.zipCode=n;this.city=t;this.state=i;this.coordinates=r}var n=new u,t="tmx_city",i="tmx_state",r="tmx_zipcode";localStorage.getItem(t)!=null&&localStorage.getItem(t)!=""&&(n.city=localStorage.getItem(t));localStorage.getItem(i)!=null&&localStorage.getItem(i)!=""&&(n.state=localStorage.getItem(i));localStorage.getItem(r)!=null&&localStorage.getItem(r)!=""&&(n.zipCode=localStorage.getItem(r),$("#txtZipCodeLocation").val(n.zipCode),$("#cbRememberLocation").prop("checked",!0));$(document).ready(function(){$("#txtZipCodeLocation").on("change paste keyup",function(){});$("#formFindLocations").submit(function(n){if($("#txtZipCodeLocation").val().length>=5)return n.preventDefault(),window.location="https://www.terminix.com/exterminators/search?q="+$("#txtZipCodeLocation").val(),!1;console.log("invalid")})})}(),function(n,t,i){if(window.location.pathname=="/customer-support/privacy/"){var u=!!(t&&t.pushState),r={ANCHOR_REGEX:/^#[^ ]+$/,OFFSET_HEIGHT_PX:100,init:function(){this.scrollToCurrent();window.addEventListener("hashchange",this.scrollToCurrent.bind(this));n.body.addEventListener("click",this.delegateAnchors.bind(this))},getFixedOffset:function(){return this.OFFSET_HEIGHT_PX},scrollIfAnchor:function(r,f){var e,o,s;return this.ANCHOR_REGEX.test(r)?(e=n.getElementById(r.slice(1)),e&&(o=e.getBoundingClientRect(),s=window.pageYOffset+o.top-this.getFixedOffset(),window.scrollTo(window.pageXOffset,s),u&&f&&t.pushState({},n.title,i.pathname+r)),!!e):!1},scrollToCurrent:function(){this.scrollIfAnchor(window.location.hash)},delegateAnchors:function(n){var t=n.target;t.nodeName==="A"&&this.scrollIfAnchor(t.getAttribute("href"),!0)&&n.preventDefault()}};window.addEventListener("DOMContentLoaded",r.init.bind(r))}}(window.document,window.history,window.location);caniuse=function(n){return n.history=window.history&&typeof history.pushState=="function"&&typeof history.replaceState=="function"&&typeof history.back=="function",n.sessionStorage=IsStorageAvailable("sessionStorage"),n.localStorage=IsStorageAvailable("localStorage"),n}({});_CreditCardTypes=[{name:"Visa",regex:/^4/,value:"visa"},{name:"Master Card",regex:/^(5[1-5]|2(2(2[1-9][0-9]{2}|[3-9])|[3-6]|7([01]|20[0-9]{2})))/,value:"masterCard"},{name:"American Express",regex:/^3[47]/,value:"americanExpress"},{name:"Discover",regex:/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5])|64[4-9]|65)/,value:"discover"}];RegExp.escape=function(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")};String.prototype.replaceAll=function(n,t){return this.replace(new RegExp(RegExp.escape(n),"g"),t)};$(function(){switch(window.location.pathname){case"/bed-bug-control/":$("#main-banner").addClass("pb-49");break;case"/pest-control/ticks/":$("#main-banner").addClass("pb-99");break;case"/additional-pest-solutions/crawl-space-encapsulation/":$("#main-banner").addClass("pb-43");break;case"/about/media-center/video-content/":$("#main-banner").addClass("pb-264");break;case"/about/media-center/pest-facts/":$("#main-banner").addClass("pb-232");break;case"/about/associations/":$("#main-banner").addClass("pb-187");break;case"/bed-bug-control/amp/":$("#main-banner").addClass("pb-49");break;case"/termite-control/treatment/":$("#main-banner").addClass("pb-75");break;case"/additional-pest-solutions/crawl-space-ventilation/":$("#main-banner").addClass("pb-75");break;case"/termite-control/tent-defend-system/":$("#main-banner").addClass("pb-11");break;case"/pest-control/fleas/":$("#main-banner").addClass("pb-120");break;case"/additional-pest-solutions/":$("#main-banner").addClass("pb-88");break;case"/additional-pest-solutions/crawl-space-floor-supports/":$("#main-banner").addClass("pb-75");break;case"/additional-pest-solutions/crawl-space-vapor-barriers/":$("#main-banner").addClass("pb-75");break;case"/corporate/servicemaster/":$("#main-banner").addClass("pb-232");break;case"/termite-control/liquid-defense-system/":$("#main-banner").addClass("pb-11");break;case"/pest-control/silverfish/":$("#main-banner").addClass("pb-99");break;case"/pest-control/moths/":$("#main-banner").addClass("pb-67");break;case"/pest-control/fleas/":$("#main-banner").addClass("pb-120");break;case"/pest-control/crickets/":$("#main-banner").addClass("pb-99");break;case"/pest-control/wasps/":$("#main-banner").addClass("pb-67");break;case"/termite-control/bait-defend-system/":$("#main-banner").addClass("pb-43");break;case"/additional-pest-solutions/crawl-space-services/":$("#main-banner").addClass("pb-160");break;case"/about/media-center/press-releases/":$("#main-banner").addClass("pb-168");break;case"/about/media-center/":$("#main-banner").addClass("pb-232");break;case"/pest-control/scorpions/":$("#main-banner").addClass("pb-99");break;case"/bed-bug-control":$("#main-banner").addClass("pb-49");break;case"/pest-control/ticks":$("#main-banner").addClass("pb-99");break;case"/additional-pest-solutions/crawl-space-encapsulation":$("#main-banner").addClass("pb-43");break;case"/about":$("#main-banner").addClass("pb-123");break;case"/about/media-center/video-content":$("#main-banner").addClass("pb-264");break;case"/about/media-center/pest-facts":$("#main-banner").addClass("pb-232");break;case"/about/associations":$("#main-banner").addClass("pb-187");break;case"/bed-bug-control/amp":$("#main-banner").addClass("pb-49");break;case"/termite-control/treatment":$("#main-banner").addClass("pb-75");break;case"/additional-pest-solutions/crawl-space-ventilation":$("#main-banner").addClass("pb-75");break;case"/termite-control/tent-defend-system":$("#main-banner").addClass("pb-11");break;case"/pest-control/fleas":$("#main-banner").addClass("pb-120");break;case"/additional-pest-solutions":$("#main-banner").addClass("pb-88");break;case"/additional-pest-solutions/crawl-space-floor-supports":$("#main-banner").addClass("pb-75");break;case"/additional-pest-solutions/crawl-space-vapor-barriers":$("#main-banner").addClass("pb-75");break;case"/corporate/servicemaster":$("#main-banner").addClass("pb-232");break;case"/termite-control/liquid-defense-system":$("#main-banner").addClass("pb-11");break;case"/pest-control/silverfish":$("#main-banner").addClass("pb-99");break;case"/pest-control/moths":$("#main-banner").addClass("pb-67");break;case"/pest-control/fleas":$("#main-banner").addClass("pb-120");break;case"/pest-control/crickets":$("#main-banner").addClass("pb-99");break;case"/pest-control/wasps":$("#main-banner").addClass("pb-67");break;case"/termite-control/bait-defend-system":$("#main-banner").addClass("pb-43");break;case"/additional-pest-solutions/crawl-space-services":$("#main-banner").addClass("pb-75");break;case"/about/media-center/press-releases":$("#main-banner").addClass("pb-168");break;case"/about/media-center":$("#main-banner").addClass("pb-232");break;case"/pest-control/scorpions":$("#main-banner").addClass("pb-99");break;case"/pest-control/mosquitoes/atsb/":$(".tmx-hero-box.col-xs-12.col-sm-7.col-md-offset-6.col-sm-offset-5").addClass("p-atsb");break;case"/pest-control/mosquitoes/atsb":$(".tmx-hero-box.col-xs-12.col-sm-7.col-md-offset-6.col-sm-offset-5").addClass("p-atsb");break;case"/request-quote":$(".col-xs-12.col-sm-7.col-sm-offset-1.no-marg-m").addClass("form-bg-white");break;case"/request-quote/":$(".col-xs-12.col-sm-7.col-sm-offset-1.no-marg-m").addClass("form-bg-white");break;case"/pest-control":$("a.btn.btn-cta.rm-text-decor").addClass("pest-btn-cta");break;case"/pest-control/":$("a.btn.btn-cta.rm-text-decor").addClass("pest-btn-cta");break;case"/pest-control/other-pests":$("a.btn.btn-cta.rm-text-decor").addClass("pest-btn-cta");break;case"/pest-control/other-pests/":$("a.btn.btn-cta.rm-text-decor").addClass("pest-btn-cta");break;default:$("#main-banner").addClass("pb-0")}});$(document).ready(function(){function n(){$("#livechat-compact-container").hide()}$(document).on("HideOfficialLiveChatBubble",function(){n()})});window.__lc=window.__lc||{};window.__lc.license=6819721;window.__lc.ga_version="ga",function(){var n=document.createElement("script"),t;n.type="text/javascript";n.async=!0;n.src="https://cdn.livechatinc.com/tracking.js";t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(n,t)}();LC_API=LC_API||{};LC_CUSTOM=new LC_CUSTOM;LC_API.on_before_load=function(){if(LC_CUSTOM.startChatCookie=function(n){setSessionCookie(LC_CUSTOM.cookies.started_timestamp,(new Date).getTime());setSessionCookie(LC_CUSTOM.cookies.started_chat,"true");setSessionCookie(LC_CUSTOM.cookies.started_by,n);setSessionCookie(LC_CUSTOM.cookies.started_loc,LC_CUSTOM.pathname);LC_CUSTOM.chat_started=!0;LC_CUSTOM.chat_started_by=n;LC_CUSTOM.chat_started_loc=LC_CUSTOM.pathname;var t="";t=n.toLowerCase()=="agent"?"Proactive":"Reactive";LC_CUSTOM.customProcEvent(t+" Chat Initiated By : "+n);LC_CUSTOM.customProcEvent(t+" Chat Active > "+n)},LC_CUSTOM.endChatCookie=function(){setSessionCookie(LC_CUSTOM.cookies.started_chat,"false");LC_CUSTOM.chat_started=!1;setSessionCookie(LC_CUSTOM.cookies.initial_greeting_message,"false");LC_CUSTOM.initial_greeting_message=!1},LC_CUSTOM.chat_started=getCookie(LC_CUSTOM.cookies.started_chat)=="true",LC_CUSTOM.chat_started_by=getCookie(LC_CUSTOM.cookies.started_by),LC_CUSTOM.chat_started_loc=getCookie(LC_CUSTOM.cookies.started_loc),LC_CUSTOM.initial_greeting_message=getCookie(LC_CUSTOM.cookies.initial_greeting_message)=="true",LC_API.set_custom_variables(LC_CUSTOM.custom_variables),!LC_API.visitor_engaged()&&!LC_CUSTOM.chat_started){if(LC_CUSTOM.checkUrlParam("fromEmail"))return LC_API.agents_are_available()?(LC_CUSTOM.customProcEvent("Chat is opened from email."),LC_API.open_chat_window(),!1):($("#chatNotAvailModal").modal("show"),LC_API.hide_chat_window(),!1);for(i=0;i<LC_CUSTOM.minimizeChatPages.length;i++){if(LC_CUSTOM.pathname.indexOf(LC_CUSTOM.minimizeChatPages[i])>=0&&LC_API.agents_are_available()&&LC_CUSTOM.checkDay()||LC_API.visitor_engaged())return LC_API.minimize_chat_window(),!1;if(!LC_CUSTOM.checkTime())return LC_API.close_chat(),!1}LC_API.hide_chat_window()}};LC_API.on_after_load=function(){if(LC_CUSTOM.customProcEvent("Active Page Session"),LC_API.chat_running()&&LC_CUSTOM.customProcEvent("Chat continued from previous page"),!LC_API.agents_are_available()||LC_API.visitor_engaged()||LC_API.chat_window_hidden()||LC_CUSTOM.customProcEvent("Chat Agents available on page"),LC_API.agents_are_available()&&($("#error").length>0||$("#errorMessageModal").length>0)&&(LC_CUSTOM.customProcEvent("Chat is opened from form error."),LC_API.open_chat_window()),LC_API.agents_are_available()){if(LC_API.mobile_is_detected()&&LC_CUSTOM.checkUrlPath(LC_CUSTOM.pages.buyonline))$(document).trigger("HideOfficialLiveChatBubble"),$(document).trigger("ShowFABChatButton"),$(".livechat_button").hide();else if(LC_API.mobile_is_detected())$(document).trigger("HideOfficialLiveChatBubble"),$(document).trigger("ShowMobileChatLink");else{$(".livechat_button").show();$(".livechat_button a, .livechat_image").on("click",function(n){n.preventDefault();LC_API.open_chat_window()})}$(document).trigger("ShowGenericChatLink")}else $(".livechat_button").hide(),$(document).trigger("HideGenericChatLink"),LC_API.mobile_is_detected()&&LC_CUSTOM.checkUrlPath(LC_CUSTOM.pages.buyonline)?($(document).trigger("HideOfficialLiveChatBubble"),$(document).trigger("HideFABChatButton")):LC_API.mobile_is_detected()&&$(document).trigger("HideOfficialLiveChatBubble");LC_CUSTOM.chat_started&&(LC_CUSTOM.chat_started_by.toLowerCase()=="agent"?LC_CUSTOM.customProcEvent("Proactive Chat Active > "+LC_CUSTOM.chat_started_by):LC_CUSTOM.customProcEvent("Reactive Chat Active > "+LC_CUSTOM.chat_started_by));(LC_CUSTOM.checkUrlPath(LC_CUSTOM.confirmPages.buyonline)||LC_CUSTOM.checkUrlPath(LC_CUSTOM.confirmPages.freeinspection))&&(LC_CUSTOM.customProcEvent("Funnel completed"),LC_CUSTOM.chat_started?(LC_CUSTOM.customProcEvent("Funnel completed with chat"),LC_CUSTOM.customProcEvent("Chat started from : "+LC_CUSTOM.chat_started_loc)):LC_CUSTOM.customProcEvent("Funnel completed without chat"))};LC_API.on_chat_window_opened=function(){};LC_API.on_chat_started=function(){};LC_API.on_chat_ended=function(){LC_CUSTOM.endChatCookie();LC_CUSTOM.customProcEvent("Chat session ended")};LC_API.on_chat_state_changed=function(){};LC_API.on_chat_window_hidden=function(){};LC_API.on_chat_window_minimized=function(){LC_API.mobile_is_detected()&&LC_CUSTOM.checkUrlPath(LC_CUSTOM.pages.buyonline)?($(document).trigger("HideOfficialLiveChatButton"),LC_API.agents_are_available()&&($(document).trigger("ShowFABChatButton"),$(document).trigger("ShowGenericChatLink"))):LC_API.mobile_is_detected()&&($(document).trigger("HideOfficialLiveChatButton"),LC_API.agents_are_available()&&($(document).trigger("ShowMobileChatLink"),$(document).trigger("ShowGenericChatLink")))};LC_API.on_message=function(n){n.user_type.toLowerCase()==="agent"?(LC_CUSTOM.agentHasSentMessage=!0,LC_CUSTOM.CheckHasChatOccurred(),LC_CUSTOM.initial_greeting_message||(setSessionCookie(LC_CUSTOM.cookies.initial_greeting_message,"true"),LC_CUSTOM.initial_greeting_message=!0,LC_API.mobile_is_detected()&&LC_CUSTOM.checkUrlPath(LC_CUSTOM.pages.buyonline)?$(document).trigger("InitialGreetingInitiated",n):LC_API.mobile_is_detected()&&($(document).trigger("HideOfficialLiveChatButton"),$(document).trigger("ShowMobileChatLink")),LC_CUSTOM.startChatCookie("Agent"))):n.user_type.toLowerCase()==="visitor"&&(LC_CUSTOM.visitorHasSentMessage=!0,LC_CUSTOM.CheckHasChatOccurred(),LC_CUSTOM.initial_greeting_message||(setSessionCookie(LC_CUSTOM.cookies.initial_greeting_message,"true"),LC_CUSTOM.initial_greeting_message=!0,LC_CUSTOM.startChatCookie("User")))};LC_API.on_postchat_survey_submitted=function(){LC_CUSTOM.customProcEvent("Chat survey was submitted")};LC_API.on_prechat_survey_submitted=function(){};LC_API.on_rating_comment_submitted=function(){LC_CUSTOM.customProcEvent("Rating comment was submitted")};LC_API.on_rating_submitted=function(){LC_CUSTOM.customProcEvent("Rating was submitted")};LC_API.on_ticket_created=function(){LC_CUSTOM.customProcEvent("Ticket was created")};$(".footer-section div:first-child").removeClass("hidden-xs hidden-sm");$(".footer-section div:nth-last-child(2)").removeClass("hidden-xs hidden-sm");$(".footer-section div:last-child").removeClass("hidden-xs hidden-sm");$(".mob-img-copy-child div:first-child").addClass("inline-div-left col-md-12");$(".mob-img-copy-child div:nth-child(2)").addClass("inline-div");$(".mob-img-copy-child div:last-child").addClass("inline-div")