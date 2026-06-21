import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./react-C184PLS3.js";import{t as r}from"./jsx-runtime-Ba5PjWsp.js";import{t as i}from"./Icon-CfRCCMwf.js";import{t as a}from"./data-display-CVt5ZAKK.js";import{t as o}from"./Button-CljH6XRV.js";import{t as s}from"./general-B32O_Zxq.js";import{n as c,t as l}from"./Upload-Cx6AS-tJ.js";var u,d,f,p,m,h,g,_,v;e((()=>{c(),u=t(n(),1),s(),a(),d=r(),f={component:l,title:`Components/Inputs/Upload`,tags:[`autodocs`],argTypes:{multiple:{control:`boolean`},maxFileSizeMB:{control:`number`},accept:{control:`text`},disabled:{control:`boolean`},showUploadList:{control:`boolean`}}},p=[{uid:`1`,name:`image1.jpg`,url:`https://cdn.pixabay.com/photo/2023/11/27/15/41/cat-8415620_1280.jpg`},{uid:`2`,name:`image2.jpg`,url:`https://cdn.pixabay.com/photo/2024/04/17/17/02/box-8702500_1280.jpg`},{uid:`3`,name:`image3.jpg`,url:`https://cdn.pixabay.com/photo/2023/11/24/18/53/cat-8410504_1280.jpg`},{uid:`4`,name:`image4.jpg`,url:`https://cdn.pixabay.com/photo/2023/11/24/18/53/cat-8410506_1280.jpg`},{uid:`5`,name:`image5.jpg`,url:`https://cdn.pixabay.com/photo/2023/08/19/19/59/cat-8201133_1280.jpg`}],m={args:{children:(0,d.jsx)(o,{children:`Click to Upload`}),onChange:e=>console.log(`Files changed:`,e)}},h={render:e=>{let[t,n]=(0,u.useState)(p),r=e=>{console.log({files:e}),n(e)};return(0,d.jsx)(l,{...e,fileList:t,onChange:r,multiple:!0,children:(0,d.jsx)(o,{icon:(0,d.jsx)(i,{name:`Upload`}),iconPosition:`end`,children:`Upload`})})}},g={render:e=>{let[t,n]=(0,u.useState)(),r=(0,d.jsx)(`div`,{children:`Upload`}),i=e=>{e.length>0&&e[0].origin?n(URL.createObjectURL(e[0].origin)):n(void 0)};return(0,d.jsx)(l,{...e,listType:`picture-circle`,onChange:i,showUploadList:!1,children:t?(0,d.jsx)(`img`,{src:t,alt:`img`}):r})}},_={args:{listType:`picture-square`,onChange(e){console.log({files:e})},multiple:!0,children:(0,d.jsx)(`div`,{children:`Upload`})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Button>Click to Upload</Button>,
    onChange: files => console.log('Files changed:', files)
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [files, setFiles] = useState<UploadFile[]>(fileList);
    const handleFilesChange = (files: UploadFile[]) => {
      console.log({
        files
      });
      setFiles(files);
    };
    return <Upload {...args} fileList={files} onChange={handleFilesChange} multiple>
            <Button icon={<Icon name="Upload" />} iconPosition="end">
               Upload
            </Button>
         </Upload>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [imageUrl, setImageUrl] = useState<string>();
    const uploadButton = <div>Upload</div>;
    const handleChange = (files: UploadFile[]) => {
      if (files.length > 0 && files[0].origin) {
        setImageUrl(URL.createObjectURL(files[0].origin));
      } else {
        setImageUrl(undefined);
      }
    };
    return <Upload {...args} listType="picture-circle" onChange={handleChange} showUploadList={false}>
            {imageUrl ? <img src={imageUrl} alt="img" /> : uploadButton}
         </Upload>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    listType: 'picture-square',
    onChange(files) {
      console.log({
        files
      });
    },
    multiple: true,
    children: <div>Upload</div>
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Multiple`,`Avatar`,`PictureWall`]}))();export{g as Avatar,m as Default,h as Multiple,_ as PictureWall,v as __namedExportsOrder,f as default};