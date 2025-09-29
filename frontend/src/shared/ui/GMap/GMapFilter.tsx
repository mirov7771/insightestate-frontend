import React, {Dispatch, FC, MouseEventHandler, SetStateAction, useCallback, useEffect, useState} from "react";
import {estateCollectionApi, GeoDto} from "@/widgets/EstateCollection/api/estateCollectionApi";
import styles from "@/shared/ui/GMap/GMap.module.scss";
import {
    AdvancedMarker,
    AdvancedMarkerProps,
    APIProvider,
    Map,
    useAdvancedMarkerRef,
    InfoWindow, Pin, AdvancedMarkerAnchorPoint
} from "@vis.gl/react-google-maps";
import {Button, ModalAddToCollection, Text} from "@/shared/ui";
import {useNavigate} from "react-router";
import {DEFAULT_IMG} from "@/entities/Card/Card";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {ButtonMapBlack, IconPlus, IconX} from "@/shared/assets/icons";
import {useIntl} from "react-intl";
import {isMobile} from "react-device-detect";
import {AdvantagesBadges} from "@/entities/CardSlide/AdvantagesBadges";
import {Spacer} from "@/widgets/Spacer/Spacer";

type MapFilterProps = { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> };

export const GMapFilter: FC<MapFilterProps> = ({open, setOpen}) => {
    const { formatMessage } = useIntl();
    const token = localStorage.getItem('basicToken');
    const navigate = useNavigate();
    const [geo, setGeo] = useState<GeoDto[]>([])
    const [infoWindowShown, setInfoWindowShown] = useState(false);
    const [hoverId, setHoverId] = useState<string | null>(null);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedDescription, setSelectedDescription] = useState<string | null>(null)
    const [toolTip1, setToolTip1] = useState<string | null | undefined>(null)
    const [toolTip2, setToolTip2] = useState<string | null | undefined>(null)
    const [toolTip3, setToolTip3] = useState<string | null | undefined>(null)
    const [roi, setRoi] = useState<string | null>(null)
    const [userCollectionModal, setUserCollectionModal] = useState(false);
    const [estateId, setEstateId] = useState<string>('');

    const [selectedMarker, setSelectedMarker] =
        useState<google.maps.marker.AdvancedMarkerElement | null>(null);
    const center = {
        lat: 7.9400300801973875,
        lng: 98.33719520821644
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onMouseEnter = useCallback((id: string | null) => setHoverId(id), []);
    const onMouseLeave = useCallback(() => setHoverId(null), []);
    const onMarkerClick = useCallback(
        (
            id: string | null,
            title: string | null,
            description: string | null,
            image: string | null,
            roi: string | null,
            toolTip1?: string | null,
            toolTip2?: string | null,
            toolTip3?: string | null,
            marker?: google.maps.marker.AdvancedMarkerElement
        ) => {
            setSelectedId(id);
            setSelectedTitle(title)
            setSelectedImage(image)
            setSelectedDescription(description)
            setToolTip1(toolTip1)
            setToolTip2(toolTip2)
            setToolTip3(toolTip3)
            setRoi(roi)

            if (marker) {
                setSelectedMarker(marker);
            }

            if (id !== selectedId) {
                setInfoWindowShown(true);
            } else {
                setInfoWindowShown(isShown => !isShown);
            }
        },
        [selectedId]
    );

    const onMapClick = useCallback(() => {
        setSelectedId(null);
        setSelectedMarker(null);
        setSelectedTitle(null)
        setSelectedImage(null)
        setSelectedDescription(null)
        setToolTip1(null)
        setToolTip2(null)
        setToolTip3(null)
        setRoi(null)
        setInfoWindowShown(false);
    }, []);

    const handleInfoWindowCloseClick = useCallback(
        () => setInfoWindowShown(false),
        []
    );

    const goToProperty = () => {
        navigate(`/property/${selectedId}`)
    }

    const handleOpenUserCollectionModal = () => {
        setUserCollectionModal(true);
    };

    useEffect(() => {
        if (open) {
            estateCollectionApi.geo().then((r) => {
                setGeo(r.data.geo)
            }).catch((e) => console.log(e))
        }
    }, [open]);

    const getPosition = (lt: string, lg: string) => {
        const lat = Number(lt.replaceAll(' ', '').replaceAll(',', ''))
        const lng = Number(lg.replaceAll(' ', '').replaceAll(',', ''))
        console.log('lat', lat, lt)
        console.log('lng', lng, lg)
        return {lat, lng}
    }

    return (
        <SwipeableDrawer
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
            anchor="right"
            disableSwipeToOpen
            disableDiscovery
        >
            <div className={styles.header}>
                <Text variant="heading4" className={styles.title}>
                    <ButtonMapBlack />
                    {formatMessage({id : 'g_map'})}
                </Text>
                <span className={styles.reset} onClick={handleClose}>
                <IconX />
                </span>
            </div>
            <div className={isMobile ? styles.map_mobile : styles.map}>
                <APIProvider apiKey="AIzaSyBdjVBKqaEESzkqmHcesmR1CsDexeSNeaE">
                    <Map
                        mapId={'bf51a910020fa25a'}
                        defaultZoom={12}
                        defaultCenter={center}
                        gestureHandling={'greedy'}
                        onClick={onMapClick}
                        clickableIcons={false}
                        disableDefaultUI>
                        {geo.map(({
                                      id,
                                      lat,
                                      lng,
                                      title,
                                      image,
                                      description,
                                      toolTip1,
                                      toolTip2,
                                      toolTip3,
                                      roi
                                  }, index) => {
                            let zIndex = index;

                            if (hoverId === id) {
                                zIndex = geo.length;
                            }

                            if (selectedId === id) {
                                zIndex = geo.length + 1;
                            }

                            return (
                                <AdvancedMarkerWithRef
                                    onMarkerClick={(
                                        marker: google.maps.marker.AdvancedMarkerElement
                                    ) => onMarkerClick(id, title, description, image || DEFAULT_IMG, roi, toolTip1, toolTip2, toolTip3, marker)}
                                    onMouseEnter={() => onMouseEnter(id)}
                                    onMouseLeave={onMouseLeave}
                                    key={id}
                                    zIndex={zIndex}
                                    className="custom-marker"
                                    style={{
                                        transform: `scale(${[hoverId, selectedId].includes(id) ? 1.3 : 1})`,
                                        transformOrigin: AdvancedMarkerAnchorPoint['BOTTOM'].join(' ')
                                    }}
                                    position={getPosition(lat, lng)}>
                                    <Pin
                                        background={selectedId === id ? '#22ccff' : null}
                                        borderColor={selectedId === id ? '#1e89a1' : null}
                                        glyphColor={selectedId === id ? '#0f677a' : null}
                                    />
                                </AdvancedMarkerWithRef>
                            )
                        })}

                        {infoWindowShown && selectedMarker && (
                            <InfoWindow
                                anchor={selectedMarker}
                                pixelOffset={[0, -2]}
                                onCloseClick={handleInfoWindowCloseClick}
                                shouldFocus
                                headerContent={
                                        <Text
                                            variant="body2"
                                            align="left"
                                            onClick={goToProperty}
                                            className={styles.text}
                                        >
                                            {selectedTitle}
                                        </Text>
                                }
                            >
                                <div
                                    className={styles.selected_point}
                                >
                                    {
                                        selectedImage ?
                                        <img src={selectedImage} alt="" loading="lazy" className={styles.image}/> :
                                        <></>
                                    }
                                    <div className={styles.selected_text}>
                                        <Text
                                            variant="body2"
                                            align="left"
                                            className={styles.text_small}
                                            onClick={goToProperty}
                                        >
                                            {roi}
                                        </Text>
                                        <Text
                                            variant="body2"
                                            align="left"
                                            onClick={goToProperty}
                                            className={styles.text_small}
                                        >
                                            {selectedDescription}
                                        </Text>
                                        <Spacer height={5} width={100}/>
                                        <AdvantagesBadges
                                            size='t'
                                            toolTip1={toolTip1 === 'true' ? toolTip1 : undefined}
                                            toolTip2={toolTip2 === 'true' ? toolTip2 : undefined}
                                            toolTip3={toolTip3 === 'true' ? toolTip3 : undefined}
                                        />
                                        {!!token && (
                                            <Button
                                                onClick={handleOpenUserCollectionModal}
                                                wide={false}
                                                size={'s'}
                                                style={{
                                                    height: '20px',
                                                    fontSize: '10px',
                                                    marginTop: '.5rem',
                                                }}
                                            >
                                                {formatMessage({ id: 'add_to_collection' })}
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </InfoWindow>
                        )}
                    </Map>
                </APIProvider>
            </div>
            <ModalAddToCollection
                open={userCollectionModal}
                setOpen={setUserCollectionModal}
                estateId={selectedId!!}
            />
        </SwipeableDrawer>
    )
}

export const AdvancedMarkerWithRef = (
    props: AdvancedMarkerProps & {
        onMarkerClick: (marker: google.maps.marker.AdvancedMarkerElement) => void;
    }
) => {
    const {children, onMarkerClick, ...advancedMarkerProps} = props;
    const [markerRef, marker] = useAdvancedMarkerRef();

    return (
        <AdvancedMarker
            onClick={() => {
                if (marker) {
                    onMarkerClick(marker);
                }
            }}
            ref={markerRef}
            {...advancedMarkerProps}>
            {children}
        </AdvancedMarker>
    );
};
