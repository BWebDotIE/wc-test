(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"pageContainer\" id=\"aboutPage\">\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-12 col-sm-12 col-md-12 offset-lg-1 col-lg-10 offset-xl-1 col-xl-10 noPadding\">\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6\">\r\n          <h2>Hello From Wood Concepts</h2>\r\n          <p>\r\n            Wood Concepts is Ireland’s largest distributor of timber products. From builders’ grade to decking, softwood, scaffolding, hardwood, flooring, specialist fire retardant products and everything in between, we have been supplying the trade for over 30 years.\r\n          </p>\r\n\r\n          <p>\r\n            Our products can be seen in commercial buildings and homes as beautifully finished flooring, fencing and decking or behind the scenes as joists, roof truss and sub structures.\r\n          </p>\r\n\r\n          <p>\r\n            We partner with some of the best timber manufacturers in the world to bring world leading brands to Ireland. But because we know timber and the trade inside and out, we have also developed our own branded products designed specifically to offer the best value and most reliable timber in the country.\r\n          </p>\r\n          <p>\r\n            We are constantly looking for new products to bring to the market so we maintain our reputation as innovators. We anticipate the needs of our customers by keeping up to date with world trends and bringing labour saving and cost effective solutions to them.\r\n          </p>\r\n\r\n\r\n          <p>\r\n            At Wood Concepts we support sustainable timber development, we are a responsible purchaser and our products are certified.  We are also a member of the Timber Federation and Trada.\r\n          </p>\r\n\r\n          <p>\r\n            If you are planning or specifying a project and would like to discuss any of our products please get in touch.\r\n          </p>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6\">\r\n\r\n          <div class=\"aboutPageImage\">\r\n            <img src=\"../../assets/images/about/wood_concepts_truck.jpg\" />\r\n          </div>\r\n\r\n        </div>\r\n      </div><!--/row-->\r\n    </div><!--outer Col-->\r\n\r\n  </div><!--/outer row-->\r\n</div><!--/pageContainer-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n<!--Favicon (generated at https://realfavicongenerator.net )\r\n<link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"/apple-touch-icon.png\">\r\n<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/favicon-32x32.png\">\r\n<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/favicon-16x16.png\">\r\n<link rel=\"manifest\" href=\"/site.webmanifest\">\r\n<link rel=\"mask-icon\" href=\"/safari-pinned-tab.svg\" color=\"#5bbad5\">\r\n<meta name=\"msapplication-TileColor\" content=\"#da532c\">\r\n<meta name=\"theme-color\" content=\"#ffffff\">-->\r\n\r\n<div id=\"entirePage\" ng-controller=\"ScrollController\">\r\n  <!--not given container-fluid class so that the background colour won't have padding-->\r\n  <!--NavBar-->\r\n  <div class=\"row justify-content-center\" id=\"topRow\">\r\n\r\n    <div class=\"col-8 col-sm-7 col-md-3 col-lg-3 col-xl-3\" id=\"logoCol\">\r\n      <a href=\"welcome\">\r\n        <img id=\"wcLogo\" src=\"../assets/wc_logo/WC logo Small No Background.png\" />\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 offset-md-1 offset-lg-2 offset-xl-3 noPadding centerText contactCol\" id=\"contactCol1\">\r\n      <!--above had class of contactCol-->\r\n      <a href=\"mailto:tms@tms.ie\">\r\n        <span>\r\n          <i class=\"fa fa-envelope-o fa-lg\" aria-hidden=\"true\"></i>\r\n          <span class=\"contactText\">\r\n            <span [innerHTML]=\"emailAddress\"></span>\r\n          </span>\r\n        </span>\r\n      </a>\r\n    </div>\r\n\r\n   \r\n    <div class=\"col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 noPadding centerText contactCol\" id=\"contactCol2\">\r\n      <!--above had class of col-sm-6-->\r\n      <a href=\"callto:0035318408388\">\r\n        <span>\r\n          <i class=\"fa fa-phone fa-lg\" aria-hidden=\"true\"></i>&nbsp;\r\n          <span class=\"contactText\">(01)&nbsp;840&nbsp;8388</span>\r\n        </span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"allContentUnderNavBar\">\r\n\r\n    <!--PROJECTS\r\n    <div ng-controller=\"ChangeArrowsAccordionSectionsController\">-->\r\n\r\n    <div class=\"row .no-gutters\">\r\n\r\n      <div class=\"scrollmenu\">\r\n        <!--Products-->\r\n        <!--<a data-toggle=\"collapse\" href=\"#collapsibleProjectsDiv\" aria-expanded=\"false\" aria-controls=\"collapsibleProjectsDiv\">-->\r\n\r\n\r\n        <a class=\"\" [routerLink]=\" ['/welcome']\">\r\n          Home\r\n        </a>\r\n\r\n        <a class=\"\" [routerLink]=\" ['/products']\">\r\n          Products\r\n          <!--<i id=\"productsChevron\" class=\"fa fa-lg fa-chevron-down pull-right\" aria-hidden=\"true\"></i>-->\r\n          <!--Glyphs not longer supported in BS4<span id=\"projectsMoreLessTriangle\" class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"false\"></span>-->\r\n        </a>\r\n        <!-- </a>-->\r\n\r\n        <a class=\"\" [routerLink]=\" ['/sustainability']\">\r\n          Sustainability\r\n          <!--<span id=\"productsMoreLessTriangle\" class=\"glyphicon glyphicon-menu-down pull-right\" aria-hidden=\"true\"></span>-->\r\n        </a>\r\n\r\n        <a class=\"\" [routerLink]=\" ['/about']\">\r\n          About\r\n        </a>\r\n        <!--<span id=\"productsMoreLessTriangle\" class=\"glyphicon glyphicon-menu-down pull-right\" aria-hidden=\"true\"></span>-->\r\n\r\n        <a class=\"\" [routerLink]=\" ['/blog']\">\r\n          Blog\r\n        </a>\r\n\r\n        <a class=\"\" [routerLink]=\" ['/contact']\">\r\n          Contact\r\n          <!--<span id=\"productsMoreLessTriangle\" class=\"glyphicon glyphicon-menu-down pull-right\" aria-hidden=\"true\"></span>-->\r\n        </a>\r\n      </div>\r\n\r\n    </div><!--/row-->\r\n\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\" id=\"routerContainer\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\">\r\n        <app-footer></app-footer>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <!--Move the below to it's own component-->\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!--/entirePage-->\r\n<!-- K's version\r\n    <div style=\"text-align:center\">\r\n  <div>\r\n    <nav class='navbar navbar-default'>\r\n      <div class='container-fluid'>\r\n        <a class='navbar-brand'>{{pageTitle}}</a>\r\n        <ul class='nav navbar-nav'>\r\n          <li><a [routerLink]=\"['/welcome']\">Home From app.c. html</a></li>\r\n          <li><a [routerLink]=\"['/products']\">Product List</a></li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n    <div class='container'>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n-->\r\ntest\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-form/contact-form.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-form/contact-form.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container\">\r\n \r\n      <iframe src=\"https://woodconcepts-form.netlify.com\">\r\n        Your browser does not support iframes.\r\n      </iframe>\r\n    \r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div id=\"location1\" class=\"location justify-content-center\">\r\n  \r\n  <div class='row' id=\"contactPageAddress\">\r\n    <div class=\"col-12 col-sm-12 col-md-12 offset-lg-1 col-lg-10 offset-xl-1 col-xl-10 noPadding\">\r\n\r\n      <h2 class=\"locationHeading\">Dublin Office:</h2>\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3\">\r\n          Wood Concepts <br />\r\n          23 Town Centre Mall, Swords,<br />\r\n          Co. Dublin, Ireland <br />\r\n          K67 CF80 <br/>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3\">\r\n          Tel: 00353 (0) 1 840 83 88 <br />\r\n          Fax: 00353 (0) 1 840 83 77 <br />\r\n          Email: <span [innerHTML]=\"emailAddress\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"locationMap\">\r\n    <a href=\"https://www.google.ie/maps/place/Wood+Concepts/@53.4579147,-6.2164737,15z/data=!4m5!3m4!1s0x486710efb51422c7:0x5b3e0ec3829be62c!8m2!3d53.457458!4d-6.220143\">\r\n      <img src=\"../../assets/images/wood_concepts_address_location.jpg\" />\r\n    </a>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<div id=\"location2\" class=\"location justify-content-center\">\r\n\r\n  <div class='row' id=\"contactPageAddress\">\r\n\r\n    <div class=\"col-12 col-sm-12 col-md-12 offset-lg-1 col-lg-10 offset-xl-1 col-xl-10 noPadding\">\r\n      <h2 class=\"locationHeading\">Distribution Warehouse, Ringaskiddy, Co. Cork:</h2>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3\">\r\n          Wood Concepts Warehouse<br />\r\n          Deep Water Berth, Ringaskiddy, <br />\r\n          Co. Cork, Ireland <br />\r\n          P43 K193 <br/>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3\">\r\n          Tel: 00353 (0) 21 437 01 30 <br />\r\n          Fax: 00353 (0) 21 437 01 35 <br />\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n  <div class=\"locationMap\">\r\n    <a href=\"https://www.google.ie/maps/place/Ringaskiddy,+Co.+Cork/@51.8323944,-8.327509,16.23z/data=!4m5!3m4!1s0x484483ee6d0e57f9:0xf8f264f21344aef!8m2!3d51.8268306!4d-8.3095799\">\r\n      <img src=\"../../assets/images/contact/wood_concepts_address_location_ringaskiddy.jpg\" />\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<br />\r\n\r\n<div class=\"row justify-content-center no-gutters\">\r\n\r\n  <div class=\"col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5\">\r\n    <h2 class=\"locationHeading\">Contact Us</h2>\r\n    <app-contact-form></app-contact-form>\r\n  </div>\r\n</div>\r\n<!--\r\n<div id=\"contactForm\">\r\n\r\n  <form #form=\"ngForm\" method=\"POST\" action=\"https://formspree.io/email-addressHere\">\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputEmail1\">Email address</label>\r\n      <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Your email\">\r\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputEmail1\">Contact Number</label>\r\n      <input name=\"text\" placeholder=\"Your contact number\"><br /><br />\r\n    </div>\r\n\r\n    Please state if you are a trade customer or end user: <br />\r\n    <input type=\"checkbox\" name=\"trade\" value=\"Trade\">Trade<br />\r\n    <input type=\"checkbox\" name=\"public\" value=\"Public\">End user<br />\r\n\r\n    <textarea name=\"message\" placeholder=\"Your message\"></textarea>\r\n    <input name=\"interest\" placeholder=\"Product interested in\">\r\n    <button type=\"submit\">Send</button>\r\n  </form>\r\n\r\n\r\n</div>-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/blog/blog.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/blog/blog.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pageContainer\">\r\n\r\n  <article>\r\n\r\n    <div class=\"col-12 col-sm-12 col-md-12 offset-lg-1 col-lg-10 offset-xl-1 col-xl-10 noPadding\">\r\n\r\n\r\n      <div class=\"row newsItem\" *ngFor='let blog of blog'>\r\n\r\n        <div class=\"col-12 col-sm-12   offset-md-1 col-md-10  offset-lg-1 col-lg-10   offset-xl-2 col-xl-8\">\r\n\r\n          <div *ngIf=\"blog.fields.articleHeading\">\r\n            <h2>{{ blog.fields.articleHeading }}</h2>\r\n          </div>\r\n\r\n          <div class=\"justifyText\" *ngIf=\"blog.fields.introText\">\r\n            <div Markdown>\r\n              {{ blog.fields.introText }}\r\n            </div>\r\n          </div>\r\n\r\n          <br />\r\n\r\n          <div *ngIf=\"blog.fields.image1\">\r\n            <div class=\"blogImage\">\r\n              <img [src]='blog.fields.image1.fields.file.url'\r\n                   [title]=''>\r\n            </div>\r\n            <br />\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"justifyText\" *ngIf=\"blog.fields.mainText\">\r\n            <div Markdown id=\"delete\">\r\n              {{ blog.fields.mainText }}\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"justifyText\" *ngIf=\"blog.fields.video1\">\r\n            <div class=\"videoContainer\">\r\n              <video controls [poster]=\"blog.fields.video1.fields.file.url\">\r\n                <source [src]=\"blog.fields.video1.fields.file.url\" type=\"video/mp4\">\r\n                Your browser does not support the video tag.\r\n              </video>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div><!--/nested col-->\r\n    </div><!--/nested row-->\r\n\r\n    <br />\r\n    <br />\r\n\r\n  </article>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/news/news.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/news/news.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pageContainer\">\r\n\r\n  <div class=\"row\">\r\n\r\n\r\n    <div class=\"col-12 col-sm-12 col-md-12 offset-lg-1 col-lg-10 offset-xl-1 col-xl-10 noPadding\">\r\n\r\n      <div class=\"row newsItem\" *ngFor='let newsArticle of newsArticle'>\r\n\r\n          <div class=\"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6\">\r\n\r\n            <div *ngIf=\"newsArticle.fields.articleHeading\">\r\n              <h2>{{ newsArticle.fields.articleHeading }}</h2>\r\n            </div>\r\n\r\n            <div class=\"justifyText\" *ngIf=\"newsArticle.fields.introText\">\r\n              <div Markdown>\r\n                {{ newsArticle.fields.introText }}\r\n              </div>\r\n            </div>\r\n\r\n            <br />\r\n\r\n            <div *ngIf=\"newsArticle.fields.image1\">\r\n              <div class=\"newsArticleImage\">\r\n                <img [src]='newsArticle.fields.image1.fields.file.url'\r\n                     [title]=''>\r\n              </div>\r\n              <br />\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6\">\r\n\r\n\r\n            <div class=\"justifyText\" *ngIf=\"newsArticle.fields.mainText\">\r\n              <div Markdown>\r\n                {{ newsArticle.fields.mainText }}\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"justifyText\" *ngIf=\"newsArticle.fields.video1\">\r\n              <div class=\"videoContainer\">\r\n                <video controls [poster]=\"newsArticle.fields.video1.fields.file.url\">\r\n                  <source [src]=\"newsArticle.fields.video1.fields.file.url\" type=\"video/mp4\">\r\n                  Your browser does not support the video tag.\r\n                </video>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n \r\n\r\n      </div><!--/nested col-->\r\n    </div><!--/nested row-->\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/products/contentful-category-list/contentful-category-list.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/products/contentful-category-list/contentful-category-list.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row \">\r\n\r\n  <div class=\"col-0 col-sm-0 col-md-3 col-lg-3 col-xl-2 noPadding\">\r\n    <app-product-menu></app-product-menu>\r\n  </div>\r\n\r\n  <div class=\"col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 noPadding\">\r\n\r\n    <div id=\"category-list-Page\">\r\n      <!-- <div id=\"searchDiv\">\r\n        <div class='row no-gutters justify-content-center'>\r\n          <button type=\"button\" (click)='openNav()' class=\"openbtn\">\r\n            <i class=\"fa fa-bars fa-3x\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n            -->\r\n\r\n      <div id=\"productThumbnailsDiv\">\r\n        <div class=\"categoryGroup\" *ngFor=\"let category of categories\">\r\n\r\n          <div class=\"categoryGroupInnerContainer\">\r\n            <!--added just for padding-->\r\n\r\n            <div class=\"customHeader\">\r\n\r\n              <img *ngIf=\"category.fields.icon\" class=\"category-image\" src=\"{{ category.fields.image.fields.file.url }}\">\r\n\r\n              <div class=\"customCategoryHeading\">{{ category.fields.title }}</div>\r\n\r\n              {{ category.fields.categoryDescription }}\r\n              <!--<div *ngFor=\"let subCategory1 of subCategory1s\">{{ subCategory1.fields.title }}\r\n              <div *ngFor=\"let subCategory1 of productsForSubCategory1s[subCat1.sys.id]\">\r\n                <a md-line [routerLink]=\"['/products', product.fields.slug]\">{{product.fields.subCategory1}}</a>\r\n              </div>-->\r\n\r\n            </div>\r\n\r\n            <div class=\"row justify-content-center\" id=\"productThumbnails\">\r\n\r\n              <!-- contenful code that works:\r\n                <div *ngFor=\"let product of productsForCategories[category.sys.id]\">\r\n                 Contentful code <a md-line [routerLink]=\"['/products', product.fields.slug]\">{{product.fields.productName}}</a>\r\n                </div>\r\n              -->\r\n              <div class=\"thumbnailCol col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\" *ngFor=\"let product of productsForCategories[category.sys.id]\">\r\n\r\n                <a md-line [routerLink]=\"['/products', product.fields.slug]\">\r\n                  <div class=\"thumbnail\">\r\n                    <img src=\"{{ product.fields.image[0].fields.file.url }}\"\r\n                         [title]='product.productName' [alt]='product.productName'>\r\n                  </div>\r\n\r\n                  <div class=\"productThumbnailText\">\r\n\r\n                    <div class=\"productNameAndDesc\">\r\n                      <!--container class to group productName and productDescription to give them set heights-->\r\n                      <div class=\"productName\">\r\n                        {{product.fields.productName}}\r\n                      </div>\r\n\r\n                      <div class=\"productDescription\">\r\n                        {{ product.fields.productDescription }}\r\n                        <br />\r\n                        <!-- <a [routerLink]=\"['/products', product.fields.slug]\"> More > </a>-->\r\n                      </div>\r\n                    </div>\r\n                    <!--\r\n                    <div class=\"moreLink\">\r\n                      <a [routerLink]=\"['/products', product.fields.slug]\">More</a>\r\n                      <i id=\"productsChevron\" class=\"fa fa-lg fa-chevron-right\" aria-hidden=\"true\"></i>\r\n                    </div>-->\r\n\r\n                  </div>\r\n                </a>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div><!--/categoryGroupInnerContainer-->\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div><!--/category-list-Page-->\r\n  </div><!--/col-->\r\n\r\n</div><!--/row-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/products/contentful-product-detail/contentful-product-detail.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/products/contentful-product-detail/contentful-product-detail.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<div class=\"productDetailsPage\">\r\n\r\n\r\n  <a class=\"defaultButton\" (click)='onBack()'>\r\n    <div class=\"backButton\">\r\n      <!--<i class='fa fa-lg fa-chevron-left'></i>-->\t< Back\r\n    </div>\r\n  </a>\r\n\r\n  <div *ngIf='product'>\r\n\r\n    <div class='row justify-content-center no-gutter' id=\"productDetailsRow\">\r\n\r\n      <div class=\"col-12 col-sm-12 col-md-7 col-lg-7 offset-xl-1 col-xl-6 \">\r\n\r\n        <article>\r\n\r\n          <div class=\"productImageTextBox\">\r\n            <div class=\"productName\">\r\n              {{ product.fields.productName }}\r\n            </div>\r\n            <div>{{ product.fields.productDescription }}</div>\r\n            <br />\r\n            <div Markdown>{{ product.fields.productDescriptionLong }}</div>\r\n            <br />\r\n          </div>\r\n\r\n          <!--\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-sm-12 col-md-3 col-lg-2 col-xl-2\">\r\n              <div *ngIf=\"images\">\r\n                <div *ngFor=\"let image of images\">\r\n                  <img #bp [src]='image.fields.file.url'\r\n                       [title]='product.productName' [alt]='product.productName'>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-12 col-sm-12 col-md-9 col-lg-10 col-xl-10\">\r\n              <img [src]='product.fields.image[0].fields.file.url'\r\n                   [title]='product.productName' [alt]='product.productName'>\r\n            </div>\r\n          </div>\r\n              -->\r\n          <ngb-carousel>\r\n            <div *ngIf=\"images\">\r\n              <ng-template ngbSlide *ngFor=\"let image of images\">\r\n\r\n                <div id=\"carousel-images\">\r\n\r\n                  <img [src]='image.fields.file.url'\r\n                       [title]='product.productName' [alt]='product.productName'>\r\n                  <div class=\"carousel-caption\">\r\n                    <!--<div class=\"carousel-caption d-none d-sm-block\">\r\n                    -see https://getbootstrap.com/docs/4.0/utilities/display/ for above docs on d-none, d-sm-block-->\r\n                    <!--<i id=\"carousel-caption-heading\">{{item.brandName + \" \" + item.productName}}</i> <br />-->\r\n                    <div id=\"ad-sub-message\">\r\n\r\n                    </div>\r\n                    <div id=\"ad-main-message\">\r\n\r\n                    </div>\r\n                    <div id=\"ad-footer-message\">\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </div>\r\n          </ngb-carousel>\r\n\r\n          <div class=\"productDetails\">\r\n            <div *ngIf=\"product.fields.keyFeature1\">\r\n              <div class=\"productDetailsHeading\">\r\n                Key Features\r\n              </div>\r\n              <div class=\"productDetailsText\">\r\n                <div class=\"productDetailsTextParagraph\">\r\n                  <ul>\r\n                    <li *ngIf=\"product.fields.keyFeature1\">{{ product.fields.keyFeature1}} </li>\r\n                    <li *ngIf=\"product.fields.keyFeature2\">{{ product.fields.keyFeature2}} </li>\r\n                    <li *ngIf=\"product.fields.keyFeature3\">{{ product.fields.keyFeature3}} </li>\r\n                    <li *ngIf=\"product.fields.keyFeature4\">{{ product.fields.keyFeature4}} </li>\r\n                    <li *ngIf=\"product.fields.keyFeature5\">{{ product.fields.keyFeature5}} </li>\r\n                    <li *ngIf=\"product.fields.keyFeature6\">{{ product.fields.keyFeature6}} </li>\r\n                    <li *ngIf=\"product.fields.keyFeature7\">{{ product.fields.keyFeature7}} </li>\r\n                    <li *ngIf=\"product.fields.keyFeature8\">{{ product.fields.keyFeature8}} </li>\r\n                    <li *ngIf=\"product.fields.keyFeature9\">{{ product.fields.keyFeature9}} </li>\r\n                    <li *ngIf=\"product.fields.keyFeature10\">{{ product.fields.keyFeature10}} </li>\r\n                    <li *ngIf=\"product.fields.keyFeature11\">{{ product.fields.keyFeature11}} </li>\r\n                    <li *ngIf=\"product.fields.keyFeature12\">{{ product.fields.keyFeature12}} </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </article>\r\n\r\n      </div><!--/col-->\r\n\r\n      <div class=\"col-12 col-sm-12 col-md-6 col-lg-5 col-xl-4\">\r\n\r\n        <article>\r\n          <div class=\"productDetails\">\r\n\r\n            <div class=\"productDetailsHeading\">\r\n              Applications\r\n            </div>\r\n\r\n            <div class=\"productDetailsText\">\r\n\r\n              <div *ngIf=\"product.fields.applicationsType1Header\">\r\n                <div class=\"productDetailsTextParagraph\">\r\n                  <span class=\"bold\">{{product.fields.applicationsType1Header}}: </span>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"product.fields.type1Applications\">\r\n                <div class=\"productDetailsTextParagraph\">\r\n                  <ul *ngFor=\"let type1Application of type1Applications\">\r\n                    <li>{{type1Application.fields.applicationTypeInstance}}</li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div *ngIf=\"product.fields.applicationsType2Header\">\r\n                <div class=\"productDetailsTextParagraph\">\r\n                  <span class=\"bold\">{{product.fields.applicationsType2Header}}: </span>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"product.fields.type2Applications\">\r\n                <div class=\"productDetailsTextParagraph\">\r\n                  <ul *ngFor=\"let type2Application of type2Applications\">\r\n                    <li>{{type2Application.fields.applicationTypeInstance}}</li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"productDetailsHeading\">\r\n                Range\r\n              </div>\r\n\r\n              <div class=\"productDetailsText\">\r\n\r\n                <div class=\"productDetailsTextParagraph\">\r\n\r\n                  <div *ngIf=\"product.fields.sizes\">\r\n                    <span class=\"bold\">Sizes: </span>              {{ product.fields.sizes}}\r\n                  </div>\r\n\r\n                  <div *ngIf=\"product.fields.variations\">\r\n                    <span class=\"bold\">Variations: </span>              {{ product.fields.variations}}\r\n                  </div>\r\n\r\n                  <div *ngIf=\"product.fields.lengths\">\r\n                    <span class=\"bold\">Lengths: </span>       {{ product.fields.lengths}}\r\n                  </div>\r\n\r\n                  <div *ngIf=\"product.fields.widths\">\r\n                    <span class=\"bold\">Widths: </span>        {{ product.fields.widths}}\r\n                  </div>\r\n\r\n                  <div *ngIf=\"product.fields.thicknesses\">\r\n                    <span class=\"bold\">Thicknesses: </span>   {{ product.fields.thicknesses}}\r\n                  </div>\r\n\r\n                  <div *ngIf=\"product.fields.sheetsPerPallet\">\r\n                    <span class=\"bold\">Sheets Per Pallet: </span>  {{ product.fields.sheetsPerPallet}}\r\n                  </div>\r\n\r\n                  <div *ngIf=\"product.fields.glue\">\r\n                    <span class=\"bold\">Glue: </span>               {{product.fields.glue}}\r\n                  </div>\r\n\r\n                  <div *ngIf=\"product.fields.grade\">\r\n                    <span class=\"bold\">Grade: </span>              {{ product.fields.grade}}\r\n                  </div>\r\n\r\n                  <div *ngIf=\"product.fields.loadSizes\">\r\n                    <span class=\"bold\">Load Sizes: </span>         {{ product.fields.loadSizes}}\r\n                  </div>\r\n\r\n                  <div *ngIf=\"product.fields.brand\">\r\n                    <span class=\"bold\">Brand: </span>           {{product.fields.brand.fields.companyName}}\r\n                  </div>\r\n\r\n                </div>\r\n\r\n                <div *ngIf=\"product.fields.certification\">\r\n                  <div class=\"productDetailsHeading\">\r\n                    Certification(s)\r\n                  </div>\r\n                  <div class=\"productDetailsText\">\r\n                    <span class=\"productDetailsTextParagraph\">\r\n                      <span>{{ product.fields.certification}}</span>\r\n                    </span>\r\n                    <div *ngIf=\"product.fields.certificationNote\">\r\n                      {{ product.fields.certificationNote}}\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div>\r\n                    <a md-line [routerLink]=\"['/glossary']\">\r\n                      Read more about certifications and grades\r\n                    </a>\r\n                  </div>\r\n                  <br />\r\n\r\n                </div>\r\n\r\n                <div *ngIf=\"product.fields.specificationsSheet\">\r\n                  <div class=\"productDetailsHeading\">\r\n                    Technical Specifications Downloads\r\n                  </div>\r\n                  <div class=\"productDetailsText\">\r\n                    <div class=\"downloadLinks\" *ngFor=\"let specificationsSheet of specificationsSheets\">\r\n                      <div>\r\n                        <a target=\"_blank\" href={{specificationsSheet.fields.file.url}}>\r\n                          {{specificationsSheet.fields.title}}\r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <!--  <a target=\"_blank\" href={{product.fields.specificationsSheet[0].fields.file.url}}>\r\n                      Download {{product.fields.specificationsSheet[0].fields.title}}\r\n                    </a>-->\r\n                  </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"product.fields.technicalGuide\">\r\n                  <div class=\"productDetailsHeading\">\r\n                    Technical Guides Downloads\r\n                  </div>\r\n                  <div class=\"productDetailsText\">\r\n                    <a target=\"_blank\" href={{product.fields.technicalGuide[0].fields.file.url}}>\r\n                      {{product.fields.technicalGuide[0].fields.title}}\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <div *ngIf=\"videos\">\r\n\r\n                  <div class=\"productDetailsHeading\">\r\n                    Video Resources\r\n                  </div>\r\n\r\n                  <div *ngFor=\"let video of videos\">\r\n\r\n                    <div class=\"productDetailsText\">\r\n                      <!-- Title from Array element 0: {{product.fields.video[0].fields.title}} <br/>\r\n                       {{video.fields.title}} both of these work-->\r\n                      {{video.fields.url.fields.title}}\r\n\r\n                    </div>\r\n\r\n                    <div class=\"videoContainer\">\r\n\r\n\r\n                      <video controls [poster]=\"video.fields.previewImage.fields.file.url\">\r\n                        <source [src]=\"video.fields.url.fields.file.url\" type=\"video/mp4\">\r\n                        Your browser does not support the video tag.\r\n                      </video>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <!--\r\n              <div *ngFor=\"let forecast of forecasts\">\r\n                Image Array URL here:\r\n                {{forecast.hum}}\r\n              </div>\r\n\r\n              <div *ngFor=\"let image of images\">\r\n                Image Array URL here:\r\n\r\n                <img [src]='image.fields.file.url'\r\n                     [title]='product.productName' [alt]='product.productName'>\r\n\r\n              </div>\r\n\r\n\r\n              <div *ngFor=\"let type1Application of type1Applications\">\r\n                App 1:\r\n                <span>{{type1Application.fields.applicationTypeInstance}}</span>\r\n              </div>\r\n\r\n\r\n              <div *ngFor=\"let type2Application of type2Applications\">\r\n                App 2:\r\n                <span>{{type2Application.fields.applicationTypeInstance}}</span>\r\n              </div>\r\n\r\n                  -->\r\n              <!--\r\n              <div *ngFor=\"let category of categories\"\r\n\r\n\r\n                      <button (click)=\"getThicknesses()\">press</button>-->\r\n            </div>\r\n          </div>\r\n\r\n        </article>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n  </div><!-- /*ngIf='product' -->\r\n\r\n</div><!-- /product details page -->\r\n<!--\r\n<div *ngIf=\"images\">\r\n  <div *ngFor=\"let image of images\">\r\n    <div class=\"row noPadding\">\r\n      <div class=\"column\">\r\n        Click this thumbnail: <br />\r\n\r\n        <img #productThumbnail [src]='image.fields.file.url' (click)='thumbnailClicked()'>\r\n      </div>\r\n\r\n      <!--<div class=\"column\">\r\n        <img src=\"https://dawm7kda6y2v0.cloudfront.net/uploads/2018/03/GettyImages-932975936-804x450@2x.jpg\" alt=\"Fjords\" onclick=\"openImg(this);\">\r\n      </div>-->\r\n<!--\r\n      <div class=\"column\">\r\n        <div *ngIf='showImage'>\r\n          Show a big image below if Thumbnail above is clicked: <br />\r\n          <img src={{productThumbnail.src}}>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<!--\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-sm-12 col-md-3 col-lg-2 col-xl-2\">\r\n      <div *ngIf=\"images\">\r\n        <div *ngFor=\"let image of images\">\r\n          <img #bp [src]='image.fields.file.url'\r\n               [title]='product.productName' [alt]='product.productName'>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/products/contentful-product-list-by-sub-category1/contentful-product-list-by-sub-category1.component.html":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/products/contentful-product-list-by-sub-category1/contentful-product-list-by-sub-category1.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!-- contentful-product-list-by-sub-category1 works!\r\n\r\n<div id=\"productThumbnailsDiv\">\r\n  <div class=\"row no-gutters justify-content-center\" id=\"productThumbnails\">\r\n    <div class=\"thumbnailCol col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 \" *ngFor='let product of products'>\r\n      <div *ngIf='products && products.length'>\r\n        <div *ngIf=\"product.fields.subCategory1.fields.slug\">\r\n\r\n          <div class=\"thumbnail\">\r\n          \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf='product'>\r\n\r\n\r\n\r\n\r\n    <div class=\"col-12 col-sm-10 col-md-6 col-lg-6 col-xl-5\">\r\n     \r\n      <div class=\"productImageTextBox\">\r\n        <div class=\"productName\">\r\n          {{ product.fields.productName }}\r\n        </div>\r\n        <div>{{ product.fields.productDescription }}</div>\r\n      </div>\r\n    </div>\r\n    \r\n\r\n    </div>\r\n\r\n\r\n     below doesn't work\r\n\r\n    <div *ngFor=\"let subCategory1 of subCategory1s\">\r\n      <div *ngIf=\"product.fields.subCategory1.fields.slug\">\r\n        has slug : {{product.fields.subCategory1.fields.slug}}\r\n      </div>\r\n    </div>\r\n\r\n        -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/products/contentful-product-list-by-sub-category2/contentful-product-list-by-sub-category2.component.html":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/products/contentful-product-list-by-sub-category2/contentful-product-list-by-sub-category2.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row .no-gutters\">\r\n\r\n  <div class=\"col-0 col-sm-0 col-md-3 col-lg-3 col-xl-2 noPadding\">\r\n    <app-product-menu></app-product-menu>\r\n  </div>\r\n\r\n  <div class=\"col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 noPadding\">\r\n\r\n    <div id=\"productThumbnailsDiv\">\r\n\r\n      <div class=\"row no-gutters justify-content-center\" id=\"productThumbnails\">\r\n\r\n        <div class=\"thumbnailCol col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\" *ngFor='let product of products'>\r\n          <div *ngIf='products && products.length'>\r\n\r\n            <a [routerLink]=\"['/products', product.fields.slug]\">\r\n              <div class=\"thumbnail\">\r\n                <img src=\"{{ product.fields.image[0].fields.file.url }}\"\r\n                     [title]='product.productName' [alt]='product.productName'>\r\n              </div>\r\n\r\n              <div class=\"productThumbnailText\">\r\n\r\n                <div class=\"productNameAndDesc\">\r\n                  <div class=\"productName\">\r\n\r\n                    {{ product.fields.productName }}\r\n\r\n                  </div>\r\n\r\n                  <div class=\"productDescription\">\r\n                    {{ product.fields.productDescription }}\r\n                    <br />\r\n\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </a>\r\n            <!--\r\n            <div class=\"moreLink\">\r\n              <a [routerLink]=\"['/products', product.fields.slug]\">More</a>\r\n              <i id=\"productsChevron\" class=\"fa fa-lg fa-chevron-right\" aria-hidden=\"true\"></i>\r\n            </div>-->\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/products/contentful-product-list/contentful-product-list.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/products/contentful-product-list/contentful-product-list.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row .no-gutters\">\r\n\r\n  <div class=\"col-0 col-sm-0 col-md-3 col-lg-3 col-xl-2 noPadding\">\r\n    <app-product-menu></app-product-menu>\r\n  </div>\r\n\r\n  <div class=\"col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 noPadding\" id=\"test\">\r\n\r\n\r\n\r\n\r\n    <div id=\"productThumbnailsDiv\">\r\n      <div class=\"row no-gutters justify-content-center\" id=\"productThumbnails\">\r\n        <div class=\"thumbnailCol col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 \" *ngFor='let product of products'>\r\n          <div *ngIf='products && products.length'>\r\n\r\n            <div class=\"thumbnail\">\r\n              <img src=\"{{ product.fields.image[0].fields.file.url }}\"\r\n                   [title]='product.productName' [alt]='product.productName'>\r\n            </div>\r\n\r\n            <div class=\"productThumbnailText\">\r\n              test\r\n              <div class=\"productNameAndDesc\">\r\n                <!--container class to group productName and productDescription to give them set heights-->\r\n                <div class=\"productName\">\r\n                  <a [routerLink]=\"['/products', product.fields.slug]\">\r\n                    {{ product.fields.productName }}\r\n                  </a>\r\n                </div>\r\n\r\n                <div class=\"productDescription\">\r\n                  {{ product.fields.productDescription }}\r\n                  <br />\r\n\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div class=\"moreLink\">\r\n                <a [routerLink]=\"['/products', product.fields.slug]\">More</a>\r\n                <i id=\"productsChevron\" class=\"fa fa-lg fa-chevron-right\" aria-hidden=\"true\"></i>\r\n              </div>\r\n            </div>\r\n\r\n            <!--\r\n                  <div *ngIf=\"product.fields.slug=='eucalyptus-plywood' \">\r\n                    <div class=\"productName\">\r\n                      <a [routerLink]=\"['/products', product.fields.slug]\">\r\n                        {{ product.fields.productName }}\r\n                      </a>\r\n                    </div>\r\n\r\n                    <div class=\"productDescription\">\r\n                      {{ product.fields.productDescription }}\r\n                      <br />\r\n                    </div>\r\n                  </div>\r\n\r\n                -->\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/sustainability/sustainability.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/sustainability/sustainability.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pageContainer\">\r\n\r\n  <div class=\"row\" *ngFor='let staticPage of staticPages'>\r\n\r\n    <div class=\"col-12 col-sm-12 col-md-12 offset-lg-1 col-lg-10 offset-xl-1 col-xl-10\">\r\n      <h2>Keeping it Green</h2>\r\n      <p>\r\n        Wood has stood the test of time in Ireland as an essential component in the building and finishing of commercial buildings and homes.\r\n        Because it uses less energy to produce that most other building materials, wood is an environmentally friendly option that also looks good and has impressive insulating qualities.\r\n      </p>\r\n\r\n      <p>\r\n        At its most basic level timber absorbs CO2 and releases O2 so if managed responsibly it is CO2 neutral.\r\n        All Wood Concepts’ timber comes from sustainably managed forests which are PEFC or FSC® certified.\r\n      </p>\r\n\r\n      <br />\r\n\r\n      <div class=\"videoContainer\">\r\n        <video controls poster=\"../../../assets/images/sustainability/wood_is_good_video_preview.jpg\">\r\n          <source [src]=\"staticPage.fields.video.fields.file.url\" type=\"video/mp4\">\r\n          Your browser does not support the video tag.\r\n        </video>\r\n      </div>\r\n\r\n\r\n\r\n      <!--\r\n      <iframe class=\"sustainabilityPageVideo\" width=\"400\" src=\"https://www.youtube.com/embed/EcN3SAGzKgY\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n          -->\r\n      <h3>What is FSC?</h3>\r\n      <p>\r\n        The Forest Stewardship Council® was established in 1993 to promote responsible management of the world’s forests. It sets standards and provides certification and labelling of timber products. Use of the FSC logo shows that the product comes from responsible sources.\r\n      </p>\r\n      <h3>  What is PEFC?</h3>\r\n      <p>\r\n        The Programme for Endorsement of Forest Certification Schemes (PEFC) is committed to conserving forests and their invaluable biodiversity, and the communities and families that own, work, and live in and around forests. Use of the PEFC logo shows that the product comes from responsible sources.\r\n      </p>\r\n\r\n    </div><!--/col-->\r\n\r\n  </div><!--/row-->\r\n\r\n  <div class=\"row justify-content-center noPadding\" id=\"sustainabilityImagesDiv\">\r\n    <!--new row needed that wold make a white col go all the way accross the screen. with above code it would have cols on left and right of page-->\r\n    <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 sustainabilityLogo sustainabilityLogoWoodConcepts\">\r\n      <img src=\"../assets/images/associations/fsc-logo.png\" />\r\n    </div>\r\n    <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 sustainabilityLogo sustainabilityLogoWoodConcepts\">\r\n\r\n      <img src=\"../assets/images/associations/pefc-logo.png\" />\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<!-- Paragph here:\r\n  <br />\r\n  <div class=\"row\" *ngFor='let staticPage of staticPages'>\r\n    <div *ngIf=\"staticPage.fields.longTextField\">\r\n      <div Markdown>\r\n        {{ staticPage.fields.longTextField }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n    -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/carousel/carousel.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/carousel/carousel.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n<ngb-carousel>\r\n  <ng-template ngbSlide>\r\n    <img src=\"https://lorempixel.com/900/500?r=1\" alt=\"Random first slide\">\r\n\r\n\r\n    <ngb-carousel>\r\n      <ng-template ngbSlide>\r\n        <img src=\"https://lorempixel.com/900/500?r=1\" alt=\"Random first slide\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>First slide label</h3>\r\n          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n        </div>\r\n      </ng-template>\r\n      <ng-template ngbSlide>\r\n        <img src=\"https://lorempixel.com/900/500?r=2\" alt=\"Random second slide\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>Second slide label</h3>\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n        </div>\r\n      </ng-template>\r\n      <ng-template ngbSlide>\r\n        <img src=\"https://lorempixel.com/900/500?r=3\" alt=\"Random third slide\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>Third slide label</h3>\r\n          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n        </div>\r\n      </ng-template>\r\n    </ngb-carousel>\r\n    <div class=\"carousel-caption\">\r\n      <h3>First slide label</h3>\r\n      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template ngbSlide>\r\n    <img src=\"https://lorempixel.com/900/500?r=2\" alt=\"Random second slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3>Second slide label</h3>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template ngbSlide>\r\n    <img src=\"https://lorempixel.com/900/500?r=3\" alt=\"Random third slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3>Third slide label</h3>\r\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n    </div>\r\n  </ng-template>\r\n</ngb-carousel>\r\n-->\r\n\r\n\r\n<ngb-carousel>\r\n  <ng-template ngbSlide *ngFor=\"let item of items\">\r\n    <div class=\"row no-gutters\">\r\n\r\n      <div id=\"carousel-images\" class=\"col-12 col-sm-12 col-md-8 col-lg-8 col-xl-7 offset-xl-1\">\r\n        <a [routerLink]=\" ['/products/', item.productUrl]\">\r\n\r\n          <img src=\"../../../assets/carousel_images/{{item.fileName}}.jpg\" />\r\n          <div class=\"carousel-caption\">\r\n            <!--<div class=\"carousel-caption d-none d-sm-block\">\r\n            -see https://getbootstrap.com/docs/4.0/utilities/display/ for above docs on d-none, d-sm-block-->\r\n            <!--<i id=\"carousel-caption-heading\">{{item.brandName + \" \" + item.productName}}</i> <br />-->\r\n            <div id=\"adSubMessage\">\r\n              {{item.adSubMessage}}\r\n            </div>\r\n            <div id=\"adMainMessage\">\r\n              {{item.adMainMessageLine1}} <br />\r\n              {{item.adMainMessageLine2}}\r\n            </div>\r\n            <div id=\"adFooterMessage\">\r\n              Learn more >\r\n            </div>\r\n          </div>\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"carousel-column col-0 col-sm-12 col-md-4 col-lg-4  col-xl-3  \">\r\n\r\n        <div class=\"carouselColumnHeaderDiv\">\r\n\r\n          <img id=\"product-logo\" src={{item.logoUrl}} />\r\n          <span class=\"logo-caption\">{{item.productName}}</span><br />\r\n          {{item.productDescription}}\r\n        </div>\r\n\r\n        <div>\r\n          <img src={{item.image1Url}} />\r\n          <img src={{item.image2Url}} />\r\n\r\n          <div id=\"carouselColumnFooter\">\r\n\r\n            <div id=\"carouselColumnFooter-Logo\">\r\n              <img src={{item.certLogoUrl}} />\r\n            </div>\r\n\r\n            <!--took below out because, according to FSC logo usage PDF, it was mixing up logos with passive home logo\r\n  <div id=\"fscPefcNote\">\r\n    FSC® and PEFC® certified.     <br />\r\n    <a [routerLink]=\" ['/sustainability']\">Learn more ></a>\r\n  </div>-->\r\n            <!--took below out because FSC audit said below images required 'on-product' logos, meaning the COC number had to be added to logo. That would make the logo too big so I removed it-->\r\n            <!--<img src=\"../../../assets/carousel_images/banner_images/logos/fsc-simple-logo.jpg\" />\r\n  <img src=\"../../../assets/carousel_images/banner_images/logos/pefc-simple-logo.jpg\" />-->\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</ngb-carousel>\r\n<!--\r\n        <div>\r\n          Over 30 years of expertise in the timber trade, happy to advise <br />\r\n          Products sourced world-wide for high quality and value<br/>\r\n          Stringent certifications<br />\r\n          Sustainabily and eco-friendly products<br />\r\n          Next day delivery<br />\r\n          100% Irish owned <br />\r\n        </div>-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/welcome.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/welcome.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js\" integrity=\"sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4\" crossorigin=\"anonymous\"></script>\r\n\r\n\r\n\r\n<div class=\"row\" id=\"importantMessageContainer\">\r\n\r\n  <div class=\"col-md-1 col-lg-1  col-xl-1\">\r\n  </div>\r\n\r\n  <div class=\"col-12  col-md-10 col-lg-10 col-xl-10\">\r\n    <br />\r\n    <div id=\"importantMessageDate\">\r\n      18/05/20\r\n    </div>\r\n    <div id=\"importantMessageHeader\">\r\n      Corona Virus Update\r\n    </div>\r\n\r\n    <p>\r\n      Dear Customer,\r\n    </p>\r\n    <p>\r\n      We are open for business.   All orders accepted by email/fax/phone.\r\n    </p>\r\n    <p>\r\n      Let’s all be careful and stay safe.\r\n    </p>\r\n\r\n    <p>\r\n      Joe Flynn <br />\r\n      Managing Director <br />\r\n      Wood Concepts<br />\r\n    </p>\r\n    <br />\r\n  </div>\r\n\r\n  <div class=\"col-md-1 col-lg-1 col-xl-1\">\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<app-carousel></app-carousel>\r\n\r\n<article class=\"row\" id=\"welcomeIntroduction\">\r\n\r\n\r\n  <div class=\"col-12 col-sm-6 col-md-8 col-lg-8 offset-xl-1 col-xl-6 centerText\" id=\"welcomeText\">\r\n\r\n    <div id=\"welcomeTextHeader\">Timber Supplies Simplified</div>\r\n\r\n\r\n    <div id=\"welcomeTextBody\">\r\n      <p>\r\n        Wood Concepts is Ireland’s leading supplier of timber products to the trade and its products\r\n        feature in many of the country’s best presented shops, homes and commercial spaces.\r\n      </p>\r\n      <p>\r\n        Contact us today to let us help you specify your next job.\r\n      </p>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div id=\"companySellingPoints\" class=\"col-12 col-sm-6 col-md-4 col-lg-4 offset-xl-1 col-xl-3 noPadding\">\r\n    <div>\r\n      <!--\r\n      <li><clr-icon shape=\"check\" size=\"12\"></clr-icon>Reduce Your Stock</li>\r\n      <li><clr-icon shape=\"check\" size=\"12\"></clr-icon>Next Day Delivery</li>\r\n      <li><clr-icon shape=\"check\" size=\"12\"></clr-icon>Increase Your Cash Flow</li>\r\n      <li><clr-icon shape=\"check\" size=\"12\"></clr-icon>No Hidden Extras</li>\r\n      <li><clr-icon shape=\"check\" size=\"12\"></clr-icon>Reduce Administration Costs</li>-->\r\n\r\n      <div class=\"sellingPoint\">&#10003;  Reduce Stock</div>\r\n      <div class=\"sellingPoint\">&#10003;  Next Day Delivery</div>\r\n      <div class=\"sellingPoint\">&#10003;  Increase Cash Flow</div>\r\n      <div class=\"sellingPoint\">&#10003;  No Hidden Extras</div>\r\n      <div class=\"sellingPoint\">&#10003;  Reduce Admin Costs</div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</article>\r\n\r\n\r\n<article id=\"productIconsAndTitleContainer\" class=\"centerText\">\r\n\r\n  <div class=\"articleTitle\">\r\n    Products\r\n  </div>\r\n\r\n  <div class=\"row\" id=\"productIconsRow\">\r\n\r\n    <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 col-lg-3 centerText\">\r\n      <a [routerLink]=\" ['/panel-products']\">\r\n        <div class=\"productSvgAndHeader\">\r\n          <div class=\"productSvg \">\r\n            <svg><use xlink:href=\"#01_plywood_plt\"></use></svg>\r\n          </div>\r\n          <div class=\"productHeading centerText\">\r\n            Panel Products\r\n          </div>\r\n          <div class=\"serivceDescription\">\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </div><!--/col-->\r\n\r\n    <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 col-lg-3 centerText\">\r\n      <a [routerLink]=\" ['/insulation']\">\r\n        <div class=\"productSvgAndHeader\">\r\n          <div class=\"productSvg \">\r\n            <svg><use xlink:href=\"#02_insulation\"></use></svg>\r\n          </div>\r\n          <div class=\"productHeading centerText\">\r\n            Insulation\r\n          </div>\r\n          <div class=\"serivceDescription\">\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </div><!--/col-->\r\n\r\n    <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 col-lg-3\">\r\n      <a [routerLink]=\" ['/i-joists']\">\r\n        <div class=\"productSvgAndHeader\">\r\n          <div class=\"productSvg \">\r\n            <svg><use xlink:href=\"#03_joists\"></use></svg>\r\n          </div>\r\n          <div class=\"productHeading centerText\">\r\n            Joists\r\n          </div>\r\n          <div class=\"serivceDescription\">\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </div><!--/col-->\r\n\r\n    <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 col-lg-3\">\r\n      <a [routerLink]=\" ['/softwood-timber']\">\r\n        <div class=\"productSvgAndHeader\">\r\n          <div class=\"productSvg centerText\">\r\n            <svg><use xlink:href=\"#04_timber_products\"></use></svg>\r\n          </div>\r\n          <div class=\"productHeading centerText\">\r\n            Timber Products\r\n          </div>\r\n          <div class=\"serivceDescription\">\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </div><!--/col-->\r\n\r\n\r\n  </div><!--/Row-->\r\n\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2\">\r\n      <div class=\"viewAllProductsLink\">\r\n        <a [routerLink]=\" ['/products']\" (click)=\"userClicksProductsLinkEvent()\">View all products ></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</article>\r\n\r\n<div id=\"associations\">\r\n\r\n  <div class=\"articleTitle row justify-content-center\">\r\n    Associations\r\n  </div>\r\n\r\n  <article id=\"sustainabilityIntro\" class=\"centerText\">\r\n\r\n    <div class=\"row justify-content-center\">\r\n\r\n      <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 sustainabilityLogo sustainabilityLogoLandscape\">\r\n        <img class=\"sustainabilityLogoGeneral\" src=\"../../assets/images/associations/FSC_FullBrandmark_R_RGB.png\" />\r\n        <div id=\"fsc-logo-caption\">\r\n          FSC takes care of forests and the people and wildlife that call them home. <br />\r\n          <p>\r\n            FSC® C115973  &nbsp; &#9642; &nbsp; www.fsc.org\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 sustainabilityLogo sustainabilityLogoPortraight\" id=\"pefc-logo\">\r\n        <img src=\"../../assets/images/associations/pefc-logo.png\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row justify-content-center\">\r\n\r\n      <div class=\"col-xs-12 col-sm-12 col-md-11 col-lg-9 col-xl-7 noPadding\" id=\"sustainabilityIntroTextCol\">\r\n        <div id=\"sustainabilityLink\">\r\n          <a [routerLink]=\" ['/sustainability']\">\r\n            We are committed to environmentally sustainable construction and many of our products are certified by FSC® (Forest Stewardship Council® ) and PEFC (Programme for the Endorsement of Forest Certification), ensuring traceable and fully sustainable usage of raw materials.\r\n            <br /><br />\r\n            Learn more >\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </article>\r\n\r\n\r\n\r\n  <div class=\"associationImagesDiv\">\r\n\r\n    <img class=\"associationSmallImageFile\" src=\"../assets/images/associations/TRADA MEMBER Colour [Converted].png\" />\r\n\r\n    <img class=\"associationSmallImageFile\" src=\"../assets/images/associations/TTF_Logo_MemberOf.JPG\" />\r\n\r\n    <img class=\"associationSmallImageFile\" src=\"../assets/images/associations/Wood-Costs-Less-12-size.png\" />\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<!--SVGs-->\r\n<article class=\"SVGs\">\r\n\r\n  <svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display: none\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n\r\n    <!--<symbol id=\"01_responsive_design\" viewBox=\"-157 545 100 100\">-->\r\n    <symbol id=\"01_plywood_plt\" viewBox=\"-255 335.9 100 100\">\r\n      <path d=\"M-201.2 425.3v2.2l4.3 2.5 34.7-20v-2.3l-34.7 20z\" />\r\n      <path d=\"M-170.8 406.8l-6.7 3.8v-3.5l-8.5 5v3.4l-6.7 3.9v-3.5l-4.4 2.6-4.1-2.4v8.7l4.3 2.5 4.2-2.5v-4.4l7.1-4.1 3.9 2.2 4.2-2.5v-4.4l7.2-4.1 3.8 2.2 4.3-2.5v-8.9l-8.6 4.9zM-215.7 411.3v-3.6l-8.5-5v8.6l4.3 2.4z\" />\r\n      <path d=\"M-219.9 414.2l-4.3-2.4v2.2l4.3 2.5 9.7-5.6-1.9-1.2zM-238.7 398.2v-3.9l-8.5-4.9v8.8l4.3 2.5z\" />\r\n      <path d=\"M-242.9 401.2l-4.3-2.5v2.3l4.3 2.5 10-5.8-2-1.2zM-163.4 372.9l.3.2-34 19.6-49.1-28.5.3-.2-1-.6-.3.1v2.6l50.3 29.1 34.8-20.1v-2.5l-.4-.2z\" />\r\n      <path d=\"M-163.4 376.6l.3.2-34 19.6-49.1-28.5.3-.2-1-.6-.3.2v2.5l50.3 29.2 34.8-20.2v-2.5l-.4-.2z\" />\r\n      <path d=\"M-163.4 380.3l.3.2-34 19.7-49.1-28.5.3-.2-1-.7-.3.2v2.5l50.3 29.2 34.8-20.2V380l-.4-.2z\" />\r\n      <path d=\"M-163.4 384l.3.2-34 19.7-49.1-28.5.3-.2-1-.7-.3.2v2.5l50.3 29.2 34.8-20.2v-2.5l-.4-.2z\" />\r\n      <path d=\"M-163.4 387.7l.3.2-34 19.7-49.1-28.5.3-.2-1-.6-.3.1v2.5l50.3 29.2 34.8-20.1v-2.6l-.4-.2z\" />\r\n      <path d=\"M-163.4 391.5l.3.1-34 19.7-49.1-28.5.3-.2-1-.6-.3.1v2.5l50.3 29.2 34.8-20.1v-2.5l-.4-.3z\" />\r\n      <path d=\"M-163.4 395.2l.3.1-34 19.7-49.1-28.5.3-.2-1-.6-.3.1v2.5l50.3 29.2 34.8-20.1v-2.5l-.4-.3z\" />\r\n      <path d=\"M-212.4 340l-34.8 19.8v2.5l50.3 29.2 34.8-20.1v-2.5l-50.3-28.9zm15.3 49l-49.1-28.5 34-19.3 49.1 28.2-34 19.6z\" />\r\n    </symbol>\r\n\r\n    <symbol id=\"02_insulation\" viewBox=\"-45 56 100 100\">\r\n      <path d=\"M49.8 94.9c.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1h-8.5l5.9-5.9c.2-.2.3-.5.3-.8s-.1-.6-.3-.8c-.4-.4-1.2-.4-1.6 0l-7.5 7.5h-9.4l15.1-15.1c.2-.2.3-.5.3-.8 0-.3-.1-.6-.3-.8-.4-.4-1.2-.4-1.6 0L27.1 91v-9.5l7.5-7.5c.2-.2.3-.5.3-.8 0-.3-.1-.6-.3-.8-.4-.4-1.2-.4-1.6 0l-5.9 5.9v-8.5c0-.6-.5-1.1-1.1-1.1s-1.1.5-1.1 1.1v8.5L19 72.4c-.4-.4-1.2-.4-1.6 0-.2.2-.3.5-.3.8s.1.6.3.8l7.5 7.5V91L-2.3 70.6l-38.2 28.8c-.5.4-.6 1.1-.2 1.6.4.5 1.1.6 1.6.2l7.6-5.7v47.7h58.6v-34.1L33 115c.4.4 1.2.4 1.6 0 .2-.2.3-.5.3-.8s-.1-.6-.3-.8l-7.5-7.5v-9.5l15.1 15.1c.4.4 1.2.4 1.6 0 .2-.2.3-.5.3-.8s-.1-.6-.3-.8l-15.2-15H38l7.5 7.5c.4.4 1.2.4 1.6 0 .2-.2.3-.5.3-.8s-.1-.6-.3-.8l-5.9-5.9h8.6zM3.9 141H-8.5v-23.3H3.9V141zm20.9-35.1l-7.5 7.5c-.2.2-.3.5-.3.8s.1.6.3.8c.4.4 1.2.4 1.6 0l5.9-5.9V141H6.2v-25.6h-16.9V141h-18.6V94.7v-.1l-.1-.6.5-.4 26.7-20.1 25.4 19.2h-9.4l-7.5-7.5c-.4-.4-1.2-.4-1.6 0-.2.2-.3.5-.3.8 0 .3.1.6.3.8l5.9 5.9H2c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1h8.5l-5.9 5.9c-.2.2-.3.5-.3.8s.1.6.3.8c.4.4 1.2.4 1.6 0l7.5-7.5h9.4L8.1 110c-.2.2-.3.5-.3.8s.1.6.3.8c.4.4 1.2.4 1.6 0l15.1-15.1v9.4z\" />\r\n    </symbol>\r\n\r\n    <symbol id=\"03_joists\" viewBox=\"0 0 100 100\">\r\n      <!--\r\n      <g id=\"XMLID_1_\"><path class=\"st0\" d=\"M49.8 52.5v-5.2l39-38.9v5l-.1.2zM49.8 86.7l39-39v5.1l-39 39zM11.3 47.8h37v5.7h-15c-.4 0-.8.3-.8.8v32c0 .4.3.8.8.8h14.9v5.6h-37V87h14.9c.4 0 .8-.3.8-.7v-32c0-.4-.3-.8-.8-.8H11.3v-5.7z\" /><path class=\"st0\" d=\"M12.4 85.6l13.1-13.2v13.2zM48.8 46.3H12.4l38.9-39h36.5zM48.8 85.6H35.3l39-39.1h13.5z\" /><path class=\"st0\" d=\"M34.2 84.4V55H49c.2 0 .4-.1.5-.2l23.6-23.6v14.3L34.2 84.4z\" /></g><\r\n          -->\r\n      <!--\r\n      <path d=\"M89.9 14.3c.1-.1.2-.3.2-.5V6.6c0-.4-.3-.8-.8-.8H50.9c-.2 0-.4.1-.5.2L9.9 46.6c-.1.1-.2.3-.2.5v7.2c0 .4.3.8.8.8h14.9v15.3L10 85.7c-.1.1-.2.3-.2.5v7.2c0 .4.3.8.8.8h38.5c.2 0 .4-.1.5-.2l40.5-40.5c.1-.1.2-.3.2-.5v-7.2c0-.4-.3-.8-.8-.8H74.6V29.7l15.3-15.4zM73 45.6l-39 39V55.1h14.9c.2 0 .4-.1.5-.2L73 31.2v14.4zm-23.4 1.8l39-39v5.1l-.1.1-38.9 39v-5.2zm1.6-40.1h36.4l-39 39H12.2l39-39zM25.3 72.6v13.1H12.2l13.1-13.1zm22.8 20.2h-37v-5.7H26c.4 0 .8-.3.8-.7v-32c0-.4-.3-.8-.8-.8H11.1v-5.7h37v5.7H33.2c-.4 0-.8.3-.8.8v32c0 .4.3.8.8.8h14.9v5.6zm1.5-1v-5.1l39-39v5.1l-39 39zm38-45.1l-39 39H35.1l39-39h13.5z\" fill=\"#fff\" />\r\n          -->\r\n      <path d=\"M49.1 94c.1 0 .3-.1.3-.1l40.5-40.5c.1-.1.1-.2.1-.4v-7.2c0-.3-.2-.6-.5-.6H74.3V29.6l.1-.1 15.3-15.4c.1-.1.1-.2.1-.3V6.5c0-.3-.2-.5-.5-.5H50.9c-.1 0-.3.1-.3.1L10.1 46.7c-.1.1-.1.2-.1.3v7.2c0 .3.2.5.5.5h15.1v15.7L10.2 85.9c-.1.1-.2.2-.2.4v7.2c0 .3.2.5.6.5h38.5zm39.7-41L49.4 92.5v-5.8l39.5-39.5V53zm-.6-6.6L48.7 85.9H34.5L74 46.4h14.2zM33.8 85.2V54.8h15.1c.1 0 .3-.1.3-.1l24-24v15L33.8 85.2zm55-71.5L49.4 53.2v-5.8L88.8 7.8v5.9zM51.1 7.1h37.1L48.7 46.6H11.6L51.1 7.1zM25.5 71.9v14h-14l14-14zm-14.6 15H26c.3 0 .5-.2.5-.5v-32c0-.3-.2-.5-.5-.5H10.9v-6.2h37.5v6.2H33.2c-.3 0-.6.2-.6.5v32c0 .3.2.5.6.5h15.1V93H10.9v-6.1z\" />\r\n    </symbol>\r\n\r\n    <symbol id=\"04_timber_products\" viewBox=\"-50 63 100 100\">\r\n      <path class=\"st0\" d=\"M-45.5 113.7l62.1-48.1L45.5 88v24.6l-62.1 48.1-28.9-22.4m.4-24.5l28.6 22.6m62-48l-62 48M-16.5 160.1v-24.2M-45.2 113.2v25.2M-36.6 120.6c0 4.6-3.7 8.4-8.3 8.4M-29.4 126.2c0 7.1-6.7 12.8-15 12.8M-19.1 134.4c0 7.6-6.1 13.7-13.7 13.7\" />\r\n    </symbol>\r\n\r\n  </svg>\r\n\r\n</article>  <!-- /SVGs-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/policies/cookies-policy/cookies-policy.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/policies/cookies-policy/cookies-policy.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<style>\r\n  <!--\r\n  /* Font Definitions */\r\n  @font-face {\r\n    font-family: Helvetica;\r\n    panose-1: 2 11 6 4 2 2 2 2 2 4;\r\n  }\r\n\r\n  @font-face {\r\n    font-family: Wingdings;\r\n    panose-1: 5 0 0 0 0 0 0 0 0 0;\r\n  }\r\n\r\n  @font-face {\r\n    font-family: \"Cambria Math\";\r\n    panose-1: 2 4 5 3 5 4 6 3 2 4;\r\n  }\r\n  /* Style Definitions */\r\n  p.MsoNormal, li.MsoNormal, div.MsoNormal {\r\n    margin: 0cm;\r\n    margin-bottom: .0001pt;\r\n    line-height: 115%;\r\n    font-size: 11.0pt;\r\n    font-family: \"Arial\",sans-serif;\r\n    color: black;\r\n  }\r\n\r\n  h1 {\r\n    margin-top: 20.0pt;\r\n    margin-right: 0cm;\r\n    margin-bottom: 6.0pt;\r\n    margin-left: 0cm;\r\n    line-height: 115%;\r\n    page-break-after: avoid;\r\n    font-size: 20.0pt;\r\n    font-family: \"Arial\",sans-serif;\r\n    color: black;\r\n    font-weight: normal;\r\n  }\r\n\r\n  h2 {\r\n    margin-top: 18.0pt;\r\n    margin-right: 0cm;\r\n    margin-bottom: 6.0pt;\r\n    margin-left: 0cm;\r\n    line-height: 115%;\r\n    page-break-after: avoid;\r\n    font-size: 16.0pt;\r\n    font-family: \"Arial\",sans-serif;\r\n    color: black;\r\n    font-weight: normal;\r\n  }\r\n\r\n  h3 {\r\n    margin-top: 16.0pt;\r\n    margin-right: 0cm;\r\n    margin-bottom: 4.0pt;\r\n    margin-left: 0cm;\r\n    line-height: 115%;\r\n    page-break-after: avoid;\r\n    font-size: 14.0pt;\r\n    font-family: \"Arial\",sans-serif;\r\n    color: #434343;\r\n    font-weight: normal;\r\n  }\r\n\r\n  h4 {\r\n    margin-top: 14.0pt;\r\n    margin-right: 0cm;\r\n    margin-bottom: 4.0pt;\r\n    margin-left: 0cm;\r\n    line-height: 115%;\r\n    page-break-after: avoid;\r\n    font-size: 12.0pt;\r\n    font-family: \"Arial\",sans-serif;\r\n    color: #666666;\r\n    font-weight: normal;\r\n  }\r\n\r\n  h5 {\r\n    margin-top: 12.0pt;\r\n    margin-right: 0cm;\r\n    margin-bottom: 4.0pt;\r\n    margin-left: 0cm;\r\n    line-height: 115%;\r\n    page-break-after: avoid;\r\n    font-size: 11.0pt;\r\n    font-family: \"Arial\",sans-serif;\r\n    color: #666666;\r\n    font-weight: normal;\r\n  }\r\n\r\n  h6 {\r\n    margin-top: 12.0pt;\r\n    margin-right: 0cm;\r\n    margin-bottom: 4.0pt;\r\n    margin-left: 0cm;\r\n    line-height: 115%;\r\n    page-break-after: avoid;\r\n    font-size: 11.0pt;\r\n    font-family: \"Arial\",sans-serif;\r\n    color: #666666;\r\n    font-weight: normal;\r\n    font-style: italic;\r\n  }\r\n\r\n  p.MsoHeading7, li.MsoHeading7, div.MsoHeading7 {\r\n    mso-style-link: \"Heading 7 Char\";\r\n    margin-top: 2.0pt;\r\n    margin-right: 0cm;\r\n    margin-bottom: 0cm;\r\n    margin-left: 0cm;\r\n    margin-bottom: .0001pt;\r\n    line-height: 115%;\r\n    page-break-after: avoid;\r\n    font-size: 12.0pt;\r\n    font-family: \"Arial\",sans-serif;\r\n    color: #002060;\r\n    font-style: italic;\r\n  }\r\n\r\n  p.MsoHeading8, li.MsoHeading8, div.MsoHeading8 {\r\n    mso-style-link: \"Heading 8 Char\";\r\n    margin-top: 2.0pt;\r\n    margin-right: 0cm;\r\n    margin-bottom: 0cm;\r\n    margin-left: 0cm;\r\n    margin-bottom: .0001pt;\r\n    line-height: 115%;\r\n    page-break-after: avoid;\r\n    font-size: 10.5pt;\r\n    font-family: \"Calibri Light\",sans-serif;\r\n    color: #272727;\r\n  }\r\n\r\n  p.MsoTitle, li.MsoTitle, div.MsoTitle {\r\n    margin-top: 0cm;\r\n    margin-right: 0cm;\r\n    margin-bottom: 3.0pt;\r\n    margin-left: 0cm;\r\n    line-height: 115%;\r\n    page-break-after: avoid;\r\n    font-size: 26.0pt;\r\n    font-family: \"Arial\",sans-serif;\r\n    color: black;\r\n  }\r\n\r\n  p.MsoSubtitle, li.MsoSubtitle, div.MsoSubtitle {\r\n    margin-top: 0cm;\r\n    margin-right: 0cm;\r\n    margin-bottom: 16.0pt;\r\n    margin-left: 0cm;\r\n    line-height: 115%;\r\n    page-break-after: avoid;\r\n    font-size: 15.0pt;\r\n    font-family: \"Arial\",sans-serif;\r\n    color: #666666;\r\n  }\r\n\r\n  a:link, span.MsoHyperlink {\r\n    color: blue;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  a:visited, span.MsoHyperlinkFollowed {\r\n    color: #954F72;\r\n    text-decoration: underline;\r\n  }\r\n\r\n  p {\r\n    margin-right: 0cm;\r\n    margin-left: 0cm;\r\n    font-size: 12.0pt;\r\n    font-family: \"Times New Roman\",serif;\r\n  }\r\n\r\n    p.MsoNoSpacing, li.MsoNoSpacing, div.MsoNoSpacing {\r\n      margin-top: 3.0pt;\r\n      margin-right: 0cm;\r\n      margin-bottom: 9.0pt;\r\n      margin-left: 0cm;\r\n      background: white;\r\n      font-size: 10.0pt;\r\n      font-family: \"Helvetica\",sans-serif;\r\n      color: #212121;\r\n    }\r\n\r\n  span.Heading7Char {\r\n    mso-style-name: \"Heading 7 Char\";\r\n    mso-style-link: \"Heading 7\";\r\n    font-family: \"Times New Roman\",serif;\r\n    color: #002060;\r\n    font-style: italic;\r\n  }\r\n\r\n  span.Heading8Char {\r\n    mso-style-name: \"Heading 8 Char\";\r\n    mso-style-link: \"Heading 8\";\r\n    font-family: \"Calibri Light\",sans-serif;\r\n    color: #272727;\r\n  }\r\n\r\n  .MsoChpDefault {\r\n    font-family: \"Arial\",sans-serif;\r\n    color: black;\r\n  }\r\n\r\n  .MsoPapDefault {\r\n    line-height: 115%;\r\n  }\r\n\r\n  @page WordSection1 {\r\n    size: 595.3pt 841.9pt;\r\n    margin: 54.0pt 54.0pt 54.0pt 54.0pt;\r\n  }\r\n\r\n  div.WordSection1 {\r\n    page: WordSection1;\r\n  }\r\n  /* List Definitions */\r\n  ol {\r\n    margin-bottom: 0cm;\r\n  }\r\n\r\n  ul {\r\n    margin-bottom: 0cm;\r\n  }\r\n  -->\r\n</style>\r\n\r\n\r\n\r\n<div bgcolor=white lang=EN-GB link=blue vlink=\"#954F72\">\r\n\r\n  <div class='row justify-content-center'>\r\n\r\n    <div class=\"col-12 col-sm-12 col-md-7 col-lg-7 col-xl-6 \">\r\n      <div class=WordSection1>\r\n\r\n        <h1><a name=\"_30j0zll\"></a>Cookies Policy</h1>\r\n        <br />\r\n        <p class=MsoNoSpacing>Last updated: (2018-05-23)</p>\r\n\r\n        <p class=MsoNormal>&nbsp;</p>\r\n\r\n        <p class=MsoNoSpacing>\r\n          Wood Concepts\r\n          (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) uses cookies on WoodConcepts.ie (the &quot;Service&quot;). By\r\n          using the Service, you consent to the use of cookies.\r\n        </p>\r\n\r\n        <p class=MsoNoSpacing>\r\n          Our Cookies Policy explains what cookies are, how we use\r\n          cookies, how third-parties we may partner with may use cookies on the Service,\r\n          your choices regarding cookies and further information about cookies.\r\n        </p>\r\n\r\n        <p class=MsoNormal>&nbsp;</p>\r\n\r\n        <p class=MsoHeading7 style='margin-top:0cm'>What are cookies</p>\r\n\r\n        <p class=MsoNormal>&nbsp;</p>\r\n\r\n        <p class=MsoNoSpacing>\r\n          Cookies are small pieces of text sent by your web browser\r\n          by a website you visit. A cookie file is stored in your web browser and allows\r\n          the Service or a third-party to recognize you and make your next visit easier\r\n          and the Service more useful to you.\r\n        </p>\r\n\r\n        <p class=MsoNoSpacing>\r\n          Cookies can be &quot;persistent&quot; or\r\n          &quot;session&quot; cookies.\r\n        </p>\r\n\r\n        <p class=MsoNormal>&nbsp;</p>\r\n\r\n        <p class=MsoHeading7 style='margin-top:0cm'>\r\n          How Wood Concepts uses cookies\r\n        </p>\r\n\r\n        <p class=MsoNoSpacing style='margin:0cm;margin-bottom:.0001pt'>&nbsp;</p>\r\n\r\n        <p class=MsoNoSpacing style='margin:0cm;margin-bottom:.0001pt'>\r\n          When you use and\r\n          access the Service, we may place a number of cookies files in your web browser.\r\n        </p>\r\n\r\n        <p class=MsoNoSpacing style='margin:0cm;margin-bottom:.0001pt'>&nbsp;</p>\r\n\r\n        <p class=MsoNoSpacing style='margin:0cm;margin-bottom:.0001pt'>\r\n          We use cookies\r\n          for the following purposes: to enable certain functions of the Service, and to\r\n          provide analytics, such as Google Analytics.\r\n        </p>\r\n\r\n        <p class=MsoNormal style='line-height:normal'><b>&nbsp;</b></p>\r\n\r\n        <p class=MsoNormal style='margin-bottom:12.0pt;line-height:normal;background:\r\nwhite'>\r\n          <b>\r\n            <span style='font-size:10.0pt;font-family:\"Helvetica\",sans-serif;\r\ncolor:#212121'>Google Analytics cookies and identifiers</span>\r\n          </b>\r\n        </p>\r\n\r\n        <p class=MsoNoSpacing>\r\n          Google Analytics uses first-party cookies to report on\r\n          visitor (aka. user) interactions on WoodConcepts.ie\r\n        </p>\r\n\r\n        <p class=MsoNoSpacing>\r\n          Users may disable cookies or delete any individual\r\n          cookie.&nbsp;<a href=\"https://policies.google.com/technologies/cookies\">\r\n            <span style='color:#7759AE'>Learn more</span>\r\n          </a>. In addition, Google Analytics\r\n          supports an optional browser&nbsp;<a href=\"https://tools.google.com/dlpage/gaoptout/\"><span style='color:#7759AE'>add-on</span></a>&nbsp;that\r\n          - once installed and enabled - disables measurement by Google Analytics for any\r\n          site a user visits. Note that this add-on only disables Google Analytics\r\n          measurement.\r\n        </p>\r\n\r\n        <p class=MsoNoSpacing>\r\n          Google Analytics also collects Internet Protocol (IP)\r\n          addresses to provide and protect the security of the service, and to give Wood\r\n          Concepts a sense of which country, state, or city in the world their users come\r\n          from (also known as &quot;IP geolocation&quot;). Google Analytics provides a\r\n          method to mask IPs that are collected (detailed below) but note that website\r\n          owners have access to their users’ IP addresses even if the website owners do\r\n          not use Google Analytics.\r\n        </p>\r\n\r\n        <p class=MsoNormal style='margin-bottom:12.0pt'>\r\n          <b>\r\n            <span style='font-size:10.0pt;\r\nline-height:115%'>Personally Identifiable Information Prohibition</span>\r\n          </b>\r\n        </p>\r\n\r\n        <p class=MsoNoSpacing style='margin:0cm;margin-bottom:.0001pt'>\r\n          Wood Concepts\r\n          does not send any&nbsp;<a href=\"https://support.google.com/analytics/answer/7686480\">\r\n            <span style='color:#7759AE'>Personally Identifiable Information</span>\r\n          </a>&nbsp;to\r\n          Google Analytics.\r\n        </p>\r\n\r\n        <p class=MsoNoSpacing style='margin:0cm;margin-bottom:.0001pt'>&nbsp;</p>\r\n\r\n        <p class=MsoNormal style='margin-top:3.0pt;margin-right:0cm;margin-bottom:9.0pt;\r\nmargin-left:0cm;line-height:normal;background:white'>\r\n          <b>\r\n            <span style='font-size:\r\n10.0pt;font-family:\"Helvetica\",sans-serif;color:#212121'>Data Usage</span>\r\n          </b>\r\n        </p>\r\n\r\n        <p class=MsoNoSpacing>\r\n          Identifiers such as cookies and app instance IDs are used\r\n          to measure user interactions with a customer’s sites and/or apps, while IP\r\n          addresses are used to provide and protect the security of the service, and to\r\n          give the customer a sense of where in the world their users come from.\r\n        </p>\r\n\r\n        <p class=MsoNoSpacing>\r\n          We do not share Google Analytics data, except in limited\r\n          circumstances when required by law.\r\n        </p>\r\n\r\n        <p class=MsoNoSpacing>\r\n          Security-dedicated engineering teams at Google guard\r\n          against external threats to data. Internal access to data (e.g., by employees)\r\n          is limited by strict access controls (both internal policy controls and\r\n          automated technical controls such as authentication, SSL, and security logs) to\r\n          only those with a business need to access it.\r\n        </p>\r\n        <br />\r\n        <p class=MsoHeading7>\r\n          <strong>\r\n            <span style='font-family:\"Arial\",sans-serif;\r\nfont-weight:normal'>Data privacy and security</span>\r\n          </strong>\r\n        </p>\r\n\r\n        <p class=MsoNormal>&nbsp;</p>\r\n\r\n        <p class=MsoNormal><b>Certifications</b></p>\r\n\r\n        <p class=MsoNormal><b>&nbsp;</b></p>\r\n\r\n        <p class=MsoNormal>EU Privacy Shield</p>\r\n\r\n        <p class=MsoNoSpacing>\r\n          The U.S. Department of Commerce has approved Google's\r\n          certification to the Privacy Shield as fully compliant. View Google’s&nbsp;<a href=\"https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI\">\r\n            Privacy\r\n            Shield certification\r\n          </a>.\r\n        </p>\r\n\r\n        <p class=MsoNormal>&nbsp;</p>\r\n\r\n        <p class=MsoNormal>ISO 27001</p>\r\n\r\n        <p class=MsoNoSpacing>\r\n          Google has earned ISO 27001 certification for the\r\n          systems, applications, people, technology, processes, and data centers serving\r\n          a number of Google products, including Google Analytics.&nbsp;<a href=\"https://storage.googleapis.com/support-kms-prod/bk5ogXBjnUep68clvPvX8lSayrFt5ZZAMC5G\">\r\n            Download\r\n            the certificate here (PDF)\r\n          </a>&nbsp;or&nbsp;<a href=\"https://www.iso.org/isoiec-27001-information-security.html\">\r\n            learn more\r\n            about ISO 27001\r\n          </a>.\r\n        </p>\r\n\r\n        <h4 style='margin-top:15.0pt;margin-right:0cm;margin-bottom:3.0pt;margin-left:\r\n0cm;line-height:18.0pt;background:white'>\r\n          <span style='font-family:\"Helvetica\",sans-serif;\r\ncolor:#212121'>Information security</span>\r\n        </h4>\r\n\r\n        <p class=MsoNoSpacing>\r\n          In web-based computing, security of both data and\r\n          applications is critical. Google dedicates significant resources towards\r\n          securing applications and data handling to prevent unauthorized access to data.\r\n        </p>\r\n\r\n        <p style='margin-top:3.0pt;margin-right:0cm;margin-bottom:9.0pt;margin-left:\r\n0cm;background:white'>\r\n          <span style='font-size:10.0pt;font-family:\"Helvetica\",sans-serif;\r\ncolor:#212121'>\r\n            Data is stored in an encoded format optimized for performance,\r\n            rather than stored in a traditional file system or database manner. Data is\r\n            dispersed across a number of physical and logical volumes for redundancy and\r\n            expedient access, thereby obfuscating it from tampering.\r\n          </span>\r\n        </p>\r\n\r\n        <p style='margin-top:3.0pt;margin-right:0cm;margin-bottom:9.0pt;margin-left:\r\n0cm;background:white'>\r\n          <span style='font-size:10.0pt;font-family:\"Helvetica\",sans-serif;\r\ncolor:#212121'>\r\n            Google applications run in a multi-tenant, distributed\r\n            environment. Rather than segregating each customer's data onto a single machine\r\n            or set of machines, data from all Google users (consumers, business, and even\r\n            Google's own data) is distributed among a shared infrastructure composed of\r\n            Google's many homogeneous machines and located in Google's data centers.\r\n          </span>\r\n        </p>\r\n\r\n        <p style='margin-top:3.0pt;margin-right:0cm;margin-bottom:9.0pt;margin-left:\r\n0cm;background:white'>\r\n          <span style='font-size:10.0pt;font-family:\"Helvetica\",sans-serif;\r\ncolor:#212121'>\r\n            In addition, Google Analytics ensures secure transmission of its\r\n            JavaScript libraries and measurement data. Google Analytics by default uses\r\n            HTTP Strict Transport Security (HSTS), which instructs browsers that support\r\n            HTTP over SSL (HTTPS) to use that encryption protocol for all communication\r\n            between end users, websites, and Google Analytics servers.&nbsp;\r\n          </span><a href=\"https://support.google.com/analytics/answer/6385009\">\r\n            <span style='font-size:10.0pt;font-family:\"Helvetica\",sans-serif;color:#7759AE'>\r\n              Learn\r\n              more\r\n            </span>\r\n          </a>\r\n        </p>\r\n\r\n        <p class=MsoNormal style='line-height:normal'><b>&nbsp;</b></p>\r\n\r\n        <p class=MsoNormal style='line-height:normal'><b>&nbsp;</b></p>\r\n\r\n        <p class=MsoNormal style='line-height:normal'>\r\n          <b>\r\n            What are your choices\r\n            regarding cookies\r\n          </b>\r\n        </p>\r\n\r\n        <p class=MsoNormal>&nbsp;</p>\r\n\r\n        <p class=MsoNoSpacing>\r\n          If you'd like to delete cookies or instruct your web\r\n          browser to delete or refuse cookies, please visit the help pages of your web\r\n          browser.\r\n        </p>\r\n\r\n        <p class=MsoNoSpacing>\r\n          Please note, however, that if you delete cookies or\r\n          refuse to accept them, you might not be able to use all of the features we\r\n          offer, you may not be able to store your preferences, and some of our pages\r\n          might not display properly.\r\n        </p>\r\n\r\n        <p class=MsoNormal>&nbsp;</p>\r\n\r\n        <p class=MsoNormal style='line-height:normal'>\r\n          <b>\r\n            Where can your find more\r\n            information about cookies\r\n          </b>\r\n        </p>\r\n\r\n        <p class=MsoNormal>&nbsp;</p>\r\n\r\n        <p class=MsoNoSpacing>\r\n          You can learn more about cookies and the following\r\n          third-party websites:\r\n        </p>\r\n\r\n        <p class=MsoNoSpacing style='margin-left:36.0pt;text-indent:-18.0pt'>\r\n          <span style='font-family:Wingdings'>\r\n            §<span style='font:7.0pt \"Times New Roman\"'>\r\n              &nbsp;\r\n            </span>\r\n          </span>AllAboutCookies: <a href=\"http://www.allaboutcookies.org/\">\r\n            <span style='color:#1155CC'>http://www.allaboutcookies.org/</span>\r\n          </a>\r\n        </p>\r\n\r\n        <p class=MsoNoSpacing style='margin-left:36.0pt;text-indent:-18.0pt'>\r\n          <span style='font-family:Wingdings'>\r\n            §<span style='font:7.0pt \"Times New Roman\"'>\r\n              &nbsp;\r\n            </span>\r\n          </span>Network Advertising Initiative: <a href=\"http://www.networkadvertising.org/\"><span style='color:#1155CC'>http://www.networkadvertising.org/</span></a>\r\n        </p>\r\n\r\n        <p class=MsoNoSpacing>&nbsp;</p>\r\n\r\n        <p class=MsoNoSpacing>Sources: <i>https://support.google.com/analytics/answer/6004245</i></p>\r\n\r\n        <p class=MsoNormal style='line-height:normal'>&nbsp;</p>\r\n\r\n        <p class=MsoNormal style='line-height:normal'>&nbsp;</p>\r\n\r\n        <p class=MsoNormal style='line-height:normal'>&nbsp;</p>\r\n\r\n        <p class=MsoNormal style='line-height:normal'>&nbsp;</p>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/privacy-statement/privacy-statement.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/privacy-statement/privacy-statement.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class='row justify-content-center'>\r\n\r\n  <div class=\"col-12 col-sm-12 col-md-7 col-lg-7 col-xl-6 \">\r\n\r\n\r\n\r\n    <h1>Privacy Statement</h1>\r\n    <p>Document last updated: 24<sup>th</sup> May 2018</p>\r\n\r\n\r\n    <br />\r\n    <p>Timber marketing Services Unlimited (also known as Wood Concepts) will be the Data Controller of the personal data that you provide to us. Wood Concepts are committed to upholding all legislative requirements with regards to data protection and privacy. This statement will outline our privacy policy in association with this website and personal data collection &amp; processing.</p>\r\n\r\n    <h3>Fair Processing Notice</h3>\r\n    <p>For some of the services &amp; products which we offer, we may require information from you. The personal data we collect from you may include: name, address, telephone number, email address, company name and details.</p>\r\n\r\n    <br />\r\n    <ul>\r\n      <li>The personal data we collect from you will only be used for the following purposes:</li>\r\n      <li>The provision of services &amp; products</li>\r\n      <li>Normal communication in relation to the above services &amp; products</li>\r\n      <li>Correspondence in relation to Billing and Accounts Receivable</li>\r\n      <li>Delivery notifications, new service offerings and service updates</li>\r\n      <li>To personalize your experience</li>\r\n      <li>To improve our website</li>\r\n      <li>To improve customer service</li>\r\n      <li>To administer a contest, promotion, survey or other site feature</li>\r\n      <li>To send periodic emails</li>\r\n    </ul>\r\n\r\n\r\n    <p>By consenting to this, you are giving us permission to perform those actions. You may withdraw consent at any time by sending an email to: info@tms.ie</p>\r\n\r\n    <h3>Why Wood Concepts Needs to Collect and Store Personal Data</h3>\r\n    <p>In order for us to provide you with services &amp; products services we need to collect personal data for correspondence purposes and/or detailed service provision. In any event, we are committed to ensuring that the information we collect, and use is appropriate for this purpose, and does not constitute an invasion of your privacy.</p>\r\n\r\n\r\n    <h2>Definitions</h2>\r\n\r\n    <h4>Personal Data</h4>\r\n    <p>Under the EU&rsquo;s General Data Protection Regulation &ldquo;Personal Data&rdquo; is defined as follows:</p>\r\n    <p>Any information relating to an identified or identifiable natural person (data subject); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.</p>\r\n    <h4>Usage Data</h4>\r\n    <p>&ldquo;Usage Data&rdquo; is data collected automatically either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>\r\n    <h4>Data Controller</h4>\r\n    <p>&ldquo;Data Controller&rdquo; means a person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal data are, or are to be, processed.</p>\r\n    <p>For the purpose of this Privacy Policy, we are a Data Controller of your data.</p>\r\n    <h4>Data Processor (or Service Providers)</h4>\r\n    <p>&ldquo;Data Processor&rdquo; (or &ldquo;Service Provider&rdquo;) means any person (other than an employee of the Data Controller) who processes the data on behalf of the Data Controller. We may use the services of various Service Providers in order to process your data more effectively.</p>\r\n    <h4>Data Subject</h4>\r\n    <p>&ldquo;Data Subject&rdquo; is any living individual who is the subject of Personal Data.</p>\r\n    <h4>User</h4>\r\n    <p>The &ldquo;User&rdquo; is the individual using our Service. The User corresponds to the Data Subject, who is the subject of Personal Data.</p>\r\n    <h4>Cookies</h4>\r\n    <p>&ldquo;Cookies&rdquo; are small pieces of data stored on a User&rsquo;s device.</p>\r\n\r\n\r\n    <h2>Information Collection and Used</h2>\r\n    <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>\r\n\r\n    <h3>Types of Data Collected</h3>\r\n    <h4>Personal Data</h4>\r\n    <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&ldquo;Personal Data&rdquo;). Personally identifiable information may include:</p>\r\n    <ul>\r\n      <li>First name and last name</li>\r\n      <li>Email address</li>\r\n      <li>Phone number</li>\r\n      <li>Place of business</li>\r\n      <li>Cookies and Usage Data</li>\r\n    </ul>\r\n    <p>If you actively consent, we may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send or by contacting us.</p>\r\n    <h4>Usage Data</h4>\r\n    <p>We may also collect information how the Service is accessed and used (&ldquo;Usage Data&rdquo;). This Usage Data may include information such as your computer&rsquo;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>\r\n    <h4>Location Data</h4>\r\n    <p>We may use and store information about your location if you give us permission to do so (&ldquo;Location Data&rdquo;). We use this data to provide features of our Service, to improve and customise our Service.</p>\r\n    <p>You can enable or disable location services when you use our Service at any time, through your device settings.</p>\r\n    <h4>Tracking &amp; Cookies Data</h4>\r\n    <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>\r\n    <p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyse our Service.</p>\r\n    <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>\r\n\r\n    <h3>How Wood Concepts uses cookies</h3>\r\n    <p>When you use and access the Service, we may place a number of cookies files in your web browser.</p>\r\n    <p>We use cookies for the following purposes: to enable certain functions of the Service, and to provide analytics, such as Google Analytics.</p>\r\n\r\n    <p><strong>GOOGLE ANALYTICS COOKIES AND IDENTIFIERS</strong></p>\r\n    <p>This Service uses Google Analytics to monitor and analyse the use of our Service. Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data may be shared with other Google services. Google may use the collected data to contextualise and personalise the ads of its own advertising network.</p>\r\n    <p>You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.</p>\r\n    <p>Users may disable cookies or delete any individual cookie.&nbsp;<a href=\"https://policies.google.com/technologies/cookies\">Learn more</a>. In addition, Google Analytics supports an optional browser&nbsp;<a href=\"https://tools.google.com/dlpage/gaoptout/\">add-on</a>&nbsp;that - once installed and enabled - disables measurement by Google Analytics for any site a user visits. Note that this add-on only disables Google Analytics measurement.</p>\r\n    <p>Google Analytics also collects Internet Protocol (IP) addresses to provide and protect the security of the service, and to give Wood Concepts a sense of which country, state, or city in the world their users come from (also known as \"IP geolocation\"). Google Analytics provides a method to mask IPs that are collected (detailed below) but note that website owners have access to their users&rsquo; IP addresses even if the website owners do not use Google Analytics.</p>\r\n    <p>Wood Concepts does not send any&nbsp;other <a href=\"https://support.google.com/analytics/answer/7686480\">Personally Identifiable Information</a>&nbsp;to Google Analytics.</p>\r\n    <p>For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms web page: <a href=\"https://policies.google.com/privacy\">https://policies.google.com/privacy</a></p>\r\n\r\n    <p><strong>Data Usage</strong></p>\r\n\r\n    <p>Identifiers such as cookies and app instance IDs are used to measure user interactions with a customer&rsquo;s sites and/or apps, while IP addresses are used to provide and protect the security of the service, and to give the customer a sense of where in the world their users come from.</p>\r\n    <p>We do not share Google Analytics data, except in circumstances when required by law.</p>\r\n    <p>Security-dedicated engineering teams at Google guard against external threats to data. Internal access to data (e.g., by employees) is by strict access controls (both internal policy controls and automated technical controls such as authentication, SSL, and security logs) to only those with a business need to access it.</p>\r\n\r\n    <h2><strong>Data privacy and security</strong></h2>\r\n    <h3>Certifications</h3>\r\n    <p>EU Privacy Shield</p>\r\n    <p>The U.S. Department of Commerce has approved Google's certification to the Privacy Shield as fully compliant. View Google&rsquo;s&nbsp;<a href=\"https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI\">Privacy Shield certification</a>.</p>\r\n\r\n    <p>ISO 27001</p>\r\n    <p>Google has earned ISO 27001 certification for the systems, applications, people, technology, processes, and data centers serving a number of Google products, including Google Analytics.&nbsp;<a href=\"https://storage.googleapis.com/support-kms-prod/bk5ogXBjnUep68clvPvX8lSayrFt5ZZAMC5G\">Download the certificate here (PDF)</a>&nbsp;or&nbsp;<a href=\"https://www.iso.org/isoiec-27001-information-security.html\">learn more about ISO 27001</a>.</p>\r\n\r\n    <h3>Information security</h3>\r\n    <p>In web-based computing, security of both data and applications is critical. Google dedicates significant resources towards securing applications and data handling to prevent unauthorized access to data.</p>\r\n\r\n    <p>Data is stored in an encoded format optimized for performance, rather than stored in a traditional file system or database manner. Data is dispersed across a number of physical and logical volumes for redundancy and expedient access, thereby obfuscating it from tampering.</p>\r\n    <p>Google applications run in a multi-tenant, distributed environment. Rather than segregating each customer's data onto a single machine or set of machines, data from all Google users (consumers, business, and even Google's own data) is distributed among a shared infrastructure composed of Google's many homogeneous machines and located in Google's data centers.</p>\r\n    <p>In addition, Google Analytics ensures secure transmission of its JavaScript libraries and measurement data. Google Analytics by default uses HTTP Strict Transport Security (HSTS), which instructs browsers that support HTTP over SSL (HTTPS) to use that encryption protocol for all communication between end users, websites, and Google Analytics servers.&nbsp;<a href=\"https://support.google.com/analytics/answer/6385009\">Learn more</a></p>\r\n    <p>Sources: <a href=\"https://support.google.com/analytics/answer/6004245\">https://support.google.com/analytics/answer/6004245</a></p>\r\n\r\n    <h3>What are your choices regarding cookies</h3>\r\n    <p>If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Listed here are the commonly used web browsers, with link to their support pages containing information on how to delete or refuse cookies:</p>\r\n    <ul>\r\n      <li><a href=\"https://support.google.com/accounts/answer/32050\">Google Chrome</a></li>\r\n      <li><a href=\"https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy\">Microsoft Edge</a></li>\r\n      <li><a href=\"https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies\">Microsoft Internet Explorer</a></li>\r\n      <li><a href=\"https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored\">Mozilla Firefox</a></li>\r\n      <li><a href=\"https://support.apple.com/kb/PH21411?locale=en_GB\">Safari</a></li>\r\n    </ul>\r\n\r\n    <p>Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.</p>\r\n\r\n    <h3>Where you can find more information about cookies</h3>\r\n    <p>You can learn more about cookies and the following third-party websites:</p>\r\n    <p>AllAboutCookies: <a href=\"http://www.allaboutcookies.org/\">http://www.allaboutcookies.org/</a></p>\r\n    <p>Network Advertising Initiative: <a href=\"http://www.networkadvertising.org/\">http://www.networkadvertising.org/</a></p>\r\n\r\n    <h2>Use of Data</h2>\r\n    <p>Wood Concepts may use the collected data for various purposes:</p>\r\n    <br />\r\n    <ul>\r\n      <li>To provide and maintain our Service</li>\r\n      <li>To notify you about changes to our Service</li>\r\n      <li>To allow you to participate in interactive features of our Service when you choose to do so</li>\r\n      <li>To provide customer support</li>\r\n      <li>To gather analysis or valuable information so that we can improve our Service</li>\r\n      <li>To monitor the usage of our Service</li>\r\n      <li>To detect, prevent and address technical issues</li>\r\n      <li>To provide you with news, offers and general information about other services and events we offer that are similar to those that you have already enquired about or been involved with, unless you have opted not to receive such information</li>\r\n    </ul>\r\n\r\n    <h2>Retention of Data</h2>\r\n    <p>Wood Concepts will retain your Personal Data only for as long as it is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>\r\n    <p>Wood Concepts will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.</p>\r\n    <h2>Transfer of Data</h2>\r\n    <p>Your information, including Personal Data, may be transferred to &mdash; and maintained on &mdash; computers located outside of your country or other governmental jurisdiction, where the data protection laws may differ than those from your jurisdiction.</p>\r\n    <p>Your consent to this Privacy Policy, followed by your submission of such information, represents your agreement to that transfer.</p>\r\n    <p>Wood Concepts will take all reasonably necessary steps to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of Personal Data will take place to an organisation or a country unless there are adequate controls in place, including the security of your data and other personal information.</p>\r\n    <h2>Disclosure of Data</h2>\r\n\r\n    <h3>Disclosure for Law Enforcement</h3>\r\n    <p>Under certain circumstances, Wood Concepts may be required to disclose Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>\r\n    <h3>Legal Requirements</h3>\r\n    <p>Wood Concepts may disclose Personal Data in the good faith belief that such action is necessary to:</p>\r\n    <ul>\r\n      <li>To comply with a legal obligation</li>\r\n      <li>To protect and defend the rights or property of Wood Concepts</li>\r\n      <li>To prevent or investigate possible wrongdoing in connection with the Service</li>\r\n      <li>To protect the personal safety of users of the Service or the public</li>\r\n      <li>To protect against legal liability</li>\r\n    </ul>\r\n\r\n    <h2>Security of Data</h2>\r\n    <p>The security of your data is important to us but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we take the necessary precautions to protect your Personal Data using commercially acceptable means, we cannot guarantee its absolute security.</p>\r\n    <h2>Your Rights</h2>\r\n    <p>Wood Concepts aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>\r\n    <p>Whenever possible, you can update your Personal Data by contacting us directly to make the required changes.</p>\r\n    <p>You have the right to be given a copy of information held by us about you. We may charge a fee for this which will not exceed &euro;5.00 euros. We will provide the requested information to you within 30 calendar days of the receipt of a valid request in writing or by email.</p>\r\n    <p>You have the right to have any inaccuracies in the i Personal Data held by us about you corrected, if inaccurate, or erased, if we do not have a legitimate reason for retaining that information. We will accede to any such valid requests within 30 calendar days of the receipt of a valid request by email to: info@tms.ie</p>\r\n    <p>We reserve the right to request you to provide additional information in order to enable us to identify your personal data and/or to verify your identity.</p>\r\n    <h2>Service Providers</h2>\r\n    <p>We may employ third party companies and individuals to facilitate our Service (&ldquo;Service Providers&rdquo;), to provide the Service on our behalf, to perform Service-related services or to assist us in analysing how our Service is used.</p>\r\n    <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>\r\n    <h2>Links to Other Sites</h2>\r\n    <p>Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party&rsquo;s site. We strongly advise you to review the Privacy Policy of every site you visit.</p>\r\n    <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services.</p>\r\n    <h2>Children&rsquo;s Privacy</h2>\r\n    <p>Our Service does not address anyone under the age of 18 (&ldquo;Children&rdquo;). We do not knowingly collect personally identifiable information of Children under the age of 18. If you are a parent or guardian and you believe that your Child/Children may have provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from Children without verification of parental consent, we will take the appropriate steps to remove that information from our records.</p>\r\n    <h2>Changes to this Privacy Policy</h2>\r\n    <p>We may update our Privacy Policy from time to time. Any changes to this Privacy Policy will be notified within the new Privacy Policy on this page.</p>\r\n    <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>\r\n    <h4>Your Consent</h4>\r\n    <p>By using our site, you consent to our websites privacy policy.</p>\r\n    <h4>Governing Law and Jurisdiction</h4>\r\n    <p>This legal notice and all issues regarding this website are governed exclusively by Irish law and are subject to the exclusive jurisdiction of the Irish courts.</p>\r\n    <h2>Contact Us</h2>\r\n    <p>If you have any questions about this Privacy Policy or requests regarding your personally identifiable or the possible we may have personally identifiable relative to you, please contact us at: &nbsp;</p>\r\n\r\n    <p>Email: info@tms.ie</p>\r\n    <p>Phone: 0053 (0) 1 840 83 88</p>\r\n    <p>Wood Concepts, 23 Town Centre Mall, Swords, Co. Dublin&nbsp;</p>\r\n\r\n    <br />\r\n    <a href=\"../../assets/gdpr-wood-concepts-privacy-statement.pdf\">Download a copy of this Privacy Statement</a>\r\n\r\n    <br />\r\n    <br />\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-detail.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-detail.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"productDetailsPage\">\r\n\r\n  <a class=\"defaultButton\" (click)='onBack()'>\r\n    <div class=\"backButton\">\r\n\r\n      <i class='fa fa-lg fa-chevron-left'></i> Back\r\n\r\n    </div>\r\n  </a>\r\n\r\n  <div *ngIf='product'>\r\n   \r\n\r\n    <div class='row no-gutter'>\r\n\r\n      <div class=\"col-12 col-sm-10 col-md-6 col-lg-6 col-xl-5\">\r\n        <img [src]='product.imageUrl' [title]='product.productName'>\r\n        <div class=\"productImageTextBox\">\r\n          <div class=\"productName\">\r\n            {{product.productName}}\r\n          </div>\r\n          <div>{{ product.description}}</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-12 col-sm-10 col-md-6 col-lg-6 col-xl-5\">\r\n\r\n        <div class=\"productDetails\">\r\n          <div class=\"productDetailsHeading\">\r\n            Applications\r\n          </div>\r\n          <div class=\"productDetailsText\">\r\n            <div class=\"productDetailsTextParagraph\"><span class=\"bold\">{{product.applications1Heading}}</span>{{ product.applications1}}</div>\r\n            <div class=\"productDetailsTextParagraph\"><span class=\"bold\">{{product.applications2Heading}}</span>{{ product.applications2}}</div>\r\n          </div>\r\n\r\n          <div class=\"productDetailsHeading\">\r\n            Range\r\n          </div>\r\n          <div class=\"productDetailsText\">\r\n            <div class=\"productDetailsTextParagraph\"><span class=\"bold\">{{product.rangeHeading1}}</span>{{ product.sizes}}</div>\r\n            <div class=\"productDetailsTextParagraph\"><span class=\"bold\">{{product.rangeHeading2}}</span>{{ product.thicknesses}}</div>\r\n            <div class=\"productDetailsTextParagraph\"><span class=\"bold\">{{product.rangeHeading3}}</span>{{ product.sheetsPerPallet}}</div>\r\n            <div class=\"productDetailsTextParagraph\"><span class=\"bold\">{{product.rangeHeading4}}</span>{{ product.glue}}</div>\r\n            <div class=\"productDetailsTextParagraph\"><span class=\"bold\">{{product.rangeHeading5}}</span>{{ product.grade}}</div>\r\n            <div class=\"productDetailsTextParagraph\"><span class=\"bold\">{{product.rangeHeading6}}</span>{{ product.loadSizes}}</div>\r\n          </div>\r\n\r\n\r\n          <div class=\"productDetailsHeading\">\r\n            Certifications\r\n          </div>\r\n          <div class=\"productDetailsText\">\r\n            <div class=\"productDetailsTextParagraph\">{{ product.certifications}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!--<div class='row'>\r\n    <div class='col-md-3'>Code:</div>\r\n    <div class='col-md-6'>{{product.productCode | lowercase | convertToSpaces: '-'}}</div>\r\n</div>\r\n\r\n<div class='row'>\r\n    <div class='col-md-3'>Availability:</div>\r\n    <div class='col-md-6'>{{product.releaseDate}}</div>\r\n</div>\r\n<div class='row'>\r\n    <div class='col-md-3'>Price:</div>\r\n    <div class='col-md-6'>{{product.price|currency:'USD':true}}</div>\r\n</div>\r\n<div class='row'>\r\n    <div class='col-md-3'>5 Star Rating:</div>\r\n    <div class='col-md-6'>\r\n        <pm-star [rating]='product.starRating'>\r\n        </pm-star>\r\n    </div>\r\n</div>-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-list.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Hello :)\r\n<div id=\"searchDiv\">\r\n  <div class='row no-gutters justify-content-center'>\r\n\r\n\r\n    <button type=\"button\" (click)='openNav()' class=\"openbtn\">\r\n      <i class=\"fa fa-bars fa-3x\" aria-hidden=\"true\"></i>\r\n    </button>\r\n      <input\r\n             type='text' class=\"searchBox\" [(ngModel)]='listFilter' placeholder=\" Filter Products \" size=\"20\"/>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div id=\"productThumbnailsDiv\">\r\n  <div class=\"row no-gutters justify-content-center\" id=\"productThumbnails\">\r\n    <div class=\"thumbnailCol col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 \" *ngFor='let product of filteredProducts'>\r\n\r\n\r\n      <div *ngIf='products && products.length'>\r\n\r\n        <!--<img *ngIf='showImage'....-->\r\n\r\n        <div class=\"thumbnail\">\r\n          <img [src]='product.imageUrl'\r\n               [title]='product.productName'>\r\n        </div>\r\n        <div class=\"productThumbnailText\">\r\n\r\n          <div class=\"productName\">\r\n            <a [routerLink]=\"['/products', product.productId]\">\r\n              {{ product.productName }}\r\n            </a>\r\n          </div>\r\n\r\n          <div class=\"productDescription\">\r\n            {{ product.description }}\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"moreLink\">\r\n          More\r\n          <i id=\"productsChevron\" class=\"fa fa-lg fa-chevron-right\" aria-hidden=\"true\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n  <div *ngIf='errorMessage' class='alert alert-danger'>\r\n    Error: {{ errorMessage }}\r\n  </div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-list/product-list-filtered-by-category.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-list/product-list-filtered-by-category.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  product-list-filtered-by-category works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-menu.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-menu.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"mySidenav\" class=\"customSideNav\">\r\n\r\n  <div class=\"mySidenavHeaderDiv\">\r\n    PRODUCTS\r\n    <button type=\"button\" (click)='closeNav()' class=\"closebtn\">\r\n      <i class=\"fa fa-times-thin fa-2x\" aria-hidden=\"true\"></i>\r\n    </button>\r\n  </div>\r\n\r\n  <!--above is from is from https://www.w3schools.com/howto/howto_js_sidenav.asp\r\n      below is custom code -->\r\n\r\n  <div class=\"verticalMenu\">\r\n\r\n    <div class=\"productCategory\">\r\n      <a [routerLink]=\" ['/panel-products']\" (click)=\"recordClickedLink()\">\r\n        <div class=\"menuLevel1\" id=\"panelProducts\">\r\n          PANEL PRODUCTS\r\n        </div>\r\n      </a>\r\n\r\n      <a [routerLink]=\" ['/plywood']\">\r\n        <div class=\"menuLevel2\">\r\n          <div class=\"product\">Plywood</div>\r\n        </div>\r\n      </a>\r\n\r\n      <div class=\"menuLevel3 products\">\r\n        <a [routerLink]=\" ['/hardwood-ply']\"><div class=\"product\">Hardwood</div></a>\r\n        <a [routerLink]=\" ['/softwood-ply']\"><div class=\"product\">Softwood</div></a>\r\n        <a [routerLink]=\" ['/products/pourform']\"><div class=\"product\">Formwork</div></a>\r\n        <a [routerLink]=\" ['/birch']\"><div class=\"product\">Birch Plywood</div></a>\r\n      </div>\r\n\r\n      <div class=\"menuLevel2\">\r\n        <a [routerLink]=\" ['/products/durelisdek-peel-clean-mr-t-and-g4']\"><div class=\"product\">Durelisdek </div></a>\r\n        <!-- <a [routerLink]=\" ['/mdf']\"><div class=\"product\">MDF </div></a>-->\r\n        <a [routerLink]=\" ['/products/osb3-square-edge-and-t-and-g']\"><div class=\"product\">OSB </div></a>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"productCategory\">\r\n      <a [routerLink]=\" ['/insulation']\">\r\n        <div class=\"menuLevel1\">\r\n          INSULATION\r\n        </div>\r\n      </a>\r\n\r\n      <div class=\"menuLevel2\">\r\n        <a [routerLink]=\"['/products/therm']\"><div class=\"product\">Steico Therm Dry</div></a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"productCategory\">\r\n      <a [routerLink]=\" ['/i-joists']\">\r\n        <div class=\"menuLevel1\">\r\n          JOISTS\r\n        </div>\r\n      </a>\r\n\r\n      <div class=\"menuLevel2\">\r\n        <a [routerLink]=\"['/products/i-joists']\"><div class=\"product\">I-Joists</div></a>\r\n      <!--  <a [routerLink]=\"['/products/lvl']\"><div class=\"product\">LVL</div></a>\r\n        <a [routerLink]=\"['/products/glulam']\"><div class=\"product\">Glulam</div></a>-->\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"productCategory\">\r\n      <a [routerLink]=\" ['/softwood-timber']\">\r\n        <div class=\"menuLevel1\">\r\n          TIMBER PRODUCTS\r\n        </div>\r\n      </a>\r\n\r\n      <div class=\"menuLevel2\">\r\n        <a [routerLink]=\"['/products/timber-decking']\"><div class=\"product\">Decking</div></a>\r\n        <a [routerLink]=\"['/products/kd-reg']\"><div class=\"product\">Kiln Dried / KD Reg</div></a>\r\n        <a [routerLink]=\"['/products/long-lengths']\"><div class=\"product\">Long Lengths</div></a>\r\n        <a [routerLink]=\"['/products/scaffolding']\"><div class=\"product\">Scaffolding</div></a>\r\n        <a [routerLink]=\"['/products/new-sleepers-tanalised']\"><div class=\"product\">Sleepers</div></a>\r\n        <a [routerLink]=\"['/products/tan-treated']\"><div class=\"product\">Treated</div></a>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <!--   <a [routerLink]=\" ['/decking']\">\r\n      <div class=\"menuLevel1\">\r\n        Decking\r\n      </div>\r\n    </a>\r\n        -->\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Move the below to it's own component-->\r\n<div id=\"footer\" class='row justify-content-center'>\r\n\r\n  <div class=\"col-12 col-sm-6 col-md-8 col-lg-7 col-xl-8\">\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-6 col-sm-5 col-md-4 col-lg-4 col-xl-3\">\r\n        <ul>\r\n          <li class=\"productCat1Heading\">PANEL PRODUCTS :</li>\r\n            <li> &nbsp; &nbsp; Plywood</li>\r\n            <li> &nbsp; &nbsp; &nbsp; - Hardwood</li>\r\n            <li> &nbsp; &nbsp; &nbsp; - Softwood</li>\r\n            <li> &nbsp; &nbsp; &nbsp; - Formwork</li>\r\n            <li> &nbsp; &nbsp; I-Joists</li>\r\n            <li> &nbsp; &nbsp; Durelisdek</li>\r\n            <li> &nbsp; &nbsp; OSB</li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"col-6 col-sm-5 col-md-4 col-lg-4 col-xl-3\">\r\n        <ul>\r\n          <li class=\"productCat1Heading\">DECKING</li>\r\n        </ul>\r\n        <ul>\r\n          <li class=\"productCat1Heading\">TIMBER PRODUCTS :</li>\r\n          <li> &nbsp; &nbsp; KD Reg</li>\r\n          <li> &nbsp; &nbsp; Treated</li>\r\n          <li></li>\r\n        </ul>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div id=\"footerAddress\" class=\"col-12 col-sm-6 col-md-4 col-lg-5 col-xl-4\">\r\n\r\n      <span class=\"productCat1Heading\">Wood Concepts</span> <br />\r\n      23 Town Centre Mall, <br />\r\n      Swords, Co. Dublin, Ireland <br />\r\n      Tel: 00353 (0) 1 840 83 88 <br />\r\n      Fax: 00353 (0) 1 840 83 77 <br />\r\n      K67 CF80 <br />\r\n      Email: <span [innerHTML]=\"emailAddress\"></span><br />\r\n\r\n      <style>\r\n        a {\r\n          color: #e6f2ff;\r\n        }\r\n      </style>\r\n\r\n      <br />\r\n      <a [routerLink]=\"['/privacy-statement']\">Privacy Statement</a>\r\n      <!-- <app-footer></app-footer>-->\r\n    </div><!--/allContentUnderNavBar-->\r\n  </div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/star/star.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/star/star.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"crop\" \r\n    [style.width.px]=\"starWidth\"\r\n    [title]=\"rating\"\r\n    (click)=\"onClick()\">\r\n    <div style=\"width: 86px\">\r\n        <span class=\"glyphicon glyphicon-star\"></span>\r\n        <span class=\"glyphicon glyphicon-star\"></span>\r\n        <span class=\"glyphicon glyphicon-star\"></span>\r\n        <span class=\"glyphicon glyphicon-star\"></span>\r\n        <span class=\"glyphicon glyphicon-star\"></span>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#aboutPage {\r\n\r\n  padding-bottom: 2em;\r\n}\r\n\r\n.aboutPageImage {\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhYm91dFBhZ2Uge1xyXG5cclxuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4uYWJvdXRQYWdlSW1hZ2Uge1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        core_1.Component({
            template: __importDefault(__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "./src/app/analytics/google-analytics.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/analytics/google-analytics.service.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var GoogleAnalyticsService = /** @class */ (function () {
    function GoogleAnalyticsService() {
    }
    GoogleAnalyticsService.prototype.eventEmitter = function (eventName, eventCategory, eventAction, eventLabel, eventValue) {
        if (eventLabel === void 0) { eventLabel = null; }
        if (eventValue === void 0) { eventValue = null; }
        gtag('event', eventName, {
            eventCategory: eventCategory,
            eventLabel: eventLabel,
            eventAction: eventAction,
            eventValue: eventValue
        });
    };
    GoogleAnalyticsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GoogleAnalyticsService);
    return GoogleAnalyticsService;
}());
exports.GoogleAnalyticsService = GoogleAnalyticsService;


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n/*-----Logo-----*/\r\n#topRow {\r\n  background-color:#fafcff;\r\n}\r\n#logoCol {\r\n  padding: 15px;\r\n}\r\n#wcLogo {\r\n  max-width: 240px;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n/*-----/Logo-----*/\r\n/*not sure if below does anything - check it*/\r\n#companyText,\r\n.inline {\r\n  display: inline;\r\n}\r\n#companyDiv,\r\n#pageHeadingText {\r\n  font-family: century-gothic, Muli, 'Franklin Gothic Medium', roboto-condensed-light, Gadugi, 'Gill Sans MT', Geneva, Tahoma, sans-serif;\r\n}\r\n/*-----------Contact Columns-------------------*/\r\n.contactCol {\r\n  line-height: 40px;\r\n  padding: 10px;\r\n  font-size: 1.2em;\r\n  /*nice orange background-color: #E62E00;*/\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.contactCol,\r\n  .contactCol a,\r\n  .contactCol a:link,\r\n  .contactCol a:active,\r\n  .contactCol a:hover,\r\n  .contactCol a:visited {\r\n    color: forestgreen;\r\n  }\r\n.menuLevel2:hover,\r\n.menuLevel2:link,\r\n.menuLevel2:active,\r\n.menuLevel2:hover,\r\n.menuLevel2:visited {\r\n  background-color: #C2CEDA;\r\n}\r\n@media only screen and (max-width:767px) {\r\n  .contactCol {\r\n    margin-top: 2px;\r\n    background-color: #E8ECF1;\r\n  }\r\n  /*\r\n    #contactCol1 {\r\n        border-bottom: 4px solid white;\r\n        border-left: 4px solid white;\r\n        border-right: 2px solid white;\r\n    }\r\n    #contactCol2 {\r\n        border-bottom: 4px solid white;\r\n        border-right: 4px solid white;\r\n        border-left: 2px solid white;\r\n    }*/\r\n}\r\n.contactCol:hover {\r\n  transition: .3s background-color;\r\n  color: #006747;\r\n}\r\n.contactText {\r\n  font-weight: 600;\r\n  font-size: 1.1em;\r\n}\r\n.contactText,\r\n.keyHeader {\r\n  font-family: roboto-condensed-light, Gadugi, 'Gill Sans MT', Geneva, Tahoma, sans-serif;\r\n}\r\n@media only screen and (max-width:200px) {\r\n  .contactText,\r\n  .thumbnailDescription {\r\n    display: none;\r\n  }\r\n\r\n  /*.col-xs-1 .col-xs-2 .col-xs-3 .col-xs-4 .col-xs-5 .col-xs-6 .col-xs-7 .col-xs-8 .col-xs-9 .col-xs-10 .col-xs-11 {\r\n        padding-left: 5px;\r\n        padding-right: 5px;\r\n    }*/\r\n}\r\n.icon_sosa {\r\n  vertical-align: middle;\r\n  font-size: 2.2em;\r\n}\r\n/*-----------/Contact Columns-------------------*/\r\n.thumbnailDescription {\r\n  display: none;\r\n}\r\n#allContentUnderNavBar {\r\n  background-color: white;\r\n}\r\n/*-------Nav Bar-----------*/\r\n.navBarCol {\r\n}\r\n/*@media only screen and (orientation: landscape) {\r\n  .navBarCol {\r\n    border-left: .5px solid #E8ECF1;\r\n  }\r\n}\r\n\r\n    /*\r\n.navBarCol:hover {\r\n  background-color: #006747;\r\n}\r\n\r\n\r\n  .navBarCol .fa {\r\n    font-size: 2.1em;\r\n    color: white;\r\n    top: 5px;\r\n    text-align: right;\r\n  }\r\n\r\n    .navBarCol .fa:active,\r\n    .navBarCol .fa:hover,\r\n    .navBarCol .fa a:visited {\r\n      color: white;\r\n    }\r\n\r\n/*\r\n@media only screen and (max-width:576px) { /*<576px is Boostrap's 'xs' breakpoint, which in this app in when everything gets stacked in rows*/\r\n/*\r\n  .borderTopAndBottom {\r\n    border-top: 1px solid #E8ECF1;\r\n    border-bottom: 1px solid #E8ECF1;\r\n  }\r\n}*/\r\ndiv.scrollmenu {\r\n  overflow: auto;\r\n  white-space: nowrap;\r\n  width: 100%;\r\n  text-align: center;\r\n  text-justify: inter-word;\r\n  background-color: forestgreen;\r\n  padding-top: .3em;\r\n  font-family: roboto-condensed-light, Gadugi, 'Gill Sans MT', Geneva, Tahoma, sans-serif;\r\n}\r\ndiv.scrollmenu a {\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    text-align: center;\r\n    font-size: 2em;\r\n    color: white;\r\n    padding-left: 3%;\r\n    padding-right: 3%;\r\n    border-bottom: .2em solid transparent;\r\n  }\r\n@media only screen and (min-width:768px) and (max-width:991px) {\r\n  div.scrollmenu a {\r\n    font-size: 1.3em;\r\n  }\r\n}\r\n@media only screen and (min-width:992px) and (max-width:1200px) {\r\n  div.scrollmenu a {\r\n    font-size: 1.6em;\r\n  }\r\n}\r\ndiv.scrollmenu a:hover, a:focus, a:active, a:target {\r\n  border-bottom: .2em solid #52ac39;\r\n}\r\n/*\r\ndiv.scrollmenu a:active,\r\ndiv.scrollmenu a:hover {\r\n  color: whitesmoke;\r\n}\r\n\r\n  div.scrollmenu a:link,\r\ndiv.scrollmenu a:visited {\r\n  color: white;\r\n}\r\n  */\r\n/* border under links on hover */\r\n/*-------/Nav Bar-----------*/\r\n/*Messy down here:*/\r\n.noPadding-right {\r\n  padding-right: 0;\r\n}\r\n@media only screen and (min-width:576px) {\r\n  .fa-chevron-down,\r\n  .fa-chevron-up {\r\n    display: none;\r\n  }\r\n}\r\n.noPadding-left {\r\n  padding-left: 0;\r\n}\r\n#routerContainer {\r\n}\r\n#searchBox {\r\n  color: darkslategrey;\r\n  padding-left: 5px;\r\n  width: 300px;\r\n}\r\n@media only screen and (max-width:768px) {\r\n  #searchBox {\r\n    margin-top: 10px;\r\n  }\r\n}\r\n.flex-container {\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n}\r\n.noPadding {\r\n  padding-right: 0px;\r\n  padding-left: 0px;\r\n}\r\n@media only screen and (orientation: portrait) { /*<576px is Boostrap's 'xs' breakpoint, which in this app in when everything gets stacked in rows*/\r\n\r\n  .myFlex {\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n  }\r\n}\r\n.div-wrapper {\r\n  white-space: nowrap;\r\n  max-width: 99%;\r\n}\r\n.keepTogether {\r\n  width: 100%;\r\n  display: inline-block;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  margin: 0 3%;\r\n  white-space: normal;\r\n}\r\n/*assciations and logos divs*/\r\n#searchDiv {\r\n  margin-top: 15px;\r\n  color: #006747;\r\n  padding-right: 10px;\r\n}\r\n#productThumbnailsDiv {\r\n  margin: 15px;\r\n}\r\n.thumbnailCol {\r\n  padding: 15px;\r\n  /*border: 10px solid #E8ECF1;*/\r\n}\r\n#productThumbnails img {\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n.productThumbnailText {\r\n  padding: 10px;\r\n  background-color: white;\r\n  height: 150px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGlCQUFpQjtBQUNqQjtFQUNFLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFFQSxrQkFBa0I7QUFFbEIsNkNBQTZDO0FBQzdDOztFQUVFLGVBQWU7QUFDakI7QUFFQTs7RUFFRSx1SUFBdUk7QUFDekk7QUFDQSxnREFBZ0Q7QUFFaEQ7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFFRTs7Ozs7O0lBTUUsa0JBQWtCO0VBQ3BCO0FBRUY7Ozs7O0VBS0UseUJBQXlCO0FBQzNCO0FBR0E7RUFDRTtJQUNFLGVBQWU7SUFDZix5QkFBeUI7RUFDM0I7RUFDQTs7Ozs7Ozs7OztNQVVJO0FBQ047QUFJQTtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBR0E7O0VBRUUsdUZBQXVGO0FBQ3pGO0FBRUE7RUFDRTs7SUFFRSxhQUFhO0VBQ2Y7O0VBRUE7OztNQUdJO0FBQ047QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7QUFLQSxpREFBaUQ7QUFFakQ7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUdBLDRCQUE0QjtBQUU1QjtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZJQTBCNkk7QUFFN0k7Ozs7O0VBS0U7QUFHRjtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQix1RkFBdUY7QUFDekY7QUFFRTtJQUNFLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQ0FBcUM7RUFDdkM7QUFFRjtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFHQTtFQUNFLGlDQUFpQztBQUNuQztBQUNBOzs7Ozs7Ozs7O0dBVUc7QUFJSCxnQ0FBZ0M7QUFFaEMsNkJBQTZCO0FBRzdCLG1CQUFtQjtBQUNuQjtFQUNFLGdCQUFnQjtBQUNsQjtBQUdBO0VBQ0U7O0lBRUUsYUFBYTtFQUNmO0FBQ0Y7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFHQTtBQUNBO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUlBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUdBLGlEQUFpRCxrR0FBa0c7O0VBRWpKO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtFQUNoQztBQUNGO0FBSUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFHQSw2QkFBNkI7QUFFN0I7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxvQkFBaUI7S0FBakIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qLS0tLS1Mb2dvLS0tLS0qL1xyXG4jdG9wUm93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmYWZjZmY7XHJcbn0gXHJcblxyXG4jbG9nb0NvbCB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuI3djTG9nbyB7XHJcbiAgbWF4LXdpZHRoOiAyNDBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi8qLS0tLS0vTG9nby0tLS0tKi9cclxuXHJcbi8qbm90IHN1cmUgaWYgYmVsb3cgZG9lcyBhbnl0aGluZyAtIGNoZWNrIGl0Ki9cclxuI2NvbXBhbnlUZXh0LFxyXG4uaW5saW5lIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbiNjb21wYW55RGl2LFxyXG4jcGFnZUhlYWRpbmdUZXh0IHtcclxuICBmb250LWZhbWlseTogY2VudHVyeS1nb3RoaWMsIE11bGksICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgcm9ib3RvLWNvbmRlbnNlZC1saWdodCwgR2FkdWdpLCAnR2lsbCBTYW5zIE1UJywgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbn1cclxuLyotLS0tLS0tLS0tLUNvbnRhY3QgQ29sdW1ucy0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmNvbnRhY3RDb2wge1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICAvKm5pY2Ugb3JhbmdlIGJhY2tncm91bmQtY29sb3I6ICNFNjJFMDA7Ki9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiAgLmNvbnRhY3RDb2wsXHJcbiAgLmNvbnRhY3RDb2wgYSxcclxuICAuY29udGFjdENvbCBhOmxpbmssXHJcbiAgLmNvbnRhY3RDb2wgYTphY3RpdmUsXHJcbiAgLmNvbnRhY3RDb2wgYTpob3ZlcixcclxuICAuY29udGFjdENvbCBhOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6IGZvcmVzdGdyZWVuO1xyXG4gIH1cclxuXHJcbi5tZW51TGV2ZWwyOmhvdmVyLFxyXG4ubWVudUxldmVsMjpsaW5rLFxyXG4ubWVudUxldmVsMjphY3RpdmUsXHJcbi5tZW51TGV2ZWwyOmhvdmVyLFxyXG4ubWVudUxldmVsMjp2aXNpdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzJDRURBO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgLmNvbnRhY3RDb2wge1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4RUNGMTtcclxuICB9XHJcbiAgLypcclxuICAgICNjb250YWN0Q29sMSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XHJcbiAgICB9XHJcbiAgICAjY29udGFjdENvbDIge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgfSovXHJcbn1cclxuXHJcblxyXG5cclxuLmNvbnRhY3RDb2w6aG92ZXIge1xyXG4gIHRyYW5zaXRpb246IC4zcyBiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGNvbG9yOiAjMDA2NzQ3O1xyXG59XHJcblxyXG4uY29udGFjdFRleHQge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxufVxyXG5cclxuXHJcbi5jb250YWN0VGV4dCxcclxuLmtleUhlYWRlciB7XHJcbiAgZm9udC1mYW1pbHk6IHJvYm90by1jb25kZW5zZWQtbGlnaHQsIEdhZHVnaSwgJ0dpbGwgU2FucyBNVCcsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MjAwcHgpIHtcclxuICAuY29udGFjdFRleHQsXHJcbiAgLnRodW1ibmFpbERlc2NyaXB0aW9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvKi5jb2wteHMtMSAuY29sLXhzLTIgLmNvbC14cy0zIC5jb2wteHMtNCAuY29sLXhzLTUgLmNvbC14cy02IC5jb2wteHMtNyAuY29sLXhzLTggLmNvbC14cy05IC5jb2wteHMtMTAgLmNvbC14cy0xMSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgfSovXHJcbn1cclxuXHJcbi5pY29uX3Nvc2Ege1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZm9udC1zaXplOiAyLjJlbTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS9Db250YWN0IENvbHVtbnMtLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi50aHVtYm5haWxEZXNjcmlwdGlvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2FsbENvbnRlbnRVbmRlck5hdkJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS1OYXYgQmFyLS0tLS0tLS0tLS0qL1xyXG5cclxuLm5hdkJhckNvbCB7XHJcbn1cclxuXHJcbi8qQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gIC5uYXZCYXJDb2wge1xyXG4gICAgYm9yZGVyLWxlZnQ6IC41cHggc29saWQgI0U4RUNGMTtcclxuICB9XHJcbn1cclxuXHJcbiAgICAvKlxyXG4ubmF2QmFyQ29sOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NzQ3O1xyXG59XHJcblxyXG5cclxuICAubmF2QmFyQ29sIC5mYSB7XHJcbiAgICBmb250LXNpemU6IDIuMWVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcblxyXG4gICAgLm5hdkJhckNvbCAuZmE6YWN0aXZlLFxyXG4gICAgLm5hdkJhckNvbCAuZmE6aG92ZXIsXHJcbiAgICAubmF2QmFyQ29sIC5mYSBhOnZpc2l0ZWQge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4vKlxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpIHsgLyo8NTc2cHggaXMgQm9vc3RyYXAncyAneHMnIGJyZWFrcG9pbnQsIHdoaWNoIGluIHRoaXMgYXBwIGluIHdoZW4gZXZlcnl0aGluZyBnZXRzIHN0YWNrZWQgaW4gcm93cyovXHJcblxyXG4vKlxyXG4gIC5ib3JkZXJUb3BBbmRCb3R0b20ge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFOEVDRjE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U4RUNGMTtcclxuICB9XHJcbn0qL1xyXG5cclxuXHJcbmRpdi5zY3JvbGxtZW51IHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZm9yZXN0Z3JlZW47XHJcbiAgcGFkZGluZy10b3A6IC4zZW07XHJcbiAgZm9udC1mYW1pbHk6IHJvYm90by1jb25kZW5zZWQtbGlnaHQsIEdhZHVnaSwgJ0dpbGwgU2FucyBNVCcsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4gIGRpdi5zY3JvbGxtZW51IGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMyU7XHJcbiAgICBib3JkZXItYm90dG9tOiAuMmVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCkgYW5kIChtYXgtd2lkdGg6OTkxcHgpIHtcclxuICBkaXYuc2Nyb2xsbWVudSBhIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkycHgpIGFuZCAobWF4LXdpZHRoOjEyMDBweCkge1xyXG4gIGRpdi5zY3JvbGxtZW51IGEge1xyXG4gICAgZm9udC1zaXplOiAxLjZlbTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5kaXYuc2Nyb2xsbWVudSBhOmhvdmVyLCBhOmZvY3VzLCBhOmFjdGl2ZSwgYTp0YXJnZXQge1xyXG4gIGJvcmRlci1ib3R0b206IC4yZW0gc29saWQgIzUyYWMzOTtcclxufVxyXG4vKlxyXG5kaXYuc2Nyb2xsbWVudSBhOmFjdGl2ZSxcclxuZGl2LnNjcm9sbG1lbnUgYTpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbiAgZGl2LnNjcm9sbG1lbnUgYTpsaW5rLFxyXG5kaXYuc2Nyb2xsbWVudSBhOnZpc2l0ZWQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4gICovXHJcblxyXG5cclxuXHJcbi8qIGJvcmRlciB1bmRlciBsaW5rcyBvbiBob3ZlciAqL1xyXG5cclxuLyotLS0tLS0tL05hdiBCYXItLS0tLS0tLS0tLSovXHJcblxyXG5cclxuLypNZXNzeSBkb3duIGhlcmU6Ki9cclxuLm5vUGFkZGluZy1yaWdodCB7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo1NzZweCkge1xyXG4gIC5mYS1jaGV2cm9uLWRvd24sXHJcbiAgLmZhLWNoZXZyb24tdXAge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5ub1BhZGRpbmctbGVmdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG5cclxuI3JvdXRlckNvbnRhaW5lciB7XHJcbn1cclxuXHJcbiNzZWFyY2hCb3gge1xyXG4gIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgI3NlYXJjaEJveCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4uZmxleC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG59XHJcblxyXG4ubm9QYWRkaW5nIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHsgLyo8NTc2cHggaXMgQm9vc3RyYXAncyAneHMnIGJyZWFrcG9pbnQsIHdoaWNoIGluIHRoaXMgYXBwIGluIHdoZW4gZXZlcnl0aGluZyBnZXRzIHN0YWNrZWQgaW4gcm93cyovXHJcblxyXG4gIC5teUZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLmRpdi13cmFwcGVyIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG1heC13aWR0aDogOTklO1xyXG59XHJcblxyXG4ua2VlcFRvZ2V0aGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luOiAwIDMlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuXHJcblxyXG4vKmFzc2NpYXRpb25zIGFuZCBsb2dvcyBkaXZzKi9cclxuXHJcbiNzZWFyY2hEaXYge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgY29sb3I6ICMwMDY3NDc7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuI3Byb2R1Y3RUaHVtYm5haWxzRGl2IHtcclxuICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbi50aHVtYm5haWxDb2wge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgLypib3JkZXI6IDEwcHggc29saWQgI0U4RUNGMTsqL1xyXG59XHJcblxyXG4jcHJvZHVjdFRodW1ibmFpbHMgaW1nIHtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnByb2R1Y3RUaHVtYm5haWxUZXh0IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var contentful_service_1 = __webpack_require__(/*! ./contentful/contentful.service */ "./src/app/contentful/contentful.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"); //just for Google Analytics to record every route change and sent it back to Google as a page view. For more info, see https://codeburst.io/using-google-analytics-with-angular-25c93bffaa18. In other words, NavigationEnd is used for gtag to find out the 'page' by what comes after the '/' 
var AppComponent = /** @class */ (function () {
    function AppComponent(ContentfulService, router //just for Google Analytics to record every route change and sent it back to Google as a page view
    ) {
        this.ContentfulService = ContentfulService;
        this.router = router;
        this.title = 'Wood Concepts';
        this.sendEvent = function () {
            window.ga('send', 'event', {
                eventCategory: 'eventCategory',
                eventLabel: 'eventLabel',
                eventAction: 'eventAction',
                eventValue: 10
            });
        };
        this.emailAddress = ' ' + '&#116;&#109;&#115;&#64;&#116;&#109;' + '&#115;&#46;&#105;&#101';
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                gtag('config', 'AW-820291490', { 'page_path': event.urlAfterRedirects }),
                    gtag('config', 'UA-112883087-1', { 'page_path': event.urlAfterRedirects });
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ContentfulService.onTitleChange(function (title) { return _this.title = title; });
    };
    AppComponent.ctorParameters = function () { return [
        { type: contentful_service_1.ContentfulService },
        { type: router_1.Router //just for Google Analytics to record every route change and sent it back to Google as a page view
         }
    ]; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pm-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [contentful_service_1.ContentfulService,
            router_1.Router //just for Google Analytics to record every route change and sent it back to Google as a page view
        ])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Angular's Components
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //for NGPrime
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
//My Custom Components:
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var welcome_component_1 = __webpack_require__(/*! ./home/welcome.component */ "./src/app/home/welcome.component.ts");
var carousel_component_1 = __webpack_require__(/*! ./home/carousel/carousel.component */ "./src/app/home/carousel/carousel.component.ts");
var footer_component_1 = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
var shared_module_1 = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
var product_module_1 = __webpack_require__(/*! ./products/product.module */ "./src/app/products/product.module.ts");
var product_menu_component_1 = __webpack_require__(/*! ./products/product-menu.component */ "./src/app/products/product-menu.component.ts");
var product_filter_pipe_1 = __webpack_require__(/*! ./products/product-filter.pipe */ "./src/app/products/product-filter.pipe.ts");
var about_component_1 = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var contact_component_1 = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
//Third Party Components:
//https://github.com/dimpu/ngx-md
var angular2_markdown_1 = __webpack_require__(/*! angular2-markdown */ "./node_modules/angular2-markdown/index.js");
//PrimeNG
//import { CarouselModule } from 'primeng/primeng';
//ng-bootstrap.github.io
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
//import ProductListComponent to for:   path: 'welcome', component: WelcomeComponent, children: [{ path: '', component: ProductListComponent }]  },
var product_list_component_1 = __webpack_require__(/*! ./products/product-list.component */ "./src/app/products/product-list.component.ts");
//Component's whose data comes from Contentful:
var product_list_filtered_by_category_component_1 = __webpack_require__(/*! ./products/product-list/product-list-filtered-by-category.component */ "./src/app/products/product-list/product-list-filtered-by-category.component.ts");
var contentful_service_1 = __webpack_require__(/*! ./contentful/contentful.service */ "./src/app/contentful/contentful.service.ts");
var contentful_product_list_component_1 = __webpack_require__(/*! ./contentful/products/contentful-product-list/contentful-product-list.component */ "./src/app/contentful/products/contentful-product-list/contentful-product-list.component.ts");
var contentful_product_detail_component_1 = __webpack_require__(/*! ./contentful/products/contentful-product-detail/contentful-product-detail.component */ "./src/app/contentful/products/contentful-product-detail/contentful-product-detail.component.ts");
var contentful_category_list_component_1 = __webpack_require__(/*! ./contentful/products/contentful-category-list/contentful-category-list.component */ "./src/app/contentful/products/contentful-category-list/contentful-category-list.component.ts");
var contentful_product_list_by_sub_category1_component_1 = __webpack_require__(/*! ./contentful/products/contentful-product-list-by-sub-category1/contentful-product-list-by-sub-category1.component */ "./src/app/contentful/products/contentful-product-list-by-sub-category1/contentful-product-list-by-sub-category1.component.ts");
var contentful_product_list_by_sub_category2_component_1 = __webpack_require__(/*! ./contentful/products/contentful-product-list-by-sub-category2/contentful-product-list-by-sub-category2.component */ "./src/app/contentful/products/contentful-product-list-by-sub-category2/contentful-product-list-by-sub-category2.component.ts");
var sustainability_component_1 = __webpack_require__(/*! ./contentful/sustainability/sustainability.component */ "./src/app/contentful/sustainability/sustainability.component.ts");
var news_component_1 = __webpack_require__(/*! ./contentful/news/news.component */ "./src/app/contentful/news/news.component.ts");
var contact_form_component_1 = __webpack_require__(/*! ./contact/contact-form/contact-form.component */ "./src/app/contact/contact-form/contact-form.component.ts");
var privacy_statement_component_1 = __webpack_require__(/*! ./privacy-statement/privacy-statement.component */ "./src/app/privacy-statement/privacy-statement.component.ts");
var cookies_policy_component_1 = __webpack_require__(/*! ./policies/cookies-policy/cookies-policy.component */ "./src/app/policies/cookies-policy/cookies-policy.component.ts");
var blog_component_1 = __webpack_require__(/*! ./contentful/blog/blog.component */ "./src/app/contentful/blog/blog.component.ts");
var google_analytics_service_1 = __webpack_require__(/*! ./analytics/google-analytics.service */ "./src/app/analytics/google-analytics.service.ts");
//Clarity
//import { ClarityModule } from "@clr/angular";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                welcome_component_1.WelcomeComponent,
                footer_component_1.FooterComponent,
                product_menu_component_1.ProductMenuComponent,
                product_filter_pipe_1.ProductFilterPipe,
                about_component_1.AboutComponent,
                sustainability_component_1.SustainabilityComponent,
                contact_component_1.ContactComponent,
                carousel_component_1.CarouselComponent,
                product_list_filtered_by_category_component_1.ProductListFilteredByCategoryComponent,
                contentful_product_list_component_1.ContentfulProductListComponent,
                contentful_product_detail_component_1.ContentfulProductDetailComponent,
                contentful_category_list_component_1.ContentfulCategoryListComponent,
                contentful_product_list_by_sub_category1_component_1.ContentfulProductListBySubCategory1Component,
                contentful_product_list_by_sub_category2_component_1.ContentfulProductListBySubCategory2Component,
                news_component_1.NewsComponent,
                contact_form_component_1.ContactFormComponent,
                privacy_statement_component_1.PrivacyPolicyComponent,
                cookies_policy_component_1.CookiesPolicyComponent,
                blog_component_1.BlogComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                ng_bootstrap_1.NgbModule,
                angular2_markdown_1.MarkdownModule.forRoot(),
                router_1.RouterModule.forRoot([
                    //{ path: 'welcome', component: WelcomeComponent, children: [{ path: '', component: ProductListComponent }]  },
                    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                    { path: 'about', component: about_component_1.AboutComponent },
                    { path: 'sustainability', component: sustainability_component_1.SustainabilityComponent },
                    { path: 'contact', component: contact_component_1.ContactComponent },
                    { path: 'glossary', component: news_component_1.NewsComponent },
                    { path: 'blog', component: blog_component_1.BlogComponent },
                    { path: 'dk', component: product_list_component_1.ProductListComponent },
                    //----contentful:
                    { path: 'products', component: contentful_category_list_component_1.ContentfulCategoryListComponent },
                    { path: 'products/:slug', component: contentful_product_detail_component_1.ContentfulProductDetailComponent },
                    { path: 'categories', component: contentful_category_list_component_1.ContentfulCategoryListComponent },
                    //----/contentful
                    { path: 'cookies-policy', component: cookies_policy_component_1.CookiesPolicyComponent },
                    { path: 'privacy-statement', component: privacy_statement_component_1.PrivacyPolicyComponent },
                    { path: 'plural', component: product_list_component_1.ProductListComponent },
                    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                    //{ path: '**', redirectTo: 'welcome', pathMatch: 'full' } always put this last because according to https://angular.io/guide/router ,'The router will select this route if the requested URL doesn't match any paths for routes defined EARLIER in the configuration.' So putting it before the end means it won't check the routes after it
                    { path: ':subcategory2slug', component: contentful_product_list_by_sub_category2_component_1.ContentfulProductListBySubCategory2Component },
                    { path: '**', component: welcome_component_1.WelcomeComponent }
                ]),
                forms_1.FormsModule,
                product_module_1.ProductModule,
                shared_module_1.SharedModule,
                //PrimeNG:
                //BrowserAnimationsModule,
                //CarouselModule,
                // ClarityModule, Clarity
                //ng-bootstrap.github.io:
                ng_bootstrap_1.NgbModule
            ],
            //exports below is just for Contenful
            exports: [],
            // make the providers available in the application
            providers: [contentful_service_1.ContentfulService, google_analytics_service_1.GoogleAnalyticsService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/contact/contact-form/contact-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/contact/contact-form/contact-form.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ng-valid[required], .ng-valid.required {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\niframe {\r\n  width: 100%;\r\n  frameborder: 0;\r\n  height: 1200px;\r\n  border:none;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEIsRUFBRSxVQUFVO0FBQzVDOztBQUVBO0VBQ0UsOEJBQThCLEVBQUUsUUFBUTtBQUMxQzs7QUFHQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsY0FBYztFQUNkLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKi9cclxufVxyXG5cclxuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqL1xyXG59XHJcblxyXG5cclxuaWZyYW1lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmcmFtZWJvcmRlcjogMDtcclxuICBoZWlnaHQ6IDEyMDBweDtcclxuICBib3JkZXI6bm9uZTtcclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/contact/contact-form/contact-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/contact/contact-form/contact-form.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var user_1 = __webpack_require__(/*! ./user */ "./src/app/contact/contact-form/user.ts");
var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent(httpClient) {
        this.httpClient = httpClient;
        this.name = '';
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.model = new user_1.User(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
        this.submitted = false;
    }
    ContactFormComponent.prototype.onNameKeyUp = function (event) {
        this.name = event.target.value;
        this.found = false;
    };
    //httpGet:
    ContactFormComponent.prototype.getProfile = function () {
        var _this = this;
        this.httpClient.get("https://my-json-server.typicode.com/aria-2014/ARIAHTM/profiles/?name=" + this.name)
            .subscribe(function (data) {
            if (data.length) {
                _this.found = true;
                _this.name = data[0].name;
                _this.age = data[0].age;
            }
            console.log(data);
        });
    };
    //post profile
    ContactFormComponent.prototype.postProfile = function () {
        this.httpClient.post("https://formspree.io/brian@bweb.ie", {
            name: 'test'
        });
    };
    ContactFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    ContactFormComponent.prototype.newHero = function () {
        this.model = new user_1.User(42, '', '');
    };
    Object.defineProperty(ContactFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    ContactFormComponent.prototype.ngOnInit = function () {
    };
    ContactFormComponent.prototype.handleError = function (err) {
        // handle error
    };
    ContactFormComponent.ctorParameters = function () { return [
        { type: http_1.HttpClient }
    ]; };
    ContactFormComponent = __decorate([
        core_1.Component({
            selector: 'app-contact-form',
            template: __importDefault(__webpack_require__(/*! raw-loader!./contact-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-form/contact-form.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./contact-form.component.css */ "./src/app/contact/contact-form/contact-form.component.css")).default]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ContactFormComponent);
    return ContactFormComponent;
}());
exports.ContactFormComponent = ContactFormComponent;


/***/ }),

/***/ "./src/app/contact/contact-form/user.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact-form/user.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(id, name, power, alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.location{\r\n  margin-bottom:15px;\r\n\r\n}\r\n.locationMap{\r\n width: 100%;\r\n}\r\n.locationHeading {\r\n  padding-top: 10px;\r\n  padding-left: 15px;\r\n}\r\n#location2 {\r\n  border-top: 1px solid white;\r\n  margin-top:25px;\r\n}\r\n#contactPageAddress {\r\n padding:20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usa0JBQWtCOztBQUVwQjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxvY2F0aW9ue1xyXG4gIG1hcmdpbi1ib3R0b206MTVweDtcclxuXHJcbn1cclxuLmxvY2F0aW9uTWFwe1xyXG4gd2lkdGg6IDEwMCU7XHJcbn1cclxuLmxvY2F0aW9uSGVhZGluZyB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbiNsb2NhdGlvbjIge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOjI1cHg7XHJcbn1cclxuI2NvbnRhY3RQYWdlQWRkcmVzcyB7XHJcbiBwYWRkaW5nOjIwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.emailAddress = '&#116;&#109;&#115;&#64;&#116;&#109;' + '&#115;&#46;&#105;&#101';
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        core_1.Component({
            template: __importDefault(__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;


/***/ }),

/***/ "./src/app/contentful/blog/blog.component.css":
/*!****************************************************!*\
  !*** ./src/app/contentful/blog/blog.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("article {\r\n  margin-top: 10px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n\r\n.blogImage img{\r\n  max-height: 400px;\r\n}\r\n\r\n\r\n#delete img {\r\n  max-height: 100px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudGZ1bC9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7OztBQUdBO0VBQ0UsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnRmdWwvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcnRpY2xlIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcblxyXG4uYmxvZ0ltYWdlIGltZ3tcclxuICBtYXgtaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuI2RlbGV0ZSBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/contentful/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/contentful/blog/blog.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var contentful_service_1 = __webpack_require__(/*! ../contentful.service */ "./src/app/contentful/contentful.service.ts");
var BlogComponent = /** @class */ (function () {
    function BlogComponent(_contentfulService) {
        this._contentfulService = _contentfulService;
        this.blog = [];
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._contentfulService.getBlog()
            .then(function (blog) { return _this.blog = blog; });
    };
    BlogComponent.ctorParameters = function () { return [
        { type: contentful_service_1.ContentfulService }
    ]; };
    BlogComponent = __decorate([
        core_1.Component({
            selector: 'app-blog',
            template: __importDefault(__webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/blog/blog.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./blog.component.css */ "./src/app/contentful/blog/blog.component.css")).default]
        }),
        __metadata("design:paramtypes", [contentful_service_1.ContentfulService])
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;


/***/ }),

/***/ "./src/app/contentful/contentful.service.ts":
/*!**************************************************!*\
  !*** ./src/app/contentful/contentful.service.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var contentful_1 = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");
// configure the service with tokens and content type ids
// SET YOU OWN CONFIG here
var DEFAULT_CONFIG = {
    credentials: {
        space: '7eb1rnj7pxnc',
        accessToken: '3da7e542a8d7f75a15c270d4d1d96775c976216f8ce982b4ba953a5f33636381',
    },
    contentTypeIds: {
        product: '2PqfXUJwE8qSYKuM0U6w8M',
        category: 'category',
        staticPage: 'staticPage',
        newsArticle: 'newsArticle',
        blog: 'blog'
        // subCategory1: 'subCategory1'
    }
};
var ContentfulService = /** @class */ (function () {
    /*add a new method called getProducts.
    This method will fetch the data using the getEntries method of the SDK client.
    You can set the content_type property inside of the query object with the
    product content type id to only retrieve products.*/
    function ContentfulService() {
        try {
            this.config = JSON.parse(localStorage.catalogConfig);
        }
        catch (e) {
            this.config = DEFAULT_CONFIG.credentials;
        }
        this.titleHandlers = [];
        this._createClient();
        this.getSpace();
    }
    ContentfulService.prototype.onTitleChange = function (fn) {
        this.titleHandlers.push(fn);
    };
    // get the current space
    ContentfulService.prototype.getSpace = function () {
        var _this = this;
        return this.cdaClient.getSpace()
            .then(function (space) {
            _this.titleHandlers.forEach(function (handler) { return handler(space.name); });
            return space;
        });
    };
    // fetch products
    ContentfulService.prototype.getProducts = function (query) {
        return this.cdaClient.getEntries(Object.assign({
            content_type: DEFAULT_CONFIG.contentTypeIds.product
        }, query))
            .then(function (res) { return res.items; });
    };
    /*getEntries returns a promise which will be resolved with meta information
    like the total number of fetched entries but also an Array of items
    which includes the actual products you're interested in.*/
    ContentfulService.prototype.getProductsToJson = function (query) {
        return this.cdaClient.getEntries(Object.assign({ content_type: DEFAULT_CONFIG.contentTypeIds.product }, query))
            .then(function (res) { return res.items; });
    };
    //below code by BW - getStaticPages, which uses the same code as above, in getProducts
    ContentfulService.prototype.getStaticPages = function (query) {
        return this.cdaClient.getEntries(Object.assign({ content_type: DEFAULT_CONFIG.contentTypeIds.staticPage }, query))
            .then(function (res) { return res.items; });
    };
    //below code by BW - getNews, which uses the same code as above, in getProducts
    ContentfulService.prototype.getNewsArticle = function (query) {
        return this.cdaClient.getEntries(Object.assign({ content_type: DEFAULT_CONFIG.contentTypeIds.newsArticle }, query))
            .then(function (res) { return res.items; });
    };
    //below code by BW - getGlosary, which uses the same code as above, in getProducts
    ContentfulService.prototype.getBlog = function (query) {
        return this.cdaClient.getEntries(Object.assign({ content_type: DEFAULT_CONFIG.contentTypeIds.blog }, query))
            .then(function (res) { return res.items; });
    };
    //below code by BW - get Applications, which uses the same code as above, in getProducts
    ContentfulService.prototype.getApplications = function (query) {
        return this.cdaClient.getEntries(Object.assign({ content_type: DEFAULT_CONFIG.contentTypeIds.product }, query))
            .then(function (res) { return res.items; });
    };
    //bw code for assets:
    ContentfulService.prototype.getProductImages = function (query) {
        return this.cdaClient.getEntries(Object.assign({ content_type: DEFAULT_CONFIG.contentTypeIds.staticPage }, query))
            .then(function (res) { return res.items; });
    };
    // fetch products with a given slug
    // and return one of them
    ContentfulService.prototype.getProduct = function (slug) {
        return this.getProducts({ 'fields.slug': slug })
            .then(function (items) { return items[0]; });
    };
    //bw code:
    // fetch products with a given slug
    // and return one of them
    ContentfulService.prototype.getProductBySubCategory1 = function (subcategory1slug) {
        return this.getProducts({ 'fields.subCategory1.fields.slug': subcategory1slug })
            .then(function (items) { return items[0]; });
    };
    //this one is working with tags:
    ContentfulService.prototype.getProductBySubCategory2 = function (subcategory2slug) {
        //return this.getProducts({ 'fields.subCategory2.fields.slug': subcategory2slug})
        return this.getProducts({ 'fields.tags': subcategory2slug })
            .then(function (items) { return items; });
    };
    //this one is working with tags:
    ContentfulService.prototype.getProductApplications = function (applicationsType1Instance) {
        return this.getProducts({ 'fields.applicationsType1Instance': applicationsType1Instance })
            .then(function (items) { return items; });
    };
    // fetch categories
    ContentfulService.prototype.getCategories = function () {
        return this.cdaClient.getEntries({
            content_type: 'category',
            order: 'fields.order'
        })
            .then(function (res) { return res.items; });
    };
    // return a custom config if available
    ContentfulService.prototype.getConfig = function () {
        return this.config !== DEFAULT_CONFIG.credentials ?
            Object.assign({}, this.config) :
            { space: '', accessToken: '' };
    };
    // set a new config and store it in localStorage
    ContentfulService.prototype.setConfig = function (config) {
        localStorage.setItem('catalogConfig', JSON.stringify(config));
        this.config = config;
        this._createClient();
        this.getSpace();
        return Object.assign({}, this.config);
    };
    // set config back to default values
    ContentfulService.prototype.resetConfig = function () {
        localStorage.removeItem('catalogConfig');
        this.config = DEFAULT_CONFIG.credentials;
        this._createClient();
        this.getSpace();
        return Object.assign({}, this.config);
    };
    ContentfulService.prototype._createClient = function () {
        this.cdaClient = contentful_1.createClient({
            space: this.config.space,
            accessToken: this.config.accessToken
        });
    };
    ContentfulService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ContentfulService);
    return ContentfulService;
}());
exports.ContentfulService = ContentfulService;


/***/ }),

/***/ "./src/app/contentful/news/news.component.css":
/*!****************************************************!*\
  !*** ./src/app/contentful/news/news.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".newsArticleImage, .videoContainer {\r\n  max-width: 480px;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.newsItem {\r\n\r\n  padding-bottom: 60px;\r\n}\r\n\r\n.newsItem:not(:first-of-type) {\r\n    border-top: 1px solid #6685A3;\r\n    padding-top: 20px;\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudGZ1bC9uZXdzL25ld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxvQkFBb0I7QUFDdEI7O0FBRUU7SUFDRSw2QkFBNkI7SUFDN0IsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29udGVudGZ1bC9uZXdzL25ld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdzQXJ0aWNsZUltYWdlLCAudmlkZW9Db250YWluZXIge1xyXG4gIG1heC13aWR0aDogNDgwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubmV3c0l0ZW0ge1xyXG5cclxuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuICAubmV3c0l0ZW06bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzY2ODVBMztcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/contentful/news/news.component.ts":
/*!***************************************************!*\
  !*** ./src/app/contentful/news/news.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var contentful_service_1 = __webpack_require__(/*! ../contentful.service */ "./src/app/contentful/contentful.service.ts");
var NewsComponent = /** @class */ (function () {
    function NewsComponent(_contentfulService) {
        this._contentfulService = _contentfulService;
        this.newsArticle = [];
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._contentfulService.getNewsArticle()
            .then(function (newsArticle) { return _this.newsArticle = newsArticle; });
    };
    NewsComponent.ctorParameters = function () { return [
        { type: contentful_service_1.ContentfulService }
    ]; };
    NewsComponent = __decorate([
        core_1.Component({
            selector: 'app-news',
            template: __importDefault(__webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/news/news.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./news.component.css */ "./src/app/contentful/news/news.component.css")).default]
        }),
        __metadata("design:paramtypes", [contentful_service_1.ContentfulService])
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;


/***/ }),

/***/ "./src/app/contentful/products/contentful-category-list/contentful-category-list.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/contentful/products/contentful-category-list/contentful-category-list.component.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#searchBoxDiv {\r\n  /* margin: 20px;*/\r\n  width: 100%;\r\n  align-items: center;\r\n  display: inline-block;\r\n}\r\n\r\n#searchDiv {\r\n  /* margin-top: 15px;*/\r\n  color: #006747;\r\n}\r\n\r\n.openbtn {\r\n  background-color: white;\r\n  margin-right: 15px;\r\n  border: 1px solid #C2CEDA;\r\n  color: #444d54;\r\n}\r\n\r\n@media only screen and (min-width:576px) {\r\n  .openbtn {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width:576px) {\r\n  #searchDiv {\r\n    padding: 10px;\r\n  }\r\n}\r\n\r\n#thumbnailsDiv {\r\n  border: 10px solid #E8ECF1;\r\n}\r\n\r\n#productThumbnailsDiv img {\r\n  height: 220px;\r\n}\r\n\r\n@media only screen and (min-width:576px) {\r\n\r\n  #productThumbnailsDiv img {\r\n    height: 180px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width:992px) {\r\n  #productThumbnailsDiv img {\r\n    max-height: 250px;\r\n  }\r\n}\r\n\r\n.productThumbnailDescription {\r\n  padding: 10px;\r\n  color: #6685A3;\r\n}\r\n\r\n.thumbnailCol {\r\n  padding: 15px;\r\n  /*border: 10px solid #E8ECF1;*/\r\n}\r\n\r\n#productThumbnails img {\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n.productThumbnailText {\r\n  padding: 10px;\r\n}\r\n\r\n@media only screen and (min-width:1401px) and (max-width:1500px) { \r\n \r\n  .categoryGroupInnerContainer {\r\n    padding-left: 40px;\r\n    padding-right: 40px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width:1500px) {\r\n  .categoryGroupInnerContainer {\r\n    padding-left: 40px;\r\n    padding-right: 40px;\r\n  }\r\n}\r\n\r\n/*Below works but too hard to maintain due to different products having varied description lengths & those products with short descriptions result in a lot of white space just so that they are the same as the other products, often in a row above them*/\r\n\r\n/*@media only screen and (min-width:1500px)  {\r\n  .productNameAndDesc {\r\n    height: 100px;\r\n  }\r\n  @media only screen and (min-width:576px)  {\r\n  .productNameAndDesc {\r\n    height: 200px;\r\n  }\r\n}\r\n\r\n*/\r\n\r\n.productName {\r\n  font-size: 1.1em;\r\n  color: #3b5998;\r\n  font-weight: 600;\r\n  padding-bottom: .4em;\r\n}\r\n\r\n.productDescription {\r\n  color: #444d54;\r\n\r\n}\r\n\r\n.moreLink {\r\n  text-align: right;\r\n  color: #6685A3;\r\n  background-color: white;\r\n  padding: 5px;\r\n}\r\n\r\n.moreLink .fa {\r\n    padding: 5px;\r\n  }\r\n\r\n.categoryGroup:nth-child(even) {\r\n  background-color: #fafcff;\r\n  border-bottom: 1px solid #6685A3;\r\n}\r\n\r\n.categoryGroup:nth-child(odd) {\r\n  background-color: white;\r\n  border-bottom: 1px solid #6685A3;\r\n}\r\n\r\n.categoryGroupInnerContainer {\r\n  padding-top: 30px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.customCategoryHeading {\r\n  font-size: 1.3em;\r\n  color: #3b5998;\r\n  padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudGZ1bC9wcm9kdWN0cy9jb250ZW50ZnVsLWNhdGVnb3J5LWxpc3QvY29udGVudGZ1bC1jYXRlZ29yeS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFHQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUdBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBR0E7O0VBRUU7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7QUFDRjs7QUFDQSwyUEFBMlA7O0FBQzNQOzs7Ozs7Ozs7O0NBVUM7O0FBR0Q7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjOztBQUVoQjs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFRTtJQUNFLFlBQVk7RUFDZDs7QUFJRjtFQUNFLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0NBQWdDO0FBQ2xDOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29udGVudGZ1bC9wcm9kdWN0cy9jb250ZW50ZnVsLWNhdGVnb3J5LWxpc3QvY29udGVudGZ1bC1jYXRlZ29yeS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VhcmNoQm94RGl2IHtcclxuICAvKiBtYXJnaW46IDIwcHg7Ki9cclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuI3NlYXJjaERpdiB7XHJcbiAgLyogbWFyZ2luLXRvcDogMTVweDsqL1xyXG4gIGNvbG9yOiAjMDA2NzQ3O1xyXG59XHJcblxyXG5cclxuLm9wZW5idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQzJDRURBO1xyXG4gIGNvbG9yOiAjNDQ0ZDU0O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NTc2cHgpIHtcclxuICAub3BlbmJ0biB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KSB7XHJcbiAgI3NlYXJjaERpdiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuI3RodW1ibmFpbHNEaXYge1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCAjRThFQ0YxO1xyXG59XHJcblxyXG4jcHJvZHVjdFRodW1ibmFpbHNEaXYgaW1nIHtcclxuICBoZWlnaHQ6IDIyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NTc2cHgpIHtcclxuXHJcbiAgI3Byb2R1Y3RUaHVtYm5haWxzRGl2IGltZyB7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTJweCkge1xyXG4gICNwcm9kdWN0VGh1bWJuYWlsc0RpdiBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZHVjdFRodW1ibmFpbERlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiAjNjY4NUEzO1xyXG59XHJcblxyXG4udGh1bWJuYWlsQ29sIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIC8qYm9yZGVyOiAxMHB4IHNvbGlkICNFOEVDRjE7Ki9cclxufVxyXG5cclxuI3Byb2R1Y3RUaHVtYm5haWxzIGltZyB7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5wcm9kdWN0VGh1bWJuYWlsVGV4dCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNDAxcHgpIGFuZCAobWF4LXdpZHRoOjE1MDBweCkgeyBcclxuIFxyXG4gIC5jYXRlZ29yeUdyb3VwSW5uZXJDb250YWluZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNTAwcHgpIHtcclxuICAuY2F0ZWdvcnlHcm91cElubmVyQ29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgfVxyXG59XHJcbi8qQmVsb3cgd29ya3MgYnV0IHRvbyBoYXJkIHRvIG1haW50YWluIGR1ZSB0byBkaWZmZXJlbnQgcHJvZHVjdHMgaGF2aW5nIHZhcmllZCBkZXNjcmlwdGlvbiBsZW5ndGhzICYgdGhvc2UgcHJvZHVjdHMgd2l0aCBzaG9ydCBkZXNjcmlwdGlvbnMgcmVzdWx0IGluIGEgbG90IG9mIHdoaXRlIHNwYWNlIGp1c3Qgc28gdGhhdCB0aGV5IGFyZSB0aGUgc2FtZSBhcyB0aGUgb3RoZXIgcHJvZHVjdHMsIG9mdGVuIGluIGEgcm93IGFib3ZlIHRoZW0qL1xyXG4vKkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNTAwcHgpICB7XHJcbiAgLnByb2R1Y3ROYW1lQW5kRGVzYyB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NTc2cHgpICB7XHJcbiAgLnByb2R1Y3ROYW1lQW5kRGVzYyB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuKi9cclxuXHJcblxyXG4ucHJvZHVjdE5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgY29sb3I6ICMzYjU5OTg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nLWJvdHRvbTogLjRlbTtcclxufVxyXG5cclxuLnByb2R1Y3REZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6ICM0NDRkNTQ7XHJcblxyXG59XHJcblxyXG5cclxuLm1vcmVMaW5rIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogIzY2ODVBMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbiAgLm1vcmVMaW5rIC5mYSB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4uY2F0ZWdvcnlHcm91cDpudGgtY2hpbGQoZXZlbikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZjZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2Njg1QTM7XHJcbn1cclxuXHJcbi5jYXRlZ29yeUdyb3VwOm50aC1jaGlsZChvZGQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY2ODVBMztcclxufVxyXG5cclxuXHJcbi5jYXRlZ29yeUdyb3VwSW5uZXJDb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5cclxuLmN1c3RvbUNhdGVnb3J5SGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxuICBjb2xvcjogIzNiNTk5ODtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/contentful/products/contentful-category-list/contentful-category-list.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/contentful/products/contentful-category-list/contentful-category-list.component.ts ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var contentful_service_1 = __webpack_require__(/*! ../../contentful.service */ "./src/app/contentful/contentful.service.ts");
var ContentfulCategoryListComponent = /** @class */ (function () {
    function ContentfulCategoryListComponent(contentfulService) {
        this.contentfulService = contentfulService;
        this.productsForCategories = {};
        this.productsForSubCategory1s = {};
    }
    ContentfulCategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentfulService.getCategories()
            .then(function (categories) {
            _this.categories = categories;
            return Promise.all(_this.categories.map(function (category) { return _this.contentfulService.getProducts({
                'fields.categories.sys.id': category.sys.id
            }); }));
        })
            .then(function (productListings) {
            _this.categories.forEach(function (cat, i) {
                _this.productsForCategories[cat.sys.id] = productListings[i];
            });
        });
        //BW Code:
        /*
      this.contentfulService.getSubCategory1s()
          .then(subCategory1s => {
              this.subCategory1s = subCategory1s;
  
              return Promise.all(this.subCategory1s.map(
                  subCategory1 => this.contentfulService.getProducts({
                      'fields.subCategory1.sys.id': subCategory1.sys.id
                 })
              ))
          })
          .then(productListingsSubCat1 => {
              this.subCategory1s.forEach((subCat1, i) => {
                  this.productsForSubCategory1s[subCat1.sys.id] = productListingsSubCat1[i];
              });
          })
        */
    };
    /* Set the width of the side navigation to 250px */
    ContentfulCategoryListComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "320px";
    };
    /* Set the width of the side navigation to 0 */
    ContentfulCategoryListComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
    };
    ContentfulCategoryListComponent.ctorParameters = function () { return [
        { type: contentful_service_1.ContentfulService }
    ]; };
    ContentfulCategoryListComponent = __decorate([
        core_1.Component({
            selector: 'app-contentful-category-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./contentful-category-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/products/contentful-category-list/contentful-category-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./contentful-category-list.component.css */ "./src/app/contentful/products/contentful-category-list/contentful-category-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [contentful_service_1.ContentfulService])
    ], ContentfulCategoryListComponent);
    return ContentfulCategoryListComponent;
}());
exports.ContentfulCategoryListComponent = ContentfulCategoryListComponent;


/***/ }),

/***/ "./src/app/contentful/products/contentful-product-detail/contentful-product-detail.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/contentful/products/contentful-product-detail/contentful-product-detail.component.css ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n.productDetailsPage {\r\n  background-color: #ecf2f8;\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n\r\n#productDetailsRow {\r\n  margin-bottom:20px;\r\n\r\n}\r\n\r\n\r\n#carousel-images img {\r\n  max-width: 550px;\r\n \r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n\r\n.productImageTextBox {\r\n  padding: 10px;\r\n  background-color: #fcfcfc;\r\n}\r\n\r\n\r\n.productName {\r\n  color: #3b5998;\r\n  font-size: 1.4em;\r\n  font-weight: 600;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n\r\n.productDetailsHeading {\r\n  padding-top: .8em;\r\n  font-weight: 600;\r\n  font-size: 1.2em;\r\n  color: #006747;\r\n  border-top: 1px solid #C2CEDA;\r\n  /*color: #6e7b91;*/\r\n}\r\n\r\n\r\n.productDetailsText {\r\n\r\n  padding-top: .5em;\r\n  padding-bottom: .5em;\r\n  color: #444d54;\r\n}\r\n\r\n\r\n.productDetailsTextParagraph {\r\n  padding-bottom: .8em;\r\n  line-height: 1.8em;\r\n}\r\n\r\n\r\nul {\r\n  list-style-type: square;\r\n  padding-left:10px;\r\n}\r\n\r\n\r\narticle {\r\n  background-color: #fcfcfc;\r\n  padding: 1em;\r\n}\r\n\r\n\r\n.downloadLinks{\r\n  padding-bottom: .8em;\r\n}\r\n\r\n\r\n/* Gallery */\r\n\r\n\r\n.thumbnailRow {\r\n  margin-left: -15px;\r\n  margin-right: -15px;\r\n\r\n}\r\n\r\n\r\n.thumbnailsCol {\r\n\r\n  padding-left:0px;\r\n}\r\n\r\n\r\n.thumbnailsCol img {\r\n    padding-bottom: 15px;\r\n  }\r\n\r\n\r\n.imageThumbnails {\r\n  }\r\n\r\n\r\n.imageThumbnails img {\r\n\r\n  }\r\n\r\n\r\n/* The grid: Four equal columns that floats next to each other */\r\n\r\n\r\n.column {\r\n    float: left;\r\n    width: 25%;\r\n    padding: 10px;\r\n  }\r\n\r\n\r\n/* Style the images inside the grid */\r\n\r\n\r\n.column img {\r\n    opacity: 0.8;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.column img:hover {\r\n      opacity: 1;\r\n    }\r\n\r\n\r\n/* Clear floats after the columns */\r\n\r\n\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n\r\n/* The expanding image container (positioning is needed to position the close button and the text) */\r\n\r\n\r\n.container {\r\n  position: relative;\r\n  display: none;\r\n}\r\n\r\n\r\n/* Expanding image text */\r\n\r\n\r\n#imgtext {\r\n  position: absolute;\r\n  bottom: 15px;\r\n  left: 15px;\r\n  color: white;\r\n  font-size: 20px;\r\n}\r\n\r\n\r\n/* Closable button inside the image */\r\n\r\n\r\n.closebtn {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 15px;\r\n  color: white;\r\n  font-size: 35px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* ---  /* Gallery    ---- */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudGZ1bC9wcm9kdWN0cy9jb250ZW50ZnVsLXByb2R1Y3QtZGV0YWlsL2NvbnRlbnRmdWwtcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7OztBQUdBO0VBQ0Usa0JBQWtCOztBQUVwQjs7O0FBRUE7RUFDRSxnQkFBZ0I7O0VBRWhCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOzs7QUFDQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOzs7QUFJQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCOzs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7OztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7OztBQUdBO0VBQ0Usb0JBQW9CO0FBQ3RCOzs7QUFFQSxZQUFZOzs7QUFFWjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7O0FBRXJCOzs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7OztBQUVFO0lBQ0Usb0JBQW9CO0VBQ3RCOzs7QUFFQztFQUNEOzs7QUFDQTs7RUFFQTs7O0FBQ0EsZ0VBQWdFOzs7QUFDaEU7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGFBQWE7RUFDZjs7O0FBRUEscUNBQXFDOzs7QUFDckM7SUFDRSxZQUFZO0lBQ1osZUFBZTtFQUNqQjs7O0FBRUU7TUFDRSxVQUFVO0lBQ1o7OztBQUVKLG1DQUFtQzs7O0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7OztBQUVBLG9HQUFvRzs7O0FBQ3BHO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7O0FBRUEseUJBQXlCOzs7QUFDekI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7O0FBRUEscUNBQXFDOzs7QUFDckM7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7QUFDakI7OztBQUdBLDRCQUE0QiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnRmdWwvcHJvZHVjdHMvY29udGVudGZ1bC1wcm9kdWN0LWRldGFpbC9jb250ZW50ZnVsLXByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5wcm9kdWN0RGV0YWlsc1BhZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2YyZjg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcblxyXG4jcHJvZHVjdERldGFpbHNSb3cge1xyXG4gIG1hcmdpbi1ib3R0b206MjBweDtcclxuXHJcbn1cclxuXHJcbiNjYXJvdXNlbC1pbWFnZXMgaW1nIHtcclxuICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5wcm9kdWN0SW1hZ2VUZXh0Qm94IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XHJcbn1cclxuXHJcbi5wcm9kdWN0TmFtZSB7XHJcbiAgY29sb3I6ICMzYjU5OTg7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5wcm9kdWN0RGV0YWlsc0hlYWRpbmcge1xyXG4gIHBhZGRpbmctdG9wOiAuOGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBjb2xvcjogIzAwNjc0NztcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0MyQ0VEQTtcclxuICAvKmNvbG9yOiAjNmU3YjkxOyovXHJcbn1cclxuXHJcbi5wcm9kdWN0RGV0YWlsc1RleHQge1xyXG5cclxuICBwYWRkaW5nLXRvcDogLjVlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogLjVlbTtcclxuICBjb2xvcjogIzQ0NGQ1NDtcclxufVxyXG5cclxuLnByb2R1Y3REZXRhaWxzVGV4dFBhcmFncmFwaCB7XHJcbiAgcGFkZGluZy1ib3R0b206IC44ZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XHJcbiAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbn1cclxuXHJcbmFydGljbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XHJcbiAgcGFkZGluZzogMWVtO1xyXG59XHJcblxyXG5cclxuLmRvd25sb2FkTGlua3N7XHJcbiAgcGFkZGluZy1ib3R0b206IC44ZW07XHJcbn1cclxuXHJcbi8qIEdhbGxlcnkgKi9cclxuXHJcbi50aHVtYm5haWxSb3cge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG5cclxufVxyXG5cclxuLnRodW1ibmFpbHNDb2wge1xyXG5cclxuICBwYWRkaW5nLWxlZnQ6MHB4O1xyXG59XHJcblxyXG4gIC50aHVtYm5haWxzQ29sIGltZyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICB9XHJcblxyXG4gICAuaW1hZ2VUaHVtYm5haWxzIHtcclxuICB9XHJcbiAgLmltYWdlVGh1bWJuYWlscyBpbWcge1xyXG5cclxuICB9XHJcbiAgLyogVGhlIGdyaWQ6IEZvdXIgZXF1YWwgY29sdW1ucyB0aGF0IGZsb2F0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuICAuY29sdW1uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAvKiBTdHlsZSB0aGUgaW1hZ2VzIGluc2lkZSB0aGUgZ3JpZCAqL1xyXG4gIC5jb2x1bW4gaW1nIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICAgLmNvbHVtbiBpbWc6aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXHJcbi5yb3c6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi8qIFRoZSBleHBhbmRpbmcgaW1hZ2UgY29udGFpbmVyIChwb3NpdGlvbmluZyBpcyBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGNsb3NlIGJ1dHRvbiBhbmQgdGhlIHRleHQpICovXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBFeHBhbmRpbmcgaW1hZ2UgdGV4dCAqL1xyXG4jaW1ndGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTVweDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi8qIENsb3NhYmxlIGJ1dHRvbiBpbnNpZGUgdGhlIGltYWdlICovXHJcbi5jbG9zZWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi8qIC0tLSAgLyogR2FsbGVyeSAgICAtLS0tICovXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/contentful/products/contentful-product-detail/contentful-product-detail.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/contentful/products/contentful-product-detail/contentful-product-detail.component.ts ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var contentful_service_1 = __webpack_require__(/*! ../../contentful.service */ "./src/app/contentful/contentful.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"); //Router is just for the back button
var ContentfulProductDetailComponent = /** @class */ (function () {
    // --- Gallery Variables -----
    //const expandImg = document.getElementById("expandedImg");
    //const imgText = this.imgText = document.getElementById("imgtext");
    // --- /Gallery Variables -----
    function ContentfulProductDetailComponent(ContentfulService, route, _router // for the back button
    ) {
        this.ContentfulService = ContentfulService;
        this.route = route;
        this._router = _router;
        this.showImage = false;
        this.productImages = [
            {
                fileName: 'steico_therm_application',
                brandName: 'STEICO',
                productName: 'Therm',
                productDescription: 'Rigid insulation',
                imageDescription: 'roof application',
                imageUrl: '../../../assets/carousel_images/banner_images/stecio-therm-dry.jpg',
                productUrl: 'insulation',
                keyFeature1: 'Keep Cold Out',
                keyFeature2: 'Regulate Temperature',
                keyFeature3: 'Reduce Noise',
                keyFeature4: 'Reduce Moisture',
                keyFeature5: 'Save Energy',
                keyFeature6: 'Stay Green ',
            }
        ];
    }
    ContentfulProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.pipe(operators_1.switchMap(function (params) { return _this.ContentfulService.getProduct(params.get('slug')); }))
            .subscribe(function (product) {
            _this.product = product;
            //this.jsonProduct = product.fields.brand.fields.companyName;
            _this.images = product.fields.image;
            _this.videos = product.fields.video;
            _this.type1Applications = product.fields.type1Applications; //populate the new type1Applications array with fields from the type1Applications array in Contentful
            _this.type2Applications = product.fields.type2Applications;
            _this.specificationsSheets = product.fields.specificationsSheet;
        }, function (error) { return _this.errorMessage = error; });
    };
    //imagesArrayImageUrls: any[];
    /*
    var
    forecasts = [
        { day: 'monday', sun: true, hum: 10 },
        { day: 'tue', sun: false, hum: 100 },
        { day: 'wed', sun: false, hum: 100 },
        { day: 'thur', sun: true, hum: 25 },
        { day: 'fri', sun: false, hum: 10 },
        { day: 'sat', sun: true, hum: 15 },
        { day: 'sunday', sun: false, hum: 10 },
    ];

    getIm2() {
        var newArray2 = this.forecasts.map
            (function (extractArrayImgUrls)
            {
                return extractArrayImgUrls.hum;
            })
        console.log(newArray2);
    }*/
    ContentfulProductDetailComponent.prototype.getImages = function () {
        var newArray = this.images.map(function (extractArrayImgUrls) {
            return extractArrayImgUrls.fields.file.url;
        });
    };
    ContentfulProductDetailComponent.prototype.getVideos = function () {
        var newArrayVideoUrls = this.videos.map(function (extractArrayVideoUrls) {
            return extractArrayVideoUrls.fields.file.url;
        });
        var newArrayVideoTitles = this.videos.map(function (extractArrayVideoTitles) {
            return extractArrayVideoTitles.fields.title;
        });
    };
    ContentfulProductDetailComponent.prototype.getType1Applications = function () {
        var newArray = this.type1Applications.map(function (extractArrayType1Applications) {
            return extractArrayType1Applications.fields.applicationTypeInstance;
        });
    };
    ContentfulProductDetailComponent.prototype.getType2Applications = function () {
        var newArray = this.type2Applications.map(function (extractArrayType2Applications) {
            return extractArrayType2Applications.fields.applicationTypeInstance;
        });
    };
    ContentfulProductDetailComponent.prototype.getSpecificationsSheetTitles = function () {
        var newArray = this.specificationsSheets.map(function (extractArraySpecificationsSheets) {
            return extractArraySpecificationsSheets.fields.title;
        });
    };
    ContentfulProductDetailComponent.prototype.getSpecificationsSheetUrls = function () {
        var newArray = this.specificationsSheets.map(function (extractArraySpecificationsSheets) {
            return extractArraySpecificationsSheets.fields.file.url;
        });
    };
    /*
    getImageUrls(imagesArrayImageUrls) {
   
        //console.log('All: ' + JSON.stringify(this.imagesArray));

        this.images.forEach(function (anyEntry) {
          imagesArrayImageUrls = anyEntry.fields.file.url
            
            return anyEntry;
        });
        console.log('Image URL is :' + imagesArrayImageUrls);
        //let newArray = imagesArrayImageUrls.map(function (noSure) {
            //return 12;
        //console.log('new array= ' + newArray);
        
       // this.jsonProduct.forEach(function () { console.log("shittycake") });
    }*/
    // for the back button:
    ContentfulProductDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    ContentfulProductDetailComponent.prototype.wheel = function () {
        window.alert("you're using the scroll wheel");
    };
    ContentfulProductDetailComponent.prototype.openDialog = function () {
        window.alert("Shithouse");
    };
    ContentfulProductDetailComponent.prototype.toggleImage = function (img) {
        this.showImage = !this.showImage;
    };
    ContentfulProductDetailComponent.prototype.thumbnailClicked = function () {
        this.showImage = !this.showImage;
    };
    ContentfulProductDetailComponent.ctorParameters = function () { return [
        { type: contentful_service_1.ContentfulService },
        { type: router_1.ActivatedRoute },
        { type: router_1.Router // for the back button
         }
    ]; };
    ContentfulProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-contentful-product-detail',
            template: __importDefault(__webpack_require__(/*! raw-loader!./contentful-product-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/products/contentful-product-detail/contentful-product-detail.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./contentful-product-detail.component.css */ "./src/app/contentful/products/contentful-product-detail/contentful-product-detail.component.css")).default]
        }),
        __metadata("design:paramtypes", [contentful_service_1.ContentfulService,
            router_1.ActivatedRoute,
            router_1.Router // for the back button
        ])
    ], ContentfulProductDetailComponent);
    return ContentfulProductDetailComponent;
}());
exports.ContentfulProductDetailComponent = ContentfulProductDetailComponent;


/***/ }),

/***/ "./src/app/contentful/products/contentful-product-list-by-sub-category1/contentful-product-list-by-sub-category1.component.css":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/contentful/products/contentful-product-list-by-sub-category1/contentful-product-list-by-sub-category1.component.css ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnRmdWwvcHJvZHVjdHMvY29udGVudGZ1bC1wcm9kdWN0LWxpc3QtYnktc3ViLWNhdGVnb3J5MS9jb250ZW50ZnVsLXByb2R1Y3QtbGlzdC1ieS1zdWItY2F0ZWdvcnkxLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/contentful/products/contentful-product-list-by-sub-category1/contentful-product-list-by-sub-category1.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/contentful/products/contentful-product-list-by-sub-category1/contentful-product-list-by-sub-category1.component.ts ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var contentful_service_1 = __webpack_require__(/*! ../../contentful.service */ "./src/app/contentful/contentful.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"); //Router is just for the back button
var ContentfulProductListBySubCategory1Component = /** @class */ (function () {
    function ContentfulProductListBySubCategory1Component(
    //adding the Contentful Service with dependancy injection:
    ContentfulService, route, _router // for the back button
    ) {
        this.ContentfulService = ContentfulService;
        this.route = route;
        this._router = _router;
        // define private class properties
        this.products = [];
    }
    ContentfulProductListBySubCategory1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.pipe(operators_1.switchMap(function (params) { return _this.ContentfulService.getProductBySubCategory2(params.get('subcategory2slug')); }))
            .subscribe(function (products) { return _this.products = products; });
        console.log(window.location.href);
        console.log("test");
    };
    ContentfulProductListBySubCategory1Component.ctorParameters = function () { return [
        { type: contentful_service_1.ContentfulService },
        { type: router_1.ActivatedRoute },
        { type: router_1.Router // for the back button
         }
    ]; };
    ContentfulProductListBySubCategory1Component = __decorate([
        core_1.Component({
            //  selector: 'app-contentful-product-list-by-sub-category1',
            template: __importDefault(__webpack_require__(/*! raw-loader!./contentful-product-list-by-sub-category1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/products/contentful-product-list-by-sub-category1/contentful-product-list-by-sub-category1.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./contentful-product-list-by-sub-category1.component.css */ "./src/app/contentful/products/contentful-product-list-by-sub-category1/contentful-product-list-by-sub-category1.component.css")).default]
        }),
        __metadata("design:paramtypes", [contentful_service_1.ContentfulService,
            router_1.ActivatedRoute,
            router_1.Router // for the back button
        ])
    ], ContentfulProductListBySubCategory1Component);
    return ContentfulProductListBySubCategory1Component;
}());
exports.ContentfulProductListBySubCategory1Component = ContentfulProductListBySubCategory1Component;


/***/ }),

/***/ "./src/app/contentful/products/contentful-product-list-by-sub-category2/contentful-product-list-by-sub-category2.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/contentful/products/contentful-product-list-by-sub-category2/contentful-product-list-by-sub-category2.component.ts ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var contentful_service_1 = __webpack_require__(/*! ../../contentful.service */ "./src/app/contentful/contentful.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"); //ActivedRoute is to read URL. Router is just for the back button
var ContentfulProductListBySubCategory2Component = /** @class */ (function () {
    //adding the Contentful Service with dependancy injection:
    function ContentfulProductListBySubCategory2Component(contentfulService, route, // added to read URL
    _router) {
        this.contentfulService = contentfulService;
        this.route = route;
        this._router = _router;
        // define private class properties
        this.products = [];
    }
    // fetch data on init
    ContentfulProductListBySubCategory2Component.prototype.ngOnInit = function () {
        //2 lines below work:
        var _this = this;
        // this.searchParam = 'Panel Products > Plywood > Softwood';
        //this.contentfulService.getProducts({ " 'fields.categories' + [0] + '.fields.title' " : this.searchParam })
        //     .then(products => this.products = products)
        this.route.paramMap.pipe(operators_1.switchMap(function (params) { return _this.contentfulService.getProductBySubCategory2(params.get('subcategory2slug')); }))
            .subscribe(function (products) { return _this.products = products; });
        console.log(window.location.href);
    };
    ContentfulProductListBySubCategory2Component.ctorParameters = function () { return [
        { type: contentful_service_1.ContentfulService },
        { type: router_1.ActivatedRoute },
        { type: router_1.Router }
    ]; };
    ContentfulProductListBySubCategory2Component = __decorate([
        core_1.Component({
            selector: 'app-contentful-product-list-by-sub-category2',
            template: __importDefault(__webpack_require__(/*! raw-loader!./contentful-product-list-by-sub-category2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/products/contentful-product-list-by-sub-category2/contentful-product-list-by-sub-category2.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ../contentful-category-list/contentful-category-list.component.css */ "./src/app/contentful/products/contentful-category-list/contentful-category-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [contentful_service_1.ContentfulService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], ContentfulProductListBySubCategory2Component);
    return ContentfulProductListBySubCategory2Component;
}()); /*
this.route.paramMap
    .switchMap((params: ParamMap) => this.ContentfulService.getProduct(params.get('slug')))
    .subscribe(product => this.product = product);

this.route.paramMap
    .switchMap((params: ParamMap) => this.ContentfulService.getProductBySubCategory1(params.get('subcategory1slug')))
    .subscribe(product => this.product = product);

console.log(window.location.href);
console.log("test");
*/
exports.ContentfulProductListBySubCategory2Component = ContentfulProductListBySubCategory2Component;


/***/ }),

/***/ "./src/app/contentful/products/contentful-product-list/contentful-product-list.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/contentful/products/contentful-product-list/contentful-product-list.component.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var contentful_service_1 = __webpack_require__(/*! ../../contentful.service */ "./src/app/contentful/contentful.service.ts");
var ContentfulProductListComponent = /** @class */ (function () {
    //adding the Contentful Service with dependancy injection:
    function ContentfulProductListComponent(contentfulService) {
        this.contentfulService = contentfulService;
        // define private class properties
        this.products = [];
    }
    // fetch data on init
    ContentfulProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentfulService.getProducts()
            .then(function (products) { return _this.products = products; });
    };
    ContentfulProductListComponent.ctorParameters = function () { return [
        { type: contentful_service_1.ContentfulService }
    ]; };
    ContentfulProductListComponent = __decorate([
        core_1.Component({
            selector: 'app-contentful-product-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./contentful-product-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/products/contentful-product-list/contentful-product-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ../contentful-category-list/contentful-category-list.component.css */ "./src/app/contentful/products/contentful-category-list/contentful-category-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [contentful_service_1.ContentfulService])
    ], ContentfulProductListComponent);
    return ContentfulProductListComponent;
}());
exports.ContentfulProductListComponent = ContentfulProductListComponent;


/***/ }),

/***/ "./src/app/contentful/sustainability/sustainability.component.css":
/*!************************************************************************!*\
  !*** ./src/app/contentful/sustainability/sustainability.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#sustainabilityImagesDiv {\r\n  width: 100%;\r\n  padding-top: 2.2em;\r\n  padding-bottom: 1.3em;\r\n  background-color: white;\r\n  margin-top:1.6em;\r\n\r\n}\r\n\r\n.sustainabilityPageVideo {\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudGZ1bC9zdXN0YWluYWJpbGl0eS9zdXN0YWluYWJpbGl0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29udGVudGZ1bC9zdXN0YWluYWJpbGl0eS9zdXN0YWluYWJpbGl0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3N1c3RhaW5hYmlsaXR5SW1hZ2VzRGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMi4yZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDEuM2VtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6MS42ZW07XHJcblxyXG59XHJcblxyXG4uc3VzdGFpbmFiaWxpdHlQYWdlVmlkZW8ge1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/contentful/sustainability/sustainability.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/contentful/sustainability/sustainability.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var contentful_service_1 = __webpack_require__(/*! ../contentful.service */ "./src/app/contentful/contentful.service.ts");
var SustainabilityComponent = /** @class */ (function () {
    function SustainabilityComponent(_contentfulService) {
        this._contentfulService = _contentfulService;
        this.staticPages = [];
    }
    // fetch data on init
    SustainabilityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._contentfulService.getStaticPages()
            .then(function (staticPages) { return _this.staticPages = staticPages; });
    };
    SustainabilityComponent.ctorParameters = function () { return [
        { type: contentful_service_1.ContentfulService }
    ]; };
    SustainabilityComponent = __decorate([
        core_1.Component({
            template: __importDefault(__webpack_require__(/*! raw-loader!./sustainability.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contentful/sustainability/sustainability.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./sustainability.component.css */ "./src/app/contentful/sustainability/sustainability.component.css")).default]
        }),
        __metadata("design:paramtypes", [contentful_service_1.ContentfulService])
    ], SustainabilityComponent);
    return SustainabilityComponent;
}());
exports.SustainabilityComponent = SustainabilityComponent;


/***/ }),

/***/ "./src/app/home/carousel/carousel.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/carousel/carousel.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*For caption in top right hand corner\r\n\r\n  .carousel-caption {\r\n  color: lightgrey;\r\n  background: linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) );\r\n  top: 3%;\r\n  bottom: auto;\r\n  right: 3%;\r\n  left: auto;\r\n  padding:10px;\r\n\r\n}*/\r\n@media only screen and (min-width: 1200px) {\r\n  ngb-carousel {\r\n    margin-top: 20px;\r\n  }\r\n}\r\n.carousel-column {\r\n  border-top: solid 15px white;\r\n  border-left: solid 15px white;\r\n  border-right: solid 15px white;\r\n  width: 100%;\r\n  background-color: white;\r\n  text-align: center;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n  .carousel-column {\r\n    display: none;\r\n  }\r\n}\r\n.carouselColumnHeaderDiv {\r\n  color: darkslategrey;\r\n  padding-top: 5px;\r\n  padding-bottom: 10px;\r\n}\r\n@media only screen and (min-width:1199px) {\r\n  .carousel-column-header-div {\r\n    padding-top: 10%;\r\n    padding-bottom: 10%;\r\n  }\r\n}\r\n#product-logo {\r\n  max-width: 200px;\r\n}\r\n.logo-caption {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  font-size: 3vw;\r\n  color: green;\r\n  vertical-align: sub;\r\n  font-style: italic;\r\n}\r\n@media only screen and (min-width:1199px) {\r\n  #logo-caption {\r\n    font-size: 2em;\r\n  }\r\n}\r\n#carousel-images {\r\n  /* z-index: -1; /* makes the below code work by extending the caro column over the caro image*/\r\n  margin-bottom: -5px; /*workaround  - need permanent fix*/\r\n}\r\n/*was used when column was on left hand side\r\n@media only screen and (min-width:768px) and (max-width:1080px){\r\n  .carousel-column {\r\n    width: 110%;\r\n    z-index: 10;\r\n  }\r\n}*/\r\n#carouselColumnFooter #fscPefcNote {\r\n  display: inline-block;\r\n  width: 60%;\r\n}\r\n#carouselColumnFooter #carouselColumnFooter-Logo {\r\n  display: inline-block;\r\n  width: 35%;\r\n}\r\n@media only screen and (max-width:1199px) {\r\n  #carouselColumnFooter #carouselColumnFooter-Logo {\r\n    display: none;\r\n  }\r\n}\r\n#carouselColumnFooter img {\r\n  padding-left: 7px;\r\n  padding-right: 7px;\r\n  padding-bottom: 20px;\r\n}\r\nimg { /*has to be applied to img to override Bootstrap's 'img vertical-align of middle*/\r\n  vertical-align: sub;\r\n}\r\nsustainabilityLogo {\r\n  margin-left: 1.2em;\r\n  margin-right: 1.2em;\r\n}\r\n.carousel-caption {\r\n  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) );\r\n  top: 23%;\r\n  bottom: auto;\r\n  left: 2%;\r\n  right: auto;\r\n  padding-top: 2%;\r\n  padding-bottom: 2%;\r\n  padding-left: 4%;\r\n  padding-right: 4%;\r\n  letter-spacing: 1px;\r\n}\r\n@media only screen and (max-width: 479px) {\r\n\r\n  #adMainMessage {\r\n    font-size: 1.2em;\r\n    font-weight: 600;\r\n    line-height: 1.2em;\r\n    text-align: right; /*bootstrap override*/\r\n  }\r\n\r\n  #adFooterMessage, #adSubMessage {\r\n    display: none;\r\n  }\r\n}\r\n@media only screen and (min-width: 480px) {\r\n\r\n  .carousel-caption {\r\n    top: 4%;\r\n  }\r\n\r\n  #adSubMessage {\r\n    font-size: 1.8em;\r\n    text-align: left; /*bootstrap override*/\r\n  }\r\n\r\n  #adMainMessage {\r\n    font-size: 2em;\r\n    font-weight: 600;\r\n    line-height: 1.2em;\r\n    text-align: left; /*bootstrap override*/\r\n  }\r\n}\r\n#adFooterMessage {\r\n  padding-top: 10px;\r\n  font-size: 1.1em;\r\n  text-align: right; /*bootstrap override*/\r\n}\r\n.carousel-indicators li {\r\n  width: 36px;\r\n  height: 12px;\r\n}\r\n/* using bootstrap's d-none d-sm-block instead of below\r\n@media only screen and (max-width: 575px) {\r\n  .carousel-caption {\r\n    display: none;\r\n  }\r\n}*/\r\n.carousel-item {\r\n  transition: opacity ease-out .7s;\r\n  /*put all the images on top of each other to start with:*/\r\n  left: 0;\r\n  top: 0;\r\n  position: absolute;\r\n  width: 100%;\r\n  display: block;\r\n  /*make them all invisible to start with*/\r\n  opacity: 0;\r\n}\r\n.carousel-item.active {\r\n    top: auto;\r\n    /*make first image visible*/\r\n    opacity: 1;\r\n    position: relative;\r\n  }\r\n.carousel-inner {\r\n  overflow: visible;\r\n}\r\n/*\r\n@media only screen and (max-width:768px) {\r\n  .carousel-column {\r\n    width: 110%;\r\n    z-index: 10;\r\n  }\r\n}*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztFQVdFO0FBQ0Y7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBSUE7RUFDRSw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjtBQUdBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7QUFJQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUNGO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjtBQUVBO0VBQ0UsOEZBQThGO0VBQzlGLG1CQUFtQixFQUFFLG1DQUFtQztBQUMxRDtBQUVBOzs7Ozs7RUFNRTtBQUVGO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjtBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjtBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7QUFJQSxNQUFNLGlGQUFpRjtFQUNyRixtQkFBbUI7QUFDckI7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFHQTtFQUNFLHFFQUFxRTtFQUNyRSxRQUFRO0VBQ1IsWUFBWTtFQUNaLFFBQVE7RUFDUixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUdBOztFQUVFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUUscUJBQXFCO0VBQzFDOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFFQTs7RUFFRTtJQUNFLE9BQU87RUFDVDs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBRSxxQkFBcUI7RUFDekM7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBRSxxQkFBcUI7RUFDekM7QUFDRjtBQUlBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBRSxxQkFBcUI7QUFDMUM7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTs7Ozs7RUFLRTtBQUtGO0VBQ0UsZ0NBQWdDO0VBQ2hDLHlEQUF5RDtFQUN6RCxPQUFPO0VBQ1AsTUFBTTtFQUNOLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLHdDQUF3QztFQUN4QyxVQUFVO0FBQ1o7QUFFRTtJQUNFLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjtBQUlGO0VBQ0UsaUJBQWlCO0FBQ25CO0FBR0E7Ozs7OztFQU1FIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypGb3IgY2FwdGlvbiBpbiB0b3AgcmlnaHQgaGFuZCBjb3JuZXJcclxuXHJcbiAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gIGNvbG9yOiBsaWdodGdyZXk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCByZ2JhKDAsIDAsIDAsIDAuOCksIHJnYmEoMCwgMCwgMCwgMC44KSApO1xyXG4gIHRvcDogMyU7XHJcbiAgYm90dG9tOiBhdXRvO1xyXG4gIHJpZ2h0OiAzJTtcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHBhZGRpbmc6MTBweDtcclxuXHJcbn0qL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIG5nYi1jYXJvdXNlbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4uY2Fyb3VzZWwtY29sdW1uIHtcclxuICBib3JkZXItdG9wOiBzb2xpZCAxNXB4IHdoaXRlO1xyXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxNXB4IHdoaXRlO1xyXG4gIGJvcmRlci1yaWdodDogc29saWQgMTVweCB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmNhcm91c2VsLWNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcm91c2VsQ29sdW1uSGVhZGVyRGl2IHtcclxuICBjb2xvcjogZGFya3NsYXRlZ3JleTtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMTk5cHgpIHtcclxuICAuY2Fyb3VzZWwtY29sdW1uLWhlYWRlci1kaXYge1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgfVxyXG59XHJcblxyXG4jcHJvZHVjdC1sb2dvIHtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG5cclxuLmxvZ28tY2FwdGlvbiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGZvbnQtc2l6ZTogM3Z3O1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjExOTlweCkge1xyXG4gICNsb2dvLWNhcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgfVxyXG59XHJcblxyXG4jY2Fyb3VzZWwtaW1hZ2VzIHtcclxuICAvKiB6LWluZGV4OiAtMTsgLyogbWFrZXMgdGhlIGJlbG93IGNvZGUgd29yayBieSBleHRlbmRpbmcgdGhlIGNhcm8gY29sdW1uIG92ZXIgdGhlIGNhcm8gaW1hZ2UqL1xyXG4gIG1hcmdpbi1ib3R0b206IC01cHg7IC8qd29ya2Fyb3VuZCAgLSBuZWVkIHBlcm1hbmVudCBmaXgqL1xyXG59XHJcblxyXG4vKndhcyB1c2VkIHdoZW4gY29sdW1uIHdhcyBvbiBsZWZ0IGhhbmQgc2lkZVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpIGFuZCAobWF4LXdpZHRoOjEwODBweCl7XHJcbiAgLmNhcm91c2VsLWNvbHVtbiB7XHJcbiAgICB3aWR0aDogMTEwJTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIH1cclxufSovXHJcblxyXG4jY2Fyb3VzZWxDb2x1bW5Gb290ZXIgI2ZzY1BlZmNOb3RlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuI2Nhcm91c2VsQ29sdW1uRm9vdGVyICNjYXJvdXNlbENvbHVtbkZvb3Rlci1Mb2dvIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDM1JTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjExOTlweCkge1xyXG4gICNjYXJvdXNlbENvbHVtbkZvb3RlciAjY2Fyb3VzZWxDb2x1bW5Gb290ZXItTG9nbyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiNjYXJvdXNlbENvbHVtbkZvb3RlciBpbWcge1xyXG4gIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuXHJcblxyXG5pbWcgeyAvKmhhcyB0byBiZSBhcHBsaWVkIHRvIGltZyB0byBvdmVycmlkZSBCb290c3RyYXAncyAnaW1nIHZlcnRpY2FsLWFsaWduIG9mIG1pZGRsZSovXHJcbiAgdmVydGljYWwtYWxpZ246IHN1YjtcclxufVxyXG5cclxuXHJcbnN1c3RhaW5hYmlsaXR5TG9nbyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEuMmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMS4yZW07XHJcbn1cclxuXHJcblxyXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSApO1xyXG4gIHRvcDogMjMlO1xyXG4gIGJvdHRvbTogYXV0bztcclxuICBsZWZ0OiAyJTtcclxuICByaWdodDogYXV0bztcclxuICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gIHBhZGRpbmctbGVmdDogNCU7XHJcbiAgcGFkZGluZy1yaWdodDogNCU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcclxuXHJcbiAgI2FkTWFpbk1lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgLypib290c3RyYXAgb3ZlcnJpZGUqL1xyXG4gIH1cclxuXHJcbiAgI2FkRm9vdGVyTWVzc2FnZSwgI2FkU3ViTWVzc2FnZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xyXG5cclxuICAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICB0b3A6IDQlO1xyXG4gIH1cclxuXHJcbiAgI2FkU3ViTWVzc2FnZSB7XHJcbiAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgLypib290c3RyYXAgb3ZlcnJpZGUqL1xyXG4gIH1cclxuXHJcbiAgI2FkTWFpbk1lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgLypib290c3RyYXAgb3ZlcnJpZGUqL1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4jYWRGb290ZXJNZXNzYWdlIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0OyAvKmJvb3RzdHJhcCBvdmVycmlkZSovXHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDEycHg7XHJcbn1cclxuLyogdXNpbmcgYm9vdHN0cmFwJ3MgZC1ub25lIGQtc20tYmxvY2sgaW5zdGVhZCBvZiBiZWxvd1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn0qL1xyXG5cclxuXHJcblxyXG5cclxuLmNhcm91c2VsLWl0ZW0ge1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1vdXQgLjdzO1xyXG4gIC8qcHV0IGFsbCB0aGUgaW1hZ2VzIG9uIHRvcCBvZiBlYWNoIG90aGVyIHRvIHN0YXJ0IHdpdGg6Ki9cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLyptYWtlIHRoZW0gYWxsIGludmlzaWJsZSB0byBzdGFydCB3aXRoKi9cclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4gIC5jYXJvdXNlbC1pdGVtLmFjdGl2ZSB7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICAvKm1ha2UgZmlyc3QgaW1hZ2UgdmlzaWJsZSovXHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcblxyXG5cclxuLmNhcm91c2VsLWlubmVyIHtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuXHJcbi8qXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gIC5jYXJvdXNlbC1jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDExMCU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICB9XHJcbn0qL1xyXG4iXX0= */");

/***/ }),

/***/ "./src/app/home/carousel/carousel.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/carousel/carousel.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.items = [
            /*{
                fileName: 'steico_therm_application',
                brandName: 'STEICO',
                productName: 'Therm',
                productDescription: 'Rigid insulation',
                imageDescription: 'roof application',
                imageUrl: '../../../assets/carousel_images/banner_images/stecio-therm-dry.jpg',
                productUrl: 'insulation',
                keyFeature1: 'Keep Cold Out',
                keyFeature2: 'Regulate Temperature',
                keyFeature3: 'Reduce Noise',
                keyFeature4: 'Reduce Moisture',
                keyFeature5: 'Save Energy',
                keyFeature6: 'Stay Green '
            },
            {
                fileName: 'steico_universal_application_2',
                brandName: 'STEICO',
                productName: 'Universal Dry',
                productDescription: 'Sarking and sheating board',
                imageDescription: 'roof application'
            },*/
            {
                fileName: 'i_joist_home',
                brandName: 'STEICO',
                productName: 'I-Joists',
                productDescription: 'For floors & roofs',
                imageDescription: 'roof application',
                image1Url: '../../../assets/carousel_images/banner_images/steico_i-joist.jpg',
                logoUrl: "../../../assets/carousel_images/banner_images/steico-logo-small.png",
                productUrl: 'i-joists',
                //adSubMessage: "Steico's latest",
                adMainMessageLine1: "Engineered Flooring",
                adMainMessageLine2: "systems",
                certLogoUrl: "../../../assets/carousel_images/banner_images/logos/steico-cert.png"
            },
            {
                fileName: 'softwood_timber_tan_e_truck',
                brandName: 'Wood Concepts',
                productName: 'Long Lengths',
                productNameCssClass: "logo-caption",
                productDescription: 'For quality & sustainability',
                imageDescription: 'Tanalised E timber',
                image1Url: "../../../assets/carousel_images/banner_images/long_lengths_small_banner_image.jpg",
                productUrl: "long-lengths",
                adSubMessage: "View our range of ",
                adMainMessageLine1: "Long Length Softwood",
                adMainMessageLine2: ""
            }
            /*
              {
                fileName: 'softwood_timber_tan_e',
                brandName: 'Wood Concepts',
                productName: 'Tanalised-E',
                productDescription: '',
                imageDescription: 'Tanalised E timber',
                imageUrl: '../../../assets/carousel_images/banner_images/steico_i-joist.jpg',
                productUrl: 'i-joists'
    
    
            }*/
        ];
    }
    CarouselComponent = __decorate([
        core_1.Component({
            selector: 'app-carousel',
            template: __importDefault(__webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/carousel/carousel.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./carousel.component.css */ "./src/app/home/carousel/carousel.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());
exports.CarouselComponent = CarouselComponent;


/***/ }),

/***/ "./src/app/home/welcome.component.css":
/*!********************************************!*\
  !*** ./src/app/home/welcome.component.css ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("article:nth-child(even) {\r\n}\r\n\r\n#welcomeIntroduction {\r\n  /*background-color: #eff2f5; nice blue-gray*/\r\n  background-color: #fff;\r\n  color: #002766;\r\n\r\n}\r\n\r\n#importantMessageHeader {\r\n  color: #fcd303;\r\n  font-size: 1.3em;\r\n}\r\n\r\n#importantMessageDate {\r\n  text-align: right;\r\n}\r\n\r\n#importantMessageContainer {\r\n  width: 100%;\r\n  background-color: #444d54;\r\n  color: #e6f2ff;\r\n  font-size: 1.1em;\r\n}\r\n\r\n#importantMessageContainer a {\r\n    color: #e6f2ff;\r\n  }\r\n\r\n#importantTextBox {\r\n    margin: auto;\r\n    width: 60%;\r\n    border: 3px solid #73AD21;\r\n    padding: 10px;\r\n  }\r\n\r\n#welcomeText {\r\n  font-family: segoe-ui, Frutiger, \"Frutiger Linotype\", \"Dejavu Sans\", \"Helvetica Neue\", Arial, sans-serif;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  font-weight: 100;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-top: 30px;\r\n  padding-bottom: 30px;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n}\r\n\r\n#welcomeTextHeader {\r\n  font-size: 45px;\r\n  padding-bottom: 15px;\r\n  font-family: segoe-ui-light, segoe-ui, Frutiger, \"Frutiger Linotype\", \"Dejavu Sans\", \"Helvetica Neue\", Arial, sans-serif;\r\n}\r\n\r\n#welcomeTextBody {\r\n  font-size: 1.1em;\r\n  font-family: \"Segoe UI\", Frutiger, \"Frutiger Linotype\", \"Dejavu Sans\", \"Helvetica Neue\", Arial, sans-serif;\r\n  font-weight: 200;\r\n\r\n}\r\n\r\n#welcomeTextBody p {\r\n    text-align: center;\r\n  }\r\n\r\n#companySellingPoints {\r\n  background-color: #24365b;\r\n  color: white;\r\n  font-size: 1.2em;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n}\r\n\r\n.sellingPoint {\r\n  padding:7px;\r\n}\r\n\r\n@media only screen and (min-width:576px) and (max-width:660px) {\r\n  #companySellingPoints {\r\n    font-size: 1.1em;\r\n  }\r\n}\r\n\r\nfa-check #companySellingPoints clr-icon { /*didn't reference by shape/tick has the html shape attribute isn't supported at time of writing by IE or Chrome*/\r\n  width: 12px;\r\n  height: 12px;\r\n}\r\n\r\n/*\r\n  .carousel-caption {\r\n    background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5));\r\n    font-family: 'Century Gothic', Muli, 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    width: 40%;\r\n    top: -575px;\r\n    background-image: -webkit-linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5));\r\n    margin-left: 60%;\r\n    left: 0;\r\n    right: 0;\r\n    padding: 10px;\r\n    text-align: left;\r\n    position: relative;\r\n  }\r\n\r\n\r\n}\r\n*/\r\n\r\n/**/\r\n\r\nngb-carousel {\r\n  width: inherit;\r\n  height: inherit;\r\n}\r\n\r\n/* ---- PRODUCT ICONS ------ */\r\n\r\n#productIconsAndTitleContainer {\r\n  background-color: whitesmoke;\r\n  padding-bottom: 40px;\r\n}\r\n\r\n/*Product Icons*/\r\n\r\n@media only screen and (min-width:576px) {\r\n  #productIconsAndTitleContainer {\r\n    padding-top: 15px;\r\n  }\r\n}\r\n\r\n#productIconsRow {\r\n\r\n}\r\n\r\n.productSvgAndHeader, .viewAllProductsLink {\r\n  background-color: #499933;\r\n  /*background-color: #6e7b91;*/\r\n  color: white;\r\n  margin-top: 1.1em;\r\n  margin-bottom: 1.1em;\r\n  padding-top: 1em;\r\n  padding-bottom: 1.2em;\r\n}\r\n\r\n.viewAllProductsLink a{\r\n    color:white; /*Boostrap override*/\r\n  }\r\n\r\n@media only screen and (min-width:768px) and (max-width:992px) {\r\n    .productSvgAndHeader {\r\n    height: 302px; /*at this view point 'Panel Products' and 'Timber Products' are taller than 'Insulation' and 'Joists' because they have two words. This makes them all the same height*/\r\n  }\r\n}\r\n\r\nsvg {\r\n  width: 100%;\r\n}\r\n\r\n.productSvg {\r\n  padding-top: 1.5em;\r\n  fill: #fff;\r\n}\r\n\r\n.st0 {\r\n  fill: none;\r\n  stroke: white;\r\n  stroke-miterlimit: 10;\r\n}\r\n\r\n.productHeading {\r\n  padding: .5em;\r\n  font-size:1.4em;\r\n  letter-spacing:1px;\r\n}\r\n\r\n.serivceDescription {\r\n  /* padding: 1.4em; only add this if description is being used*/\r\n}\r\n\r\n/*seting svg to 100% allows us to center SVG. Without it the browser gives it about 150% width (i.e. wider than its div). Not sure why. Can't find any svg settings in any CSS stylesheets*/\r\n\r\n#viewAllProductsLink {\r\n  font-size: 1.2em;\r\n  text-align: center;\r\n  background-color: #499933;\r\n  color:white;\r\n  padding-top: 1em;\r\n  padding-bottom: 1em;\r\n  margin-left:15px;\r\n  margin-right:15px;\r\n}\r\n\r\n.productSvgAndHeader a {\r\n  font-size: 1.2em;\r\n  color: white;\r\n}\r\n\r\n#associations {\r\n  padding-top: 1em;\r\n  padding-bottom: 1em;\r\n  /*border-top: 1px solid gainsboro;*/\r\n  background-color: white;\r\n}\r\n\r\n#sustainabilityIntro {\r\n  padding-top: 2em;\r\n  padding-bottom: 2em;\r\n}\r\n\r\n#sustainabilityIntroTextCol {\r\n  padding : 10px;\r\n  color: #002766;\r\n}\r\n\r\n#pefc-logo {\r\n  width:80%;/*temp code - remove space around FSC image to make 2 images same width on mobiles*/\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#fsc-logo-caption {\r\n  font-size: .8em;\r\n  color: #285C4D;\r\n}\r\n\r\n#fsc-logo-caption p {\r\n    line-height: 5px;\r\n  }\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxzQkFBc0I7RUFDdEIsY0FBYzs7QUFFaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVFO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGFBQWE7RUFDZjs7QUFFRjtFQUNFLHdHQUF3RztFQUN4RyxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsd0hBQXdIO0FBQzFIOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBHQUEwRztFQUMxRyxnQkFBZ0I7O0FBRWxCOztBQUVFO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVGO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUEsMENBQTBDLGlIQUFpSDtFQUN6SixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztDQWlCQzs7QUFFRCxHQUFHOztBQUNIO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUEsOEJBQThCOztBQUc5QjtFQUNFLDRCQUE0QjtFQUM1QixvQkFBb0I7QUFDdEI7O0FBR0EsZ0JBQWdCOztBQUNoQjtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7O0FBRUE7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUU7SUFDRSxXQUFXLEVBQUUsb0JBQW9CO0VBQ25DOztBQUdBO0lBQ0U7SUFDQSxhQUFhLEVBQUUsdUtBQXVLO0VBQ3hMO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhEQUE4RDtBQUNoRTs7QUFFQSwyTEFBMkw7O0FBRzNMO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyx1QkFBdUI7QUFDekI7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBR0E7RUFDRSxTQUFTLENBQUMsbUZBQW1GO0VBQzdGLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUU7SUFDRSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFydGljbGU6bnRoLWNoaWxkKGV2ZW4pIHtcclxufVxyXG5cclxuI3dlbGNvbWVJbnRyb2R1Y3Rpb24ge1xyXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI2VmZjJmNTsgbmljZSBibHVlLWdyYXkqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6ICMwMDI3NjY7XHJcblxyXG59XHJcblxyXG4jaW1wb3J0YW50TWVzc2FnZUhlYWRlciB7XHJcbiAgY29sb3I6ICNmY2QzMDM7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxufVxyXG5cclxuI2ltcG9ydGFudE1lc3NhZ2VEYXRlIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuI2ltcG9ydGFudE1lc3NhZ2VDb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDRkNTQ7XHJcbiAgY29sb3I6ICNlNmYyZmY7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxufVxyXG5cclxuICAjaW1wb3J0YW50TWVzc2FnZUNvbnRhaW5lciBhIHtcclxuICAgIGNvbG9yOiAjZTZmMmZmO1xyXG4gIH1cclxuXHJcbiAgI2ltcG9ydGFudFRleHRCb3gge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM3M0FEMjE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiN3ZWxjb21lVGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IHNlZ29lLXVpLCBGcnV0aWdlciwgXCJGcnV0aWdlciBMaW5vdHlwZVwiLCBcIkRlamF2dSBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxuI3dlbGNvbWVUZXh0SGVhZGVyIHtcclxuICBmb250LXNpemU6IDQ1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IHNlZ29lLXVpLWxpZ2h0LCBzZWdvZS11aSwgRnJ1dGlnZXIsIFwiRnJ1dGlnZXIgTGlub3R5cGVcIiwgXCJEZWphdnUgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jd2VsY29tZVRleHRCb2R5IHtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIEZydXRpZ2VyLCBcIkZydXRpZ2VyIExpbm90eXBlXCIsIFwiRGVqYXZ1IFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG5cclxufVxyXG5cclxuICAjd2VsY29tZVRleHRCb2R5IHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiNjb21wYW55U2VsbGluZ1BvaW50cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MzY1YjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5zZWxsaW5nUG9pbnQge1xyXG4gIHBhZGRpbmc6N3B4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NTc2cHgpIGFuZCAobWF4LXdpZHRoOjY2MHB4KSB7XHJcbiAgI2NvbXBhbnlTZWxsaW5nUG9pbnRzIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgfVxyXG59XHJcblxyXG5mYS1jaGVjayAjY29tcGFueVNlbGxpbmdQb2ludHMgY2xyLWljb24geyAvKmRpZG4ndCByZWZlcmVuY2UgYnkgc2hhcGUvdGljayBoYXMgdGhlIGh0bWwgc2hhcGUgYXR0cmlidXRlIGlzbid0IHN1cHBvcnRlZCBhdCB0aW1lIG9mIHdyaXRpbmcgYnkgSUUgb3IgQ2hyb21lKi9cclxuICB3aWR0aDogMTJweDtcclxuICBoZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi8qXHJcbiAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgLjUpLCByZ2JhKDAsIDAsIDAsIC41KSk7XHJcbiAgICBmb250LWZhbWlseTogJ0NlbnR1cnkgR290aGljJywgTXVsaSwgJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgdG9wOiAtNTc1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIC41KSwgcmdiYSgwLCAwLCAwLCAuNSkpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiovXHJcblxyXG4vKiovXHJcbm5nYi1jYXJvdXNlbCB7XHJcbiAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG4vKiAtLS0tIFBST0RVQ1QgSUNPTlMgLS0tLS0tICovXHJcblxyXG5cclxuI3Byb2R1Y3RJY29uc0FuZFRpdGxlQ29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG5cclxuLypQcm9kdWN0IEljb25zKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjU3NnB4KSB7XHJcbiAgI3Byb2R1Y3RJY29uc0FuZFRpdGxlQ29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuI3Byb2R1Y3RJY29uc1JvdyB7XHJcblxyXG59XHJcblxyXG5cclxuLnByb2R1Y3RTdmdBbmRIZWFkZXIsIC52aWV3QWxsUHJvZHVjdHNMaW5rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk5OTMzO1xyXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogIzZlN2I5MTsqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAxLjFlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjFlbTtcclxuICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjJlbTtcclxufVxyXG5cclxuICAudmlld0FsbFByb2R1Y3RzTGluayBhe1xyXG4gICAgY29sb3I6d2hpdGU7IC8qQm9vc3RyYXAgb3ZlcnJpZGUqL1xyXG4gIH1cclxuXHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCkgYW5kIChtYXgtd2lkdGg6OTkycHgpIHtcclxuICAgIC5wcm9kdWN0U3ZnQW5kSGVhZGVyIHtcclxuICAgIGhlaWdodDogMzAycHg7IC8qYXQgdGhpcyB2aWV3IHBvaW50ICdQYW5lbCBQcm9kdWN0cycgYW5kICdUaW1iZXIgUHJvZHVjdHMnIGFyZSB0YWxsZXIgdGhhbiAnSW5zdWxhdGlvbicgYW5kICdKb2lzdHMnIGJlY2F1c2UgdGhleSBoYXZlIHR3byB3b3Jkcy4gVGhpcyBtYWtlcyB0aGVtIGFsbCB0aGUgc2FtZSBoZWlnaHQqL1xyXG4gIH1cclxufVxyXG5zdmcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZHVjdFN2ZyB7XHJcbiAgcGFkZGluZy10b3A6IDEuNWVtO1xyXG4gIGZpbGw6ICNmZmY7XHJcbn1cclxuXHJcbi5zdDAge1xyXG4gIGZpbGw6IG5vbmU7XHJcbiAgc3Ryb2tlOiB3aGl0ZTtcclxuICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XHJcbn1cclxuXHJcbi5wcm9kdWN0SGVhZGluZyB7XHJcbiAgcGFkZGluZzogLjVlbTtcclxuICBmb250LXNpemU6MS40ZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6MXB4O1xyXG59XHJcblxyXG4uc2VyaXZjZURlc2NyaXB0aW9uIHtcclxuICAvKiBwYWRkaW5nOiAxLjRlbTsgb25seSBhZGQgdGhpcyBpZiBkZXNjcmlwdGlvbiBpcyBiZWluZyB1c2VkKi9cclxufVxyXG5cclxuLypzZXRpbmcgc3ZnIHRvIDEwMCUgYWxsb3dzIHVzIHRvIGNlbnRlciBTVkcuIFdpdGhvdXQgaXQgdGhlIGJyb3dzZXIgZ2l2ZXMgaXQgYWJvdXQgMTUwJSB3aWR0aCAoaS5lLiB3aWRlciB0aGFuIGl0cyBkaXYpLiBOb3Qgc3VyZSB3aHkuIENhbid0IGZpbmQgYW55IHN2ZyBzZXR0aW5ncyBpbiBhbnkgQ1NTIHN0eWxlc2hlZXRzKi9cclxuXHJcblxyXG4jdmlld0FsbFByb2R1Y3RzTGluayB7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5OTkzMztcclxuICBjb2xvcjp3aGl0ZTtcclxuICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbiAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICBtYXJnaW4tcmlnaHQ6MTVweDtcclxufVxyXG5cclxuLnByb2R1Y3RTdmdBbmRIZWFkZXIgYSB7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNhc3NvY2lhdGlvbnMge1xyXG4gIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcclxuICAvKmJvcmRlci10b3A6IDFweCBzb2xpZCBnYWluc2Jvcm87Ki9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbiNzdXN0YWluYWJpbGl0eUludHJvIHtcclxuICBwYWRkaW5nLXRvcDogMmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbiNzdXN0YWluYWJpbGl0eUludHJvVGV4dENvbCB7XHJcbiAgcGFkZGluZyA6IDEwcHg7XHJcbiAgY29sb3I6ICMwMDI3NjY7XHJcbn1cclxuXHJcblxyXG4jcGVmYy1sb2dvIHtcclxuICB3aWR0aDo4MCU7Lyp0ZW1wIGNvZGUgLSByZW1vdmUgc3BhY2UgYXJvdW5kIEZTQyBpbWFnZSB0byBtYWtlIDIgaW1hZ2VzIHNhbWUgd2lkdGggb24gbW9iaWxlcyovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jZnNjLWxvZ28tY2FwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAuOGVtO1xyXG4gIGNvbG9yOiAjMjg1QzREO1xyXG59XHJcblxyXG4gICNmc2MtbG9nby1jYXB0aW9uIHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDVweDtcclxuICB9XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/home/welcome.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/welcome.component.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var google_analytics_service_1 = __webpack_require__(/*! ../analytics/google-analytics.service */ "./src/app/analytics/google-analytics.service.ts");
/*
import '@clr/icons';
import '@clr/icons/shapes/core-shapes';
import '@clr/icons/shapes/essential-shapes';
import '@clr/icons/shapes/technology-shapes';
*/
var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(googleAnalyticsService) {
        this.googleAnalyticsService = googleAnalyticsService;
        this.pageTitle = 'Welcome';
    }
    WelcomeComponent.prototype.userClicksProductsLinkEvent = function () {
        this
            .googleAnalyticsService
            .eventEmitter("add_to_cart", "shop", "cart", "click", 10);
    };
    WelcomeComponent.ctorParameters = function () { return [
        { type: google_analytics_service_1.GoogleAnalyticsService }
    ]; };
    WelcomeComponent = __decorate([
        core_1.Component({
            template: __importDefault(__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/welcome.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./welcome.component.css */ "./src/app/home/welcome.component.css")).default]
        }),
        __metadata("design:paramtypes", [google_analytics_service_1.GoogleAnalyticsService])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;


/***/ }),

/***/ "./src/app/policies/cookies-policy/cookies-policy.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/policies/cookies-policy/cookies-policy.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvbGljaWVzL2Nvb2tpZXMtcG9saWN5L2Nvb2tpZXMtcG9saWN5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/policies/cookies-policy/cookies-policy.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/policies/cookies-policy/cookies-policy.component.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var CookiesPolicyComponent = /** @class */ (function () {
    function CookiesPolicyComponent() {
    }
    CookiesPolicyComponent.prototype.ngOnInit = function () {
    };
    CookiesPolicyComponent = __decorate([
        core_1.Component({
            selector: 'app-cookies-policy',
            template: __importDefault(__webpack_require__(/*! raw-loader!./cookies-policy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/policies/cookies-policy/cookies-policy.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./cookies-policy.component.css */ "./src/app/policies/cookies-policy/cookies-policy.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], CookiesPolicyComponent);
    return CookiesPolicyComponent;
}());
exports.CookiesPolicyComponent = CookiesPolicyComponent;


/***/ }),

/***/ "./src/app/privacy-statement/privacy-statement.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/privacy-statement/privacy-statement.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1, h2, h3, h4 {\r\n  padding-top: 25px;\r\n}\r\n\r\nh3 {\r\n  padding-top: 20px;\r\n  padding-bottom: 15px;\r\n  font-size: 22px;\r\n}\r\n\r\nh4 {\r\n  padding-bottom:5px;\r\n}\r\n\r\nh2 {\r\n  font-size: 32px;\r\n}\r\n\r\nli{\r\n  list-style-type: square;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmFjeS1zdGF0ZW1lbnQvcHJpdmFjeS1zdGF0ZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9wcml2YWN5LXN0YXRlbWVudC9wcml2YWN5LXN0YXRlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEsIGgyLCBoMywgaDQge1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG5cclxuaDQge1xyXG4gIHBhZGRpbmctYm90dG9tOjVweDtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG5cclxubGl7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/privacy-statement/privacy-statement.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/privacy-statement/privacy-statement.component.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacyPolicyComponent = __decorate([
        core_1.Component({
            selector: 'app-privacy-policy',
            template: __importDefault(__webpack_require__(/*! raw-loader!./privacy-statement.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/privacy-statement/privacy-statement.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./privacy-statement.component.css */ "./src/app/privacy-statement/privacy-statement.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());
exports.PrivacyPolicyComponent = PrivacyPolicyComponent;


/***/ }),

/***/ "./src/app/products/product-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/products/product-detail.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n.productDetailsPage {\r\n  padding-top: 15px;\r\n\r\n}\r\n\r\n@media only screen and (min-width:768px){\r\n  .productDetailsPage {\r\n    margin-left: 15px;\r\n  }\r\n}\r\n\r\n.productImageTextBox{\r\n  padding: 10px; background-color: white;\r\n\r\n}\r\n\r\n.productName {\r\n  color: #3b5998;\r\n  font-size: 1.4em;\r\n  font-weight: 600;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.productDetails {\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n  background-color: white;\r\n}\r\n\r\n.productDetailsHeading {\r\n  padding-top: .8em;\r\n  font-weight: 600;\r\n  font-size: 1.2em;\r\n  color: #006747;\r\n  /*color: #6e7b91;*/\r\n}\r\n\r\n.productDetailsText {\r\n  border-top: 1px solid #C2CEDA;\r\n  padding-top: .8em;\r\n  padding-bottom: .5em;\r\n  color: #444d54;\r\n}\r\n\r\n.productDetailsTextParagraph{\r\n  padding-bottom:.5em;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtFQUNFLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUlBO0VBQ0UsYUFBYSxFQUFFLHVCQUF1Qjs7QUFFeEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5wcm9kdWN0RGV0YWlsc1BhZ2Uge1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KXtcclxuICAucHJvZHVjdERldGFpbHNQYWdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4ucHJvZHVjdEltYWdlVGV4dEJveHtcclxuICBwYWRkaW5nOiAxMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5wcm9kdWN0TmFtZSB7XHJcbiAgY29sb3I6ICMzYjU5OTg7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLnByb2R1Y3REZXRhaWxzIHtcclxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4ucHJvZHVjdERldGFpbHNIZWFkaW5nIHtcclxuICBwYWRkaW5nLXRvcDogLjhlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgY29sb3I6ICMwMDY3NDc7XHJcbiAgLypjb2xvcjogIzZlN2I5MTsqL1xyXG59XHJcblxyXG4ucHJvZHVjdERldGFpbHNUZXh0IHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0MyQ0VEQTtcclxuICBwYWRkaW5nLXRvcDogLjhlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogLjVlbTtcclxuICBjb2xvcjogIzQ0NGQ1NDtcclxufVxyXG5cclxuLnByb2R1Y3REZXRhaWxzVGV4dFBhcmFncmFwaHtcclxuICBwYWRkaW5nLWJvdHRvbTouNWVtO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/products/product-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/products/product-detail.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var product_service_1 = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(_route, _router, _productService) {
        this._route = _route;
        this._router = _router;
        this._productService = _productService;
        this.pageTitle = 'Product Detail';
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var param = this._route.snapshot.paramMap.get('id');
        if (param) {
            var id = +param;
            this.getProduct(id);
        }
    };
    ProductDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        this._productService.getProduct(id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    ProductDetailComponent.ctorParameters = function () { return [
        { type: router_1.ActivatedRoute },
        { type: router_1.Router },
        { type: product_service_1.ProductService }
    ]; };
    ProductDetailComponent = __decorate([
        core_1.Component({
            template: __importDefault(__webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-detail.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./product-detail.component.css */ "./src/app/products/product-detail.component.css")).default]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            product_service_1.ProductService])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;


/***/ }),

/***/ "./src/app/products/product-filter.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/products/product-filter.pipe.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="product.interface.ts" />
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ProductFilterPipe = /** @class */ (function () {
    function ProductFilterPipe() {
    }
    //method:
    ProductFilterPipe.prototype.transform = function (value, filterBy) {
        //take IProduct array, filter it by a string, and then return a new array of IProduct
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        //JS Conditional operator to handle the possible that no filter string was defined.
        //if there is a filter by, this code converts it to lower case.
        //If there is no filter by, then set filter by to null
        return filterBy ? value.filter(function (product) {
            //return filtered list of products
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        }) : value;
    };
    ProductFilterPipe = __decorate([
        core_1.Pipe({
            name: 'productFilter'
        })
    ], ProductFilterPipe);
    return ProductFilterPipe;
}());
exports.ProductFilterPipe = ProductFilterPipe;


/***/ }),

/***/ "./src/app/products/product-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/products/product-guard.service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ProductGuardService = /** @class */ (function () {
    function ProductGuardService(_router) {
        this._router = _router;
    }
    ProductGuardService.prototype.canActivate = function (route) {
        var id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid product Id');
            this._router.navigate(['/products']);
            return false;
        }
        return true;
    };
    ProductGuardService.ctorParameters = function () { return [
        { type: router_1.Router }
    ]; };
    ProductGuardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], ProductGuardService);
    return ProductGuardService;
}());
exports.ProductGuardService = ProductGuardService;


/***/ }),

/***/ "./src/app/products/product-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/products/product-list.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var product_service_1 = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(_productService) {
        this._productService = _productService;
        this.pageTitle = 'Product List';
        this.showImage = true;
        this.products = [];
    }
    Object.defineProperty(ProductListComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        /*When the data binding needs the value, it will call the getter and get the value.
    
        Every time the user modifies the value, the data binding calls the setter,
        passing in the changed value. If we want to perform some logic every time the value is changed,
        we can add it here in the setter.
    
       */
        set: function (value) {
            this._listFilter = value;
            //We want to set our filter products array to the filtered list of products like this.
            this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
            /*
            Here we are using the JavaScript conditional operator to handle
            the possibility that the listFilter string is empty, null, or undefined.
            this.listFilter ? this.performFilter(this.listFilter) : this.products;
            i.e.,
    
            this.performFilter
            (See function below)
    
            this.listFilter
            If there is a listFilter value,
    
            this.performFilter(this.listFilter)
            this code filters on that value.
    
            this.products
            If the listFilter is not set, the filtered products property is assigned to the entire set of products.
            So, if there is no filter, we should display all of the products.
            */
        },
        enumerable: true,
        configurable: true
    });
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product List: ' + message;
    };
    ProductListComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        //This code starts by converting the filter criteria to lowercase.
        //Why? So we can compare apples to apples when we filter the product list.
        //We want a case insensitive comparison.
        // Then we return the filtered list of products:
        return this.products.filter(function (product) {
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    /*
    this.products.filter
    We are using the array filter method to create a new array with elements that pass the
    test defined in the provided function.

    (product: IProduct) =>
    We use the ES 2015 arrow syntax to define that filter function.
    For each product in the list, the product name is converted to lowercase and
    indexOf is used to determine if the filter text is found in the product name.
    If so, the element is added to the filtered list.

    See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


    
    

    Our last step then is to change our template to bind to our filteredProducts property instead of the products property. Now let's give it a try.
    Our default filter is cart. So now we only see the garden cart.

    */
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (products) {
            _this.products = products;
            _this.filteredProducts = _this.products;
        }, function (error) { return _this.errorMessage = error; });
    };
    /* Set the width of the side navigation to 250px */
    ProductListComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
    };
    /* Set the width of the side navigation to 0 */
    ProductListComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
    };
    ProductListComponent.ctorParameters = function () { return [
        { type: product_service_1.ProductService }
    ]; };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'app-product-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ../contentful/products/contentful-category-list/contentful-category-list.component.css */ "./src/app/contentful/products/contentful-category-list/contentful-category-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;


/***/ }),

/***/ "./src/app/products/product-list/product-list-filtered-by-category.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/products/product-list/product-list-filtered-by-category.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QtZmlsdGVyZWQtYnktY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/products/product-list/product-list-filtered-by-category.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/products/product-list/product-list-filtered-by-category.component.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ProductListFilteredByCategoryComponent = /** @class */ (function () {
    function ProductListFilteredByCategoryComponent(_route) {
        this._route = _route;
        console.log(this._route.snapshot.paramMap.get('category2'));
    }
    ProductListFilteredByCategoryComponent.prototype.ngOnInit = function () {
    };
    ProductListFilteredByCategoryComponent.ctorParameters = function () { return [
        { type: router_1.ActivatedRoute }
    ]; };
    ProductListFilteredByCategoryComponent = __decorate([
        core_1.Component({
            selector: 'app-product-list-filtered-by-category',
            template: __importDefault(__webpack_require__(/*! raw-loader!./product-list-filtered-by-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-list/product-list-filtered-by-category.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./product-list-filtered-by-category.component.css */ "./src/app/products/product-list/product-list-filtered-by-category.component.css")).default]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], ProductListFilteredByCategoryComponent);
    return ProductListFilteredByCategoryComponent;
}());
exports.ProductListFilteredByCategoryComponent = ProductListFilteredByCategoryComponent;


/***/ }),

/***/ "./src/app/products/product-menu.component.css":
/*!*****************************************************!*\
  !*** ./src/app/products/product-menu.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*--------Vertical (left hand side) Menu -----------*/\r\na:visited {\r\n \r\n}\r\n.verticalMenu {\r\n  background-color: #fafcff;\r\n}\r\n.menu {\r\n  \r\n}\r\n.productCategory {\r\n  /*border-bottom: 1px solid #d3d9e2;*/\r\n}\r\n.menuLevel1 {\r\n  padding-top: .4em;\r\n  padding-left: .6em;\r\n  padding-bottom: .4em;\r\n  font-size: 1.2em;\r\n  color: white;\r\n  letter-spacing: 2px;\r\n  background-color: #499933;\r\n  /*background-color: #d9dbdd; light grey\r\n  background-color: #747a84;\r\n  /*color: #6e7b91;*/\r\n}\r\n.menuLevel2 {\r\n  font-size: 1.1em;\r\n  margin-left: 1em;\r\n  padding-top: .4em;\r\n  font-weight: 500;\r\n}\r\n.menuLevel3 {\r\n  margin-left: 2em;\r\n  font-size:1em;\r\n}\r\n.product {\r\n  padding-bottom: .4em;\r\n}\r\n#softwood { /*Change this to child elements */\r\n  border-top: .5px solid lightgrey;\r\n  border-bottom: .5px solid lightgrey;\r\n}\r\n#productsCol {\r\n\r\n  line-height: 1.15px; /*if this is not added Bootstrap will make it 1.5*/\r\n}\r\n/*-------/Vertical (left hand side) Menu -----------*/\r\n#mySidenav{\r\n\r\n}\r\n@media only screen and (max-width:767px) {\r\n  .customSideNav {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #111;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n  }\r\n\r\n    .customSideNav a {\r\n      padding: 8px 8px 8px 32px;\r\n      text-decoration: none;\r\n      font-size: 1.1em;\r\n      color: #818181;\r\n      display: block;\r\n      transition: 0.3s;\r\n    }\r\n\r\n    .customSideNav .mySidenavHeaderDiv {\r\n      padding-left: 10px;\r\n      color: white;\r\n      font-size: 1.7em;\r\n    }\r\n    /* Position and style the close button (top right corner) */\r\n    .customSideNav .closebtn {\r\n      position: absolute;\r\n      top: .5%;\r\n      right: 25px;\r\n      margin-left: 50px;\r\n      color: white;\r\n      background-color: #111;\r\n      border: none;\r\n    }\r\n}\r\n@media only screen and (min-width:768px) {\r\n  .mySidenavHeaderDiv {\r\n    display: none;\r\n  }\r\n}\r\n.fa-times-thin:before {\r\n  content: '\\00d7';\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscURBQXFEO0FBQ3JEOztBQUVBO0FBR0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFHQTs7QUFFQTtBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekI7O29CQUVrQjtBQUNwQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBSUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQSxZQUFZLGlDQUFpQztFQUMzQyxnQ0FBZ0M7RUFDaEMsbUNBQW1DO0FBQ3JDO0FBR0E7O0VBRUUsbUJBQW1CLEVBQUUsa0RBQWtEO0FBQ3pFO0FBRUEscURBQXFEO0FBQ3JEOztBQUVBO0FBR0E7RUFDRTtJQUNFLFlBQVk7SUFDWixRQUFRO0lBQ1IsZUFBZTtJQUNmLFVBQVU7SUFDVixNQUFNO0lBQ04sT0FBTztJQUNQLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7SUFFRTtNQUNFLHlCQUF5QjtNQUN6QixxQkFBcUI7TUFDckIsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxjQUFjO01BQ2QsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0Usa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixnQkFBZ0I7SUFDbEI7SUFDQSwyREFBMkQ7SUFDM0Q7TUFDRSxrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIsWUFBWTtNQUNaLHNCQUFzQjtNQUN0QixZQUFZO0lBQ2Q7QUFDSjtBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tVmVydGljYWwgKGxlZnQgaGFuZCBzaWRlKSBNZW51IC0tLS0tLS0tLS0tKi9cclxuYTp2aXNpdGVkIHtcclxuIFxyXG59XHJcblxyXG5cclxuLnZlcnRpY2FsTWVudSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmNmZjtcclxufVxyXG5cclxuXHJcbi5tZW51IHtcclxuICBcclxufVxyXG5cclxuLnByb2R1Y3RDYXRlZ29yeSB7XHJcbiAgLypib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDllMjsqL1xyXG59XHJcblxyXG5cclxuLm1lbnVMZXZlbDEge1xyXG4gIHBhZGRpbmctdG9wOiAuNGVtO1xyXG4gIHBhZGRpbmctbGVmdDogLjZlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogLjRlbTtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTk5MzM7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkYmRkOyBsaWdodCBncmV5XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0N2E4NDtcclxuICAvKmNvbG9yOiAjNmU3YjkxOyovXHJcbn1cclxuXHJcbi5tZW51TGV2ZWwyIHtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgcGFkZGluZy10b3A6IC40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLm1lbnVMZXZlbDMge1xyXG4gIG1hcmdpbi1sZWZ0OiAyZW07XHJcbiAgZm9udC1zaXplOjFlbTtcclxufVxyXG5cclxuXHJcblxyXG4ucHJvZHVjdCB7XHJcbiAgcGFkZGluZy1ib3R0b206IC40ZW07XHJcbn1cclxuXHJcbiNzb2Z0d29vZCB7IC8qQ2hhbmdlIHRoaXMgdG8gY2hpbGQgZWxlbWVudHMgKi9cclxuICBib3JkZXItdG9wOiAuNXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItYm90dG9tOiAuNXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxufVxyXG5cclxuXHJcbiNwcm9kdWN0c0NvbCB7XHJcblxyXG4gIGxpbmUtaGVpZ2h0OiAxLjE1cHg7IC8qaWYgdGhpcyBpcyBub3QgYWRkZWQgQm9vdHN0cmFwIHdpbGwgbWFrZSBpdCAxLjUqL1xyXG59XHJcblxyXG4vKi0tLS0tLS0vVmVydGljYWwgKGxlZnQgaGFuZCBzaWRlKSBNZW51IC0tLS0tLS0tLS0tKi9cclxuI215U2lkZW5hdntcclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAuY3VzdG9tU2lkZU5hdiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICB9XHJcblxyXG4gICAgLmN1c3RvbVNpZGVOYXYgYSB7XHJcbiAgICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgICAgY29sb3I6ICM4MTgxODE7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b21TaWRlTmF2IC5teVNpZGVuYXZIZWFkZXJEaXYge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC1zaXplOiAxLjdlbTtcclxuICAgIH1cclxuICAgIC8qIFBvc2l0aW9uIGFuZCBzdHlsZSB0aGUgY2xvc2UgYnV0dG9uICh0b3AgcmlnaHQgY29ybmVyKSAqL1xyXG4gICAgLmN1c3RvbVNpZGVOYXYgLmNsb3NlYnRuIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IC41JTtcclxuICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgLm15U2lkZW5hdkhlYWRlckRpdiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmZhLXRpbWVzLXRoaW46YmVmb3JlIHtcclxuICBjb250ZW50OiAnXFwwMGQ3JztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/products/product-menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/products/product-menu.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ProductMenuComponent = /** @class */ (function () {
    function ProductMenuComponent() {
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
    }
    ProductMenuComponent.prototype.ngOnInit = function () {
    };
    /* Set the width of the side navigation to 250px */
    ProductMenuComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
    };
    /* Set the width of the side navigation to 0 */
    ProductMenuComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
    };
    ProductMenuComponent.prototype.recordClickedLink = function () {
        console.log("hello, linked clicked");
    };
    ;
    ProductMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-product-menu',
            template: __importDefault(__webpack_require__(/*! raw-loader!./product-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-menu.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./product-menu.component.css */ "./src/app/products/product-menu.component.css")).default]
        })
    ], ProductMenuComponent);
    return ProductMenuComponent;
}());
exports.ProductMenuComponent = ProductMenuComponent;


/***/ }),

/***/ "./src/app/products/product.module.ts":
/*!********************************************!*\
  !*** ./src/app/products/product.module.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var product_list_component_1 = __webpack_require__(/*! ./product-list.component */ "./src/app/products/product-list.component.ts");
var product_detail_component_1 = __webpack_require__(/*! ./product-detail.component */ "./src/app/products/product-detail.component.ts");
var convert_to_spaces_pipe_1 = __webpack_require__(/*! ../shared/convert-to-spaces.pipe */ "./src/app/shared/convert-to-spaces.pipe.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var product_guard_service_1 = __webpack_require__(/*! ./product-guard.service */ "./src/app/products/product-guard.service.ts");
var product_service_1 = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");
var shared_module_1 = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
//bw code:
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                /*{ path: 'products', component: ProductListComponent, data: { title: 'Products - Wood Concepts' } },
                {
                  path: 'products/:id',
                  canActivate: [ProductGuardService],
                  component: ProductDetailComponent,
                  data: { title: 'Product Detail' }
                },
                Overwritten by Contenful*/
                ]),
                shared_module_1.SharedModule
            ],
            declarations: [
                product_list_component_1.ProductListComponent,
                product_detail_component_1.ProductDetailComponent,
                convert_to_spaces_pipe_1.ConvertToSpacesPipe
            ],
            providers: [
                product_service_1.ProductService,
                product_guard_service_1.ProductGuardService
            ]
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;


/***/ }),

/***/ "./src/app/products/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/products/product.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var ProductService = /** @class */ (function () {
    function ProductService(_http) {
        this._http = _http;
        this._productUrl = 'assets/products.json';
    }
    ProductService.prototype.getProducts = function () {
        return this._http.get(this._productUrl).pipe(operators_1.tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), operators_1.catchError(this.handleError));
    };
    ProductService.prototype.getProduct = function (id) {
        return this.getProducts().pipe(operators_1.map(function (products) { return products.find(function (p) { return p.productId === id; }); }));
    };
    ProductService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return rxjs_1.throwError(errorMessage);
    };
    ProductService.ctorParameters = function () { return [
        { type: http_1.HttpClient }
    ]; };
    ProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;


/***/ }),

/***/ "./src/app/shared/convert-to-spaces.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/convert-to-spaces.pipe.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ConvertToSpacesPipe = /** @class */ (function () {
    function ConvertToSpacesPipe() {
    }
    ConvertToSpacesPipe.prototype.transform = function (value, character) {
        return value.replace(character, ' ');
    };
    ConvertToSpacesPipe = __decorate([
        core_1.Pipe({
            name: 'convertToSpaces'
        })
    ], ConvertToSpacesPipe);
    return ConvertToSpacesPipe;
}());
exports.ConvertToSpacesPipe = ConvertToSpacesPipe;


/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n#footer {\r\n  background-color: #444d54;\r\n  color: #e6f2ff;\r\n  padding: 20px;\r\n  font-size: .8em;\r\n}\r\n\r\nng-form serve\r\n\r\n  #footer .productCat1Heading {\r\n    font-size: 1.1em;\r\n    color: #cce5ff;\r\n  }\r\n\r\n#footer ul {\r\n    padding-left: 0;\r\n  }\r\n\r\n#footerAddress {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTs7O0lBR0ksZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxlQUFlO0VBQ2pCOztBQUVGO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuI2Zvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NGQ1NDtcclxuICBjb2xvcjogI2U2ZjJmZjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogLjhlbTtcclxufVxyXG5cclxubmctZm9ybSBzZXJ2ZVxyXG5cclxuICAjZm9vdGVyIC5wcm9kdWN0Q2F0MUhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGNvbG9yOiAjY2NlNWZmO1xyXG4gIH1cclxuXHJcbiAgI2Zvb3RlciB1bCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuI2Zvb3RlckFkZHJlc3Mge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.emailAddress = '&#116;&#109;&#115;&#64;&#116;&#109;' + '&#115;&#46;&#105;&#101';
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var star_component_1 = __webpack_require__(/*! ./star/star.component */ "./src/app/shared/star/star.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                star_component_1.StarComponent,
            ],
            exports: [
                star_component_1.StarComponent,
                common_1.CommonModule,
                forms_1.FormsModule
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ "./src/app/shared/star/star.component.css":
/*!************************************************!*\
  !*** ./src/app/shared/star/star.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".crop {\r\n    overflow: hidden;\r\n}\r\ndiv {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0YXIvc3Rhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3N0YXIvc3Rhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyb3Age1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5kaXYge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/shared/star/star.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/star/star.component.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var StarComponent = /** @class */ (function () {
    function StarComponent() {
        this.ratingClicked = new core_1.EventEmitter();
    }
    StarComponent.prototype.ngOnChanges = function () {
        this.starWidth = this.rating * 86 / 5;
    };
    StarComponent.prototype.onClick = function () {
        this.ratingClicked.emit("The rating " + this.rating + " was clicked!");
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], StarComponent.prototype, "rating", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], StarComponent.prototype, "ratingClicked", void 0);
    StarComponent = __decorate([
        core_1.Component({
            selector: 'pm-star',
            template: __importDefault(__webpack_require__(/*! raw-loader!./star.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/star/star.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./star.component.css */ "./src/app/shared/star/star.component.css")).default]
        })
    ], StarComponent);
    return StarComponent;
}());
exports.StarComponent = StarComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! P:\GitHub Repos\wc-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map