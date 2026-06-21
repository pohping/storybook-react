import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./react-C184PLS3.js";import{t as r}from"./jsx-runtime-Ba5PjWsp.js";import{n as i,t as a}from"./NumberInput-CXeJMQRN.js";var o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{i(),o=t(n(),1),s=r(),c={component:a,title:`Components/Inputs/NumberInput`,tags:[`autodocs`],argTypes:{size:{control:{type:`radio`,options:[`sm`,`md`,`lg`]}},min:{control:`number`},max:{control:`number`},step:{control:`number`},disabled:{control:`boolean`},placeholder:{control:`text`}}},l={},u={args:{size:`sm`}},d={args:{size:`lg`}},f={args:{min:1,max:10}},p={args:{step:3}},m={render:e=>{let[t,n]=(0,o.useState)(5);return(0,s.jsx)(a,{...e,onChange:e=>{console.log({v:e}),n(e)},value:t})}},h={args:{error:!0}},g={args:{disabled:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    min: 1,
    max: 10
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    step: 3
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<null | number>(5);
    return <NumberInput {...args} onChange={v => {
      console.log({
        v
      });
      setValue(v);
    }} value={value} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Small`,`Large`,`Range`,`Step`,`Controlled`,`Error`,`Disabled`]}))();export{m as Controlled,l as Default,g as Disabled,h as Error,d as Large,f as Range,u as Small,p as Step,_ as __namedExportsOrder,c as default};