const programsData = [
    {
      image1: "fa-solid",
      image2: "fa-dumbbell",
      heading: "Strength Training",
      details:
        "In this program, you are trained to improve your strength through many exercises.",
    },
    {
      image1: "fa-solid",
      image2:"fa-person-running",
      heading: "Cardio Training",
      details:
        "In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
    },
    {
      image1: "fa-solid",
      image2: "fa-fire",
      heading: "Fat Burning",
      details: "This program is suitable for you who wants to get rid of your fat and lose their weight.",
    },
    {
      image1: "fa-solid",
      image2: "fa-heart-pulse",
      heading: "Health Fitness",
      details:
        "This programs is designed for those who exercises only for their body fitness not body building.",
    },
  ];
  
  
const programcategory = document.querySelector(".program-category")

programsData.forEach((program) => {
    const category = document.createElement("div");
    category.classList.add("category");
    // console.log(typeof(program.image));
    const imageEle = document.createElement("div");
    imageEle.classList.add(program.image1);
    imageEle.classList.add(program.image2);
    category.appendChild(imageEle);

    const headingspan = document.createElement("span");
    headingspan.textContent = program.heading;
    category.appendChild(headingspan);

    const detailsspan = document.createElement("span");
    detailsspan.textContent = program.details;
    category.appendChild(detailsspan);

    const joinNowDiv = document.createElement("div");
    joinNowDiv.classList.add("join-now");

    const joinNowSpan = document.createElement("span");
    joinNowSpan.textContent = "Join Now";
    joinNowDiv.appendChild(joinNowSpan);

    category.appendChild(joinNowDiv);

    programcategory.appendChild(category);
})

  

// --------------------------- NUMBER COUNTER -------------------------------
function NumberCounter(end, start, delay, preFix) {
  this.end = end;
  this.start = start;
  this.delay = delay;
  this.preFix = preFix;
  this.current = start;
  this.interval = null;
  this.id = null;

  this.animate = function () {
    this.interval = setInterval(() => {
      this.current++;
      if (this.current > this.end) {
        clearInterval(this.interval);
        this.current = this.start;
        setTimeout(() => this.animate(), 3000);
      } else {
        this.updateDisplay();
      }
    }, this.delay);
  };

  this.updateDisplay = function () {
    const counterElement = document.getElementById(this.id);
    counterElement.textContent = this.preFix + this.current;
  };

  this.startAnimation = function () {
    setTimeout(() => this.animate(), 1000);
  };
}

const coachesCounter = new NumberCounter(140, 10, 2, "+");
const membersCounter = new NumberCounter(978, 850, 2, "+");
const programsCounter = new NumberCounter(100, 0, 2, "+");

const coachesSpan = document.querySelector(".figures div:first-child span:first-child");
const membersSpan = document.querySelector(".figures div:nth-child(2) span:first-child");
const programsSpan = document.querySelector(".figures div:last-child span:first-child");

coachesCounter.id = coachesSpan.id;
membersCounter.id = membersSpan.id;
programsCounter.id = programsSpan.id;

coachesCounter.startAnimation();
membersCounter.startAnimation();
programsCounter.startAnimation();

