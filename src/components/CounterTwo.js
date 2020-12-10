import useCounter from '../hooks/useCounter';

const CounterTwo = () => {
    const [ count, increment, decrement, reset ] = useCounter(15);
    return (
        <div>
            <h4>Count - {count}</h4>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
};

export default CounterTwo;
