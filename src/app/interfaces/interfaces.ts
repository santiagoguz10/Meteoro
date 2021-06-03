export interface Forecast {
    coord?: Coord;
    weather?: Weather[];
    base?: string;
    main?: Main;
    visibility?: number;
    wind?: Wind;
    clouds?: Clouds;
    dt?: number;
    sys?: Sys;
    timezone?: number;
    id?: number;
    name?: string;
    cod?: number;
}

interface Sys {
    type?: number;
    id?: number;
    country?: string;
    sunrise?: number;
    sunset?: number;
}

interface Clouds {
    all: number;
}

export interface Wind {
    speed?: number;
    deg?: number;
}

export interface Main {
    temp?: number;
    temp_min?: number;
    temp_max?: number;
    pressure?: number;
    sea_level?: number;
    grnd_level?: number;
    humidity?: number;
    temp_kf?: number;
}

export interface Weather {
    id?: number;
    main?: string;
    description?: string;
    icon?: string;
}

interface Coord {
    lon: number;
    lat: number;
}
