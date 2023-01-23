import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { ResizableBox as ReactResizableBox } from "react-resizable";

import "react-resizable/css/styles.css";

interface ResizableBoxProps {
    children: React.ReactNode;
    width?: number;
    height?: number;
    resizable?: boolean;
    style?: React.CSSProperties;
    className?: string;
}

const ResizableBox: FC<ResizableBoxProps> = ({
  children,
  width = 600,
  height = 300,
  resizable = true,
  style = {},
  className = "",
}) => {
  return (
    <Box style={{ marginLeft: 20 }}>
      <Box
        style={{
          display: "inline-block",
          width: "auto",
          background: "white",
          padding: ".5rem",
          borderRadius: "0.5rem",
          boxShadow: "0 30px 40px rgba(0,0,0,.1)",
          ...style,
        }}
      >
        {resizable ? (
          <ReactResizableBox width={width} height={height}>
            <Box
              style={{
                width: "100%",
                height: "100%",
              }}
              className={className}
            >
              {children}
            </Box>
          </ReactResizableBox>
        ) : (
          <Box
            style={{
              width: `${width}px`,
              height: `${height}px`,
            }}
            className={className}
          >
            {children}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default ResizableBox;