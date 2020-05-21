
let rawSections = require("../../../data/sections.json")
let rawContact = require("../../../data/contact.json")
const layout = require("../../../data/pdf.json")[process.env.CONFIG_PDF]

for (let i = 0; i < rawSections.length; i++) {
    rawSections[i].items = rawSections[i].items.filter(item => item.config[process.env.CONFIG_PDF] === true)
}
const name = rawContact.name;

const social = rawContact.social[process.env.CONFIG_PDF]
const sections = rawSections;

module.exports = { sections, name, social, layout };