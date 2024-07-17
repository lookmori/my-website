import React from 'react';
import { ReactFlow,Background,Controls } from '@xyflow/react';
 
import '@xyflow/react/dist/style.css';
 
const initialNodes = [
  { id: '1', position: { x: 350, y: 0 }, data: { label: '1-打开冰箱' } },
  { id: '2', position: { x: 350, y: 100 }, data: { label: '2-把大象放进冰箱' } },
  { id: '3', position: { x: 350, y: 200 }, data: { label: '3-关闭冰箱' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '3' }];
 
export default function T_flow() {
  return (
    <div style={{ width: 'auto', height: '350px',borderRadius:'4px',border:'1px solid #EFEFEF'}} >
      <ReactFlow nodes={initialNodes} edges={initialEdges} >
      <Background />
        <Controls />
        </ReactFlow>
    </div>
  );
}