import {FC, useEffect, useState} from "react";
import styles from './MainMenu.module.scss';
import {detailApi} from "@/widgets/Detail/api/detailApi";
import {useIntl} from "react-intl";
import {BestObjects, Beta, BetaMB, Collections, Objects, Units} from "@/shared/assets/icons";
import {Spacer} from "@/widgets/Spacer/Spacer";
import {isMobile} from "react-device-detect";
import {Gallery} from "@/pages/MainMenu/Gallery/Gallery";


const MainMenu: FC = () => {
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
        <>
            {isMobile ?
                <MainMobile
                    collections={collections}
                    units={units}
                    objects={objects}
                    bestObjects={bestObjects}
                /> :
                <MainDesktop
                    collections={collections}
                    units={units}
                    objects={objects}
                    bestObjects={bestObjects}
                />
            }
        </>
    )
}

interface MainProps {
    collections: number;
    units: number;
    objects: number;
    bestObjects: number;
}

const MainMobile: FC<MainProps> = ({
  collections,
  units,
  objects,
  bestObjects
}) => {
    const { formatMessage } = useIntl();
    const [storiesModal, setStoriesModal] = useState(false);
    const [heartModal, setHeartModal] = useState(false);
    const [messageModal, setMessageModal] = useState(false);

    const handleOpenModal = () => {
        setStoriesModal(true);
    };
    const handleCloseModal = () => {
        setStoriesModal(false);
    };

    const handleOpenHeartModal = () => {
        setHeartModal(true);
    };
    const handleCloseHeartModal = () => {
        setHeartModal(false);
    };

    const handleOpenMessageModal = () => {
        setMessageModal(true);
    };
    const handleCloseMessageModal = () => {
        setMessageModal(false);
    };
    return (
        <div style={{
            display: 'block',
            paddingTop: '20px'
        }}>
            <main className={styles.sideCard_mobile}>
                <div style={{
                    display: 'inline-block',
                    width: '90%',
                    alignContent: 'center',
                    textAlign: 'left',
                    paddingLeft: '20px'
                }}>
                <p className={styles.p_mobile}>{formatMessage({id: 'main_beta_title'})}</p>
                <Spacer height={10} width={100}/>
                <p className={styles.p_min_mobile}>{formatMessage({id: 'main_beta_description'})}</p>
                </div>
                <div className={styles.icon_beta_mobile}>
                    <BetaMB/>
                </div>
            </main>
            <div style={{
                paddingTop: '20px',
                paddingLeft: '5px'
            }}>
                <div className={styles.stories}>
                <div className={styles.stories_wrap}>
                    <div className={styles.stories_button}
                         style={{
                             backgroundImage: 'url("https://insightestate.pro/estate-images/InfoButton.png")'
                         }}
                         onClick={handleOpenModal}
                    />
                    <Spacer height={5} width={100}/>
                    <p className={styles.stories_text}>{formatMessage({id: 'main_button_1'})}</p>
                </div>
                <div className={styles.stories_wrap}>
                    <div className={styles.stories_button}
                         style={{
                             backgroundImage: 'url("https://insightestate.pro/estate-images/HeartButton.png")'
                         }}
                         onClick={handleOpenHeartModal}
                    />
                    <Spacer height={5} width={100}/>
                    <p className={styles.stories_text}>{formatMessage({id: 'main_button_2'})}</p>
                </div>
                {/*<div className={styles.stories_wrap}>*/}
                {/*    <div className={styles.stories_button}*/}
                {/*         style={{*/}
                {/*             backgroundImage: 'url("https://insightestate.pro/estate-images/MessageButton.png")'*/}
                {/*         }}*/}
                {/*         onClick={handleOpenMessageModal}*/}
                {/*    />*/}
                {/*    <Spacer height={5} width={100}/>*/}
                {/*    <p className={styles.stories_text}>{formatMessage({id: 'main_button_3'})}</p>*/}
                {/*</div>*/}
            </div>
            </div>
            <div style={{
                paddingTop: '30px',
            }}>
                <div className={styles.main_mobile}>
                    <div className={styles.infoCard_mobile}>
                        <p className={styles.p_mobile}>{formatMessage({id: 'main_card_1'})}
                            <br/>
                            <p className={styles.p_mobile_value}>
                                {collections}
                            </p>
                        </p>
                        <div className={styles.icon_mobile}>
                            <Collections />
                        </div>
                    </div>
                    <div className={styles.infoCard_mobile}>
                        <p className={styles.p_mobile}>{formatMessage({id: 'main_card_2'})}
                            <br/>
                            <p className={styles.p_mobile_value}>
                                {units}
                            </p>
                        </p>
                        <div className={styles.icon_mobile}>
                            <Units />
                        </div>
                    </div>
                    <div className={styles.infoCard_mobile}>
                        <p className={styles.p_mobile}>{formatMessage({id: 'main_card_3'})}
                            <br/>
                            <p className={styles.p_mobile_value}>
                                {objects}
                            </p>
                        </p>
                        <div className={styles.icon_mobile}>
                            <Objects />
                        </div>
                    </div>
                    <div className={styles.infoCard_mobile}>
                        <p className={styles.p_mobile}>{formatMessage({id: 'main_card_4'})}
                            <br/>
                            <p className={styles.p_mobile_value}>
                                {bestObjects}
                            </p>
                        </p>
                        <div className={styles.icon_mobile}>
                            <BestObjects />
                        </div>
                    </div>
                </div>
            </div>

            <Gallery
                anchor={'bottom'}
                open={storiesModal}
                onOpen={handleOpenModal}
                onClose={handleCloseModal}
                type={localStorage.getItem('language') === 'en' ? 'INFO_EN' : 'INFO_RU'}/>
            <Gallery
                anchor={'bottom'}
                open={heartModal}
                onOpen={handleOpenHeartModal}
                onClose={handleCloseHeartModal}
                type={localStorage.getItem('language') === 'en' ? 'HEART_EN' : 'HEART_RU'}/>
            <Gallery
                anchor={'bottom'}
                open={messageModal}
                onOpen={handleOpenMessageModal}
                onClose={handleCloseMessageModal}
                type={localStorage.getItem('language') === 'en' ? 'MESSAGE_EN' : 'MESSAGE_RU'}/>
        </div>
    )
}

const MainDesktop: FC<MainProps> = ({
    collections,
    units,
    objects,
    bestObjects
}) => {
    const { formatMessage } = useIntl();
    const [storiesModal, setStoriesModal] = useState(false);
    const [heartModal, setHeartModal] = useState(false);
    const [messageModal, setMessageModal] = useState(false);

    const handleOpenModal = () => {
        setStoriesModal(true);
    };
    const handleCloseModal = () => {
        setStoriesModal(false);
    };

    const handleOpenHeartModal = () => {
        setHeartModal(true);
    };
    const handleCloseHeartModal = () => {
        setHeartModal(false);
    };

    const handleOpenMessageModal = () => {
        setMessageModal(true);
    };
    const handleCloseMessageModal = () => {
        setMessageModal(false);
    };


    return(
        <div className={styles.wrap}>
            <div className={styles.innerWrap}>
                <div className={styles.stories}>
                    <div className={styles.stories_wrap}>
                        <div className={styles.stories_button}
                             style={{
                                 backgroundImage: 'url("https://insightestate.pro/estate-images/InfoButton.png")'
                             }}
                             onClick={handleOpenModal}
                        />
                        <Spacer height={5} width={100}/>
                        <p className={styles.stories_text}>{formatMessage({id: 'main_button_1'})}</p>
                    </div>
                    <div className={styles.stories_wrap}>
                        <div className={styles.stories_button}
                             style={{
                                 backgroundImage: 'url("https://insightestate.pro/estate-images/HeartButton.png")'
                             }}
                             onClick={handleOpenHeartModal}
                        />
                        <Spacer height={5} width={100}/>
                        <p className={styles.stories_text}>{formatMessage({id: 'main_button_2'})}</p>
                    </div>
                    {/*<div className={styles.stories_wrap}>*/}
                    {/*    <div className={styles.stories_button}*/}
                    {/*         style={{*/}
                    {/*             backgroundImage: 'url("https://insightestate.pro/estate-images/MessageButton.png")'*/}
                    {/*         }}*/}
                    {/*         onClick={handleOpenMessageModal}*/}
                    {/*    />*/}
                    {/*    <Spacer height={5} width={100}/>*/}
                    {/*    <p className={styles.stories_text}>{formatMessage({id: 'main_button_3'})}</p>*/}
                    {/*</div>*/}
                </div>
                <div className={styles.main}>
                    <div className={styles.infoCard}>
                        <p className={styles.p}>{formatMessage({id: 'main_card_1'})}
                            <br/>
                            <p className={styles.p_value}>
                                {collections}
                            </p>
                        </p>
                        <div className={styles.icon}>
                            <Collections />
                        </div>
                    </div>
                    <div className={styles.infoCard}>
                        <p className={styles.p}>{formatMessage({id: 'main_card_2'})}
                            <br/>
                            <p className={styles.p_value}>
                                {units}
                            </p>
                        </p>
                        <div className={styles.icon}>
                            <Units />
                        </div>
                    </div>
                </div>

                <div className={styles.main}>
                    <div className={styles.infoCard}>
                        <p className={styles.p}>{formatMessage({id: 'main_card_3'})}
                            <br/>
                            <p className={styles.p_value}>
                                {objects}
                            </p>
                        </p>
                        <div className={styles.icon}>
                            <Objects />
                        </div>
                    </div>
                    <div className={styles.infoCard}>
                        <p className={styles.p}>{formatMessage({id: 'main_card_4'})}
                            <br/>
                            <p className={styles.p_value}>
                                {bestObjects}
                            </p>
                        </p>
                        <div className={styles.icon}>
                            <BestObjects />
                        </div>
                    </div>
                </div>
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
            <Gallery
                anchor={'bottom'}
                open={storiesModal}
                onOpen={handleOpenModal}
                onClose={handleCloseModal}
                type={localStorage.getItem('language') === 'en' ? 'INFO_EN' : 'INFO_RU'}/>
            <Gallery
                anchor={'bottom'}
                open={heartModal}
                onOpen={handleOpenHeartModal}
                onClose={handleCloseHeartModal}
                type={localStorage.getItem('language') === 'en' ? 'HEART_EN' : 'HEART_RU'}/>
            <Gallery
                anchor={'bottom'}
                open={messageModal}
                onOpen={handleOpenMessageModal}
                onClose={handleCloseMessageModal}
                type={localStorage.getItem('language') === 'en' ? 'MESSAGE_EN' : 'MESSAGE_RU'}/>
        </div>
    )
}

export default MainMenu;
