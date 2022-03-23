
 interface SubsItem {
    key: string;
    title: string;
    component: JSX.Element;
    icon?: string;
    subs?: SubsItem[],
    index?: boolean,
    noAuth?: boolean,
}

 interface MenuItem extends SubsItem {
    icon: string;
    subs?: SubsItem[];
    selected?: boolean;
    opened?: boolean;
    hidden?: boolean;
}

