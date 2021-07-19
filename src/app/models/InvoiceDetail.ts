import { Game } from "../models/Game";
import { Invoice } from "../models/Invoice";

export class InvoiceDetail {
    id: string| undefined;
    gamesId: Game | undefined;
    invoiceId: Invoice | undefined;
    total: number| undefined;
}


