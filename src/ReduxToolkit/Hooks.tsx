import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import type { AddDispatch, RootState } from "./Store";

export const useAppDispatch: () => AddDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
