// ========= Todo List Hooks Types
// import all packages
import {ScreenNames} from '../../../types';

export type RootStackParamList = Record<ScreenNames[number], undefined>;

export type GoToCalendar = () => void;

export type UseTodoList = () => {goToCalendar: GoToCalendar};
