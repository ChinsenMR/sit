import React from "react";

type ButtonProps = {
  /** the background color of the button */
  color: string;
  /** the text to show inside the button */
  text: string;
};

type ContainerProps = ButtonProps & {
  /** the height of the container (value used with 'px') */
  height: number;
  width: number;
};

export const Container: React.FC<ContainerProps> = ({
  color,
  height,
  width,
  text,
}) => {
  return (
    <div style={{ backgroundColor: color, height: `${height}px` }}>{text}</div>
  );
};

/**
 * 利用Interface继承
 */

interface MainContainerProps extends ButtonProps {
  /** the height of the container (value used with 'px') */
  height: number;
  width: number;
}

export const MainContainer: React.FC<MainContainerProps> = ({
  color,
  height,
  width,
  text,
}) => {
  return (
    <div style={{ backgroundColor: color, height: `${height}px` }}>{text}</div>
  );
};
