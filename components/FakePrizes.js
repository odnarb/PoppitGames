const prizes = [
{
    company_id: 1,
    campaign_id: 123,
    hash: "111111111-12345-11111111111111",
    title: "Quick Trip #1",
    description: "Test description #1",
    location: {
        name: "Hooters",
        city: "Scottsdale"
    },
    activity_state: "none", // none|completed|win|lose|entered
    activity_state_detail: "none",
    type: "game", // game | raffle | survey
    coupon: {
      line_1: "$.50 OFF",
      line_2: "2 Liter Pepsi"
    },
    date_claimed: "5/18/2020"
},
{
    company_id: 1,
    campaign_id: 124,
    seen: false,
    hash: "222222222-12345-22222222222222",
    title: "Quick Trip #2",
    description: "Test description #2",
    location: {
        name: "Hooters",
        city: "Scottsdale"
    },
    activity_state: "none", // none|completed|win|lose|entered
    activity_state_detail: "none",
    type: "game", // game | raffle | survey
    coupon: {
      line_1: "50% OFF",
      line_2: "HOTDOGS"
    },
    date_claimed: "5/18/2020"
},
{
    company_id: 1,
    campaign_id: 125,
    seen: false,
    hash: "333333333-12345-33333333333333",
    title: "Quick Trip #3",
    description: "Test description #3",
    location: {
        name: "Hooters",
        city: "Scottsdale"
    },
    activity_state: "none", // none|completed|win|lose|entered
    activity_state_detail: "none",
    type: "game", // game | raffle | survey
    coupon: {
      line_1: "FREE",
      line_2: "COFFEE"
    },
    date_claimed: "5/18/2020"
},
{
    company_id: 1,
    campaign_id: 126,
    seen:false,
    hash: "fde1d29f-fa88-4f01-b0c0-831cf3d4d028",
    title: "Quick Trip #4",
    description: "Test description #4",
    location: {
        name: "Hooters",
        city: "Scottsdale"
    },
    activity_state: "none", // none|completed|win|lose|entered
    activity_state_detail: "none",
    type: "game", // game | raffle | survey
    coupon: {
        line_1: "FREE",
        line_2: "DORITOS"
    },
    date_claimed: "5/18/2020"
},
{
    company_id: 1,
    campaign_id: 127,
    seen:false,
    hash:"d16a55c2-12b9-443e-83ec-0934eba23274",
    title:"Quick Trip #5",
    description:"Test description #5",
    location: {
        name: "Hooters",
        city: "Scottsdale"
    },
    activity_state: "none", // none|completed|win|lose|entered
    activity_state_detail: "none",
    type: "game", // game | raffle | survey
    coupon:{
        line_1:"25% OFF",
        line_2: "COFFEE"
    },
    date_claimed: "5/18/2020"
},
{
    company_id: 1,
    campaign_id: 130,
    seen:false,
    hash:"395e577c-0f48-4c1e-a76c-1601d2256287",
    title:"Quick Trip #8",
    description:"Test description #8",
    location: {
        name: "Hooters",
        city: "Scottsdale"
    },
    activity_state: "none", // none|completed|win|lose|entered
    activity_state_detail: "none",
    type: "game", // game | raffle | survey
    coupon:{
        line_1:"30% OFF",
        line_2: "GAS"
    },
    date_claimed: "5/18/2020"
},
{
    company_id: 1,
    campaign_id: 131,
    seen:false,
    hash:"56716005-fe25-4426-90ea-2c74087a1b3c",
    title:"Quick Trip #9",
    description:"Test description #9",
    location: {
        name: "Hooters",
        city: "Scottsdale"
    },
    activity_state: "none", // none|completed|win|lose|entered
    activity_state_detail: "none",
    type: "game", // game | raffle | survey
    coupon: {
        line_1:"20% OFF",
        line_2: "COORS LIGHT"
    },
    date_claimed: "5/18/2020"
},
{
    company_id: 1,
    campaign_id: 131,
    seen:false,
    hash:"56716005-fe25-4426-90ea-2c74087a1b3c",
    title:"Quick Trip #9",
    description:"Test description #9",
    location: {
        name: "Hooters",
        city: "Scottsdale"
    },
    activity_state: "none", // none|completed|win|lose|entered
    activity_state_detail: "none",
    type: "game", // game | raffle | survey
    coupon: {
        line_1:"FREE",
        line_2: "POPCORN"
    },
    date_claimed: "5/18/2020"
},
{
    company_id: 1,
    campaign_id: 131,
    seen:false,
    hash:"56716005-fe25-4426-90ea-2c74087a1b3c",
    title:"Quick Trip #9",
    description:"Test description #9",
    location: {
        name: "Hooters",
        city: "Scottsdale"
    },
    activity_state: "none", // none|completed|win|lose|entered
    activity_state_detail: "none",
    type: "game", // game | raffle | survey
    coupon: {
        line_1:"FREE",
        line_2: "REESES"
    },
    date_claimed: "5/18/2020"
},
{
    company_id: 1,
    campaign_id: 131,
    seen:false,
    hash:"56716005-fe25-4426-90ea-2c74087a1b3c",
    title:"Quick Trip #9",
    description:"Test description #9",
    location: {
        name: "Hooters",
        city: "Scottsdale"
    },
    activity_state: "none", // none|completed|win|lose|entered
    activity_state_detail: "none",
    type: "game", // game | raffle | survey
    coupon: {
        line_1:"FREE",
        line_2: "DRINK"
    },
    date_claimed: "5/18/2020"
},
{
    company_id: 1,
    campaign_id: 132,
    seen:false,
    hash:"a3e0b227-dd90-4b31-ac50-fa421c749dae",
    title:"Quick Trip #10",
    description:"Test description #10",
    location: {
        name: "Hooters",
        city: "Scottsdale"
    },
    activity_state: "none", // none|completed|win|lose|entered
    activity_state_detail: "none",
    type: "game", // game | raffle | survey
    coupon: {
        line_1:"50% OFF",
        line_2: "LAYS CHIPS"
    },
    date_claimed: "5/18/2020"
}];

export { prizes }
