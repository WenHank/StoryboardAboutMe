import React from "react";
import "./footer.css";
function footer() {
  return (
    <footer className="footercontainer">
      <div className="contactgroup">
        <img
          className="contactImg"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABTklEQVRoge2ZP07DMBSHvyCWCsTIwtYjlN6CVh0YOFBViZsw9AaVoD0Ac9fOXUmEkBjK0CJR46ovjv+84X3SG2Il9u+Tk9hKwDCMUCbACmiAXeFqgCUwbivxrCD8qZpJJSYKwp6rkURkpSDouXpzQ1cekRq4lhgXpAZu/jb4RHZ5snTmKPtFqRSxMRFtmEhHGmAKDNi/Ia+APvAELGINknoN2BxCd81QVOQbuI+UoajIiyRAiEjuZ2SequPcIu+etkdgDXzS4rZxyb1F6QFfTtsWuA3oqzp5cCClSMzxbK+lmtQilVOSc+5CBtI4I5IF8x8mkpBhyEUaRQYhF13GTuHgrhHJ1i2NMxKEiWjDRLRhItowEW2YiDZ8Ik32FO35cBt8Ir5PNtoQZRyT7kujj5B+HqTGs4QyXWsqlfhlxP7vaa0gfA280mImDMM45ge3IoV4BJUk3gAAAABJRU5ErkJggg=="
        />
        <img
          className="contactImg"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADBUlEQVRoge2avU8UQRjGfxqw4aJYqlxh5MNIYxQojFqI16I0/ifGfwCjliqFH0Gp7cSI0eMIkPgnKBBLsFIwAQQbDot5x1su7OzOh8wW9yRP9pKb95n32Z3ZeXdnoYUW/guOWLbvA24DFeAMUAY6AuXyG1gBVoEq8BZYDqT9DwNADdg7ZH4GroQw0A6MA/UIJjTrwFOgzdXESWA2ooFm1iQnK7QTZyhlcQE4ZmNkvABJp/FJXhMDxJ0TWawDl/MYKeKQamY1y0Rf5ATfA13C6Yy2PSYj9yIb6UrkUs5oezeZ+NEmIzdNLguGiunPZfzP6howAdxCDdUOoS5vXgHrKbHTqCtRBj5k9LNkMrLhYWAbGAOOmzoQnADuS4xrfxumDlxFV9l/S6wAL1FnbUu4CLxg//AdkFjXfoMaWaUxSXuB+RwxczTuOl0eZoIZ2aZxJa6TPvbT5tI1iR0EdmIaGZO4XksTSTPdovEwlpE11KSFfMMpjbOi0elwMoIYmZCYiocJzWHReu1qpHlBtMGUHO94aGhojSljKwvYnI1eiVmyjDuIi6JlW+sFMVKSmM0ARjZFq+RqxGdohURdjs75+Bg5LcfvHhoaWuOUq4CPkQtyXPDQ0NAa/a4CPkZG5PjGQ0NDa4wYW1nAZqIlF8Q5y9gka6LRCfyyjA1iZA9VigOcBX44xCdLlEcO8cGM7KBKcVAF4JpF7E/gqsQOEblo3GN/Gd9NvreTNeCcxJRRdy2XvoMa0WYGEzrDwHPgK2qx2wS+AM+AG4l2Qx4mjEZ8HnV3gAeoSZuFTtSc+OPRn/FRN8TLh3VUFTsKnEeVHSX5PQpMYn93OojGlw/VAB0cFj8mE29eEDNfRRYIn0x/9hD/TOelfoxIxUwBksyi8WpoXAR2C5BsGnfJua0Aas8udsJpfJzXBKiNxyIOsXkst95AbTwWadNnhnyL7YFoQ+3ZxdyK20UNJ+ft6ST6gXcRTFSBS3kStP2Eo4fGJxxlVNVbMkbkxxbqE44VGp9wfAuk3UILrvgLg845wjFhUzAAAAAASUVORK5CYII="
        />{" "}
        <img
          className="contactImg"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEqklEQVRoge2aW4hVVRjHf2eOOUemIs+gWZIFea2Igq5aVjBlkyYiBJb0WGEQie9BIL1MUQxWDz34oC8+9CQ2NlGRJFGOF7zlqKfxkkKTVspokXM8p4fvrNznm7X3/tae7UyBf/jgrLX3d/nvdfvWWgeu4b+FQo62JgNPAAuAu4A7galAW+P5RWAQGAB+BLYD24BzOcaQGa3ASqAXqAL1QKkCW4GXGrbGHJOANcBpQ7BWOQWsBkpjRaITqORIQMtRYNHVJNAKdF9FAlo2IC2fK24Gdo4hCSc7kAkjF9yBNPdYk3BypBHDqDAF6B9HEk4qwLSsJEqMT3dK6maxU3TSgvgxsCqI+hX8DuxCFsAzwB9AO9LCc4H7gJYMdj8E3ghR6CT8i50B1gKPAMUU+1OBl4HdGfw8YyUxibB1Ygh4C7jB6iCCAvA8cDzA3xGMWcCaAKMV4J4MBDTKwJYAv29qA3qMtCJJ3a0G57uRZv7N8+x+YDEwGxkXdeBX4AegBzjh0WkBNgEvGHyfAmYCf8e9sBLbFxkEbvPod5De76vARmC6R7+EZMWWGF5MYtprNKIHXAF4x6jr5BdkYtCYhXzpNP2eOBKTsaXiX3p0uwJJODmL7Fs03jPoDgM3+ogsMzpfqPSWADX1Tg3YBxz2PNPS64llhkGvjsx4mb7CIM0LWQtwQL1zGLg38s5jwPkUu74u1meIpysaiMNcHzuFz5Ev5fAkcHek/CfwHNIaDtuRLCEJyzx1vi6sMc/9iBKZbVDcq8qdqrwe+Mmj15di92FP3c+GeGa5H1EiZYPioCrPUeXPYvTaYuodfJntaUM87e5HlIglxTgfZ6iBgRi9eTH1vjiS6jT+jTn6ctWgeIsqa2Jxzp9Kses7EppiiMfr+Kzh/dtVeb8q+1b7MvBgit3jnjrLRmrI/Qglor+sHhO+L7+I9LR+l6fONwFoeGPuIX3erjFyJY7uIj/12N1gsKsz6CLpa08d2OwUoi2SNkWC5FSvqrrXI7+/U89agGdTbPYhi2oUTxOTfigc8lV2YEtR/qJ58ZwTefaQsjnDYK/DE8tWYyxLfETagEtGAwe5ct70SqPuAnCdsnk9yZnsOk8cD2DLsy6R0GqWceJkAEnaNjfKcSnFuzH63YycBCYi6Y3F/5Y4EgBLA4hoeTvGZgF4Dfgaybs+wZ8kFoCPAvytSCJSRLahWYjovj4xyZGHRMi58kmL/dUZSAwj4yGKtaSv6CDHoV8E+jOdbU1AVuwQwzs8dnY2CHYx8uy2AMxH0vsLgb76CbgUWoht5nDyvtIvA5cjzy8Dx5AxcgjZt2TpvjX803Ui1gU4WK50l2cMNE26Q0mArAlfGR3MVLohs49VvidsAmlCGTmiTHJQRcaVQ5F87xbryDlAUFrvw3SSB7/eS2Q5AE8jobcPmXET8E2MI70ltXZHa3cadUtolIAPaJ6N6sh1gsOjORGoIQM785iwYD7N13EXI8+25UCinwxTbFaUkNusCtJC7p5jNAROIiv2uPwDoohcA0wA9hiC1TKMZLErGGU3yvNPNW1IVvs4ctgwDRmo7QjRIeSOpIKs7t8iXXHIZ+wa/u/4B/kQ+Vj8xinTAAAAAElFTkSuQmCC"
        />
      </div>
    </footer>
  );
}

export default footer;
