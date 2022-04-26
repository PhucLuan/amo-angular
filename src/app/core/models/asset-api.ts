import { AssetItem } from "./asset-item";

export interface AssetApi {
    currentPage : number;
    items : AssetItem[];
    totalItems : number;
    totalPages : number;
}