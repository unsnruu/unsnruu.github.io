import { NanoId } from "./NanoId";

export default interface Application {
  id: NanoId;
  isOpen: boolean;
  minimize: boolean;
  maximize: boolean;
  title: string;
  content: string;
}
