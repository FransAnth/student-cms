export interface IAddRoomModal {
  isOpen: boolean;
  closeModalAction: () => void;
}

export interface IModal extends IAddRoomModal {
  title: string;
  className?: string;
  children: string | JSX.Element | JSX.Element[];
  bodyStyle?: string;
}
