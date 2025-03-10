import { api } from '@/shared/api';
import { AxiosResponse } from 'axios';
import {EstateDetail, Grade, InfrastructureDto, Price, Profitability} from "@/widgets/Detail/api/detailApi";

type ResponseGetEstateCollection = {
    hasMore: boolean;
    items: Array<EstateCollection>;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
};

export type EstateCollection = {
    id: string,
    name: string,
    estates: Array<Estate>
}

export type Estate = {
    id: string,
    name: string;
    grade?: Grade;
    profitability?: Profitability;
    price?: Price;
    buildEndDate: string;
    exteriorImages?: string[];
    facilityImages?: string[];
    interiorImages?: string[];
    infrastructure?: InfrastructureDto;
    level: 'COMFORT' | 'LUX' | 'PREMIUM' | 'UNKNOWN';
    projectId: string;
};

export const estateCollectionApi = {
    getEstateCollection: async (): Promise<AxiosResponse<ResponseGetEstateCollection>> => {
        try {
            return await api.get<ResponseGetEstateCollection>(
                '/v1/estate-collections?pageNumber=0&pageSize=25',
                {headers:
                        {
                            Authorization: localStorage.getItem('basicToken')
                        }
                },
            );
        } catch (error) {
            throw error;
        }
    },
};
