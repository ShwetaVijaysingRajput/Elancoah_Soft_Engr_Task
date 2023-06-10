export interface TagObj {
  "app-name": string;
  environment: string;
  "business-unit": string;
}
export interface RowObj {
  ConsumedQuantity: string;
  Cost: string;
  Date: string;
  InstanceId: string;
  MeterCategory: string;
  ResourceGroup: string;
  ResourceLocation: string;
  Tags: TagObj;
  UnitOfMeasure: string;
  Location: string;
  ServiceName: string;
}

export type RowData = RowObj[];
