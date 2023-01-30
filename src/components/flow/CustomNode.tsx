import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";

export const CustomNode = ({
  data,
  isConnectable,
  targetPosition = Position.Top,
  sourcePosition = Position.Bottom,
}: NodeProps) => {
  return (
    <>
      <Handle
        type="target"
        position={targetPosition}
        isConnectable={isConnectable}
      />
      <div style={{ textAlign: "center" }}>
        {data.label.split("-")[0]}
        <br />
        <span>{data.label.split("-")[1]}</span>
      </div>
      <Handle
        type="source"
        position={sourcePosition}
        isConnectable={isConnectable}
      />
    </>
  );
};

CustomNode.displayName = "CustomNode";

export default memo(CustomNode);
