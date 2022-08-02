import { TableBody } from "@mui/material";
import { useState } from "react";
import data from "./data.json";

import MsgRenderComp from "./RenderRow";

export const monthsList = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

interface MSGProps {}

const MSG = (props: MSGProps) => {
  const [idShow, idSetShow] = useState(0);
  const {} = props;

  function check(id?: number) {
    return id;
  }
  console.log(check());
  return (
    <div
      style={{
        overflow: "auto",
        height: 800,
        marginTop: 16,
        borderRadius: "4px 4px 0 0 ",
      }}>
      <table>
        <thead>
          <tr>
            <th style={{ width: 135 }} rowSpan={2}></th>
            <th rowSpan={2}>ID</th>
            <th rowSpan={2}>Титул</th>
            <th style={{ width: 180 }} rowSpan={2}>
              Название объекта
            </th>
            <th style={{ width: 180 }} rowSpan={2}>
              Шифр РД
            </th>
            <th style={{ width: 180 }} rowSpan={2}>
              Статус выдачи РД
            </th>
            <th style={{ width: 180 }} rowSpan={2}>
              Дата выдачи РД
            </th>
            <th style={{ width: 189 }} rowSpan={2}>
              Группа работ
            </th>
            <th style={{ width: 180 }} rowSpan={2}>
              Подрядчик
            </th>
            <th style={{ width: 227 }} rowSpan={2}>
              Исполнитель
            </th>

            <th style={{ width: 399 }} rowSpan={2}>
              Наименование работы
            </th>
            <th style={{ width: 180 }} rowSpan={2}>
              Единица измерения
            </th>
            <th style={{ width: 180 }} rowSpan={2}>
              Общий объем
            </th>
            <th colSpan={3}>Выполненый объём работ </th>
            <th style={{ width: 180 }} rowSpan={2}>
              Дата начала
            </th>
            <th style={{ width: 180 }} rowSpan={2}>
              Дата окончания
            </th>
            <th style={{ width: 180 }} rowSpan={2}>
              Трудозатраты
              <br /> на ед. изм., чел-час
            </th>
            <th style={{ width: 180 }} rowSpan={2}>
              Трудозатраты
              <br /> общие, чел-час
            </th>
            <th style={{ width: 180 }} rowSpan={2}>
              Стоимость ЕР, <br /> рублей
            </th>
            <th style={{ width: 180 }} rowSpan={2}>
              Общая стоимость, <br /> рублей
            </th>
            <th style={{ width: 180 }} rowSpan={2}>
              Остаток стоимости, <br /> рублей
            </th>
            <th
              colSpan={
                data.data[0]?.payload.dailyCharts.length
                  ? data.data[0]?.payload.dailyCharts.length + 1
                  : 30
              }>
              {monthsList[new Date().getMonth()] +
                ", " +
                new Date().getFullYear()}
            </th>
          </tr>
          <tr>
            <th style={{ width: 100 }}>План</th>
            <th style={{ width: 100 }}>Прогноз</th>
            <th style={{ width: 100 }}>Факт</th>
            <th style={{ width: 89 }}></th>

            {data.data[0]?.payload.dailyCharts.map((month) => (
              <th style={{ width: 89 }} key={month.day} rowSpan={2}>
                {month.day}
              </th>
            ))}
          </tr>
        </thead>
        <TableBody>
          {data.data.map((r, index) => (
            <MsgRenderComp key={index} check={check} data={r!} />
          ))}
        </TableBody>
      </table>
    </div>
  );
};

export default MSG;
