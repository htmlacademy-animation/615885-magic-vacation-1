export default ()=> {
  const path = document.querySelectorAll(`.result__title path`);

  function svgStrokeLength(arr) {
    for (let i of arr) {
      let length = i.getTotalLength();

      i.style.strokeDasharray = length + ` ` + length;
      i.style.strokeDashoffset = length;
    }
  }
  svgStrokeLength(path);
};
