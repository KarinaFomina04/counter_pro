import React, {ChangeEvent, useState} from 'react';
import s from './App.module.css'
import {Button} from "./Button";


export const SmallCounter = () => {

    const [value, setValue] = useState({
        maxValue: 0,
        startValue: 0,
        counterValue: 0,
    })


    const onIncHandler = () => {
        setValue({...value, counterValue: value.counterValue + 1})
    }

    const onResetHandler = () => {
        setValue({...value, counterValue: value.startValue})
    }

    const setButtonHandler = () => {
        setValue({...value, counterValue: value.startValue})
        console.log(value)
    }

    const maxValueonChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const valueMax = parseInt(e.currentTarget.value, 10);
        console.log(e)
        setValue({...value, maxValue: valueMax})
        console.log()
    }
    const startValueonChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const valueStart = parseInt(e.currentTarget.value, 10);
        setValue({...value, startValue: valueStart})
    }

    const isDisabled = value.maxValue === value.counterValue
    return (
        <div className={s.app}>
            <div className={s.conteiner}>
                <div className={s.indecator}>
                    <span className={s.input} > max value <input
                        type="number" value={value.maxValue} onChange={maxValueonChangeHandler}/> </span>
                    <div className={s.input} >start value <input type="number" value={value.startValue} onChange={startValueonChangeHandler}/>
                    </div>
                    <Button name={"set"} callback={setButtonHandler}/>
                </div>
            </div>

            <div className={s.container}>

                {/*<div className={s.indecator + (value.counterValue >= 5 ? " " + s.red : "")}>*/}
                <div className={s.indecator + (isDisabled ? " " + s.red : "")}>
                    <div className={s.input}> {value.counterValue}</div>
                    <div>

                        <Button name={'inc'} callback={onIncHandler} disabled={isDisabled}/>
                        <Button name={'reset'} callback={onResetHandler}/>

                    </div>
                </div>

            </div>

        </div>
    );
}

