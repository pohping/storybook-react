import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastProvider } from '@/components/feedback/Toast/ToastProvider';
import { CustomerLogin } from './CustomerLogin';
import { MainLayout } from '@/features';

const clientId = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID;
const reCaptchaClient = import.meta.env.VITE_GOOGLE_RECAPTCHA_CLIENT;

const meta = {
   title: 'Pages/CustomerLogin',
   component: CustomerLogin,
   decorators: (Story) => (
      <GoogleReCaptchaProvider reCaptchaKey={reCaptchaClient}>
         <GoogleOAuthProvider clientId={clientId}>
            <ToastProvider>
               <MainLayout>
                  <Story />
               </MainLayout>
            </ToastProvider>
         </GoogleOAuthProvider>
      </GoogleReCaptchaProvider>
   ),
} satisfies Meta<typeof CustomerLogin>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
