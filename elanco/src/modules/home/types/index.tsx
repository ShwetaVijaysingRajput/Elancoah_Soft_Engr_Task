export interface RowObj {
  ConsumedQuantity: string;
  Cost: string;
  Date: string;
  InstanceId: string;
  MeterCategory: string;
  ResourceGroup: string;
  ResourceLocation: string;
  Tags: Object;
  UnitOfMeasure: string;
  Location: string;
  ServiceName: string;
}

export type RowData = RowObj[];
