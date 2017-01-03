app.service('imageService', function(){
    return{
            media: [{
                    type: "image",
                    subtype: "photo",
                    caption: "",
                    copyright: "VlaDick666",
                    ["media-metadata"]: [
                    {
                        url: "image/quest.jpg",
                        format: "Standard Thumbnail",
                        height: 75,
                        width: 75
                    },
                    {
                        url: "image/quest.jpg",
                        format: "mediumThreeByTwo210",
                        height: 140,
                        width: 210
                    },
                    {
                        url: "image/quest.jpg",
                        format: "mediumThreeByTwo440",
                        height: 293,
                        width: 440
                    }
                ]
            }]
};})
