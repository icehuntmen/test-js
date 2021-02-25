const { task } = require('./util');
const taskDescription = {
    name: 'findDeadlock',
    description: "You have a 2D binary matrix that's filled with 0s and 1s. In the matrix, find the largest square that contains only 1s and return its area.\n"
}

const findDeadlock = (connection) => {

    const point = {
        set: function (data){
            this.data = data
            this.next = null
            return this;
        }

    }
    const listData = {
        apex: null,
        insertAtPoint: function(data) {
           // let temp = { data: data,next: null }
            let temp = point.set(data)
            //temp.next = this.apex;
            this.apex = temp;
            console.log(this.apex )
            return this;
        },
        getPoint: function () {
            return this.apex;
        }
    }

    const drawPoint = {
        points:[],
        params: function (ver){
            this.vertex = ver
            for (let i = 0; i < this.vertex; i++) {
                let temp = listData;
                this.points.push(temp);
            }
            return this
        },
        addEdge: function (srcPoint, destPoint) {
            this.edge = {src: srcPoint,dest:destPoint, points: this.vertex }
            if (srcPoint < this.vertex && destPoint < this.vertex) {
                this.points[srcPoint].insertAtPoint(destPoint);
            }
            return this;
        }
    }


    const colors = {
        WHITE: "white",
        GRAY: "gray",
        BLACK: "black",
    };

    Object.freeze(colors);

    const g = drawPoint.params(connection.length);

    for (let i = 0; i < connection.length; i++) {
        for (let j = 0; j < connection[i].length; j++) {

            g.addEdge(i, connection[i][j]);
        }
    }
    console.dir(g,{colors:true, depth: 5 })
    /**
     * Check DeadLock
     * @param g {Object}
     * @return {boolean}
     */
    function isDeadlocked(g){
        let color = [];

        for (let j = 0; j < g.vertex; j++) {
            color[j] = colors.WHITE;
        }
        for (let i = 0; i < g.vertex; i++) {
            if (color[i] == colors.WHITE) {
                if (detectCycle(g, i, color)) {
                    return true;
                }
            }
        }
        return false;
    }


    function detectCycle(apex, currentVertex, color){
        color[currentVertex] = colors.GRAY;
        let neighbor;
        let nextApex = apex.points[currentVertex].getPoint();

        while (nextApex !== null) {
            neighbor = nextApex.data;


            if (color[neighbor] == colors.GRAY) {
                //console.log({neighbor:neighbor,neighborColor:colors.GRAY, currentVertex: currentVertex,hex: color[currentVertex], color: color,apex: nextApex})
                return true
            }
            if (color[neighbor] == colors.WHITE && detectCycle(apex, neighbor, color)) {
                //console.log({neighbor:neighbor,neighborColor:colors.WHITE, currentVertex: currentVertex,hex: color[currentVertex], color: color,apex: nextApex})
                return true

            }
            nextApex = nextApex.next;
        }


        color[currentVertex] = colors.BLACK;
        return false;
    }
   // find
   return isDeadlocked(g);
}

const connections1 = [[1], [2], [3, 4], [4], [0]]

const connections2 = [[1, 2, 3], [2, 3], [3], []];

task.run(findDeadlock).set(connections1,connections2)
