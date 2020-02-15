//an example of using external/remote assets
// const Images = [
//   { uri: "https://i.imgur.com/sNam9iJ.jpg" },
//   { uri: "https://i.imgur.com/N7rlQYt.jpg" },
//   { uri: "https://i.imgur.com/UDrH0wm.jpg" },
//   { uri: "https://i.imgur.com/Ka8kNST.jpg" }
// ];

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
    image: require("../assets/images/brands/quicktrip-logo-small.png")
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
    image: require("../assets/images/brands/quicktrip-logo-small.png")
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
    image: require("../assets/images/brands/quicktrip-logo-small.png")
}];

export { markers }