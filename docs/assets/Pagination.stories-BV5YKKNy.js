import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./react-C184PLS3.js";import{t as r}from"./jsx-runtime-Ba5PjWsp.js";import{n as i,t as a}from"./Pagination-D6swCxYX.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{i(),o=t(n(),1),s=r(),c={component:a,title:`Components/Navigation/Pagination`,tags:[`autodocs`],argTypes:{}},l={render:e=>{let[t,n]=(0,o.useState)(1);return(0,s.jsxs)(`div`,{style:{padding:`2rem`,background:`#f9f9f9`,borderRadius:`8px`},children:[(0,s.jsxs)(`p`,{style:{marginBottom:`1rem`,fontWeight:`500`},children:[`Current page: `,(0,s.jsx)(`strong`,{children:t}),` / `,e.totalPages]}),(0,s.jsx)(a,{...e,page:t,onPageChange:n})]})}},u={...l,args:{page:1,totalPages:10,siblingCount:2}},d={...l,args:{totalPages:10,size:`sm`}},f={...l,args:{totalPages:10,size:`lg`}},p={...l,args:{totalPages:10,page:5,showFirstLast:!1,showPrevNext:!0,siblingCount:0}},m={...l,args:{totalPages:100,page:50,siblingCount:1}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    page: 1,
    totalPages: 10,
    siblingCount: 2
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    totalPages: 10,
    size: 'sm'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    totalPages: 10,
    size: 'lg'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    totalPages: 10,
    page: 5,
    showFirstLast: false,
    showPrevNext: true,
    siblingCount: 0
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    totalPages: 100,
    page: 50,
    siblingCount: 1
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Small`,`Large`,`Minimal`,`ManyPages`]}))();export{u as Default,f as Large,m as ManyPages,p as Minimal,d as Small,h as __namedExportsOrder,c as default};