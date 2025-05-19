import { ChangeEvent, FC, FormEventHandler, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate, useLocation, Link } from 'react-router';
import { LayoutForm } from '@/widgets/RegistrationLayout/LayoutForm/LayoutForm';
import { Button, Input, Text } from '@/shared/ui';

export const ResetPasswordCode: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login = '' } = location.state || {};
  const { formatMessage } = useIntl();
  const [code, setCode] = useState('');

  const handleChangeCode = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLButtonElement | HTMLFormElement> = (e) => {
    e.preventDefault();
    if (code && login) {
      navigate('/reset-password/new', { state: { login, code } });
    }
  };

  return (
    <LayoutForm
      header={formatMessage({ id: 'reset.password' })}
      headerHint={
        <>
          <FormattedMessage id="login.signUpText" values={{ email: location.state?.login }} />
          <br />
          <Link to="/reset-password">{formatMessage({ id: 'login.notYou' })}</Link>
        </>
      }
      form={
        <>
          <Input value={code} onChange={handleChangeCode} placeholder="Код из письма" />
          <Button wide size={'l'} type="submit" onSubmit={handleSubmit}>
            <Text variant="heading4" align="center" as="span">
              {formatMessage({ id: 'login.continue' })}
            </Text>
          </Button>
        </>
      }
      onSubmit={handleSubmit}
    />
  );
};
