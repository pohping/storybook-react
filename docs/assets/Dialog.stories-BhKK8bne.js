import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./react-C184PLS3.js";import{t as r}from"./jsx-runtime-Ba5PjWsp.js";import{t as i}from"./Button-CljH6XRV.js";import{t as a}from"./general-ppL1tOwI.js";import{n as o,t as s}from"./Dialog-CaHUF3QF.js";var c,l,u,d,f,p,m,h;e((()=>{o(),c=t(n(),1),a(),l=r(),u={title:`Components/Surfaces/Dialog`,component:s,tags:[`autodocs`]},d={render:e=>{let[t,n]=(0,c.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{onClick:()=>n(!0),children:`Open Dialog`}),(0,l.jsx)(s,{open:t,onCancel:()=>{n(!1)},onConfirm:()=>{alert(`Confirm clicked`),n(!1)},...e})]})}},f={...d},p={...d,args:{cancelButton:`Custom Cancel Button`,confirmButton:`Custom Confirm Button`}},m={...d,decorators:e=>(0,l.jsx)(`div`,{style:{background:`#eee`,height:`200vh`,padding:`10px`},children:(0,l.jsx)(e,{})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...Template
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    cancelButton: 'Custom Cancel Button',
    confirmButton: 'Custom Confirm Button'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...Template,
  decorators: Story => <div style={{
    background: '#eee',
    height: '200vh',
    padding: '10px'
  }}>
         <Story />
      </div>
}`,...m.parameters?.docs?.source}}},h=[`Default`,`CustomButton`,`ScrollablePage`]}))();export{p as CustomButton,f as Default,m as ScrollablePage,h as __namedExportsOrder,u as default};