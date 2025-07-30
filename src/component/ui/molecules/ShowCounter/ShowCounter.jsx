import TimesDown from "../timesdown/TimesDown";
import "./ShowCounter.css"
export default function ShowCounter ({ days, hours, minutes, seconds }) {
  return (
    <div className="show-counter">
        <TimesDown value={days} type={'روز'} isDanger={false} />
        <TimesDown value={hours} type={'ساعت'} isDanger={false} />
        <TimesDown value={minutes} type={'دقیقه'} isDanger={false} />
        <TimesDown value={seconds} type={'ثانیه'} isDanger={days <= 3} />

    </div>
  );
};