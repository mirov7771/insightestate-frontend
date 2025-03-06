import {api} from '@/shared/api';
import {AxiosResponse} from 'axios';

export type EstateDetail = {
    id: string,
    projectId: string,
    name: string,
    shortDescriptionRu?: string,
    landPurchased: boolean,
    eiaEnabled?: boolean,
    developer?: Developer,
    grade?: Grade,
    projectCount?: ProjectUnitCount,
    status?: string,
    buildEndDate?: string,
    unitCount?: ProjectUnitCount,
    type?: string,
    level?: string,
    product?: string,
    profitability?: Profitability,
    location: Location,
    infrastructure?: InfrastructureDto,
    options?: Options,
    price?: Price,
    roomLayouts?: RoomLayouts,
    facilityImages?: string[],
    exteriorImages?: string[],
    interiorImages?: string[]
}

type Developer = {
    name?: string,
}

type Grade = {
    main?: number,
    investmentSecurity?: number,
    investmentPotential?: number,
    projectLocation?: number,
    comfortOfLife?: number
}

type ProjectUnitCount = {
    total?: number,
    build?: number,
    finished?: number,
    sailed?: number,
    available?: number
}

type Location = {
    name?: string,
    district?: string,
    beach?: string,
    mapUrl?: string
}

export type Profitability = {
    roi?: number,
    roiSummary?: number,
    irr?: number,
    capRateFirstYear?: number
}

type Time = {
    walk?: number,
    car?: number
}

export type InfrastructureDto = {
    beachTime?: Time,
    airportTime?: Time,
    mallTime?: Time,
    schoolRadius?: number
}

type Price = {
    min?: number,
    max?: number,
    avg?: number,
}

type RoomLayout = {
    pricePerMeter?: Price,
    price?: Price,
    square?: Price
}

export type RoomLayouts = {
    one?: RoomLayout,
    two?: RoomLayout,
    three?: RoomLayout
}

export type Options = {
    gym?: boolean,
    childRoom?: boolean,
    shop?: boolean,
    entertainment?: boolean,
    coworking?: boolean
}

export const detailApi = {
    getDetail: async (id: string | undefined): Promise<AxiosResponse<EstateDetail>> => {
        try {
            return await api.get<EstateDetail>(`v1/estate/${id}`, {});
        } catch (error) {
            throw error;
        }
    },
};
