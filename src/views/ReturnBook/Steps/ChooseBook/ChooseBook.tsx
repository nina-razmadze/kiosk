import { useIntl } from 'react-intl';
import { Select, Form, Button } from 'antd';
import { useWatch } from 'antd/es/form/Form';
import { useBooks } from '@src/hooks/useBooks';

type FormValues = { bookId: number };

type ChooseBookProps = {
  onFinish: (e: FormValues) => void;
};

export function ChooseBook({ onFinish }: ChooseBookProps) {
  const [form] = Form.useForm();
  const { formatMessage } = useIntl();

  const { books, booksLoading } = useBooks({});

  const book = useWatch(['bookId'], form);

  return (
    <div className='flex flex-col w-full h-full items-end'>
      <Form<FormValues>
        form={form}
        name='borrow-book'
        className='w-full h-full flex justify-center items-center'
        onFinish={(values) => onFinish?.(values)}
      >
        <Form.Item name='bookId'>
          <Select placeholder='Choose book' loading={booksLoading}>
            <Select.Option value={null}>Choose Book</Select.Option>
            {books?.map((book: any) => {
              return (
                <Select.Option value={book.id}>{book.title}</Select.Option>
              );
            })}
          </Select>
        </Form.Item>
      </Form>
      <Button
        htmlType='submit'
        form='borrow-book'
        disabled={!book}
        type='primary'
      >
        {formatMessage({ id: 'next' })}
      </Button>
    </div>
  );
}
