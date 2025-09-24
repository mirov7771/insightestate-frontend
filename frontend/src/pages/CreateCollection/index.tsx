import {FC, useEffect, useState} from "react";
import styles from './CreateCollection.module.scss';
import {Text, Button} from "@/shared/ui";
import {Spacer} from "@/widgets/Spacer/Spacer";
import {estateCollectionApi} from "@/widgets/EstateCollection/api/estateCollectionApi";
import {useIntl} from "react-intl";
import {useNavigate} from "react-router";
import {isMobile} from "react-device-detect";

type TemplateItem = {
    id: number,
    name: string,
    images: string[]
}

const Templates = [
    {
        id: 1,
        name: 'top_sellers_phuket',
        images: [
            'TH-HKT-LY-00035_ext_1.webp', 'TH-HKT-BT-00039_ext_1.webp',
        ]
    },
    {
        id: 2,
        name: 'platforms_choice_villas',
        images: [
            'TH-HKT-BT-00017_ext_1.webp', 'TH-HKT-BT-00017_ext_2.webp'
        ]
    },
    {
        id: 3,
        name: 'first_line',
        images: [
            'TH-HKT-NY-00078_ext_4.webp', 'TH-HKT-MK-00169_ext_3.webp'
        ]
    },
    {
        id: 4,
        name: 'platforms_choice_condos',
        images: [
            'TH-HKT-LY-00023_ext_4.webp', 'TH-HKT-LY-00023_ext_7.webp'
        ]
    }
]

const Templates2 = [
    {
        id: 5,
        name: 'condos_up_to_150000',
        images: [
            'TH-HKT-LY-00023_ext_4.webp', 'TH-HKT-LY-00023_ext_6.webp',
        ]
    },
    {
        id: 6,
        name: 'for_families_schools_and_kindergartens_nearby',
        images: [
            'TH-HKT-BT-00155_ext_2.webp', 'TH-HKT-BT-00155_ext_4.webp'
        ]
    },
    {
        id: 7,
        name: 'our_users_choice',
        images: [
            'TH-HKT-LY-00048_ext_1.webp', 'TH-HKT-LY-00048_ext_3.webp'
        ]
    }
]

const CreateCollection: FC = () => {
    const { formatMessage } = useIntl();
    return (
        <div className={styles.wrapper}>
            <div className={isMobile ? styles.top_mobile : styles.top}>
                <Text variant="heading2" as="h2" align="center">
                    {formatMessage({ id: 'create_collection_title' })}
                </Text>
                <Text variant="body1" as="h2" align="center" className={styles.description}>
                    {formatMessage({ id: 'create_collection_description' })}
                </Text>
            </div>
            {isMobile ?
                <>
                    <div className={styles.templates_wrapper}>
                        <div className={styles.templates_mobile}>
                            {Templates.map((t) =>
                            <>
                                <Template
                                    id={t.id}
                                    name={formatMessage({id: t.name})}
                                    images={t.images}
                                />
                                <Spacer height={10} width={100}/>
                            </>
                            )}
                        </div>
                    </div>
                </> :
                <>
                    <div className={styles.templates_wrapper}>
                        <div className={styles.templates}>
                            {Templates.map((t) => <Template
                                id={t.id}
                                name={formatMessage({id: t.name})}
                                images={t.images}
                            />)}
                        </div>
                    </div>
                    <div className={styles.templates_wrapper2}>
                        <div className={styles.templates}>
                            {Templates2.map((t) => <Template
                                id={t.id}
                                name={formatMessage({id: t.name})}
                                images={t.images}
                            />)}
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

const Template: FC<TemplateItem> = ({
    id,
    name,
    images
}) => {
    const { formatMessage } = useIntl();
    const navigate = useNavigate();
    const [collectionId, setCollectionId] = useState<string>()
    const handleButton = () => {
        estateCollectionApi.template({
            id: id,
            template: name,
            userId: localStorage.getItem('userId')!!
        }).then((r) => setCollectionId(r.data.id)).catch(e => {})
    }

    useEffect(() => {
        if (collectionId) {
            navigate(`/cl/${collectionId}`)
        }
    }, [collectionId])

    return (
        <div className={styles.template}>
            <Text variant="heading5" as="h2" align="center">
                {name}
            </Text>
            <div className={styles.slide}>
                <div className={styles.estates}>
                    {images.map((img) => <TemplateImage img={img}/>)}
                </div>
            </div>
            <Spacer height={15} width={100}/>
            <Button size={'s'} onClick={handleButton}>
                {formatMessage({ id: 'create_collection_button' })}
            </Button>
        </div>
    )
}

const TemplateImage: FC<{img: string}> = ({img}) => {

    return (
        <div className={styles.estate}>
            <img className={styles.estate__img} src={`https://lotsof.properties/estate-images/${img}`} width={200} height={200} />
        </div>
    );
}

export default CreateCollection;
