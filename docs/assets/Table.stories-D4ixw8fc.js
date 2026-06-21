import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-Ba5PjWsp.js";import{n,t as r}from"./Table-mGlHTKct.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),a={title:`Components/Data Display/Table`,component:r,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},fullWidth:{control:`boolean`},striped:{control:`boolean`},bordered:{control:`boolean`},caption:{control:`object`}}},o=e=>(0,i.jsxs)(r,{...e,children:[(0,i.jsx)(r.Header,{children:(0,i.jsxs)(r.Row,{children:[(0,i.jsx)(r.Head,{children:`Name`}),(0,i.jsx)(r.Head,{children:`Role`}),(0,i.jsx)(r.Head,{align:`right`,children:`Status`})]})}),(0,i.jsxs)(r.Body,{children:[(0,i.jsxs)(r.Row,{children:[(0,i.jsx)(r.Cell,{children:`John Doe`}),(0,i.jsx)(r.Cell,{children:`Developer`}),(0,i.jsx)(r.Cell,{align:`right`,children:`Active`})]}),(0,i.jsxs)(r.Row,{children:[(0,i.jsx)(r.Cell,{children:`Jane Smith`}),(0,i.jsx)(r.Cell,{children:`Designer`}),(0,i.jsx)(r.Cell,{align:`right`,children:`Busy`})]})]})]}),s={render:e=>(0,i.jsx)(o,{...e}),args:{size:`md`,striped:!1}},c={render:e=>(0,i.jsx)(o,{...e}),args:{striped:!0}},l={render:e=>(0,i.jsx)(o,{...e}),args:{size:`sm`}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <TableTemplate {...args} />,
  args: {
    size: 'md',
    striped: false
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <TableTemplate {...args} />,
  args: {
    striped: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <TableTemplate {...args} />,
  args: {
    size: 'sm'
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`Striped`,`Compact`]}))();export{l as Compact,s as Default,c as Striped,u as __namedExportsOrder,a as default};