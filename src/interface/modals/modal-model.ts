export interface IAddDataModal {
  isOpen: boolean;
  closeModalAction: () => void;
}

export interface IModal extends IAddDataModal {
  title: string;
  className?: string;
  children: string | JSX.Element | JSX.Element[];
  bodyStyle?: string;
}
