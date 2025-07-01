import {FC, useEffect, useState} from "react";
import styles from './MainMenu.module.scss';
import {detailApi} from "@/widgets/Detail/api/detailApi";
import {useIntl} from "react-intl";
import {BestObjects, Beta, Collections, Objects, Units} from "@/shared/assets/icons";
import {Spacer} from "@/widgets/Spacer/Spacer";

const MainMenu: FC = () => {
    const { formatMessage } = useIntl();
    const [collections, setCollections] = useState(0)
    const [units, setUnits] = useState(0)
    const [objects, setObjects] = useState(0)
    const [bestObjects, setBestObjects] = useState(0)

    useEffect(() => {
        detailApi.mainInfo(localStorage.getItem('userId')!!)
            .then((r) => {
                setBestObjects(r.data.bestObjects)
                setUnits(r.data.units)
                setCollections(r.data.collections)
                setObjects(r.data.objects)
            })
    }, []);

    return (
        <div className={styles.wrap}>
            <div className={styles.innerWrap}>
                <div className={styles.stories}>
                </div>
                <main className={styles.main}>
                    <div className={styles.infoCard}>
                        <p className={styles.p}>{collections}{' '}{formatMessage({id: 'main_card_1'})}</p>
                        <div className={styles.icon}>
                            <Collections />
                        </div>
                    </div>
                    <div className={styles.infoCard}>
                        <p className={styles.p}>{units}{' '}{formatMessage({id: 'main_card_2'})}</p>
                        <div className={styles.icon}>
                            <Units />
                        </div>
                    </div>
                    <div className={styles.infoCard}>
                        <p className={styles.p}>{objects}{' '}{formatMessage({id: 'main_card_3'})}</p>
                        <div className={styles.icon}>
                            <Objects />
                        </div>
                    </div>
                    <div className={styles.infoCard}>
                        <p className={styles.p}>{bestObjects}{' '}{formatMessage({id: 'main_card_4'})}</p>
                        <div className={styles.icon}>
                            <BestObjects />
                        </div>
                    </div>
                </main>
            </div>
            <Spacer height={100} width={20}/>
            <main className={styles.sideCard}>
                <Spacer height={20} width={100}/>
                <p className={styles.p}>{formatMessage({id: 'main_beta_title'})}</p>
                <Spacer height={10} width={100}/>
                <p className={styles.p_min}>{formatMessage({id: 'main_beta_description'})}</p>
                <div className={styles.icon_beta}>
                <Beta/>
                </div>
            </main>
        </div>
    )
}

export default MainMenu;
