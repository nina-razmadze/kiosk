import { useIntl } from 'react-intl';
import { useWatch } from 'antd/es/form/Form';
import { Button, Form, Select, Space } from 'antd';
import { SCategories, SFormItem, SCustomSelect } from './ChooseCategory.styled';
import { useCategories } from '../../../../hooks/useCategories';

type FormValues = {
  categoryId: number;
};

type ChooseCategoryProps = {
  onFinish?: (values: FormValues) => void;
};

export function ChooseCategory({ onFinish }: ChooseCategoryProps) {
  const { formatMessage } = useIntl();
  const [form] = Form.useForm();

  const { categories, categoriesLoading } = useCategories();
  const category = useWatch(['categoryId'], form);

  return (
    <SCategories>
      <Form<FormValues>
        form={form}
        name='borrow-category'
        className='w-full h-full flex justify-center items-center'
        onFinish={(values) => onFinish?.(values)}
      >
        <SFormItem name='categoryId'>
          <SCustomSelect
            placeholder={`${formatMessage({
              id: 'borrow.book.choose.category'
            })}`}
            loading={categoriesLoading}
          >
            <Select.Option value={null}>
              {formatMessage({ id: 'borrow.book.choose.category' })}
            </Select.Option>
            {categories?.map((category: any) => {
              return (
                <Select.Option value={category.id}>
                  {category.title === 'რომანი'
                    ? formatMessage({ id: 'borrow.book.choose.novel' })
                    : category.title === 'მხატვრული'
                    ? formatMessage({ id: 'borrow.book.choose.artistic' })
                    : category.title === 'მედიცინა'
                    ? formatMessage({ id: 'borrow.book.choose.medicine' })
                    : category.title === 'ბიზნეს ლიტერალურა'
                    ? formatMessage({ id: 'borrow.book.choose.business' })
                    : category.title}
                </Select.Option>
              );
            })}
          </SCustomSelect>
        </SFormItem>
      </Form>
      <Space>
        <Button
          htmlType='submit'
          form='borrow-category'
          disabled={!category}
          type='primary'
        >
          {formatMessage({ id: 'next' })}
        </Button>
      </Space>
    </SCategories>
  );
}
