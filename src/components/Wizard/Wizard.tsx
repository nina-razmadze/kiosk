import { PropsWithChildren } from 'react';
import { Steps, StepProps, Typography } from 'antd';
import { SWizard, SWizardBorder, SWizardContent } from './Wizard.styled';

type WizardProps = {
  title: string;
  currentStep: number;
  onSubmit: () => void;
  onClickBack: () => void;
  steps: StepProps[];
  submitButtonText?: string;
};

export function WizardCard({
  title,
  steps,
  children,
  currentStep
}: PropsWithChildren<WizardProps>) {
  return (
    <SWizard>
      <Typography.Title level={3}>{title}</Typography.Title>
      <SWizardBorder />
      <Steps current={currentStep} items={steps} />
      <SWizardContent>{children}</SWizardContent>
    </SWizard>
  );
}
