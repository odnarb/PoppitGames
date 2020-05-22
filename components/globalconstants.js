const app = {
    name: "PoppitGames",
    company_name: "PoppitGames LLC",
    copyright_year: "2020",
    version: "1.3.2",
    version_hash: "0bdd85b1"
}

const MARKER_STATES = {
    //none / not attempted
    none: 0,

    //completed (detail could then be win/lose/entered)
    completed: 1
};

const MARKER_STATE_DETAIL = {
    none: 0,
    lose: 1,
    win_set_score: 2,
    win_perfect_score: 3,
    win_bonus_score: 4,
    claimed: 5,
    scanned: 6
};

export {
    app,
    MARKER_STATES,
    MARKER_STATE_DETAIL
}
