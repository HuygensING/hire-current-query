(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFacetedSearch = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var inserted = {};

module.exports = function (css, options) {
    if (inserted[css]) return;
    inserted[css] = true;
    
    var elem = document.createElement('style');
    elem.setAttribute('type', 'text/css');

    if ('textContent' in elem) {
      elem.textContent = css;
    } else {
      elem.styleSheet.cssText = css;
    }
    
    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};

},{}],2:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var FacetValue = (function (_React$Component) {
	_inherits(FacetValue, _React$Component);

	function FacetValue() {
		_classCallCheck(this, FacetValue);

		_get(Object.getPrototypeOf(FacetValue.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(FacetValue, [{
		key: "renderValue",
		value: function renderValue() {
			if (this.props.range) {
				return Math.floor(this.props.range.lowerLimit * 0.0001) + " - " + Math.floor(this.props.range.upperLimit * 0.0001);
			} else {
				return this.props.labels && this.props.labels[this.props.value] ? this.props.labels[this.props.value] : this.props.value;
			}
		}
	}, {
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"li",
				{
					className: "hire-faceted-search-selected-facet-value",
					onClick: this.props.onSelectFacetValue.bind(this, this.props.facetName, this.props.value, true) },
				this.renderValue()
			);
		}
	}]);

	return FacetValue;
})(_react2["default"].Component);

FacetValue.propTypes = {
	facetName: _react2["default"].PropTypes.string,
	labels: _react2["default"].PropTypes.object,
	onSelectFacetValue: _react2["default"].PropTypes.func,
	range: _react2["default"].PropTypes.object,
	value: _react2["default"].PropTypes.string
};

exports["default"] = FacetValue;
module.exports = exports["default"];

},{"react":"react"}],3:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var _facetValue = _dereq_("./facet-value");

var _facetValue2 = _interopRequireDefault(_facetValue);

var _insertCss = _dereq_("insert-css");

var _insertCss2 = _interopRequireDefault(_insertCss);



var css = Buffer("dWwuaGlyZS1mYWNldGVkLXNlYXJjaC1jdXJyZW50LXF1ZXJ5IHsKCWNvbG9yOiAjODg4OwoJZm9udC1zaXplOiAwLjdlbTsKfQoKdWwuaGlyZS1mYWNldGVkLXNlYXJjaC1jdXJyZW50LXF1ZXJ5ID4gbGkgPiBsYWJlbCwKdWwuaGlyZS1mYWNldGVkLXNlYXJjaC1jdXJyZW50LXF1ZXJ5ID4gbGkgPiBzcGFuLAp1bC5oaXJlLWZhY2V0ZWQtc2VhcmNoLWN1cnJlbnQtcXVlcnkgPiBsaSA+IHVsIHsKCWJveC1zaXppbmc6IGJvcmRlci1ib3g7CglkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Cgl2ZXJ0aWNhbC1hbGlnbjogdG9wOwp9Cgp1bC5oaXJlLWZhY2V0ZWQtc2VhcmNoLWN1cnJlbnQtcXVlcnkgPiBsaSA+IGxhYmVsIHsKCXdpZHRoOiAxNTBweDsKfQoKdWwuaGlyZS1mYWNldGVkLXNlYXJjaC1jdXJyZW50LXF1ZXJ5ID4gbGkgPiB1bCB7Cgl3aWR0aDogY2FsYygxMDAlIC0gMTUwcHgpOwp9Cgp1bC5oaXJlLWZhY2V0ZWQtc2VhcmNoLWN1cnJlbnQtcXVlcnkgbGkuaGlyZS1mYWNldGVkLXNlYXJjaC1zZWxlY3RlZC1mYWNldC12YWx1ZSwKdWwuaGlyZS1mYWNldGVkLXNlYXJjaC1jdXJyZW50LXF1ZXJ5IGxpLnNlYXJjaC10ZXJtIHNwYW4gewoJYmFja2dyb3VuZC1jb2xvcjogI0RERDsKCWJvcmRlci1yYWRpdXM6IDRweDsKCWN1cnNvcjogcG9pbnRlcjsKCWRpc3BsYXk6IGlubGluZS1ibG9jazsKCW1hcmdpbjogMCA0cHggNHB4IDA7CglwYWRkaW5nOiAwIDZweDsKfQoKdWwuaGlyZS1mYWNldGVkLXNlYXJjaC1jdXJyZW50LXF1ZXJ5IGxpLmhpcmUtZmFjZXRlZC1zZWFyY2gtc2VsZWN0ZWQtZmFjZXQtdmFsdWU6YWZ0ZXIsCnVsLmhpcmUtZmFjZXRlZC1zZWFyY2gtY3VycmVudC1xdWVyeSBsaS5zZWFyY2gtdGVybSBzcGFuOmFmdGVyIHsKCWNvbnRlbnQ6ICLinJYiOwoJcGFkZGluZy1sZWZ0OiA4cHg7Cn0=","base64");
(0, _insertCss2["default"])(css, { prepend: true });

var CurrentQuery = (function (_React$Component) {
	_inherits(CurrentQuery, _React$Component);

	function CurrentQuery() {
		_classCallCheck(this, CurrentQuery);

		_get(Object.getPrototypeOf(CurrentQuery.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(CurrentQuery, [{
		key: "toLabel",
		value: function toLabel(name) {
			return this.props.labels.facetTitles.hasOwnProperty(name) ? this.props.labels.facetTitles[name] : name;
		}
	}, {
		key: "onChangeFullTextField",
		value: function onChangeFullTextField(field, value) {
			this.props.onChangeFullTextField(field, value);
		}
	}, {
		key: "render",
		value: function render() {
			var _this = this;

			var query = this.props.queries.last;

			var searchTerm = query.term !== "" ? _react2["default"].createElement(
				"li",
				{ className: "search-term" },
				_react2["default"].createElement(
					"label",
					null,
					this.toLabel("term")
				),
				_react2["default"].createElement(
					"span",
					{ onClick: this.props.onChangeSearchTerm.bind(this, "") },
					query.term
				)
			) : null;

			var extraSearchTerms = query.fullTextSearchParameters && query.fullTextSearchParameters.length ? query.fullTextSearchParameters.map(function (fullTextSearchParameter, i) {
				return _react2["default"].createElement(
					"li",
					{ className: "search-term", key: i },
					_react2["default"].createElement(
						"label",
						null,
						_this.toLabel(fullTextSearchParameter.name)
					),
					_react2["default"].createElement(
						"span",
						{ onClick: _this.onChangeFullTextField.bind(_this, fullTextSearchParameter.name, "") },
						fullTextSearchParameter.term
					)
				);
			}) : null;

			var facets = query.facetValues.map(function (selectedFacet, index) {
				var facetTitle = undefined;
				var filteredFacets = _this.props.results.last.facets.filter(function (facet) {
					return facet.name === selectedFacet.name;
				});

				if (filteredFacets.length) {
					facetTitle = filteredFacets[0].name;
				} else {
					return new Error("CurrentQuery: facet not found!");
				}

				var valueLabels = _this.props.labels.facetValues && _this.props.labels.facetValues[selectedFacet.name] ? _this.props.labels.facetValues[selectedFacet.name] : null;

				var facetValues = selectedFacet.values ? selectedFacet.values.map(function (value, index2) {
					return _react2["default"].createElement(_facetValue2["default"], {
						facetName: selectedFacet.name,
						key: index2,
						onSelectFacetValue: _this.props.onSelectFacetValue,
						labels: valueLabels,
						value: value });
				}) : _react2["default"].createElement(_facetValue2["default"], {
					facetName: selectedFacet.name,
					onSelectFacetValue: _this.props.onSelectFacetValue,
					range: { lowerLimit: selectedFacet.lowerLimit, upperLimit: selectedFacet.upperLimit } });
				return _react2["default"].createElement(
					"li",
					{
						className: "hire-faceted-search-selected-facet",
						key: index },
					_react2["default"].createElement(
						"label",
						null,
						_this.toLabel(facetTitle)
					),
					_react2["default"].createElement(
						"ul",
						null,
						facetValues
					)
				);
			});

			return _react2["default"].createElement(
				"ul",
				{ className: "hire-faceted-search-current-query" },
				searchTerm,
				extraSearchTerms,
				facets
			);
		}
	}]);

	return CurrentQuery;
})(_react2["default"].Component);

CurrentQuery.propTypes = {
	labels: _react2["default"].PropTypes.object,
	onChangeFullTextField: _react2["default"].PropTypes.func,
	onChangeSearchTerm: _react2["default"].PropTypes.func,
	onSelectFacetValue: _react2["default"].PropTypes.func,
	queries: _react2["default"].PropTypes.object,
	results: _react2["default"].PropTypes.object
};

exports["default"] = CurrentQuery;
module.exports = exports["default"];

},{"./facet-value":2,"insert-css":1,"react":"react"}]},{},[3])(3)
});