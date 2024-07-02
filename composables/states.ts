import { type IMessage } from "~/interfaces/IMessage";

export const useIsChatting = () => useState<boolean>('isChatting', () => false);

export const useMessages = () => useState<IMessage[]>('messages', () => []);