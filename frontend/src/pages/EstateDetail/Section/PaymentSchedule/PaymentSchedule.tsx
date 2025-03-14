import { Section } from '@/pages/EstateDetail/Section/Section';
import payment from './payment.svg';
import styles from './PaymentSchedule.module.scss';
import {Button} from "@/shared/ui";
import React, {FC, useState} from "react";
import {BaseUserModal} from "@/widgets/Modal/BaseUserModal";

export const PaymentSchedule: FC<{
    id: string,
    name: string
}> = ({
    id,
    name
}) => {
  const token = localStorage.getItem('basicToken')
  const [baseUserModal, setBaseUserModal] = useState(false)
  const [modalActive, setModalActive] = useState(false)
  const handleOpenBaseUserModal = () => {
      setBaseUserModal(true)
  }

  const handleCloseBaseUserModal = () => {
      setBaseUserModal(false)
  }

  return (
  <>
  <Section title="График платежей" rightSide={
      <Button
          disabled={token === null || token === undefined || token === ''}
          onClick={handleOpenBaseUserModal}>
          Помощь с клиентом
      </Button>
  }>
    <div className={styles.wrapper}>
      <img src={payment} alt="payment" />
    </div>
  </Section>
      <BaseUserModal
          open={baseUserModal}
          onClose={handleCloseBaseUserModal}
          onOpen={handleOpenBaseUserModal}
          anchor='bottom'
          id={id}
          object={name}
          token={token!!}
      />
  </>
  );
};
