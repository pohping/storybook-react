import { useCallback, useState } from 'react';
import { useGoogleLogin, type TokenResponse } from '@react-oauth/google';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Icon, Text } from '@/components/data-display';
import { Button, Form, type FormProps } from '@/components/general';
import { PasswordInput, TextInput } from '@/components/inputs';
import { Container, Divider } from '@/components/layout';
import { useGoogleAuthMutation, useLoginMutation } from '@/services/auth-api';
import { isApiError } from '@/utils';
import styles from './Customer.module.scss';
import { useToast } from '@/components/feedback/Toast/hooks/use-toast';

const clientId = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID;

export const CustomerLogin = () => {
   const [googleAuth] = useGoogleAuthMutation();
   const [login] = useLoginMutation();
   const googleLogin = useGoogleLogin({
      onSuccess: handleGoogleLoginSuccess,
   });

   const [reCaptchaToken, setReCaptchaToken] = useState<string>();
   const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

   const toast = useToast();

   function handleGoogleLoginSuccess({ access_token }: TokenResponse) {
      if (!clientId)
         throw new Error('VITE_GOOGLE_OAUTH_CLIENT_ID is not defined');

      googleAuth({
         clientId,
         accessToken: access_token,
      });
   }

   const handleGoogleLogin = () => googleLogin();

   const handleVerify = useCallback(
      (token: string) => {
         setReCaptchaToken(token);
      },
      [refreshReCaptcha],
   );

   const handleFormSubmit: FormProps['onSubmit'] = async ({
      values,
      errors,
   }) => {
      if (errors) return;

      setRefreshReCaptcha((v) => !v);
      try {
         await login({ ...values, reCaptchaToken }).unwrap();
      } catch (err) {
         if (isApiError(err)) {
            toast('Login failed. Please try again.', 'error');
            // setErrMsg(err.data.errors[0].detail || null);
         }
      }
   };

   return (
      <Container className="mt-6">
         <div className={styles.formWrapper}>
            <Text variant="h2" align="center">
               Customer Login
            </Text>
            <Form
               orientation="vertical"
               className="mt-5"
               onSubmit={handleFormSubmit}
            >
               <Form.Item
                  label="Email Address"
                  name="email"
                  constraints={[
                     {
                        required: true,
                        message: 'Email address is required.',
                     },
                  ]}
               >
                  <TextInput placeholder="Email Address" />
               </Form.Item>
               <Form.Item
                  label="Password"
                  name="password"
                  constraints={[
                     {
                        required: true,
                        message: 'Email address is required.',
                     },
                  ]}
               >
                  <PasswordInput placeholder="Password" />
               </Form.Item>
               <Form.Item>
                  <Button fullWidth>Log In</Button>
               </Form.Item>
            </Form>
            <Divider className="mt-3" />
            <Text align="center" className="mt-3">
               Already have an account? <Button variant="link">Sign In</Button>
            </Text>
            <Button
               className="mt-5"
               fullWidth
               iconPosition="start"
               variant="secondary"
               icon={<Icon name="Google" />}
               onClick={handleGoogleLogin}
            >
               Sign in with Google
            </Button>
         </div>
         <GoogleReCaptcha
            onVerify={handleVerify}
            refreshReCaptcha={refreshReCaptcha}
         />
      </Container>
   );
};
