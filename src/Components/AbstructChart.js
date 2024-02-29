var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({__proto__: []} instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
import React, {Component} from 'react';
import {Defs, Line, LinearGradient, Stop, Text} from 'react-native-svg';
export var DEFAULT_X_LABELS_HEIGHT_PERCENTAGE = 0.75;
var AbstractChart = /** @class */ (function (_super) {
  __extends(AbstractChart, _super);
  function AbstractChart() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.calcScaler = function (data) {
      if (_this.props.fromZero && _this.props.fromNumber) {
        return (
          Math.max.apply(Math, __spreadArrays(data, [_this.props.fromNumber])) -
            Math.min.apply(Math, __spreadArrays(data, [0])) || 1
        );
      } else if (_this.props.fromZero) {
        return (
          Math.max.apply(Math, __spreadArrays(data, [0])) -
            Math.min.apply(Math, __spreadArrays(data, [0])) || 1
        );
      } else if (_this.props.fromNumber) {
        return (
          Math.max.apply(Math, __spreadArrays(data, [_this.props.fromNumber])) -
            Math.min.apply(
              Math,
              __spreadArrays(data, [_this.props.fromNumber]),
            ) || 1
        );
      } else {
        return Math.max.apply(Math, data) - Math.min.apply(Math, data) || 1;
      }
    };
    _this.calcBaseHeight = function (data, height) {
      var min = Math.min.apply(Math, data);
      var max = Math.max.apply(Math, data);
      if (min >= 0 && max >= 0) {
        return height;
      } else if (min < 0 && max <= 0) {
        return 0;
      } else if (min < 0 && max > 0) {
        return (height * max) / _this.calcScaler(data);
      }
    };
    _this.calcHeight = function (val, data, height) {
      var max = Math.max.apply(Math, data);
      var min = Math.min.apply(Math, data);
      if (min < 0 && max > 0) {
        return height * (val / _this.calcScaler(data));
      } else if (min >= 0 && max >= 0) {
        return _this.props.fromZero
          ? height * (val / _this.calcScaler(data))
          : height * ((val - min) / _this.calcScaler(data));
      } else if (min < 0 && max <= 0) {
        return _this.props.fromZero
          ? height * (val / _this.calcScaler(data))
          : height * ((val - max) / _this.calcScaler(data));
      }
    };
    _this.renderHorizontalLines = function (config) {
      var count = config.count,
        width = config.width,
        height = config.height,
        paddingTop = config.paddingTop,
        paddingRight = config.paddingRight,
        _a = config.verticalLabelsHeightPercentage,
        verticalLabelsHeightPercentage =
          _a === void 0 ? DEFAULT_X_LABELS_HEIGHT_PERCENTAGE : _a;
      var basePosition = height * verticalLabelsHeightPercentage;
      return __spreadArrays(new Array(count + 1)).map(function (_, i) {
        var y = (basePosition / count) * i + paddingTop;
        return (
          <Line
            key={Math.random()}
            x1={paddingRight}
            y1={y}
            x2={width}
            y2={y}
            {..._this.getPropsForBackgroundLines()}
          />
        );
      });
    };
    _this.renderHorizontalLine = function (config) {
      var width = config.width,
        height = config.height,
        paddingTop = config.paddingTop,
        paddingRight = config.paddingRight,
        _a = config.verticalLabelsHeightPercentage,
        verticalLabelsHeightPercentage =
          _a === void 0 ? DEFAULT_X_LABELS_HEIGHT_PERCENTAGE : _a;
      return (
        <Line
          key={Math.random()}
          x1={paddingRight}
          y1={height * verticalLabelsHeightPercentage + paddingTop}
          x2={width}
          y2={height * verticalLabelsHeightPercentage + paddingTop}
          {..._this.getPropsForBackgroundLines()}
        />
      );
    };
    _this.renderHorizontalLabels = function (config) {
      var count = config.count,
        data = config.data,
        height = config.height,
        paddingTop = config.paddingTop,
        paddingRight = config.paddingRight,
        _a = config.horizontalLabelRotation,
        horizontalLabelRotation = _a === void 0 ? 0 : _a,
        _b = config.decimalPlaces,
        decimalPlaces = _b === void 0 ? 2 : _b,
        _c = config.formatYLabel,
        formatYLabel =
          _c === void 0
            ? function (yLabel) {
                return yLabel;
              }
            : _c,
        _d = config.verticalLabelsHeightPercentage,
        verticalLabelsHeightPercentage =
          _d === void 0 ? DEFAULT_X_LABELS_HEIGHT_PERCENTAGE : _d;
      var _e = _this.props,
        _f = _e.yAxisLabel,
        yAxisLabel = _f === void 0 ? '' : _f,
        _g = _e.yAxisSuffix,
        yAxisSuffix = _g === void 0 ? '' : _g,
        _h = _e.yLabelsOffset,
        yLabelsOffset = _h === void 0 ? 12 : _h;
      return new Array(count === 1 ? 1 : count + 1)
        .fill(1)
        .map(function (_, i) {
          var yLabel = String(i * count);
          if (count === 1) {
            yLabel =
              '' +
              yAxisLabel +
              formatYLabel(data[0].toFixed(decimalPlaces)) +
              yAxisSuffix;
          } else {
            var label = _this.props.fromZero
              ? (_this.calcScaler(data) / count) * i +
                Math.min.apply(Math, __spreadArrays(data, [0]))
              : (_this.calcScaler(data) / count) * i +
                Math.min.apply(Math, data);
            yLabel =
              '' +
              yAxisLabel +
              formatYLabel(label.toFixed(decimalPlaces)) +
              yAxisSuffix;
          }
          var basePosition = height * verticalLabelsHeightPercentage;
          var x = paddingRight - yLabelsOffset;
          var y =
            count === 1 && _this.props.fromZero
              ? paddingTop + 4
              : height * verticalLabelsHeightPercentage -
                (basePosition / count) * i +
                paddingTop;
          return (
            <Text
              rotation={horizontalLabelRotation}
              origin={x + ', ' + y}
              key={Math.random()}
              x={x}
              textAnchor="end"
              y={y}
              {..._this.getPropsForLabels()}
              {..._this.getPropsForHorizontalLabels()}>
              {yLabel}
            </Text>
          );
        });
    };
    _this.renderVerticalLabels = function (_a) {
      var _b = _a.labels,
        labels = _b === void 0 ? [] : _b,
        width = _a.width,
        height = _a.height,
        paddingRight = _a.paddingRight,
        paddingTop = _a.paddingTop,
        _c = _a.horizontalOffset,
        horizontalOffset = _c === void 0 ? 0 : _c,
        _d = _a.stackedBar,
        stackedBar = _d === void 0 ? false : _d,
        _e = _a.verticalLabelRotation,
        verticalLabelRotation = _e === void 0 ? 0 : _e,
        _f = _a.formatXLabel,
        formatXLabel =
          _f === void 0
            ? function (xLabel) {
                return xLabel;
              }
            : _f,
        _g = _a.verticalLabelsHeightPercentage,
        verticalLabelsHeightPercentage =
          _g === void 0 ? DEFAULT_X_LABELS_HEIGHT_PERCENTAGE : _g;
      var _h = _this.props,
        _j = _h.xAxisLabel,
        xAxisLabel = _j === void 0 ? '' : _j,
        _k = _h.xLabelsOffset,
        xLabelsOffset = _k === void 0 ? 0 : _k,
        _l = _h.hidePointsAtIndex,
        hidePointsAtIndex = _l === void 0 ? [] : _l;
      var fontSize = 12;
      var fac = 1;
      if (stackedBar) {
        fac = 0.71;
      }
      return labels.map(function (label, i) {
        if (hidePointsAtIndex.includes(i)) {
          return null;
        }
        var x =
          (((width - paddingRight) / labels.length) * i +
            paddingRight +
            horizontalOffset) *
          fac;
        var y =
          height * verticalLabelsHeightPercentage +
          paddingTop +
          fontSize * 2 +
          xLabelsOffset;
        return (
          <Text
            origin={x + ', ' + y}
            rotation={verticalLabelRotation}
            key={Math.random()}
            x={x}
            y={y}
            textAnchor={verticalLabelRotation === 0 ? 'middle' : 'start'}
            {..._this.getPropsForLabels()}
            {..._this.getPropsForVerticalLabels()}>
            {'' + formatXLabel(label) + xAxisLabel}
          </Text>
        );
      });
    };
    _this.renderVerticalLines = function (_a) {
      var data = _a.data,
        width = _a.width,
        height = _a.height,
        paddingTop = _a.paddingTop,
        paddingRight = _a.paddingRight,
        _b = _a.verticalLabelsHeightPercentage,
        verticalLabelsHeightPercentage =
          _b === void 0 ? DEFAULT_X_LABELS_HEIGHT_PERCENTAGE : _b;
      var _c = _this.props.yAxisInterval,
        yAxisInterval = _c === void 0 ? 1 : _c;
      return __spreadArrays(
        new Array(Math.ceil(data.length / yAxisInterval)),
      ).map(function (_, i) {
        return (
          <Line
            key={Math.random()}
            x1={Math.floor(
              ((width - paddingRight) / (data.length / yAxisInterval)) * i +
                paddingRight,
            )}
            y1={0}
            x2={Math.floor(
              ((width - paddingRight) / (data.length / yAxisInterval)) * i +
                paddingRight,
            )}
            y2={height * verticalLabelsHeightPercentage + paddingTop}
            {..._this.getPropsForBackgroundLines()}
          />
        );
      });
    };
    _this.renderVerticalLine = function (_a) {
      var height = _a.height,
        paddingTop = _a.paddingTop,
        paddingRight = _a.paddingRight,
        _b = _a.verticalLabelsHeightPercentage,
        verticalLabelsHeightPercentage =
          _b === void 0 ? DEFAULT_X_LABELS_HEIGHT_PERCENTAGE : _b;
      return (
        <Line
          key={Math.random()}
          x1={Math.floor(paddingRight)}
          y1={0}
          x2={Math.floor(paddingRight)}
          y2={height * verticalLabelsHeightPercentage + paddingTop}
          {..._this.getPropsForBackgroundLines()}
        />
      );
    };
    _this.renderDefs = function (config) {
      var width = config.width,
        height = config.height,
        backgroundGradientFrom = config.backgroundGradientFrom,
        backgroundGradientTo = config.backgroundGradientTo,
        useShadowColorFromDataset = config.useShadowColorFromDataset,
        data = config.data;
      var fromOpacity = config.hasOwnProperty('backgroundGradientFromOpacity')
        ? config.backgroundGradientFromOpacity
        : 1.0;
      var toOpacity = config.hasOwnProperty('backgroundGradientToOpacity')
        ? config.backgroundGradientToOpacity
        : 1.0;
      var fillShadowGradient = config.hasOwnProperty('fillShadowGradient')
        ? config.fillShadowGradient
        : _this.props.chartConfig.color(1.0);
      var fillShadowGradientOpacity = config.hasOwnProperty(
        'fillShadowGradientOpacity',
      )
        ? config.fillShadowGradientOpacity
        : 0.1;
      var fillShadowGradientFrom = config.hasOwnProperty(
        'fillShadowGradientFrom',
      )
        ? config.fillShadowGradientFrom
        : fillShadowGradient;
      var fillShadowGradientFromOpacity = config.hasOwnProperty(
        'fillShadowGradientFromOpacity',
      )
        ? config.fillShadowGradientFromOpacity
        : fillShadowGradientOpacity;
      var fillShadowGradientFromOffset = config.hasOwnProperty(
        'fillShadowGradientFromOffset',
      )
        ? config.fillShadowGradientFromOffset
        : 0;
      var fillShadowGradientTo = config.hasOwnProperty('fillShadowGradientTo')
        ? config.fillShadowGradientTo
        : _this.props.chartConfig.color(1.0);
      var fillShadowGradientToOpacity = config.hasOwnProperty(
        'fillShadowGradientToOpacity',
      )
        ? config.fillShadowGradientToOpacity
        : 0.1;
      var fillShadowGradientToOffset = config.hasOwnProperty(
        'fillShadowGradientToOffset',
      )
        ? config.fillShadowGradientToOffset
        : 1;
      return (
        <Defs>
          <LinearGradient
            id="backgroundGradient"
            x1={0}
            y1={height}
            x2={width}
            y2={0}
            gradientUnits="userSpaceOnUse">
            <Stop
              offset="0"
              stopColor={backgroundGradientFrom}
              stopOpacity={fromOpacity}
            />
            <Stop
              offset="1"
              stopColor={backgroundGradientTo}
              stopOpacity={toOpacity}
            />
          </LinearGradient>
          {useShadowColorFromDataset ? (
            data.map(function (dataset, index) {
              return (
                <LinearGradient
                  id={'fillShadowGradientFrom_' + index}
                  key={'' + index}
                  x1={0}
                  y1={0}
                  x2={0}
                  y2={height}
                  gradientUnits="userSpaceOnUse">
                  <Stop
                    offset={fillShadowGradientFromOffset}
                    stopColor={
                      dataset.color
                        ? dataset.color(1.0)
                        : fillShadowGradientFrom
                    }
                    stopOpacity={fillShadowGradientFromOpacity}
                  />
                  <Stop
                    offset={fillShadowGradientToOffset}
                    stopColor={
                      dataset.color
                        ? dataset.color(fillShadowGradientFromOpacity)
                        : fillShadowGradientFrom
                    }
                    stopOpacity={fillShadowGradientToOpacity || 0}
                  />
                </LinearGradient>
              );
            })
          ) : (
            <LinearGradient
              id="fillShadowGradientFrom"
              x1={0}
              y1={0}
              x2={0}
              y2={height}
              gradientUnits="userSpaceOnUse">
              <Stop
                offset={fillShadowGradientFromOffset}
                stopColor={fillShadowGradientFrom}
                stopOpacity={fillShadowGradientFromOpacity}
              />
              <Stop
                offset={fillShadowGradientToOffset}
                stopColor={fillShadowGradientTo || fillShadowGradientFrom}
                stopOpacity={fillShadowGradientToOpacity || 0}
              />
            </LinearGradient>
          )}
        </Defs>
      );
    };
    return _this;
  }
  AbstractChart.prototype.getPropsForBackgroundLines = function () {
    var _a = this.props.chartConfig.propsForBackgroundLines,
      propsForBackgroundLines = _a === void 0 ? {} : _a;
    return __assign(
      {
        stroke: this.props.chartConfig.color(0.2),
        strokeDasharray: '5, 10',
        strokeWidth: 1,
      },
      propsForBackgroundLines,
    );
  };
  AbstractChart.prototype.getPropsForLabels = function () {
    var _a = this.props.chartConfig,
      _b = _a.propsForLabels,
      propsForLabels = _b === void 0 ? {} : _b,
      color = _a.color,
      _c = _a.labelColor,
      labelColor = _c === void 0 ? color : _c;
    return __assign({fontSize: 12, fill: labelColor(0.8)}, propsForLabels);
  };
  AbstractChart.prototype.getPropsForVerticalLabels = function () {
    var _a = this.props.chartConfig,
      _b = _a.propsForVerticalLabels,
      propsForVerticalLabels = _b === void 0 ? {} : _b,
      color = _a.color,
      _c = _a.labelColor,
      labelColor = _c === void 0 ? color : _c;
    return __assign({fill: labelColor(0.8)}, propsForVerticalLabels);
  };
  AbstractChart.prototype.getPropsForHorizontalLabels = function () {
    var _a = this.props.chartConfig,
      _b = _a.propsForHorizontalLabels,
      propsForHorizontalLabels = _b === void 0 ? {} : _b,
      color = _a.color,
      _c = _a.labelColor,
      labelColor = _c === void 0 ? color : _c;
    return __assign({fill: labelColor(0.8)}, propsForHorizontalLabels);
  };
  return AbstractChart;
})(Component);
export default AbstractChart;
