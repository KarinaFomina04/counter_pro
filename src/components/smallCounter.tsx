import React, {ChangeEvent, useState} from 'react';
import s from './App.module.css'
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {
    ButtonHandlerAC,
    IncrementAC,
    MaxValueonChangeHandlerAC,
    ResetAC,
    StartValueonChangeHandlerAC
} from "./reducer/reducer";
import {useAppSelector} from "../hooks/hooks";

 type UseStateType={
    maxValue: number
    startValue: number
    counterValue: number
}

export const SmallCounter = () => {

    // const [value, setValue] = useState<UseStateType>({
    //     maxValue: Number(localStorage.getItem('maxValue')),
    //     startValue:  Number(localStorage.getItem('startValue')),
    //     counterValue: Number(localStorage.getItem('counterValue')),
    // })

    const value1 = useAppSelector(state => state)
    const dispatch = useDispatch()

    const onIncHandler = () => {
        dispatch(IncrementAC())
    }

    const onResetHandler = () => {
        dispatch(ResetAC())
    }

    const setButtonHandler = () => {
        // setValue({...value, counterValue: value.startValue})
        // localStorage.setItem('counterValue',String(value.startValue))
        dispatch(ButtonHandlerAC())
    }

    const maxValueOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const valueMax = parseInt(e.currentTarget.value, 10);
        // setValue({...value, maxValue: valueMax})
        // localStorage.setItem('maxValue', e.currentTarget.value)
        dispatch(MaxValueonChangeHandlerAC(valueMax))
    }

    const startValueOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const valueStart = parseInt(e.currentTarget.value, 10);
        // setValue({...value, startValue: valueStart})
        // localStorage.setItem('startValue', e.currentTarget.value)
        dispatch(StartValueonChangeHandlerAC(valueStart))
    }

    const isDisabled = value1.counter.maxValue ===  value1.counter.counterValue


    return (
        <div className={s.app}>
            <div className={s.conteiner}>
                <div className={s.indecator}>
                    <span className={s.input} > max value <input
                        onChange={maxValueOnChangeHandler}
                        value={value1.counter.maxValue}
                        type="number"/> </span>
                    <div className={s.input} >start value <input value={value1.counter.startValue}
                                                                 onChange={startValueOnChangeHandler}
                                                                 type="number"/>
                    </div>
                    <Button name={"set"} callback={setButtonHandler}/>
                </div>
            </div>

            <div className={s.container}>
                <div className={s.indecator + (isDisabled ? " " + s.red : "")}>
                    <div className={s.input}> {value1.counter.counterValue}</div>
                    <div>

                        <Button name={'inc'} callback={onIncHandler} disabled={isDisabled}/>
                        <Button name={'reset'} callback={onResetHandler}/>

                    </div>
                </div>

            </div>

        </div>
    );
}