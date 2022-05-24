import React from "react";
import { Card, Button } from "react-bootstrap";
import "./member.css";
function member() {
  return (
    <div className="membercontainer">
      <h1 className="title">Member</h1>
      <div className="sgroup">
        <Card>
          <Card.Img variant="top" src="/Img/member/WEN.png" />
          <Card.Body>
            <Card.Title>Wen</Card.Title>
            <span>Job</span>
            <Card.Text>前導網頁，關於網頁的製作</Card.Text>
            <span>Skill</span>
            <Card.Text>React/ node.js/ mongodb</Card.Text>
            <span>Contact</span>
            <div className="contactImg">
              <a
                href="https://www.instagram.com/chao_brother/?hl=zh-tw"
                target="_blank"
              >
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADBUlEQVRoge2avU8UQRjGfxqw4aJYqlxh5MNIYxQojFqI16I0/ifGfwCjliqFH0Gp7cSI0eMIkPgnKBBLsFIwAQQbDot5x1su7OzOh8wW9yRP9pKb95n32Z3ZeXdnoYUW/guOWLbvA24DFeAMUAY6AuXyG1gBVoEq8BZYDqT9DwNADdg7ZH4GroQw0A6MA/UIJjTrwFOgzdXESWA2ooFm1iQnK7QTZyhlcQE4ZmNkvABJp/FJXhMDxJ0TWawDl/MYKeKQamY1y0Rf5ATfA13C6Yy2PSYj9yIb6UrkUs5oezeZ+NEmIzdNLguGiunPZfzP6howAdxCDdUOoS5vXgHrKbHTqCtRBj5k9LNkMrLhYWAbGAOOmzoQnADuS4xrfxumDlxFV9l/S6wAL1FnbUu4CLxg//AdkFjXfoMaWaUxSXuB+RwxczTuOl0eZoIZ2aZxJa6TPvbT5tI1iR0EdmIaGZO4XksTSTPdovEwlpE11KSFfMMpjbOi0elwMoIYmZCYiocJzWHReu1qpHlBtMGUHO94aGhojSljKwvYnI1eiVmyjDuIi6JlW+sFMVKSmM0ARjZFq+RqxGdohURdjs75+Bg5LcfvHhoaWuOUq4CPkQtyXPDQ0NAa/a4CPkZG5PjGQ0NDa4wYW1nAZqIlF8Q5y9gka6LRCfyyjA1iZA9VigOcBX44xCdLlEcO8cGM7KBKcVAF4JpF7E/gqsQOEblo3GN/Gd9NvreTNeCcxJRRdy2XvoMa0WYGEzrDwHPgK2qx2wS+AM+AG4l2Qx4mjEZ8HnV3gAeoSZuFTtSc+OPRn/FRN8TLh3VUFTsKnEeVHSX5PQpMYn93OojGlw/VAB0cFj8mE29eEDNfRRYIn0x/9hD/TOelfoxIxUwBksyi8WpoXAR2C5BsGnfJua0Aas8udsJpfJzXBKiNxyIOsXkst95AbTwWadNnhnyL7YFoQ+3ZxdyK20UNJ+ft6ST6gXcRTFSBS3kStP2Eo4fGJxxlVNVbMkbkxxbqE44VGp9wfAuk3UILrvgLg845wjFhUzAAAAAASUVORK5CYII=" />
              </a>
              <a href="https://github.com/WenHank" target="_blank">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEJklEQVRoge3ZS2heRRQH8J8xIalpah82VolWqa9INYIKaqoixUerBRFB8LURxSeRom4VN+JGLBFcuXHlRtGFz6ogqPjoopHWapoarVVbkJpYm/pI/FzM/ezNzfeY+73SRf5wyM29M+ec/8yZmTPnYwHHFo5roK5luBqDOB9r0Ivu5PthHMB3+Bof4yNMNNCHmtGJO/AuplHIKdN4G7cnulqORdiMnyKcjZV9eBRdrSKxAWMNJJCV3bi+mQQ6saWJBLLysjDzDcXJ2NZCEkX5QtgwGoIzhOluNYmijCY+1IWV+GYeSRRlDKtqJdFlfsKpUpjVtEW/eAw4n5XhvCQ2VFH4hBB2l+BJfF+Hc7vwOAaE7OC5Ku2viyWxSPVzoi/TpyshdATvYwjrcLaQonTjnOTdg3gDh/AIjs/oGqhie1RkiG2uoqig/OnbEWOgSttTIuwPVVPeKS7taPhBlcKqCPs/ysxKW0bJrTg1wtjqOp2thDURbfpwS/pFlsjdkcYujGxXCy6KbHdX+p80kWVYH6lkbWS7WjAQ2e5aLCn14WZx2+WksCCbhX78HenLpmKn9IysizT0En6p39+y2IXXItteWXxIE+mP7PxKrEd14NXIdueVejmq+lT+g/a63ayOcyN8KQgJLWbPyPIIA5PCPbvZmIpst6L4kB7dnoiOPULlpZDDqVpwYup5WkhnYKnZlZ//fU4TKTa4Br8lnSeEdKRlBYEEO1L+tDvqcNGf5UKxomQ5a0IY6c+wHXvwq7BD7UnJbc3xfRaGlV8XhxO/CjhY7JBm9K2QoX6IESE1Hxdm5/dEJh0l3Ey0CeHVg8WJrBRSo9OFQ/MGYbH3Mzu0xhMinwsVwTOFMOtNKVua/L1XqHI0A8OJ/ilh0I4kz/vxA/ZiZ0JkvJSCp8Vfhv4Qf4DmwX34N4cfT5VSsj6HgoIwSvdoTP24E8/mJFEQImYOTsBfORUV8KmQ82RvejHoFgZjTw12/5S6F2VH8x2ly5V3Jp2ewUllnDogXHM/ERbhXmF3mUy+r3B0wV6Aq4QRXRzDuATewo3lPm5SfssbFO7g+8u0yYbdY0KFsoje5N1URP8Y2ViJZZvw+0WpjiPJ90uFrbgSicEKNgYbQGa3uZfCORiqoKA4lWuFMDwkrKuDQihtxU3VDOD+Ook8FGFDB74qo+DNGAURaKtgo5pslyMDvwIzJZTMaNz58UANJGZwWV5DL5RRNiEU1vpExGkFnFUDkS21GOrABzkN5TlLOnLqfk++AuAsLJEvlvMiVu9OIc+rC6uFn5Pni8gOnFYXgxR6hJO01US2asBMZNEhpNildrNGE5nB85pc6LgYX5ZxIC9K6RjB5Q3xNALtwhac/h1lXw16fk71H8PDWlNumoM2IW15XYVMtAI2JX03qu9MWsACmoX/ALeEN4NrGxnlAAAAAElFTkSuQmCC" />
              </a>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="/Img/member/BEL.png" />
          <Card.Body>
            <Card.Title>貝貝</Card.Title>
            <span>Job</span>
            <Card.Text>故事發想，線搞上色</Card.Text>
            <span>Skill</span>
            <Card.Text>
              Ai/ Ps/ Id/ Lr/ Clip/ Maya/ FCPX/ DaVinCi Resolve/ Opentoonz/
              Canva
            </Card.Text>
            <span>Contact</span>
            <div className="contactImg">
              <a
                href="https://zxcasdf50421.wixsite.com/my-site/%E9%97%9C%E6%96%BC%E6%88%91-1"
                target="_blank"
              >
                <img
                  style={{ width: "50px" }}
                  src="data:image/png;base64,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"
                />
              </a>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="/Img/member/REN.png" />
          <Card.Body>
            <Card.Title>任力加</Card.Title>
            <span>Job</span>
            <Card.Text>繪本封面草圖，封面設計，LOGO設計</Card.Text>
            <span>Skill</span>
            <Card.Text>PS/ AI/ Clip</Card.Text>
            <span>Contact</span>
            <div className="contactImg">
              <a href="https://www.instagram.com/j_zzq_/" target="_blank">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADBUlEQVRoge2avU8UQRjGfxqw4aJYqlxh5MNIYxQojFqI16I0/ifGfwCjliqFH0Gp7cSI0eMIkPgnKBBLsFIwAQQbDot5x1su7OzOh8wW9yRP9pKb95n32Z3ZeXdnoYUW/guOWLbvA24DFeAMUAY6AuXyG1gBVoEq8BZYDqT9DwNADdg7ZH4GroQw0A6MA/UIJjTrwFOgzdXESWA2ooFm1iQnK7QTZyhlcQE4ZmNkvABJp/FJXhMDxJ0TWawDl/MYKeKQamY1y0Rf5ATfA13C6Yy2PSYj9yIb6UrkUs5oezeZ+NEmIzdNLguGiunPZfzP6howAdxCDdUOoS5vXgHrKbHTqCtRBj5k9LNkMrLhYWAbGAOOmzoQnADuS4xrfxumDlxFV9l/S6wAL1FnbUu4CLxg//AdkFjXfoMaWaUxSXuB+RwxczTuOl0eZoIZ2aZxJa6TPvbT5tI1iR0EdmIaGZO4XksTSTPdovEwlpE11KSFfMMpjbOi0elwMoIYmZCYiocJzWHReu1qpHlBtMGUHO94aGhojSljKwvYnI1eiVmyjDuIi6JlW+sFMVKSmM0ARjZFq+RqxGdohURdjs75+Bg5LcfvHhoaWuOUq4CPkQtyXPDQ0NAa/a4CPkZG5PjGQ0NDa4wYW1nAZqIlF8Q5y9gka6LRCfyyjA1iZA9VigOcBX44xCdLlEcO8cGM7KBKcVAF4JpF7E/gqsQOEblo3GN/Gd9NvreTNeCcxJRRdy2XvoMa0WYGEzrDwHPgK2qx2wS+AM+AG4l2Qx4mjEZ8HnV3gAeoSZuFTtSc+OPRn/FRN8TLh3VUFTsKnEeVHSX5PQpMYn93OojGlw/VAB0cFj8mE29eEDNfRRYIn0x/9hD/TOelfoxIxUwBksyi8WpoXAR2C5BsGnfJua0Aas8udsJpfJzXBKiNxyIOsXkst95AbTwWadNnhnyL7YFoQ+3ZxdyK20UNJ+ft6ST6gXcRTFSBS3kStP2Eo4fGJxxlVNVbMkbkxxbqE44VGp9wfAuk3UILrvgLg845wjFhUzAAAAAASUVORK5CYII=" />
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="sgroup">
        <Card>
          <Card.Img variant="top" src="/Img/member/TU.png" />
          <Card.Body>
            <Card.Title>涂紜瑄</Card.Title>
            <span>Job</span>
            <Card.Text>簡訊網頁製作，NFC製作</Card.Text>
            <span>Skill</span>
            <Card.Text>JavaScript/ Canva</Card.Text>
            <span>Contact</span>
            <div className="contactImg">
              <a href="https://www.instagram.com/hsuan_503/" target="_blank">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADBUlEQVRoge2avU8UQRjGfxqw4aJYqlxh5MNIYxQojFqI16I0/ifGfwCjliqFH0Gp7cSI0eMIkPgnKBBLsFIwAQQbDot5x1su7OzOh8wW9yRP9pKb95n32Z3ZeXdnoYUW/guOWLbvA24DFeAMUAY6AuXyG1gBVoEq8BZYDqT9DwNADdg7ZH4GroQw0A6MA/UIJjTrwFOgzdXESWA2ooFm1iQnK7QTZyhlcQE4ZmNkvABJp/FJXhMDxJ0TWawDl/MYKeKQamY1y0Rf5ATfA13C6Yy2PSYj9yIb6UrkUs5oezeZ+NEmIzdNLguGiunPZfzP6howAdxCDdUOoS5vXgHrKbHTqCtRBj5k9LNkMrLhYWAbGAOOmzoQnADuS4xrfxumDlxFV9l/S6wAL1FnbUu4CLxg//AdkFjXfoMaWaUxSXuB+RwxczTuOl0eZoIZ2aZxJa6TPvbT5tI1iR0EdmIaGZO4XksTSTPdovEwlpE11KSFfMMpjbOi0elwMoIYmZCYiocJzWHReu1qpHlBtMGUHO94aGhojSljKwvYnI1eiVmyjDuIi6JlW+sFMVKSmM0ARjZFq+RqxGdohURdjs75+Bg5LcfvHhoaWuOUq4CPkQtyXPDQ0NAa/a4CPkZG5PjGQ0NDa4wYW1nAZqIlF8Q5y9gka6LRCfyyjA1iZA9VigOcBX44xCdLlEcO8cGM7KBKcVAF4JpF7E/gqsQOEblo3GN/Gd9NvreTNeCcxJRRdy2XvoMa0WYGEzrDwHPgK2qx2wS+AM+AG4l2Qx4mjEZ8HnV3gAeoSZuFTtSc+OPRn/FRN8TLh3VUFTsKnEeVHSX5PQpMYn93OojGlw/VAB0cFj8mE29eEDNfRRYIn0x/9hD/TOelfoxIxUwBksyi8WpoXAR2C5BsGnfJua0Aas8udsJpfJzXBKiNxyIOsXkst95AbTwWadNnhnyL7YFoQ+3ZxdyK20UNJ+ft6ST6gXcRTFSBS3kStP2Eo4fGJxxlVNVbMkbkxxbqE44VGp9wfAuk3UILrvgLg845wjFhUzAAAAAASUVORK5CYII=" />
              </a>
              <a href="https://github.com/Tu-yunhsuan" target="_blank">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEJklEQVRoge3ZS2heRRQH8J8xIalpah82VolWqa9INYIKaqoixUerBRFB8LURxSeRom4VN+JGLBFcuXHlRtGFz6ogqPjoopHWapoarVVbkJpYm/pI/FzM/ezNzfeY+73SRf5wyM29M+ec/8yZmTPnYwHHFo5roK5luBqDOB9r0Ivu5PthHMB3+Bof4yNMNNCHmtGJO/AuplHIKdN4G7cnulqORdiMnyKcjZV9eBRdrSKxAWMNJJCV3bi+mQQ6saWJBLLysjDzDcXJ2NZCEkX5QtgwGoIzhOluNYmijCY+1IWV+GYeSRRlDKtqJdFlfsKpUpjVtEW/eAw4n5XhvCQ2VFH4hBB2l+BJfF+Hc7vwOAaE7OC5Ku2viyWxSPVzoi/TpyshdATvYwjrcLaQonTjnOTdg3gDh/AIjs/oGqhie1RkiG2uoqig/OnbEWOgSttTIuwPVVPeKS7taPhBlcKqCPs/ysxKW0bJrTg1wtjqOp2thDURbfpwS/pFlsjdkcYujGxXCy6KbHdX+p80kWVYH6lkbWS7WjAQ2e5aLCn14WZx2+WksCCbhX78HenLpmKn9IysizT0En6p39+y2IXXItteWXxIE+mP7PxKrEd14NXIdueVejmq+lT+g/a63ayOcyN8KQgJLWbPyPIIA5PCPbvZmIpst6L4kB7dnoiOPULlpZDDqVpwYup5WkhnYKnZlZ//fU4TKTa4Br8lnSeEdKRlBYEEO1L+tDvqcNGf5UKxomQ5a0IY6c+wHXvwq7BD7UnJbc3xfRaGlV8XhxO/CjhY7JBm9K2QoX6IESE1Hxdm5/dEJh0l3Ey0CeHVg8WJrBRSo9OFQ/MGYbH3Mzu0xhMinwsVwTOFMOtNKVua/L1XqHI0A8OJ/ilh0I4kz/vxA/ZiZ0JkvJSCp8Vfhv4Qf4DmwX34N4cfT5VSsj6HgoIwSvdoTP24E8/mJFEQImYOTsBfORUV8KmQ82RvejHoFgZjTw12/5S6F2VH8x2ly5V3Jp2ewUllnDogXHM/ERbhXmF3mUy+r3B0wV6Aq4QRXRzDuATewo3lPm5SfssbFO7g+8u0yYbdY0KFsoje5N1URP8Y2ViJZZvw+0WpjiPJ90uFrbgSicEKNgYbQGa3uZfCORiqoKA4lWuFMDwkrKuDQihtxU3VDOD+Ook8FGFDB74qo+DNGAURaKtgo5pslyMDvwIzJZTMaNz58UANJGZwWV5DL5RRNiEU1vpExGkFnFUDkS21GOrABzkN5TlLOnLqfk++AuAsLJEvlvMiVu9OIc+rC6uFn5Pni8gOnFYXgxR6hJO01US2asBMZNEhpNildrNGE5nB85pc6LgYX5ZxIC9K6RjB5Q3xNALtwhac/h1lXw16fk71H8PDWlNumoM2IW15XYVMtAI2JX03qu9MWsACmoX/ALeEN4NrGxnlAAAAAElFTkSuQmCC" />
              </a>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="/Img/member/PU.png" />
          <Card.Body>
            <Card.Title>蒲芳榆</Card.Title>
            <span>Job</span>
            <Card.Text>故事發想，動畫製做，物件製作</Card.Text>
            <span>Skill</span>
            <Card.Text>PS/ AI</Card.Text>
            <span>Contact</span>
            <div className="contactImg">
              <a
                href="https://instagram.com/0619______?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADBUlEQVRoge2avU8UQRjGfxqw4aJYqlxh5MNIYxQojFqI16I0/ifGfwCjliqFH0Gp7cSI0eMIkPgnKBBLsFIwAQQbDot5x1su7OzOh8wW9yRP9pKb95n32Z3ZeXdnoYUW/guOWLbvA24DFeAMUAY6AuXyG1gBVoEq8BZYDqT9DwNADdg7ZH4GroQw0A6MA/UIJjTrwFOgzdXESWA2ooFm1iQnK7QTZyhlcQE4ZmNkvABJp/FJXhMDxJ0TWawDl/MYKeKQamY1y0Rf5ATfA13C6Yy2PSYj9yIb6UrkUs5oezeZ+NEmIzdNLguGiunPZfzP6howAdxCDdUOoS5vXgHrKbHTqCtRBj5k9LNkMrLhYWAbGAOOmzoQnADuS4xrfxumDlxFV9l/S6wAL1FnbUu4CLxg//AdkFjXfoMaWaUxSXuB+RwxczTuOl0eZoIZ2aZxJa6TPvbT5tI1iR0EdmIaGZO4XksTSTPdovEwlpE11KSFfMMpjbOi0elwMoIYmZCYiocJzWHReu1qpHlBtMGUHO94aGhojSljKwvYnI1eiVmyjDuIi6JlW+sFMVKSmM0ARjZFq+RqxGdohURdjs75+Bg5LcfvHhoaWuOUq4CPkQtyXPDQ0NAa/a4CPkZG5PjGQ0NDa4wYW1nAZqIlF8Q5y9gka6LRCfyyjA1iZA9VigOcBX44xCdLlEcO8cGM7KBKcVAF4JpF7E/gqsQOEblo3GN/Gd9NvreTNeCcxJRRdy2XvoMa0WYGEzrDwHPgK2qx2wS+AM+AG4l2Qx4mjEZ8HnV3gAeoSZuFTtSc+OPRn/FRN8TLh3VUFTsKnEeVHSX5PQpMYn93OojGlw/VAB0cFj8mE29eEDNfRRYIn0x/9hD/TOelfoxIxUwBksyi8WpoXAR2C5BsGnfJua0Aas8udsJpfJzXBKiNxyIOsXkst95AbTwWadNnhnyL7YFoQ+3ZxdyK20UNJ+ft6ST6gXcRTFSBS3kStP2Eo4fGJxxlVNVbMkbkxxbqE44VGp9wfAuk3UILrvgLg845wjFhUzAAAAAASUVORK5CYII=" />
              </a>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="/Img/member/GUAN.png" />
          <Card.Body>
            <Card.Title>吳冠緯</Card.Title>
            <span>Job</span>
            <Card.Text>線搞上色，色彩計畫</Card.Text>
            <span>Skill</span>
            <Card.Text>PS/ AI</Card.Text>
            <span>Contact</span>
            <div className="contactImg">
              <a href="https://www.instagram.com/guanwei_u/" target="_blank">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADBUlEQVRoge2avU8UQRjGfxqw4aJYqlxh5MNIYxQojFqI16I0/ifGfwCjliqFH0Gp7cSI0eMIkPgnKBBLsFIwAQQbDot5x1su7OzOh8wW9yRP9pKb95n32Z3ZeXdnoYUW/guOWLbvA24DFeAMUAY6AuXyG1gBVoEq8BZYDqT9DwNADdg7ZH4GroQw0A6MA/UIJjTrwFOgzdXESWA2ooFm1iQnK7QTZyhlcQE4ZmNkvABJp/FJXhMDxJ0TWawDl/MYKeKQamY1y0Rf5ATfA13C6Yy2PSYj9yIb6UrkUs5oezeZ+NEmIzdNLguGiunPZfzP6howAdxCDdUOoS5vXgHrKbHTqCtRBj5k9LNkMrLhYWAbGAOOmzoQnADuS4xrfxumDlxFV9l/S6wAL1FnbUu4CLxg//AdkFjXfoMaWaUxSXuB+RwxczTuOl0eZoIZ2aZxJa6TPvbT5tI1iR0EdmIaGZO4XksTSTPdovEwlpE11KSFfMMpjbOi0elwMoIYmZCYiocJzWHReu1qpHlBtMGUHO94aGhojSljKwvYnI1eiVmyjDuIi6JlW+sFMVKSmM0ARjZFq+RqxGdohURdjs75+Bg5LcfvHhoaWuOUq4CPkQtyXPDQ0NAa/a4CPkZG5PjGQ0NDa4wYW1nAZqIlF8Q5y9gka6LRCfyyjA1iZA9VigOcBX44xCdLlEcO8cGM7KBKcVAF4JpF7E/gqsQOEblo3GN/Gd9NvreTNeCcxJRRdy2XvoMa0WYGEzrDwHPgK2qx2wS+AM+AG4l2Qx4mjEZ8HnV3gAeoSZuFTtSc+OPRn/FRN8TLh3VUFTsKnEeVHSX5PQpMYn93OojGlw/VAB0cFj8mE29eEDNfRRYIn0x/9hD/TOelfoxIxUwBksyi8WpoXAR2C5BsGnfJua0Aas8udsJpfJzXBKiNxyIOsXkst95AbTwWadNnhnyL7YFoQ+3ZxdyK20UNJ+ft6ST6gXcRTFSBS3kStP2Eo4fGJxxlVNVbMkbkxxbqE44VGp9wfAuk3UILrvgLg845wjFhUzAAAAAASUVORK5CYII=" />
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default member;
