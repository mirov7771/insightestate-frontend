import React, {ChangeEvent, FC, useEffect, useState} from "react";
import styles from "@/pages/SignUp/SignUp.module.scss";
import {LogoIcon} from "@/shared/assets/icons";
import {Spacer} from "@/widgets/Spacer/Spacer";
import {BaseField} from "@/widgets/BaseField/BaseField";
import {Button} from "@/shared/ui";
import {useNavigate} from "react-router";
import {localField} from "@/i18n/localField";
import {detailApi} from "@/widgets/Detail/api/detailApi";

export const SignUpEnd: FC = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState("");
    const [email, setEmail] = useState<string | undefined | null>();
    const [loading, setLoading] = useState(false);

    const onChangeCode = (e: ChangeEvent<HTMLInputElement>) => {
        const code = e.target.value;
        setCode(code);
    };

    const handleLogin = async () => {
        setLoading(true)
        const rs = await detailApi.signUpCheck(email!!, code)
        if (rs) navigate('/register')
        setLoading(false)
    }

    useEffect(() => {
        setEmail(localStorage.getItem("email"))
    }, []);

    return (
        <>
            <div className={`${styles.card} ${styles.cardContainer}`}>
                <div className={styles.profileImgCard}>
                    <LogoIcon />
                </div>
                <Spacer height={8} width={100}/>
                <BaseField
                    onChange={onChangeCode}
                    value={code}
                    name="code"
                    label={localField('code')}
                />
                <Spacer height={20} width={100}/>
                <Button
                    onClick={handleLogin}
                    wide
                    size={"l"}
                    loading={loading}
                >
                    {localField('confirm_button')}
                </Button>
                <Spacer height={20} width={100}/>
                <div className={styles.centerRegistration}>
                    <a href={"/login"} className="button">
                        {localField('log_in')}
                    </a>
                </div>
            </div>
        </>
    )
}
