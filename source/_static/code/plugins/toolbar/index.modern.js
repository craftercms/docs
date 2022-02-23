var { createElement } = craftercms.libs.React;
var React = craftercms.libs.React && Object.prototype.hasOwnProperty.call(craftercms.libs.React, 'default') ? craftercms.libs.React['default'] : craftercms.libs.React;
var { Typography } = craftercms.libs.MaterialUI;
var { useIntl } = craftercms.libs.ReactIntl;
var _utils = craftercms.libs.MaterialUI && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI, 'default') ? craftercms.libs.MaterialUI['default'] : craftercms.libs.MaterialUI;
var createEmotion = craftercms.libs.createEmotion && Object.prototype.hasOwnProperty.call(craftercms.libs.createEmotion, 'default') ? craftercms.libs.createEmotion['default'] : craftercms.libs.createEmotion;

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var interopRequireDefault = createCommonjsModule(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var createSvgIcon = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _utils.createSvgIcon;
  }
});
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var reactJsxRuntime_production_min = createCommonjsModule(function (module, exports) {
var g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment");}var m=React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;
});

var jsxRuntime = createCommonjsModule(function (module) {

{
  module.exports = reactJsxRuntime_production_min;
}
});

var AutoAwesome = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSvgIcon = interopRequireDefault(createSvgIcon);



var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, jsxRuntime.jsx)("path", {
  d: "m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"
}), 'AutoAwesome');

exports.default = _default;
});

var AutoAwesomeIcon = /*@__PURE__*/getDefaultExportFromCjs(AutoAwesome);

var ReactComponent = function (_a) {
    var text = _a.text;
    var formatMessage = useIntl().formatMessage;
    return (createElement(Typography, { sx: {
            margin: '.5em',
            padding: '.5em',
            border: '2px solid #000',
            textAlign: 'center'
        } },
        createElement(AutoAwesomeIcon, null),
        "Toolbar",
        text,
        ".",
        ' ',
        formatMessage({
            id: 'myTestTranslation',
            defaultMessage: 'Hello, this is a test translation'
        }),
        "."));
};

var _a = createEmotion({ key: 'nonreactcomponent' }), css = _a.css, flush = _a.flush;
var NonReactComponent = {
    main: function (_a) {
        var craftercms = _a.craftercms, element = _a.element, configuration = _a.configuration;
        var store = craftercms.getStore();
        var className = css({
            margin: '.5em',
            padding: '.5em',
            border: '2px solid #000',
            textAlign: 'center',
            color: configuration.fontColor || 'green'
        });
        var user = store.getState().user.username;
        element.classList.add(className);
        element.innerHTML = "Hello from the non-react world, " + user + ". " + craftercms.getIntl().formatMessage({
            id: 'myTestTranslation',
            defaultMessage: 'Showing the default translation'
        }) + ".";
        return function () {
            // Component destruction logic
            flush();
        };
    }
};

var myTestTranslation = "Hello";
var en = {
	myTestTranslation: myTestTranslation
};

var myTestTranslation$1 = "Hola, esta es una traducción de prueba";
var es = {
	myTestTranslation: myTestTranslation$1
};

// var PluginDescriptor = craftercms.libs.StudioUI && Object.prototype.hasOwnProperty.call(craftercms.libs.StudioUI, 'default') ? craftercms.libs.StudioUI['default'] : craftercms.libs.StudioUI
var plugin /*: PluginDescriptor */ = {
    id: 'org.craftercms.sampleToolbarPlugin',
    name: 'Sample component library',
    description: 'An example plugin of a component library',
    author: 'Roy Art',
    logo: null,
    locales: {
        en: en,
        es: es
    },
    apps: [
        {
            route: '/yada-yada',
            widget: { id: 'org.craftercms.sampleToolbarPlugin.components.reactComponent' }
        }
    ],
    widgets: {
        'org.craftercms.sampleToolbarPlugin.components.reactComponent': ReactComponent,
        'org.craftercms.sampleToolbarPlugin.components.nonReactComponent': NonReactComponent
    },
    scripts: [
        {
            src: 'https://code.jquery.com/jquery-3.5.1.min.js',
            integrity: 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=',
            crossorigin: 'anonymous'
        },
        'script.js'
    ],
    stylesheets: ['index.css'],
    themes: []
};

export default plugin;
export { NonReactComponent, ReactComponent };
