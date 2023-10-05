// Horizontal.tsx
import React, { forwardRef } from "react";
import { Group, GroupProps } from "@mantine/core";
import useLayoutStyles, { LayoutStyleProps } from "./useLayoutStyles";

type HorizontalProps = React.ComponentPropsWithRef<"div"> & GroupProps & LayoutStyleProps;

const Horizontal = forwardRef<HTMLDivElement, React.ComponentPropsWithRef<"div"> & HorizontalProps>(
  (props, ref) => {
    const className = useLayoutStyles(props);
    return (
      <Group {...props} ref={ref} className={className}>
        {props.children}
      </Group>
    );
  }
);

export default Horizontal;
