console.log("HTML Canvas")
console.log(`HTML Canvas is perfect for:
    -> Scatter Plots
    -> Line Graphs
    -> Combining Scatter Plots and Line Graphs`)

{   //Source Code for Scatter Plots:
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    canvas.height = canvas.width;
    ctx.transform(1, 0, 0, -1, 0, canvas.height)

    const xArray = [50,60,70,80,90,100,110,120,130,140,150];
    const yArray = [7,8,8,9,9,9,10,11,14,14,15];

    ctx.fillStyle = "red";
    for (let i = 0; i < xArray.length-1; i++) {
    let x = xArray[i]*400/150;
    let y = yArray[i]*400/15;
    ctx.beginPath();
    ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI * 2);
    ctx.fill();
    }
}

{   //Source Code for Line Graphs:
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    canvas.height = canvas.width;
    ctx.transform(1, 0, 0, -1, 0, canvas.height)

    let xMax = canvas.height;
    let slope = 1.2;
    let intercept = 70;

    ctx.moveTo(0, intercept);
    ctx.lineTo(xMax, f(xMax));
    ctx.strokeStyle = "black";
    ctx.stroke();

    function f(x) {
    return x * slope + intercept;
    }
}

{   //Combined:
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    canvas.height = canvas.width;
    ctx.transform(1, 0, 0, -1, 0, canvas.height)

    let xMax = canvas.height;
    let yMax = canvas.width;
    let slope = 1.2;
    let intercept = 70;

    const xArray = [50,60,70,80,90,100,110,120,130,140,150];
    const yArray = [7,8,8,9,9,9,10,11,14,14,15];

    // Plot Scatter
    ctx.fillStyle = "red";
    for (let i = 0; i < xArray.length-1; i++) {
    let x = xArray[i]*xMax/150;
    let y = yArray[i]*yMax/15;
    ctx.beginPath();
    ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI * 2);
    ctx.fill();
    }

    // Plot Line
    ctx.moveTo(0, intercept);
    ctx.lineTo(xMax, f(xMax));
    ctx.strokeStyle = "black";
    ctx.stroke();

    // Line Function<br>
    function f(x) {
    return x * slope + intercept;
    }
}


console.log("Plotly.js")
console.log("Plotly.js is a charting library that comes with over 40 chart types. Is free and open-source under the MIT license")

//Bar Charts
{
    const xArray = ["Italy","France","Spain","USA","Argentina"];
    const yArray = [55, 49, 44, 24, 15];

    const data = [{
    x: xArray,
    y: yArray,
    type: "bar",
    orientation:"v",
    marker: {color:"rgba(0,0,255)"}
    }];

    const layout = {title:"World Wide Wine Production"};

    Plotly.newPlot("myPlot", data, layout);
}

//Horizontal Bar Charts
{
    const xArray = [55, 49, 44, 24, 15];
    const yArray = ["Italy","France","Spain","USA","Argentina"];

    const data = [{
    x: xArray,
    y: yArray,
    type: "bar",
    orientation: "h",
    marker: {color:"rgba(255,0,0,0.6)"}
    }];

    const layout = {title:"World Wide Wine Production"};

    Plotly.newPlot("myPlot", data, layout);
}

//Pie Charts
{   // To display a pie instead of bars, change x and y to labels and values, and change the type to "pie"
    const data = [{
       labels: xArray,
       values: yArray,
       type: "pie"
    }];
}

//Donut Charts
{  
    const data = [{
       labels: xArray,
       values: yArray,
       hole: .4,        //To display a donut instead of a pie, add a hole
       type: "pie"
    }];
}

//Plotting Equations
{
    let exp = "Math.sin(x)";

    // Generate values
    const xValues = [];
    const yValues = [];
    for (let x = 0; x <= 10; x += 0.1) {
    xValues.push(x);
    yValues.push(eval(exp));
    }

    // Display using Plotly
    const data = [{x:xValues, y:yValues, mode:"lines"}];    //To display scatters instead, change mode to "markers"
    const layout = {title: "y = " + exp};
    Plotly.newPlot("myPlot", data, layout);
}

//Scatter Plots
{
    const xArray = [50,60,70,80,90,100,110,120,130,140,150];
    const yArray = [7,8,8,9,9,9,10,11,14,14,15];

    // Define Data
    const data = [{
    x: xArray,
    y: yArray,
    mode:"markers",
    type:"scatter"
    }];

    // Define Layout
    const layout = {
    xaxis: {range: [40, 160], title: "Square Meters"},
    yaxis: {range: [5, 16], title: "Price in Millions"},
    title: "House Prices vs. Size"
    };

    Plotly.newPlot("myPlot", data, layout);
}

//Line Graphs
{
    const xArray = [50,60,70,80,90,100,110,120,130,140,150];
    const yArray = [7,8,8,9,9,9,10,11,14,14,15];

    // Define Data
    const data = [{
    x: xArray,
    y: yArray,
    mode: "lines",
    type: "scatter"
    }];

    // Define Layout
    const layout = {
    xaxis: {range: [40, 160], title: "Square Meters"},
    yaxis: {range: [5, 16], title: "Price in Millions"},
    title: "House Prices vs Size"
    };

    // Display using Plotly
    Plotly.newPlot("myPlot", data, layout);
}

//Bubble Plots — Scatter Plots whose markers have variable color, size, and symbols
{
    const xArray = [1,2,3,4];
    const yArray = [10,20,30,40];

    const trace1 = {
    x: xArray,
    y: yArray,
    mode: 'markers',
    marker: {
        color: ['red', 'green', 'blue', 'orange'],
        size: [20, 30, 40, 50]
    }
    };

    const data = [trace1];

    const layout = {
    title: "Plotting Bubbles"
    };

    Plotly.newPlot('myPlot', data, layout);
}

//Linear Graphs
{
    let exp = "x + 17";

    // Generate values
    const xValues = [];
    const yValues = [];
    for (let x = 0; x <= 10; x += 1) {
    yValues.push(eval(exp));
    xValues.push(x);
    }

    // Define Data
    const data = [{
    x: xValues,
    y: yValues,
    mode: "lines"
    }];

    // Define Layout
    const layout = {title: "y = " + exp};

    // Display using Plotly
    Plotly.newPlot("myPlot", data, layout);
}

//Multiple Lines
{
    let exp1 = "x";
    let exp2 = "1.5*x";
    let exp3 = "1.5*x + 7";

    // Generate values
    const x1Values = [];
    const x2Values = [];
    const x3Values = [];
    const y1Values = [];
    const y2Values = [];
    const y3Values = [];

    for (let x = 0; x <= 10; x += 1) {
    x1Values.push(x);
    x2Values.push(x);
    x3Values.push(x);
    y1Values.push(eval(exp1));
    y2Values.push(eval(exp2));
    y3Values.push(eval(exp3));
    }

    // Define Data
    const data = [
    {x: x1Values, y: y1Values, mode:"lines"},
    {x: x2Values, y: y2Values, mode:"lines"},
    {x: x3Values, y: y3Values, mode:"lines"}
    ];

    // Define Layout
    const layout = {title: "[y=" + exp1 + "] [y=" + exp2 + "] [y=" + exp3 + "]"};

    // Display using Plotly
    Plotly.newPlot("myPlot", data, layout);
}


console.log("Chart.js")
console.log("Chart.js is an free JavaScript library for making HTML-based charts. It is one of the simplest visualization libraries for JavaScript, and comes with the many built-in chart types")
console.log(`How to Use Chart.js:
    ->  1. Add a link to the providing CDN (Content Delivery Network):

            <script
            src="https://cdn.jsdelivr.net/npm/chart.js@4.5.0">
            </script>
        
    ->  2. Add a <canvas> to where in the HTML you want to draw the chart — the canvas element must have a unique id:

            <canvas>
            id="myChart" style="width:100%;max-width:700px"
            </canvas>`)

//Bar Charts
{
    const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    const yValues = [55, 49, 44, 24, 15];
    const barColors = ["red", "green","blue","orange","brown"];

    new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: barColors,
        data: yValues
        }]
    },
    options: {} //use "indexAxis: 'y'" for Horizontal Bars
    });
}

//Pie Charts
{
    const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    const yValues = [55, 49, 44, 24, 15];
    const barColors = ["red", "green","blue","orange","brown"];

    new Chart("myChart", {
    type: "pie",    //change type to "doughnut" to use Doughnut Chart
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: barColors,
        data: yValues
        }]
    },
    options: {
        title: {
        display: true,
        text: "World Wide Wine Production"
        }
    }
    });
}

//Scatter Plots
{
    const xyValues = [
    {x:50, y:7},
    {x:60, y:8},
    {x:70, y:8},
    {x:80, y:9},
    {x:90, y:9},
    {x:100, y:9},
    {x:110, y:10},
    {x:120, y:11},
    {x:130, y:14},
    {x:140, y:14},
    {x:150, y:15}
    ];

    new Chart("myChart", {
    type: "scatter",
    data: {
        datasets: [{
        pointRadius: 4,
        pointBackgroundColor: "rgba(0,0,255,1)",
        data: xyValues
        }]
    },
    options:{}
    });
}

//Line Graphs
{
    const xValues = [50,60,70,80,90,100,110,120,130,140,150];
    const yValues = [7,8,8,9,9,9,10,11,14,14,15];

    new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor:"rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",   //setting borderColor to 0, we can scatter plot the line graph
        data: yValues
        }]
    },
    options:{}
    });
}

//Multiple Lines
{
    const xValues = [100,200,300,400,500,600,700,800,900,1000];

    new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
        data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
        borderColor: "red",
        fill: false
        },{
        data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
        borderColor: "green",
        fill: false
        },{
        data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
        borderColor: "blue",
        fill: false
        }]
    },
    options: {
        legend: {display: false}
    }
    });
}

//Linear Graphs
{
    const xValues = [];
    const yValues = [];
    generateData("x * 2 + 7", 0, 10, 0.5);      //change generateData parameters for Function Graphs -> generateData("Math.sin(x)", 0, 10, 0.5);

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
        fill: false,
        pointRadius: 1,
        borderColor: "rgba(255,0,0,0.5)",
        data: yValues
        }]
    },
    options: {}
    });

    function generateData(value, i1, i2, step = 1) {
    for (let x = i1; x <= i2; x += step) {
        yValues.push(eval(value));
        xValues.push(x);
    }
    }
}


console.log("Google Chart")
console.log("From simple line charts to complex hierarchical tree maps, the Google Chart gallery provides a large number of ready-to-use chart types")
console.log(`How to Use Google Chart:
    ->  1. Add a <div> element (with a unique id) in the HTML where you want to display the chart:
            
            <div id="myChart" style="max-width:700px; height:400px"></div>
        
    ->  2.  Add a link to the charts loader:
    
            <script src="https://www.gstatic.com/charts/loader.js"></script>
            
    ->  3.  Load the Graph API, and add the function to run when the API is loaded:
    
            <script>
            google.charts.load('current',{packages:['corechart']});
            google.charts.setOnLoadCallback(drawChart);

            // Your Function
            function drawChart() {
            ...
            }
            </script>`)

//Bar Charts
{
    function drawChart() {

    // Set Data
    const data = google.visualization.arrayToDataTable([
    ['Contry', 'Mhl'],
    ['Italy', 55],
    ['France', 49],
    ['Spain', 44],
    ['USA', 24],
    ['Argentina', 15]
    ]);

    // Set Options
    const options = { //while using Pie Charts, add "is3D: true" to options, in order to display the Pie in 3D 
    title: 'World Wide Wine Production'
    };

    // Draw
    const chart = new google.visualization.BarChart(document.getElementById('myChart')); //google.visualization.PieChart for Pie Charts
    chart.draw(data, options);

    }
}

//Line Graph
{
    function drawChart() {
    // Set Data
    const data = google.visualization.arrayToDataTable([
    ['Price', 'Size'],
    [50,7],[60,8],[70,8],[80,9],[90,9],[100,9],
    [110,10],[120,11],[130,14],[140,14],[150,15]
    ]);
    // Set Options
    const options = {
    title: 'House Prices vs Size',
    hAxis: {title: 'Square Meters'},
    vAxis: {title: 'Price in Millions'},
    legend: 'none'
    };
    // Draw Chart
    const chart = new google.visualization.LineChart(document.getElementById('myChart')); //google.visualization.ScatterChart for Scatter Plot
    chart.draw(data, options);
    }
}


console.log("D3.js")
console.log("D3.js is a JavaScript library for manipulating HTML data")
console.log(`How to Use D3.js:
    ->  1. To use D3.js in a web page, add a link to the library:

            <script src="//d3js.org/d3.v3.min.js"></script>`)

//Scatter Plot
{
    // Set Dimensions
    const xSize = 500;
    const ySize = 500;
    const margin = 40;
    const xMax = xSize - margin*2;
    const yMax = ySize - margin*2;

    // Create Random Points
    const numPoints = 100;
    const data = [];
    for (let i = 0; i < numPoints; i++) {
    data.push([Math.random() * xMax, Math.random() * yMax]);
    }

    // Append SVG Object to the Page
    const svg = d3.select("#myPlot")
    .append("svg")
    .append("g")
    .attr("transform","translate(" + margin + "," + margin + ")");

    // X Axis
    const x = d3.scaleLinear()
    .domain([0, 500])
    .range([0, xMax]);

    svg.append("g")
    .attr("transform", "translate(0," + yMax + ")")
    .call(d3.axisBottom(x));

    // Y Axis
    const y = d3.scaleLinear()
    .domain([0, 500])
    .range([ yMax, 0]);

    svg.append("g")
    .call(d3.axisLeft(y));

    // Dots
    svg.append('g')
    .selectAll("dot")
    .data(data).enter()
    .append("circle")
    .attr("cx", function (d) { return d[0] } )
    .attr("cy", function (d) { return d[1] } )
    .attr("r", 3)
    .style("fill", "Red");
}