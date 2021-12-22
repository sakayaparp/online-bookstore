export interface OutboxesRepo {
    get: () => Promise<any>;
    updateStatus: (outboxes: any) => Promise<any>;
}

