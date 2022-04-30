import React from "react";
import "./story.css";
import HTMLFlipBook from "react-pageflip";
import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import useWindowWide from "./usewidth";

let draft = [
  "/Img/Draft/page1-2.jpg",
  "/Img/Draft/page3-4.jpg",
  "/Img/Draft/page5-6.jpg",
  "/Img/Draft/page7-8.jpg",
  "/Img/Draft/page9-10.jpg",
  "/Img/Draft/page11-12.jpg",
  "/Img/Draft/page13-14.jpg",
  "/Img/Draft/page15-16.jpg",
  "/Img/Draft/page17-18.jpg",
  "/Img/Draft/page19-20.jpg",
  "/Img/Draft/page21-22.jpg",
  "/Img/Draft/page23-24.jpg",
  "/Img/Draft/page25-26.jpg",
];
let final = [
  "/Img/Final/page1-2.jpg",
  "/Img/Final/page3-4.jpg",
  "/Img/Final/page5-6.jpeg",
  "/Img/Final/page7-8.jpeg",
  "/Img/Final/page9-10.jpg",
  "/Img/Final/page11-12.jpg",
  "/Img/Final/page13-14.jpg",
  "/Img/Final/page15-16.jpg",
  "/Img/Final/page17-18.jpeg",
  "/Img/Final/page19-20.jpg",
  "/Img/Final/page21-22.jpg",
  "/Img/Final/page23-24.jpg",
  "/Img/Final/page25-26.jpg",
];
function Story() {
  const [showing, setShowing] = useState(1);
  const [arr, setArr] = useState(draft);
  const [btn1, setBtn1] = useState("dark");
  const [btn2, setBtn2] = useState("light");
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(500);
  const widthScreen = useWindowWide();
  const book = useRef();
  useEffect(() => {
    if (widthScreen < 600) {
      setWidth(400);
      setHeight(300);
    } else {
      setWidth(Math.ceil((0.9 * widthScreen) / 3));
      setHeight(Math.ceil((0.6 * widthScreen) / 3));
    }
  }, [widthScreen]);

  useEffect(() => {
    if (showing) {
      setArr(draft);
    } else {
      setArr(final);
    }
  }, [showing]);
  return (
    <div className="storycontainer">
      <h1 className="title">Story</h1>
      <div className="book-text">
        <div className="flex">
          <div style={{ marginBottom: "10px" }}>
            <Button
              variant={btn1}
              onClick={() => {
                setBtn1("dark");
                setBtn2("light");
                setShowing(1);
              }}
            >
              草稿圖
            </Button>
            <Button
              variant={btn2}
              onClick={() => {
                setBtn1("light");
                setBtn2("dark");
                setShowing(0);
              }}
            >
              完成品
            </Button>
          </div>
          <HTMLFlipBook
            // onFlip={updatePage}
            width={width}
            height={height}
            ref={book}
          >
            <div className="page">
              <img src={arr[0]} alt="person" />
            </div>
            <div className="page">
              <img src={arr[1]} alt="person" />
            </div>
            <div className="page">
              <img src={arr[2]} alt="person" />
            </div>
            <div className="page">
              <img src={arr[3]} alt="person" />
            </div>
            <div className="page">
              <img src={arr[4]} alt="person" />
            </div>
            <div className="page">
              <img src={arr[5]} alt="person" />
            </div>
            <div className="page">
              <img src={arr[6]} alt="person" />
            </div>
            <div className="page">
              <img src={arr[7]} alt="person" />
            </div>
            <div className="page">
              <img src={arr[8]} alt="person" />
            </div>
            <div className="page">
              <img src={arr[9]} alt="person" />
            </div>
            <div className="page">
              <img src={arr[10]} alt="person" />
            </div>
            <div className="page">
              <img src={arr[11]} alt="person" />
            </div>
            <div className="page">
              <img src={arr[12]} alt="person" />
            </div>
          </HTMLFlipBook>
          <div className="storyfooter">
            <div
              onClick={() => {
                book.current.pageFlip().flipPrev();
              }}
              className={"previous button"}
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA7klEQVRIie3WPUoDURQG0EMwaYO6AdO4h3TptLGyF7ICt2Bl7yK0CLgMK/cgKij+lEKqxLEYAkN4wzTvzkPIB9POYWa+d+eyyz/NHO/4xnkf4D4WqBrXVzQ6w+sWWuEjChziGusE+oOzCHSChwRY4RHHEeiF+om2wV/cYJQbHOMuAVbqbzzLDcIUTy3oPQ5yg3u4wioBLnGZG6RQgU6lC7RWH6FhBArPCTRrgQa5bpQrxV41hcq1SZHj1EzXADmMxMe4bcHDRmYzvf8kmjlSsHhdi8BJJE776vMWDZNe9j71OBnneFEver2st7t05g+3FY1kHntV5gAAAABJRU5ErkJggg==" />
            </div>
            <div
              onClick={() => {
                book.current.pageFlip().flipNext();
              }}
              className={"next button"}
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA6klEQVRIie3WMUpDQRAG4M+Q2AY9gTbewUqttLIJtqIn8ApW9h5CCyHHsPIOIk8wEcuAlfFZvBSik87ZtcgP2z34ln2zs8Mq/yQneMME56XQtQXaflt32CiBv/6AWzTYy4aPMQvwOa4wyMS3cR/gLR6wk4n3cYmPAH/HRSYOu3gM8BZjbGbiQ9wswRvsZ+JwKi68T1xjPRPfUrHwBrqrNQ/wGQ4zcbp/2wT4U/RxL3s3CzwlVY66Slcrfp2GuA3A1AZygOclaErLrPJIVCmgI5UGgZcATR99en7PXMWGvRGmun57VgJc5c/zBXwXjnKLHYfNAAAAAElFTkSuQmCC" />
            </div>
          </div>
        </div>
        <div className="storytext">
          <div className="storygroup-title">謎</div>
          <div className="storygroup-container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            tempora ab laudantium voluptatibus aut eos placeat laborum,
            quibusdam exercitationem labore. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Consectetur tempora ab laudantium
            voluptatibus aut eos placeat laborum, quibusdam exercitationem
            labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur tempora ab laudantium voluptatibus aut eos placeat
            laborum, quibusdam exercitationem labore.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
