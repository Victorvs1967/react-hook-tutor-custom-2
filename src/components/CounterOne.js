import useCounter from '../hooks/useCounter';

const CounterOne = () => {
    
    const [ count, increment, decrement, reset ] = useCounter();
    return (
        <div>
            <h4>Count - {count}</h4>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
};

export default CounterOne;
