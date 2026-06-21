import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-Ba5PjWsp.js";import{t as n}from"./Button-CljH6XRV.js";import{t as r}from"./general-ppL1tOwI.js";import{c as i,s as a}from"./inputs-Dmbvuavz.js";var o,s,c,l,u,d,f,p,m;e((()=>{i(),r(),o=t(),s=[{label:`View Profile`,onClick:()=>console.log(`view profile clicked`)},{label:`Account Settings`,onClick:()=>console.log(`account settings clicked`)},{label:`Sign Out`,onClick:()=>console.log(`sign out clicked`)}],c={title:`Components/Navigation/Dropdown`,component:a,tags:[`autodocs`],argTypes:{placement:{control:`select`,options:[`top-start`,`top-end`,`right-start`,`right-end`,`bottom-start`,`bottom-end`,`left-start`,`left-end`]}}},l={args:{children:(0,o.jsx)(n,{children:`Default`}),menu:s}},u={args:{children:(0,o.jsx)(n,{children:`Hover To Open`}),menu:s,trigger:`hover`}},d={args:{children:(0,o.jsx)(n,{children:`Click To Open`}),menu:s,trigger:`click`}},f={args:{children:(0,o.jsx)(n,{children:`With Divider`}),menu:[{label:`View Profile`},{label:`Account Settings`},{divider:!0},{label:`Sign Out`}]}},p={args:{children:(0,o.jsx)(n,{children:`Click To Open`}),menu:[{label:`1st menu item`},{label:`2nd menu item`},{label:`3rd menu item`},{label:`4th menu item`,danger:!0}]}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Button>Default</Button>,
    menu
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Button>Hover To Open</Button>,
    menu,
    trigger: 'hover'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Button>Click To Open</Button>,
    menu,
    trigger: 'click'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Button>With Divider</Button>,
    menu: [{
      label: 'View Profile'
    }, {
      label: 'Account Settings'
    }, {
      divider: true
    }, {
      label: 'Sign Out'
    }]
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Button>Click To Open</Button>,
    menu: [{
      label: '1st menu item'
    }, {
      label: '2nd menu item'
    }, {
      label: '3rd menu item'
    }, {
      label: '4th menu item',
      danger: true
    }]
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`HoverTrigger`,`ClickTrigger`,`WithDivider`,`WithErrorItem`]}))();export{d as ClickTrigger,l as Default,u as HoverTrigger,f as WithDivider,p as WithErrorItem,m as __namedExportsOrder,c as default};