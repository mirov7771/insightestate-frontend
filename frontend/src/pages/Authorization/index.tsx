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
            navigate(`listing`)
        }
    }, [session]);
    return (
        <>
            <div className={styles.big}>
                <video
                    data-src="https://cdn.prod.website-files.com/67bf1616a76ce5a5f0c0fff7%2F67ce9e80a87eb13baf9d2954_1-transcode.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    data-lazy-visible=""
                    className={styles.video}
                    data-ll-status="loaded"
                    src="https://cdn.prod.website-files.com/67bf1616a76ce5a5f0c0fff7%2F67ce9e80a87eb13baf9d2954_1-transcode.mp4">
                </video>
                <div className={styles.wrap}>
                    <Spacer height={140} width={100}/>
                    <h4>Рациональные инвестиции в недвижимость Пхукета</h4>
                    <Spacer height={20} width={100}/>
                    <p>Помогаем выбрать самый выгодный и надёжный объект инвестиций на основе анализа по более чем 100
                        параметрам</p>
                    <Spacer height={40} width={100}/>
                    <div className={styles.button}>
                        <StyledButton
                            fullWidth={false}
                            color="secondary"
                            variant="contained"
                            size="small"
                            href={"/login"}>
                            Войти
                        </StyledButton>
                    </div>
                </div>
            </div>
        </>
    )
}
