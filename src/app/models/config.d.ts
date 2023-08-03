export interface Config {
    apiUrl: string;
}

export interface ResponseBody {
    status: number;
    message: string;
    timestamp: Date;
    data: any;
}