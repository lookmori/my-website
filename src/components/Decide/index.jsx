import { Background, Handle, Position } from '@xyflow/react';
 
const handleStyle = { left: 10};
 
function TextUpdaterNode({ data }) {
 
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div style={{rotate:'45deg',border:'1px solid #000000',width:'max-content',height:'auto',display:'flex',justifyContent:'center',alignItems:'center',aspectRatio: "1 / 1"}}>
        <p style={{transform:'rotate(-45deg)'}}>
        冰箱有东西
        </p>
      </div>
      <Handle type="source" position={Position.Right} id="a" />
      <Handle
        type="source"
        position={Position.Left}
        id="b"
        style={handleStyle}
      />
    </>
  );
}

export default TextUpdaterNode;