$(document).ready(function(){
    $('#navbar').html(`
    <nav class="mt-3" style="position: fixed;z-index: 9;">
        <div class="custom-nav-brand">
            <a class="navbar-brand" href="index.html"><img src="images/logo.png" width="250"></a>
        </div>
        
        <ul class="nav nav-pills menu" style="margin-left: -30px;position: fixed;display: inline-flex;">
            <li class="nav-item cus-nav-item">
                <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item dropdown cus-nav-item">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown">About Us</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="profile.html">Profile</a></li>
                    <li><a class="dropdown-item" href="worldwide-coverage.html">Worldwide Coverage</a></li>
                    <li><a class="dropdown-item" href="">Resources Center  &raquo</a>
                        <ul class="submenu dropdown-menu shadow">
                            <li><a class="dropdown-item" href="licenses_and_associations.html"> Licenses and Associations</a></li>
                            <li><a class="dropdown-item" href="container_tracking.html"> Container Tracking</a></li>
                            <li><a class="dropdown-item" href="scac_code_list.html"> Ocean Carrier SCAC Code List </a></li>
                            <li><a class="dropdown-item" href="terms-and-conditions.html"> Terms and Conditions</a></li>
                         </ul>
                    </li>
                    <li><a class="dropdown-item" href="sustainability.html">Sustainability</a></li>
                    <li><a class="dropdown-item" href="careers.html">Careers</a></li>
                    <li><a class="dropdown-item" href="#">Sitemap</a></li>
                </ul>
              </li>
            <li class="nav-item cus-nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown">Our Services</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Ocean Freight  &raquo</a>
                        <ul class="submenu dropdown-menu">
                            <li><a class="dropdown-item" href=""> Ocean Freight Consolidation and Full Container Shipping</a></li>
                            <li><a class="dropdown-item" href=""> RORO Shipping</a></li>
                            <li><a class="dropdown-item" href=""> Overseas Car Shipping | International Car Shipping <br>| Export Cars from USA </a></li>
                         </ul>
                    </li>
                    <li><a class="dropdown-item" href="#">Air Freight Forwarding Solutions | Air Logistics and <br>Shipping Solutions</a></li>
                    <li><a class="dropdown-item" href="#">Breakbulk, Heavy-Lift and Project Cargo Logistics</a></li>
                    <li><a class="dropdown-item" href="#">Buyer’s Consolidation Services</a></li>
                    <li><a class="dropdown-item" href="#">Cargo Insurance</a></li>
                    <li><a class="dropdown-item" href="#">4PL Solutions – Contract Logistics and Supply Chain Management</a></li>
                    <li><a class="dropdown-item" href="#">E-Commerce Order Fulfillment, Shipping and Logistics</a></li>
                    <li><a class="dropdown-item" href="#">Import Customs Brokerage and Customs<br>Clearance Services</a></li>
                    <li><a class="dropdown-item" href="#">Transloading Warehouse Solutions in Los Angeles and Long Beach</a></li>
                    <li><a class="dropdown-item" href="#">Trucking, Road Freight, Rail and Drayage Services</a></li>
                    <li><a class="dropdown-item" href="#">Warehousing, Intermodal and Trucking <br>Logistics Services</a></li>
                </ul>
            </li>    
            <li class="nav-item cus-nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown">Industries</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Automotive</a></li>
                    <li><a class="dropdown-item" href="#">Beverages</a></li>
                    <li><a class="dropdown-item" href="#">Dried Fruit and Nuts, Seeds and Dried Milk Powders</a></li>
                    <li><a class="dropdown-item" href="#">Energy  – Oil, Gas, Mining and Power</a></li>
                    <li><a class="dropdown-item" href="#">Industrial Goods</a></li>
                    <li><a class="dropdown-item" href="#">Perishables</a></li>
                    <li><a class="dropdown-item" href="#">Pharma and Healthcare</a></li>
                    <li><a class="dropdown-item" href="#">Retail and FMCG</a></li>
                    <li><a class="dropdown-item" href="#">Yachts and Boats</a></li>
                </ul>
            </li> 
            <li class="nav-item cus-nav-item">
                <a class="nav-link" href="#">Blog</a>
            </li> 
            <li class="nav-item cus-nav-item">
                <a class="nav-link" href="contact-us.html">Contact Us</a>
            </li> 
        </ul>
    </nav>
    <nav class="header-nav d-none">
        <a href="#0" class="header-nav__close" title="close"><span>Close</span></a>
            <div class="header-nav__content">
                <h3>Navigation</h3>
                <ul class="header-nav__list">
                    <li><a href="index.html">Home</a></li>
                    <li>
                        <a data-toggle="collapse" data-target="#AboutUs">About Us
                            <i class="fa fa-angle-down caret"></i>
                        </a>
                        <ul id="AboutUs" class="collapse mob_dropdown">
                            <li><a href="profile.html">Profile</a></li>
                            <li><a href="worldwide-coverage.html">Worldwide Coverage</a></li>
                            <li>
                                <a data-toggle="collapse" data-target="#RCenter">Resources Center 
                                    <i class="fa fa-angle-down caret"></i>
                                </a>
                                <ul id="RCenter" class="collapse mob_dropdown">
                                    <li><a href="licenses_and_associations.html"> Licenses and Associations</a></li>
                                    <li><a href="container_tracking.html"> Container Tracking</a></li>
                                    <li><a href="scac_code_list.html"> Ocean Carrier SCAC Code List </a></li>
                                    <li><a href="terms-and-conditions.html"> Terms and Conditions</a></li>
                                </ul>
                            </li>
                            <li><a href="sustainability.html">Sustainability</a></li>
                            <li><a href="careers.html">Careers</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </li>
                    <li>
                        <a data-toggle="collapse" data-target="#OurServices">Our Services 
                            <i class="fa fa-angle-down caret"></i>
                        </a>
                        <ul id="OurServices" class="collapse mob_dropdown">
                            <li>
                                <a data-toggle="collapse" data-target="#OceanFreight">Ocean Freight 
                                    <i class="fa fa-angle-down caret"></i>
                                </a>
                                <ul id="OceanFreight" class="collapse mob_dropdown">
                                    <li><a href=""> Ocean Freight Consolidation and Full Container Shipping</a></li>
                                    <li><a href=""> RORO Shipping</a></li>
                                    <li><a href=""> Overseas Car Shipping | International Car Shipping <br>| Export Cars from USA </a></li>
                                </ul>
                            </li>
                            <li><a href="#">Air Freight Forwarding Solutions | Air Logistics and <br>Shipping Solutions</a></li>
                            <li><a href="#">Breakbulk, Heavy-Lift and Project Cargo Logistics</a></li>
                            <li><a href="#">Buyer’s Consolidation Services</a></li>
                            <li><a href="#">Cargo Insurance</a></li>
                            <li><a href="#">4PL Solutions – Contract Logistics and Supply Chain Management</a></li>
                            <li><a href="#">E-Commerce Order Fulfillment, Shipping and Logistics</a></li>
                            <li><a href="#">Import Customs Brokerage and Customs<br>Clearance Services</a></li>
                            <li><a href="#">Transloading Warehouse Solutions in Los Angeles and Long Beach</a></li>
                            <li><a href="#">Trucking, Road Freight, Rail and Drayage Services</a></li>
                            <li><a href="#">Warehousing, Intermodal and Trucking <br>Logistics Services</a></li>
                        </ul>
                    </li>    
                    <li>
                        <a data-toggle="collapse" data-target="#industries">Industries 
                            <i class="fa fa-angle-down caret"></i>
                        </a>
                        <ul id="industries" class="collapse mob_dropdown">
                            <li><a href="#">Automotive</a></li>
                            <li><a href="#">Beverages</a></li>
                            <li><a href="#">Dried Fruit and Nuts, Seeds and Dried Milk Powders</a></li>
                            <li><a href="#">Energy  – Oil, Gas, Mining and Power</a></li>
                            <li><a href="#">Industrial Goods</a></li>
                            <li><a href="#">Perishables</a></li>
                            <li><a href="#">Pharma and Healthcare</a></li>
                            <li><a href="#">Retail and FMCG</a></li>
                            <li><a href="#">Yachts and Boats</a></li>
                        </ul>
                    </li> 
                    <li><a href="#">Blog</a></li> 
                    <li><a href="contact-us.html">Contact Us</a></li> 
                </ul>            
            </div> <!-- end header-nav__content -->
        </nav> <!-- end header-nav -->
        <a class="header-menu-toggle opaque d-none" href="#0">
            <span class="header-menu-icon"></span>
        </a>
        <script>
        (function($){
            var clOffCanvas=function(){
                var menuTrigger=$('.header-menu-toggle'),
                    nav=$('.header-nav'),
                    closeButton=nav.find('.header-nav__close'),
                    siteBody=$('body'),
                    mainContents=$('section, footer');
                menuTrigger.on('click',function(e){
                    e.preventDefault();
                    siteBody.toggleClass('menu-is-open');
                });
                closeButton.on('click',function(e){
                    e.preventDefault();
                    menuTrigger.trigger('click');
                });
                siteBody.on('click',function(e){
                    if(!$(e.target).is('.header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span, .header-nav__list li a, .header-nav__list li a i')){
                        siteBody.removeClass('menu-is-open');
                    }
                });
            };
            (function ssInit(){
                clOffCanvas();
            })();
        })(jQuery);
        </script>
    `)
    $('.footer').html(`
    <div class="container">
          <div class="row">
            <div class="col-lg-4 col-xs-12 about-company text-center">
              <img src="images/trust.png" width="230">
              <p>
                  <a href="https://www.facebook.com/americanexportlines" class="white-hover"><i class="fab fa-facebook-square mr-1"></i></i></a>
                  <a href="https://www.linkedin.com/company/american-export-lines-ael-?trk=biz-companies-cym" class="white-hover"><i class="fab fa-linkedin"></i></a>
              </p>
            </div>
            <div class="col-lg-4 col-xs-12 links mb-3">
              <h4 class="mt-lg-0 mt-sm-3">Links</h4>
                <ul class="m-0 p-0">
                  <li><a href="#" class="text-dark">- Terms and Conditions of Service</a></li>
                  <li><a href="#"class="text-dark">- Bill of Lading Contract Terms and Conditions</a></li>
                  <li><a href="#"class="text-dark">- Brokerage Terms and Conditions of Contract</a></li>
                  <li><a href="#"class="text-dark">- Warehouse Receipt Terms and Conditions of Contract</a></li>
                  <li><a href="#"class="text-dark">- IATA Resolution 600b</a></li>
                  <li><a href="#"class="text-dark">- US Customs and Border Protection’s Random Inspections</a></li>
                  <li><a href="#"class="text-dark">- HTS Codes, Duties, and Binding Rulings</a></li>
                  <li><a href="#"class="text-dark">- Website Terms and Conditions of Use</a></li>
                </ul>
            </div>
            <div class="col-lg-4 col-xs-12 location">
              <h4 class="mt-lg-0 mt-sm-4">Location</h4>
              <p>American Export Lines
                13500 S. Figueroa St.
                Los Angeles, CA 90061</p>
              <p class="mb-0">Tel: +1 (310) 523 2300</p>
              <p class="mb-0">Toll Free: (800) 874 4748</p>
              <p>Fax: +1 (310) 515 5744</p>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col copyright">
              <p class=""><small>Copyright © 2021 American Export Lines. All rights reserved. Developed By <b><a class="text-dark" href="http://maxwaretechs.com">MaxWareTechs</a></b></small></p>
            </div>
          </div>
        </div>
    `)
})