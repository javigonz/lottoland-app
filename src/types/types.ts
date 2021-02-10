export interface IDataHeader {
  label: string;
};

// Browse component
export interface IResultData {
    dataHeader: IDataHeader[];
    numbers: number[];
    euroNumbers: number[];
    dataResult: any[];
};

export interface IBrowseProps {
    dataHeader: IDataHeader[];
    dataResult: any[];
};

// Numbers component
export interface INumbersProps {
    currentDate: string;
    numbers: number[];
    euroNumbers: number[];
};

// Dropdown component
export interface IOption {
    value: string;
    label: string;
    disabled?: boolean;
};

export interface IDropdownProps {
    options: IOption[];
    selected: string;
    onChange: (value: string) => void;
}

// DropdownDual componenet
export interface IDropdownDualProps {
    onChange: (value: string) => void;
}