import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./react-C184PLS3.js";import{t as r}from"./jsx-runtime-Ba5PjWsp.js";import{n as i,t as a}from"./clsx-BwRc5v1A.js";import{t as o}from"./Icon-CfRCCMwf.js";import{t as s}from"./data-display-CVt5ZAKK.js";import{l as c}from"./inputs-Dmbvuavz.js";import{a as l,i as u,o as d,r as f,s as ee}from"./DatePicker-DexCqKl4.js";import{t as te}from"./Portal-C6JfiYAh.js";var p,m,h,g,_,v=e((()=>{p=t(n(),1),m=(0,p.createContext)(null),h=()=>{let e=(0,p.useContext)(m);if(!e)throw Error(`Menu sub-components must be rendered within a <Menu> provider.`);return e},g=(0,p.createContext)(null),_=()=>(0,p.useContext)(g)})),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F=e((()=>{y=`_menu_50j12_141`,b=`_horizontal_50j12_147`,x=`_list_50j12_152`,S=`_floatingWrapper_50j12_158`,C=`_vertical_50j12_158`,w=`_item_50j12_171`,T=`_active_50j12_193`,E=`_subContainer_50j12_213`,D=`_subTrigger_50j12_219`,O=`_label_50j12_223`,k=`_section_50j12_228`,A=`_arrow_50j12_233`,j=`_open_50j12_239`,M=`_accordionWrapper_50j12_244`,N=`_fadeIn_50j12_1`,P={menu:y,horizontal:b,list:x,floatingWrapper:S,vertical:C,item:w,active:T,subContainer:E,subTrigger:D,label:O,section:k,arrow:A,open:j,accordionWrapper:M,fadeIn:N}})),I,L,R,ne=e((()=>{I=t(n(),1),v(),F(),i(),L=r(),R=({as:e,active:t,children:n,className:r,onClick:i,...o})=>{let{orientation:s}=h(),c=_();return(0,I.useEffect)(()=>{s===`vertical`&&t&&c&&c.setOpen(!0)},[s,t,c]),(0,L.jsx)(e||`li`,{role:`menuitem`,onClick:e=>{i&&i(e),s===`horizontal`&&c&&c.setOpen(!1)},className:a(P.item,t&&P.active,r),...o,children:n})},R.__docgenInfo={description:``,methods:[],displayName:`MenuItem`,props:{as:{required:!1,tsType:{name:`E`},description:``},active:{required:!1,tsType:{name:`boolean`},description:`Visual highlight flag marking this item as the active current destination path or state selection`},children:{required:!0,tsType:{name:`ReactNode`},description:`The core display node text or markup structure contained in the block link target`}}}}));function z(e){return B.Children.toArray(e).some(e=>(0,B.isValidElement)(e)?e.props?.active?!0:e.props?.children?z(e.props.children):!1:!1)}var B,V=e((()=>{B=t(n(),1)})),H,U,W,re=e((()=>{i(),H=t(n(),1),f(),v(),s(),c(),V(),F(),U=r(),W=({label:e,children:t,className:n,...r})=>{let{orientation:i}=h(),s=(0,H.useRef)(null),[c,f]=(0,H.useState)((0,H.useMemo)(()=>z(t),[t])),[p,_]=(0,H.useState)(0),{refs:v,floatingStyles:y}=u({placement:i===`horizontal`?`bottom-start`:`right-start`,open:c,onOpenChange:f,middleware:[l(),ee(),d(8)]});(0,H.useEffect)(()=>{if(i===`vertical`&&s.current){let e=new ResizeObserver(e=>{for(let t of e)_(t.target.scrollHeight)});return e.observe(s.current),()=>e.disconnect()}},[i,t]);let b=()=>f(e=>!e),x=i===`horizontal`?{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1)}:{};return(0,U.jsx)(g.Provider,{value:{open:c,setOpen:f},children:(0,U.jsxs)(`li`,{ref:i===`horizontal`?v.setReference:void 0,className:a(P.subContainer,{[P.open]:c,[P[i]]:i},n),...x,...r,children:[(0,U.jsxs)(`div`,{className:a(P.item,P.subTrigger),onClick:i===`vertical`?b:void 0,role:`button`,"aria-expanded":c,children:[(0,U.jsx)(`span`,{className:P.label,children:e}),(0,U.jsx)(`div`,{className:P.section,children:(0,U.jsx)(o,{name:`ArrowDown`,className:a(P.arrow,{[P.arrowOpen]:c})})})]}),i===`vertical`&&(0,U.jsx)(`div`,{className:P.accordionWrapper,style:{height:c?`${p}px`:`0px`},children:(0,U.jsx)(`ul`,{ref:s,className:P.list,children:t})}),i===`horizontal`&&c&&(0,U.jsx)(te,{children:(0,U.jsx)(`div`,{ref:v.setFloating,style:y,className:P.floatingWrapper,...x,children:(0,U.jsx)(m.Provider,{value:{orientation:`vertical`},children:(0,U.jsx)(`ul`,{className:P.list,children:t})})})})]})})},W.__docgenInfo={description:``,methods:[],displayName:`MenuSub`,props:{label:{required:!0,tsType:{name:`ReactNode`},description:`The display label, icon, or string text that triggers the visibility toggle of the nested submenu item tree`},children:{required:!0,tsType:{name:`ReactNode`},description:`Nested child nodes`}},composes:[`ComponentPropsWithoutRef`]}})),G,K,q=e((()=>{v(),ne(),re(),i(),F(),G=r(),K=(({orientation:e=`vertical`,children:t,className:n,...r})=>(0,G.jsx)(m.Provider,{value:{orientation:e},children:(0,G.jsx)(`nav`,{className:a(P.menu,e===`vertical`?P.vertical:P.horizontal,n),role:`menu`,...r,children:(0,G.jsx)(`ul`,{className:P.list,children:t})})})),K.Item=R,K.Sub=W,K.__docgenInfo={description:``,methods:[],displayName:`Menu`,props:{orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:`Dictates whether the items inside lay out side-by-side or stacked on top of each other`,defaultValue:{value:`'vertical'`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:`Structural composition nodes`}},composes:[`ComponentPropsWithoutRef`]}})),J,Y,X,Z,Q,$;e((()=>{q(),J=r(),Y={component:K,title:`Components/Navigation/Menu`,tags:[`autodocs`],argTypes:{orientation:{control:`radio`,options:[`horizontal`,`vertical`]}}},X={render:e=>(0,J.jsxs)(K,{...e,children:[(0,J.jsx)(K.Item,{active:!0,children:`Dashboard`}),(0,J.jsxs)(K.Sub,{label:`Settings`,children:[(0,J.jsx)(K.Item,{children:`Profile`}),(0,J.jsx)(K.Item,{children:`Security`})]}),(0,J.jsx)(K.Item,{as:`a`,href:`https://google.com`,children:`External Link`})]})},Z={render:e=>(0,J.jsxs)(K,{...e,orientation:`vertical`,children:[(0,J.jsx)(K.Item,{active:!0,children:`Dashboard`}),(0,J.jsxs)(K.Sub,{label:`Settings`,children:[(0,J.jsx)(K.Item,{children:`Profile`}),(0,J.jsx)(K.Item,{children:`Security`})]}),(0,J.jsx)(K.Item,{as:`a`,href:`https://google.com`,children:`External Link`})]})},Q={render:e=>(0,J.jsxs)(K,{...e,orientation:`horizontal`,children:[(0,J.jsx)(K.Item,{active:!0,children:`Dashboard`}),(0,J.jsxs)(K.Sub,{label:`Settings`,children:[(0,J.jsx)(K.Item,{children:`Profile`}),(0,J.jsx)(K.Item,{children:`Security`})]}),(0,J.jsx)(K.Item,{as:`a`,href:`https://google.com`,children:`External Link`})]})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
         <Menu.Item active>Dashboard</Menu.Item>

         <Menu.Sub label="Settings">
            <Menu.Item>Profile</Menu.Item>
            <Menu.Item>Security</Menu.Item>
         </Menu.Sub>

         <Menu.Item as="a" href="https://google.com">
            External Link
         </Menu.Item>
      </Menu>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <Menu {...args} orientation="vertical">
         <Menu.Item active>Dashboard</Menu.Item>

         <Menu.Sub label="Settings">
            <Menu.Item>Profile</Menu.Item>
            <Menu.Item>Security</Menu.Item>
         </Menu.Sub>

         <Menu.Item as="a" href="https://google.com">
            External Link
         </Menu.Item>
      </Menu>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <Menu {...args} orientation="horizontal">
         <Menu.Item active>Dashboard</Menu.Item>

         <Menu.Sub label="Settings">
            <Menu.Item>Profile</Menu.Item>
            <Menu.Item>Security</Menu.Item>
         </Menu.Sub>

         <Menu.Item as="a" href="https://google.com">
            External Link
         </Menu.Item>
      </Menu>
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Vertical`,`Horizontal`]}))();export{X as Default,Q as Horizontal,Z as Vertical,$ as __namedExportsOrder,Y as default};