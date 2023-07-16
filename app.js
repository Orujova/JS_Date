const date = document.getElementById("date");
const img = document.getElementById("img");
date.addEventListener("change", function () {
  const selectedDate = new Date(date.value);
  const dayOfWeek = selectedDate.getDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    img.setAttribute(
      "src",
      "https://media.tenor.com/aKFaZBrZFYcAAAAC/excited-spin.gif"
    );
  } else {
    img.setAttribute(
      "src",
      "https://i.pinimg.com/originals/bc/5d/28/bc5d28a7482ce599063f0e0f0884759f.gif"
    );
  }
});
