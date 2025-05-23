import { VERSION } from "./const.js";
import { TeamtrackerCardEditor } from "./card_editor.js";
import { TeamTrackerCard } from "./teamtracker_card.js";


customElements.define("offline-teamtracker-card", TeamTrackerCard);
customElements.define("offline-teamtracker-card-editor", TeamtrackerCardEditor);

console.info("%c OFFLINE-TEAMTRACKER-CARD %s IS INSTALLED",
    "color: blue; font-weight: bold",
    VERSION);

//
//  Add card to list of Custom Cards in the Card Picker
//
window.customCards = window.customCards || []; // Create the list if it doesn't exist. Careful not to overwrite it
window.customCards.push({
    type: "teamtracker-card",
    name: "Team Tracker Card",
    preview: false,
    description: "Card to display the ha-teamtracker sensor",
});