import { ISBN } from "../value-object/isbn";

export interface IBookRepoInterface {
    save: (data: any) => Promise<any>;
    hasBookById: (id: ISBN) => boolean;
}