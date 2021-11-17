import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootStoreState } from "../store/store";

export const useTypedSelector: TypedUseSelectorHook<RootStoreState> = useSelector;
