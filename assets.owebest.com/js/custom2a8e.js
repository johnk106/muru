var c1=!1,c2=!1,newWindowWidth,childwidth;$(document).ready(function(){var a='<option value="">Select Country</option> <option value="Aruba">Aruba</option> <option value="Afghanistan">Afghanistan</option> <option value="Angola">Angola</option> <option value="Anguilla">Anguilla</option> <option value="Åland Islands">Åland Islands</option> <option value="Albania">Albania</option> <option value="Andorra">Andorra</option> <option value="United Arab Emirates">United Arab Emirates</option> <option value="Argentina">Argentina</option> <option value="Armenia">Armenia</option> <option value="American Samoa">American Samoa</option> <option value="Antarctica">Antarctica</option> <option value="French Southern Territories">French Southern Territories</option> <option value="Antigua and Barbuda">Antigua and Barbuda</option> <option value="Australia">Australia</option> <option value="Austria">Austria</option> <option value="Azerbaijan">Azerbaijan</option> <option value="Burundi">Burundi</option> <option value="Belgium">Belgium</option> <option value="Benin">Benin</option> <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option> <option value="Burkina Faso">Burkina Faso</option> <option value="Bangladesh">Bangladesh</option> <option value="Bulgaria">Bulgaria</option> <option value="Bahrain">Bahrain</option> <option value="Bahamas">Bahamas</option> <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option> <option value="Saint Barthélemy">Saint Barthélemy</option> <option value="Belarus">Belarus</option> <option value="Belize">Belize</option> <option value="Bermuda">Bermuda</option> <option value="Bolivia, Plurinational State of">Bolivia, Plurinational State of</option> <option value="Brazil">Brazil</option> <option value="Barbados">Barbados</option> <option value="Brunei Darussalam">Brunei Darussalam</option> <option value="Bhutan">Bhutan</option> <option value="Bouvet Island">Bouvet Island</option> <option value="Botswana">Botswana</option> <option value="Central African Republic">Central African Republic</option> <option value="Canada">Canada</option> <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option> <option value="Switzerland">Switzerland</option> <option value="Chile">Chile</option> <option value="China">China</option> <option value="Côte d&#039;Ivoire">Côte d&#039;Ivoire</option> <option value="Cameroon">Cameroon</option> <option value="Congo, the Democratic Republic of the">Congo, the Democratic Republic of the</option> <option value="Congo">Congo</option> <option value="Cook Islands">Cook Islands</option> <option value="Colombia">Colombia</option> <option value="Comoros">Comoros</option> <option value="Cape Verde">Cape Verde</option> <option value="Costa Rica">Costa Rica</option> <option value="Cuba">Cuba</option> <option value="Curaçao">Curaçao</option> <option value="Christmas Island">Christmas Island</option> <option value="Cayman Islands">Cayman Islands</option> <option value="Cyprus">Cyprus</option> <option value="Czech Republic">Czech Republic</option> <option value="Germany">Germany</option> <option value="Djibouti">Djibouti</option> <option value="Dominica">Dominica</option> <option value="Denmark">Denmark</option> <option value="Dominican Republic">Dominican Republic</option> <option value="Algeria">Algeria</option> <option value="Ecuador">Ecuador</option> <option value="Egypt">Egypt</option> <option value="Eritrea">Eritrea</option> <option value="Western Sahara">Western Sahara</option> <option value="Spain">Spain</option> <option value="Estonia">Estonia</option> <option value="Ethiopia">Ethiopia</option> <option value="Finland">Finland</option> <option value="Fiji">Fiji</option> <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option> <option value="France">France</option> <option value="Faroe Islands">Faroe Islands</option> <option value="Micronesia, Federated States of">Micronesia, Federated States of</option> <option value="Gabon">Gabon</option> <option value="United Kingdom">United Kingdom</option> <option value="Georgia">Georgia</option> <option value="Guernsey">Guernsey</option> <option value="Ghana">Ghana</option> <option value="Gibraltar">Gibraltar</option> <option value="Guinea">Guinea</option> <option value="Guadeloupe">Guadeloupe</option> <option value="Gambia">Gambia</option> <option value="Guinea-Bissau">Guinea-Bissau</option> <option value="Equatorial Guinea">Equatorial Guinea</option> <option value="Greece">Greece</option> <option value="Grenada">Grenada</option> <option value="Greenland">Greenland</option> <option value="Guatemala">Guatemala</option> <option value="French Guiana">French Guiana</option> <option value="Guam">Guam</option> <option value="Guyana">Guyana</option> <option value="Hong Kong">Hong Kong</option> <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option> <option value="Honduras">Honduras</option> <option value="Croatia">Croatia</option> <option value="Haiti">Haiti</option> <option value="Hungary">Hungary</option> <option value="Indonesia">Indonesia</option> <option value="Isle of Man">Isle of Man</option> <option value="India">India</option> <option value="British Indian Ocean Territory">British Indian Ocean Territory</option> <option value="Ireland">Ireland</option> <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option> <option value="Iraq">Iraq</option> <option value="Iceland">Iceland</option> <option value="Israel">Israel</option> <option value="Italy">Italy</option> <option value="Jamaica">Jamaica</option> <option value="Jersey">Jersey</option> <option value="Jordan">Jordan</option> <option value="Japan">Japan</option> <option value="Kazakhstan">Kazakhstan</option> <option value="Kenya">Kenya</option> <option value="Kyrgyzstan">Kyrgyzstan</option> <option value="Cambodia">Cambodia</option> <option value="Kiribati">Kiribati</option> <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> <option value="Korea, Republic of">Korea, Republic of</option> <option value="Kuwait">Kuwait</option> <option value="Lao People&#039;s Democratic Republic">Lao People&#039;s Democratic Republic</option> <option value="Lebanon">Lebanon</option> <option value="Liberia">Liberia</option> <option value="Libya">Libya</option> <option value="Saint Lucia">Saint Lucia</option> <option value="Liechtenstein">Liechtenstein</option> <option value="Sri Lanka">Sri Lanka</option> <option value="Lesotho">Lesotho</option> <option value="Lithuania">Lithuania</option> <option value="Luxembourg">Luxembourg</option> <option value="Latvia">Latvia</option> <option value="Macao">Macao</option> <option value="Saint Martin (French part)">Saint Martin (French part)</option> <option value="Morocco">Morocco</option> <option value="Monaco">Monaco</option> <option value="Moldova, Republic of">Moldova, Republic of</option> <option value="Madagascar">Madagascar</option> <option value="Maldives">Maldives</option> <option value="Mexico">Mexico</option> <option value="Marshall Islands">Marshall Islands</option> <option value="Macedonia, the former Yugoslav Republic of">Macedonia, the former Yugoslav Republic of</option> <option value="Mali">Mali</option> <option value="Malta">Malta</option> <option value="Myanmar">Myanmar</option> <option value="Montenegro">Montenegro</option> <option value="Mongolia">Mongolia</option> <option value="Northern Mariana Islands">Northern Mariana Islands</option> <option value="Mozambique">Mozambique</option> <option value="Mauritania">Mauritania</option> <option value="Montserrat">Montserrat</option> <option value="Martinique">Martinique</option> <option value="Mauritius">Mauritius</option> <option value="Malawi">Malawi</option> <option value="Malaysia">Malaysia</option> <option value="Mayotte">Mayotte</option> <option value="Namibia">Namibia</option> <option value="New Caledonia">New Caledonia</option> <option value="Niger">Niger</option> <option value="Norfolk Island">Norfolk Island</option> <option value="Nigeria">Nigeria</option> <option value="Nicaragua">Nicaragua</option> <option value="Niue">Niue</option> <option value="Netherlands">Netherlands</option> <option value="Norway">Norway</option> <option value="Nepal">Nepal</option> <option value="Nauru">Nauru</option> <option value="New Zealand">New Zealand</option> <option value="Oman">Oman</option> <option value="Pakistan">Pakistan</option> <option value="Panama">Panama</option> <option value="Pitcairn">Pitcairn</option> <option value="Peru">Peru</option> <option value="Philippines">Philippines</option> <option value="Palau">Palau</option> <option value="Papua New Guinea">Papua New Guinea</option> <option value="Poland">Poland</option> <option value="Puerto Rico">Puerto Rico</option> <option value="Korea, Democratic People&#039;s Republic of">Korea, Democratic People&#039;s Republic of</option> <option value="Portugal">Portugal</option> <option value="Paraguay">Paraguay</option> <option value="Palestine, State of">Palestine, State of</option> <option value="French Polynesia">French Polynesia</option> <option value="Qatar">Qatar</option> <option value="Réunion">Réunion</option> <option value="Romania">Romania</option> <option value="Russian Federation">Russian Federation</option> <option value="Rwanda">Rwanda</option> <option value="Saudi Arabia">Saudi Arabia</option> <option value="Sudan">Sudan</option> <option value="Senegal">Senegal</option> <option value="Singapore">Singapore</option> <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option> <option value="Saint Helena, Ascension and Tristan da Cunha">Saint Helena, Ascension and Tristan da Cunha</option> <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option> <option value="Solomon Islands">Solomon Islands</option> <option value="Sierra Leone">Sierra Leone</option> <option value="El Salvador">El Salvador</option> <option value="San Marino">San Marino</option> <option value="Somalia">Somalia</option> <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option> <option value="Serbia">Serbia</option> <option value="South Sudan">South Sudan</option> <option value="Sao Tome and Principe">Sao Tome and Principe</option> <option value="Suriname">Suriname</option> <option value="Slovakia">Slovakia</option> <option value="Slovenia">Slovenia</option> <option value="Sweden">Sweden</option> <option value="Swaziland">Swaziland</option> <option value="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</option> <option value="Seychelles">Seychelles</option> <option value="Syrian Arab Republic">Syrian Arab Republic</option> <option value="Turks and Caicos Islands">Turks and Caicos Islands</option> <option value="Chad">Chad</option> <option value="Togo">Togo</option> <option value="Thailand">Thailand</option> <option value="Tajikistan">Tajikistan</option> <option value="Tokelau">Tokelau</option> <option value="Turkmenistan">Turkmenistan</option> <option value="Timor-Leste">Timor-Leste</option> <option value="Tonga">Tonga</option> <option value="Trinidad and Tobago">Trinidad and Tobago</option> <option value="Tunisia">Tunisia</option> <option value="Turkey">Turkey</option> <option value="Tuvalu">Tuvalu</option> <option value="Taiwan, Province of China">Taiwan, Province of China</option> <option value="Tanzania, United Republic of">Tanzania, United Republic of</option> <option value="Uganda">Uganda</option> <option value="Ukraine">Ukraine</option> <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option> <option value="Uruguay">Uruguay</option> <option value="United States">United States</option> <option value="Uzbekistan">Uzbekistan</option> <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option> <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option> <option value="Venezuela, Bolivarian Republic of">Venezuela, Bolivarian Republic of</option> <option value="Virgin Islands, British">Virgin Islands, British</option> <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option> <option value="Viet Nam">Viet Nam</option> <option value="Vanuatu">Vanuatu</option> <option value="Wallis and Futuna">Wallis and Futuna</option> <option value="Samoa">Samoa</option> <option value="Yemen">Yemen</option> <option value="South Africa">South Africa</option> <option value="Zambia">Zambia</option> <option value="Zimbabwe">Zimbabwe</option>';$("#country").click(function(){c1==!1&&(c1=!0,$("#country").html(a))}),$("#country1").click(function(){c2==!1&&(c2=!0,$("#country1").html(a))}),$("#country").focus(function(){c1==!1&&(c1=!0,$("#country").html(a))}),$("#country1").focus(function(){c2==!1&&(c2=!0,$("#country1").html(a))}),$(window).on("load",function(a){b()}),b();function b(){$(this).scrollTop()>=1?$("#webheader").addClass('is-sticky'):$("#webheader").removeClass('is-sticky'),$(window).scroll(function(){$(this).scrollTop()>=1?$("#webheader").addClass('is-sticky'):$("#webheader").removeClass('is-sticky')})}$(".webnav_toggle").click(function(){$(this).toggleClass("toggled"),$("body").toggleClass("fullmenu-open")})}),$(document).ready(function(){$('.hero-banner').owlCarousel({nav:!1,dots:!0,loop:!1,touchDrag:!0,mouseDrag:!0,margin:0,items:1,responsive:{}}),$('.testimonial-owl').owlCarousel({nav:!1,dots:!1,loop:!1,touchDrag:!0,mouseDrag:!0,autoplay:!0,rewind:!0,smartSpeed:800,autoplayTimeout:3e3,stagePadding:0,margin:20,items:1,responsive:{0:{items:1},768:{items:2},992:{items:3},1200:{margin:40,items:3}}})}),$(document).ready(function(){$(".mailBox").click(function(){$(this).toggleClass("open"),$("body").addClass("body_open_pop"),$(".callBox").removeClass("open"),$(".skypeBox").removeClass("open")}),$(".callBox").click(function(){$(this).toggleClass("open"),$("body").addClass("body_open_pop"),$(".mailBox").removeClass("open"),$(".skypeBox").removeClass("open")}),$(".skypeBox").click(function(){$(this).toggleClass("open"),$("body").addClass("body_open_pop"),$(".mailBox").removeClass("open"),$(".callBox").removeClass("open")}),$(".bodybox_open_pop").click(function(){$("body").removeClass("body_open_pop"),$(".mailBox").removeClass("open"),$(".callBox").removeClass("open"),$(".skypeBox").removeClass("open")}),$(".custom-file-input").change(function(){var a=this.files[0].name;$(this).parents('div.custom-file').find('label').text(a)})}),$(function(){$("#get_quote_form, #internship_form, #wpcf7-f2204-o1").on("submit",function(){var a=$(this);return a.find(".invalid-feedback").remove(),a.find(".is-invalid").removeClass("is-invalid"),a.find(".wpcf7-response-output").html('<img src="https://assets.owebest.com/img/ajax-loader.gif" />'),$.ajax({url:$(this).attr('action'),type:"POST",data:new FormData(this),contentType:!1,cache:!1,processData:!1,dataType:"json",success:function(b){a.find(".wpcf7-response-output").html(''),b.invalids&&$.each(b.invalids,function(c,b){a.find(b.into).append('<div class="invalid-feedback">'+b.message+'</div>'),a.find(b.into).find('.wpcf7-form-control').addClass("is-invalid")}),b.mailSent?b.onSentOk&&$.each(b.onSentOk,function(b,a){eval(a)}):b.onSentOk&&$.each(b.onSentOk,function(b,a){eval(a)})}}),!1})}),newWindowWidth=$(window).width(),newWindowWidth>=768&&(childwidth=$(".mega-menu").outerWidth(),console.log(childwidth),$('.custom_scroll').css('width',childwidth-280)),$(window).width()<=768&&$(".custom_scroll").removeClass("span"),jQuery(document).ready(function(){screen.width>=768&&($("ul.menu > li:first-child").addClass("orange_active"),$(".mega-menu-child>.sub-menu>li:first-child").addClass("orange_active"),$(".mega-menu-child>.sub-menu>li:first-child .custom_scroll").addClass("show_this_menu"),$("ul.menu > li").mouseenter(function(){$("ul.menu > li > ul.sub-menu").removeClass("show_this_menu"),$(this).find("ul.sub-menu").addClass("show_this_menu"),$("ul.menu > li").removeClass("orange_active"),$(this).addClass("orange_active")}),$(".mega-menu-child>ul>li").mouseenter(function(){$(this).parent().find(".custom_scroll").removeClass("show_this_menu"),$(this).find(".custom_scroll").addClass("show_this_menu"),$(this).parent().find(">li.menu-item").removeClass("orange_active"),$(this).addClass("orange_active")})),jQuery('.webnav_toggle').click(function(){$(this)(".webnav_toggle").toggleClass("toggled"),$("body").toggleClass("menu_open"),$("ul.menu > li > ul.sub-menu").removeClass("show_this_menu"),$("li.firstchild_open").find("ul.sub-menu").addClass("show_this_menu")}),screen.width<991&&($("ul.menu > li.firstchild_open").addClass("orange_active"),jQuery('.menu-main-menu li').click(function(){jQuery(this).hasClass("orange_active")?jQuery(this).removeClass("orange_active"):(jQuery('.menu-main-menu li').hasClass('orange_active')&&jQuery('.menu-main-menu li').removeClass('orange_active'),jQuery(this).addClass("orange_active"))}))});function updateisotop(){var a=$('#masonry'),b=function(){var c=a.width(),d=1,b=0;return b},c=function(){a.isotope({resizable:!0,itemSelector:'.masonry-main .masonry-item',masonry:{columnWidth:b(),gutterWidth:15}})};c(),$(".hover-direction").length!=0&&$('.portfolio-item').directionalHover()}function updateisotop(){var a=$('#masonry'),b=function(){var c=a.width(),d=1,b=0;return b},c=function(){a.isotope({resizable:!0,itemSelector:'.masonry-main .masonry-item',masonry:{columnWidth:b(),gutterWidth:15}})};c(),$(".hover-direction").length!=0&&$('.portfolio-item').directionalHover()}$(function(){$("a.ajaxCall").click(function(){var b=parseInt($(this).data('maxpage')),a=parseInt($(this).attr('data-page'))+1,c;return $(this).attr('data-page',a),b>=a?(c=$('#masonry').isotope({itemSelector:'.masonry-main .masonry-item'}),$.ajax({url:'/ajaxdata/our-portfolio?page='+a,success:function(e){var d=$(e);c.append(d).isotope('appended',d),$('.portfolio-item').directionalHover(),a=a+1,b>a&&$("a.ajaxCall").addClass('hide')}})):$(this).addClass('hide'),!1}),$(".isotope-2").length!=0&&jQuery(window).on("load resize",function(a){updateisotop()}),$('.dash-toogle-btn').click(function(){$('.widget-archives').slideToggle()});var a=0;$(window).scroll(function(){if($('#counter').length==1){var b=$('#counter').offset().top-window.innerHeight;a==0&&$(window).scrollTop()>b&&($('.count').each(function(){var a=$(this),b=a.attr('data-count');$({countNum:a.text()}).animate({countNum:b},{duration:3e3,easing:'swing',step:function(){a.text(Math.floor(this.countNum))},complete:function(){a.text(this.countNum)}})}),a=1)}})})