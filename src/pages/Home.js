import { useContext, useEffect, useState } from "react";


import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';
import DiaryList from "../components/DiaryList";
import { DiaryStateContext } from "../App";

const Home = () => {

    const diaryList = useContext(DiaryStateContext);
    
    const [data, setDate] = useState([]);

    const [curDate, setCurDate] = useState(new Date());
    const month = curDate.getMonth() + 1;
    const headText = curDate.getFullYear() + '년' + month + '월'; 

    useEffect( () => {
        if(diaryList.length >- 1) {

            const firstDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth(),
                1
            ).getTime();

            const lastDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth() + 1,
                0,
                23,
                59,
                59
            ).getTime();

            setDate(diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay))
        }
    }, [diaryList, curDate]);

    useEffect(() => {
        //console.log(data);
    }, [data]);

    const increaseMonth = ()=>{
        setCurDate(
            new Date(curDate.getFullYear() , curDate.getMonth() + 1 , curDate.getDate())
        );
    };

    const decreaseMonth = () => {
        setCurDate(
            new Date(curDate.getFullYear() , curDate.getMonth() - 1 , curDate.getDate())
        )
    };

    console.log(user.name);

    return (
        <div>
            <MyHeader
                headText = {headText}
                leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
                rightChild={<MyButton text={">"} onClick={increaseMonth} />}
            />
            <DiaryList diaryList={data} />
        </div>
    );
};

export default Home;