const teams = {
  count: 20,
  filters: {},
  competition: {
    id: 2021,
    area: {
      id: 2072,
      name: "England"
    },
    name: "Premier League",
    code: "PL",
    plan: "TIER_ONE",
    lastUpdated: "2018-08-27T22:55:53Z"
  },
  season: {
    id: 151,
    startDate: "2018-08-10",
    endDate: "2019-05-12",
    currentMatchday: 3
  },
  teams: [
    {
      id: 57,
      area: {
        id: 2072,
        name: "England"
      },
      name: "Arsenal FC",
      shortName: "Arsenal",
      tla: "AFC",
      crestUrl: "http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
      address: "75 Drayton Park London N5 1BU",
      phone: "+44 (020) 76195003",
      website: "http://www.arsenal.com",
      email: "info@arsenal.co.uk",
      founded: 1886,
      clubColors: "Red / White",
      venue: null,
      lastUpdated: "2018-06-02T13:47:21Z"
    },
    {
      id: 61,
      area: {
        id: 2072,
        name: "England"
      },
      name: "Chelsea FC",
      shortName: "Chelsea",
      tla: "CFC",
      crestUrl:
        "http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg",
      address: "Fulham Road London SW6 1HS",
      phone: "+44 (0871) 9841955",
      website: "http://www.chelseafc.com",
      email: null,
      founded: 1905,
      clubColors: "Royal Blue / White",
      venue: null,
      lastUpdated: "2018-06-02T12:59:02Z"
    },
    {
      id: 62,
      area: {
        id: 2072,
        name: "England"
      },
      name: "Everton FC",
      shortName: "Everton",
      tla: "EFC",
      crestUrl: "http://upload.wikimedia.org/wikipedia/de/f/f9/Everton_FC.svg",
      address: "Goodison Park Liverpool L4 4EL",
      phone: "+44 (0871) 6631878",
      website: "http://www.evertonfc.com",
      email: "everton@evertonfc.com",
      founded: 1878,
      clubColors: "Blue / White",
      venue: null,
      lastUpdated: "2018-05-31T16:38:33Z"
    },
    {
      id: 63,
      area: {
        id: 2072,
        name: "England"
      },
      name: "Fulham FC",
      shortName: "Fulham",
      tla: "FUL",
      crestUrl: "http://upload.wikimedia.org/wikipedia/de/a/a8/Fulham_fc.svg",
      address: "Craven Cottage, Stevenage Road London SW6 6HH",
      phone: "+44 (0870) 4421222",
      website: "http://www.fulhamfc.com",
      email: "enquiries@fulhamfc.com",
      founded: 1879,
      clubColors: "White / Black",
      venue: "Craven Cottage",
      lastUpdated: "2018-07-31T08:14:57Z"
    },
    {
      id: 64,
      area: {
        id: 2072,
        name: "England"
      },
      name: "Liverpool FC",
      shortName: "Liverpool",
      tla: "LIV",
      crestUrl:
        "http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg",
      address: "Anfield Road Liverpool L4 OTH",
      phone: "+44 (0844) 4993000",
      website: "http://www.liverpoolfc.tv",
      email: "customercontact@liverpoolfc.tv",
      founded: 1892,
      clubColors: "Red / White",
      venue: "Anfield",
      lastUpdated: "2018-07-02T22:06:56Z"
    },
    {
      id: 65,
      area: {
        id: 2072,
        name: "England"
      },
      name: "Manchester City FC",
      shortName: "Man City",
      tla: "MCFC",
      crestUrl:
        "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
      address: "SportCity Manchester M11 3FF",
      phone: "+44 (0870) 0621894",
      website: "https://www.mancity.com",
      email: "mancity@mancity.com",
      founded: 1880,
      clubColors: "Sky Blue / White",
      venue: null,
      lastUpdated: "2018-06-02T12:59:03Z"
    },
    {
      id: 66,
      area: {
        id: 2072,
        name: "England"
      },
      name: "Manchester United FC",
      shortName: "Man United",
      tla: "MUFC",
      crestUrl:
        "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg",
      address: "Sir Matt Busby Way Manchester M16 0RA",
      phone: "+44 (0161) 8688000",
      website: "http://www.manutd.com",
      email: "enquiries@manutd.co.uk",
      founded: 1878,
      clubColors: "Red / White",
      venue: null,
      lastUpdated: "2018-06-02T12:59:04Z"
    },
    {
      id: 67,
      area: {
        id: 2072,
        name: "England"
      },
      name: "Newcastle United FC",
      shortName: "Newcastle",
      tla: "NUFC",
      crestUrl:
        "http://upload.wikimedia.org/wikipedia/de/5/56/Newcastle_United_Logo.svg",
      address: "Sports Direct Arena Newcastle upon Tyne NE1 4ST",
      phone: null,
      website: "http://www.nufc.co.uk",
      email: "admin@nufc.co.uk",
      founded: 1881,
      clubColors: "Black / White",
      venue: null,
      lastUpdated: "2018-05-31T16:38:38Z"
    },
    {
      id: 73,
      area: {
        id: 2072,
        name: "England"
      },
      name: "Tottenham Hotspur FC",
      shortName: "Tottenham",
      tla: "THFC",
      crestUrl:
        "http://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg",
      address: "Bill Nicholson Way, 748 High Road London N17 OAP",
      phone: "+44 (0844) 4995000",
      website: "http://www.tottenhamhotspur.com",
      email: "customer.care@tottenhamhotspur.com",
      founded: 1882,
      clubColors: "Navy Blue / White",
      venue: null,
      lastUpdated: "2018-06-02T12:59:04Z"
    },
    {
      id: 76,
      area: {
        id: 2072,
        name: "England"
      },
      name: "Wolverhampton Wanderers FC",
      shortName: "Wolverhampton",
      tla: "WOL",
      crestUrl:
        "https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg",
      address: "Waterloo Road Wolverhampton WV1 4QR",
      phone: "+44 (0871) 2222220",
      website: "http://www.wolves.co.uk",
      email: "info@wolves.co.uk",
      founded: 1877,
      clubColors: "Black / Gold",
      venue: "Molineux Stadium",
      lastUpdated: "2018-08-14T12:27:22Z"
    },
    {
      id: 328,
      area: {
        id: 2072,
        name: "England"
      },
      name: "Burnley FC",
      shortName: "Burnley",
      tla: "BFC",
      crestUrl:
        "https://upload.wikimedia.org/wikipedia/en/0/02/Burnley_FC_badge.png",
      address: "Harry Potts Way Burnley BB10 4BX",
      phone: "+44 (0871) 2211882",
      website: "http://www.burnleyfootballclub.com",
      email: "info@burnleyfc.com",
      founded: 1881,
      clubColors: "Claret / Sky Blue",
      venue: null,
      lastUpdated: "2018-05-31T16:38:45Z"
    },
    {
      id: 338,
      area: {
        id: 2072,
        name: "England"
      },
      name: "Leicester City FC",
      shortName: "Leicester City",
      tla: "LCFC",
      crestUrl: "http://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png",
      address: "The Walkers Stadium, Filbert Way Leicester LE2 7FL",
      phone: "+44 (0844) 8156000",
      website: "http://www.lcfc.com",
      email: null,
      founded: 1884,
      clubColors: "Royal Blue / White",
      venue: null,
      lastUpdated: "2018-05-31T16:38:46Z"
    },
    {
      id: 340,
      area: {
        id: 2072,
        name: "England"
      },
      name: "Southampton FC",
      shortName: "Southampton",
      tla: "SFC",
      crestUrl:
        "http://upload.wikimedia.org/wikipedia/de/c/c9/FC_Southampton.svg",
      address: "Britannia Road Southampton SO14 5FP",
      phone: null,
      website: "http://www.saintsfc.co.uk",
      email: "sfc@saintsfc.co.uk",
      founded: 1885,
      clubColors: "Red / White / Black",
      venue: null,
      lastUpdated: "2018-05-31T16:38:47Z"
    },
    {
      id: 346,
      area: {
        id: 2072,
        name: "England"
      },
      name: "Watford FC",
      shortName: "Watford",
      tla: "Watfordfc",
      crestUrl: "https://upload.wikimedia.org/wikipedia/en/e/e2/Watford.svg",
      address: "Vicarage Road Watford WD18 0ER",
      phone: null,
      website: "http://www.watfordfc.com",
      email: "yourvoice@watfordfc.com",
      founded: 1881,
      clubColors: "Yellow / Black",
      venue: null,
      lastUpdated: "2018-05-31T16:38:49Z"
    },
    {
      id: 354,
      area: {
        id: 2072,
        name: "England"
      },
      name: "Crystal Palace FC",
      shortName: "Crystal Palace",
      tla: "CRY",
      crestUrl:
        "http://upload.wikimedia.org/wikipedia/de/b/bf/Crystal_Palace_F.C._logo_%282013%29.png",
      address: "Whitehorse Lane London SE25 6PU",
      phone: "+44 (020) 87686000",
      website: "http://www.cpfc.co.uk",
      email: "info@cpfc.co.uk",
      founded: 1905,
      clubColors: "Red / Blue",
      venue: null,
      lastUpdated: "2018-05-31T16:38:50Z"
    },
    {
      id: 394,
      area: {
        id: 2072,
        name: "England"
      },
      name: "Huddersfield Town AFC",
      shortName: "Huddersfield",
      tla: "HTAFC",
      crestUrl:
        "https://upload.wikimedia.org/wikipedia/en/5/5a/Huddersfield_Town_A.F.C._logo.svg",
      address: "Stadium Way Huddersfield HD1 6PX",
      phone: "+44 (0148) 4484112",
      website: "http://www.htafc.com",
      email: "info@htafc.com",
      founded: 1908,
      clubColors: "Blue / White",
      venue: null,
      lastUpdated: "2018-08-20T13:07:30Z"
    },
    {
      id: 397,
      area: {
        id: 2072,
        name: "England"
      },
      name: "Brighton & Hove Albion FC",
      shortName: "Brighton Hove",
      tla: "BHAFC",
      crestUrl:
        "https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg",
      address: "44 North Road Brighton & Hove BN1 1YR",
      phone: "+44 (01273) 878288",
      website: "http://www.seagulls.co.uk",
      email: "seagulls@bhafc.co.uk",
      founded: 1898,
      clubColors: "Blue / White",
      venue: null,
      lastUpdated: "2018-05-31T16:38:52Z"
    },
    {
      id: 563,
      area: {
        id: 2072,
        name: "England"
      },
      name: "West Ham United FC",
      shortName: "West Ham",
      tla: "WHU",
      crestUrl:
        "http://upload.wikimedia.org/wikipedia/de/e/e0/West_Ham_United_FC.svg",
      address: "Green Street, Upton Park London E13 9AZ",
      phone: "+44 (020) 85482794",
      website: "http://www.whufc.com",
      email: "yourcomments@westhamunited.co.uk",
      founded: 1895,
      clubColors: "Claret / Sky Blue",
      venue: null,
      lastUpdated: "2018-05-31T16:38:54Z"
    },
    {
      id: 715,
      area: {
        id: 2264,
        name: "Wales"
      },
      name: "Cardiff City FC",
      shortName: "Cardiff",
      tla: "CAR",
      crestUrl:
        "https://upload.wikimedia.org/wikipedia/en/3/3c/Cardiff_City_crest.svg",
      address: "Cardiff City Stadium, Leckwith Road Cardiff CF11 8AZ",
      phone: "+44 (0845) 3651115",
      website: "http://www.cardiffcityfc.co.uk",
      email: "club@cardiffcityfc.co.uk",
      founded: 1899,
      clubColors: "Blue / White",
      venue: "Cardiff City Stadium",
      lastUpdated: "2018-08-14T12:26:54Z"
    },
    {
      id: 1044,
      area: {
        id: 2072,
        name: "England"
      },
      name: "AFC Bournemouth",
      shortName: "Bournemouth",
      tla: "AFCB",
      crestUrl:
        "https://upload.wikimedia.org/wikipedia/de/4/41/Afc_bournemouth.svg",
      address: "Dean Court, Kings Park Bournemouth BH7 7AF",
      phone: "+44 (01202) 726300",
      website: "http://www.afcb.co.uk",
      email: "admin@afcb.co.uk",
      founded: 1890,
      clubColors: "Red / Black",
      venue: null,
      lastUpdated: "2018-05-31T16:38:55Z"
    }
  ]
};
