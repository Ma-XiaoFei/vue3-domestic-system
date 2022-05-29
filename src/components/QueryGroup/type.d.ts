export interface OptionsItemType {
  label?: string;
  value: string | number;
}
type type = 'select' | 'input';
export type QueryGroupType = {
  type?: string;
  label: string;
  name: string;
  options?: OptionsItemType[];
}[];
