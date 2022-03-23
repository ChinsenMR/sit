export interface IListItem {
  name: string;
  age: number;
  sex: string;
}

export interface pageState {
  dataList: IListItem[];
  flag: boolean;
}

export interface RouteTypes {
  key: string,
  title: string
}