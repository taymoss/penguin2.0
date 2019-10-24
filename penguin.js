var penPromise = d3.json("penguins/penguins/classData.json")
    penPromise.then(function(pen){
        d3.select("th").text("Penguins")
        console.log("pen", pen);
         pen.map(summary);
        console.log("pen", pen);
         
        penTable(pen);
    },
    function(err){
        d3.select("#pen").text("No penguins")
        console.log("err", err);
    })

var penTable = function(pen){
    var table = d3.select ("table").select("tbody")
      .selectAll("tr")
      .data(pen)
      .enter()
      .append("tr")

table.append("td")
        .append("img")
         .attr("src", function(p){
          return "penguins/penguins/" + p.picture;
    })
table.append("td")
      .text(function(d){
    return meanQuiz(d)
})
table.append("td")
      .text(function(d){
    return meanTest(d);
})
table.append("td")
      .text(function(d){
    return meanHW(d);
})
table.append("td")
      .text(function(d){
    return final(d);
})
table.append("td")
      .text(function(d){
    return totalGrade(d);
})
    .style("color", function(d){
    var issue = totalGrade(d)
        if(issue<=70){
            return "red";
        }
})
}

var meanQuiz = function(pen){
    var mapQuiz = pen.quizes.map(function(quiz){
    return quiz.grade;
    })
    var meanQ = d3.mean(mapQuiz);
    return meanQ*10;
}

var meanTest = function(pen){
    var mapTest = pen.test.map(function(test){
        return test.grade;
    })
    var meanT = d3.mean(mapTest);
    return meanT;
}

var final = function(pen){
    var mapFinal = pen.final.map(function(fin){
        return fin.grade;
    })
    return mapFinal;
}

var meanHW = function(pen){
    var mapHW = pen.homework.map(function(hw){
        return hw.grade*2;
    })
    var meanW = d3.mean(mapHW);
    return meanW;
}
                                 
var totalGrade = function(pen){
    return meanTest(pen)*.35 + final(pen)*.3 + meanQuiz(pen)*.2 + meanHW(pen)*.15;
}

var summary = function(pen){
    var hW = meanHW(pen)*2;
    var tE = meanTest(pen);
    var qU = meanQuiz(pen)*10;
    
    pen.homeworkS = hW;
    pen.testZ = tE;
    pen.quiz = qU;
    
}