import * as React from 'react';
import {
  Text,
  TextProps,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {getThemeContext, Theme} from './theme';
import {isEqual} from 'lodash';

export * from './theme';

type PropertyParams = {
  theme: Theme;
};

type PropertyFunction<T, V> = (props: T & PropertyParams) => V;

type CustomType<T, P> = {
  [K in keyof T]?: T[K] | PropertyFunction<P, T[K]>;
};

type CustomTextStyle<T> = CustomType<TextStyle, T>;
type CustomTextProps<T> = TextProps & T;

type CustomViewStyle<T> = CustomType<ViewStyle, T>;
type CustomViewProps<T> = ViewProps & T;

type CustomStyle<T> = CustomTextStyle<T> | CustomViewProps<T>;

function buildCustomStyle<T>(
  styles: CustomStyle<T>,
  props: T,
  theme: Theme,
): TextStyle | ViewStyle {
  const newStyle = {} as any;

  for (const [key, value] of Object.entries(styles)) {
    if (typeof value === 'function') {
      try {
        newStyle[key] = value({
          ...props,
          theme,
        });
      } catch (e) {
        console.error(e);
      }
    } else {
      newStyle[key] = value;
    }
  }

  return newStyle;
}

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
    const isFirst = React.useRef(true);
    const prevProps = React.useRef(props);

    const [customStyle, setCustomStyle] = React.useState<TextStyle>({});
    const {theme} = getThemeContext();

    React.useEffect(() => {
      if (!__DEV__) {
        if (isFirst.current || !isEqual(prevProps.current, props)) {
          const newStyle = buildCustomStyle<T>(styles, props as T, theme);
          setCustomStyle(newStyle);
        }
      } else {
        const newStyle = buildCustomStyle<T>(styles, props as T, theme);
        if (!isEqual(newStyle, customStyle)) {
          setCustomStyle(newStyle);
        }
      }

      isFirst.current = false;
      prevProps.current = props;
    }, [customStyle, props, theme]);

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

const view =
  <T extends object = {}>(
    styles: CustomViewStyle<T>,
  ): React.FC<CustomViewProps<T>> =>
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
    collapsable,
    focusable,
    hasTVPreferredFocus,
    hitSlop,
    isTVSelectable,
    needsOffscreenAlphaCompositing,
    onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture,
    onTouchCancel,
    onTouchEnd,
    onTouchEndCapture,
    onTouchMove,
    onTouchStart,
    pointerEvents,
    removeClippedSubviews,
    renderToHardwareTextureAndroid,
    shouldRasterizeIOS,
    tvParallaxMagnification,
    tvParallaxProperties,
    tvParallaxShiftDistanceX,
    tvParallaxShiftDistanceY,
    tvParallaxTiltAngle,
    onResponderEnd,
    onResponderGrant,
    onResponderMove,
    onResponderReject,
    onResponderRelease,
    onResponderStart,
    onStartShouldSetResponder,
    onStartShouldSetResponderCapture,
    onResponderTerminate,
    onResponderTerminationRequest,
    importantForAccessibility,
    onAccessibilityEscape,
    onLayout,
    nativeID,
    onAccessibilityAction,
    onAccessibilityTap,
    onMagicTap,
    testID,
    ...props
  }: React.PropsWithChildren<CustomViewProps<T>>) => {
    const isFirst = React.useRef(true);
    const prevProps = React.useRef(props);

    const [customStyle, setCustomStyle] = React.useState<ViewStyle>({});
    const {theme} = getThemeContext();

    React.useEffect(() => {
      if (!__DEV__) {
        if (isFirst.current || !isEqual(prevProps.current, props)) {
          const newStyle = buildCustomStyle<T>(styles, props as T, theme);
          setCustomStyle(newStyle);
        }
      } else {
        const newStyle = buildCustomStyle<T>(styles, props as T, theme);
        if (!isEqual(newStyle, customStyle)) {
          setCustomStyle(newStyle);
        }
      }

      isFirst.current = false;
      prevProps.current = props;
    }, [customStyle, props, theme]);

    return (
      <View
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
        collapsable={collapsable}
        focusable={focusable}
        hasTVPreferredFocus={hasTVPreferredFocus}
        hitSlop={hitSlop}
        isTVSelectable={isTVSelectable}
        needsOffscreenAlphaCompositing={needsOffscreenAlphaCompositing}
        onMoveShouldSetResponder={onMoveShouldSetResponder}
        onMoveShouldSetResponderCapture={onMoveShouldSetResponderCapture}
        onTouchCancel={onTouchCancel}
        onTouchEnd={onTouchEnd}
        onTouchEndCapture={onTouchEndCapture}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
        pointerEvents={pointerEvents}
        removeClippedSubviews={removeClippedSubviews}
        renderToHardwareTextureAndroid={renderToHardwareTextureAndroid}
        shouldRasterizeIOS={shouldRasterizeIOS}
        tvParallaxMagnification={tvParallaxMagnification}
        tvParallaxProperties={tvParallaxProperties}
        tvParallaxShiftDistanceX={tvParallaxShiftDistanceX}
        tvParallaxShiftDistanceY={tvParallaxShiftDistanceY}
        tvParallaxTiltAngle={tvParallaxTiltAngle}
        onResponderEnd={onResponderEnd}
        onResponderGrant={onResponderGrant}
        onResponderMove={onResponderMove}
        onResponderReject={onResponderReject}
        onResponderRelease={onResponderRelease}
        onResponderStart={onResponderStart}
        onStartShouldSetResponder={onStartShouldSetResponder}
        onStartShouldSetResponderCapture={onStartShouldSetResponderCapture}
        onResponderTerminate={onResponderTerminate}
        onResponderTerminationRequest={onResponderTerminationRequest}
        importantForAccessibility={importantForAccessibility}
        onAccessibilityEscape={onAccessibilityEscape}
        onLayout={onLayout}
        nativeID={nativeID}
        onAccessibilityAction={onAccessibilityAction}
        onAccessibilityTap={onAccessibilityTap}
        onMagicTap={onMagicTap}
        testID={testID}
        style={[customStyle, style]}>
        {children}
      </View>
    );
  };

export default {
  Text: text,
  View: view,
};
