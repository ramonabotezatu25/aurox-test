
export interface IStream {
    E: number // Event time
    U: number // First update ID in event
    u: number // Final update ID in event
    a: IPriceQuantity[] //asks array
    b: IPriceQuantity[] //bids array
    e: string; // Event type
    s: string;  // Symbol

}

export interface IPriceQuantity {
    [key: number]: string | number;
}

export interface IDataState {
    data: {
        snapshot: {
            asks: any[];
            bids: any[];
            lastUpdatedId: number;
        }
        currentSymbol: string;
        lastDepthResponse: number;
        stream: IStream;
        decimalGroupBy: number;
        depthViewCount: number;

    };

}