
import "./timesdown.css"
export default function TimesDown({ value, type, isDanger }) {
    return (
        <div className={isDanger ? 'countdown danger' : 'countdown'}>
            <p>{value}</p>
            <div className="bbb">
                <span>{type}</span>
            </div>
        </div>
    );
}