import { ChangeEvent, FC, FormEventHandler, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { detailApi } from '@/widgets/Detail/api/detailApi';
import styles from '@/pages/SignUpEnd/SignUpEnd.module.scss';
import { LogoIcon } from '@/shared/assets/icons';
import { Button, Input, Text } from '@/shared/ui';
import { localField } from '@/i18n/localField';

export const ResetPassword: FC = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const onChangeCode = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value.trim());
  };

  const handleLogin: FormEventHandler<HTMLButtonElement | HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (email && code) {
      try {
        setLoading(true);
        const rs = await detailApi.signUpCheck(email, code);

        if (rs) navigate('/register');
      } catch (e) {
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    setEmail(localStorage.getItem('email') || '');
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <LogoIcon />
      </div>
      <Text variant="heading2" align="center" className={styles.header}>
        С возвращением
      </Text>
      <Text variant="body1" as="p" align="center" className={styles.description}>
        Мы отправили временный код на <b>{email}</b>. Если письмо не пришло, проверьте папку «Спам»
        <br />
        <Link to="/sign-up">Не вы?</Link>
      </Text>
      <form className={styles.form} onSubmit={handleLogin}>
        <Input onChange={onChangeCode} value={code} name="code" placeholder={localField('code')} />
        <Button onClick={handleLogin} wide size={'l'} loading={loading}>
          <Text variant="heading4" align="center" as="span">
            {localField('confirm_button')}
          </Text>
        </Button>
      </form>
      <Text variant="caption2" as="p" className={styles.description} align="center">
        {localField('footer_info_text')}
      </Text>
      <Text variant="body1" as="p" className={styles.signUp} align="center">
        Уже есть аккаунт?{' '}
        <Link to={'/login'} className="button">
          {localField('log_in')}
        </Link>
      </Text>
    </div>
  );
};
