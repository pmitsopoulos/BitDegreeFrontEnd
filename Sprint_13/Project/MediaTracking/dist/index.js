"use strict";
var MediaStatus;
(function (MediaStatus) {
    MediaStatus["out"] = "Media unavailable";
    MediaStatus["in"] = "Media available";
})(MediaStatus || (MediaStatus = {}));
const mediaArr = [];
const demoMedia1 = {
    title: "Pragmatic Programmer",
    status: MediaStatus.in,
    type: "Science",
    date_published: new Date(),
    genre: "Technical",
    author: "Andrew Hunt & David Thomas"
};
const demoMedia2 = {
    title: "SportTime",
    status: MediaStatus.out,
    type: "Sports",
    issue_no: 0,
    subject: "Football News"
};
const demoMedia3 = {
    title: "MotoGp",
    status: MediaStatus.in,
    type: "Racing",
    issue_no: 0,
    subject: "Bikes"
};
function addMedia(media) {
    mediaArr.push(media);
}
function changeMediaStatus(media) {
    var foundMedia = mediaArr.findIndex(m => m === media);
    if (mediaArr[foundMedia].status === MediaStatus.in) {
        mediaArr[foundMedia].status = MediaStatus.out;
    }
    else {
        mediaArr[foundMedia].status = MediaStatus.in;
    }
}
function printTitlesIn() {
    const filteredResults = mediaArr.filter(m => {
        if (m.status === MediaStatus.in) {
            return m;
        }
    })
        .map((m) => {
        return m.title;
    });
    return filteredResults;
}
addMedia(demoMedia1);
addMedia(demoMedia2);
addMedia(demoMedia3);
console.log(printTitlesIn());
changeMediaStatus(demoMedia1);
console.log("Changes were made!\n");
console.log(printTitlesIn());
