"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/spinner.svg
/* harmony default export */ const spinner = ({"src":"/_next/static/media/spinner.43ecbaf2.svg","height":200,"width":200});
;// CONCATENATED MODULE: ./shared/components/header/Loading.tsx



/* harmony default export */ function Loading() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "Loader",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                width: "150px",
                height: "150px"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: spinner.src,
                width: 150,
                height: 150,
                alt: "Loader"
            })
        })
    });
};

;// CONCATENATED MODULE: ./pages/_app.tsx


// import { useRouter } from 'next/router';


function MyApp({ Component , pageProps , router  }) {
    const [loading, setLoading] = external_react_.useState(true);
    external_react_.useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 2000);
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: loading ? /*#__PURE__*/ jsx_runtime_.jsx(Loading, {}) : /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(900)));
module.exports = __webpack_exports__;

})();