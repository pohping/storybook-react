import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./react-C184PLS3.js";import{t as r}from"./jsx-runtime-Ba5PjWsp.js";import{n as i,t as a}from"./Radio-Dbmurbx6.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{i(),o=t(n(),1),s=r(),c={component:a,title:`Components/Inputs/Radio`,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},label:{control:`text`}}},l={args:{label:`Radio`}},u={args:{label:`Small`,size:`sm`}},d={args:{label:`Large`,size:`lg`}},f={render:e=>(0,s.jsxs)(a.Group,{name:`fruit`,defaultValue:`orange`,children:[(0,s.jsx)(a,{...e,value:`apple`,label:`Apple`}),(0,s.jsx)(a,{...e,value:`banana`,label:`Banana`}),(0,s.jsx)(a,{...e,value:`orange`,label:`Orange`})]})},p={render:e=>{let[t,n]=(0,o.useState)(`ios`);return(0,s.jsxs)(a.Group,{name:`os`,value:t,onChange:n,children:[(0,s.jsx)(a,{...e,value:`android`,label:`Android`}),(0,s.jsx)(a,{...e,value:`ios`,label:`IOS`}),(0,s.jsx)(a,{...e,value:`windows`,label:`Windows`})]})}},m={args:{label:`Disabled`,disabled:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Radio'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small',
    size: 'sm'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large',
    size: 'lg'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Radio.Group name="fruit" defaultValue="orange">
            <Radio {...args} value="apple" label="Apple" />
            <Radio {...args} value="banana" label="Banana" />
            <Radio {...args} value="orange" label="Orange" />
         </Radio.Group>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<RadioValue>('ios');
    return <Radio.Group name="os" value={value} onChange={setValue}>
            <Radio {...args} value="android" label="Android" />
            <Radio {...args} value="ios" label="IOS" />
            <Radio {...args} value="windows" label="Windows" />
         </Radio.Group>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Small`,`Large`,`DefaultValue`,`Controlled`,`Disabled`]}))();export{p as Controlled,l as Default,f as DefaultValue,m as Disabled,d as Large,u as Small,h as __namedExportsOrder,c as default};