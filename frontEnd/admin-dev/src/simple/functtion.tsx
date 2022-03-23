import React from "react";
export interface Props {
  defaultCount: number;
}
export default function MyCounter({
  defaultCount = 0,
}: Props): React.ReactElement {
  const [count, setCount] = React.useState<number>(defaultCount);

  const incrementCount = () => {
    setCount(count + 1);
  };
  return <button onClick={incrementCount}>Example - count: {count}</button>;
}

export interface MyComponentProps extends Props {
  incrementCount: () => void;
}
export const MyComponent: React.FC<MyComponentProps> = ({
  defaultCount = 0,
  incrementCount,
}) => <button onClick={incrementCount}>Example - count: {defaultCount}</button>;
