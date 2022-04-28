import React from "react";
import "./story.css";
import HTMLFlipBook from "react-pageflip";
import { useEffect, useRef, useState } from "react";
import useWindowWide from "./usewidth";

let thepage = [];
for (let i = 0; i < 13; i++) {
  thepage[i] = i * 2 + 1;
}
console.log(thepage);
let pageNum = 0;
function Story() {
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(500);
  const widthScreen = useWindowWide();
  const [page, setPage] = useState(1);
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

  const updatePage = ({ data }) => console.log(data);
  return (
    <div className="storycontainer">
      <h1 className="title">Story</h1>
      <div className="book-text">
        <div className="flex">
          <HTMLFlipBook
            // onFlip={updatePage}
            width={width}
            height={height}
            ref={book}
          >
            <div className="page">
              <img src="/Img/Draft/page1-2.jpg" alt="person" />
            </div>
            <div className="page">
              <img src="/Img/Draft/page3-4.jpg" alt="person" />
            </div>
            <div className="page">
              <img src="/Img/Draft/page5-6.jpg" alt="person" />
            </div>
            <div className="page">
              <img src="/Img/Draft/page7-8.jpg" alt="person" />
            </div>
            <div className="page">
              <img src="/Img/Draft/page9-10.jpg" alt="person" />
            </div>
            <div className="page">
              <img src="/Img/Draft/page11-12.jpg" alt="person" />
            </div>
            <div className="page">
              <img src="/Img/Draft/page13-14.jpg" alt="person" />
            </div>
            <div className="page">
              <img src="/Img/Draft/page15-16.jpg" alt="person" />
            </div>
            <div className="page">
              <img src="/Img/Draft/page17-18.jpg" alt="person" />
            </div>
            <div className="page">
              <img src="/Img/Draft/page19-20.jpg" alt="person" />
            </div>
            <div className="page">
              <img src="/Img/Draft/page21-22.jpg" alt="person" />
            </div>
            <div className="page">
              <img src="/Img/Draft/page23-24.jpg" alt="person" />
            </div>
            <div className="page">
              <img src="/Img/Draft/page25-26.jpg" alt="person" />
            </div>
          </HTMLFlipBook>
          <div className="storyfooter">
            <div
              onClick={() => {
                book.current.pageFlip().flipPrev();
                if (pageNum > 0) {
                  pageNum--;
                  setPage(thepage[pageNum]);
                }
              }}
              className={"previous button"}
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA7klEQVRIie3WPUoDURQG0EMwaYO6AdO4h3TptLGyF7ICt2Bl7yK0CLgMK/cgKij+lEKqxLEYAkN4wzTvzkPIB9POYWa+d+eyyz/NHO/4xnkf4D4WqBrXVzQ6w+sWWuEjChziGusE+oOzCHSChwRY4RHHEeiF+om2wV/cYJQbHOMuAVbqbzzLDcIUTy3oPQ5yg3u4wioBLnGZG6RQgU6lC7RWH6FhBArPCTRrgQa5bpQrxV41hcq1SZHj1EzXADmMxMe4bcHDRmYzvf8kmjlSsHhdi8BJJE776vMWDZNe9j71OBnneFEver2st7t05g+3FY1kHntV5gAAAABJRU5ErkJggg==" />
            </div>
            <div
              onClick={() => {
                book.current.pageFlip().flipNext();
                if (pageNum < 1) {
                  pageNum++;
                  setPage(thepage[pageNum]);
                }
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
