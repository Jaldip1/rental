export const API_URL_LOCAL = process.env.REACT_APP_API_URL_LOCAL || 'https://413b1956-ec1e-4258-ac08-13c873d148fb.mock.pstmn.io'

export const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const regexPass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

export const provinceData = {
    "Alberta": [
        "Banff","Brooks", "Calgary", "Edmonton", "Fort McMurray", "Grande Prairie", "Jasper", "Lake Louise", "Lethbridge", "Medicine Hat", "Red Deer", "Saint Albert"
    ],
    "British Columbia": [
        "Barkerville", "Burnaby", "Campbell River", "Chilliwack", "Courtenay", "Cranbrook", "Dawson Creek", "Delta", "LethbridgeEsquimalt", "Fort Saint James",
        "Fort Saint John", "Hope", "Kamloops", "Kelowna", "Kimberley", "Kitimat", "Langley", "Nanaimo", "Nelson", "New Westminster", "North Vancouver", "Oak Bay",
        "Penticton", "Powell River", "Prince George", "Prince Rupert", "Quesnel", "Revelstoke", "Rossland", "Trail", "Vancouver", "Vernon", "Victoria", "West Vancouver", "White Rock"
    ],
    "Manitoba": [
        "Brandon", "Churchill", "Dauphin", "Flin Flon", "Kildonan", "Saint Boniface", "Swan River", "Thompson", "Winnipeg", "York Factory"
    ],
    "New Brunswick": [
        "Bathurst", "Caraquet", "Dalhousie", "Fredericton", "Miramichi", "Moncton", "Saint John"
    ],
    "Newfoundland and Labrador": [
        "Argentia", "Bonavista", "Channel - Port aux Basques", "Corner Brook", "Ferryland", "Gander", "Grand Falls–Windsor", "Happy Valley–Goose Bay", "Harbour Grace", "Labrador City",
        "Placentia", "Saint Anthony", "St.John’s", "Wabana"
    ],
    "Nova Scotia": [
        "Baddeck", "Digby", "Glace Bay", "Halifax", "Liverpool", "Louisbourg", "Lunenburg", "Pictou", "Port Hawkesbury", "Springhill", "Sydney", "Yarmouth"
    ],
    "Prince Edward Island": [
        "Borden", "Cavendish", "Charlottetown", "Souris", "Summerside"
    ],
    "Quebec": [
        "Asbestos", "Baie - Comeau", "Beloeil", "Cap - de - la - Madeleine", "Chambly", "Charlesbourg", "Châteauguay", "Chibougamau", "Côte - Saint - Luc", "Dorval",
        "Gaspé", "Gatineau", "Granby", "Havre - Saint - Pierre", "Hull", "Jonquière", "Kuujjuaq", "La Salle", "La Tuque", "Lachine", "Laval", "Lévis", "Longueuil", "Magog",
        "Matane", "Montreal", "Montréal - Nord", "Percé", "Port - Cartier", "Quebec", "Rimouski", "Rouyn - Noranda", "Saguenay", "Saint - Eustache", "Saint - Hubert",
        "Sainte - Anne - de - Beaupré", "Sainte - Foy", "Sainte - Thérèse", "Sept - Îles", "Sherbrooke", "Sorel - Tracy", "Trois - Rivières", "Val - d’Or", "Waskaganish"
    ],
    "Saskatchewan": [
        "Batoche", "Cumberland House", "Estevan", "Flin Flon", "Moose Jaw", "Prince Albert", "Regina", "Saskatoon", "Uranium City"
    ],
    "Yukon": [
        "Dawson", "Watson Lake", "Whitehorse"
    ],
    "Nunavut": [
        "Iqaluit"
    ],
    "Northwest Territories": [
        "Fort Smith", "Hay River", "Inuvik", "Tuktoyaktuk", "Yellowknife"
    ],
    "Ontario": [
        "Bancroft", "Barrie", "Belleville", "Brampton", "Brantford", "Brockville", "Burlington", "Cambridge", "Chatham", "Chatham - Kent", "Cornwall", "Elliot Lake", "Etobicoke",
        "Fort Erie", "Fort Frances", "Gananoque", "Guelph", "Hamilton", "Iroquois Falls", "Kapuskasing", "Kawartha Lakes", "Kenora", "Kingston", "Kirkland Lake", "Kitchener",
        "Laurentian Hills", "London", "Midland", "Mississauga", "Moose Factory", "Moosonee", "Niagara Falls", "Niagara - on - the - Lake", "North Bay", "North York", "Oakville",
        "Orillia", "Oshawa", "Ottawa", "Parry Sound", "Perth", "Peterborough", "Picton", "Port Colborne", "Saint Catharines", "Saint Thomas", "Sarnia - Clearwater", "Sault Sainte Marie",
        "Scarborough", "Simcoe", "Stratford", "Sudbury", "Temiskaming Shores", "Thorold", "Thunder Bay", "Timmins", "Toronto", "Trenton", "Waterloo", "Welland", "West Nipissing",
        "Windsor", "Woodstock", "York"
    ]
}

export const countriesStates = {
    "Canada": [
        {
            "name": "Ontario", "id": "Ontario"
        },
        {
            "name": "Nunavut", "id": "Nunavut"
        },
        {
            "name": "Yukon", "id": "Yukon"
        },
        {
            "name": "Saskatchewan", "id": "Saskatchewan"
        },
        {
            "name": "Quebec", "id": "Quebec"
        },
        {
            "name": "Prince Edward Island", "id": "Prince Edward Island"
        },
        {
            "name": "Nova Scotia", "id": "Nova Scotia"
        },
        {
            "name": "Manitoba", "id": "Manitoba"
        },
        {
            "name": "British Columbia", "id": "British Columbia"
        },
        {
            "name": "Alberta", "id": "Alberta"
        }
    ],
    "India": [
        {
            "name": "Gujarat", "id": "Gujarat"
        },
        {
            "name": "Maharashtra", "id": "Maharashtra"
        },
        {
            "name": "Delhi", "id": "Delhi"
        },
        {
            "name": "Punjab", "id": "Punjab"
        },
        {
            "name": "Haryana", "id": "Haryana"
        },
        {
            "name": "Andhra Pradesh", "id": "Andhra Pradesh"
        },
        {
            "name": "Himachal Pradesh", "id": "Himachal Pradesh"
        },
        {
            "name": "Tamilnadu", "id": "Tamilnadu"
        },
        {
            "name": "Telangana", "id": "Telangana"
        },
        {
            "name": "Karnataka", "id": "Karnataka"
        },
        {
            "name": "Goa", "id": "Goa"
        },
        {
            "name": "Madhya Pradesh", "id": "Madhya Pradesh"
        },
        {
            "name": "Rajasthan", "id": "Rajasthan"
        }
    ],

}