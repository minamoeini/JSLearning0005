function Data() {
  this.comments = [
    {
      id: "1",
      text: "Great welcoming experience to the Dominican. We used Otium for the airport transport- we were to the resort in 20 minutes. Ralphy has been our concierge for the first half of the stay, he been very helpful- always able to pull through for anything we request",
      username: "Jake W",
      imageurl:
        "https://media-cdn.tripadvisor.com/media/photo-l/01/2e/70/9e/avatar069.jpg",
      date: "January 2020",
      point: 11,
    },
    {
      id: "2",
      text: "We travelled as a group of 13 ages 18 to 80 and this resort was enjoyed by all. We’ve been fortunate to travel to many resorts in Punta Cana but the Grand was by far the best",
      username: "Andrea C",
      imageurl:
        "https://media-cdn.tripadvisor.com/media/photo-l/01/2e/70/55/avatar028.jpg",
      date: "Jan 2020",
      point: 14,
    },
    {
      id: "3",
      text: "The Hotel opened 1-1,5 hs ago. Everything is new and very clean. Even the cheapest rooms are very spacious (77square meters and room and dinning area with sofa bed are diivided by a sliding door).",
      username: "sergiogiaco",
      imageurl:
        "https://media-cdn.tripadvisor.com/media/photo-l/01/2e/70/74/avatar056.jpg",
      date: "Dec 2020",
      point: 11,
    },
  ];
}

function Painter(rootElement) {
  const data = new Data();

  const getBuilder = function (tag) {
    return new ElementBuilder(tag);
  };

  this.render = function () {
    // const container = document.createElement('div');
    // container.style.maxWidth = "800px";

    const container = getBuilder("div")
      .style("maxWidth", "800px")
      .appendTo(rootElement)
      .build();

    data.comments.forEach(function (comment, index) {
      const child = getBuilder("div")
        .style("border", "1px solid blue")
        .style("width", "100%")
        .style("height", "100px")
        .style("tableLayout", "fixed")
        .style("display", "table")
        .build();

      //create add and delete button
      const buttonDiv = getBuilder("div").style("float", "right").style("margin", "10px 10px").build();
      buttonDiv.display = "table-cell";
     
      //add button
      const addButton = getBuilder("i").build();
      addButton.className="fa fa-thumbs-up";
      addButton.addEventListener("click", () => {
        let element = document.getElementById(index);        
        if (element) {
          element.textContent = parseInt(element.textContent) + 1;
        }
      });

      buttonDiv.appendChild(addButton);
      //point
      const pointSpan = getBuilder("span").text(comment.point).style("padding", "0px 10px 0px 10px").build();
      pointSpan.id = index;

      buttonDiv.appendChild(pointSpan);
      //delete button
      const deleteButton = getBuilder("i").build();
      deleteButton.className="fa fa-thumbs-down";
      deleteButton.addEventListener("click", () => {
        let element2 = document.getElementById(index);
        if (element2) {
          element2.textContent =
            parseInt(element2.textContent) == 0
              ? 0
              : parseInt(element2.textContent) - 1;
        }
      });
      buttonDiv.appendChild(deleteButton);
      child.appendChild(buttonDiv);
      //create image
      const imgDiv = getBuilder("div").style("margin", "25px 25px 25px 25px").build();
      imgDiv.display = "table-cell";
      const img = document.createElement("img");
      img.src = comment.imageurl;
      imgDiv.appendChild(img);
      child.appendChild(imgDiv);
      //create text

      const span = getBuilder("span").build();
      span.display = "table-cell";
      span.textContent = comment.text;
      child.appendChild(span);

      container.appendChild(child);
    });

    //rootElement.appendChild(container);
  };
}

function ElementBuilder(tag) {
  this.element = document.createElement(tag);

  this.text = function (text) {
    this.element.innerText = text;
    return this;
  };

  this.style = function (name, value) {
    this.element.style[name] = value;
    return this;
  };

  this.appendTo = function (container) {
    container.appendChild(this.element);
    return this;
  };

  this.build = function () {
    return this.element;
  };
}

const container = document.getElementById("root");
const app = new Painter(container);

app.render();
