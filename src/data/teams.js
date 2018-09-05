const teams = [
  {
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
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
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
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/f/f9/Everton_FC.svg",
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
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png",
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
  },
  {
    count: 18,
    filters: {},
    competition: {
      id: 2002,
      area: {
        id: 2088,
        name: "Germany"
      },
      name: "Bundesliga",
      code: "BL1",
      plan: "TIER_ONE",
      lastUpdated: "2018-09-03T22:50:06Z"
    },
    season: {
      id: 155,
      startDate: "2018-08-24",
      endDate: "2019-05-18",
      currentMatchday: 3
    },
    teams: [
      {
        id: 2,
        area: {
          id: 2088,
          name: "Germany"
        },
        name: "TSG 1899 Hoffenheim",
        shortName: "Hoffenheim",
        tla: "HOF",
        crestUrl:
          "https://upload.wikimedia.org/wikipedia/commons/e/e7/Logo_TSG_Hoffenheim.svg",
        address: "Horrenberger Straße 58 Zuzenhausen 74939",
        phone: "+49 (07261) 94930",
        website: "http://www.achtzehn99.de",
        email: "info@achtzehn99.de",
        founded: 1921,
        clubColors: "Blue / White",
        venue: "Dietmar-Hopp-Stadion",
        lastUpdated: "2018-08-27T08:55:04Z"
      },
      {
        id: 3,
        area: {
          id: 2088,
          name: "Germany"
        },
        name: "Bayer 04 Leverkusen",
        shortName: "Leverkusen",
        tla: "LEV",
        crestUrl:
          "https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg",
        address: "Bismarckstr. 122-124 Leverkusen 51373",
        phone: "+49 (01805) 040404",
        website: "http://www.bayer04.de",
        email: "stefan.kusche.sk@bayer04.de",
        founded: 1904,
        clubColors: "Red / White / Black",
        venue: "BayArena",
        lastUpdated: "2018-08-27T08:56:10Z"
      },
      {
        id: 4,
        area: {
          id: 2088,
          name: "Germany"
        },
        name: "BV Borussia 09 Dortmund",
        shortName: "Dortmund",
        tla: "BVB",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
        address: "Rheinlanddamm 207-209 Dortmund 44137",
        phone: "+49 (231) 90200",
        website: "http://www.bvb.de",
        email: "info@bvb.de",
        founded: 1909,
        clubColors: "Black / Yellow",
        venue: "Signal Iduna Park",
        lastUpdated: "2018-06-23T12:50:24Z"
      },
      {
        id: 5,
        area: {
          id: 2088,
          name: "Germany"
        },
        name: "FC Bayern München",
        shortName: "Bayern M",
        tla: "BAY",
        crestUrl:
          "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg",
        address: "Säbenerstr. 51 München 81547",
        phone: "+49 (089) 699310",
        website: "http://www.fcbayern.de",
        email: "service-team@fcb.de",
        founded: 1900,
        clubColors: "Red / White / Blue",
        venue: "Allianz Arena",
        lastUpdated: "2018-08-27T08:57:52Z"
      },
      {
        id: 6,
        area: {
          id: 2088,
          name: "Germany"
        },
        name: "FC Schalke 04",
        shortName: "Schalke",
        tla: "S04",
        crestUrl:
          "https://upload.wikimedia.org/wikipedia/commons/6/6d/FC_Schalke_04_Logo.svg",
        address: "Ernst-Kuzorra-Weg 1 Gelsenkirchen 45891",
        phone: "+49 (0209) 36180",
        website: "http://www.schalke04.de",
        email: "post@schalke04.de",
        founded: 1904,
        clubColors: "Blue / White",
        venue: "Veltins-Arena",
        lastUpdated: "2018-08-27T08:57:28Z"
      },
      {
        id: 8,
        area: {
          id: 2088,
          name: "Germany"
        },
        name: "Hannover 96",
        shortName: "Hannover",
        tla: "H96",
        crestUrl:
          "https://upload.wikimedia.org/wikipedia/commons/c/cd/Hannover_96_Logo.svg",
        address: "Robert-Enke-Straße 1 Hannover 30169",
        phone: "+49 (0511) 96900196",
        website: "http://www.hannover96.de",
        email: "info@hannover96.de",
        founded: 1896,
        clubColors: "Red / Black",
        venue: "HDI-Arena",
        lastUpdated: "2018-08-27T08:56:57Z"
      },
      {
        id: 9,
        area: {
          id: 2088,
          name: "Germany"
        },
        name: "Hertha BSC",
        shortName: "Hertha BSC",
        tla: "BER",
        crestUrl:
          "https://upload.wikimedia.org/wikipedia/commons/8/81/Hertha_BSC_Logo_2012.svg",
        address: "Hanns-Braun-Straße, Friesenhaus II Berlin 14053",
        phone: "+49 (030) 3009280",
        website: "http://www.herthabsc.de",
        email: "info@herthabsc.de",
        founded: 1892,
        clubColors: "Blue / White",
        venue: "Olympiastadion Berlin",
        lastUpdated: "2018-08-27T08:56:33Z"
      },
      {
        id: 10,
        area: {
          id: 2088,
          name: "Germany"
        },
        name: "VfB Stuttgart",
        shortName: "Stuttgart",
        tla: "STU",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/commons/a/ab/VfB_Stuttgart_Logo.svg",
        address: "Mercedesstraße 109 Stuttgart 70372",
        phone: "+49 (1805) 832 5463",
        website: "http://www.vfb.de",
        email: "info@vfb-stuttgart.de",
        founded: 1893,
        clubColors: "White / Red",
        venue: "Mercedes-Benz Arena",
        lastUpdated: "2018-06-23T12:50:34Z"
      },
      {
        id: 11,
        area: {
          id: 2088,
          name: "Germany"
        },
        name: "VfL Wolfsburg",
        shortName: "Wolfsburg",
        tla: "WOB",
        crestUrl:
          "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo-VfL-Wolfsburg.svg",
        address: "In den Allerwiesen 1 Wolfsburg 38446",
        phone: "+49 (05361) 89030",
        website: "http://www.vfl-wolfsburg.de",
        email: "fussball@vfl-wolfsburg.de",
        founded: 1945,
        clubColors: "Green / White",
        venue: "Volkswagen Arena",
        lastUpdated: "2018-06-23T12:50:36Z"
      },
      {
        id: 12,
        area: {
          id: 2088,
          name: "Germany"
        },
        name: "SV Werder Bremen",
        shortName: "Bremen",
        tla: "BRE",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/commons/b/be/SV-Werder-Bremen-Logo.svg",
        address: "Franz-Böhmert-Str. 1c Bremen 28205",
        phone: "+49 (01805) 937337",
        website: "http://www.werder.de",
        email: "info@werder-online.de",
        founded: 1899,
        clubColors: "Green / White",
        venue: "Weserstadion",
        lastUpdated: "2018-06-23T12:50:38Z"
      },
      {
        id: 14,
        area: {
          id: 2088,
          name: "Germany"
        },
        name: "1. FC Nürnberg",
        shortName: "Nürnberg",
        tla: "FCN",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/commons/f/fa/1._FC_N%C3%BCrnberg_logo.svg",
        address: "Valznerweiherstraße 200 Nürnberg 90480",
        phone: "+49 (0911) 940790",
        website: "http://www.fcn.de",
        email: "info@fcn.de",
        founded: 1900,
        clubColors: "Red / White",
        venue: null,
        lastUpdated: "2018-05-31T12:49:44Z"
      },
      {
        id: 15,
        area: {
          id: 2088,
          name: "Germany"
        },
        name: "1. FSV Mainz 05",
        shortName: "Mainz",
        tla: "MAI",
        crestUrl:
          "https://upload.wikimedia.org/wikipedia/commons/9/9e/Logo_Mainz_05.svg",
        address: "Dr.-Martin-Luther-King-Weg 20 Mainz 55122",
        phone: "+49 (06131) 375500",
        website: "http://www.mainz05.de",
        email: "info@mainz05.de",
        founded: 1905,
        clubColors: "Red / White",
        venue: "Opel Arena",
        lastUpdated: "2018-08-27T08:59:09Z"
      },
      {
        id: 16,
        area: {
          id: 2088,
          name: "Germany"
        },
        name: "FC Augsburg",
        shortName: "Augsburg",
        tla: "AUG",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/b/b5/Logo_FC_Augsburg.svg",
        address: "Donauwörther Straße 170 Augsburg 86154",
        phone: "+49 (0821) 4554770",
        website: "http://www.fcaugsburg.de",
        email: "info@fcaugsburg.de",
        founded: 1907,
        clubColors: "Red / Green / White",
        venue: "WWK Arena",
        lastUpdated: "2018-06-23T12:50:41Z"
      },
      {
        id: 17,
        area: {
          id: 2088,
          name: "Germany"
        },
        name: "SC Freiburg",
        shortName: "Freiburg",
        tla: "SCF",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/f/f1/SC-Freiburg_Logo-neu.svg",
        address: "Schwarzwaldstraße 193 Freiburg 79117",
        phone: "+49 (0761) 385510",
        website: "http://www.scfreiburg.com",
        email: "scf@scfreiburg.com",
        founded: 1912,
        clubColors: "Red / White",
        venue: "Schwarzwald-Stadion",
        lastUpdated: "2018-06-23T12:50:42Z"
      },
      {
        id: 18,
        area: {
          id: 2088,
          name: "Germany"
        },
        name: "Borussia Mönchengladbach",
        shortName: "M'gladbach",
        tla: "BMG",
        crestUrl:
          "https://upload.wikimedia.org/wikipedia/commons/8/81/Borussia_M%C3%B6nchengladbach_logo.svg",
        address: "Hennes-Weisweiler-Allee 1 Mönchengladbach 41179",
        phone: "+49 (02161) 92930",
        website: "http://www.borussia.de",
        email: "info@borussia.de",
        founded: 1900,
        clubColors: "Black / White / Green",
        venue: "Stadion im Borussia-Park",
        lastUpdated: "2018-06-23T12:50:44Z"
      },
      {
        id: 19,
        area: {
          id: 2088,
          name: "Germany"
        },
        name: "Eintracht Frankfurt",
        shortName: "Frankfurt",
        tla: "FRA",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/commons/0/04/Eintracht_Frankfurt_Logo.svg",
        address: "Mörfelder Landstraße 362 Frankfurt am Main 60528",
        phone: "+49 (0180) 5060303",
        website: "http://www.eintracht.de",
        email: "info@eintracht-frankfurt.de",
        founded: 1899,
        clubColors: "Red / Black",
        venue: "Commerzbank-Arena",
        lastUpdated: "2018-06-23T12:50:46Z"
      },
      {
        id: 24,
        area: {
          id: 2088,
          name: "Germany"
        },
        name: "TSV Fortuna 95 Düsseldorf",
        shortName: "Düsseldorf",
        tla: "FOR",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/commons/9/94/Fortuna_D%C3%BCsseldorf.svg",
        address: "Flinger Broich 87 Düsseldorf 40235",
        phone: "+49 (0211) 238010",
        website: "http://www.f95.de",
        email: "service@f95.de",
        founded: 1911,
        clubColors: "Red / White",
        venue: null,
        lastUpdated: "2018-05-30T13:10:11Z"
      },
      {
        id: 721,
        area: {
          id: 2088,
          name: "Germany"
        },
        name: "RB Leipzig",
        shortName: "RB Leipzig",
        tla: "RBL",
        crestUrl:
          "https://upload.wikimedia.org/wikipedia/en/0/04/RB_Leipzig_2014_logo.svg",
        address: "Neumarkt 29-33 Leipzig 04109",
        phone: "+49 (0341) 1247970",
        website: "http://www.dierotenbullen.com",
        email: "soccerrbl.office@redbulls.com",
        founded: 2009,
        clubColors: "White / Red",
        venue: "Red Bull Arena",
        lastUpdated: "2018-08-27T08:58:42Z"
      }
    ]
  },
  {
    count: 20,
    filters: {},
    competition: {
      id: 2019,
      area: {
        id: 2114,
        name: "Italy"
      },
      name: "Serie A",
      code: "SA",
      plan: "TIER_ONE",
      lastUpdated: "2018-09-03T22:50:06Z"
    },
    season: {
      id: 290,
      startDate: "2018-08-18",
      endDate: "2019-05-26",
      currentMatchday: 3
    },
    teams: [
      {
        id: 98,
        area: {
          id: 2114,
          name: "Italy"
        },
        name: "AC Milan",
        shortName: "Milan",
        tla: "ACM",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/9/9e/AC_Mailand_Logo.svg",
        address: "Via Filippo Turati 3 Milano 20121",
        phone: "+39 (02) 62281",
        website: "http://www.acmilan.com",
        email: null,
        founded: 1899,
        clubColors: "Red / Black",
        venue: null,
        lastUpdated: "2018-06-02T14:56:15Z"
      },
      {
        id: 99,
        area: {
          id: 2114,
          name: "Italy"
        },
        name: "ACF Fiorentina",
        shortName: "Fiorentina",
        tla: "FIO",
        crestUrl:
          "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/ACF_Fiorentina_2.svg/261px-ACF_Fiorentina_2.svg",
        address: "Viale Manfredo Fanti 4 Firenze 50137",
        phone: "+39 (055) 5030190",
        website: "http://www.acffiorentina.it",
        email: "segreteria@acffiorentina.it",
        founded: 1926,
        clubColors: "Purple / White",
        venue: "Stadio Artemio Franchi",
        lastUpdated: "2018-08-31T09:55:08Z"
      },
      {
        id: 100,
        area: {
          id: 2114,
          name: "Italy"
        },
        name: "AS Roma",
        shortName: "Roma",
        tla: "ROM",
        crestUrl: "http://upload.wikimedia.org/wikipedia/de/3/32/AS_Rom.svg",
        address: "Via di Trigoria km. 3,600 Roma 00128",
        phone: "+39 (06) 501911",
        website: "http://www.asroma.it",
        email: "info@asromaweb.com",
        founded: 1927,
        clubColors: "Maroon / Orange / White",
        venue: null,
        lastUpdated: "2018-06-02T14:56:20Z"
      },
      {
        id: 102,
        area: {
          id: 2114,
          name: "Italy"
        },
        name: "Atalanta BC",
        shortName: "Atalanta",
        tla: null,
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/2/28/Atalanta_BC.svg",
        address: "Corso Europa, 46, Zingonia Ciserano 24040",
        phone: "+39 (035) 4186211",
        website: "http://www.atalanta.it",
        email: "info@atalanta.it",
        founded: 1904,
        clubColors: "Black / Blue",
        venue: null,
        lastUpdated: "2018-06-02T14:56:22Z"
      },
      {
        id: 103,
        area: {
          id: 2114,
          name: "Italy"
        },
        name: "Bologna FC 1909",
        shortName: "Bologna",
        tla: null,
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/9/92/FC_Bologna.svg",
        address: "Via Casteldebole 10 Bologna 40132",
        phone: "+39 (051) 6111111",
        website: "http://www.bolognafc.it",
        email: "comunicazione@bolognafc.it",
        founded: 1909,
        clubColors: "Red / Blue / White",
        venue: null,
        lastUpdated: "2018-06-02T14:56:24Z"
      },
      {
        id: 104,
        area: {
          id: 2114,
          name: "Italy"
        },
        name: "Cagliari Calcio",
        shortName: "Cagliari",
        tla: null,
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/3/3d/Cagliari_Calcio.svg",
        address: "Viale la Plaia 15 Cagliari 09123",
        phone: "+39 (070) 604 201",
        website: "http://www.cagliaricalcio.net",
        email: "info@cagliaricalcio.net",
        founded: 1920,
        clubColors: "Red / Navy Blue / White",
        venue: null,
        lastUpdated: "2018-06-02T14:56:28Z"
      },
      {
        id: 106,
        area: {
          id: 2114,
          name: "Italy"
        },
        name: "AC Chievo Verona",
        shortName: "Chievo",
        tla: null,
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/3/3f/AC_Chievo_Verona.svg",
        address: "Via Luigi Galvani 3 Verona 37138",
        phone: "+39 (045) 575779",
        website: "http://www.chievoverona.it",
        email: "info@chievoverona.it",
        founded: 1929,
        clubColors: "Yellow / Blue",
        venue: null,
        lastUpdated: "2018-06-02T14:56:29Z"
      },
      {
        id: 107,
        area: {
          id: 2114,
          name: "Italy"
        },
        name: "Genoa CFC",
        shortName: "Genoa",
        tla: "CFC",
        crestUrl: "http://upload.wikimedia.org/wikipedia/de/7/76/Genoa_CFC.svg",
        address: "Via Ronchi, 67 Genua 16155",
        phone: "+39 (010) 612831",
        website: "http://www.genoacfc.it",
        email: "genoa@lega-calcio.it",
        founded: 1893,
        clubColors: "Red / Navy Blue",
        venue: null,
        lastUpdated: "2018-06-02T14:56:32Z"
      },
      {
        id: 108,
        area: {
          id: 2114,
          name: "Italy"
        },
        name: "FC Internazionale Milano",
        shortName: "Inter",
        tla: "Int",
        crestUrl:
          "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Inter_Milan.svg/316px-Inter_Milan.svg",
        address: "Corso Vittorio Emanuele II 9 Milano 20122",
        phone: "+39 (02) 77151",
        website: "http://www.inter.it",
        email: "segreteriaccic@inter.it",
        founded: 1908,
        clubColors: "Blue / Black",
        venue: null,
        lastUpdated: "2018-08-31T09:53:29Z"
      },
      {
        id: 109,
        area: {
          id: 2114,
          name: "Italy"
        },
        name: "Juventus FC",
        shortName: "Juventus",
        tla: "JUVE",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/d/d2/Juventus_Turin.svg",
        address: "Corso Galileo Ferraris, 32 Torino 10128",
        phone: "+39 (011) 65631",
        website: "http://www.juventus.com",
        email: "francesco.gianello@juventus.com",
        founded: 1897,
        clubColors: "White / Black",
        venue: null,
        lastUpdated: "2018-06-02T14:56:37Z"
      },
      {
        id: 110,
        area: {
          id: 2114,
          name: "Italy"
        },
        name: "SS Lazio",
        shortName: "Lazio",
        tla: "LAZ",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/thumb/4/47/Lazio_Rom.svg/500px-Lazio_Rom.svg.png",
        address: "Via di Santa Cornelia, 1000 Formello 00060",
        phone: "+39 (06) 976071",
        website: "http://www.sslazio.it",
        email: "segreteria.lazio@sslazio.it",
        founded: 1900,
        clubColors: "White / Sky Blue",
        venue: null,
        lastUpdated: "2018-06-02T14:56:40Z"
      },
      {
        id: 112,
        area: {
          id: 2114,
          name: "Italy"
        },
        name: "Parma Calcio 1913",
        shortName: "Parma",
        tla: "FCP",
        crestUrl: "http://upload.wikimedia.org/wikipedia/de/e/e2/FC_Parma.svg",
        address: "Strada Carlo Pisacane, 4 Parma 43121",
        phone: "+39 (521) 170591",
        website: "http://www.parmacalcio1913.com",
        email: "info@parmacalcio1913.com",
        founded: 1913,
        clubColors: "White / Black",
        venue: null,
        lastUpdated: "2018-06-02T14:56:43Z"
      },
      {
        id: 113,
        area: {
          id: 2114,
          name: "Italy"
        },
        name: "SSC Napoli",
        shortName: "Napoli",
        tla: "SSC",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/commons/2/28/S.S.C._Napoli_logo.svg",
        address:
          "Centro Tecnico di Castel Volturno, Via S.S. Domitana, Km 35 Castel Volturno 81030",
        phone: "+39 (081) 5095344",
        website: "http://www.sscnapoli.it",
        email: "infocalcio@sscn.it",
        founded: 1904,
        clubColors: "Sky Blue / White",
        venue: null,
        lastUpdated: "2018-06-02T14:56:46Z"
      },
      {
        id: 115,
        area: {
          id: 2114,
          name: "Italy"
        },
        name: "Udinese Calcio",
        shortName: "Udinese",
        tla: null,
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/b/b1/Udinese_Calcio.svg",
        address: "Via Agostino e Angelo Candolini 2 Udine 33100",
        phone: "+39 (0432) 544911",
        website: "http://www.udinese.it",
        email: "udinese@udinese.it",
        founded: 1896,
        clubColors: "White / Black",
        venue: null,
        lastUpdated: "2018-05-31T16:28:23Z"
      },
      {
        id: 445,
        area: {
          id: 2114,
          name: "Italy"
        },
        name: "Empoli FC",
        shortName: "Empoli",
        tla: "EMP",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/4/42/Logo_FC_Empoli.svg",
        address: "Piazza Matteotti Empoli 50053",
        phone: "+39 (05) 7172212",
        website: "http://www.empolicalcio.net",
        email: "empoli@lega-calcio.it",
        founded: 1920,
        clubColors: "Blue / White",
        venue: null,
        lastUpdated: "2018-06-02T14:57:06Z"
      },
      {
        id: 470,
        area: {
          id: 2114,
          name: "Italy"
        },
        name: "Frosinone Calcio",
        shortName: "Frosinone",
        tla: null,
        crestUrl:
          "https://upload.wikimedia.org/wikipedia/it/c/c3/Frosinonestemma.png",
        address: "Via Marittima, 2 Frosinone 03100",
        phone: "+39 (0775) 822013",
        website: "http://www.frosinonecalcio.com",
        email: "frosinonecalcio@libero.it",
        founded: 1912,
        clubColors: "Yellow / Blue",
        venue: null,
        lastUpdated: "2018-06-02T14:58:35Z"
      },
      {
        id: 471,
        area: {
          id: 2114,
          name: "Italy"
        },
        name: "US Sassuolo Calcio",
        shortName: "Sassuolo",
        tla: "SASS",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/a/a3/US_Sassuolo_Calcio.svg",
        address: "Piazza Risorgimento, 47 Sassuolo 41049",
        phone: "+39 (0536) 882645",
        website: "http://www.sassuolocalcio.it",
        email: "info@sassuolocalcio.it",
        founded: 1922,
        clubColors: "Green / Black",
        venue: null,
        lastUpdated: "2018-05-31T16:28:25Z"
      },
      {
        id: 584,
        area: {
          id: 2114,
          name: "Italy"
        },
        name: "UC Sampdoria",
        shortName: "Sampdoria",
        tla: "SAM",
        crestUrl: null,
        address: "Piazza Borgo Pila, 39 Genova 16129",
        phone: "+39 (010) 5316711",
        website: "http://www.sampdoria.it",
        email: "info@sampdoria.it",
        founded: 1946,
        clubColors: "Blue / White / Red",
        venue: "Stadio Comunale Luigi Ferraris",
        lastUpdated: "2018-08-31T09:55:44Z"
      },
      {
        id: 586,
        area: {
          id: 2114,
          name: "Italy"
        },
        name: "Torino FC",
        shortName: "Torino",
        tla: "FCT",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/2/2e/Torino_FC_Logo.svg",
        address: "Via Arcivescovado 1 Torino 10122",
        phone: "+39 (01) 11970034",
        website: "http://www.torinofc.it",
        email: "info@toro.it",
        founded: 1894,
        clubColors: "Brown / White",
        venue: null,
        lastUpdated: "2018-05-31T16:28:28Z"
      },
      {
        id: 1107,
        area: {
          id: 2114,
          name: "Italy"
        },
        name: "SPAL 2013",
        shortName: "SPAL 2013",
        tla: "SPA",
        crestUrl: null,
        address: "Corso Piave 28 Ferrara 44100",
        phone: "+39 (0532) 52752",
        website: "http://www.spal2013.it",
        email: "info@spal1907.net",
        founded: 1907,
        clubColors: null,
        venue: "Stadio Paolo Mazza",
        lastUpdated: "2018-08-31T09:53:50Z"
      }
    ]
  },
  {
    count: 20,
    filters: {},
    competition: {
      id: 2014,
      area: {
        id: 2224,
        name: "Spain"
      },
      name: "Primera Division",
      code: "PD",
      plan: "TIER_ONE",
      lastUpdated: "2018-09-03T15:25:00Z"
    },
    season: {
      id: 281,
      startDate: "2018-08-17",
      endDate: "2019-05-26",
      currentMatchday: 3
    },
    teams: [
      {
        id: 77,
        area: {
          id: 2224,
          name: "Spain"
        },
        name: "Athletic Club",
        shortName: "Athletic Club",
        tla: "BIL",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/7/7f/Athletic_Club_Bilbao.svg",
        address: "Ibaigane, Alameda Mazarredo, 23 Bilbao 48009",
        phone: "+34 (944) 240877",
        website: "http://www.athletic-club.eus",
        email: "prensa@athletic-club.net",
        founded: 1898,
        clubColors: "Red / White / Black",
        venue: null,
        lastUpdated: "2018-06-02T14:14:40Z"
      },
      {
        id: 78,
        area: {
          id: 2224,
          name: "Spain"
        },
        name: "Club Atlético de Madrid",
        shortName: "Club Atlético",
        tla: "ATM",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/c/c1/Atletico_Madrid_logo.svg",
        address: "Paseo Virgen del Puerto, 67 Madrid 28005",
        phone: "+34 (913) 669048",
        website: "http://www.clubatleticodemadrid.com",
        email: "comunicacion@clubatleticodemadrid.com",
        founded: 1903,
        clubColors: "Red / White / Blue",
        venue: null,
        lastUpdated: "2018-06-02T12:59:05Z"
      },
      {
        id: 80,
        area: {
          id: 2224,
          name: "Spain"
        },
        name: "RCD Espanyol de Barcelona",
        shortName: "Espanyol",
        tla: "ESP",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/a/a7/RCD_Espanyol_De_Barcelona.svg",
        address: "Avenida Baix Llobregat, 100 Cornellà de Llobregat 08940",
        phone: "+34 (932) 927700",
        website: "http://www.rcdespanyol.com",
        email: "info@rcdespanyol",
        founded: 1900,
        clubColors: "Blue / White",
        venue: null,
        lastUpdated: "2018-06-02T14:14:58Z"
      },
      {
        id: 81,
        area: {
          id: 2224,
          name: "Spain"
        },
        name: "FC Barcelona",
        shortName: "Barcelona",
        tla: "FCB",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/a/aa/Fc_barcelona.svg",
        address: "Avenida Arístides Maillol s/n Barcelona 08028",
        phone: "+34 (902) 189900",
        website: "http://www.fcbarcelona.com",
        email: "secretaria@fcbarcelona.com",
        founded: 1899,
        clubColors: "Red / Navy Blue / Orange",
        venue: null,
        lastUpdated: "2018-06-02T12:58:09Z"
      },
      {
        id: 82,
        area: {
          id: 2224,
          name: "Spain"
        },
        name: "Getafe CF",
        shortName: "Getafe",
        tla: "GET",
        crestUrl:
          "https://upload.wikimedia.org/wikipedia/en/7/7f/Getafe_logo.png",
        address: "Avenida Teresa de Calcuta, s/n Getafe 28903",
        phone: "+34 (916) 959643",
        website: "http://www.getafecf.com",
        email: "fsantos@getafecf.com",
        founded: 1946,
        clubColors: "Blue / White",
        venue: "Coliseum Alfonso Pérez",
        lastUpdated: "2018-08-31T09:47:17Z"
      },
      {
        id: 86,
        area: {
          id: 2224,
          name: "Spain"
        },
        name: "Real Madrid CF",
        shortName: "Real Madrid",
        tla: "MAD",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/3/3f/Real_Madrid_Logo.svg",
        address: "Avenida Concha Espina, 1 Madrid 28036",
        phone: "+34 (913) 984300",
        website: "http://www.realmadrid.com",
        email: "atencionpublico@corp.realmadrid.com",
        founded: 1902,
        clubColors: "White / Purple",
        venue: null,
        lastUpdated: "2018-06-02T12:58:10Z"
      },
      {
        id: 87,
        area: {
          id: 2224,
          name: "Spain"
        },
        name: "Rayo Vallecano de Madrid",
        shortName: "Rayo Vallecano",
        tla: "VALL",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/1/12/Rayo_vallecano_madrid.svg",
        address: "Calle del Payaso Fofó, s/n Madrid 28018",
        phone: "+34 (914) 782253",
        website: "http://www.rayovallecano.es",
        email: "info@rayovallecano.es",
        founded: 1924,
        clubColors: "White / Red",
        venue: null,
        lastUpdated: "2018-06-02T14:13:30Z"
      },
      {
        id: 88,
        area: {
          id: 2224,
          name: "Spain"
        },
        name: "Levante UD",
        shortName: "Levante",
        tla: "LUD",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/1/1f/Levante_ud.svg",
        address: "Calle San Vicente de Paúl, 44 Valencia 46019",
        phone: "+34 (902) 220304",
        website: "http://www.levanteud.com",
        email: "admon@levanteud.es",
        founded: 1909,
        clubColors: "Crimson / Blue",
        venue: null,
        lastUpdated: "2018-06-02T14:15:39Z"
      },
      {
        id: 90,
        area: {
          id: 2224,
          name: "Spain"
        },
        name: "Real Betis Balompié",
        shortName: "Real Betis",
        tla: "BET",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/4/43/Real_Betis.svg",
        address: "Avenida de Heliópolis, s/n Sevilla 41012",
        phone: "+34 (902) 191907",
        website: "http://www.realbetisbalompie.es",
        email: "info@realbetisbalompie.es",
        founded: 1907,
        clubColors: "Green / White",
        venue: null,
        lastUpdated: "2018-06-02T14:15:53Z"
      },
      {
        id: 92,
        area: {
          id: 2224,
          name: "Spain"
        },
        name: "Real Sociedad de Fútbol",
        shortName: "Real Sociedad",
        tla: "RSS",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/5/55/Real_Sociedad_San_Sebasti%C3%A1n.svg",
        address: "Anoeta Pasalekua, 1 San Sebastián 20014",
        phone: "+34 (943) 462833",
        website: "http://www.realsociedad.com",
        email: "realsoc@realsociedad.com",
        founded: 1903,
        clubColors: "Blue / White",
        venue: null,
        lastUpdated: "2018-06-02T14:16:05Z"
      },
      {
        id: 94,
        area: {
          id: 2224,
          name: "Spain"
        },
        name: "Villarreal CF",
        shortName: "Villarreal",
        tla: "VCF",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/7/70/Villarreal_CF_logo.svg",
        address: "Camino Miralcamp, s/n Villarreal 12540",
        phone: "+34 (964) 500250",
        website: "http://www.villarrealcf.es",
        email: "villarrealcf@villarrealcf.es",
        founded: 1923,
        clubColors: "Yellow / Blue",
        venue: null,
        lastUpdated: "2018-06-02T14:16:09Z"
      },
      {
        id: 95,
        area: {
          id: 2224,
          name: "Spain"
        },
        name: "Valencia CF",
        shortName: "Valencia",
        tla: "VAL",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/7/75/FC_Valencia.svg",
        address: "Plaza del Valencia Club de Fútbol, 2 Valencia 46010",
        phone: "+34 (902) 011919",
        website: "http://www.valenciacf.com",
        email: "informacion@valenciacf.es",
        founded: 1919,
        clubColors: "White / Orange / Black",
        venue: null,
        lastUpdated: "2018-06-02T14:16:17Z"
      },
      {
        id: 250,
        area: {
          id: 2224,
          name: "Spain"
        },
        name: "Real Valladolid CF",
        shortName: "Valladolid",
        tla: null,
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/6/6e/Real_Valladolid_Logo.svg",
        address: "Avenida del Mundial, 82 Valladolid 47014",
        phone: "+34 (983) 360342",
        website: "http://www.realvalladolid.es",
        email: "realvalladolid@realvalladolid.es",
        founded: 1928,
        clubColors: "Violet / White",
        venue: null,
        lastUpdated: "2018-06-02T14:14:05Z"
      },
      {
        id: 263,
        area: {
          id: 2224,
          name: "Spain"
        },
        name: "Deportivo Alavés",
        shortName: "Alavés",
        tla: "ALA",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/en/2/2e/Deportivo_Alaves_logo.svg",
        address: "Mendizorroza, Paseo Cervantes, s/n Vitoria 01007",
        phone: "+34 (945) 131018",
        website: "http://www.alaves.com",
        email: "deportivoalavessad@alaves.com",
        founded: 1921,
        clubColors: "Blue / White",
        venue: null,
        lastUpdated: "2018-06-02T14:17:01Z"
      },
      {
        id: 278,
        area: {
          id: 2224,
          name: "Spain"
        },
        name: "SD Eibar",
        shortName: "Eibar",
        tla: "EIB",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/en/7/75/SD_Eibar_logo.svg",
        address: "Ipurua Kalea, 2 Eibar 20600",
        phone: "+34 (943) 201831",
        website: "http://www.sdeibar.com",
        email: "sdeibar@sdeibar.com",
        founded: 1940,
        clubColors: "Red / Blue",
        venue: null,
        lastUpdated: "2018-06-02T14:17:33Z"
      },
      {
        id: 298,
        area: {
          id: 2224,
          name: "Spain"
        },
        name: "Girona FC",
        shortName: "Girona FC",
        tla: "GFC",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/en/9/90/For_article_Girona_FC.svg",
        address: "Avinguda de Montilivi, 141 Girona 17003",
        phone: "+34 (902) 548454",
        website: "http://www.gironafc.cat",
        email: "info@gironafc.cat",
        founded: 1930,
        clubColors: "Red / White / Blue",
        venue: null,
        lastUpdated: "2018-06-02T14:18:06Z"
      },
      {
        id: 299,
        area: {
          id: 2224,
          name: "Spain"
        },
        name: "SD Huesca",
        shortName: "Huesca",
        tla: null,
        crestUrl:
          "https://upload.wikimedia.org/wikipedia/en/1/11/Sd_huesca.png",
        address: "Calle Cocoron, s/n null 22004",
        phone: "+34 (974) 212679",
        website: "http://www.sdhuesca.es",
        email: "info@sdhuesca.es",
        founded: 1910,
        clubColors: "Crimson / Navy Blue",
        venue: null,
        lastUpdated: "2018-06-02T14:15:00Z"
      },
      {
        id: 558,
        area: {
          id: 2224,
          name: "Spain"
        },
        name: "RC Celta de Vigo",
        shortName: "Celta Vigo",
        tla: "VIG",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/0/0c/Celta_Vigo.svg",
        address: "Calle del Conde de Gondomar, 1 Vigo 36203",
        phone: "+34 (986) 110900",
        website: "http://www.celtavigo.net",
        email: "comunicacion@celtavigo.net",
        founded: 1923,
        clubColors: "Sky Blue / White",
        venue: null,
        lastUpdated: "2018-06-02T14:18:40Z"
      },
      {
        id: 559,
        area: {
          id: 2224,
          name: "Spain"
        },
        name: "Sevilla FC",
        shortName: "Sevilla",
        tla: "SEV",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/en/8/86/Sevilla_cf_200px.png",
        address: "Calle Sevilla Fútbol Club, s/n Sevilla 41005",
        phone: "+34 (902) 510011",
        website: "http://www.sevillafc.es",
        email: "sevillafc@sevillafc.es",
        founded: 1905,
        clubColors: "White / Red",
        venue: null,
        lastUpdated: "2018-06-02T12:51:15Z"
      },
      {
        id: 745,
        area: {
          id: 2224,
          name: "Spain"
        },
        name: "CD Leganés",
        shortName: "Leganés",
        tla: "LEG",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/en/thumb/0/02/Club_Deportivo_Legan%C3%A9s.png/180px-Club_Deportivo_Legan%C3%A9s.png",
        address: "Calle Arquitectura, s/n Leganés 28914",
        phone: "+34 (916) 888629",
        website: "http://www.deportivoleganes.com",
        email: "comunicacion@deportivoleganes.com",
        founded: 1928,
        clubColors: "Blue / White",
        venue: null,
        lastUpdated: "2018-06-02T14:19:05Z"
      }
    ]
  },
  {
    count: 20,
    filters: {},
    competition: {
      id: 2015,
      area: {
        id: 2081,
        name: "France"
      },
      name: "Ligue 1",
      code: "FL1",
      plan: "TIER_ONE",
      lastUpdated: "2018-09-03T22:50:06Z"
    },
    season: {
      id: 177,
      startDate: "2018-08-10",
      endDate: "2019-05-25",
      currentMatchday: 4
    },
    teams: [
      {
        id: 511,
        area: {
          id: null,
          name: null
        },
        name: "Toulouse FC",
        shortName: "Toulouse FC",
        tla: "TOU",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Toulouse_Logo.svg",
        address: "1 allée Gabriel Biénèsm, BP 54023 Toulouse 31028",
        phone: "+33 (0892) 704000",
        website: "http://www.tfc.info",
        email: null,
        founded: 1937,
        clubColors: "Violet / White",
        venue: null,
        lastUpdated: null
      },
      {
        id: 514,
        area: {
          id: 2000,
          name: "Afghanistan"
        },
        name: "SM Caen",
        shortName: "SM Caen",
        tla: "SMC",
        crestUrl:
          "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/SM_Caen_2016_logo.svg/21px-SM_Caen_2016_logo.svg.png",
        address: "Boulevard G. Pompidou Caen 14000",
        phone: "+33 (0892) 700148",
        website: "http://www.smcaen.fr",
        email: "lglaize@smcaen.fr",
        founded: 1892,
        clubColors: "Red / Blue",
        venue: null,
        lastUpdated: "2018-08-31T09:44:47Z"
      },
      {
        id: 516,
        area: {
          id: null,
          name: null
        },
        name: "Olympique de Marseille",
        shortName: "Marseille",
        tla: "MAR",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/2/27/Olympique_Marseille_Logo.svg",
        address: "La Commanderie, 33, traverse de La Martine Marseille 13012",
        phone: "+33 (049) 1765609",
        website: "http://www.om.net",
        email: "om@olympiquedemarseille.com",
        founded: 1898,
        clubColors: "White / Blue",
        venue: null,
        lastUpdated: null
      },
      {
        id: 518,
        area: {
          id: null,
          name: null
        },
        name: "Montpellier HSC",
        shortName: "Montpellier",
        tla: "MON",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/3/35/HSC_Montpellier_Logo.svg",
        address: "Domaine de Grammont CS 79041 Montpellier 34967",
        phone: "+33 (0467) 154600",
        website: "http://www.mhscfoot.com",
        email: "accueil@mhscfoot.com",
        founded: 1970,
        clubColors: "Blue / Orange",
        venue: null,
        lastUpdated: null
      },
      {
        id: 521,
        area: {
          id: null,
          name: null
        },
        name: "Lille OSC",
        shortName: "Lille OSC",
        tla: "OSC",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/0/08/LOSC_Lille_Crest_2012.png",
        address: "Grand Rue 59, 780 Camphin-en-Pévèle Lille null",
        phone: "+33 (0892) 685672",
        website: "http://www.losc.fr",
        email: "losclillemetropole.500054@ligue59-62.fr",
        founded: 1944,
        clubColors: "White / Red",
        venue: null,
        lastUpdated: null
      },
      {
        id: 522,
        area: {
          id: 2081,
          name: "France"
        },
        name: "OGC de Nice Côte d'Azur",
        shortName: "OGC Nice",
        tla: "NIC",
        crestUrl:
          "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/OGC_Nice_logo.svg/24px-OGC_Nice_logo.svg",
        address: "35, avenue du Ray Nice 06100",
        phone: "+33 (089) 2700238",
        website: "http://www.ogcnice.com",
        email: "ogcnice.association@orange.fr",
        founded: 1904,
        clubColors: "Red / Black",
        venue: null,
        lastUpdated: "2018-08-31T09:46:07Z"
      },
      {
        id: 523,
        area: {
          id: null,
          name: null
        },
        name: "Olympique Lyonnais",
        shortName: "Olympique Lyon",
        tla: "OLY",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/f/f1/Olympique_Lyon.svg",
        address: "350 avenue Jean Jaurès Lyon 69007",
        phone: "+33 (0426) 296532",
        website: "http://www.olweb.fr",
        email: "olympique-lyonnais@lrafoot.org",
        founded: 1896,
        clubColors: "White / Red / Blue",
        venue: null,
        lastUpdated: null
      },
      {
        id: 524,
        area: {
          id: 2081,
          name: "France"
        },
        name: "Paris Saint-Germain FC",
        shortName: "PSG",
        tla: "PSG",
        crestUrl:
          "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/316px-Paris_Saint-Germain_F.C.svg",
        address: "24, rue de Commandant Guibaud Paris 7501",
        phone: "+33 (0139) 733467",
        website: "http://www.psg.fr",
        email: "communaute@psg.fr",
        founded: 1904,
        clubColors: "Red / Blue / White",
        venue: null,
        lastUpdated: "2018-08-31T09:45:14Z"
      },
      {
        id: 526,
        area: {
          id: null,
          name: null
        },
        name: "FC Girondins de Bordeaux",
        shortName: "Bordeaux",
        tla: "BOR",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/e/ea/Girondins_Bordeaux_Logo.svg",
        address: "Rue Joliot-Curie, Le Haillan Bordeaux 33185",
        phone: "+33 (0556) 161122",
        website: "http://www.girondins.com",
        email: "cberteau@girondins.com",
        founded: 1881,
        clubColors: "Blue / White",
        venue: null,
        lastUpdated: "2018-08-17T18:13:47Z"
      },
      {
        id: 527,
        area: {
          id: null,
          name: null
        },
        name: "AS Saint-Étienne",
        shortName: "Saint-Étienne",
        tla: "ETI",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/b/b1/AS_Saint-Etienne_%28aktuell%29.svg",
        address: "11 rue de Verdun L'Étrat 42580",
        phone: "+33 (0477) 929899",
        website: "http://www.asse.fr",
        email: "asse@lrafoot.org",
        founded: 1919,
        clubColors: "Green / White",
        venue: null,
        lastUpdated: null
      },
      {
        id: 528,
        area: {
          id: null,
          name: null
        },
        name: "Dijon Football Côte d'Or",
        shortName: "Dijon",
        tla: null,
        crestUrl: "http://upload.wikimedia.org/wikipedia/de/e/e1/FCO_Dijon.svg",
        address: "9 rue Ernest Champaux Dijon 21000",
        phone: "+33 (0380) 650977",
        website: "http://www.dfco.fr",
        email: "sportif.asso@dfco.fr",
        founded: 1936,
        clubColors: "Red / White",
        venue: null,
        lastUpdated: null
      },
      {
        id: 529,
        area: {
          id: null,
          name: null
        },
        name: "Stade Rennais FC 1901",
        shortName: "Stade Rennes",
        tla: "REN",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/b/b6/Stade_Rennais_Football_Club.svg",
        address: "La Piverdière - Chemin de la Taupinais CS 5390 Rennes 35039",
        phone: "+33 (0820) 000035",
        website: "http://www.staderennais.com",
        email: "4500015@footlbf.fr",
        founded: 1901,
        clubColors: "Red / Black",
        venue: null,
        lastUpdated: null
      },
      {
        id: 530,
        area: {
          id: 2000,
          name: "Afghanistan"
        },
        name: "Amiens SC",
        shortName: "Amiens SC",
        tla: null,
        crestUrl:
          "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Amiens_SC_Logo.svg/300px-Amiens_SC_Logo.svg",
        address: "Stade de la Licorne Rue du Chapitre Amiens 80016",
        phone: "+33 (0322) 665800",
        website: "http://www.amiensfootball.com",
        email: "gilbert.morel@amiensfootball.com",
        founded: 1901,
        clubColors: "Black / White / Grey",
        venue: null,
        lastUpdated: "2018-08-31T09:46:24Z"
      },
      {
        id: 532,
        area: {
          id: null,
          name: null
        },
        name: "Angers SCO",
        shortName: "Angers SCO",
        tla: null,
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/0/0f/SCO_Angers.svg",
        address: "73 boulevard Jacques Portet, BP 20212 Angers 49002",
        phone: "+33 (0892) 390820",
        website: "http://www.angers-sco.fr",
        email: null,
        founded: 1919,
        clubColors: "Black / White / Gold",
        venue: null,
        lastUpdated: null
      },
      {
        id: 538,
        area: {
          id: null,
          name: null
        },
        name: "En Avant Guingamp",
        shortName: "EA Guingamp",
        tla: "GUI",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/a/ae/EA_Guingamp_Logo.svg",
        address: "15, bd Clemenceau B.P. 50222 Guingamp 22202",
        phone: "+33 (0296) 401313",
        website: "http://www.eaguingamp.com",
        email: "site@eaguingamp.com",
        founded: 1912,
        clubColors: "Red / Black",
        venue: null,
        lastUpdated: null
      },
      {
        id: 543,
        area: {
          id: 2081,
          name: "France"
        },
        name: "FC Nantes",
        shortName: "FC Nantes",
        tla: "NAN",
        crestUrl:
          "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/FC_Nantes_logo.svg/270px-FC_Nantes_logo.svg",
        address: "Centre Sportif José Arribas, La Jonelière Nantes 44240",
        phone: "+33 (0892) 707937",
        website: "http://www.fcnantes.com",
        email: "contact@fcnantes.com",
        founded: 1943,
        clubColors: "Green / Yellow",
        venue: "Stade de la Beaujoire - Louis Fonteneau",
        lastUpdated: "2018-08-31T09:46:41Z"
      },
      {
        id: 547,
        area: {
          id: null,
          name: null
        },
        name: "Stade de Reims",
        shortName: "Stade de Reims",
        tla: "REI",
        crestUrl:
          "http://upload.wikimedia.org/wikipedia/de/9/9e/Stade_Reims_Logo.svg",
        address: "26 rue Robert-Fulton Reims 51100",
        phone: "+33 (0891) 024933",
        website: "http://www.stade-de-reims.com",
        email: "contact@stade-de-reims.com",
        founded: 1909,
        clubColors: "Red / White / Cyan",
        venue: null,
        lastUpdated: null
      },
      {
        id: 548,
        area: {
          id: 2152,
          name: "Monaco"
        },
        name: "AS Monaco FC",
        shortName: "Monaco",
        tla: "MON",
        crestUrl: "http://upload.wikimedia.org/wikipedia/de/3/3c/AS_Monaco.svg",
        address: "Avenue des Castellans Monaco 98000",
        phone: "+33 (377) 92057473",
        website: "http://www.asmonaco.com",
        email: null,
        founded: 1919,
        clubColors: "Red / White",
        venue: null,
        lastUpdated: "2018-06-02T12:59:10Z"
      },
      {
        id: 556,
        area: {
          id: 2000,
          name: "Afghanistan"
        },
        name: "Nîmes Olympique",
        shortName: "Nîmes",
        tla: null,
        crestUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d7/LogoNO-2018.png",
        address: "Stade des Costières 123<br>Avenue de la Bouvine Nîmes 30900",
        phone: "+33 (0466) 290876",
        website: "http://www.nimes-olympique.com",
        email: "nimesolympiqueassociation@wanadoo.fr",
        founded: 1901,
        clubColors: "Red / White",
        venue: null,
        lastUpdated: "2018-08-31T09:44:29Z"
      },
      {
        id: 576,
        area: {
          id: 2000,
          name: "Afghanistan"
        },
        name: "RC Strasbourg Alsace",
        shortName: "RC Strasbourg",
        tla: null,
        crestUrl:
          "https://upload.wikimedia.org/wikipedia/en/9/97/Rcstrasbourg.png",
        address: "null Strasbourg null",
        phone: null,
        website: "http://www.rcstrasbourgalsace.fr",
        email: null,
        founded: 1906,
        clubColors: "Blue / White",
        venue: null,
        lastUpdated: "2018-08-31T09:45:30Z"
      }
    ]
  }
];

export default teams;
