export interface basicLineEchartModel {
    value: number;
    name: string;
 
}

export interface basicAreaEchartModel {
    code: number;
    name: string;
 
}

export interface stackBasicEchartModel{
    name : string;
    value : basicAreaEchartModel[];
}