import { Button, Space, Typography } from 'antd';
import { useIntl } from 'react-intl';

import { useNavigate } from 'react-router-dom';

import books from '@src/assets/images/books.png';
import { SMain, SMainLeft, SImg } from './Main.styled';

export function Main() {
  const navigate = useNavigate();
  const { formatMessage } = useIntl();

  return (
    <SMain>
      <SMainLeft>
        <Typography.Title level={1} className='italic pl-12 pb-6'>
          Kiosk App
        </Typography.Title>
        <Space className='mt-3'>
          <Button
            type='primary'
            size='large'
            block
            onClick={() => navigate('borrow-book')}
          >
            {formatMessage({ id: 'borrow.book.title' })}
          </Button>
          <Button size='large' onClick={() => navigate('return-book')}>
            {formatMessage({ id: 'return.book.title' })}
          </Button>
        </Space>
      </SMainLeft>
      <div>
        <SImg src={books}></SImg>
      </div>
    </SMain>
  );
}
