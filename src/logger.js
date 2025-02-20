import { ref } from "vue";

export const logs = ref("");

export function addLog(msg)
{
    const urlFull = window.location.href;
    const urlShort = urlFull.split("?")[0]; // get url without query shit
    const location = urlShort.split("/")[3];
    const log = `[${location}] ${msg}`;

    logs.value += log + "\n";
    console.log("adding log: "+log);
}