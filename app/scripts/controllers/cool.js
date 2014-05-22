'use strict';

angular.module('naokoPageApp')
  .controller('CoolCtrl', ['$scope', '$location',
        function ($scope, $location) {
            var data = [4, 8, 15, 16, 23, 42];
            var chart = d3.select("#chart"); // select the chart container

            chart.selectAll("div")  // initiate the data join by defining the selection to which we will join data
                .data(data) // join the data to the selection
                .enter().append("div") //  enter selection which represents new data (bar of graph)
                .style("background", "black")
                .style("color", "white")
                .style("text-align", "right")
                // set the width of each new bar as a multiple of the associated data value, d.
                .style("width", function(d) { return d * 10 + "px"; })
                // use a function to set the text content of each bar, and produce a label
                .text(function(d) { return d; });

            /* --------------------------- */
            // http://www.d3noob.org/2014/01/tree-diagrams-in-d3js_11.html
            var treeData = [
                {
                    "name": "Top Level",
                    "parent": "null",
                    "value": 10,
                    "type": "black",
                    "level": "red",
                    "children": [
                        {
                            "name": "Level 2: A",
                            "parent": "Top Level",
                            "value": 45,
                            "type": "grey",
                            "level": "red",
                            "children": [
                                {
                                    "name": "Son of A",
                                    "parent": "Level 2: A",
                                    "value": 5,
                                    "type": "steelblue",
                                    "level": "orange"
                                },
                                {
                                    "name": "Daughter of A",
                                    "parent": "Level 2: A",
                                    "value": 8,
                                    "type": "steelblue",
                                    "level": "red"
                                }
                            ]
                        },
                        {
                            "name": "Level 2: B",
                            "parent": "Top Level",
                            "value": 10,
                            "type": "grey",
                            "level": "green"
                        }
                    ]
                }
            ];

            // ************** Generate the tree diagram  *****************
            var margin = {top: 20, right: 120, bottom: 20, left: 120},
                width = 900 - margin.right - margin.left,
                height = 400 - margin.top - margin.bottom;

            var i = 0;

            var tree = d3.layout.tree()
                .size([height, width]);

            var diagonal = d3.svg.diagonal()
                .projection(function(d) { return [d.x, d.y]; });

            var svg = d3.select("#tree")
                .attr("width", width + margin.right + margin.left)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            var root = treeData[0];

            update(root);

            function update(source) {

                // Compute the new tree layout.
                var nodes = tree.nodes(root).reverse(),
                    links = tree.links(nodes);

                // Normalize for fixed-depth.
                nodes.forEach(function(d) { d.y = d.depth * 100; });

                // Declare the nodesâ€¦
                var node = svg.selectAll("g.node")
                    .data(nodes, function(d) { return d.id || (d.id = ++i); });

                // Enter the nodes.
                var nodeEnter = node.enter().append("g")
                    .attr("class", "node")
                    .attr("transform", function(d) {
                        return "translate(" + d.x + "," + d.y + ")"; });

                nodeEnter.append("circle")
                    .attr("r", function(d) { return d.value; })
                    .style("fill", function(d) { return d.level; })
                    .style("stroke", function(d) { return d.type; });

                nodeEnter.append("text")
                    .attr("x", function(d) {
                        return d.children || d._children ?
                            (d.value + 4) * -1 : d.value + 4 })
                    .attr("dy", ".35em")
                    .attr("text-anchor", function(d) {
                        return d.children || d._children ? "end" : "start"; })
                    .text(function(d) { return d.name; })
                    .style("fill-opacity", 1);

                // Declare the links
                var link = svg.selectAll("path.link")
                    .data(links, function(d) { return d.target.id; });

                // Enter the links.
                link.enter().insert("path", "g")
                    .attr("class", "link")
                    .style("fill", "none")
                    .style("stroke", function(d) { return d.target.level; })
                    .style("stroke-width", "2px")
                    .attr("d", diagonal);

            }
  }]);
