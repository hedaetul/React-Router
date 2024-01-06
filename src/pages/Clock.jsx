import * as DateFns from "date-fns";
import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";

function getTimes(date) {
  return {
    hours: DateFns.getHours(date),
    minutes: DateFns.getMinutes(date),
    seconds: DateFns.getSeconds(date),
  };
}

function formateTime(time) {
  return time < 10 ? `0${time}` : time;
}

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, 1000);
  }, [date]);

  const time = getTimes(date);
  return (
    <Layout>
      <h1>Clock</h1>
      <h1>
        {formateTime(time.hours)} : {formateTime(time.minutes)} : {formateTime(time.seconds)}
      </h1>
    </Layout>
  );
}

export default Clock;
