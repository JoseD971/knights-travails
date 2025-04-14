function knightMoves(start, end) {
    const isValid = (x, y) => x >= 0 && y >= 0 && y < 8;

    const knightsMovesList = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1],
    ];

    const queue = [[start]];
    const visited = new Set();
    visited.add(start.toString());

    while(queue.length > 0) {
        const path = queue.shift();
        const [x, y] = path[path.length - 1];

        if(x === end[0] && y === end[1]) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            for (let step of path) {
                console.log(step);
            }
            return path;
        }

        for (let [dx, dy] of knightsMovesList) {
            const newX = x + dx;
            const newY = y + dy;
            const newPos = [newX, newY];

            if(isValid(newX, newY) && !visited.has(newPos.toString())) {
                visited.add(newPos.toString());
                queue.push([...path, newPos]);
            }
        }
    }

    return null;
}

knightMoves([0, 0], [4, 3]);