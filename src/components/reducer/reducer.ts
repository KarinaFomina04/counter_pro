import { createStore } from 'redux';

export interface AppState {
    maxValue: number;
    startValue: number;
    counterValue: number;
}



type ActionType =
    IncrementACType
    | ResetACType
    | ButtonHandlerACType
    | MaxValueonChangeHandlerACType
    | StartValueonChangeHandlerACType



const initialState: AppState = {
    maxValue: Number(localStorage.getItem('maxValue')),
    startValue: Number(localStorage.getItem('startValue')),
    counterValue: Number(localStorage.getItem('counterValue')),
};

export const CounterReducer = (state = initialState, action: ActionType): AppState => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return {
                ...state,
                counterValue: state.counterValue + 1,
            };
        case 'RESET_COUNTER':
            return {
                ...state,
                counterValue: state.startValue,
            };
        case 'SET_COUNTER':
            return {
                ...state,
                counterValue: state.startValue,
                maxValue: state.maxValue,
            };
        case 'SET_MAX_VALUE':
            return {
                ...state,
                maxValue: action.payload.maxValue,
            };
        case 'SET_START_VALUE':
            return {
                ...state,
                startValue: action.payload.startValue,
            };
        default:
            return state;
    }
};


type IncrementACType = ReturnType<typeof IncrementAC>
export const IncrementAC = ()=> {
    return {
        type: 'INCREMENT_COUNTER'
    } as const
}

type ResetACType = ReturnType<typeof ResetAC>
export const ResetAC = ()=> {
    return {
        type: 'RESET_COUNTER'
    } as const
}

type ButtonHandlerACType = ReturnType<typeof ButtonHandlerAC>
export const ButtonHandlerAC = ()=> {
    return {
        type: 'SET_COUNTER'
    } as const
}

type MaxValueonChangeHandlerACType = ReturnType<typeof MaxValueonChangeHandlerAC>
export const MaxValueonChangeHandlerAC = (maxValue: number)=> {
    return {
        type: 'SET_MAX_VALUE',
        payload: {
            maxValue
        }
    } as const
}

type StartValueonChangeHandlerACType = ReturnType<typeof StartValueonChangeHandlerAC>
export const StartValueonChangeHandlerAC = (startValue: number)=> {
    return {
        type: 'SET_START_VALUE',
        payload:  {
            startValue
        }
    } as const
}
