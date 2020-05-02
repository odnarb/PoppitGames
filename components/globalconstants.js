const app = {
    name: "PoppitGames",
    company_name: "PoppitGames LLC",
    copyright_year: "2020",
    version: "1.3.2",
    version_hash: "0bdd85b1"
}

const marker_states = {
    //none / not attempted
    none: 0,

    //completed (detail could then be win/lose/entered)
    completed: 1
};

const marker_state_detail = {
    none: 0,
    lose: 1,
    win: 2
};

export {
    app,
    marker_states,
    marker_state_detail
}
