import React from "react";
import { Card, Button } from "react-bootstrap";
import "./member.css";
function member() {
  return (
    <div className="membercontainer">
      <h1 className="title">Member</h1>
      <div className="sgroup">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/Img/wen.JPG" />
          <Card.Body>
            <Card.Title>Wen</Card.Title>
            <span>Job</span>
            <Card.Text>前導網頁，關於網頁的製作</Card.Text>
            <span>Skill</span>
            <Card.Text>React/ node.js/ mongodb</Card.Text>
            <span>Contact</span>
            <div className="contactImg">
              <a href="mailto:hanklovemrs30@gmal.com" target="_blank">
                <img
                  style={{ height: "60px" }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACdElEQVRoge3ZPWjUcBzG8U+1RU9EUVEUURSxCoKblCKoiIvgJDh06ejq2M2XLro6ukpdRAoKDoKDoFJU0MXJVq2ioAgWfCva1nNIwqVp7pJ6vdwp+cIfEvJ7eZ5c8iO5UFJSUlLSZlZhGBOYRbVD12yo8QIqaSbGOkDkYtfDpJnhlKAX6Es6biN9Ak1JnefiQRMpAVXM4Dy6i9O7gG7BZTQjXeN4PLheULQeobcg4XF6w96NtM3EE47hfUbCD5xBVxEOMIivGZo+4kQycSNuZiRWcQdbW2hgE27l1LElmXwVq8PtQXzLKDKFgRaYOIlPGb2n1a6MCi7HC1TxGgfD/b14mlGwiutYtwQG1uBKjn7PsT/MOaA2xeYZiU+p5egJt+cyik/icBMm+gWTp1GP34IzvwLLBL/Iz9jxBUaiNYZd4bGjeLeIRnmJTlTWU8QHHA9ztuNeSkxdI9F9ELEBoxkNq3iGfTlM7Atjs+qNhr0jpurENTQyLyAkz0icxpDgEkjShdP4nlEjGvVJMnXmNQI7Bc84WWfzLrbF8jbjdo68J9hTp/eSGiG4vi/KHgSfBWN6INxuFDsX1uxp0HfJjUT042WGwDzrLY7k6NcyI7AWI02YuIH1OXu11EjEKfWnStr6IrjxF0MhRmAH7ucw8Ri7/6J+YUYI3h+G8Cul3iwuaXxDN6JQIxF95r+wvcGhJmu2xQi1QTASbjdLXZ1dsYA0inqJyktdnWmPEf8kpZFOozTSaZRGOo3/zshcW1U0xxw1I5NtFNIsr6gZudZGIc0yEt+pyPeHQqetB1iZdFYRfDQZ1/mf3sZxNs1ESUlJSUmh/AH6kIHdFNTS+gAAAABJRU5ErkJggg=="
                />
              </a>
              <a href="https://line.me/ti/p/nMpoQY7nFd" target="_blank">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACnElEQVRoge2YvWsUQRiHnwtRUwQbtVZBJIqVWglRETsTAyIqVnYinJ2CiNhIJGJh41/gHxAQPwrFMyaehRFbBUsrkSB4J4iJWYvdxb3JfO6+u7fFPvDC3ny88/vd7MzOLjQ0NORlBlgA+kA05OgDr4HpUBNzNRBvillfEzM1EOuKKR8jCzUQ6oqOKrqlMdIDxn0cD5EesDVboDMSVaOlMAPaR4alQppR4XxfgDfE6+wT8B1YSeq2ATuA/cAx4DiwR3j8AUIX3hrwBDiZY6xDwCPgT45xRY0sAXtzGFCZALrDMPIXuIbsGhsBrie5KzGyBlwSNKByEVj10OHEleCKsHAdbQ8dTmydX6B/9kjTAp47tDix3VI7xSWb2ZWMKW7kqdKuS7xrqWTLO8A7YLOmTt2ldLlss5LbyDlDO1P/7PUNS10ai5pcF8owot5WIUZ+Jf11dTZ2l2FkSwEjEfDYUhcBbzW5xnyNhDzQxgLaqiwCpx1t1jVl6p8XhOkfOGBoZ+qfvZ4AfhvqbOyz6BkgZEYOG8ptu07KZ+Bujv6TvuJCjJxXfqv3dJQpX9JczxEf8V86+mc5G6BvA6apXGXj7VUmR4jXjfiuFRF/W6riiLIJeO/Q4sTWOQJuS6vW8NBDhxNXgnXgsrDwLFc9NIgYSeMB8u/8bezrohQjEbAMHBUw0ALuBY4taiSNZ8AZ8j2JtxOfrEPHLMVIGivAPHATOMH/47uJSeBrzrFKNaJG1zDGKHALv3fzWhj5ocl/EPgokLtSI8uZvOPAfYrNwtCMdBIDbeCbcO4BqvgaHxnGKUrlX+OrOJtpjfSrGLggP9UCnZEPFQgpipfGaWQXZRlxytfxbA3EmuKOr4mUKeLts1cD8T3gFQEz0dDQMMg/1CRzep0CDUMAAAAASUVORK5CYII=" />
              </a>
              <a href="https://github.com/WenHank" target="_blank">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEJklEQVRoge3ZS2heRRQH8J8xIalpah82VolWqa9INYIKaqoixUerBRFB8LURxSeRom4VN+JGLBFcuXHlRtGFz6ogqPjoopHWapoarVVbkJpYm/pI/FzM/ezNzfeY+73SRf5wyM29M+ec/8yZmTPnYwHHFo5roK5luBqDOB9r0Ivu5PthHMB3+Bof4yNMNNCHmtGJO/AuplHIKdN4G7cnulqORdiMnyKcjZV9eBRdrSKxAWMNJJCV3bi+mQQ6saWJBLLysjDzDcXJ2NZCEkX5QtgwGoIzhOluNYmijCY+1IWV+GYeSRRlDKtqJdFlfsKpUpjVtEW/eAw4n5XhvCQ2VFH4hBB2l+BJfF+Hc7vwOAaE7OC5Ku2viyWxSPVzoi/TpyshdATvYwjrcLaQonTjnOTdg3gDh/AIjs/oGqhie1RkiG2uoqig/OnbEWOgSttTIuwPVVPeKS7taPhBlcKqCPs/ysxKW0bJrTg1wtjqOp2thDURbfpwS/pFlsjdkcYujGxXCy6KbHdX+p80kWVYH6lkbWS7WjAQ2e5aLCn14WZx2+WksCCbhX78HenLpmKn9IysizT0En6p39+y2IXXItteWXxIE+mP7PxKrEd14NXIdueVejmq+lT+g/a63ayOcyN8KQgJLWbPyPIIA5PCPbvZmIpst6L4kB7dnoiOPULlpZDDqVpwYup5WkhnYKnZlZ//fU4TKTa4Br8lnSeEdKRlBYEEO1L+tDvqcNGf5UKxomQ5a0IY6c+wHXvwq7BD7UnJbc3xfRaGlV8XhxO/CjhY7JBm9K2QoX6IESE1Hxdm5/dEJh0l3Ey0CeHVg8WJrBRSo9OFQ/MGYbH3Mzu0xhMinwsVwTOFMOtNKVua/L1XqHI0A8OJ/ilh0I4kz/vxA/ZiZ0JkvJSCp8Vfhv4Qf4DmwX34N4cfT5VSsj6HgoIwSvdoTP24E8/mJFEQImYOTsBfORUV8KmQ82RvejHoFgZjTw12/5S6F2VH8x2ly5V3Jp2ewUllnDogXHM/ERbhXmF3mUy+r3B0wV6Aq4QRXRzDuATewo3lPm5SfssbFO7g+8u0yYbdY0KFsoje5N1URP8Y2ViJZZvw+0WpjiPJ90uFrbgSicEKNgYbQGa3uZfCORiqoKA4lWuFMDwkrKuDQihtxU3VDOD+Ook8FGFDB74qo+DNGAURaKtgo5pslyMDvwIzJZTMaNz58UANJGZwWV5DL5RRNiEU1vpExGkFnFUDkS21GOrABzkN5TlLOnLqfk++AuAsLJEvlvMiVu9OIc+rC6uFn5Pni8gOnFYXgxR6hJO01US2asBMZNEhpNildrNGE5nB85pc6LgYX5ZxIC9K6RjB5Q3xNALtwhac/h1lXw16fk71H8PDWlNumoM2IW15XYVMtAI2JX03qu9MWsACmoX/ALeEN4NrGxnlAAAAAElFTkSuQmCC" />
              </a>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/Img/wen.JPG" />
          <Card.Body>
            <Card.Title>貝貝</Card.Title>
            <span>Job</span>
            <Card.Text>故事發想，線搞上色</Card.Text>
            <span>Skill</span>
            <Card.Text>PS/ AI/ AE</Card.Text>
            <span>Contact</span>
            <div className="contactImg">
              <img
                style={{ height: "60px" }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACdElEQVRoge3ZPWjUcBzG8U+1RU9EUVEUURSxCoKblCKoiIvgJDh06ejq2M2XLro6ukpdRAoKDoKDoFJU0MXJVq2ioAgWfCva1nNIwqVp7pJ6vdwp+cIfEvJ7eZ5c8iO5UFJSUlLSZlZhGBOYRbVD12yo8QIqaSbGOkDkYtfDpJnhlKAX6Es6biN9Ak1JnefiQRMpAVXM4Dy6i9O7gG7BZTQjXeN4PLheULQeobcg4XF6w96NtM3EE47hfUbCD5xBVxEOMIivGZo+4kQycSNuZiRWcQdbW2hgE27l1LElmXwVq8PtQXzLKDKFgRaYOIlPGb2n1a6MCi7HC1TxGgfD/b14mlGwiutYtwQG1uBKjn7PsT/MOaA2xeYZiU+p5egJt+cyik/icBMm+gWTp1GP34IzvwLLBL/Iz9jxBUaiNYZd4bGjeLeIRnmJTlTWU8QHHA9ztuNeSkxdI9F9ELEBoxkNq3iGfTlM7Atjs+qNhr0jpurENTQyLyAkz0icxpDgEkjShdP4nlEjGvVJMnXmNQI7Bc84WWfzLrbF8jbjdo68J9hTp/eSGiG4vi/KHgSfBWN6INxuFDsX1uxp0HfJjUT042WGwDzrLY7k6NcyI7AWI02YuIH1OXu11EjEKfWnStr6IrjxF0MhRmAH7ucw8Ri7/6J+YUYI3h+G8Cul3iwuaXxDN6JQIxF95r+wvcGhJmu2xQi1QTASbjdLXZ1dsYA0inqJyktdnWmPEf8kpZFOozTSaZRGOo3/zshcW1U0xxw1I5NtFNIsr6gZudZGIc0yEt+pyPeHQqetB1iZdFYRfDQZ1/mf3sZxNs1ESUlJSUmh/AH6kIHdFNTS+gAAAABJRU5ErkJggg=="
              />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACnElEQVRoge2YvWsUQRiHnwtRUwQbtVZBJIqVWglRETsTAyIqVnYinJ2CiNhIJGJh41/gHxAQPwrFMyaehRFbBUsrkSB4J4iJWYvdxb3JfO6+u7fFPvDC3ny88/vd7MzOLjQ0NORlBlgA+kA05OgDr4HpUBNzNRBvillfEzM1EOuKKR8jCzUQ6oqOKrqlMdIDxn0cD5EesDVboDMSVaOlMAPaR4alQppR4XxfgDfE6+wT8B1YSeq2ATuA/cAx4DiwR3j8AUIX3hrwBDiZY6xDwCPgT45xRY0sAXtzGFCZALrDMPIXuIbsGhsBrie5KzGyBlwSNKByEVj10OHEleCKsHAdbQ8dTmydX6B/9kjTAp47tDix3VI7xSWb2ZWMKW7kqdKuS7xrqWTLO8A7YLOmTt2ldLlss5LbyDlDO1P/7PUNS10ai5pcF8owot5WIUZ+Jf11dTZ2l2FkSwEjEfDYUhcBbzW5xnyNhDzQxgLaqiwCpx1t1jVl6p8XhOkfOGBoZ+qfvZ4AfhvqbOyz6BkgZEYOG8ptu07KZ+Bujv6TvuJCjJxXfqv3dJQpX9JczxEf8V86+mc5G6BvA6apXGXj7VUmR4jXjfiuFRF/W6riiLIJeO/Q4sTWOQJuS6vW8NBDhxNXgnXgsrDwLFc9NIgYSeMB8u/8bezrohQjEbAMHBUw0ALuBY4taiSNZ8AZ8j2JtxOfrEPHLMVIGivAPHATOMH/47uJSeBrzrFKNaJG1zDGKHALv3fzWhj5ocl/EPgokLtSI8uZvOPAfYrNwtCMdBIDbeCbcO4BqvgaHxnGKUrlX+OrOJtpjfSrGLggP9UCnZEPFQgpipfGaWQXZRlxytfxbA3EmuKOr4mUKeLts1cD8T3gFQEz0dDQMMg/1CRzep0CDUMAAAAASUVORK5CYII=" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADBUlEQVRoge2avU8UQRjGfxqw4aJYqlxh5MNIYxQojFqI16I0/ifGfwCjliqFH0Gp7cSI0eMIkPgnKBBLsFIwAQQbDot5x1su7OzOh8wW9yRP9pKb95n32Z3ZeXdnoYUW/guOWLbvA24DFeAMUAY6AuXyG1gBVoEq8BZYDqT9DwNADdg7ZH4GroQw0A6MA/UIJjTrwFOgzdXESWA2ooFm1iQnK7QTZyhlcQE4ZmNkvABJp/FJXhMDxJ0TWawDl/MYKeKQamY1y0Rf5ATfA13C6Yy2PSYj9yIb6UrkUs5oezeZ+NEmIzdNLguGiunPZfzP6howAdxCDdUOoS5vXgHrKbHTqCtRBj5k9LNkMrLhYWAbGAOOmzoQnADuS4xrfxumDlxFV9l/S6wAL1FnbUu4CLxg//AdkFjXfoMaWaUxSXuB+RwxczTuOl0eZoIZ2aZxJa6TPvbT5tI1iR0EdmIaGZO4XksTSTPdovEwlpE11KSFfMMpjbOi0elwMoIYmZCYiocJzWHReu1qpHlBtMGUHO94aGhojSljKwvYnI1eiVmyjDuIi6JlW+sFMVKSmM0ARjZFq+RqxGdohURdjs75+Bg5LcfvHhoaWuOUq4CPkQtyXPDQ0NAa/a4CPkZG5PjGQ0NDa4wYW1nAZqIlF8Q5y9gka6LRCfyyjA1iZA9VigOcBX44xCdLlEcO8cGM7KBKcVAF4JpF7E/gqsQOEblo3GN/Gd9NvreTNeCcxJRRdy2XvoMa0WYGEzrDwHPgK2qx2wS+AM+AG4l2Qx4mjEZ8HnV3gAeoSZuFTtSc+OPRn/FRN8TLh3VUFTsKnEeVHSX5PQpMYn93OojGlw/VAB0cFj8mE29eEDNfRRYIn0x/9hD/TOelfoxIxUwBksyi8WpoXAR2C5BsGnfJua0Aas8udsJpfJzXBKiNxyIOsXkst95AbTwWadNnhnyL7YFoQ+3ZxdyK20UNJ+ft6ST6gXcRTFSBS3kStP2Eo4fGJxxlVNVbMkbkxxbqE44VGp9wfAuk3UILrvgLg845wjFhUzAAAAAASUVORK5CYII=" />
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/Img/wen.JPG" />
          <Card.Body>
            <Card.Title>任力加</Card.Title>
            <span>Job</span>
            <Card.Text>美術總監，線搞，草稿</Card.Text>
            <span>Skill</span>
            <Card.Text>PS/ AI/ AE</Card.Text>
            <span>Contact</span>
            <div className="contactImg">
              <img
                style={{ height: "60px" }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACdElEQVRoge3ZPWjUcBzG8U+1RU9EUVEUURSxCoKblCKoiIvgJDh06ejq2M2XLro6ukpdRAoKDoKDoFJU0MXJVq2ioAgWfCva1nNIwqVp7pJ6vdwp+cIfEvJ7eZ5c8iO5UFJSUlLSZlZhGBOYRbVD12yo8QIqaSbGOkDkYtfDpJnhlKAX6Es6biN9Ak1JnefiQRMpAVXM4Dy6i9O7gG7BZTQjXeN4PLheULQeobcg4XF6w96NtM3EE47hfUbCD5xBVxEOMIivGZo+4kQycSNuZiRWcQdbW2hgE27l1LElmXwVq8PtQXzLKDKFgRaYOIlPGb2n1a6MCi7HC1TxGgfD/b14mlGwiutYtwQG1uBKjn7PsT/MOaA2xeYZiU+p5egJt+cyik/icBMm+gWTp1GP34IzvwLLBL/Iz9jxBUaiNYZd4bGjeLeIRnmJTlTWU8QHHA9ztuNeSkxdI9F9ELEBoxkNq3iGfTlM7Atjs+qNhr0jpurENTQyLyAkz0icxpDgEkjShdP4nlEjGvVJMnXmNQI7Bc84WWfzLrbF8jbjdo68J9hTp/eSGiG4vi/KHgSfBWN6INxuFDsX1uxp0HfJjUT042WGwDzrLY7k6NcyI7AWI02YuIH1OXu11EjEKfWnStr6IrjxF0MhRmAH7ucw8Ri7/6J+YUYI3h+G8Cul3iwuaXxDN6JQIxF95r+wvcGhJmu2xQi1QTASbjdLXZ1dsYA0inqJyktdnWmPEf8kpZFOozTSaZRGOo3/zshcW1U0xxw1I5NtFNIsr6gZudZGIc0yEt+pyPeHQqetB1iZdFYRfDQZ1/mf3sZxNs1ESUlJSUmh/AH6kIHdFNTS+gAAAABJRU5ErkJggg=="
              />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACnElEQVRoge2YvWsUQRiHnwtRUwQbtVZBJIqVWglRETsTAyIqVnYinJ2CiNhIJGJh41/gHxAQPwrFMyaehRFbBUsrkSB4J4iJWYvdxb3JfO6+u7fFPvDC3ny88/vd7MzOLjQ0NORlBlgA+kA05OgDr4HpUBNzNRBvillfEzM1EOuKKR8jCzUQ6oqOKrqlMdIDxn0cD5EesDVboDMSVaOlMAPaR4alQppR4XxfgDfE6+wT8B1YSeq2ATuA/cAx4DiwR3j8AUIX3hrwBDiZY6xDwCPgT45xRY0sAXtzGFCZALrDMPIXuIbsGhsBrie5KzGyBlwSNKByEVj10OHEleCKsHAdbQ8dTmydX6B/9kjTAp47tDix3VI7xSWb2ZWMKW7kqdKuS7xrqWTLO8A7YLOmTt2ldLlss5LbyDlDO1P/7PUNS10ai5pcF8owot5WIUZ+Jf11dTZ2l2FkSwEjEfDYUhcBbzW5xnyNhDzQxgLaqiwCpx1t1jVl6p8XhOkfOGBoZ+qfvZ4AfhvqbOyz6BkgZEYOG8ptu07KZ+Bujv6TvuJCjJxXfqv3dJQpX9JczxEf8V86+mc5G6BvA6apXGXj7VUmR4jXjfiuFRF/W6riiLIJeO/Q4sTWOQJuS6vW8NBDhxNXgnXgsrDwLFc9NIgYSeMB8u/8bezrohQjEbAMHBUw0ALuBY4taiSNZ8AZ8j2JtxOfrEPHLMVIGivAPHATOMH/47uJSeBrzrFKNaJG1zDGKHALv3fzWhj5ocl/EPgokLtSI8uZvOPAfYrNwtCMdBIDbeCbcO4BqvgaHxnGKUrlX+OrOJtpjfSrGLggP9UCnZEPFQgpipfGaWQXZRlxytfxbA3EmuKOr4mUKeLts1cD8T3gFQEz0dDQMMg/1CRzep0CDUMAAAAASUVORK5CYII=" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADBUlEQVRoge2avU8UQRjGfxqw4aJYqlxh5MNIYxQojFqI16I0/ifGfwCjliqFH0Gp7cSI0eMIkPgnKBBLsFIwAQQbDot5x1su7OzOh8wW9yRP9pKb95n32Z3ZeXdnoYUW/guOWLbvA24DFeAMUAY6AuXyG1gBVoEq8BZYDqT9DwNADdg7ZH4GroQw0A6MA/UIJjTrwFOgzdXESWA2ooFm1iQnK7QTZyhlcQE4ZmNkvABJp/FJXhMDxJ0TWawDl/MYKeKQamY1y0Rf5ATfA13C6Yy2PSYj9yIb6UrkUs5oezeZ+NEmIzdNLguGiunPZfzP6howAdxCDdUOoS5vXgHrKbHTqCtRBj5k9LNkMrLhYWAbGAOOmzoQnADuS4xrfxumDlxFV9l/S6wAL1FnbUu4CLxg//AdkFjXfoMaWaUxSXuB+RwxczTuOl0eZoIZ2aZxJa6TPvbT5tI1iR0EdmIaGZO4XksTSTPdovEwlpE11KSFfMMpjbOi0elwMoIYmZCYiocJzWHReu1qpHlBtMGUHO94aGhojSljKwvYnI1eiVmyjDuIi6JlW+sFMVKSmM0ARjZFq+RqxGdohURdjs75+Bg5LcfvHhoaWuOUq4CPkQtyXPDQ0NAa/a4CPkZG5PjGQ0NDa4wYW1nAZqIlF8Q5y9gka6LRCfyyjA1iZA9VigOcBX44xCdLlEcO8cGM7KBKcVAF4JpF7E/gqsQOEblo3GN/Gd9NvreTNeCcxJRRdy2XvoMa0WYGEzrDwHPgK2qx2wS+AM+AG4l2Qx4mjEZ8HnV3gAeoSZuFTtSc+OPRn/FRN8TLh3VUFTsKnEeVHSX5PQpMYn93OojGlw/VAB0cFj8mE29eEDNfRRYIn0x/9hD/TOelfoxIxUwBksyi8WpoXAR2C5BsGnfJua0Aas8udsJpfJzXBKiNxyIOsXkst95AbTwWadNnhnyL7YFoQ+3ZxdyK20UNJ+ft6ST6gXcRTFSBS3kStP2Eo4fGJxxlVNVbMkbkxxbqE44VGp9wfAuk3UILrvgLg845wjFhUzAAAAAASUVORK5CYII=" />
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="sgroup">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/Img/wen.JPG" />
          <Card.Body>
            <Card.Title>涂紜瑄</Card.Title>
            <span>Job</span>
            <Card.Text>簡訊網頁製作，NFC製作</Card.Text>
            <span>Skill</span>
            <Card.Text>PS/ AI/ AE</Card.Text>
            <span>Contact</span>
            <div className="contactImg">
              <img
                style={{ height: "60px" }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACdElEQVRoge3ZPWjUcBzG8U+1RU9EUVEUURSxCoKblCKoiIvgJDh06ejq2M2XLro6ukpdRAoKDoKDoFJU0MXJVq2ioAgWfCva1nNIwqVp7pJ6vdwp+cIfEvJ7eZ5c8iO5UFJSUlLSZlZhGBOYRbVD12yo8QIqaSbGOkDkYtfDpJnhlKAX6Es6biN9Ak1JnefiQRMpAVXM4Dy6i9O7gG7BZTQjXeN4PLheULQeobcg4XF6w96NtM3EE47hfUbCD5xBVxEOMIivGZo+4kQycSNuZiRWcQdbW2hgE27l1LElmXwVq8PtQXzLKDKFgRaYOIlPGb2n1a6MCi7HC1TxGgfD/b14mlGwiutYtwQG1uBKjn7PsT/MOaA2xeYZiU+p5egJt+cyik/icBMm+gWTp1GP34IzvwLLBL/Iz9jxBUaiNYZd4bGjeLeIRnmJTlTWU8QHHA9ztuNeSkxdI9F9ELEBoxkNq3iGfTlM7Atjs+qNhr0jpurENTQyLyAkz0icxpDgEkjShdP4nlEjGvVJMnXmNQI7Bc84WWfzLrbF8jbjdo68J9hTp/eSGiG4vi/KHgSfBWN6INxuFDsX1uxp0HfJjUT042WGwDzrLY7k6NcyI7AWI02YuIH1OXu11EjEKfWnStr6IrjxF0MhRmAH7ucw8Ri7/6J+YUYI3h+G8Cul3iwuaXxDN6JQIxF95r+wvcGhJmu2xQi1QTASbjdLXZ1dsYA0inqJyktdnWmPEf8kpZFOozTSaZRGOo3/zshcW1U0xxw1I5NtFNIsr6gZudZGIc0yEt+pyPeHQqetB1iZdFYRfDQZ1/mf3sZxNs1ESUlJSUmh/AH6kIHdFNTS+gAAAABJRU5ErkJggg=="
              />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACnElEQVRoge2YvWsUQRiHnwtRUwQbtVZBJIqVWglRETsTAyIqVnYinJ2CiNhIJGJh41/gHxAQPwrFMyaehRFbBUsrkSB4J4iJWYvdxb3JfO6+u7fFPvDC3ny88/vd7MzOLjQ0NORlBlgA+kA05OgDr4HpUBNzNRBvillfEzM1EOuKKR8jCzUQ6oqOKrqlMdIDxn0cD5EesDVboDMSVaOlMAPaR4alQppR4XxfgDfE6+wT8B1YSeq2ATuA/cAx4DiwR3j8AUIX3hrwBDiZY6xDwCPgT45xRY0sAXtzGFCZALrDMPIXuIbsGhsBrie5KzGyBlwSNKByEVj10OHEleCKsHAdbQ8dTmydX6B/9kjTAp47tDix3VI7xSWb2ZWMKW7kqdKuS7xrqWTLO8A7YLOmTt2ldLlss5LbyDlDO1P/7PUNS10ai5pcF8owot5WIUZ+Jf11dTZ2l2FkSwEjEfDYUhcBbzW5xnyNhDzQxgLaqiwCpx1t1jVl6p8XhOkfOGBoZ+qfvZ4AfhvqbOyz6BkgZEYOG8ptu07KZ+Bujv6TvuJCjJxXfqv3dJQpX9JczxEf8V86+mc5G6BvA6apXGXj7VUmR4jXjfiuFRF/W6riiLIJeO/Q4sTWOQJuS6vW8NBDhxNXgnXgsrDwLFc9NIgYSeMB8u/8bezrohQjEbAMHBUw0ALuBY4taiSNZ8AZ8j2JtxOfrEPHLMVIGivAPHATOMH/47uJSeBrzrFKNaJG1zDGKHALv3fzWhj5ocl/EPgokLtSI8uZvOPAfYrNwtCMdBIDbeCbcO4BqvgaHxnGKUrlX+OrOJtpjfSrGLggP9UCnZEPFQgpipfGaWQXZRlxytfxbA3EmuKOr4mUKeLts1cD8T3gFQEz0dDQMMg/1CRzep0CDUMAAAAASUVORK5CYII=" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADBUlEQVRoge2avU8UQRjGfxqw4aJYqlxh5MNIYxQojFqI16I0/ifGfwCjliqFH0Gp7cSI0eMIkPgnKBBLsFIwAQQbDot5x1su7OzOh8wW9yRP9pKb95n32Z3ZeXdnoYUW/guOWLbvA24DFeAMUAY6AuXyG1gBVoEq8BZYDqT9DwNADdg7ZH4GroQw0A6MA/UIJjTrwFOgzdXESWA2ooFm1iQnK7QTZyhlcQE4ZmNkvABJp/FJXhMDxJ0TWawDl/MYKeKQamY1y0Rf5ATfA13C6Yy2PSYj9yIb6UrkUs5oezeZ+NEmIzdNLguGiunPZfzP6howAdxCDdUOoS5vXgHrKbHTqCtRBj5k9LNkMrLhYWAbGAOOmzoQnADuS4xrfxumDlxFV9l/S6wAL1FnbUu4CLxg//AdkFjXfoMaWaUxSXuB+RwxczTuOl0eZoIZ2aZxJa6TPvbT5tI1iR0EdmIaGZO4XksTSTPdovEwlpE11KSFfMMpjbOi0elwMoIYmZCYiocJzWHReu1qpHlBtMGUHO94aGhojSljKwvYnI1eiVmyjDuIi6JlW+sFMVKSmM0ARjZFq+RqxGdohURdjs75+Bg5LcfvHhoaWuOUq4CPkQtyXPDQ0NAa/a4CPkZG5PjGQ0NDa4wYW1nAZqIlF8Q5y9gka6LRCfyyjA1iZA9VigOcBX44xCdLlEcO8cGM7KBKcVAF4JpF7E/gqsQOEblo3GN/Gd9NvreTNeCcxJRRdy2XvoMa0WYGEzrDwHPgK2qx2wS+AM+AG4l2Qx4mjEZ8HnV3gAeoSZuFTtSc+OPRn/FRN8TLh3VUFTsKnEeVHSX5PQpMYn93OojGlw/VAB0cFj8mE29eEDNfRRYIn0x/9hD/TOelfoxIxUwBksyi8WpoXAR2C5BsGnfJua0Aas8udsJpfJzXBKiNxyIOsXkst95AbTwWadNnhnyL7YFoQ+3ZxdyK20UNJ+ft6ST6gXcRTFSBS3kStP2Eo4fGJxxlVNVbMkbkxxbqE44VGp9wfAuk3UILrvgLg845wjFhUzAAAAAASUVORK5CYII=" />
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/Img/wen.JPG" />
          <Card.Body>
            <Card.Title>蒲芳榆</Card.Title>
            <span>Job</span>
            <Card.Text>故事發想，線搞上色，物件製作</Card.Text>
            <span>Skill</span>
            <Card.Text>PS/ AI/ AE</Card.Text>
            <span>Contact</span>
            <div className="contactImg">
              <img
                style={{ height: "60px" }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACdElEQVRoge3ZPWjUcBzG8U+1RU9EUVEUURSxCoKblCKoiIvgJDh06ejq2M2XLro6ukpdRAoKDoKDoFJU0MXJVq2ioAgWfCva1nNIwqVp7pJ6vdwp+cIfEvJ7eZ5c8iO5UFJSUlLSZlZhGBOYRbVD12yo8QIqaSbGOkDkYtfDpJnhlKAX6Es6biN9Ak1JnefiQRMpAVXM4Dy6i9O7gG7BZTQjXeN4PLheULQeobcg4XF6w96NtM3EE47hfUbCD5xBVxEOMIivGZo+4kQycSNuZiRWcQdbW2hgE27l1LElmXwVq8PtQXzLKDKFgRaYOIlPGb2n1a6MCi7HC1TxGgfD/b14mlGwiutYtwQG1uBKjn7PsT/MOaA2xeYZiU+p5egJt+cyik/icBMm+gWTp1GP34IzvwLLBL/Iz9jxBUaiNYZd4bGjeLeIRnmJTlTWU8QHHA9ztuNeSkxdI9F9ELEBoxkNq3iGfTlM7Atjs+qNhr0jpurENTQyLyAkz0icxpDgEkjShdP4nlEjGvVJMnXmNQI7Bc84WWfzLrbF8jbjdo68J9hTp/eSGiG4vi/KHgSfBWN6INxuFDsX1uxp0HfJjUT042WGwDzrLY7k6NcyI7AWI02YuIH1OXu11EjEKfWnStr6IrjxF0MhRmAH7ucw8Ri7/6J+YUYI3h+G8Cul3iwuaXxDN6JQIxF95r+wvcGhJmu2xQi1QTASbjdLXZ1dsYA0inqJyktdnWmPEf8kpZFOozTSaZRGOo3/zshcW1U0xxw1I5NtFNIsr6gZudZGIc0yEt+pyPeHQqetB1iZdFYRfDQZ1/mf3sZxNs1ESUlJSUmh/AH6kIHdFNTS+gAAAABJRU5ErkJggg=="
              />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACnElEQVRoge2YvWsUQRiHnwtRUwQbtVZBJIqVWglRETsTAyIqVnYinJ2CiNhIJGJh41/gHxAQPwrFMyaehRFbBUsrkSB4J4iJWYvdxb3JfO6+u7fFPvDC3ny88/vd7MzOLjQ0NORlBlgA+kA05OgDr4HpUBNzNRBvillfEzM1EOuKKR8jCzUQ6oqOKrqlMdIDxn0cD5EesDVboDMSVaOlMAPaR4alQppR4XxfgDfE6+wT8B1YSeq2ATuA/cAx4DiwR3j8AUIX3hrwBDiZY6xDwCPgT45xRY0sAXtzGFCZALrDMPIXuIbsGhsBrie5KzGyBlwSNKByEVj10OHEleCKsHAdbQ8dTmydX6B/9kjTAp47tDix3VI7xSWb2ZWMKW7kqdKuS7xrqWTLO8A7YLOmTt2ldLlss5LbyDlDO1P/7PUNS10ai5pcF8owot5WIUZ+Jf11dTZ2l2FkSwEjEfDYUhcBbzW5xnyNhDzQxgLaqiwCpx1t1jVl6p8XhOkfOGBoZ+qfvZ4AfhvqbOyz6BkgZEYOG8ptu07KZ+Bujv6TvuJCjJxXfqv3dJQpX9JczxEf8V86+mc5G6BvA6apXGXj7VUmR4jXjfiuFRF/W6riiLIJeO/Q4sTWOQJuS6vW8NBDhxNXgnXgsrDwLFc9NIgYSeMB8u/8bezrohQjEbAMHBUw0ALuBY4taiSNZ8AZ8j2JtxOfrEPHLMVIGivAPHATOMH/47uJSeBrzrFKNaJG1zDGKHALv3fzWhj5ocl/EPgokLtSI8uZvOPAfYrNwtCMdBIDbeCbcO4BqvgaHxnGKUrlX+OrOJtpjfSrGLggP9UCnZEPFQgpipfGaWQXZRlxytfxbA3EmuKOr4mUKeLts1cD8T3gFQEz0dDQMMg/1CRzep0CDUMAAAAASUVORK5CYII=" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADBUlEQVRoge2avU8UQRjGfxqw4aJYqlxh5MNIYxQojFqI16I0/ifGfwCjliqFH0Gp7cSI0eMIkPgnKBBLsFIwAQQbDot5x1su7OzOh8wW9yRP9pKb95n32Z3ZeXdnoYUW/guOWLbvA24DFeAMUAY6AuXyG1gBVoEq8BZYDqT9DwNADdg7ZH4GroQw0A6MA/UIJjTrwFOgzdXESWA2ooFm1iQnK7QTZyhlcQE4ZmNkvABJp/FJXhMDxJ0TWawDl/MYKeKQamY1y0Rf5ATfA13C6Yy2PSYj9yIb6UrkUs5oezeZ+NEmIzdNLguGiunPZfzP6howAdxCDdUOoS5vXgHrKbHTqCtRBj5k9LNkMrLhYWAbGAOOmzoQnADuS4xrfxumDlxFV9l/S6wAL1FnbUu4CLxg//AdkFjXfoMaWaUxSXuB+RwxczTuOl0eZoIZ2aZxJa6TPvbT5tI1iR0EdmIaGZO4XksTSTPdovEwlpE11KSFfMMpjbOi0elwMoIYmZCYiocJzWHReu1qpHlBtMGUHO94aGhojSljKwvYnI1eiVmyjDuIi6JlW+sFMVKSmM0ARjZFq+RqxGdohURdjs75+Bg5LcfvHhoaWuOUq4CPkQtyXPDQ0NAa/a4CPkZG5PjGQ0NDa4wYW1nAZqIlF8Q5y9gka6LRCfyyjA1iZA9VigOcBX44xCdLlEcO8cGM7KBKcVAF4JpF7E/gqsQOEblo3GN/Gd9NvreTNeCcxJRRdy2XvoMa0WYGEzrDwHPgK2qx2wS+AM+AG4l2Qx4mjEZ8HnV3gAeoSZuFTtSc+OPRn/FRN8TLh3VUFTsKnEeVHSX5PQpMYn93OojGlw/VAB0cFj8mE29eEDNfRRYIn0x/9hD/TOelfoxIxUwBksyi8WpoXAR2C5BsGnfJua0Aas8udsJpfJzXBKiNxyIOsXkst95AbTwWadNnhnyL7YFoQ+3ZxdyK20UNJ+ft6ST6gXcRTFSBS3kStP2Eo4fGJxxlVNVbMkbkxxbqE44VGp9wfAuk3UILrvgLg845wjFhUzAAAAAASUVORK5CYII=" />
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/Img/wen.JPG" />
          <Card.Body>
            <Card.Title>吳冠緯</Card.Title>
            <span>Job</span>
            <Card.Text>線搞上色，物件製作</Card.Text>
            <span>Skill</span>
            <Card.Text>PS/ AI/ AE</Card.Text>
            <span>Contact</span>
            <div className="contactImg">
              <img
                style={{ height: "60px" }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACdElEQVRoge3ZPWjUcBzG8U+1RU9EUVEUURSxCoKblCKoiIvgJDh06ejq2M2XLro6ukpdRAoKDoKDoFJU0MXJVq2ioAgWfCva1nNIwqVp7pJ6vdwp+cIfEvJ7eZ5c8iO5UFJSUlLSZlZhGBOYRbVD12yo8QIqaSbGOkDkYtfDpJnhlKAX6Es6biN9Ak1JnefiQRMpAVXM4Dy6i9O7gG7BZTQjXeN4PLheULQeobcg4XF6w96NtM3EE47hfUbCD5xBVxEOMIivGZo+4kQycSNuZiRWcQdbW2hgE27l1LElmXwVq8PtQXzLKDKFgRaYOIlPGb2n1a6MCi7HC1TxGgfD/b14mlGwiutYtwQG1uBKjn7PsT/MOaA2xeYZiU+p5egJt+cyik/icBMm+gWTp1GP34IzvwLLBL/Iz9jxBUaiNYZd4bGjeLeIRnmJTlTWU8QHHA9ztuNeSkxdI9F9ELEBoxkNq3iGfTlM7Atjs+qNhr0jpurENTQyLyAkz0icxpDgEkjShdP4nlEjGvVJMnXmNQI7Bc84WWfzLrbF8jbjdo68J9hTp/eSGiG4vi/KHgSfBWN6INxuFDsX1uxp0HfJjUT042WGwDzrLY7k6NcyI7AWI02YuIH1OXu11EjEKfWnStr6IrjxF0MhRmAH7ucw8Ri7/6J+YUYI3h+G8Cul3iwuaXxDN6JQIxF95r+wvcGhJmu2xQi1QTASbjdLXZ1dsYA0inqJyktdnWmPEf8kpZFOozTSaZRGOo3/zshcW1U0xxw1I5NtFNIsr6gZudZGIc0yEt+pyPeHQqetB1iZdFYRfDQZ1/mf3sZxNs1ESUlJSUmh/AH6kIHdFNTS+gAAAABJRU5ErkJggg=="
              />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACnElEQVRoge2YvWsUQRiHnwtRUwQbtVZBJIqVWglRETsTAyIqVnYinJ2CiNhIJGJh41/gHxAQPwrFMyaehRFbBUsrkSB4J4iJWYvdxb3JfO6+u7fFPvDC3ny88/vd7MzOLjQ0NORlBlgA+kA05OgDr4HpUBNzNRBvillfEzM1EOuKKR8jCzUQ6oqOKrqlMdIDxn0cD5EesDVboDMSVaOlMAPaR4alQppR4XxfgDfE6+wT8B1YSeq2ATuA/cAx4DiwR3j8AUIX3hrwBDiZY6xDwCPgT45xRY0sAXtzGFCZALrDMPIXuIbsGhsBrie5KzGyBlwSNKByEVj10OHEleCKsHAdbQ8dTmydX6B/9kjTAp47tDix3VI7xSWb2ZWMKW7kqdKuS7xrqWTLO8A7YLOmTt2ldLlss5LbyDlDO1P/7PUNS10ai5pcF8owot5WIUZ+Jf11dTZ2l2FkSwEjEfDYUhcBbzW5xnyNhDzQxgLaqiwCpx1t1jVl6p8XhOkfOGBoZ+qfvZ4AfhvqbOyz6BkgZEYOG8ptu07KZ+Bujv6TvuJCjJxXfqv3dJQpX9JczxEf8V86+mc5G6BvA6apXGXj7VUmR4jXjfiuFRF/W6riiLIJeO/Q4sTWOQJuS6vW8NBDhxNXgnXgsrDwLFc9NIgYSeMB8u/8bezrohQjEbAMHBUw0ALuBY4taiSNZ8AZ8j2JtxOfrEPHLMVIGivAPHATOMH/47uJSeBrzrFKNaJG1zDGKHALv3fzWhj5ocl/EPgokLtSI8uZvOPAfYrNwtCMdBIDbeCbcO4BqvgaHxnGKUrlX+OrOJtpjfSrGLggP9UCnZEPFQgpipfGaWQXZRlxytfxbA3EmuKOr4mUKeLts1cD8T3gFQEz0dDQMMg/1CRzep0CDUMAAAAASUVORK5CYII=" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADBUlEQVRoge2avU8UQRjGfxqw4aJYqlxh5MNIYxQojFqI16I0/ifGfwCjliqFH0Gp7cSI0eMIkPgnKBBLsFIwAQQbDot5x1su7OzOh8wW9yRP9pKb95n32Z3ZeXdnoYUW/guOWLbvA24DFeAMUAY6AuXyG1gBVoEq8BZYDqT9DwNADdg7ZH4GroQw0A6MA/UIJjTrwFOgzdXESWA2ooFm1iQnK7QTZyhlcQE4ZmNkvABJp/FJXhMDxJ0TWawDl/MYKeKQamY1y0Rf5ATfA13C6Yy2PSYj9yIb6UrkUs5oezeZ+NEmIzdNLguGiunPZfzP6howAdxCDdUOoS5vXgHrKbHTqCtRBj5k9LNkMrLhYWAbGAOOmzoQnADuS4xrfxumDlxFV9l/S6wAL1FnbUu4CLxg//AdkFjXfoMaWaUxSXuB+RwxczTuOl0eZoIZ2aZxJa6TPvbT5tI1iR0EdmIaGZO4XksTSTPdovEwlpE11KSFfMMpjbOi0elwMoIYmZCYiocJzWHReu1qpHlBtMGUHO94aGhojSljKwvYnI1eiVmyjDuIi6JlW+sFMVKSmM0ARjZFq+RqxGdohURdjs75+Bg5LcfvHhoaWuOUq4CPkQtyXPDQ0NAa/a4CPkZG5PjGQ0NDa4wYW1nAZqIlF8Q5y9gka6LRCfyyjA1iZA9VigOcBX44xCdLlEcO8cGM7KBKcVAF4JpF7E/gqsQOEblo3GN/Gd9NvreTNeCcxJRRdy2XvoMa0WYGEzrDwHPgK2qx2wS+AM+AG4l2Qx4mjEZ8HnV3gAeoSZuFTtSc+OPRn/FRN8TLh3VUFTsKnEeVHSX5PQpMYn93OojGlw/VAB0cFj8mE29eEDNfRRYIn0x/9hD/TOelfoxIxUwBksyi8WpoXAR2C5BsGnfJua0Aas8udsJpfJzXBKiNxyIOsXkst95AbTwWadNnhnyL7YFoQ+3ZxdyK20UNJ+ft6ST6gXcRTFSBS3kStP2Eo4fGJxxlVNVbMkbkxxbqE44VGp9wfAuk3UILrvgLg845wjFhUzAAAAAASUVORK5CYII=" />
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default member;
