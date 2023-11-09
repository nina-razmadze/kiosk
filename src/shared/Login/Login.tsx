import { useIntl } from 'react-intl';
import { Form, Input, Space, Button, Alert } from 'antd';

import { useLogin } from './hooks/useLogin/useLogin';
import { useEffect, useState } from 'react';

export type FormValues = {
  username?: string;
  password?: string;
};

type LoginProps = {
  onBack: () => void;
  onFinish: (userData: { username: string; password: string }) => void;
};

export function Login({ onBack, onFinish }: LoginProps) {
  const [form] = Form.useForm();
  const { formatMessage } = useIntl();
  const [formValues, setFormValues] = useState<FormValues>({});
  const [error, setError] = useState<string>('');

  const { userData } = useLogin({ formValues });

  useEffect(() => {
    if (userData?.length > 0) {
      onFinish(userData[0]);
      setError('');
    } else if (userData?.length === 0) {
      setError('Please enter valid User');
    }
  }, [userData, onFinish]);

  return (
    <div className='flex flex-col w-full h-full items-end'>
      <Form
        name='login'
        form={form}
        autoComplete='off'
        onFinish={(e) => setFormValues(e)}
        initialValues={{ remember: true }}
        className='w-full h-full flex flex-col justify-center items-center'
      >
        <Form.Item<FormValues>
          name='username'
          rules={[
            {
              required: true,
              message: formatMessage({ id: 'username.required.message' })
            }
          ]}
        >
          <Input
            placeholder={`${formatMessage({
              id: 'borrow.book.username'
            })}`}
          />
        </Form.Item>

        <Form.Item<FormValues>
          name='password'
          rules={[
            {
              required: true,
              message: formatMessage({ id: 'password.required.message' })
            }
          ]}
        >
          <Input.Password
            placeholder={`${formatMessage({
              id: 'borrow.book.password'
            })}`}
          />
        </Form.Item>
        {error && <Alert type='error' description={error} />}
      </Form>
      <Space>
        <Button form='borrow-book' onClick={onBack}>
          {formatMessage({ id: 'back' })}
        </Button>
        <Button htmlType='submit' form='login' type='primary'>
          {formatMessage({ id: 'next' })}
        </Button>
      </Space>
    </div>
  );
}
