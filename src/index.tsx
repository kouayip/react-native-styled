import * as React from 'react';
import {Text, TextStyle} from 'react-native';
import {CustomTextProps, CustomTextStyle} from './types';
import {buildCustomStyle, useDeepEffect} from './utils';

export * from './theme';

const text =
  <T extends object = {}>(
    styles: CustomTextStyle<T>,
  ): React.FC<CustomTextProps<T>> =>
  ({
    children,
    style,
    accessibilityActions,
    accessibilityElementsHidden,
    accessibilityHint,
    accessibilityIgnoresInvertColors,
    accessibilityLabel,
    accessibilityLiveRegion,
    accessibilityRole,
    accessibilityState,
    accessibilityValue,
    accessibilityViewIsModal,
    accessible,
    importantForAccessibility,
    onAccessibilityEscape,
    adjustsFontSizeToFit,
    allowFontScaling,
    minimumFontScale,
    maxFontSizeMultiplier,
    android_hyphenationFrequency,
    dataDetectorType,
    ellipsizeMode,
    lineBreakMode,
    numberOfLines,
    textBreakStrategy,
    onTextLayout,
    onLayout,
    nativeID,
    onAccessibilityAction,
    onAccessibilityTap,
    onMagicTap,
    onLongPress,
    onPressIn,
    onPress,
    onPressOut,
    selectable,
    selectionColor,
    testID,
    suppressHighlighting,
    ...props
  }: React.PropsWithChildren<CustomTextProps<T>>) => {
    const [customStyle, setCustomStyle] = React.useState<TextStyle>({});

    useDeepEffect(async () => {
      const newStyle = buildCustomStyle<T>(styles, props as T);
      setCustomStyle(newStyle);
    }, [props]);

    return (
      <Text
        accessibilityActions={accessibilityActions}
        accessibilityElementsHidden={accessibilityElementsHidden}
        accessibilityHint={accessibilityHint}
        accessibilityIgnoresInvertColors={accessibilityIgnoresInvertColors}
        accessibilityLabel={accessibilityLabel}
        accessibilityLiveRegion={accessibilityLiveRegion}
        accessibilityRole={accessibilityRole}
        accessibilityState={accessibilityState}
        accessibilityValue={accessibilityValue}
        accessibilityViewIsModal={accessibilityViewIsModal}
        accessible={accessible}
        importantForAccessibility={importantForAccessibility}
        onAccessibilityEscape={onAccessibilityEscape}
        adjustsFontSizeToFit={adjustsFontSizeToFit}
        allowFontScaling={allowFontScaling}
        minimumFontScale={minimumFontScale}
        maxFontSizeMultiplier={maxFontSizeMultiplier}
        android_hyphenationFrequency={android_hyphenationFrequency}
        dataDetectorType={dataDetectorType}
        ellipsizeMode={ellipsizeMode}
        lineBreakMode={lineBreakMode}
        numberOfLines={numberOfLines}
        textBreakStrategy={textBreakStrategy}
        onTextLayout={onTextLayout}
        onLayout={onLayout}
        nativeID={nativeID}
        onAccessibilityAction={onAccessibilityAction}
        onAccessibilityTap={onAccessibilityTap}
        onMagicTap={onMagicTap}
        onLongPress={onLongPress}
        onPressIn={onPressIn}
        onPress={onPress}
        onPressOut={onPressOut}
        selectable={selectable}
        selectionColor={selectionColor}
        testID={testID}
        suppressHighlighting={suppressHighlighting}
        style={[customStyle, style]}>
        {children}
      </Text>
    );
  };

export default {
  Text: text,
};
