'use client'


import Calendar from 'react-calendar';
import '@/../../src/styles/Calendar.css';
import {add, format} from "date-fns"

const dateType = {
    justTime: Date || null,
    dateTime: Date || null
  }
  const [selectedDate, setSelectedDate] = useState<dateType>{
    justTime: null,
    dateTime: null
  }

  const handleDayClick = (date) => {
    setSelectedDate(date);
    console.log(selectedDate);
  };

  const getTimes = () => {
    if (!date.justDate) return
    const { justDate } = date

    const começo = add(justDate, {hours: 9})
    const fim = add(justDate, {hours: 17})
    const interval = 10 //em minutos

    const times = []
    for (let i = começo; i <= fim; i = add(i, {minutes: interval})){
        times.push(i)
    }

    return times
  }

  const times = getTimes()

export default async function Calendario (){

    {times?.map((time, i ) => (
        <div key={`time-${i}`} className='rounded-sm bg-green-400 p-2'>
            <button type='button' onClick={() => setDate((prev) => ({...prev, dateTime: time}))}>
                {format(time, 'kk:mm')}
            </button>
        </div>
    ))}

    <Calendar
        minDate={new Date()}  // impede a seleção de datas anteriores
        className="REACT-CALENDAR p-2"
        view="month"
        onClickDay={handleDayClick}  // atualiza o valor quando o dia é clicado
        value={selectedDate}  // passa a data selecionada para o componente
        tileClassName={({ date }) => {
            console.log(date);  // só pra saber se ta dando certinho
            return 'calendar-tile';
        }}
    />
}