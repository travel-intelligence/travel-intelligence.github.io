
function computeFirstNavigationBar() {
    var activeFirstNavigationBar = localStorage.getItem('active_first_navigation_bar');
    htmlCode = '<div id="nav" class="main-nav"> <ul> <li';
    if (activeFirstNavigationBar == "home")
        htmlCode = htmlCode + ' class="current"';
    htmlCode = htmlCode + '><a href="/">Home</a></li> <li';
/*    if (activeFirstNavigationBar == "news")
        htmlCode = htmlCode + ' class="current"';
    htmlCode = htmlCode + '><a href="/news/">News</a></li> <li';
    if (activeFirstNavigationBar == "glossary")
        htmlCode = htmlCode + ' class="current"';
    htmlCode = htmlCode + '><a href="/glossary/">Glossary</a></li> <li';
*/    if (activeFirstNavigationBar == "apis")
        htmlCode = htmlCode + ' class="current"';
    htmlCode = htmlCode + '><a href="/apis/">APIs</a></li>'; //add " <li" at the end, if you reactivate the next menus
/*    if (activeFirstNavigationBar == "faq")
        htmlCode = htmlCode + ' class="current"';
    htmlCode = htmlCode + '><a href="/faq/">FAQ</a></li> <li';
    if (activeFirstNavigationBar == "contact")
        htmlCode = htmlCode + ' class="current"';
    htmlCode = htmlCode + '><a href="/contact/">Contact</a></li>';
*/    // Search box
    htmlCode = htmlCode + '<div style="position:relative; float:right;"> <form method="get" action="http://www.google.com/custom" target="_blank"> <input type="text" class="searchtextinput" name="q" size="20" placeholder="Search"><input type="submit" value=">" class="searchbutton"> <input type="hidden" name="sitesearch" value="dev.travel-intelligence.com"></input> <input type="hidden" name="forid" value="1"></input> <input type="hidden" name="hl" value="en"></input> </form> </div>';
    htmlCode = htmlCode + '</ul> </div>';
  document.getElementById('firstNavigationBar').innerHTML = htmlCode;  
}

function computeSecondNavigationBar() {
    var activeFirstNavigationBar = localStorage.getItem('active_first_navigation_bar');
    var activeSecondNavigationBar = localStorage.getItem('active_second_navigation_bar');
    htmlCode = '<div id="nav2" class="main-nav2"> <ul>';
    if (activeFirstNavigationBar == "apis") {
        if (activeSecondNavigationBar == "general") {
            htmlCode = htmlCode + '<li class="current"><a href="/apis/">General</a></li> <li><a href="/apis/airline/search_analysis/">Airline</a></li> <li><a href="/apis/travel_agency/search_analysis/">Travel Agency</a></li> </ul> </div>';
        }
        else if (activeSecondNavigationBar == "airline") {
            htmlCode = htmlCode + '<li><a href="/apis/">General</a></li> <li class="current"><a href="/apis/airline/search_analysis/">Airline</a></li> <li><a href="/apis/travel_agency/search_analysis/">Travel Agency</a></li> </ul> </div>';
        }
        else if (activeSecondNavigationBar == "travel_agency") {
            htmlCode = htmlCode + '<li><a href="/apis/">General</a></li> <li><a href="/apis/airline/search_analysis/">Airline</a></li> <li class="current"><a href="/apis/travel_agency/search_analysis/">Travel Agency</a></li> </ul> </div>';
        }
        else
            htmlCode = '';
    }
    else
        htmlCode = '';
    document.getElementById('secondNavigationBar').innerHTML = htmlCode;
}

function computeThirdNavigationBar() {
    var activeFirstNavigationBar = localStorage.getItem('active_first_navigation_bar');
    var activeSecondNavigationBar = localStorage.getItem('active_second_navigation_bar');
    var activeThirdNavigationBar = localStorage.getItem('active_third_navigation_bar');
    htmlCode = '<div id="nav3" class="main-nav3"> <ul>';
    if (activeFirstNavigationBar == "apis") {
        if (activeSecondNavigationBar == "airline") {
            htmlCode = htmlCode + '<li';
            if (activeThirdNavigationBar == "search_analysis")
                htmlCode = htmlCode + ' class="current"';
            htmlCode = htmlCode + '><a href="/apis/airline/search_analysis/">Search Analysis</a></li> <li';
            /*if (activeThirdNavigationBar == "air_traffic")
                htmlCode = htmlCode + ' class="current"';
	    htmlCode = htmlCode + '><a href="/apis/airline/air_traffic/">Air Traffic</a></li> <li';*/
            if (activeThirdNavigationBar == "schedule_analysis")
                htmlCode = htmlCode + ' class="current"';
	    htmlCode = htmlCode + '><a href="/apis/airline/schedule_analysis/">Schedule Analysis</a></li> <li';
            if (activeThirdNavigationBar == "reference_data")
                htmlCode = htmlCode + ' class="current"';
            htmlCode = htmlCode + '><a href="/apis/airline/reference_data/">Reference Data</a></li> </ul> </div>';
        }
        else if (activeSecondNavigationBar == "travel_agency") {
            htmlCode = htmlCode + '<li';
            if (activeThirdNavigationBar == "search_analysis")
                htmlCode = htmlCode + ' class="current"';
            htmlCode = htmlCode + '><a href="/apis/travel_agency/search_analysis/">Search Analysis</a></li> <li';
            /*if (activeThirdNavigationBar == "air_traffic")
                htmlCode = htmlCode + ' class="current"';
            htmlCode = htmlCode + '><a href="/apis/travel_agency/air_traffic/">Air Traffic</a></li> <li';*/
            if (activeThirdNavigationBar == "booking_analysis")
                htmlCode = htmlCode + ' class="current"';
            htmlCode = htmlCode + '><a href="/apis/travel_agency/booking_analysis/">Booking Analysis</a></li> <li';
            if (activeThirdNavigationBar == "price_benchmark")
                htmlCode = htmlCode + ' class="current"';
            htmlCode = htmlCode + '><a href="/apis/travel_agency/price_benchmark/">Price Benchmark</a></li> <li';
            if (activeThirdNavigationBar == "reference_data")
                htmlCode = htmlCode + ' class="current"';
            htmlCode = htmlCode + '><a href="/apis/travel_agency/reference_data/">Reference Data</a></li> </ul> </div>';
        }
        else
            htmlCode = '';
    }
    else
        htmlCode = '';
    document.getElementById('thirdNavigationBar').innerHTML = htmlCode;
}
