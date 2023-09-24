import { Stack, StackProps } from "@mantine/core";
import React, { forwardRef } from "react";
import css from "./Layout.module.css";
import classNames from "classnames";

type VerticalProps = React.ComponentPropsWithRef<"div"> &
  StackProps & {
    center?: boolean;
    fullWidth?: boolean;
    fullHeight?: boolean;
    debug?: boolean;
  };

const Vertical = forwardRef<HTMLDivElement, React.ComponentPropsWithRef<"div"> & VerticalProps>(
  (props, ref) => {
    return (
      <Stack
        {...props}
        ref={ref}
        className={classNames(props.className, {
          [css.fullWidth as string]: props.fullWidth,
          [css.fullHeight as string]: props.fullHeight,
          [css.center as string]: props.center,
          [css.debug as string]: props.debug,
        })}
      >
        {props.children}
      </Stack>
    );
  }
);

export default Vertical;
