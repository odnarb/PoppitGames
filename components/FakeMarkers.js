//an example of using external/remote assets
// const Images = [
//   { uri: "https://i.imgur.com/sNam9iJ.jpg" },
//   { uri: "https://i.imgur.com/N7rlQYt.jpg" },
//   { uri: "https://i.imgur.com/UDrH0wm.jpg" },
//   { uri: "https://i.imgur.com/Ka8kNST.jpg" }
// ];

/*
const markers = [
{"seen":false,"hash":"c72f7509-cccd-4af8-8f20-59a87af41790","title":"Quick Trip #1","description":"Test description #1","coupon":{"title":"Coupon #1","description":""},"coordinate":{"latitude":33.191,"longitude":-112.077},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"3cb5cc1e-f6aa-46ef-ab4e-f843c32977ee","title":"Quick Trip #2","description":"Test description #2","coupon":{"title":"Coupon #2","description":""},"coordinate":{"latitude":32.969,"longitude":-112.044},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"d2ef56be-c1c4-4e13-93f4-0b61b99fdddc","title":"Quick Trip #3","description":"Test description #3","coupon":{"title":"Coupon #3","description":""},"coordinate":{"latitude":33.157,"longitude":-112.069},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"fde1d29f-fa88-4f01-b0c0-831cf3d4d028","title":"Quick Trip #4","description":"Test description #4","coupon":{"title":"Coupon #4","description":""},"coordinate":{"latitude":33.461,"longitude":-112.084},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"d16a55c2-12b9-443e-83ec-0934eba23274","title":"Quick Trip #5","description":"Test description #5","coupon":{"title":"Coupon #5","description":""},"coordinate":{"latitude":33.397,"longitude":-112.072},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"c5e6d163-8c16-40ae-9504-d92df7816cea","title":"Quick Trip #6","description":"Test description #6","coupon":{"title":"Coupon #6","description":""},"coordinate":{"latitude":32.972,"longitude":-112.077},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"3d52f28d-a5eb-4624-9603-7888c8da0351","title":"Quick Trip #7","description":"Test description #7","coupon":{"title":"Coupon #7","description":""},"coordinate":{"latitude":33.079,"longitude":-112.064},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"395e577c-0f48-4c1e-a76c-1601d2256287","title":"Quick Trip #8","description":"Test description #8","coupon":{"title":"Coupon #8","description":""},"coordinate":{"latitude":33.57,"longitude":-112.053},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"56716005-fe25-4426-90ea-2c74087a1b3c","title":"Quick Trip #9","description":"Test description #9","coupon":{"title":"Coupon #9","description":""},"coordinate":{"latitude":33.323,"longitude":-112.085},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"a3e0b227-dd90-4b31-ac50-fa421c749dae","title":"Quick Trip #10","description":"Test description #10","coupon":{"title":"Coupon #10","description":""},"coordinate":{"latitude":33.295,"longitude":-112.076},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"f341f4e5-522e-46dc-82e1-0cdee99b5b62","title":"Quick Trip #11","description":"Test description #11","coupon":{"title":"Coupon #11","description":""},"coordinate":{"latitude":33.749,"longitude":-112.067},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"5c4f611b-ebe0-4b0c-949e-d56637a6c323","title":"Quick Trip #12","description":"Test description #12","coupon":{"title":"Coupon #12","description":""},"coordinate":{"latitude":33.644,"longitude":-112.045},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"22e1e1c2-66a3-46d8-bcee-d80af2184fc5","title":"Quick Trip #13","description":"Test description #13","coupon":{"title":"Coupon #13","description":""},"coordinate":{"latitude":33.369,"longitude":-112.058},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"7070ed76-5fa7-4665-adf7-875f232ddf89","title":"Quick Trip #14","description":"Test description #14","coupon":{"title":"Coupon #14","description":""},"coordinate":{"latitude":32.989,"longitude":-112.064},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"3673f618-697f-419e-9a7f-f3415872abc2","title":"Quick Trip #15","description":"Test description #15","coupon":{"title":"Coupon #15","description":""},"coordinate":{"latitude":33.925,"longitude":-112.069},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"38bcf526-4b88-4094-9366-1449bcb7ee86","title":"Quick Trip #16","description":"Test description #16","coupon":{"title":"Coupon #16","description":""},"coordinate":{"latitude":33.247,"longitude":-112.084},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"0a940730-4003-412f-a53a-20ae63b382d4","title":"Quick Trip #17","description":"Test description #17","coupon":{"title":"Coupon #17","description":""},"coordinate":{"latitude":33.734,"longitude":-112.081},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"a5e2cc13-798c-4aa4-9886-4b88efc599ba","title":"Quick Trip #18","description":"Test description #18","coupon":{"title":"Coupon #18","description":""},"coordinate":{"latitude":32.996,"longitude":-112.081},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"122b1661-fbba-4d81-add6-a6f6202f78a6","title":"Quick Trip #19","description":"Test description #19","coupon":{"title":"Coupon #19","description":""},"coordinate":{"latitude":33.101,"longitude":-112.075},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"80764765-d3d0-4a26-ab27-5867a6007c16","title":"Quick Trip #20","description":"Test description #20","coupon":{"title":"Coupon #20","description":""},"coordinate":{"latitude":33.482,"longitude":-112.085},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"3860773c-8115-4b22-abff-909ae1db3240","title":"Quick Trip #21","description":"Test description #21","coupon":{"title":"Coupon #21","description":""},"coordinate":{"latitude":33.321,"longitude":-112.082},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"c08de369-c4bc-4132-9c80-08ac540a7914","title":"Quick Trip #22","description":"Test description #22","coupon":{"title":"Coupon #22","description":""},"coordinate":{"latitude":33.823,"longitude":-112.051},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"e4858dbd-6193-4dfa-a6da-4c39f26b4a4a","title":"Quick Trip #23","description":"Test description #23","coupon":{"title":"Coupon #23","description":""},"coordinate":{"latitude":33.783,"longitude":-112.053},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"19f6e465-945d-4433-822e-c579c546761e","title":"Quick Trip #24","description":"Test description #24","coupon":{"title":"Coupon #24","description":""},"coordinate":{"latitude":33.031,"longitude":-112.08},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"e675cf42-d7da-44ae-8dd9-ca66a71400b6","title":"Quick Trip #25","description":"Test description #25","coupon":{"title":"Coupon #25","description":""},"coordinate":{"latitude":33.261,"longitude":-112.084},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"0545be9d-b368-4c62-824b-8f1003223791","title":"Quick Trip #26","description":"Test description #26","coupon":{"title":"Coupon #26","description":""},"coordinate":{"latitude":32.997,"longitude":-112.061},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"10e3c1d3-1193-4adb-bad7-aa3963ac1810","title":"Quick Trip #27","description":"Test description #27","coupon":{"title":"Coupon #27","description":""},"coordinate":{"latitude":33.718,"longitude":-112.067},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"54e8bcc5-8782-4a84-9eea-63dfe51d44be","title":"Quick Trip #28","description":"Test description #28","coupon":{"title":"Coupon #28","description":""},"coordinate":{"latitude":33.429,"longitude":-112.072},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"e9886405-58ef-4aae-a846-0d4d34c87438","title":"Quick Trip #29","description":"Test description #29","coupon":{"title":"Coupon #29","description":""},"coordinate":{"latitude":33.514,"longitude":-112.052},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"06ad95ed-3efe-448d-8bbd-3d191f66e8b6","title":"Quick Trip #30","description":"Test description #30","coupon":{"title":"Coupon #30","description":""},"coordinate":{"latitude":33.152,"longitude":-112.068},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"b1195334-576c-41da-b124-a32013affdd1","title":"Quick Trip #31","description":"Test description #31","coupon":{"title":"Coupon #31","description":""},"coordinate":{"latitude":33.354,"longitude":-112.053},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"792b958c-18f0-4e73-aab9-9d71f3fd0a8f","title":"Quick Trip #32","description":"Test description #32","coupon":{"title":"Coupon #32","description":""},"coordinate":{"latitude":33.766,"longitude":-112.052},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"c9c419b5-bed2-4673-8055-40c09dfab493","title":"Quick Trip #33","description":"Test description #33","coupon":{"title":"Coupon #33","description":""},"coordinate":{"latitude":33.481,"longitude":-112.064},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"b997551a-61c2-4466-8631-fd82cb228bf9","title":"Quick Trip #34","description":"Test description #34","coupon":{"title":"Coupon #34","description":""},"coordinate":{"latitude":33.387,"longitude":-112.075},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"dfb54a6e-6332-4ae6-b5eb-901294717d71","title":"Quick Trip #35","description":"Test description #35","coupon":{"title":"Coupon #35","description":""},"coordinate":{"latitude":33.563,"longitude":-112.064},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"5d1a92d3-24a2-4b3b-af4a-f9f3e2da0275","title":"Quick Trip #36","description":"Test description #36","coupon":{"title":"Coupon #36","description":""},"coordinate":{"latitude":33.557,"longitude":-112.05},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"0f43ff8b-658e-4597-be85-e752e817a96d","title":"Quick Trip #37","description":"Test description #37","coupon":{"title":"Coupon #37","description":""},"coordinate":{"latitude":33.664,"longitude":-112.051},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"339bb78e-2b04-460f-a90b-087badc365cb","title":"Quick Trip #38","description":"Test description #38","coupon":{"title":"Coupon #38","description":""},"coordinate":{"latitude":33.491,"longitude":-112.079},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"f41d0e1f-b755-4775-9ec3-245e4df3a491","title":"Quick Trip #39","description":"Test description #39","coupon":{"title":"Coupon #39","description":""},"coordinate":{"latitude":33.71,"longitude":-112.069},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"62322a21-21de-42af-a672-ab0fe7b0fd77","title":"Quick Trip #40","description":"Test description #40","coupon":{"title":"Coupon #40","description":""},"coordinate":{"latitude":33.036,"longitude":-112.081},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"7c9961e5-0210-4a0d-89a4-4451689a2abc","title":"Quick Trip #41","description":"Test description #41","coupon":{"title":"Coupon #41","description":""},"coordinate":{"latitude":33.249,"longitude":-112.084},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"a71ed4c0-0344-4f38-bac4-0feb8ece0398","title":"Quick Trip #42","description":"Test description #42","coupon":{"title":"Coupon #42","description":""},"coordinate":{"latitude":33.224,"longitude":-112.077},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"ccd4227a-bb46-4347-85ba-2142b5228d74","title":"Quick Trip #43","description":"Test description #43","coupon":{"title":"Coupon #43","description":""},"coordinate":{"latitude":33.435,"longitude":-112.084},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"cfe11e18-ba8e-49c2-bad1-3f6cb1c8ee34","title":"Quick Trip #44","description":"Test description #44","coupon":{"title":"Coupon #44","description":""},"coordinate":{"latitude":33.427,"longitude":-112.084},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"22c81d9d-1121-402f-a538-72028f7e03a4","title":"Quick Trip #45","description":"Test description #45","coupon":{"title":"Coupon #45","description":""},"coordinate":{"latitude":33.772,"longitude":-112.069},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"bc5d566c-ca52-4608-a3d6-8a86eb70c860","title":"Quick Trip #46","description":"Test description #46","coupon":{"title":"Coupon #46","description":""},"coordinate":{"latitude":33.47,"longitude":-112.065},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"9a24d8f8-a8a5-43a4-88a6-127651d9e946","title":"Quick Trip #47","description":"Test description #47","coupon":{"title":"Coupon #47","description":""},"coordinate":{"latitude":32.952,"longitude":-112.084},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"da078fda-55d1-41bf-ae46-8a9e4d9c7e6b","title":"Quick Trip #48","description":"Test description #48","coupon":{"title":"Coupon #48","description":""},"coordinate":{"latitude":33.461,"longitude":-112.075},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"cc3c8efb-f68f-4786-b4eb-cd70a92150f7","title":"Quick Trip #49","description":"Test description #49","coupon":{"title":"Coupon #49","description":""},"coordinate":{"latitude":33.767,"longitude":-112.056},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"aee2ddf9-767d-4f00-9690-4b98da053647","title":"Quick Trip #50","description":"Test description #50","coupon":{"title":"Coupon #50","description":""},"coordinate":{"latitude":33.007,"longitude":-112.053},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"d82bd503-0a33-4ea2-a013-96823a654c87","title":"Quick Trip #51","description":"Test description #51","coupon":{"title":"Coupon #51","description":""},"coordinate":{"latitude":33.782,"longitude":-112.048},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"c12acbcb-457c-4fb2-8d27-4c53f59380e3","title":"Quick Trip #52","description":"Test description #52","coupon":{"title":"Coupon #52","description":""},"coordinate":{"latitude":33.552,"longitude":-112.081},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"2297a1e5-a3af-47d5-ab6d-e1e854989648","title":"Quick Trip #53","description":"Test description #53","coupon":{"title":"Coupon #53","description":""},"coordinate":{"latitude":33.563,"longitude":-112.066},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"cbbef5e0-38fd-42cd-9b0f-d203fade224f","title":"Quick Trip #54","description":"Test description #54","coupon":{"title":"Coupon #54","description":""},"coordinate":{"latitude":33.654,"longitude":-112.046},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"142bca2e-0454-44fc-8b4c-517f1d3e1e14","title":"Quick Trip #55","description":"Test description #55","coupon":{"title":"Coupon #55","description":""},"coordinate":{"latitude":32.971,"longitude":-112.049},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }},
{"seen":false,"hash":"3da30847-c964-4e30-8e3a-75b74850174a","title":"Quick Trip #56","description":"Test description #56","coupon":{"title":"Coupon #56","description":""},"coordinate":{"latitude":33.194,"longitude":-112.08},"image":{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }}];
*/

const markers = [{
    seen: false,
    hash: "111111111-12345-11111111111111",
    title: "Quick Trip #1",
    description: "Test description #1",
    coupon: {
      title: "$.50 OFF",
      description: ""
    },
    coordinate: {
      latitude: 33.3776538,
      longitude: -112.0490218,
    },
    image: { uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }
  },
  {
    seen: false,
    hash: "222222222-12345-22222222222222",
    title: "Quick Trip #2",
    description: "Test description #2",
    coupon: {
      title: "-50% OFF",
      description: ""
    },
    coordinate: {
      latitude: 33.4803774,
      longitude: -112.0328086,
    },
    image: { uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }
  },
  {
    seen: false,
    hash: "333333333-12345-33333333333333",
    title: "Quick Trip #3",
    description: "Test description #3",
    coupon: {
      title: "FREE COFFEE",
      description: ""
    },
    coordinate: {
      latitude: 33.4796037,
      longitude: -112.1171363,
    },
    image: { uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }
}];

export { markers }