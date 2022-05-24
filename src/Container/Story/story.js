import React from "react";
import "./story.css";
import HTMLFlipBook from "react-pageflip";
import { useEffect, useRef, useState, Component } from "react";
import { Button } from "react-bootstrap";
import useWindowWide from "./usewidth";

let draft = [
  "/Img/Draft/cover.jpg",
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
  "/Img/Draft/backcover.jpg",
];
let final = [
  "/Img/Final/cover.jpg",
  "/Img/Final/page1-2.jpg",
  "/Img/Final/page3-4.jpg",
  "/Img/Final/page5-6.jpg",
  "/Img/Final/page7-8.jpg",
  "/Img/Final/page9-10.jpg",
  "/Img/Final/page11-12.jpg",
  "/Img/Final/page13-14.jpg",
  "/Img/Final/page15-16.jpg",
  "/Img/Final/page17-18.jpg",
  "/Img/Final/page19-20.jpeg",
  "/Img/Final/page21-22.jpg",
  "/Img/Final/page23-24.jpg",
  "/Img/Final/page25-26.jpg",
  "/Img/Final/backcover.jpg",
];
let object = [
  "/Img/object/object1.jpg",
  "/Img/object/object2.jpg",
  "/Img/object/object3.jpg",
  "/Img/object/object4.jpg",
  "/Img/object/object5.jpg",
  "/Img/object/object6.jpg",
  "/Img/object/object7.jpg",
  "/Img/object/object8.jpg",
];

function Story() {
  const [showing, setShowing] = useState(1);
  const [arr, setArr] = useState(draft);
  const [btn1, setBtn1] = useState("dark");
  const [btn2, setBtn2] = useState("light");
  const [btn3, setBtn3] = useState("light");
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(500);
  const widthScreen = useWindowWide();
  const [content, setCntent] = useState(
    "這次故事的主題是欺騙，我們想到以懸疑故事來作為出發點，從一些社會上發生的凶殺案來做發想設計，原本我們想以線索探索方式，但是這樣可能會對讀者是否可以發現線索產生疑慮，所以我們欺騙的方式改從劇情方面設計，希望這樣能夠讓讀者能夠輕鬆了解這個故事的劇情。畫面上我們是希望讀者能夠更代入到這個故事中，所以以一個互動書的方式來設計，在書中可以發現一些機關可以操作並觀察，假想你身處在這起案件的偵查工作中；在書外，我們額外添加NFC感應的機關，掃NFC後手機將會收到簡訊通知，故事中的騷擾訊息將會顯示在你的手機上，讓讀者更能感受到這個故事的氛圍。"
  );
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
    if (showing === 1) {
      setArr(draft);
      setCntent(
        "這次故事的主題是欺騙，我們想到以懸疑故事來作為出發點，從一些社會上發生的凶殺案來做發想設計，原本我們想以線索探索方式，但是這樣可能會對讀者是否可以發現線索產生疑慮，所以我們欺騙的方式改從劇情方面設計，希望這樣能夠讓讀者能夠輕鬆了解這個故事的劇情。畫面上我們是希望讀者能夠更代入到這個故事中，所以以一個互動書的方式來設計，在書中可以發現一些機關可以操作並觀察，假想你身處在這起案件的偵查工作中；在書外，我們額外添加NFC感應的機關，掃NFC後手機將會收到簡訊通知，故事中的騷擾訊息將會顯示在你的手機上，讓讀者更能感受到這個故事的氛圍。"
      );
    } else if (showing === 2) {
      setArr(final);
      setCntent(
        "這個故事的背景設定是在一起凶殺案的調查中開始，案發現場位於郊區的一棟房子內，我們以一位警察的視角調查現場有無可疑的線索。在調查中，警察發現了一本日記本，從中了解兇手先前曾經不斷跟蹤受害者並且傳騷擾訊息給她，受害者將兇手的種種詭異行徑記錄下來。警察繼續接著調查，然而接下來並沒有發現其他線索，他也只好先結束這次行動。經過一整天下來，警察獨自疲憊的回家，但當警察回到家要打開房門時，裡頭竟是各種的器官，利用罐子一個一個展示起來，這時警察才慢慢露出他的真面目，沒想到真正的兇手是警察本人。"
      );
    } else {
      setArr(object);
      setCntent(
        "物件主要是想讓玩家有更好的體驗感，藉由物件讓玩家更沈浸在在這個故事當中，設計風格是以恐怖漫畫風為主。"
      );
    }
  }, [showing]);

  function Otherpages(params) {
    if (showing < 3) {
      return (
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
          <div className="page">
            <img src={arr[13]} alt="person" />
          </div>
          <div className="page">
            <img src={arr[14]} alt="person" />
          </div>
        </HTMLFlipBook>
      );
    } else {
      return (
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
        </HTMLFlipBook>
      );
    }
  }

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
                setBtn3("light");
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
                setBtn3("light");
                setShowing(2);
              }}
            >
              完成品
            </Button>
            <Button
              variant={btn3}
              onClick={() => {
                setBtn1("light");
                setBtn2("light");
                setBtn3("dark");
                setShowing(3);
              }}
            >
              物件
            </Button>
          </div>
          <Otherpages />
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
          <div className="storygroup-container">{content}</div>
        </div>
      </div>
    </div>
  );
}

export default Story;
