import React from 'react';
import { ReactFlow,Background,Controls } from '@xyflow/react';
 
import '@xyflow/react/dist/style.css';
import TextUpdaterNode from '../../src/components/Decide';
import CustomEdge from './line';
const nodeTypes = { textUpdater: TextUpdaterNode };


const initialNodes = [
  { id: '1', position: { x: 350, y: 0 }, data: { label: '1-打开冰箱' } },
  { id: '2', position: { x: 350, y: 100 }, data: { label: '2-冰箱是否有东西' } ,type: 'textUpdater',},
  { id: '3', position: { x: 400, y: 300 }, data: { label: '3-把大象放进冰箱' } },
  { id: '6', position: { x: 150, y: 500 }, data: { label: '4-把大象放进冰箱' } },
  { id: '4', position: { x: 150, y: 400 }, data: { label: '3-拿走冰箱里东西' } },
  { id: '5', position: { x: 350, y: 500 }, data: { label: '4-关闭冰箱' } },
  { id: '7', position: { x: 150, y: 600 }, data: { label: '5-关闭冰箱' } },
];

const edgeTypes = {
  'custom-edge': CustomEdge,
};
const initialEdges = [
  { id: 'e1', source: '1', target: '2' },
  { id: 'e4', source: '4', target: '6' },
  { id: 'e6', source: '6', target: '7' },
  { id: 'e2', source: '2', target: '4',sourceHandle:'b',type:'custom-edge',data:{label:1}  },
  { id: 'e5', source: '2', target: '3' ,sourceHandle:'a',type:'custom-edge',data:{label:0} },
  { id: 'e3', source: '3', target: '5' }
];

export default function T_if() {

  return (
    <div style={{ width: 'auto', height: '350px',borderRadius:'4px',border:'1px solid #EFEFEF'}} >
      <ReactFlow nodes={initialNodes} edges={initialEdges} nodeTypes={nodeTypes} edgeTypes={edgeTypes} fitView>
      <Background />
        <Controls />
        </ReactFlow>
    </div>
  );
}