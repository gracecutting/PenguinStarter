var penguinPromise= d3.json("classData.json");
var successFCN= function(penguins)
{
    console.log("Data Collected", penguins);
    drawTable(penguins);
    sortFinal(penguins);
    
}
var failFCN= function(errormessage)
{
    console.log("Something Went Wrong",errormessage);
}
penguinPromise.then(successFCN,failFCN);

var quizMean= function(penguin)
{ 
    var getQuizGrade= function(quiz)
    { 
        return quiz.grade 
    }
    var quizGrade= penguin.quizes.map(getQuizGrade)
return d3.mean(quizGrade)
}

var homeworkMean= function(penguin)
{ 
    var getHWGrade= function(homework)
    { 
        return homework.grade 
    }
    var homeworkGrade= penguin.homework.map(getHWGrade)
return d3.mean(homeworkGrade)
}

var testMean= function(penguin)
{ 
    var getTestGrade= function(test)
    { 
        return test.grade 
    }
    var testGrade= penguin.test.map(getTestGrade)
return d3.mean(testGrade)
}

var finalGrade= function(penguin)
{ 
    var getFinalGrade= function(final)
    { 
       return final.grade
    }
  var finalG= penguin.final.map(getFinalGrade)
   return finalG
  }

    
var drawTable=function(penguins) 
{ 
    var rows= d3.select("#penguinTable tbody")
        .selectAll("tr")
        .data(penguins)
        .enter()
        .append("tr")
    
    rows.append("td")
        .append("img")
        .attr("src", function(penguin)
              { console.log("hi")
                return "imgs/"+penguin.picture
              })
    rows.append("td")
        .text(quizMean)
    
    rows.append("td")
        .text(homeworkMean)
    
    rows.append("td")
        .text(testMean)
    
    rows.append("td")
        .text(finalGrade)    
}
var penguins= function(penguin)
{
    return penguin. penguin
}
var compareFinal= function(penguin1, penguin2)
{ 
    var finalGrade1= penguin1.finalGrade
    var finalGrade2= penguin2.finalGrade
    
    if (finalGrade1== finalGrade2)
    { 
        return 0;
    }
    else if (finalGrade1 => finalGrade2)
    {
        return 1
    }
    else
    { 
        return -1
    }
}

var sortFinal = function(penguins)
{
    d3.select("#finalGrade")
        .on("click", function()
            {
        penguins.sort(compareFinal)
    
            d3.select("table tbody")
                .selectAll("*")
                .remove()
            drawTable=("compareFinal")})
    console.log(sortFinal)

}