var environments = [
  {id: 'prod', name: 'Production', url: 'https://api.travel-intelligence.com/'},
  {id: 'beta', name: 'Beta', url: 'https://beta-api.travel-intelligence.com/'},
  {id: 'demo', name: 'Demo', url: 'https://demo-api.travel-intelligence.com/'}
];


function computeSandboxTitle() {
  var referrer = document.referrer.split('/').pop();
  var title = '';
  
  switch(referrer){
    case "authentication.html": title = 'Authentication'; break;
    case "search-look-hits.html": title = 'Search hits by look date API'; break;
    case "search-travel-hits.html": title = 'Search hits by travel date API'; break;  
    case "search-hit-evolutions.html": title = 'Search hit evolutions API'; break;
    case "search-hit-variations.html": title = 'Search hit variations API'; break;  
    case "booking-analysis-evolution.html": title = 'Travel Agency Booking Analysis API - evolution'; break;  
    case "booking-analysis-top-airlines.html": title = 'Travel Agency Booking Analysis API - top airlines'; break;
    case "booking-analysis-top-countries.html": title = 'Travel Agency Booking Analysis API - top countries'; break;  
    case "booking-analysis-top-onds.html": title = 'Travel Agency Booking Analysis API - top O&Ds'; break;
    case "booking-analysis-total.html": title = 'Travel Agency Booking Analysis API - total per agency'; break;
    case "por-search.html": title = 'Point of Reference search API'; break;
    case "booking-market-search.html": title = 'Booking Market search API'; break;
    case "pos-search.html": title = 'Point of Sales search API'; break;
    case "airline-search.html": title = 'Airline search API'; break;
    case "pricebenchmark_advancedpurchase.html": title = 'PriceBenchmark API - AdvancedPurchase'; break;
    case "pricebenchmark_bestpriceairline.html": title = 'PriceBenchmark API - BestPriceAirline'; break;
    case "pricebenchmark_farenegotiation.html": title = 'PriceBenchmark API - FareNegotiation'; break;
    case "pricebenchmark_fareparams.html": title = 'PriceBenchmark API - FareParams'; break;
    case "pricebenchmark_fareprojection.html": title = 'PriceBenchmark API - FareProjection'; break;
    case "pricebenchmark_faresnapshot.html": title = 'PriceBenchmark API - AdvancedPurchase'; break;
    case "pricebenchmark_purchasesnapshot.html": title = 'PriceBenchmark API - PurchaseSnapshot'; break;
    case "schedule-airline-top.html": title = 'Schedule Analysis API - Airline_Top'; break;
    case "schedule-flight-changes.html": title = 'Schedule Analysis API - Flight Changes'; break;
    case "schedule-flights.html": title = 'Schedule Analysis API - Flights'; break;
    case "schedule-slots.html": title = 'Schedule Analysis API - Slots'; break;
    case "refdata-airlines.html": title = 'Airline Reference API'; break;
    case "refdata-aircrafts.html": title = 'Aircraft Reference API'; break;
    case "refdata-airports.html": title = 'Airport Reference API'; break;
    case "refdata-cities.html": title = 'Cities Reference API'; break;
    case "refdata-countries.html": title = 'Countries Reference API'; break;
  }

  document.getElementById('title').innerHTML = '<div id="api"><h1>'+title+'</h1></div>';  
}

function computeForthNavigationBar() {
  var previousPage = document.referrer;
  html = '<div id="nav4" class="main-nav4"><ul> <li><a href="' + previousPage + '">Description</a></li> <li class="current"><a href="#">Sandbox</a></li> </ul></div>';
  document.getElementById('forthNavigationBar').innerHTML = html;  
}

function computeForm() {

  html =  '<table><tr><td><form id="formularSandbox"> <fieldset class="formular"> <legend>Environment</legend><p>Server endpoint:<br>';
  html += '<select name="env">';
  for (var i = 0; i < environments.length; i++) {
    var env = environments[i];
    var sel = (env.id == localStorage.getItem('env')) ? 'selected' : '';
    html += '<option value="'+env.id+'" '+sel+'>'+env.name+'</option>';
  }
  html += '</select></p>';
  html += '</fieldset><fieldset class="formular"><legend>Input Parameters</legend>';


  if(referrerContains("authentication.html")) {
    html += '<p>Email: *<br><input type="email" name="email" size=30 required placeholder="Email" title="Email"></p>'+
            '<p>Password: *<br><input type="password" name="password" size=30 required placeholder="Password" title="Password"></p>';

    html += '</fieldset> <p><button type="button" onClick="getResults();">Send</button></p> </form> </td> <td> <fieldset class="formular"> <legend>Result</legend>  <div id="result-container" class="code"></div>  </fieldset> </td> </tr> </table>';
  }
  else {
    //== FORM Search Analysis    
    if(referrerContains(["search-look-hits.html","search-travel-hits.html","search-hit-evolutions.html","search-hit-variations.html"])) {
      html += '<p>Market: *<br><input type="text" name="market" maxlength=2 required value="FR" placeholder="Market" title="2-letters IATA country code of the point of sale"></p>';
    }
    if(referrerContains(["search-look-hits.html","search-travel-hits.html"])) {
      html += '<p>Month: *<br><input type="text" name="month" maxlength=7 required value="2012-01" placeholder="Month (yyyy-mm)" title="Month of look date formatted as YYYY-MM"></p>';
    }
    if(referrerContains(["search-look-hits.html","search-travel-hits.html","search-hit-evolutions.html"])) {
      html += '<p>Origin:<br><input type="text" name="origin" maxlength=3 placeholder="Origin" title="3-letters IATA code of the departure city"></p>'+
              '<p>Destination:<br><input type="text" name="destination" maxlength=3 placeholder="Destination" title="3-letters IATA code of the arrival city"></p>';
    }
    if(referrerContains("search-travel-hits.html")) {
      html += '<p>Weekends:<br><input list="we_true" name="weekends" maxlength=4 placeholder="Only weekends?" title="Set to true to restrict on weekend trips"><datalist id="we_true"><option value="true"></datalist></p> ';
    }
    if(referrerContains("search-hit-variations.html")) {
      html += '<p>Month a: *<br><input type="text" name="month_a" maxlength=7 required value="2011-11" placeholder="Month a" title="Month of interest for the travel date (YYYY-MM)"></p>'+
              '<p>Month b: *<br><input type="text" name="month_b" maxlength=7 required value="2011-10" placeholder="Month b" title="Month to be compared with, as travel date (YYYY-MM)"></p>';
    }
    //== FORM Schedule Analysis
    
    if(referrerContains("schedule-airline-top.html")){
      html += '<p>Airline: *<br><input type="text" name="airline" maxlength=2 required value="AF" placeholder="IATA or *"></p>' +
              '<p>Start Date (YYYYMMDD)*:<br><input type="text" name="start" maxlength=8 minlength=8 required value="20140101" placeholder="YYYYMMDD"></p>'+
              '<p>End Date (YYYYMMDD)*:<br><input type="text" name="end" maxlength=8 minlength=8 required value="20140107" placeholder="YYYYMMDD"></p>'+
              '<p>Level:<br><select name="level"><option>city</option><option>country</option><option>airport</option></select></p>';
    }
 
    if(referrerContains("refdata-airlines.html")){
      html += '<p>Airline Code:<br><input type="text" name="code" value="AF,LH" placeholder="IATA or *"></p>';
    }
    if(referrerContains("refdata-aircrafts.html")){
      html += '<p>Aircraft Code:<br><input type="text" name="rest_obeject_id" maxlength=3 value="777" placeholder="IATA or nothing"></p>';
    }
    if(referrerContains("refdata-airports.html")){
      html += '<p>Airport Code:<br><input type="text" name="rest_obeject_id" maxlength=3 value="JFK" placeholder="IATA or nothing"></p>';
    }
    if(referrerContains("refdata-cities.html")){
      html += '<p>City Code:<br><input type="text" name="rest_obeject_id" maxlength=3 value="TYO" placeholder="IATA or nothing"></p>';
    }
    if(referrerContains("refdata-countries.html")){
      html += '<p>Country Code:<br><input type="text" name="rest_obeject_id" maxlength=2 value="NZ" placeholder="IATA or nothing"></p>';
    }
    
    
    //== FORM Booking Analysis    
    if(referrerContains(["booking-analysis-evolution.html","booking-analysis-top-airlines.html","booking-analysis-top-countries.html","booking-analysis-top-onds.html","booking-analysis-total.html"])) {
      html += '<p>Period: *<br><input type="text" name="booking_period" placeholder="Booking Period" title="to select the bookings that were performed during a period"><br><input type="text" name="departure_period" placeholder="Departure Period" title="to select the bookings for flights leaving during a period"></p> <p>Limit in days: <input type="number" name="limit_in_days" min=1 max=365 step=1 title="Number of days to consider from the start of the period"></p> <p>Origin:<br><input type="text" name="origin_city" maxlength=3 placeholder="Origin City" title="IATA code of the departure city of the O&D"> <br><input type="text" name="origin_port" maxlength=3 placeholder="Origin Airport" title="IATA code of the departure airport of the O&D"><br><input type="text" name="origin_country" maxlength=2 placeholder="Origin Country" title="IATA code of the departure country of the O&D"></p> <p>Destination:<br><input type="text" name="destination_city" maxlength=3 placeholder="Destination City" title="IATA code of the arrival city of the O&D"><br><input type="text" name="destination_port" maxlength=3 placeholder="Destination Airport" title="IATA code of the arrival airport of the O&D"><br><input type="text" name="destination_country" maxlength=2 placeholder="Destination Country" title="IATA code of the arrival country of the O&D"></p> <p>POS:<br><input type="text" name="pos_oid" placeholder="POS Office Id" title="Office ID of the point of sale"><br><input type="text" name="pos_country" maxlength=2 placeholder="POS Country" title="Country IATA code of the point of sale"></p> <p>Marketing Carrier:<br><input type="text" name="marketing_carrier" maxlength=3 placeholder="Marketing Carrier" title="IATA code of the marketing carrier"></p> <p>Cabin Class:<br><input type="text" name="cabin_class" maxlength=1 placeholder="Cabin Class" title="1-letter code for the cabin class"></p>';
    }
    if(referrerContains(["booking-analysis-top-airlines.html","booking-analysis-top-countries.html","booking-analysis-top-onds.html"])) {
      html += '<p>Sort by:<br><input list="sort" name="sort_by" placeholder="Sort by?" title="Agency types taken as sort criterion for top_onds, top_airlines and top_countries"><datalist id="sort"><option value="travel_agency"><option value="competition"><option value="market"></datalist></p>';
    }
    
    //== FORM Price Benchmark
    if(referrerContains(["pricebenchmark_fareparams.html","pricebenchmark_farenegotiation.html","pricebenchmark_advancedpurchase.html","pricebenchmark_bestpriceairline.html","pricebenchmark_fareprojection.html","pricebenchmark_faresnapshot.html","pricebenchmark_purchasesnapshot.html"])) {
      html += '<p>Fare or File Type: *<br><input list="fare_type" name="faretype" placeholder="Fare Type" title="Public or private fares to be queried"><br><input list="fare_type" name="filetype" placeholder="File Type" title="Public or private fares to be queried"><datalist id="fare_type"><option value="public"><option value="private"></datalist></p>';
    }
    if(referrerContains(["pricebenchmark_farenegotiation.html","pricebenchmark_advancedpurchase.html","pricebenchmark_bestpriceairline.html","pricebenchmark_fareprojection.html","pricebenchmark_faresnapshot.html","pricebenchmark_purchasesnapshot.html"])) {
      html += '<p>Customer: *<br><input type="text" name="customer" maxlength=20 placeholder="Customer" title="OfficeID to be queried" required></p> <p>Travel Start: *<br><input type="number" name="travel_start" maxlength=8 placeholder="YYYYMMDD" title="First travel start date to use. Format YYYYMMDD" required></p>';
    }
    if(referrerContains(["pricebenchmark_farenegotiation.html","pricebenchmark_advancedpurchase.html","pricebenchmark_bestpriceairline.html","pricebenchmark_fareprojection.html","pricebenchmark_faresnapshot.html"])) {
      html += '<p>Travel End: *<br><input type="number" name="travel_end" maxlength=8 placeholder="YYYYMMDD" title="Last travel start date to use. Format YYYYMMDD" required></p>';
    }
    if(referrerContains(["pricebenchmark_farenegotiation.html","pricebenchmark_advancedpurchase.html","pricebenchmark_bestpriceairline.html","pricebenchmark_fareprojection.html"])) {
      html += '<p>Advanced Purchase Days: *<br><input type="text" name="advancedpurchasedays" maxlength=20 placeholder="Advanced Purchase Days" title="Advanced purchases to query." required></p>';
    }
    if(referrerContains(["pricebenchmark_farenegotiation.html","pricebenchmark_advancedpurchase.html","pricebenchmark_bestpriceairline.html","pricebenchmark_purchasesnapshot.html"])) {
      html += '<p>Departure Week Days: *<br><input type="text" name="depweekdays" maxlength=20 placeholder="Departure Week Days" title="Can be used to reduce the results to specified week days (1-7, monday-sunday)." required></p>';
    }
    if(referrerContains(["pricebenchmark_advancedpurchase.html","pricebenchmark_bestpriceairline.html","pricebenchmark_fareprojection.html","pricebenchmark_faresnapshot.html","pricebenchmark_purchasesnapshot.html"])) {
      html += '<p>Origin: *<br><input type="text" name="origin" maxlength=3 placeholder="Origin" title="3-letters IATA code of the departure city" required></p> <p>Destination: *<br><input type="text" name="destination" maxlength=3 placeholder="Destination" title="3-letters IATA code of the arrival city" required></p> <p>Cabin Class: *<br><input type="text" name="cabinclass" maxlength=1 placeholder="Cabin Class" title="1-letter code for the cabin class" required></p> <p>Trip Duration:<br><input type="number" name="tripduration" placeholder="Trip Duration" title="Trip duration to be queried" required></p> <p>Airline:<br><input type="text" name="airline" placeholder="Airline" title="Airline code to be queried"></p>';
    }
    if(referrerContains("pricebenchmark_faresnapshot.html")) {
      html += '<p>Booking Start: *<br><input type="number" name="booking_start" maxlength=8 placeholder="YYYYMMDD" title="Pricing date to use. Format YYYYMMDD" required></p>';
    }
    if(referrerContains(["pricebenchmark_advancedpurchase.html","pricebenchmark_bestpriceairline.html"])) {
      html += '<p>Export:<br><input list="export_type" name="export" maxlength=3 placeholder="Export Type" title="Used to force CSV results to be returned. Default: JSON ifparameter omitted"><datalist id="export_type"><option value="csv"></datalist></p>';
    }
    if(referrerContains(["pricebenchmark_advancedpurchase.html","pricebenchmark_fareprojection.html","pricebenchmark_faresnapshot.html","pricebenchmark_purchasesnapshot.html"])) {
      html += '<p>Summary Type:<br><input list="summary_type_list" name="summary_type" maxlength=10 placeholder="Summary Type" title="Used to specify aggregation level (daily, monthly, quarterly) Default: daily"><datalist id="summary_type_list"><option value="daily"><option value="monthly"><option value="quarterly"></datalist></p>';
    }

    //= add token
    if(!referrerContains("authentication.html")) {
      html += '<p>Token: *<br><input type="text" name="auth_token" maxlength=20 required value="' + localStorage.getItem('authorisation_token') + '" placeholder="Authorisation Token" title="Token to get authorised access to the webservice"></p>';
    }
    
//    html += '<p><input type="hidden" name="format" required value="json"></p>';
    html += '</fieldset> <p><button type="button" onClick="getResults();">Send</button></p> </form> </td> <td>';
    html += '<fieldset class="formular"> <legend>URL</legend> <div id="url-container" class="code"></div> </fieldset><p></p>';
    html += '<fieldset class="formular"> <legend>HTTP Header</legend> <div id="header-container" class="code"></div></fieldset><p></p>';
    html += '<fieldset class="formular"> <legend>Result</legend> <div id="result-container" class="code"></div> </fieldset> </td> </tr> </table>';
  }
  document.getElementById('form').innerHTML = html;
}

function checkInputs() {
  var valid = true;
  var form = document.getElementById("formularSandbox");
  var linkBetweenPatternsAndFields = [
    [/^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/, ["email"]],
    [/^[A-z]{2}$/, ["market", "origin_country", "destination_country", "pos_country"]],
    [/^[A-z]{3}$/, ["origin", "destination", "origin_city", "origin_port", "destination_city", "destination_port"]],
    [/^[A-z0-9]$/, ["pos_oid", "faretype", "filetype", "customer", "export", "summary_type"]],
    [/^[A-z0-9]{2,3}$/, ["marketing_carrier", "airline"]],
    [/^[A-z]{1}$/, ["cabin_class", "cabinclass"]],
    [/^(true)$/, ["weekends"]],
    [/^[0-9]{1,3}$/, ["limit_in_days", "advancedpurchasedays", "depweekdays", "tripduration"]],
    [/^[0-9]{8}$/, ["travel_start", "travel_end", "booking_start"]],
    [/^(travel_agency|competition|market)$/, ["sort_by"]],
    [/^(20[0-9]{2}\-(0[1-9]|1[0-2]))$/, ["month", "month_a", "month_b"]],
    [/^((20[0-9]{2}(\,20[0-9]{2})?)|(20[0-9]{2}\-Q[1-4](\,20[0-9]{2}\-Q[1-4])?)|(20[0-9]{2}\-(0[1-9]|1[0-2])(\,20[0-9]{2}\-(0[1-9]|1[0-2]))?)|(20[0-9]{2}\-W[1-53](\,20[0-9]{2}\-W[1-53])?))$/, ["booking_period"]],
    [/^((20[0-9]{2}(\,20[0-9]{2})?)|(20[0-9]{2}\-Q[1-4](\,20[0-9]{2}\-Q[1-4])?)|(20[0-9]{2}\-(0[1-9]|1[0-2])(\,20[0-9]{2}\-(0[1-9]|1[0-2]))?)|(20[0-9]{2}\-W[1-53](\,20[0-9]{2}\-W[1-53])?)|(20[0-9]{2}\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01]) (\,20[0-9]{2}\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01]))?))$/, ["departure_period"]]
  ];
  //Loop over each pattern (email, 2-letters fields, etc) to be checked
  for (var i = 0; i < linkBetweenPatternsAndFields.length; i++) {
    var pattern = linkBetweenPatternsAndFields[i][0];
    var fieldsStringsArray = linkBetweenPatternsAndFields[i][1];
    //Loop over each field to be tested
    for (var j = 0; j < fieldsStringsArray.length; j++) {
      var field = form.elements[fieldsStringsArray[j]];
      //If the field exist in the current formular
      if(field != null) {
        //Filled field: test the format
        if(field.value!="") {
          if(!pattern.test(field.value)){
            highlight(field, true);
            valid = false;
          }else{
            highlight(field, false);
          }
        }
        //Empty field: check ifrequired
        else {
          if(field.required==true){
            highlight(field, true);
            valid = false;
          }else{
            highlight(field, false);
          }
        }
      }
    }
  }
  //Special check for the required field booking_period or departure_period, faretype or filetype
  var field_1, field_2;
  for (var i=0; i<2; i++)
  {
    if(i == 0) {
      field_1 = form.elements["booking_period"];
      field_2 = form.elements["departure_period"];
    }
    else {
      field_1 = form.elements["faretype"];
      field_2 = form.elements["filetype"];
    }

    if(field_1 != null && field_2 != null) {
      if((field_1.value == '' && field_2.value == '') || (field_1.value != '' && field_2.value != '')) {
        highlight(field_1, true);
        highlight(field_2, true);
        valid = false;
      }
      else {
        highlight(field_1, false);
        highlight(field_2, false);
      }
    }
  }

  return valid;
}

function highlight(field, error) {
  if(error) {
    field.style.borderColor = "#CE0058";
    field.style.borderStyle = "solid";
  }
  else {
    field.style.borderColor = "";
    field.style.borderStyle = "";
  }
}

function getEndpoint(env){
  for (var i = 0; i < environments.length; i++) {
    if(environments[i].id == env){
      return environments[i].url;
    }
  }
}

function referrerContains(search){
  if(search instanceof Array){
    for (i= 0; i < search.length; ++i) {
      if(document.referrer.indexOf(search[i]) != -1){
        return true;
      }
    }
  }else{
    return document.referrer.indexOf(search) != -1
  }
  return false;
}

function getResults() {
  if(!checkInputs()){
    return;
  }

  var form = document.getElementById("formularSandbox");
  var resultContainer = document.getElementById('result-container');
  var endpoint = getEndpoint(form.elements['env'].value);

  localStorage.setItem('env', form.elements['env'].value);

  if(referrerContains("authentication.html")) {
    // Get the inputed email and password
    var inputs = $.parseJSON('{"email":"' + form.elements["email"].value + '", "password":"' + form.elements["password"].value + '"}');
    // Post the http request
    $.post(endpoint + "api/session", inputs)
      .fail(function(jqXHR, textStatus, errorThrown) {
        resultContainer.innerHTML = '<span class="error">Authentication request failed! ' + errorThrown + '</span>';
      })
      .done(function(data) {
        var jsonString = JSON.stringify(data, null, '\t');
        resultContainer.innerHTML = jsonString;
        // Store the constant "authorisation_token" locally, for later reuse by all the forms
        localStorage.setItem('authorisation_token', data.auth_token);
      });
  }
  else {
    // If a token has been directly entered in the formular, store it locally in the constant "authorisation_token", for later reuse by all the forms
    if(form.elements["auth_token"].value != "") {
      localStorage.setItem('authorisation_token', form.elements["auth_token"].value);
    }
    // Build the url
    var url = endpoint;

    // API V1 REQUESTS
    if(referrerContains(["search-look-hits.html","search-travel-hits.html","search-hit-evolutions.html","search-hit-variations.html","booking-analysis-evolution.html","booking-analysis-top-airlines.html","booking-analysis-top-countries.html","booking-analysis-top-onds.html","booking-analysis-total.html","por-search.html","pos-search.html","airline-search.html","booking-market-search.html"])) {    
      url += 'api/v1/';
      if(referrerContains("search-look-hits.html")) {
        url += 'search_look_hits';
      }
      else if(referrerContains("search-travel-hits.html")) {
        url += 'search_travel_hits';
      }
      else if(referrerContains("search-hit-evolutions.html")) {
        url += 'search_hit_evolutions';
      }
      else if(referrerContains("search-hit-variations.html")) {
        url += 'search_hit_variations';
      }
      else if(referrerContains("booking-analysis-evolution.html")) {
        url += 'booking_agency_evolutions';
      }
      else if(referrerContains("booking-analysis-top-airlines.html")) {
        url += 'booking_agency_airlines';
      }
      else if(referrerContains("booking-analysis-top-countries.html")) {
        url += 'booking_agency_countries';
      }
      else if(referrerContains("booking-analysis-top-onds.html")) {
        url += 'booking_agency_onds';
      }
      else if(referrerContains("booking-analysis-total.html")) {
        url += 'booking_agency_totals';
      }
      else if(referrerContains("por_search.html")) {
        url += 'por_searches';
      }
      else if(referrerContains("pos_search.html")) {
        url += 'pos_searches';
      }
      else if(referrerContains("airline_search.html")) {
        url += 'airline_searches';
      }
      else if(referrerContains("booking-market-search.html")) {
        url += 'booking_market_searches';
      }
    }

    //REFERENCE DATA REQUESTS


    else if(referrerContains("refdata-airlines")) {
        url += 'api/airlines';
    }
    else if(referrerContains("refdata-aircrafts")) {
        url += 'api/aircraft';
    }
    else if(referrerContains("refdata-airports")) {
        url += 'api/airports';
    }
    else if(referrerContains("refdata-cities")) {
        url += 'api/cities';
    }
    else if(referrerContains("refdata-countries")) {
        url += 'api/countries';
    }


    // SCHEDULE REQUESTS
    else if(referrerContains(["schedule"])) {    
      url += "ti-schedule/api/";
      if(referrerContains("airline-top")) {
        url += 'airline_top';
      }
    }
    // PRICEBENCHMARK REQUESTS
    else if(referrerContains("pricebenchmark")) {    
      url += "ti-faremonitoring/api/";
      if(referrerContains("advancedpurchase.html")) {
        url += 'advancedpurchase';
      }
      else if(referrerContains("bestpriceairline.html")) {
        url += 'bestpriceairline';
      }
      else if(referrerContains("farenegotiation.html")) {
        url += 'farenegotiation';
      }
      else if(referrerContains("fareparams.html")) {
        url += 'fareparams';
      }
      else if(referrerContains("fareprojection.html")) {
        url += 'fareprojection';
      }
      else if(referrerContains("faresnapshot.html")) {
        url += 'faresnapshot';
      }
      else if(referrerContains("purchasesnapshot.html")) {
        url += 'purchasesnapshot';
      }
    }
    
    if(form.elements['rest_obeject_id']){
      url += '/' + form.elements['rest_obeject_id'].value;
    }
    url += "?";

    for (var i=0, j=0; i<form.length; i++)
    {
      var e = form.elements[i];
      if($.inArray(e.name, ["","env","rest_obeject_id","auth_token"]) < 0 && e.value != ""){
        if(j>0) {url += "&"}
        url += form.elements[i].name + "=";
        url += form.elements[i].value;
        j++;
      }
    }
    // Set the url in the corresponding frame

    var authToken = form.elements["auth_token"].value;  
    document.getElementById('url-container').innerHTML = url;
    document.getElementById('header-container').innerHTML = 'Authorization: Token ' + authToken;

    $.ajax({
      beforeSend: function(request) {
        request.setRequestHeader("Authorization", 'Token ' + authToken);
      },
      url: url,
      success: function(data) {
        var jsonString = JSON.stringify(data, null, '\t');
        resultContainer.innerHTML = jsonString;
      },
      error: function(jqXHR, textStatus, errorThrown) {
        resultContainer.innerHTML = '<span class="error">JSON request failed!  ' + errorThrown + '</span>';
      }
    })
  }
}

