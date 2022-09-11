import React from "react";
import { Tag, Divider } from "antd";
import "./index.less";

export interface ClockExampleProps {}

function ClockExample(props: ClockExampleProps) {
  return (
    <div className="clock-container">
      <h1>时钟</h1>
      <p>通过 HTML CSS JS 实现时钟</p>
      <Tag>时钟</Tag>
      <Tag>css</Tag>
      <Divider />
      <h2>第一部分，静止的时钟</h2>
      <div className="clock-border-circle">
        <div className="line">
          <div className="line line-30"></div>
          <div className="line line-60"></div>
          <div className="line line-90"></div>
          <div className="line line-120"></div>
          <div className="line line-150"></div>
          <div className="line line-180"></div>
        </div>
        <div className="inner-circle"></div>
        <div className="hour-hand"></div>
        <div className="minute-hand"></div>
        <div className="second-hand"></div>
        <div className="center-circle"></div>
      </div>
    </div>
  );
}

export default ClockExample;
