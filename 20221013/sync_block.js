const { Worker, isMainThread, parentPort, ab } = require("worker_threads");

signal = "";

if (isMinThread) {
  // 부모일 때
    const worker = new Worker(__filename);

    worker.on("message", (message) => {
    console.log("worker -> main :    ", message);
    signal = message;
    });

    console.log(0);
    console.log(signal);
    console.log("main's jobs");
} else {
  // 워커일 때
    console.log("worker's jobs");

    parentPort.postMessage("workwer is done");
    parentPort.close();
}
