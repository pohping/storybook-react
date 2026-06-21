import type { Meta, StoryObj } from '@storybook/react-vite';
import { Carousel } from './Carousel';

const meta = {
   title: 'Components/Surfaces/Carousel',
   component: Carousel,
   tags: ['autodocs'],
   args: { height: '70vh' },
   argTypes: {
      height: { control: 'text' },
      autoPlayInterval: { control: 'text' },
   },
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

const ImageSlide = ({ url }: { url: string }) => (
   <div
      key="1"
      style={{
         height: '100%',
         backgroundImage: `url(${url})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
      }}
   />
);

export const Default: Story = {
   args: {
      children: [
         <ImageSlide url="https://images.unsplash.com/vector-1764923773074-322ad8215620?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />,
         <ImageSlide url="https://images.unsplash.com/vector-1771862423393-3aa02671712f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />,
         <ImageSlide url="https://images.unsplash.com/vector-1760049759258-405c3caa9697?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />,
      ],
   },
};

export const NoAutoPlay: Story = {
   args: {
      autoPlayInterval: false,
      children: [
         <ImageSlide url="https://images.unsplash.com/vector-1764923773074-322ad8215620?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />,
         <ImageSlide url="https://images.unsplash.com/vector-1771862423393-3aa02671712f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />,
         <ImageSlide url="https://images.unsplash.com/vector-1760049759258-405c3caa9697?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />,
      ],
   },
};
