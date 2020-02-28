const markers = [{
	company_id: 1,
	campaign_id: 123,
	seen: false,
	hash: "111111111-12345-11111111111111",
	title: "Quick Trip #1",
	description: "Test description #1",
	state: "none", // none|completed|win|lose|entered
	type: "game", // game | raffle | survey
	options: {
		activity_type: "game",
		content_url: "http://bchambers.io/games/penalty-kicks/index.html",
		required_score: 800,
		min_tries: 1, // min # of tries in FIRST session to set game as "tried" if user backs out
		max_tries: 15, //max # of tries per session
		max_sessions: 1  // max # of sessions to allow
	},
	coupon: {
	  title: "$.50 OFF",
	  description: "",
	},
	coordinate: {
	  latitude: 33.3776538,
	  longitude: -112.0490218,
	},
	image: { uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }
},
{
	company_id: 1,
	campaign_id: 124,
	seen: false,
	hash: "222222222-12345-22222222222222",
	title: "Quick Trip #2",
	description: "Test description #2",
	state: "none", // none|completed|win|lose|entered
	type: "game", // game | raffle | survey
	options: {
		activity_type: "game",
		content_url: "http://bchambers.io/games/penalty-kicks/index.html",
		required_score: 800,
		min_tries: 1, // min # of tries in FIRST session to set game as "tried" if user backs out
		max_tries: 15, //max # of tries per session
		max_sessions: 1  // max # of sessions to allow
	},
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
	company_id: 1,
	campaign_id: 125,
    seen: false,
    hash: "333333333-12345-33333333333333",
    title: "Quick Trip #3",
    description: "Test description #3",
	state: "none", // none|completed|win|lose|entered
	type: "game", // game | raffle | survey
	options: {
		activity_type: "game",
		content_url: "http://bchambers.io/games/penalty-kicks/index.html",
		required_score: 800,
		min_tries: 1, // min # of tries in FIRST session to set game as "tried" if user backs out
		max_tries: 15, //max # of tries per session
		max_sessions: 1  // max # of sessions to allow
	},
    coupon: {
      title: "FREE COFFEE",
      description: ""
    },
    coordinate: {
      latitude: 33.4796037,
      longitude: -112.1171363,
    },
    image: { uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }
},
{
	company_id: 1,
	campaign_id: 126,
	seen:false,
	hash: "fde1d29f-fa88-4f01-b0c0-831cf3d4d028",
	title: "Quick Trip #4",
	description: "Test description #4",
	state: "none", // none|completed|win|lose|entered
	type: "game", // game | raffle | survey
	options: {
		activity_type: "game",
		content_url: "http://bchambers.io/games/penalty-kicks/index.html",
		required_score: 800,
		min_tries: 1, // min # of tries in FIRST session to set game as "tried" if user backs out
		max_tries: 15, //max # of tries per session
		max_sessions: 1  // max # of sessions to allow
	},
	coupon: {
		title: "Coupon #4",
		description:""
	},
	coordinate:{
		latitude: 33.461,
		longitude: -112.084
	},
	image: { uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }
},
{
	company_id: 1,
	campaign_id: 127,
	seen:false,
	hash:"d16a55c2-12b9-443e-83ec-0934eba23274",
	title:"Quick Trip #5",
	description:"Test description #5",
	state: "none", // none|completed|win|lose|entered
	type: "game", // game | raffle | survey
	options: {
		activity_type: "game",
		content_url: "http://bchambers.io/games/penalty-kicks/index.html",
		required_score: 800,
		min_tries: 1, // min # of tries in FIRST session to set game as "tried" if user backs out
		max_tries: 15, //max # of tries per session
		max_sessions: 1  // max # of sessions to allow
	},
	coupon:{
		title:"Coupon #5",
		description:""
	},
	coordinate:{
		latitude:33.397,
		longitude:-112.072
	},
	image:{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }
},
{
	company_id: 1,
	campaign_id: 130,
	seen:false,
	hash:"395e577c-0f48-4c1e-a76c-1601d2256287",
	title:"Quick Trip #8",
	description:"Test description #8",
	state: "none", // none|completed|win|lose|entered
	type: "game", // game | raffle | survey
	options: {
		activity_type: "game",
		content_url: "http://bchambers.io/games/penalty-kicks/index.html",
		required_score: 800,
		min_tries: 1, // min # of tries in FIRST session to set game as "tried" if user backs out
		max_tries: 15, //max # of tries per session
		max_sessions: 2  // max # of sessions to allow
	},
	coupon:{
		title:"Coupon #8",
		description:""
	},
	coordinate:{
		latitude:33.57,
		longitude:-112.053
	},
	image:{ uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }
},
{
	company_id: 1,
	campaign_id: 131,
	seen:false,
	hash:"56716005-fe25-4426-90ea-2c74087a1b3c",
	title:"Quick Trip #9",
	description:"Test description #9",
	state: "none", // none|completed|win|lose|entered
	type: "game", // game | raffle | survey
	options: {
		activity_type: "game",
		content_url: "http://bchambers.io/games/penalty-kicks/index.html",
		required_score: 800,
		min_tries: 1, // min # of tries in FIRST session to set game as "tried" if user backs out
		max_tries: 15, //max # of tries per session
		max_sessions: 1  // max # of sessions to allow
	},
	coupon: {
		title:"Coupon #9",
		description:""
	},
	coordinate:{
		latitude:33.323,
		longitude:-112.085
	},
	image: { uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }
},
{
	company_id: 1,
	campaign_id: 132,
	seen:false,
	hash:"a3e0b227-dd90-4b31-ac50-fa421c749dae",
	title:"Quick Trip #10",
	description:"Test description #10",
	state: "none", // none|completed|win|lose|entered
	type: "game", // game | raffle | survey
	options: {
		activity_type: "game",
		content_url: "http://bchambers.io/games/penalty-kicks/index.html",
		required_score: 800,
		min_tries: 1, // min # of tries in FIRST session to set game as "tried" if user backs out
		max_tries: 15, //max # of tries per session
		max_sessions: 1  // max # of sessions to allow
	},
	coupon: {
		title:"Coupon #10",
		description:""
	},
	coordinate: {latitude:33.295,longitude:-112.076},
	image: { uri: "http://poppit.bchambers.io/assets/images/brands/quicktrip-logo-small.png" }
}];

export { markers }