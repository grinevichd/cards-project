import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {someReducer} from "./some-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";


const storeReducer = combineReducers({
    some: someReducer
})

const store = legacy_createStore(storeReducer, applyMiddleware(thunk))

type RootStateType = ReturnType<typeof storeReducer>

const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
type AppDispatch = ThunkDispatch<RootStateType, unknown, AnyAction> // засунуть екшн не забыть
const useAppDispatch = () => useDispatch<AppDispatch>()
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootStateType,
    unknown,
    AnyAction>