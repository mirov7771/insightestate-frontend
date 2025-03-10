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

export type CreateCollectionRs = {
    id: string;
}

export const estateCollectionApi = {
    getEstateCollection: async (token: string): Promise<AxiosResponse<ResponseGetEstateCollection>> => {
        try {
            return await api.get<ResponseGetEstateCollection>(
                '/v1/estate-collections?pageNumber=0&pageSize=25',
                {headers:
                        {
                            Authorization: `Basic ${token.replace('Basic ', '')}`
                        }
                },
            );
        } catch (error) {
            throw error;
        }
    },
    createCollection: async (token: string): Promise<AxiosResponse<CreateCollectionRs>> => {
        try {
            return await api.post<CreateCollectionRs>(
                '/v1/estate-collections',
                {
                  name: `Подборка ${token.replace('Basic ', '')}`
                },
                {headers:
                        {
                            Authorization: `Basic ${token.replace('Basic ', '')}`
                        }
                },
            );
        } catch (error) {
            throw error;
        }
    },
    addToCollection: async (token: string, id: string, estateId: string): Promise<AxiosResponse<void>> => {
        try {
            return await api.post<void>(
                `/v1/estate-collections/${id}/estate?estateId=${estateId}`,
                {
                },
                {headers:
                        {
                            Authorization: `Basic ${token.replace('Basic ', '')}`
                        }
                },
            );
        } catch (error) {
            throw error;
        }
    },
    deleteFromCollection: async (token: string, id: string, estateId: string): Promise<AxiosResponse<void>> => {
        try {
            return await api.delete<void>(
                `/v1/estate-collections/${id}/estate?estateId=${estateId}`,
                {headers:
                        {
                            Authorization: `Basic ${token.replace('Basic ', '')}`
                        }
                },
            );
        } catch (error) {
            throw error;
        }
    }
};
