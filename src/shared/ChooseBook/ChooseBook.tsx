import { useState } from 'react';
import { useIntl } from 'react-intl';
import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { SChooseBook } from './ChooseBook.styled';
import { useBooks } from '@src/hooks/useBooks';
import { TBook } from '@src/@types/request.types';

type ChooseBookProps = {
  categoryId?: number;
  onFinish: (e: TBook) => void;
  onBack?: () => void;
};

export function ChooseBook({ categoryId, onBack, onFinish }: ChooseBookProps) {
  const { formatMessage } = useIntl();

  const columns: ColumnsType<TBook> = [
    {
      title: formatMessage({ id: 'choose.book.table.book.title' }),
      dataIndex: 'title'
    },
    {
      title: formatMessage({ id: 'choose.book.table.book.author' }),
      dataIndex: 'author'
    }
  ];

  const { books, booksLoading } = useBooks({ categoryId });
  const [book, setBook] = useState<TBook>();

  return (
    <SChooseBook>
      <Table
        className='w-full h-full mt-3'
        rowSelection={{
          type: 'radio',
          onSelect: (selected) => setBook(selected)
        }}
        columns={columns}
        dataSource={books}
        loading={booksLoading}
        rowKey='id'
        pagination={{
          total: books.length,
          pageSize: 6,
          position: ['bottomLeft']
        }}
      />
      <Space>
        {onBack && (
          <Button form='borrow-book' onClick={onBack}>
            {formatMessage({ id: 'back' })}
          </Button>
        )}
        <Button
          type='primary'
          disabled={!book?.id}
          onClick={() => book && onFinish?.(book)}
        >
          {formatMessage({ id: 'next' })}
        </Button>
      </Space>
    </SChooseBook>
  );
}
