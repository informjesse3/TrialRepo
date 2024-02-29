import React from 'react';
import {Rect, Text} from 'react-native-svg';
var CIRCLE_WIDTH = 16;
var PADDING_LEFT = 4;
var CHARACTER_WIDTH = 6;
export var LegendItem = function (props) {
  var baseLegendItemX = props.baseLegendItemX,
    index = props.index;
  /* half the height of the legend Rect, minus half the height of the circle to align the
       circle from its center, rather than its top. */
  var centerAlignedCircle = props.legendOffset / 2 - CIRCLE_WIDTH / 2;
  // 65% of the legend container height centers the text in relation to the circles
  var centerAlignedText = props.legendOffset * 0.65;
  // to center the legendItem on the baseLegendItemX
  var textLengthOffset = (props.legendText.length * CHARACTER_WIDTH) / 2;
  var legendItemNumber = index + 1;
  return (
    <>
      <Rect
        width={CIRCLE_WIDTH}
        height={CIRCLE_WIDTH}
        fill={props.iconColor}
        rx={8}
        ry={8}
        x={
          baseLegendItemX * legendItemNumber - (CIRCLE_WIDTH + textLengthOffset)
        }
        y={centerAlignedCircle}
      />
      <Text
        x={
          baseLegendItemX * legendItemNumber + (PADDING_LEFT - textLengthOffset)
        }
        y={centerAlignedText}
        {...props.labelProps}>
        {props.legendText}
      </Text>
    </>
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGVnZW5kSXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saW5lLWNoYXJ0L0xlZ2VuZEl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQVMsSUFBSSxFQUFFLElBQUksRUFBYSxNQUFNLGtCQUFrQixDQUFDO0FBRWhFLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUN4QixJQUFNLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDdkIsSUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDO0FBVzFCLE1BQU0sQ0FBQyxJQUFNLFVBQVUsR0FBRyxVQUFDLEtBQXNCO0lBQ3ZDLElBQUEsZUFBZSxHQUFZLEtBQUssZ0JBQWpCLEVBQUUsS0FBSyxHQUFLLEtBQUssTUFBVixDQUFXO0lBQ3pDO3NEQUNrRDtJQUNsRCxJQUFNLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDdEUsaUZBQWlGO0lBQ2pGLElBQU0saUJBQWlCLEdBQUcsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDcEQsa0RBQWtEO0lBQ2xELElBQU0sZ0JBQWdCLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekUsSUFBTSxnQkFBZ0IsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBRW5DLE9BQU8sQ0FDTCxFQUNFO01BQUEsQ0FBQyxJQUFJLENBQ0gsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQ3BCLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUNyQixJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQ3RCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNOLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNOLENBQUMsQ0FBQyxDQUNBLGVBQWUsR0FBRyxnQkFBZ0IsR0FBRyxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxDQUN2RSxDQUNELENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEVBRXpCO01BQUEsQ0FBQyxJQUFJLENBQ0gsQ0FBQyxDQUFDLENBQ0EsZUFBZSxHQUFHLGdCQUFnQixHQUFHLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDLENBQ3ZFLENBQ0QsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FDckIsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBRXJCO1FBQUEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUNuQ
