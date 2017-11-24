
d3.select(window).on('load', () => {
  d3.select("#images")
    .append('img')
    .attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Caf%C3%A9_wall.svg/840px-Caf%C3%A9_wall.svg.png")
    .attr("alt", "Café wall");
});
