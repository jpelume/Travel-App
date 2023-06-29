import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';
import {AppDispacth, RootState} from './store';

export const useAppDispatch = () => useReduxDispatch<AppDispacth>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
