import { ChangeEvent, useCallback, useState } from "react";
import ReactFlow, {
  Node,
  addEdge,
  Background,
  Edge,
  Connection,
  useNodesState,
  useEdgesState,
} from "reactflow";
import { v4 as uuidv4 } from "uuid";

import { Button } from "@mui/material";
import { Box, CustomNode } from "./";
import { ModalNode } from "../modalNode";
import {
  initialNodeInfo,
  initialNodes,
  NodeInfo,
  NEW_NODE_LABEL,
  ADD_BUTTON_NODE,
} from "../../utils";
import "reactflow/dist/style.css";

const nodeTypes = {
  custom: CustomNode,
};

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [open, setOpen] = useState<boolean>(false);
  const [nodeInfo, setNodeInfo] = useState<NodeInfo>(initialNodeInfo);

  const handleClose = () => setOpen(false);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );
  const onNodeClick = (event: React.MouseEvent, node: Node) => {
    setNodeInfo({
      name: node.data?.label?.split("-")[0],
      description: node.data?.label?.split("-")[1],
      id: node.id,
    });
    setOpen(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNodeInfo({ ...nodeInfo, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const newNodes = structuredClone(nodes);

    const updatedNodes = newNodes.map((obj: Node) => {
      if (obj.id === nodeInfo.id) {
        obj.data.label = `${nodeInfo.name} - ${nodeInfo.description}`;
      }
      return obj;
    });

    setNodes(updatedNodes);
    setOpen(false);
  };

  const addNode = () => {
    const newNodes = structuredClone(nodes);
    newNodes.push({
      width: 203,
      height: 56,
      id: uuidv4(),
      type: "custom",
      data: {
        label: NEW_NODE_LABEL,
      },
      position: {
        x: 600,
        y: 200,
      },
      selected: false,
      dragging: false,
      positionAbsolute: {
        x: 600,
        y: 200,
      },
    });
    setNodes(newNodes);
  };

  return (
    <Box>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
      >
        <Background />
      </ReactFlow>
      <Button variant="outlined" onClick={addNode}>
        {ADD_BUTTON_NODE}
      </Button>
      <ModalNode
        open={open}
        handleClose={handleClose}
        nodeInfo={nodeInfo}
        handleChange={handleChange}
        handleSave={handleSave}
      ></ModalNode>
    </Box>
  );
};

export default Flow;
