import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-Ba5PjWsp.js";import{n,t as r}from"./Grid-B2xLpBlp.js";var i,a,o,s,c,l,u,d,f;e((()=>{n(),i=t(),a={title:`Components/Layout/Grid`,component:r,tags:[`autodocs`],argTypes:{columns:{control:`number`},minChildWidth:{control:`text`},gap:{control:`text`},rowGap:{control:`text`},columnGap:{control:`text`},justifyItems:{control:`select`,options:[`flex-start`,`flex-end`,`center`,`space-between`,`space-around`,`space-evenly`]},alignItems:{control:`select`,options:[`flex-start`,`flex-end`,`center`,`baseline`,`stretch`]}}},o={args:{gap:3,columns:6},render:e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`div`,{style:{textAlign:`center`,marginBottom:`16px`,fontSize:`24px`,fontWeight:`600`},children:`6 Grid Columns`}),(0,i.jsx)(r,{...e})]})},s=({children:e,style:t,...n})=>(0,i.jsx)(`div`,{...n,style:{padding:12,borderRadius:8,background:`#eee`,...t},children:e}),c={...o,args:{columns:{sm:1,md:2,lg:4},children:Array.from({length:8}).map((e,t)=>(0,i.jsxs)(s,{children:[`Item `,t+1]},t))}},l={...o,args:{minChildWidth:`220px`,columns:{sm:1,md:2,lg:3},children:Array.from({length:10}).map((e,t)=>(0,i.jsxs)(s,{children:[`Card `,t+1]},t))}},u={...o,args:{children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Item,{span:2,children:(0,i.jsx)(s,{style:{background:`#eef`},children:`Spans 2`})}),(0,i.jsx)(r.Item,{span:4,children:(0,i.jsx)(s,{style:{background:`#efe`},children:`Span 4`})}),(0,i.jsx)(r.Item,{children:(0,i.jsx)(s,{style:{background:`#fdf5f5`},children:`Normal`})}),(0,i.jsx)(r.Item,{children:(0,i.jsx)(s,{style:{background:`#fdf5f5`},children:`Normal`})})]})}},d={...o,args:{children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Item,{span:2,children:(0,i.jsx)(s,{style:{background:`#eef`},children:`Featured — spans 2`})}),(0,i.jsx)(r.Item,{span:{sm:6,md:2},children:(0,i.jsx)(s,{style:{background:`#efe`},children:`Responsive span`})}),(0,i.jsx)(r.Item,{span:{sm:6,md:2},children:(0,i.jsx)(s,{style:{background:`#efe`},children:`Responsive span`})})]})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    columns: {
      sm: 1,
      md: 2,
      lg: 4
    },
    children: Array.from({
      length: 8
    }).map((_, i) => <Item key={i}>Item {i + 1}</Item>)
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    minChildWidth: '220px',
    //  gap: 3,
    columns: {
      sm: 1,
      md: 2,
      lg: 3
    },
    children: Array.from({
      length: 10
    }).map((_, i) => <Item key={i}>Card {i + 1}</Item>)
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    children: <>
            <Grid.Item span={2}>
               <Item style={{
          background: '#eef'
        }}>Spans 2</Item>
            </Grid.Item>
            <Grid.Item span={4}>
               <Item style={{
          background: '#efe'
        }}>Span 4</Item>
            </Grid.Item>
            <Grid.Item>
               <Item style={{
          background: '#fdf5f5'
        }}>Normal</Item>
            </Grid.Item>
            <Grid.Item>
               <Item style={{
          background: '#fdf5f5'
        }}>Normal</Item>
            </Grid.Item>
         </>
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    children: <>
            <Grid.Item span={2}>
               <Item style={{
          background: '#eef'
        }}>Featured — spans 2</Item>
            </Grid.Item>
            <Grid.Item span={{
        sm: 6,
        md: 2
      }}>
               <Item style={{
          background: '#efe'
        }}>Responsive span</Item>
            </Grid.Item>
            <Grid.Item span={{
        sm: 6,
        md: 2
      }}>
               <Item style={{
          background: '#efe'
        }}>Responsive span</Item>
            </Grid.Item>
         </>
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`MinChildWidth`,`Spanning`,`ResponsiveSpan`]}))();export{c as Default,l as MinChildWidth,d as ResponsiveSpan,u as Spanning,f as __namedExportsOrder,a as default};