import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./react-C184PLS3.js";import{t as n}from"./jsx-runtime-Ba5PjWsp.js";import{a as r,n as i,o as a,t as o}from"./use-toast-DsZLjR3i.js";import{t as s}from"./Button-CljH6XRV.js";import{t as c}from"./general-ppL1tOwI.js";import{n as l,t as u}from"./ToastProvider-iZ41drSF.js";var d,f,p,m,h,g,_,v,y,b;e((()=>{t(),a(),l(),o(),c(),d=n(),f={title:`Components/Feedback/Toast`,component:r,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:[`info`,`success`,`warning`,`error`],table:{defaultValue:{summary:`info`}}},message:{control:`text`}}},p={args:{id:`toast-default`,message:`This is a standard notification using the component defaults.`}},m={args:{id:`toast-info`,variant:`info`,message:`A new software update is available for download.`}},h={args:{id:`toast-success`,variant:`success`,message:`Your profile changes have been saved successfully!`}},g={args:{id:`toast-warning`,variant:`warning`,message:`Warning: Your storage usage has exceeded 85% capacity.`}},_={args:{id:`toast-error`,variant:`error`,message:`Failed to sync database. Please verify your connection credentials.`}},v=()=>{let e=i();return(0,d.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,padding:`24px`,alignItems:`center`},children:[(0,d.jsx)(s,{onClick:()=>e(`Information fetched successfully.`,`info`),children:`Trigger Info`}),(0,d.jsx)(s,{onClick:()=>e(`Payment processed completely!`,`success`),children:`Trigger Success`}),(0,d.jsx)(s,{onClick:()=>e(`Session expiring in 2 minutes.`,`warning`),children:`Trigger Warning`}),(0,d.jsx)(s,{onClick:()=>e(`Transaction rejected by gatekeeper.`,`error`),children:`Trigger Error`})]})},y={render:()=>(0,d.jsx)(u,{children:(0,d.jsx)(v,{})}),parameters:{layout:`fullscreen`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'toast-default',
    message: 'This is a standard notification using the component defaults.'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'toast-info',
    variant: 'info',
    message: 'A new software update is available for download.'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'toast-success',
    variant: 'success',
    message: 'Your profile changes have been saved successfully!'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'toast-warning',
    variant: 'warning',
    message: 'Warning: Your storage usage has exceeded 85% capacity.'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'toast-error',
    variant: 'error',
    message: 'Failed to sync database. Please verify your connection credentials.'
  }
}`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ToastProvider>
         <ToastSandbox />
      </ToastProvider>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Info`,`Success`,`Warning`,`ErrorState`,`LiveSystemDemo`]}))();export{p as Default,_ as ErrorState,m as Info,y as LiveSystemDemo,h as Success,g as Warning,b as __namedExportsOrder,f as default};