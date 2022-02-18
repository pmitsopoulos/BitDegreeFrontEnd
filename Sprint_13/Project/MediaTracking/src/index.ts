enum MediaStatus{
    out = "Media unavailable",
    in = "Media available"
}
type Media = {
    title: string,
    status: MediaStatus,
    type:string
}

interface Book extends Media {
    date_published: Date,
    genre:string,
    author:string

}

interface Magazine extends Media {
    issue_no:number,
    subject:string
}

const mediaArr: Media[] = [];

const demoMedia1: Book = {
    title: "Pragmatic Programmer",
    status: MediaStatus.in,
    type: "Science",
    date_published: new Date(),
    genre: "Technical",
    author: "Andrew Hunt & David Thomas"
}
const demoMedia2: Magazine =  {
    title: "SportTime",
    status: MediaStatus.out,
    type: "Sports",
    issue_no: 0,
    subject: "Football News"
};
const demoMedia3: Magazine =  {
    title: "MotoGp",
    status: MediaStatus.in,
    type: "Racing",
    issue_no: 0,
    subject: "Bikes"
};


function addMedia(media: Media){
    mediaArr.push(media);
}

function changeMediaStatus (media: Media){
    var foundMedia = mediaArr.findIndex(m=> m === media);
    if(mediaArr[foundMedia].status === MediaStatus.in)
    {
        mediaArr[foundMedia].status = MediaStatus.out;
    }
    else
    {
        mediaArr[foundMedia].status = MediaStatus.in;
    }  
}

function printTitlesIn () : string[]{
    
    const filteredResults = mediaArr.filter(m=> {
        if(m.status === MediaStatus.in){
            return m;
        }
    })
    .map((m)=>{
        return m.title;
    })
    return filteredResults;
}

addMedia(demoMedia1);
addMedia(demoMedia2);
addMedia(demoMedia3);

console.log(printTitlesIn());

changeMediaStatus(demoMedia1);

console.log("Changes were made!\n");

console.log(printTitlesIn());

