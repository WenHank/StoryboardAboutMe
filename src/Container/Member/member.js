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
            <Card.Text>PS/ AI/ AE</Card.Text>
            <span>Contact</span>
            <div className="contactImg">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADBUlEQVRoge2avU8UQRjGfxqw4aJYqlxh5MNIYxQojFqI16I0/ifGfwCjliqFH0Gp7cSI0eMIkPgnKBBLsFIwAQQbDot5x1su7OzOh8wW9yRP9pKb95n32Z3ZeXdnoYUW/guOWLbvA24DFeAMUAY6AuXyG1gBVoEq8BZYDqT9DwNADdg7ZH4GroQw0A6MA/UIJjTrwFOgzdXESWA2ooFm1iQnK7QTZyhlcQE4ZmNkvABJp/FJXhMDxJ0TWawDl/MYKeKQamY1y0Rf5ATfA13C6Yy2PSYj9yIb6UrkUs5oezeZ+NEmIzdNLguGiunPZfzP6howAdxCDdUOoS5vXgHrKbHTqCtRBj5k9LNkMrLhYWAbGAOOmzoQnADuS4xrfxumDlxFV9l/S6wAL1FnbUu4CLxg//AdkFjXfoMaWaUxSXuB+RwxczTuOl0eZoIZ2aZxJa6TPvbT5tI1iR0EdmIaGZO4XksTSTPdovEwlpE11KSFfMMpjbOi0elwMoIYmZCYiocJzWHReu1qpHlBtMGUHO94aGhojSljKwvYnI1eiVmyjDuIi6JlW+sFMVKSmM0ARjZFq+RqxGdohURdjs75+Bg5LcfvHhoaWuOUq4CPkQtyXPDQ0NAa/a4CPkZG5PjGQ0NDa4wYW1nAZqIlF8Q5y9gka6LRCfyyjA1iZA9VigOcBX44xCdLlEcO8cGM7KBKcVAF4JpF7E/gqsQOEblo3GN/Gd9NvreTNeCcxJRRdy2XvoMa0WYGEzrDwHPgK2qx2wS+AM+AG4l2Qx4mjEZ8HnV3gAeoSZuFTtSc+OPRn/FRN8TLh3VUFTsKnEeVHSX5PQpMYn93OojGlw/VAB0cFj8mE29eEDNfRRYIn0x/9hD/TOelfoxIxUwBksyi8WpoXAR2C5BsGnfJua0Aas8udsJpfJzXBKiNxyIOsXkst95AbTwWadNnhnyL7YFoQ+3ZxdyK20UNJ+ft6ST6gXcRTFSBS3kStP2Eo4fGJxxlVNVbMkbkxxbqE44VGp9wfAuk3UILrvgLg845wjFhUzAAAAAASUVORK5CYII=" />
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="/Img/member/REN.png" />
          <Card.Body>
            <Card.Title>任力加</Card.Title>
            <span>Job</span>
            <Card.Text>美術總監，線搞，草稿</Card.Text>
            <span>Skill</span>
            <Card.Text>PS/ AI/ AE</Card.Text>
            <span>Contact</span>
            <div className="contactImg">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADBUlEQVRoge2avU8UQRjGfxqw4aJYqlxh5MNIYxQojFqI16I0/ifGfwCjliqFH0Gp7cSI0eMIkPgnKBBLsFIwAQQbDot5x1su7OzOh8wW9yRP9pKb95n32Z3ZeXdnoYUW/guOWLbvA24DFeAMUAY6AuXyG1gBVoEq8BZYDqT9DwNADdg7ZH4GroQw0A6MA/UIJjTrwFOgzdXESWA2ooFm1iQnK7QTZyhlcQE4ZmNkvABJp/FJXhMDxJ0TWawDl/MYKeKQamY1y0Rf5ATfA13C6Yy2PSYj9yIb6UrkUs5oezeZ+NEmIzdNLguGiunPZfzP6howAdxCDdUOoS5vXgHrKbHTqCtRBj5k9LNkMrLhYWAbGAOOmzoQnADuS4xrfxumDlxFV9l/S6wAL1FnbUu4CLxg//AdkFjXfoMaWaUxSXuB+RwxczTuOl0eZoIZ2aZxJa6TPvbT5tI1iR0EdmIaGZO4XksTSTPdovEwlpE11KSFfMMpjbOi0elwMoIYmZCYiocJzWHReu1qpHlBtMGUHO94aGhojSljKwvYnI1eiVmyjDuIi6JlW+sFMVKSmM0ARjZFq+RqxGdohURdjs75+Bg5LcfvHhoaWuOUq4CPkQtyXPDQ0NAa/a4CPkZG5PjGQ0NDa4wYW1nAZqIlF8Q5y9gka6LRCfyyjA1iZA9VigOcBX44xCdLlEcO8cGM7KBKcVAF4JpF7E/gqsQOEblo3GN/Gd9NvreTNeCcxJRRdy2XvoMa0WYGEzrDwHPgK2qx2wS+AM+AG4l2Qx4mjEZ8HnV3gAeoSZuFTtSc+OPRn/FRN8TLh3VUFTsKnEeVHSX5PQpMYn93OojGlw/VAB0cFj8mE29eEDNfRRYIn0x/9hD/TOelfoxIxUwBksyi8WpoXAR2C5BsGnfJua0Aas8udsJpfJzXBKiNxyIOsXkst95AbTwWadNnhnyL7YFoQ+3ZxdyK20UNJ+ft6ST6gXcRTFSBS3kStP2Eo4fGJxxlVNVbMkbkxxbqE44VGp9wfAuk3UILrvgLg845wjFhUzAAAAAASUVORK5CYII=" />
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
