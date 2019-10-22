var penPromise = d3.json("/penguins/penguins/classData.json")
    penPromise.then(function(pen){
        d3.select("#pen").text("Penguins")
        console.log("pen", pen);
        classroom = pen;
        return penImage(pen);
    },
    function(err){
        d3.select("#pen").text("No penguins")
        console.log("err", err);
    })

var penImage = function(pen){
    var column = 
    d3.select("#pen")
      .selectAll("img")
      .data(pen)
      .enter()
      .append("img")
       .attr("src", function(p){
        return "penguins/penguins/" + p.picture;
      
    })
}
    column.append("p")
var classroom = [];
var Quiz = function(quiz){
    d3.select("#quiz")
    .selectAll("p")
    .data(quiz)
    .enter()
    .append("p")
     .text(function(p){
        return "penguins/penguins/" + p.quizes;
    })
    
}