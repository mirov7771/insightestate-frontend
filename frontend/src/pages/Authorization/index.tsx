import React, {FC, useEffect, useState} from "react";
import styles from "@/pages/Authorization/Authorization.module.scss";
import {Spacer} from "@/widgets/Spacer/Spacer";
import {StyledButton} from "@/widgets/Modal/styled";
import {useNavigate} from "react-router";

export const Authorization: FC = () => {
    const navigate = useNavigate();
    const [session, setSession] = useState<string | undefined | null>(localStorage.getItem('basicToken'))

    useEffect(() => {
        if (session && session.length > 2) {
            navigate(`listing?basicToken=${session}`)
        }
    }, [session]);
    return (
        <div className={styles.wrap}>
            <h4>Рациональные инвестиции в недвижимость Пхукета</h4>
            <Spacer height={20} width={100} />
            <p>Помогаем выбрать самый выгодный и надёжный объект инвестиций на основе анализа по более чем 100 параметрам</p>
            <Spacer height={20} width={100} />
            <StyledButton color="secondary" variant="contained" size="medium" href={"http://insight-estate.site:8081/login-lk"}>
                Войти
            </StyledButton>
        </div>
    )
}
