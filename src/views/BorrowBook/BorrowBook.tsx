import { useState, useMemo } from 'react';
import { useIntl } from 'react-intl';

import { SBorrowBook, SBorrowBookWrapper } from './BorrowBook.styled';
import { WizardCard } from '@src/components/Wizard';

import { ChooseBook } from '../../shared/ChooseBook';
import { ChooseCategory } from './Steps/ChooseCategory';
import { Login } from '../../shared/Login';
import { Result } from '../../shared/Result';
import { TBook } from '@src/@types/request.types';

export function BorrowBook() {
  const { formatMessage } = useIntl();
  const [currentStep, setCurrentStep] = useState(0);

  const [categoryId, setCategoryId] = useState<number>();
  const [book, setBook] = useState<TBook>();
  const [username, setUsername] = useState<string>();

  const renderSteps = useMemo(
    () => [
      <ChooseCategory
        onFinish={(e) => {
          setCategoryId(e.categoryId);
          setCurrentStep((curr) => curr + 1);
        }}
      />,
      <ChooseBook
        onBack={() => setCurrentStep((curr) => curr - 1)}
        categoryId={categoryId}
        onFinish={(book) => {
          setBook(book);
          setCurrentStep((curr) => curr + 1);
        }}
      />,
      <Login
        onBack={() => setCurrentStep((curr) => curr - 1)}
        onFinish={(e) => {
          setUsername(e.username);
          setCurrentStep((curr) => curr + 1);
        }}
      />,
      <Result
        book={book}
        username={username}
        resultTitle={formatMessage({ id: 'borrow.book' })}
        resultDescription={formatMessage({ id: 'borrow.book.description' })}
      />
    ],
    [categoryId, book, username]
  );

  const steps = useMemo(
    () => [
      {
        title: formatMessage({ id: 'borrow.book.category' })
      },
      {
        title: formatMessage({ id: 'borrow.book.books' })
      },
      {
        title: formatMessage({ id: 'borrow.book.login' })
      }
    ],
    [formatMessage]
  );

  return (
    <SBorrowBookWrapper>
      <SBorrowBook>
        <WizardCard
          title={formatMessage({ id: 'borrow.book.title' })}
          submitButtonText={
            currentStep === steps.length - 1
              ? formatMessage({ id: 'borrow.book.submit' })
              : formatMessage({ id: 'next' })
          }
          onClickBack={() => setCurrentStep((curr) => curr - 1)}
          onSubmit={() => setCurrentStep((curr) => curr + 1)}
          currentStep={currentStep}
          steps={steps}
        >
          {renderSteps[currentStep]}
        </WizardCard>
      </SBorrowBook>
    </SBorrowBookWrapper>
  );
}
