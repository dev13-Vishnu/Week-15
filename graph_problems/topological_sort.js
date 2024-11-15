// 3. Problem 3: Course Schedule (Topological Sort)
// Problem Statement: There are n courses labeled from 0 to n-1. Some courses have prerequisites represented as prerequisites[i] = [ai, bi], meaning you must take course bi before course ai. Given n and prerequisites, determine if it’s possible to finish all courses.

function canFinish(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    const inDegree = Array(numCourses).fill(0);

    for (const [course, pre] of prerequisites) {
        graph[pre].push(course);
        inDegree[course]++;
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    let count = 0;
    while (queue.length > 0) {
        const course = queue.shift();
        count++;

        for (const nextCourse of graph[course]) {
            inDegree[nextCourse]--;
            if (inDegree[nextCourse] === 0) queue.push(nextCourse);
        }
    }

    return count === numCourses;
}

console.log(canFinish(2, [[1, 0]]));
console.log(canFinish(2, [[1, 0], [0, 1]]));
