import * as React from 'react';
import { ImageProps } from 'react-native';

interface TSource {
  uri: string;
}

interface FastAutoHeightImageProps extends ImageProps {
  source: number | TSource;
  width: number;
  fallbackSource?: number | TSource;
  onHeightChange?: () => number;
}

declare class FastAutoHeightImage extends React.Component<
  FastAutoHeightImageProps,
  any
> {}

export default FastAutoHeightImage;
