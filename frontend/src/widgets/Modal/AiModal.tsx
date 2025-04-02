import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { TModalProps } from './types';
import {
  StyledSwipeableDrawer,
  StyledWrapperProgress,
  StyledUpperWrapperProgress,
  StyledButton,
  StyledWrapperText,
} from './styled';
import { Spacer } from '../Spacer/Spacer';
import { Text } from '../Text/Text';
import { BaseField } from '@/widgets/BaseField/BaseField';
import { useNavigate } from 'react-router';
import { isMobile } from 'react-device-detect';
import {localField} from "@/i18n/localField";

export const AiModal: FC<TModalProps> = ({ onClose, open, anchor, onOpen }) => {
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

    navigate(`/ai-listing?request=${encodedString}`);
    onClose(e);
  };

  useEffect(() => {
    setIsNew(false);
  }, [open]);

  return (
    <>
      <StyledSwipeableDrawer
        onOpen={onOpen}
        open={open}
        onClose={onClose}
        anchor={anchor}
        disableSwipeToOpen
        bottom={30}
        isMobile={isMobile}
      >
        <StyledUpperWrapperProgress>
          <StyledWrapperProgress>
            <Spacer width="100%" height={8} />
            <Spacer width="100%" height={8} />
            <Text size="xl" align="center" colorTheme={'black200'} isBold>
              {localField('ai_title')}
            </Text>
            <Spacer width="100%" height={8} />
            {!isNew ? (
              <StyledWrapperText>
                <Text size="m" align="left" colorTheme={'black200'}>
                  {localField('ai_header')}
                  <br />
                  <br />
                  {localField('ai_body')}
                </Text>
              </StyledWrapperText>
            ) : (
              <BaseField
                onChange={onChangeName}
                value={name}
                name="name"
                rows={7}
                multiline={true}
                placeholder={localField('ai_label')}
              />
            )}
          </StyledWrapperProgress>
        </StyledUpperWrapperProgress>
        <Spacer width="100%" height={24} />
        {!isNew ? (
          <StyledButton color="secondary" variant="contained" size="medium" onClick={handleIsNew}>
            {localField('ai_button_1')}
          </StyledButton>
        ) : (
          <StyledButton color="secondary" variant="contained" size="medium" onClick={goTo}>
            {localField('ai_button_2')}
          </StyledButton>
        )}
        <Spacer width="100%" height={8} />
      </StyledSwipeableDrawer>
    </>
  );
};
