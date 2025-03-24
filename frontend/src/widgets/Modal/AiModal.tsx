import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { TModalProps } from './types';
import {
  StyledSwipeableDrawer,
  StyledWrapperProgress,
  StyledUpperWrapperProgress,
  StyledButton, StyledWrapperText,
} from './styled';
import { Spacer } from '../Spacer/Spacer';
import { Text } from '../Text/Text';
import {BaseField} from "@/widgets/BaseField/BaseField";
import {useNavigate} from "react-router";

export const AiModal: FC<TModalProps> = ({
  onClose,
  open,
  anchor,
  onOpen
}) => {
  const navigate = useNavigate();
  const [isNew, setIsNew] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleIsNew = () => {
    setIsNew(true);
  };
  const goTo = (e: ChangeEvent) => {
    const encodedString = Buffer.from(name).toString('base64');
    navigate(`/ai-listing?request=${encodedString}`)
    onClose(e)
  }

  useEffect(() => {
    setIsNew(false)
  }, [open]);

  return (
    <>
      <StyledSwipeableDrawer
        onOpen={onOpen}
        open={open}
        onClose={onClose}
        anchor={anchor}
        disableSwipeToOpen
      >
        <StyledUpperWrapperProgress>
          <StyledWrapperProgress>
            <Spacer width="100%" height={8} />
            <Spacer width="100%" height={8} />
            <Text size="xl" align="center" colorTheme={'black200'} isBold>
              AI подборщик
            </Text>
            <Spacer width="100%" height={8} />
            {
              !isNew ?
                  <StyledWrapperText>
                    <Text size="m" align="left" colorTheme={'black200'}>
                      Мы разработали AI подборщик который поможет вам с рутинным занятием подбора нужных объектов для ваших клиентов.
                      <br/>
                      <br/>
                      Вам достаточно скинуть описание чего желает клиент в нашего AI подборщика и через пару минут вы получите сформированную подборку объектов которую можно сразу отправлять клиенту.
                    </Text>
                  </StyledWrapperText> :
                  <BaseField
                      onChange={onChangeName}
                      value={name}
                      name="name"
                      rows={7}
                      multiline={true}
                      placeholder='Напишите пожелания вашего клиента: количество спален, бюджет, наличие спортзала, бассейна или УК, время до пляжа и любые другие детали которые помогут сделать точную подборку'
                  />
            }
          </StyledWrapperProgress>
        </StyledUpperWrapperProgress>
        <Spacer width="100%" height={24} />
        {
          !isNew ?
              <StyledButton color="secondary" variant="contained" size="medium" onClick={handleIsNew}>
                Подобрать на основе описания
              </StyledButton> :
              <StyledButton color="secondary" variant="contained" size="medium" onClick={goTo}>
                Сформировать подборку
              </StyledButton>
        }
        <Spacer width="100%" height={8} />
      </StyledSwipeableDrawer>
    </>
  );
};
