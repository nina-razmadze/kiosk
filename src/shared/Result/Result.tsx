import { useIntl } from 'react-intl';
import { Alert, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { SResult } from './Result.styled';
import { TBook } from '@src/@types/request.types';

type ResultProps = {
  book?: TBook;
  username?: string;
  resultTitle: string;
  resultDescription: string;
};

export function Result({
  book,
  username,
  resultTitle,
  resultDescription
}: ResultProps) {
  const navigate = useNavigate();
  const { formatMessage } = useIntl();

  return (
    <SResult>
      <Alert
        message={resultTitle}
        type='success'
        description={`${username} ${resultDescription} '${book?.title}'`}
      />
      <Button className='mt-3' onClick={() => navigate('/')}>
        {formatMessage({ id: 'go.to.main' })}
      </Button>
    </SResult>
  );
}
