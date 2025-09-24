import { ChangeEvent, FC, FormEventHandler, useEffect, useState } from 'react';
import styles from './Register.module.scss';
import { Button, Input, PhoneInput, SelectCountry, Text, useNotifications } from '@/shared/ui';
import { Link, useNavigate } from 'react-router';
import { FormattedMessage, useIntl } from 'react-intl';
import { detailApi } from '@/widgets/Detail/api/detailApi';
import { getNavigate } from '@/pages/Authorization';
import { LayoutForm } from '@/widgets/RegistrationLayout/LayoutForm/LayoutForm';
import { IconEye, IconEyeClose } from '@/shared/assets/icons';
import { AutocompleteProps } from '@mui/material';
import { FormErrors, validate, validationPhone } from '@/pages/Register/validations';
import { CountryData } from 'react-phone-input-2';
import { isAxiosError } from 'axios';

type Country = {
  countryCode: string;
  dialCode: string;
  format: string;
  iso2: string;
  name: string;
  priority: number;
  regions: string[];
};

const Register: FC = () => {
  const { formatMessage } = useIntl();
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState<'password' | 'text'>('password');
  const [phone, setPhone] = useState('');
  const [countryInfo, setCountryInfo] = useState<Country>();
  const [location, setLocation] = useState('');
  const [formErrors, setFormErrors] = useState<FormErrors | null>();

  const [whatsUp, setWhatsUp] = useState('');
  const [tgName, setTgName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value;

    setFormErrors((prev) => ({ ...prev, username: '' }));
    setUsername(username);
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.trim());
    setFormErrors((prev) => ({ ...prev, email: '' }));
  };

  const onChangeLocation: AutocompleteProps<string, undefined, true, undefined>['onChange'] = (
    event,
    value,
    reason,
    details
  ) => {
    console.log({ value, reason });
    setFormErrors((prev) => ({ ...prev, location: '' }));
    setLocation(value);
  };

  const onChangePhone = (e: string) => {
    setPhone(e);
    setFormErrors((prev) => ({ ...prev, phone: '' }));
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;

    setFormErrors((prev) => ({ ...prev, password: '' }));

    setPassword(password);
  };

  const onChangeWhatsUp = (e: ChangeEvent<HTMLInputElement>) => {
    const whatsUp = e.target.value;

    setWhatsUp(whatsUp);
  };

  const onChangeTgName = (e: ChangeEvent<HTMLInputElement>) => {
    const tgName = e.target.value;

    setTgName(tgName);
  };

  const handleLogin: FormEventHandler<HTMLButtonElement | HTMLFormElement> = async (e) => {
    e.preventDefault();
    const errors = validate({ email, password, location, username }, formatMessage);
    const validatePhone = () => {
      if (!phone) {
        return formatMessage({ id: 'form.error.phone.required' });
      }

      if (!(validationPhone as Function)(phone, countryInfo as CountryData)) {
        return formatMessage({ id: 'form.error.phone.invalid' });
      }

      return '';
    };

    setFormErrors({ ...errors });

    if (!Object.values(errors).some((val) => val)) {
      setLoading(true);
      try {
        const rs = await detailApi.register(
          username,
          email,
          password,
          phone,
          location,
          whatsUp,
          tgName,
          profileImage
        );

        if (rs) {
          getNavigate()
            .then((r) => navigate(r))
            .catch((e) => {
              console.log(e);
              navigate('/create-collection');
            });
        }
      } catch (e) {
        if (isAxiosError(e)) {
          notify({
            message: e.response?.data.status?.description,
            severity: 'error',
            duration: 5000,
          });
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const onChangeProfileImage = async (e: ChangeEvent<HTMLInputElement>) => {
    debugger;
    const profileImage = e.target.files;
    const imageUrl = await detailApi.uploadProfileImage(profileImage!![0]);

    setProfileImage(imageUrl!!);
  };

  useEffect(() => {
    setEmail(localStorage.getItem('email') || '');
  }, []);

  return (
    <LayoutForm
      header={formatMessage({ id: 'login.welcome' })}
      headerHint={
        <Text variant="body1" as="p" align="center" className={styles.description}>
          {formatMessage({ id: 'login.details' })}
        </Text>
      }
      form={
        <>
          <Input
            onChange={onChangeUsername}
            value={username}
            name="username"
            placeholder={formatMessage({ id: 'surname_name' })}
            error={formErrors?.username}
            yClass=".ym-record-key"
          />
          <Input
            name="email"
            value={email}
            onChange={onChangeEmail}
            placeholder={formatMessage({ id: 'login.emailPlaceholder' })}
            error={formErrors?.email}
            yClass=".ym-record-key"
          />
          <PhoneInput
            value={phone}
            onChange={onChangePhone}
            placeholder={formatMessage({ id: 'phone_number' })}
            searchPlaceholder="Search"
            enableSearch
            autocompleteSearch
            disableSearchIcon
            inputClass={".ym-record-key"}
            defaultErrorMessage={formErrors?.phone}
            // error={formErrors?.phone}
            isValid={(value, country) => {
              setCountryInfo(country as Country);
              setPhone(value);

              return false;
            }}
          />
          <SelectCountry
            onChange={(event, value, reason) => onChangeLocation(event, value as string, reason)}
            value={location}
            // error={formErrors?.location}
          />
          {/*<Input*/}
          {/*  name="whatsUp"*/}
          {/*  value={whatsUp}*/}
          {/*  onChange={onChangeWhatsUp}*/}
          {/*  placeholder={formatMessage({ id: 'wa' })}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*  name="tgName"*/}
          {/*  value={tgName}*/}
          {/*  onChange={onChangeTgName}*/}
          {/*  placeholder={formatMessage({ id: 'tg' })}*/}
          {/*/>*/}
          {/*<Button*/}
          {/*  onClick={() => document.getElementById('profileImage')!!.click()}*/}
          {/*  size="s"*/}
          {/*  wide*/}
          {/*  type="button"*/}
          {/*>*/}
          {/*  <Text variant="heading5" align="center" as="span">*/}
          {/*    {formatMessage({ id: 'photo' })}*/}
          {/*  </Text>*/}
          {/*</Button>*/}
          {/*<input*/}
          {/*  id="profileImage"*/}
          {/*  style={{*/}
          {/*    display: 'none',*/}
          {/*  }}*/}
          {/*  accept="image/*"*/}
          {/*  type="file"*/}
          {/*  name="profileImage"*/}
          {/*  onChange={onChangeProfileImage}*/}
          {/*/>*/}
          {/*{profileImage ? (*/}
          {/*  <img src={profileImage} alt="profileImage" className={styles.profileIcon} />*/}
          {/*) : (*/}
          {/*  <></>*/}
          {/*)}*/}
          <Input
            type={showPassword}
            name="password"
            value={password}
            onChange={onChangePassword}
            placeholder={formatMessage({ id: 'password' })}
            icon={showPassword === 'text' ? <IconEye /> : <IconEyeClose />}
            iconOnClick={toggleShowPassword}
            error={formErrors?.password}
          />

          <Button onClick={handleLogin} wide size={'l'} loading={loading} type="submit">
            <Text variant="body1" bold align="center" as="span">
              {formatMessage({ id: 'login.continue' })}
            </Text>
          </Button>
        </>
      }
      onSubmit={handleLogin}
      bottomText={
        <>
          <Text variant="body1" as="p" className={styles.signUp} align="center">
            {formatMessage({ id: 'politics_1' })}&nbsp;
            <a
              href="https://www.insightestate.com/privacy"
              target="_blank"
              className="button"
              rel="noreferrer"
              style={{ whiteSpace: 'nowrap' }}
            >
              {formatMessage({ id: 'politics_2' })}
            </a>
          </Text>

          <Text variant="body1" as="p" className={styles.signUp} align="center">
            <FormattedMessage
              id="login.signIn"
              values={{ a: (chunk) => <Link to="/login">{chunk}</Link> }}
            />
          </Text>
        </>
      }
    />
  );
};

export default Register;
