import { useMemo, useState } from 'react';
import { useIntl } from 'react-intl';

import { SReturnBook, SReturnBookWrapper } from './ReturnBook.styled';
import { WizardCard } from '@src/components/Wizard';

import { Login } from '@src/shared/Login';
import { Result } from '@src/shared/Result';
import { ChooseBook } from '@src/shared/ChooseBook';
import { TBook } from '@src/@types/request.types';

export function ReturnBook() {
  const { formatMessage } = useIntl();
  const [currentStep, setCurrentStep] = useState(0);
  const [book, setBook] = useState<TBook>();
  const [username, setUsername] = useState<string>('');

  const steps = useMemo(
    () => [
      {
        title: formatMessage({ id: 'return.book.choose.book' })
      },
      {
        title: formatMessage({ id: 'return.book.login' })
      }
    ],
    [formatMessage]
  );

  const renderSteps = useMemo(
    () => [
      <ChooseBook
        onFinish={(book) => {
          setBook(book);
          setCurrentStep((curr) => curr + 1);
        }}
      />,
      <Login
        onFinish={(e) => {
          setUsername(e.username);
          setCurrentStep((curr) => curr + 1);
        }}
        onBack={() => setCurrentStep((curr) => curr - 1)}
      />,
      <Result
        book={book}
        username={username}
        resultTitle={formatMessage({ id: 'return.book' })}
        resultDescription={formatMessage({ id: 'return.book.description' })}
      />
    ],
    [book, username]
  );

  return (
    <SReturnBookWrapper>
      <SReturnBook>
        <WizardCard
          title={formatMessage({ id: 'return.book.title' })}
          onClickBack={() => setCurrentStep((curr) => curr - 1)}
          onSubmit={() => setCurrentStep((curr) => curr + 1)}
          submitButtonText={
            currentStep === steps.length - 1
              ? formatMessage({ id: 'return.book.submit' })
              : formatMessage({ id: 'next' })
          }
          currentStep={currentStep}
          steps={steps}
        >
          {renderSteps[currentStep]}
        </WizardCard>
      </SReturnBook>
    </SReturnBookWrapper>
  );
}
