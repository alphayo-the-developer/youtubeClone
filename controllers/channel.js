

exports.getIndex = (req, res, next) => {
    res.render("index", {
        videos:[{
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        },
        {
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        },
        {
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        }]})
}


exports.getTrending = (req, res, next) => {
    res.render('trending', {
        TrendingVideos:[{
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente explicabo blanditiis, officiis atque quibusdam non, numquam dicta archit'
        },
        {
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente explicabo blanditiis, officiis atque quibusdam non, numquam dicta archit'
        },
        {
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente explicabo blanditiis, officiis atque quibusdam non, numquam dicta archit'
        }]})
}

exports.getSubscription = (req, res, next) => {
    res.render('subscriptions', {
        SubscribedVideos:[{
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        },
        {
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        },
        {
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        }]})
}

exports.getLibrary = (req, res, next) => {
    res.render('library', {
        WatchedVideos:[{
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        },
        {
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        },
        {
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        }],
        WatchLaterVideos:[{
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        },
        {
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        },
        {
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        }],
        LikedVideos:[{
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        },
        {
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        },
        {
            Thumbnail:'/img/kiKoprGLT.jpg',
            videoDuration: '18:90',
            channelThumbnail:'/img/art-2472892__340.webp',
            videoTitle:'Quos officiis temporeunde distinctio',
            channelTitle:'end of sentence',
            verified: true,
            views:'300k',
            uploadTime:'4 weeks ago'
        }],
    })
}