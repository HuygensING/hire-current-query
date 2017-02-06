"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _facetValue = require("./facet-value");

var _facetValue2 = _interopRequireDefault(_facetValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrentQuery = function (_React$Component) {
	_inherits(CurrentQuery, _React$Component);

	function CurrentQuery() {
		_classCallCheck(this, CurrentQuery);

		return _possibleConstructorReturn(this, (CurrentQuery.__proto__ || Object.getPrototypeOf(CurrentQuery)).apply(this, arguments));
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
			var _this2 = this;

			var query = this.props.queries.last;
			var searchTerm = query.term !== "" ? _react2.default.createElement(
				"li",
				{ className: "search-term" },
				_react2.default.createElement(
					"label",
					null,
					this.toLabel("term")
				),
				_react2.default.createElement(
					"span",
					{ onClick: this.props.onChangeSearchTerm.bind(this, "") },
					query.term
				)
			) : null;

			var extraSearchTerms = query.fullTextSearchParameters && query.fullTextSearchParameters.length ? query.fullTextSearchParameters.map(function (fullTextSearchParameter, i) {
				return _react2.default.createElement(
					"li",
					{ className: "search-term", key: i },
					_react2.default.createElement(
						"label",
						null,
						_this2.toLabel(fullTextSearchParameter.name)
					),
					_react2.default.createElement(
						"span",
						{ onClick: _this2.onChangeFullTextField.bind(_this2, fullTextSearchParameter.name, "") },
						fullTextSearchParameter.term
					)
				);
			}) : null;

			var facets = query.facetValues.map(function (selectedFacet, index) {
				var facetTitle = selectedFacet.name;
				/*				let filteredFacets = (this.props.results.last.facets.filter((facet) =>
    					facet.name === selectedFacet.name
    				));
    
    				if (filteredFacets.length) {
    					facetTitle = filteredFacets[0].name;
    					console.log("CUR_Q", facetTitle);
    				} else {
    					return new Error("CurrentQuery: facet not found!");
    				}
    
    */var valueLabels = _this2.props.labels.facetValues && _this2.props.labels.facetValues[selectedFacet.name] ? _this2.props.labels.facetValues[selectedFacet.name] : null;

				var facetValues = selectedFacet.values ? selectedFacet.values.map(function (value, index2) {
					return _react2.default.createElement(_facetValue2.default, {
						facetName: selectedFacet.name,
						key: index2,
						onSelectFacetValue: _this2.props.onSelectFacetValue,
						labels: valueLabels,
						value: value });
				}) : _react2.default.createElement(_facetValue2.default, {
					facetName: selectedFacet.name,
					onSelectFacetValue: _this2.props.onSelectFacetValue,
					range: { lowerLimit: selectedFacet.lowerLimit, upperLimit: selectedFacet.upperLimit } });
				return _react2.default.createElement(
					"li",
					{
						className: "hire-faceted-search-selected-facet",
						key: index },
					_react2.default.createElement(
						"label",
						null,
						_this2.toLabel(facetTitle)
					),
					_react2.default.createElement(
						"ul",
						null,
						facetValues
					)
				);
			});

			return _react2.default.createElement(
				"ul",
				{ className: "hire-faceted-search-current-query" },
				searchTerm,
				extraSearchTerms,
				facets
			);
		}
	}]);

	return CurrentQuery;
}(_react2.default.Component);

CurrentQuery.propTypes = {
	labels: _react2.default.PropTypes.object,
	onChangeFullTextField: _react2.default.PropTypes.func,
	onChangeSearchTerm: _react2.default.PropTypes.func,
	onSelectFacetValue: _react2.default.PropTypes.func,
	queries: _react2.default.PropTypes.object,
	results: _react2.default.PropTypes.object
};

exports.default = CurrentQuery;