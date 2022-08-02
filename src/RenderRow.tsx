import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  levelStyleOne,
  levelStyleThree,
  levelStyleTwo,
} from "./mainTableStyles";
import "./mtable.scss";
import { useImmer } from "use-immer";
import NumberFormat from "react-number-format";
import ArrowDown from "./ArrowDown";
import ArrowUp from "./ArrowUp";

interface day {
  day: number;
  plan: number | null;
  fact: number | null;
  forecast: number | null;
}

export interface MSG {
  id: number;
  id_parent: number | null;
  level: number | null;
  code: string;
  objTitle: string | null;
  objName: string | null;
  rdCode: string | null;
  rdStatus: string | null;
  rdDate: string | null;
  workGroup: string | null;
  workName: string;
  contractorCompany: string | null;
  executorId: number | null;
  executorName: string | null;
  unit: string | null;
  volumeTotal: number | null;
  startDate: string | null;
  endDate: string | null;
  humanHourCost: number | null;
  machineHourCost: number | null;
  costER: number | null;
  volumeDonePlan: number | null;
  volumeDoneForecast: number | null;
  volumeDoneFact: number | null;
  humanHoursTotal: number;
  humanHoursProgressTZ: number | null;
  humanHoursProgressPlan: number;
  humanHoursProgressForecast: number;
  humanHoursProgressFact: number;
  humanHoursProgressPercent: number | null;
  machineHoursTotal: number;
  costTotal: number;
  costTotalProgress: number | null;
  costProgressPlan: number;
  costProgressForecast: number;
  costProgressFact: number;
  costProgressPercent: number | null;
  costRemaining: number;
  year: number;
  month: number;
  dailyCharts: day[];
}

export interface MSGTree {
  children: MSGTree[];
  payload: MSG;
}

const MsgRenderComp = ({
  data,
  check,
}: {
  data: MSGTree;
  check: (num: number) => void;
}) => {
  const [openRow, setOpenRow] = useState(false);
  const stylesLevel = (lev: number | null) => {
    if (lev === 1) return levelStyleOne;
    if (lev === 2) return levelStyleTwo;
    if (lev === 3) return levelStyleThree;
    return undefined;
  };

  // Start Row
  const Row = (r: MSG) => {
    const [showUpdateMonth, setShowUpdateMonth] = useState(false);
    const [monthsFormFill, setMonthsFormFill] = useImmer(r.dailyCharts);

    function onFormMonthsSubmit(e: any) {
      e.preventDefault();
      //   monthsUpdateReq({
      //     id: Number(Object.values(params)[0]),
      //     year: r.year,
      //     month: r.month,
      //     body: {
      //       toUpdate: [
      //         {
      //           charts: monthsFormFill,
      //           workID: r.id,
      //         },
      //       ],
      //     },
      //   });
      //   console.log(monthsUpdateRes);

      setShowUpdateMonth(false);
    }

    // Row arrows styles
    const showArrows = () => {
      if (data.children.length) {
        if (openRow) return <ArrowDown />;
        return <ArrowUp />;
      }
      return undefined;
    };
    const rowLevelStyles = () => {
      let bc = "";
      let col = "";
      let p = "0.18rem 0.5rem 0.18rem 0.5rem !important";
      if (data.payload.level === 1) {
        bc = "rgba(109, 154, 220, 0.1)";
        col = "#0044B4";
        p = "1.4rem !important";
      }
      if (data.payload.level === 2) {
        bc = "rgba(246, 247, 251, 0.5)";
        col = "#2B3648";
      }
      return {
        backgroundColor: bc,
        color: col,
        fontWeight: 600,
        padding: p,
      };
    };

    // Row arrow styles

    // Пояснения к заливкам на странице
    // Экран 1 (ЦПГ): Заливка цветом: красный – процент выполнения меньше 50%, желтый – процент выполнения от 50 до 90%, зеленый – процент выполнения больше 100%.
    // Заливка цветом Экран 2 (МСГ): красный – процент выполнения меньше 50%, желтый – процент выполнения от 50 до 90%, зеленый – процент выполнения больше 100%.

    return (
      <Fragment>
        <tr style={rowLevelStyles()}>
          <td onClick={() => setOpenRow((prev) => !prev)} rowSpan={3}>
            <span style={{ position: "relative", cursor: "pointer" }}>
              <span style={{ position: "absolute", left: -24, top: 0 }}>
                {showArrows()}
              </span>
              <h5 style={stylesLevel(r.level)}>УР {r.level}</h5>
            </span>
          </td>
          <td rowSpan={3}>{r.code}</td>
          <td rowSpan={3}>{r.objTitle}</td>
          <td rowSpan={3}>{r.objName}</td>
          <td rowSpan={3}>{r.rdCode}</td>
          <td rowSpan={3}>{r.rdStatus}</td>
          <td rowSpan={3}>{r.rdDate}</td>
          <td rowSpan={3}>{r.workGroup}</td>
          <td rowSpan={3}>{r.contractorCompany}</td>
          <td rowSpan={3}>{r.executorName}</td>
          <td rowSpan={3}>{r.workName}</td>
          <td rowSpan={3}>{r.unit}</td>
          <td rowSpan={3}>
            {
              <NumberFormat
                displayType={"text"}
                value={r.volumeTotal}
                thousandSeparator={" "}
              />
            }
          </td>
          <td rowSpan={3}>
            {
              <NumberFormat
                displayType={"text"}
                value={r.volumeDonePlan}
                thousandSeparator={" "}
              />
            }
          </td>
          <td rowSpan={3}>
            {
              <NumberFormat
                displayType={"text"}
                value={r.volumeDoneForecast}
                thousandSeparator={" "}
              />
            }
          </td>
          <td rowSpan={3}>
            {
              <NumberFormat
                displayType={"text"}
                value={r.volumeDoneFact}
                thousandSeparator={" "}
              />
            }
          </td>
          <td rowSpan={3}>{r.startDate}</td>
          <td rowSpan={3}>{r.endDate}</td>
          <td rowSpan={3}>{r.humanHourCost}</td>
          <td rowSpan={3}>
            {
              <NumberFormat
                displayType={"text"}
                value={r.humanHoursTotal}
                thousandSeparator={" "}
              />
            }
          </td>

          <td rowSpan={3}>
            {
              <NumberFormat
                displayType={"text"}
                value={r.costER}
                thousandSeparator={" "}
              />
            }
          </td>
          <td rowSpan={3}>
            {
              <NumberFormat
                displayType={"text"}
                value={r.costTotal}
                thousandSeparator={" "}
              />
            }
          </td>

          <td rowSpan={3}>
            {
              <NumberFormat
                displayType={"text"}
                value={r.costRemaining}
                thousandSeparator={" "}
              />
            }
          </td>
          {data.children.length === 0 ? (
            <Fragment>
              <td
                style={{
                  textAlign: "left",
                  color: "#0044B4",
                  backgroundColor: "rgba(109, 154, 220, 0.06)",
                }}>
                План:
              </td>
              {r.dailyCharts.map((cell, index) => (
                <Fragment key={index}>
                  {!showUpdateMonth ? (
                    <td
                      style={{
                        color: "#0044B4",
                        backgroundColor: "rgba(109, 154, 220, 0.06)",
                      }}>
                      <span
                        onClick={
                          r.level === 3
                            ? () => {
                                setShowUpdateMonth(true);
                                check(r.id);
                              }
                            : undefined
                        }
                        className={r.level === 3 ? "hoverExecutorInput" : ""}
                        style={{
                          display: "block",
                          minHeight: "1rem",
                        }}>
                        {cell.plan === null || cell.plan === 0 ? (
                          "-"
                        ) : (
                          <NumberFormat
                            displayType={"text"}
                            value={cell.plan}
                            thousandSeparator={" "}
                          />
                        )}
                      </span>
                    </td>
                  ) : (
                    <td className="monthcell">
                      <span style={{ position: "relative" }}>
                        <span
                          onClick={() => setShowUpdateMonth(false)}
                          style={{ position: "absolute", top: -4, right: -4 }}>
                          <AiOutlineCloseCircle fontSize={12} color={"gray"} />
                        </span>
                        <form onSubmit={onFormMonthsSubmit}>
                          <input
                            value={monthsFormFill[index].plan!}
                            onChange={(e) =>
                              setMonthsFormFill((prev) => {
                                prev[index].plan = Number(e.target.value);
                                prev[index].day = cell.day;
                              })
                            }
                            className="monthinput"
                            type="number"
                          />
                          <button
                            style={{ display: "none" }}
                            type="submit"></button>
                        </form>
                      </span>
                    </td>
                  )}
                </Fragment>
              ))}
            </Fragment>
          ) : (
            <Fragment>
              <td rowSpan={3}></td>
              {Array(r.dailyCharts.length)
                .fill(0)
                .map(() => (
                  <td rowSpan={3}></td>
                ))}
            </Fragment>
          )}
        </tr>

        <tr
          style={{
            color: "#7890B2",
            backgroundColor: "rgba(208, 175, 255, 0.06)",
            padding: "0.18rem 0.5rem 0.18rem 0.5rem",
          }}>
          {data.children.length === 0 && (
            <Fragment>
              <td style={{ textAlign: "left", borderLeft: "none" }}>
                Прогноз:
              </td>
              {r.dailyCharts.map((cell, index) => (
                <Fragment key={index}>
                  {!showUpdateMonth ? (
                    <td>
                      <span
                        onClick={
                          r.level === 3
                            ? () => {
                                check(r.id);
                                setShowUpdateMonth(true);
                              }
                            : undefined
                        }
                        className={r.level === 3 ? "hoverExecutorInput" : ""}
                        style={{
                          display: "block",
                          minHeight: "1rem",
                        }}>
                        {cell.forecast === null || cell.forecast === 0 ? (
                          "-"
                        ) : (
                          <NumberFormat
                            displayType={"text"}
                            value={cell.forecast}
                            thousandSeparator={" "}
                          />
                        )}
                      </span>
                    </td>
                  ) : (
                    <td className="monthcell">
                      <span style={{ position: "relative" }}>
                        <span
                          onClick={() => setShowUpdateMonth(false)}
                          style={{ position: "absolute", top: -4, right: -4 }}>
                          <AiOutlineCloseCircle fontSize={12} color={"gray"} />
                        </span>
                        <form onSubmit={onFormMonthsSubmit}>
                          <input
                            value={monthsFormFill[index].forecast!}
                            onChange={(e) =>
                              setMonthsFormFill((prev) => {
                                prev[index].forecast = Number(e.target.value);
                                prev[index].day = cell.day;
                              })
                            }
                            className="monthinput"
                            type="number"
                          />
                          <button
                            style={{ display: "none" }}
                            type="submit"></button>
                        </form>
                      </span>
                    </td>
                  )}
                </Fragment>
              ))}
            </Fragment>
          )}
        </tr>

        <tr
          style={{
            color: "#2B3648",
            backgroundColor: "#FFFFFF",
            padding: "0.18rem 0.5rem 0.18rem 0.5rem",
          }}>
          {data.children.length === 0 && (
            <Fragment>
              <td style={{ textAlign: "left", borderLeft: "none" }}>Факт:</td>
              {r.dailyCharts.map((cell, index) => (
                <Fragment key={index}>
                  {!showUpdateMonth ? (
                    <td>
                      <span
                        onClick={
                          r.level === 3
                            ? () => {
                                setShowUpdateMonth(true);
                                check(r.id);
                              }
                            : undefined
                        }
                        className={r.level === 3 ? "hoverExecutorInput" : ""}
                        style={{
                          display: "block",
                          minHeight: "1rem",
                        }}>
                        {cell.fact === null || cell.fact === 0 ? (
                          "-"
                        ) : (
                          <NumberFormat
                            displayType={"text"}
                            value={cell.fact}
                            thousandSeparator={" "}
                          />
                        )}
                      </span>
                    </td>
                  ) : (
                    <td className="monthcell">
                      <span style={{ position: "relative" }}>
                        <span
                          onClick={() => setShowUpdateMonth(false)}
                          style={{ position: "absolute", top: -4, right: -4 }}>
                          <AiOutlineCloseCircle fontSize={12} color={"gray"} />
                        </span>
                        <form onSubmit={onFormMonthsSubmit}>
                          <input
                            value={monthsFormFill[index].fact!}
                            onChange={(e) =>
                              setMonthsFormFill((prev) => {
                                prev[index].fact = Number(e.target.value);
                                prev[index].day = cell.day;
                              })
                            }
                            className="monthinput"
                            type="number"
                          />
                          <button
                            style={{ display: "none" }}
                            type="submit"></button>
                        </form>
                      </span>
                    </td>
                  )}
                </Fragment>
              ))}
            </Fragment>
          )}
        </tr>
      </Fragment>
    );
  };
  // End Row

  return (
    <Fragment>
      {Row(data.payload)}
      {data.children.length !== 0 &&
        openRow &&
        data.children.map((v) => <MsgRenderComp check={check} data={v} />)}
    </Fragment>
  );
};

export default MsgRenderComp;
