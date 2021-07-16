var userFeed = new Instafeed({
    get: 'user',
    target: "instafeed-container",
    resolution: 'low_resolution',
    limit:30,
    accessToken: ''
});
userFeed.run();


