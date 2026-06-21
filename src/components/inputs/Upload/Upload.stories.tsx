import type { Meta, StoryObj } from '@storybook/react-vite';
import { Upload } from './Upload';
import { useState } from 'react';
import type { UploadFile } from './Upload.types';
import { Button } from '@/components/general';
import { Icon } from '@/components/data-display';

const meta = {
   component: Upload,
   title: 'Components/Inputs/Upload',
   tags: ['autodocs'],
   argTypes: {
      multiple: { control: 'boolean' },
      maxFileSizeMB: { control: 'number' },
      accept: { control: 'text' },
      disabled: { control: 'boolean' },
      showUploadList: { control: 'boolean' },
   },
} satisfies Meta<typeof Upload>;

export default meta;

type Story = StoryObj<typeof meta>;

const fileList = [
   {
      uid: '1',
      name: 'image1.jpg',
      url: 'https://cdn.pixabay.com/photo/2023/11/27/15/41/cat-8415620_1280.jpg',
   },
   {
      uid: '2',
      name: 'image2.jpg',
      url: 'https://cdn.pixabay.com/photo/2024/04/17/17/02/box-8702500_1280.jpg',
   },
   {
      uid: '3',
      name: 'image3.jpg',
      url: 'https://cdn.pixabay.com/photo/2023/11/24/18/53/cat-8410504_1280.jpg',
   },
   {
      uid: '4',
      name: 'image4.jpg',
      url: 'https://cdn.pixabay.com/photo/2023/11/24/18/53/cat-8410506_1280.jpg',
   },
   {
      uid: '5',
      name: 'image5.jpg',
      url: 'https://cdn.pixabay.com/photo/2023/08/19/19/59/cat-8201133_1280.jpg',
   },
];

export const Default: Story = {
   args: {
      children: <Button>Click to Upload</Button>,
      onChange: (files) => console.log('Files changed:', files),
   },
};

export const Multiple: Story = {
   render: (args) => {
      const [files, setFiles] = useState<UploadFile[]>(fileList);

      const handleFilesChange = (files: UploadFile[]) => {
         console.log({ files });
         setFiles(files);
      };

      return (
         <Upload
            {...args}
            fileList={files}
            onChange={handleFilesChange}
            multiple
         >
            <Button icon={<Icon name="Upload" />} iconPosition="end">
               Upload
            </Button>
         </Upload>
      );
   },
};

export const Avatar: Story = {
   render: (args) => {
      const [imageUrl, setImageUrl] = useState<string>();

      const uploadButton = <div>Upload</div>;

      const handleChange = (files: UploadFile[]) => {
         if (files.length > 0 && files[0].origin) {
            setImageUrl(URL.createObjectURL(files[0].origin));
         } else {
            setImageUrl(undefined);
         }
      };

      return (
         <Upload
            {...args}
            listType="picture-circle"
            onChange={handleChange}
            showUploadList={false}
         >
            {imageUrl ? <img src={imageUrl} alt="img" /> : uploadButton}
         </Upload>
      );
   },
};

export const PictureWall: Story = {
   args: {
      listType: 'picture-square',
      onChange(files) {
         console.log({ files });
      },
      multiple: true,
      children: <div>Upload</div>,
   },
};
